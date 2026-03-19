import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { schedule } from "@ember/runloop";
import { on } from "@ember/modifier";
import { modifier } from "ember-modifier";
import { fn } from "@ember/helper";
import { getComponentClass } from "../../../utils/component-config";
import {
	buildFieldClass,
	buildAriaDescribedBy,
	isInvalidState,
	buildFloatLabelClass,
	getFloatLabelLabelClass,
	resolveFloatLabelText
} from "../../../utils/input-util";
import { guidFor } from "@ember/object/internals";
import { t } from "../../../utils/i18n";
import appendToBody from "../../../modifiers/append-to-body";
import { getOverlayZIndexAboveMask } from "../../../utils/overlay-helpers";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxProgressSpinner from "../ulx-progressspinner/index.gjs";
import { eq, and, not, or } from "ember-truth-helpers";
import { hash, concat } from "@ember/helper";

/**
 * Dropdown select: single selection from a list with optional filter, groups, templates.
 * Imports and uses ember-truth-helpers (eq, and, not, or) in templates. Supports: basic, checkmark,
 * editable, group, template, filter, clear icon, loading, float label, filled, invalid,
 * disabled. Accessible: listbox role, keyboard nav, ARIA.
 *
 * @class UlxDropdown
 * @param {any} [value] - Selected value (controlled).
 * @param {Array} [options=[]] - List of options (objects or scalars). Use optionLabel/optionValue for object shape.
 * @param {string} [optionLabel='label'] - Property name or path for option display text.
 * @param {string} [optionValue='value'] - Property name or path for option value.
 * @param {string} [optionImageUrl] - Property name or path for option image URL (e.g. for value/item templates). When set, yielded hash includes imageUrl.
 * @param {string} [optionGroupLabel] - When set, options are groups; this is the group label key.
 * @param {string} [optionGroupChildren='items'] - When optionGroupLabel is set, key for group children.
 * Group objects may include optional imageUrl (string) and icon (icon name string) for default header rendering.
 * Named block <:group> - When provided, custom content for each group header. Receives (hash label group).
 * Named block <:value> - When provided, custom content for the selected value in the trigger. Receives (hash selectedOption selectedLabel placeholder). Show placeholder when selectedOption is null.
 * Named block <:item> - When provided, custom content for each option in the list. Receives (hash option label index).
 * Named block <:footer> - When provided, custom content for the panel footer (e.g. selected summary). Receives (hash selectedOption).
 * Named block <:icon> - When provided, custom dropdown trigger icon. Receives (hash overlayVisible) so icon can change when open/closed.
 * @param {string} [placeholder] - Placeholder when nothing selected.
 * @param {boolean} [disabled=false] - Disables the dropdown.
 * @param {boolean} [loading=false] - Shows progress spinner instead of dropdown icon.
 * @param {boolean} [invalid=false] - Invalid state styling.
 * @param {boolean} [editable=false] - Trigger is editable input; type to filter.
 * @param {boolean} [filter=false] - Show filter input in panel.
 * @param {boolean} [showClear=false] - Show clear icon when value is set.
 * @param {boolean} [checkmark=false] - Show checkmark on selected item.
 * @param {boolean} [filled=false] - Filled variant styling.
 * @param {boolean|string} [floatLabel=false] - Float label mode.
 * @param {string} [filterPlaceholder] - Placeholder for filter input.
 * @param {string} [emptyMessage] - Message when options list is empty.
 * @param {string} [emptyFilterMessage] - Message when filter has no results.
 * @param {string} [scrollHeight='232px'] - Max height of option list (CSS value).
 * @param {string} [label] - Label text; rendered inside the component (UlxInput-style).
 * @param {string} [labelRight] - Optional right-side label text (e.g. meta); rendered inside the component.
 * @param {string} [helpText] - Help text below field; rendered inside the component.
 * @param {string} [error] - Error message below field; sets invalid state; rendered inside the component.
 * @param {string} [fieldClass] - Extra class for field wrapper.
 * @param {string} [dataQa] - Root `data-qa` override for automation (default `ulx-dropdown`).
 * @param {string} [id] - Id for the trigger (for aria-labelledby etc.).
 * @param {string} [key] - Stable key for auto-generated id.
 * @param {boolean} [required=false] - Required field.
 * @param {Function} [onChange] - (value) => void when selection changes.
 * @param {Function} [onFocus] - Focus callback.
 * @param {Function} [onBlur] - Blur callback.
 * @param {Function} [onFilter] - (filterValue) => void when filter input changes.
 * @param {Function} [onShow] - When overlay opens.
 * @param {Function} [onHide] - When overlay closes.
 * @param {Function} [optionDisabled] - (option) => boolean or property key to disable options.
 * @param {number} [zIndex] - Overlay panel z-index (e.g. when appended to body).
 */
export default class UlxDropdown extends Component {
	@service modalStack;

	@action
	handleFocus(event) {
		const onFocusCallback = this.args.onFocus;
		if (typeof onFocusCallback === "function") onFocusCallback(event);
	}

	@action
	handleBlur(event) {
		const onBlurCallback = this.args.onBlur;
		if (typeof onBlurCallback === "function") onBlurCallback(event);
	}

	@tracked overlayVisible = false;
	@tracked focusedOptionIndex = -1;
	@tracked showOptionKeyboardFocusRing = false;
	/** Cleared next microtask; avoids showing the option keyboard ring when the editable field opens from a click. */
	@tracked suppressKeyboardOptionRingForFocus = false;
	@tracked filterValue = "";
	@tracked triggerElement = null;
	@tracked panelElement = null;
	@tracked panelPosition = "below";

	get key() {
		return this.args.key ?? guidFor(this);
	}

	get triggerId() {
		const { id } = this.args;
		return id ?? `ulx-dropdown-${this.key}`;
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-dropdown";
	}

	get baseClass() {
		return getComponentClass("dropdown");
	}

	get rootClasses() {
		const {
			disabled = false,
			invalid: invalidArg = false,
			error,
			filled = false,
			loading = false,
			size = "m-size",
			customClass
		} = this.args;
		const invalid = isInvalidState(invalidArg, error);
		const parts = [this.baseClass];
		size && parts.push(size);
		(disabled || loading) && parts.push("disabled");
		invalid && parts.push("invalid");
		loading && parts.push("loading");
		filled && parts.push("filled");
		this.overlayVisible && parts.push("open");
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get isTriggerDisabled() {
		return !!this.args.disabled || !!this.args.loading;
	}

	get dropdownSize() {
		return this.args.size ?? "m-size";
	}

	get focusItemClass() {
		return getComponentClass("focus");
	}

	dismissKeyboardOptionFocusRing() {
		this.showOptionKeyboardFocusRing = false;
	}

	@action
	onTriggerPointerIntent() {
		if (this.isTriggerDisabled) return;
		this.dismissKeyboardOptionFocusRing();
	}

	@action
	onOptionPanelPointerIntent() {
		this.dismissKeyboardOptionFocusRing();
	}

	@action
	onEditableInputPointerDown() {
		this.suppressKeyboardOptionRingForFocus = true;
		queueMicrotask(() => {
			this.suppressKeyboardOptionRingForFocus = false;
		});
	}

	get fieldClass() {
		return buildFieldClass(this.args.fieldClass);
	}

	get floatLabelText() {
		const { floatLabel, label } = this.args;
		return resolveFloatLabelText(floatLabel, label);
	}

	get floatLabelClass() {
		const { size = "m-size", filled } = this.args;
		return buildFloatLabelClass({
			size,
			filled,
			invalid: this.isInvalid,
			disabled: this.isTriggerDisabled
		});
	}

	get floatLabelLabelClass() {
		return getFloatLabelLabelClass();
	}

	get floatLabelRootClasses() {
		const rootClassesBase = this.rootClasses;
		const parts = rootClassesBase ? [rootClassesBase] : [];
		parts.push(getComponentClass("inputtext"));
		this.overlayVisible && parts.push("focus");
		this.selectedOption != null && parts.push("input-filled");
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get isInvalid() {
		const { invalid, error } = this.args;
		return isInvalidState(invalid, error);
	}

	get optionLabelKey() {
		return this.args.optionLabel ?? "label";
	}

	get optionValueKey() {
		return this.args.optionValue ?? "value";
	}

	get optionImageUrlKey() {
		return this.args.optionImageUrl ?? null;
	}

	get optionGroupChildrenKey() {
		return this.args.optionGroupChildren ?? "items";
	}

	get hasGroups() {
		return !!this.args.optionGroupLabel;
	}

	get groupLabelKey() {
		return this.args.optionGroupLabel ?? "label";
	}

	@action
	getResolved(option, key) {
		if (option == null) return undefined;
		const propertyPath = key ?? this.optionLabelKey;
		const pathSegments = propertyPath.split(".");
		let currentValue = option;
		for (const segment of pathSegments) {
			currentValue = currentValue?.[segment];
		}
		return currentValue;
	}

	@action
	getOptionLabel(option) {
		if (option == null) return "";
		if (typeof option === "object" && option !== null) {
			const label = this.getResolved(option, this.optionLabelKey);
			return label != null ? String(label) : "";
		}
		return String(option);
	}

	@action
	getOptionValue(option) {
		if (option == null) return undefined;
		if (typeof option === "object" && option !== null) {
			return this.getResolved(option, this.optionValueKey);
		}
		return option;
	}

	@action
	getOptionImageUrl(option) {
		const imageUrlKey = this.optionImageUrlKey;
		return imageUrlKey && option != null ? this.getResolved(option, imageUrlKey) : undefined;
	}

	@action
	getFlagClass(code) {
		return code ? `flag flag-${String(code).toLowerCase()}` : "";
	}

	@action
	isOptionDisabled(option) {
		if (option == null) return true;
		const { optionDisabled } = this.args;
		if (typeof optionDisabled === "function") return optionDisabled(option);
		if (typeof optionDisabled === "string") return !!this.getResolved(option, optionDisabled);
		return !!option.disabled;
	}

	get flatOptions() {
		const options = this.args.options ?? [];
		if (!this.hasGroups) return options;
		const flatOptionsWithGroup = [];
		const groupLabelKey = this.groupLabelKey;
		const childrenKey = this.optionGroupChildrenKey;
		for (const group of options) {
			const groupChildren = group?.[childrenKey] ?? [];
			for (const item of groupChildren) {
				flatOptionsWithGroup.push({
					item,
					groupLabel: this.getResolved(group, groupLabelKey),
					group
				});
			}
		}
		return flatOptionsWithGroup;
	}

	get allOptionsFlat() {
		const options = this.args.options ?? [];
		if (!this.hasGroups) return options;
		const flattenedOptions = [];
		const childrenKey = this.optionGroupChildrenKey;
		for (const group of options) {
			const groupChildren = group?.[childrenKey] ?? [];
			flattenedOptions.push(...groupChildren);
		}
		return flattenedOptions;
	}

	get unfilteredOptions() {
		return this.hasGroups ? this.flatOptions : (this.args.options ?? []);
	}

	get visibleOptions() {
		const sourceOptionsList = this.unfilteredOptions;
		const normalizedFilterValue = (this.filterValue ?? "").trim().toLowerCase();
		if (!normalizedFilterValue) return sourceOptionsList;

		if (this.hasGroups) {
			return sourceOptionsList.filter(({ item }) =>
				this.getOptionLabel(item).toLowerCase().includes(normalizedFilterValue)
			);
		}
		return sourceOptionsList.filter((option) =>
			this.getOptionLabel(option).toLowerCase().includes(normalizedFilterValue)
		);
	}

	get listOptions() {
		return this.args.editable ? this.unfilteredOptions : this.visibleOptions;
	}

	get selectedOption() {
		const selectedValue = this.args.value;
		const options = this.args.options ?? [];
		if (this.hasGroups) {
			const flattenedOptions = this.allOptionsFlat;
			return (
				flattenedOptions.find((option) =>
					this.valueEquals(this.getOptionValue(option), selectedValue)
				) ?? null
			);
		}
		return (
			options.find((option) => this.valueEquals(this.getOptionValue(option), selectedValue)) ?? null
		);
	}

	@action
	valueEquals(a, b) {
		if (a === b) return true;
		if (a == null || b == null) return false;
		if (typeof a === "object" && typeof b === "object")
			return JSON.stringify(a) === JSON.stringify(b);
		return false;
	}

	@action
	isOptionSelected(option) {
		if (option == null) return false;
		return this.valueEquals(this.getOptionValue(option), this.args.value);
	}

	get selectedLabel() {
		const selectedOptionItem = this.selectedOption;
		return selectedOptionItem != null ? this.getOptionLabel(selectedOptionItem) : null;
	}

	get selectedOptionImageUrl() {
		const imageUrlKey = this.optionImageUrlKey;
		const selectedOptionItem = this.selectedOption;
		return imageUrlKey && selectedOptionItem != null
			? this.getResolved(selectedOptionItem, imageUrlKey)
			: undefined;
	}

	get placeholderLabel() {
		return this.args.placeholder ?? "";
	}

	get triggerPlaceholderDisplay() {
		return this.args.floatLabel ? "" : this.placeholderLabel;
	}

	get contentPlaceholderClass() {
		return this.selectedLabel == null ? "place-holder" : "";
	}

	get editableInputValue() {
		return this.overlayVisible ? this.filterValue : (this.selectedLabel ?? "");
	}

	get inputtextClass() {
		return getComponentClass("inputtext");
	}

	get ariaDescribedBy() {
		return buildAriaDescribedBy(this.triggerId, {
			helpText: this.args.helpText,
			error: this.args.error
		});
	}

	get isRequired() {
		return !!this.args.required;
	}

	get clearButtonAriaLabel() {
		return t("lbl.clear.selection");
	}

	closeOverlay = modifier((element, [when], { onClose }) => {
		let clickListener = null;
		let keyListener = null;
		if (when && typeof onClose === "function") {
			clickListener = (e) => {
				const insideRoot = element && element.contains(e.target);
				const insidePanel = this.panelElement && this.panelElement.contains(e.target);
				if (!insideRoot && !insidePanel) onClose();
			};
			keyListener = (e) => {
				if (e.key === "Escape") {
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
					onClose();
				}
			};
			setTimeout(() => {
				document.addEventListener("click", clickListener, true);
				document.addEventListener("keydown", keyListener, true);
			}, 0);
		}
		return () => {
			if (clickListener) document.removeEventListener("click", clickListener, true);
			if (keyListener) document.removeEventListener("keydown", keyListener, true);
		};
	});

	positionPanel = modifier((element, [when, triggerEl, setPanelPosition]) => {
		if (!when || !element) return;

		const alignPanelToTrigger = () => {
			const trigger = this.triggerElement ?? triggerEl;
			if (!trigger) return;

			const targetRect = trigger.getBoundingClientRect();
			const scrollX = window.pageXOffset ?? document.documentElement.scrollLeft ?? 0;
			const scrollY = window.pageYOffset ?? document.documentElement.scrollTop ?? 0;

			element.style.position = "absolute";
			element.style.top = `${targetRect.bottom + scrollY + 2}px`;
			element.style.left = `${targetRect.left + scrollX}px`;
			element.style.width = `${targetRect.width}px`;
			element.style.minWidth = `${targetRect.width}px`;
			element.style.maxWidth = `${targetRect.width}px`;
			const zIndex =
				typeof this.args.zIndex === "number"
					? this.args.zIndex
					: getOverlayZIndexAboveMask(this.modalStack);
			element.style.zIndex = `${zIndex}`;
			element.style.margin = "0";
			element.style.padding = "0";

			const menuWidth = element.offsetWidth || targetRect.width;
			const menuHeight = element.offsetHeight || 200;

			let top = targetRect.bottom + 2;
			let left = targetRect.left;

			const viewportWidth = window.innerWidth;
			const viewportHeight = window.innerHeight;
			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

			if (left + menuWidth > viewportWidth - scrollbarWidth) {
				const leftPosition = targetRect.right - menuWidth;
				if (leftPosition >= 0) {
					left = leftPosition;
				} else {
					left = viewportWidth - menuWidth - scrollbarWidth - 10;
				}
			}
			if (left < 0) {
				left = 10;
			}

			if (top + menuHeight > viewportHeight) {
				const topPosition = targetRect.top - menuHeight - 2;
				if (topPosition >= 0) {
					top = topPosition;
					typeof setPanelPosition === "function" && setPanelPosition("above");
				} else {
					top = viewportHeight - menuHeight - 10;
					typeof setPanelPosition === "function" && setPanelPosition("below");
				}
			} else {
				typeof setPanelPosition === "function" && setPanelPosition("below");
			}
			if (top < 0) {
				top = 10;
			}

			element.style.top = `${top + scrollY}px`;
			element.style.left = `${left + scrollX}px`;
		};

		schedule("afterRender", () => {
			alignPanelToTrigger();
			if (element.parentNode === document.body) {
				requestAnimationFrame(alignPanelToTrigger);
			}
		});

		const onScroll = () => {
			if (this.overlayVisible && element.parentNode === document.body) alignPanelToTrigger();
		};
		window.addEventListener("scroll", onScroll, true);

		return () => {
			window.removeEventListener("scroll", onScroll, true);
		};
	});

	triggerRef = modifier((element) => {
		this.triggerElement = element;
		return () => {
			if (this.triggerElement === element) this.triggerElement = null;
		};
	});

	panelRef = modifier((element) => {
		this.panelElement = element;
		return () => {
			if (this.panelElement === element) this.panelElement = null;
		};
	});

	scrollFocusedIntoView = modifier((element, [when, focusedIndex, listId]) => {
		if (!when || focusedIndex < 0 || !element) return;
		const runScroll = (retry = false) => {
			const wrapper = element;
			const id = listId ? `${listId}-item-${focusedIndex}` : null;
			if (!id) return;
			const item = document.getElementById(id);
			if (!item) {
				if (!retry) requestAnimationFrame(() => runScroll(true));
				return;
			}
			const itemTop = item.offsetTop;
			const itemBottom = itemTop + item.offsetHeight;
			const wrapperScrollTop = wrapper.scrollTop;
			const wrapperHeight = wrapper.clientHeight;
			if (itemBottom > wrapperScrollTop + wrapperHeight)
				wrapper.scrollTop = itemBottom - wrapperHeight;
			if (itemTop < wrapperScrollTop) wrapper.scrollTop = itemTop;
		};
		schedule("afterRender", () => {
			requestAnimationFrame(() => runScroll(false));
		});
	});

	@action
	setPanelPosition(position) {
		this.panelPosition = position;
	}

	/** After click-open, focus may still be on `body`; move it to the combobox so Arrow keys do not scroll the page. */
	ensureComboboxControlFocused() {
		schedule("afterRender", () => {
			if (!this.overlayVisible || this.isTriggerDisabled) return;
			document.getElementById(this.triggerId)?.focus?.({ preventScroll: true });
		});
	}

	@action
	toggleOverlay() {
		if (this.args.disabled || this.args.loading) return;
		this.overlayVisible = !this.overlayVisible;
		if (this.overlayVisible) {
			this.filterValue = this.args.editable ? (this.selectedLabel ?? "") : "";
			this.focusedOptionIndex = this.selectedOptionIndex;
			if (this.focusedOptionIndex < 0 && this.listOptions.length > 0) this.focusedOptionIndex = 0;
			this.panelPosition = "below";
			this.args.onShow?.();
			this.ensureComboboxControlFocused();
		} else {
			this.panelPosition = "below";
			this.dismissKeyboardOptionFocusRing();
			this.args.onHide?.();
		}
	}

	get selectedOptionIndex() {
		const list = this.listOptions;
		const selectedValue = this.args.value;
		if (this.hasGroups) {
			for (let i = 0; i < list.length; i++) {
				const optionItem = list[i].item ?? list[i];
				if (this.valueEquals(this.getOptionValue(optionItem), selectedValue)) return i;
			}
		} else {
			for (let i = 0; i < list.length; i++) {
				if (this.valueEquals(this.getOptionValue(list[i]), selectedValue)) return i;
			}
		}
		return -1;
	}

	@action
	selectOption(entry) {
		const optionItem = entry?.item != null ? entry.item : entry;
		if (this.isOptionDisabled(optionItem)) return;
		const value = this.getOptionValue(optionItem);
		this.overlayVisible = false;
		this.dismissKeyboardOptionFocusRing();
		this.args.onChange?.(value);
		this.args.onHide?.();
	}

	@action
	clearSelection(event) {
		event?.stopPropagation?.();
		event?.preventDefault?.();
		if (this.args.disabled) return;
		this.overlayVisible = false;
		this.dismissKeyboardOptionFocusRing();
		this.args.onChange?.(undefined);
		this.args.onFilter?.("");
		this.filterValue = "";
		this.args.onHide?.();
	}

	@action
	onClearIconKeydown(event) {
		const keyPressed = event.code || event.key;
		if (
			keyPressed === "Enter" ||
			keyPressed === "NumpadEnter" ||
			keyPressed === " " ||
			keyPressed === "Space"
		) {
			event.preventDefault();
			this.clearSelection(event);
		}
	}

	@action
	onFilterInput(event) {
		const filterInputValue = event.target?.value ?? "";
		this.filterValue = filterInputValue;
		this.focusedOptionIndex = 0;
		this.showOptionKeyboardFocusRing = true;
		this.args.onFilter?.(filterInputValue);
	}

	@action
	onFilterKeydown(event) {
		const keyPressed = event.code || event.key;
		if (keyPressed === "ArrowDown") {
			event.preventDefault();
			this.moveFocus(1);
			this.focusFocusedItem();
		} else if (keyPressed === "ArrowUp") {
			event.preventDefault();
			this.moveFocus(-1);
			this.focusFocusedItem();
		} else if (keyPressed === "Enter" || keyPressed === "NumpadEnter") {
			event.preventDefault();
			if (this.focusedOptionIndex >= 0) {
				const list = this.listOptions;
				const focusedEntry = list[this.focusedOptionIndex];
				const optionItem =
					this.hasGroups && focusedEntry?.item != null ? focusedEntry.item : focusedEntry;
				if (optionItem && !this.isOptionDisabled(optionItem)) this.selectOption(focusedEntry);
			}
		} else if (keyPressed === "Escape") {
			event.preventDefault();
			this.toggleOverlay();
		}
	}

	@action
	focusFocusedItem() {
		if (this.focusedOptionIndex < 0) return;
		const focusedOptionElement = document.getElementById(
			`${this.triggerId}-item-${this.focusedOptionIndex}`
		);
		focusedOptionElement?.focus?.();
	}

	@action
	onTriggerKeydown(event) {
		if (this.args.disabled) return;
		const keyPressed = event.code || event.key;
		if (keyPressed === "ArrowDown") {
			event.preventDefault();
			if (!this.overlayVisible) {
				this.showOptionKeyboardFocusRing = true;
				this.toggleOverlay();
			} else this.moveFocus(1);
			return;
		}
		if (keyPressed === "ArrowUp") {
			event.preventDefault();
			if (this.overlayVisible) this.moveFocus(-1);
			else {
				this.showOptionKeyboardFocusRing = true;
				this.toggleOverlay();
			}
			return;
		}
		if (keyPressed === "Enter" || keyPressed === "NumpadEnter") {
			event.preventDefault();
			if (this.overlayVisible && this.focusedOptionIndex >= 0) {
				const list = this.listOptions;
				const focusedEntry = list[this.focusedOptionIndex];
				const optionItem =
					this.hasGroups && focusedEntry?.item != null ? focusedEntry.item : focusedEntry;
				if (optionItem && !this.isOptionDisabled(optionItem)) this.selectOption(focusedEntry);
			} else if (!this.overlayVisible) {
				this.showOptionKeyboardFocusRing = true;
				this.toggleOverlay();
			}
			return;
		}
		if (keyPressed === "Escape") {
			event.preventDefault();
			if (this.overlayVisible) this.toggleOverlay();
			return;
		}
	}

	@action
	onEditableInput(event) {
		const filterInputValue = event.target?.value ?? "";
		this.filterValue = filterInputValue;
		if (!this.overlayVisible) this.overlayVisible = true;
		const list = this.listOptions;
		const normalized = (filterInputValue ?? "").trim().toLowerCase();
		let matchIndex = -1;
		if (normalized && list.length > 0) {
			matchIndex = list.findIndex((entry) => {
				const option = entry?.item != null ? entry.item : entry;
				return this.getOptionLabel(option).toLowerCase().includes(normalized);
			});
		}
		this.focusedOptionIndex = matchIndex >= 0 ? matchIndex : -1;
		this.showOptionKeyboardFocusRing = true;
		this.args.onFilter?.(filterInputValue);
	}

	@action
	onEditableFocus(event) {
		if (this.args.disabled) return;
		if (!this.overlayVisible) {
			this.filterValue = this.selectedLabel ?? "";
			this.overlayVisible = true;
			this.focusedOptionIndex = this.selectedOptionIndex >= 0 ? this.selectedOptionIndex : 0;
			if (this.focusedOptionIndex < 0 && this.listOptions.length > 0) this.focusedOptionIndex = 0;
			if (!this.suppressKeyboardOptionRingForFocus) this.showOptionKeyboardFocusRing = true;
			this.args.onShow?.();
		}
		this.handleFocus(event);
	}

	@action
	onEditableClick(event) {
		if (this.args.disabled || this.args.loading) return;
		event.stopPropagation();
		if (!this.overlayVisible) {
			this.dismissKeyboardOptionFocusRing();
			this.filterValue = this.selectedLabel ?? "";
			this.overlayVisible = true;
			this.focusedOptionIndex = this.selectedOptionIndex >= 0 ? this.selectedOptionIndex : 0;
			if (this.focusedOptionIndex < 0 && this.listOptions.length > 0) this.focusedOptionIndex = 0;
			this.args.onShow?.();
			this.ensureComboboxControlFocused();
		}
	}

	@action
	onEditableBlur(event) {
		this.handleBlur(event);
	}

	@action
	onEditableTriggerKeydown(event) {
		if (this.args.disabled) return;
		const keyPressed = event.code || event.key;
		if (keyPressed === "ArrowDown") {
			event.preventDefault();
			if (!this.overlayVisible) {
				this.showOptionKeyboardFocusRing = true;
				this.filterValue = this.selectedLabel ?? "";
				this.overlayVisible = true;
				this.focusedOptionIndex = this.selectedOptionIndex >= 0 ? this.selectedOptionIndex : 0;
				if (this.focusedOptionIndex < 0 && this.listOptions.length > 0) this.focusedOptionIndex = 0;
				this.args.onShow?.();
			} else this.moveFocus(1);
			return;
		}
		if (keyPressed === "ArrowUp") {
			event.preventDefault();
			if (this.overlayVisible) this.moveFocus(-1);
			else {
				this.showOptionKeyboardFocusRing = true;
				this.filterValue = this.selectedLabel ?? "";
				this.overlayVisible = true;
				this.focusedOptionIndex = this.listOptions.length > 0 ? this.listOptions.length - 1 : 0;
				this.args.onShow?.();
			}
			return;
		}
		if (keyPressed === "Enter" || keyPressed === "NumpadEnter") {
			event.preventDefault();
			if (this.overlayVisible && this.focusedOptionIndex >= 0) {
				const list = this.listOptions;
				const focusedEntry = list[this.focusedOptionIndex];
				const optionItem =
					this.hasGroups && focusedEntry?.item != null ? focusedEntry.item : focusedEntry;
				if (optionItem && !this.isOptionDisabled(optionItem)) this.selectOption(focusedEntry);
			} else if (!this.overlayVisible) {
				this.showOptionKeyboardFocusRing = true;
				this.filterValue = this.selectedLabel ?? "";
				this.overlayVisible = true;
				this.focusedOptionIndex = this.selectedOptionIndex >= 0 ? this.selectedOptionIndex : 0;
				if (this.focusedOptionIndex < 0 && this.listOptions.length > 0) this.focusedOptionIndex = 0;
				this.args.onShow?.();
			}
			return;
		}
		if (keyPressed === "Escape") {
			event.preventDefault();
			if (this.overlayVisible) this.toggleOverlay();
			return;
		}
		if (keyPressed === " " || keyPressed === "Space") {
			event.preventDefault();
			if (!this.overlayVisible) {
				this.showOptionKeyboardFocusRing = true;
				this.filterValue = this.selectedLabel ?? "";
				this.overlayVisible = true;
				this.focusedOptionIndex = this.selectedOptionIndex >= 0 ? this.selectedOptionIndex : 0;
				if (this.focusedOptionIndex < 0 && this.listOptions.length > 0) this.focusedOptionIndex = 0;
				this.args.onShow?.();
			} else if (this.focusedOptionIndex >= 0) {
				const list = this.listOptions;
				const focusedEntry = list[this.focusedOptionIndex];
				const optionItem =
					this.hasGroups && focusedEntry?.item != null ? focusedEntry.item : focusedEntry;
				if (optionItem && !this.isOptionDisabled(optionItem)) this.selectOption(focusedEntry);
			}
			return;
		}
	}

	@action
	moveFocus(delta) {
		const list = this.listOptions;
		if (!list.length) return;
		this.showOptionKeyboardFocusRing = true;
		let nextFocusedIndex = this.focusedOptionIndex + delta;
		if (nextFocusedIndex < 0) nextFocusedIndex = 0;
		if (nextFocusedIndex >= list.length) nextFocusedIndex = list.length - 1;
		this.focusedOptionIndex = nextFocusedIndex;
	}

	@action
	onPanelKeydown(event) {
		const keyPressed = event.code || event.key;
		if (keyPressed === "ArrowDown") {
			event.preventDefault();
			this.moveFocus(1);
		} else if (keyPressed === "ArrowUp") {
			event.preventDefault();
			this.moveFocus(-1);
		} else if (keyPressed === "Enter" || keyPressed === "NumpadEnter") {
			event.preventDefault();
			if (this.focusedOptionIndex >= 0) {
				const list = this.listOptions;
				const focusedEntry = list[this.focusedOptionIndex];
				const optionItem =
					this.hasGroups && focusedEntry?.item != null ? focusedEntry.item : focusedEntry;
				if (optionItem && !this.isOptionDisabled(optionItem)) this.selectOption(focusedEntry);
			}
		}
	}

	get optionList() {
		if (this.hasGroups) return this.listOptions;
		return this.listOptions.map((option) => ({ item: option }));
	}

	get optionListWithGroups() {
		if (!this.hasGroups) return [];
		const list = this.listOptions;
		const rows = [];
		let lastGroupLabel = null;
		for (let flatIndex = 0; flatIndex < list.length; flatIndex++) {
			const entry = list[flatIndex];
			const groupLabel = entry?.groupLabel ?? "";
			if (groupLabel !== lastGroupLabel) {
				rows.push({ type: "group", label: groupLabel, group: entry?.group ?? null });
				lastGroupLabel = groupLabel;
			}
			rows.push({ type: "option", entry, flatIndex });
		}
		return rows;
	}

	get activeDescendantId() {
		return this.focusedOptionIndex >= 0
			? `${this.triggerId}-item-${this.focusedOptionIndex}`
			: undefined;
	}

	get scrollHeightValue() {
		return this.args.scrollHeight ?? "232px";
	}

	@action
	stopPanelClick(event) {
		event.stopPropagation();
	}

	<template>
		<div class={{this.fieldClass}} data-qa={{this.rootDataQa}}>
			{{#unless @floatLabel}}
				{{#if (has-block "label")}}
					<label for={{this.triggerId}}>
						<span class="label-text">
							{{yield to="label"}}
							{{#if this.isRequired}}
								<span class="fg-red" aria-hidden="true">*</span>
							{{/if}}
						</span>
						{{#if (has-block "labelRight")}}
							<span class="label-right">{{yield to="labelRight"}}</span>
						{{else if @labelRight}}
							<span class="label-right">{{@labelRight}}</span>
						{{/if}}
					</label>
				{{else if @label}}
					<label for={{this.triggerId}}>
						<span class="label-text">
							{{@label}}
							{{#if this.isRequired}}
								<span class="fg-red" aria-hidden="true">*</span>
							{{/if}}
						</span>
						{{#if @labelRight}}
							<span class="label-right">{{@labelRight}}</span>
						{{/if}}
					</label>
				{{/if}}
			{{/unless}}

			{{#if @floatLabel}}
				<span class={{this.floatLabelClass}}>
					<div
						class={{this.floatLabelRootClasses}}
						role={{unless @editable "combobox"}}
						aria-haspopup={{unless @editable "listbox"}}
						aria-expanded={{unless @editable this.overlayVisible}}
						aria-controls={{unless @editable (concat this.triggerId "-listbox")}}
						aria-invalid={{unless @editable (if (eq this.isInvalid true) "true" "false")}}
						aria-required={{unless @editable this.isRequired}}
						aria-describedby={{unless @editable this.ariaDescribedBy}}
						{{this.triggerRef}}
						{{this.closeOverlay this.overlayVisible onClose=this.toggleOverlay}}
						{{on "pointerdown" this.onTriggerPointerIntent}}
						{{on "click" this.toggleOverlay}}
						...attributes
					>
						{{#if @editable}}
							<input
								id={{this.triggerId}}
								data-qa="ulx-dropdown-trigger"
								class="dropdown-input editable {{this.inputtextClass}}"
								type="text"
								autocomplete="off"
								value={{this.editableInputValue}}
								placeholder={{this.triggerPlaceholderDisplay}}
								readonly={{this.isTriggerDisabled}}
								role="combobox"
								aria-haspopup="listbox"
								aria-expanded={{this.overlayVisible}}
								aria-controls="{{this.triggerId}}-listbox"
								aria-autocomplete="list"
								aria-invalid={{if (eq this.isInvalid true) "true" "false"}}
								aria-required={{this.isRequired}}
								aria-describedby={{this.ariaDescribedBy}}
								aria-activedescendant={{this.activeDescendantId}}
								{{on "input" this.onEditableInput}}
								{{on "keydown" this.onEditableTriggerKeydown}}
								{{on "focus" this.onEditableFocus}}
								{{on "pointerdown" this.onEditableInputPointerDown}}
								{{on "click" this.onEditableClick}}
								{{on "blur" this.onEditableBlur}}
							/>
							<div
								class="dropdown-trigger {{if this.isTriggerDisabled 'disabled' ''}}"
								tabindex="-1"
							>
								{{#if (and @showClear this.selectedOption (not this.isTriggerDisabled))}}
									<UlxIcon
										@type="font"
										@dataQa="ulx-dropdown-clear"
										@iconName="dropdown-clear-icon close-stroke-icon-new"
										@componentClass="bs-icons1"
										aria-hidden="true"
										role="button"
										tabindex="0"
										aria-label={{this.clearButtonAriaLabel}}
										{{on "click" this.clearSelection}}
										{{on "keydown" this.onClearIconKeydown}}
									/>
								{{/if}}
								{{#if (and @loading)}}
									<span class="dropdown-loading-icon" aria-hidden="true">
										<UlxProgressSpinner @size={{this.dropdownSize}} aria-hidden="true" />
									</span>
								{{else}}
									{{#if (has-block "icon")}}
										{{yield (hash overlayVisible=this.overlayVisible) to="icon"}}
									{{else}}
										<UlxIcon
											@dataQa="ulx-dropdown-open-icon"
											@iconName="down-stroke-icon-new dropdown-trigger-icon"
											@type="font"
											@componentClass="bs-icons1"
											aria-hidden="true"
										/>
									{{/if}}
								{{/if}}
							</div>
						{{else}}
							<div class="dropdown-input {{this.contentPlaceholderClass}}" tabindex="-1">
								{{#if (has-block "value")}}
									<div class="flex items-center">
										{{yield
											(hash
												selectedOption=this.selectedOption
												selectedLabel=this.selectedLabel
												placeholder=this.triggerPlaceholderDisplay
												imageUrl=this.selectedOptionImageUrl
											)
											to="value"
										}}
									</div>
								{{else}}
									{{#if (and this.selectedLabel)}}
										<span class="dropdown-item-label">{{this.selectedLabel}}</span>
										{{#if (has-block "subtext")}}
											<span>{{yield this.selectedOption to="subtext"}}</span>
										{{/if}}
									{{else}}
										<span class="dropdown-item-label">{{this.triggerPlaceholderDisplay}}</span>
									{{/if}}
								{{/if}}
							</div>
							<div
								class="dropdown-trigger {{if this.isTriggerDisabled 'disabled' ''}}"
								id={{this.triggerId}}
								data-qa="ulx-dropdown-trigger"
								tabindex={{if (not this.isTriggerDisabled) "0" "-1"}}
								role="button"
								{{on "keydown" this.onTriggerKeydown}}
								{{on "focus" this.handleFocus}}
								{{on "blur" this.handleBlur}}
							>
								{{#if (and @showClear this.selectedOption (not this.isTriggerDisabled))}}
									<UlxIcon
										@type="font"
										@dataQa="ulx-dropdown-clear"
										@iconName="close-stroke-icon-new dropdown-clear-icon"
										@componentClass="bs-icons1"
										aria-hidden="true"
										role="button"
										tabindex="0"
										aria-label={{this.clearButtonAriaLabel}}
										{{on "click" this.clearSelection}}
										{{on "keydown" this.onClearIconKeydown}}
									/>
								{{/if}}
								{{#if (and @loading)}}
									<span class="dropdown-loading-icon" aria-hidden="true">
										<UlxProgressSpinner @size={{this.dropdownSize}} aria-hidden="true" />
									</span>
								{{else}}
									{{#if (has-block "icon")}}
										{{yield (hash overlayVisible=this.overlayVisible) to="icon"}}
									{{else}}
										<UlxIcon
											@dataQa="ulx-dropdown-open-icon"
											@iconName="down-stroke-icon-new dropdown-trigger-icon"
											@type="font"
											@componentClass="bs-icons1"
											aria-hidden="true"
										/>
									{{/if}}
								{{/if}}
							</div>
						{{/if}}
					</div>
					<label for={{this.triggerId}} class={{this.floatLabelLabelClass}}>
						{{this.floatLabelText}}
						{{#if this.isRequired}}
							<span class="fg-red" aria-hidden="true">*</span>
						{{/if}}
					</label>
				</span>
			{{else}}
				<div
					class={{this.rootClasses}}
					role={{unless @editable "combobox"}}
					aria-haspopup={{unless @editable "listbox"}}
					aria-expanded={{unless @editable this.overlayVisible}}
					aria-controls={{unless @editable (concat this.triggerId "-listbox")}}
					aria-invalid={{unless @editable (if (eq this.isInvalid true) "true" "false")}}
					aria-required={{unless @editable this.isRequired}}
					aria-describedby={{unless @editable this.ariaDescribedBy}}
					{{this.triggerRef}}
					{{this.closeOverlay this.overlayVisible onClose=this.toggleOverlay}}
					{{on "pointerdown" this.onTriggerPointerIntent}}
					{{on "click" this.toggleOverlay}}
					...attributes
				>
					{{#if @editable}}
						<input
							id={{this.triggerId}}
							data-qa="ulx-dropdown-trigger"
							class="dropdown-input editable {{this.inputtextClass}}"
							type="text"
							autocomplete="off"
							value={{this.editableInputValue}}
							placeholder={{this.triggerPlaceholderDisplay}}
							readonly={{this.isTriggerDisabled}}
							role="combobox"
							aria-haspopup="listbox"
							aria-expanded={{this.overlayVisible}}
							aria-controls="{{this.triggerId}}-listbox"
							aria-autocomplete="list"
							aria-invalid={{if (eq this.isInvalid true) "true" "false"}}
							aria-required={{this.isRequired}}
							aria-describedby={{this.ariaDescribedBy}}
							aria-activedescendant={{this.activeDescendantId}}
							{{on "input" this.onEditableInput}}
							{{on "keydown" this.onEditableTriggerKeydown}}
							{{on "focus" this.onEditableFocus}}
							{{on "pointerdown" this.onEditableInputPointerDown}}
							{{on "click" this.onEditableClick}}
							{{on "blur" this.onEditableBlur}}
						/>
						<div class="dropdown-trigger {{if this.isTriggerDisabled 'disabled' ''}}" tabindex="-1">
							{{#if (and @showClear this.selectedOption (not this.isTriggerDisabled))}}
								<UlxIcon
									@type="font"
									@dataQa="ulx-dropdown-clear"
									@iconName="close-stroke-icon-new dropdown-clear-icon"
									@componentClass="bs-icons1"
									aria-hidden="true"
									role="button"
									tabindex="0"
									aria-label={{this.clearButtonAriaLabel}}
									{{on "click" this.clearSelection}}
									{{on "keydown" this.onClearIconKeydown}}
								/>
							{{/if}}
							{{#if (and @loading)}}
								<span class="dropdown-loading-icon" aria-hidden="true">
									<UlxProgressSpinner @size={{this.dropdownSize}} aria-hidden="true" />
								</span>
							{{else}}
								{{#if (has-block "icon")}}
									{{yield (hash overlayVisible=this.overlayVisible) to="icon"}}
								{{else}}
									<UlxIcon
										@dataQa="ulx-dropdown-open-icon"
										@iconName="down-stroke-icon-new dropdown-trigger-icon"
										@type="font"
										@componentClass="bs-icons1"
										aria-hidden="true"
									/>
								{{/if}}
							{{/if}}
						</div>
					{{else}}
						<div class="dropdown-input {{this.contentPlaceholderClass}}" tabindex="-1">
							{{#if (has-block "value")}}
								<div class="flex items-center">
									{{yield
										(hash
											selectedOption=this.selectedOption
											selectedLabel=this.selectedLabel
											placeholder=this.triggerPlaceholderDisplay
											imageUrl=this.selectedOptionImageUrl
										)
										to="value"
									}}
								</div>
							{{else}}
								{{#if (and this.selectedLabel)}}
									<span class="dropdown-item-label">{{this.selectedLabel}}</span>
									{{#if (has-block "subtext")}}
										<span>{{yield this.selectedOption to="subtext"}}</span>
									{{/if}}
								{{else}}
									<span class="dropdown-item-label">{{this.triggerPlaceholderDisplay}}</span>
								{{/if}}
							{{/if}}
						</div>
						<div
							class="dropdown-trigger {{if this.isTriggerDisabled 'disabled' ''}}"
							id={{this.triggerId}}
							data-qa="ulx-dropdown-trigger"
							tabindex={{if (not this.isTriggerDisabled) "0" "-1"}}
							role="button"
							{{on "keydown" this.onTriggerKeydown}}
							{{on "focus" this.handleFocus}}
							{{on "blur" this.handleBlur}}
						>
							{{#if (and @showClear this.selectedOption (not this.isTriggerDisabled))}}
								<UlxIcon
									@type="font"
									@dataQa="ulx-dropdown-clear"
									@iconName="close-stroke-icon-new dropdown-clear-icon"
									@componentClass="bs-icons1"
									aria-hidden="true"
									role="button"
									tabindex="0"
									aria-label={{this.clearButtonAriaLabel}}
									{{on "click" this.clearSelection}}
									{{on "keydown" this.onClearIconKeydown}}
								/>
							{{/if}}
							{{#if (and @loading)}}
								<span class="dropdown-loading-icon" aria-hidden="true">
									<UlxProgressSpinner @size={{this.dropdownSize}} aria-hidden="true" />
								</span>
							{{else}}
								{{#if (has-block "icon")}}
									{{yield (hash overlayVisible=this.overlayVisible) to="icon"}}
								{{else}}
									<UlxIcon
										@dataQa="ulx-dropdown-open-icon"
										@iconName="down-stroke-icon-new dropdown-trigger-icon"
										@type="font"
										@componentClass="bs-icons1"
										aria-hidden="true"
									/>
								{{/if}}
							{{/if}}
						</div>
					{{/if}}
				</div>
			{{/if}}

			{{#if this.overlayVisible}}
				<div
					id="{{this.triggerId}}-listbox"
					data-qa="ulx-dropdown-panel"
					class="dropdown-panel {{if (eq this.panelPosition 'above') 'dropdown-panel-above'}}"
					role="listbox"
					aria-activedescendant={{this.activeDescendantId}}
					aria-hidden="false"
					{{this.panelRef}}
					{{appendToBody this.overlayVisible}}
					{{this.positionPanel this.overlayVisible this.triggerElement (fn this.setPanelPosition)}}
					{{on "pointerdown" this.onOptionPanelPointerIntent}}
					{{on "keydown" this.onPanelKeydown}}
					{{on "click" this.stopPanelClick}}
				>
					{{#if (and @filter)}}
						<div class="dropdown-filter-container">
							<UlxIcon
								@type="font"
								@iconName="search-icon dropdown-filter-icon"
								@componentClass="bs-icons1"
								@size="s18"
								aria-hidden="true"
							/>
							<input
								type="text"
								class="dropdown-filter-input"
								data-qa="ulx-dropdown-filter"
								value={{this.filterValue}}
								placeholder={{@filterPlaceholder}}
								{{on "input" this.onFilterInput}}
								{{on "keydown" this.onFilterKeydown}}
							/>
						</div>
					{{/if}}
					<div
						class="dropdown-wrapper"
						data-qa="ulx-dropdown-options-wrapper"
						style="max-height: {{this.scrollHeightValue}};"
						{{this.scrollFocusedIntoView
							this.overlayVisible
							this.focusedOptionIndex
							this.triggerId
						}}
					>
						<ul class="dropdown-list" role="listbox" data-qa="ulx-dropdown-list">
							{{#if (eq this.listOptions.length 0)}}
								<li class="dropdown-empty-message" role="option" data-qa="ulx-dropdown-empty">
									{{or (and @filter @emptyFilterMessage) @emptyMessage}}
								</li>
							{{else if this.hasGroups}}
								{{#each this.optionListWithGroups as |row|}}
									{{#if (eq row.type "group")}}
										<li
											class="dropdown-item-group"
											role="presentation"
											aria-hidden="true"
											data-qa="ulx-dropdown-group"
										>
											{{#if (has-block "group")}}
												{{yield (hash label=row.label group=row.group) to="group"}}
											{{else}}
												<span>
													<div class="flex items-center">
														{{#if row.group.imageUrl}}
															<img
																src={{row.group.imageUrl}}
																alt={{row.label}}
																class={{concat "mr-2 flag " (this.getFlagClass row.group.code)}}
																style="width: 18px;"
																aria-hidden="true"
															/>
														{{/if}}
														{{#if row.group.icon}}
															<span aria-hidden="true">
																<UlxIcon
																	@type="font"
																	@iconName={{row.group.icon}}
																	@componentClass="bs-icons1"
																	@size="s24"
																/>
															</span>
														{{/if}}
														<div>{{row.label}}</div>
													</div>
												</span>
											{{/if}}
										</li>
									{{else}}
										{{#let row.entry.item as |option|}}
											<li
												role="option"
												id="{{this.triggerId}}-item-{{row.flatIndex}}"
												data-qa={{concat "ulx-dropdown-option-" row.flatIndex}}
												class="dropdown-item grouped
													{{if (and (eq row.flatIndex this.focusedOptionIndex) this.showOptionKeyboardFocusRing) this.focusItemClass ''}}
													{{if (this.isOptionSelected option) 'selected' ''}}
													{{if (and @checkmark (this.isOptionSelected option)) 'checkmark' ''}}
													{{if (this.isOptionDisabled option) 'disabled' ''}}"
												aria-selected={{this.isOptionSelected option}}
												aria-disabled={{this.isOptionDisabled option}}
												tabindex="0"
												{{on "click" (fn this.selectOption row.entry)}}
											>
												{{#if (has-block "item")}}
													<span>
														<div class="flex items-center">
															{{yield
																(hash
																	option=option
																	label=(this.getOptionLabel option)
																	index=row.flatIndex
																	imageUrl=(this.getOptionImageUrl option)
																)
																to="item"
															}}
														</div>
													</span>
												{{else}}
													{{#if (and @checkmark (this.isOptionSelected option))}}
														<UlxIcon
															@componentClass="bs-icons1"
															@type="font"
															@iconName="tick-icon-01 dropdown-checkmark"
															@componentClass="bs-icons1"
															aria-hidden="true"
														/>
													{{/if}}
													<span
														class="dropdown-item-label
															{{if (this.isOptionSelected option) 'selected' ''}}
															{{if (this.isOptionDisabled option) 'disabled' ''}}"
													>
														{{this.getOptionLabel option}}
													</span>
												{{/if}}
											</li>
										{{/let}}
									{{/if}}
								{{/each}}
							{{else}}
								{{#each this.optionList as |entry index|}}
									{{#let entry.item as |option|}}
										<li
											role="option"
											id="{{this.triggerId}}-item-{{index}}"
											data-qa={{concat "ulx-dropdown-option-" index}}
											class="dropdown-item
												{{if (and (eq index this.focusedOptionIndex) this.showOptionKeyboardFocusRing) this.focusItemClass ''}}
												{{if (this.isOptionSelected option) 'selected' ''}}
												{{if (and @checkmark (this.isOptionSelected option)) 'checkmark' ''}}
												{{if (this.isOptionDisabled option) 'disabled' ''}}"
											aria-selected={{this.isOptionSelected option}}
											aria-disabled={{this.isOptionDisabled option}}
											tabindex="0"
											{{on "click" (fn this.selectOption entry)}}
										>
											{{#if (has-block "item")}}
												<span>
													<div class="flex items-center">
														{{yield
															(hash
																option=option
																label=(this.getOptionLabel option)
																index=index
																imageUrl=(this.getOptionImageUrl option)
															)
															to="item"
														}}
													</div>
												</span>
											{{else}}
												{{#if (and @checkmark (this.isOptionSelected option))}}
													<UlxIcon
														@componentClass="bs-icons1"
														@type="font"
														@iconName="tick-icon-01 dropdown-checkmark"
														@componentClass="bs-icons1"
														aria-hidden="true"
													/>
												{{/if}}
												<span
													class="dropdown-item-label
														{{if (this.isOptionSelected option) 'selected' ''}}
														{{if (this.isOptionDisabled option) 'disabled' ''}}"
												>
													{{this.getOptionLabel option}}
												</span>
											{{/if}}
										</li>
									{{/let}}
								{{/each}}
							{{/if}}
						</ul>
					</div>
					{{#if (has-block "footer")}}
						<div class="dropdown-panel-footer" data-qa="ulx-dropdown-footer">
							<div class="dropdown-panel-footer-content">
								{{yield (hash selectedOption=this.selectedOption) to="footer"}}
							</div>
						</div>
					{{/if}}
				</div>
			{{/if}}

			{{#if (and @helpText)}}
				<div id="{{this.triggerId}}-help" class="help-text" data-qa="ulx-dropdown-help">{{@helpText}}</div>
			{{/if}}
			{{#if (and @error)}}
				<div
					id="{{this.triggerId}}-error"
					class="error-message"
					data-qa="ulx-dropdown-error"
					role="alert"
					aria-atomic="true"
				>{{@error}}</div>
			{{/if}}
		</div>
	</template>
}
