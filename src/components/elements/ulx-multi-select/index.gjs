import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
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
import UlxIcon from "../ulx-icon/index.gjs";
import UlxProgressSpinner from "../ulx-progressspinner/index.gjs";
import UlxCheckbox from "../ulx-checkbox/index.gjs";
import { eq, and, not, or, gt } from "ember-truth-helpers";
import { hash, concat } from "@ember/helper";

/**
 * MultiSelect: multiple selection from a list with optional chips, filter, groups, templates.
 * Supports: basic, chips, group, template, filter, select-all, loading, float label, filled,
 * invalid, disabled. Accessible: listbox aria-multiselectable, keyboard nav, ARIA.
 *
 * @class UlxMultiSelect
 * @param {Array} [value=[]] - Selected values array (controlled).
 * @param {Array} [options=[]] - List of options. Use optionLabel/optionValue for object shape.
 * @param {string} [optionLabel='label'] - Property name or path for option display text.
 * @param {string} [optionValue='value'] - Property name or path for option value.
 * @param {string} [optionGroupLabel] - When set, options are groups; this is the group label key.
 * @param {string} [optionGroupChildren='items'] - When optionGroupLabel is set, key for group children.
 * Named block <:group> - Custom content for each group header. Receives (hash label group).
 * Named block <:value> - Custom content for the trigger value area. Receives (hash selectedOptions selectedLabels placeholder).
 * Named block <:item> - Custom content for each option. Receives (hash option label index).
 * Named block <:footer> - Panel footer. Receives (hash selectedOptions).
 * Named block <:icon> - Custom trigger icon. Receives (hash overlayVisible).
 * Named block <:chip> - Custom chip content per selected item. Receives (hash option label value).
 * @param {string} [placeholder] - Placeholder when nothing selected.
 * @param {string} [display='comma'] - 'comma' | 'chip' for selected display.
 * @param {number} [selectionLimit] - Max number of selections (optional).
 * @param {boolean} [disabled=false] - Disables the component.
 * @param {boolean} [loading=false] - Shows progress spinner in trigger.
 * @param {boolean} [invalid=false] - Invalid state styling.
 * @param {boolean} [filter=false] - Show filter input in panel.
 * @param {boolean} [showClear=false] - Show clear icon when value has items.
 * @param {boolean} [selectAll=false] - Show select-all checkbox in panel header.
 * @param {string} [selectAllLabel] - Label for select-all checkbox. When empty string, checkbox is shown without text.
 * @param {boolean} [filled=false] - Filled variant styling.
 * @param {boolean|string} [floatLabel=false] - Float label mode.
 * @param {string} [filterPlaceholder] - Placeholder for filter input.
 * @param {string} [emptyMessage] - Message when options list is empty.
 * @param {string} [emptyFilterMessage] - Message when filter has no results.
 * @param {string} [scrollHeight='232px'] - Max height of option list (CSS value).
 * @param {boolean} [resetFilterOnHide=true] - Reset filter when overlay closes.
 * @param {string} [label] - Label text.
 * @param {string} [labelRight] - Optional right-side label text.
 * @param {string} [helpText] - Help text below field.
 * @param {string} [error] - Error message; sets invalid state.
 * @param {string} [fieldClass] - Extra class for field wrapper.
 * @param {string} [id] - Id for the trigger.
 * @param {string} [key] - Stable key for auto-generated id.
 * @param {boolean} [required=false] - Required field.
 * @param {Function} [onChange] - (value) => void when selection changes.
 * @param {Function} [onFocus] - Focus callback.
 * @param {Function} [onBlur] - Blur callback.
 * @param {Function} [onFilter] - (filterValue) => void when filter input changes.
 * @param {Function} [onShow] - When overlay opens.
 * @param {Function} [onHide] - When overlay closes.
 * @param {Function} [onSelectAll] - Optional (event, checked) => void; when provided overrides default select-all.
 * @param {Function} [optionDisabled] - (option) => boolean or property key to disable options.
 * @param {Object} [virtualScrollerOptions] - When set with <code>itemSize</code> (number, px), the list is virtualized for large datasets. Not used when <code>@optionGroupLabel</code> is set.
 */
export default class UlxMultiSelect extends Component {
	@action
	handleFocus(event) {
		this.args.onFocus?.(event);
	}

	@action
	handleBlur(event) {
		this.args.onBlur?.(event);
	}

	@tracked overlayVisible = false;
	@tracked focusedOptionIndex = -1;
	@tracked filterValue = "";
	@tracked triggerElement = null;
	@tracked panelElement = null;
	@tracked wrapperScrollTop = 0;
	@tracked wrapperClientHeight = 0;

	get key() {
		return this.args.key ?? guidFor(this);
	}

	get triggerId() {
		const { id } = this.args;
		return id ?? `ulx-multiselect-${this.key}`;
	}

	get listboxId() {
		return `${this.triggerId}-listbox`;
	}

	get baseClass() {
		return getComponentClass("multiselect");
	}

	get rootClasses() {
		const {
			disabled = false,
			invalid: invalidArg = false,
			error,
			filled = false,
			loading = false,
			size = "s-size",
			customClass
		} = this.args;
		const invalid = isInvalidState(invalidArg, error);
		const parts = [this.baseClass];
		size && parts.push(size);
		disabled && parts.push("disabled");
		invalid && parts.push("invalid");
		loading && parts.push("loading");
		filled && parts.push("filled");
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get focusItemClass() {
		return getComponentClass("focus");
	}

	get fieldClass() {
		return buildFieldClass(this.args.fieldClass);
	}

	get floatLabelText() {
		const { floatLabel, label } = this.args;
		return resolveFloatLabelText(floatLabel, label);
	}

	get floatLabelClass() {
		const { size, filled, disabled } = this.args;
		return buildFloatLabelClass({
			size,
			filled,
			invalid: this.isInvalid,
			disabled
		});
	}

	get floatLabelLabelClass() {
		return getFloatLabelLabelClass();
	}

	get hasValue() {
		const value = this.args.value;
		return Array.isArray(value) && value.length > 0;
	}

	get floatLabelRootClasses() {
		const base = this.rootClasses;
		const parts = base ? [base] : [];
		parts.push(getComponentClass("inputtext"));
		this.overlayVisible && parts.push("focus");
		this.hasValue && parts.push("input-filled");
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

	get optionGroupChildrenKey() {
		return this.args.optionGroupChildren ?? "items";
	}

	get hasGroups() {
		return !!this.args.optionGroupLabel;
	}

	get groupLabelKey() {
		return this.args.optionGroupLabel ?? "label";
	}

	get displayChips() {
		return this.args.display === "chip";
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
	isOptionDisabled(option) {
		if (option == null) return true;
		const { optionDisabled } = this.args;
		if (typeof optionDisabled === "function") return optionDisabled(option);
		if (typeof optionDisabled === "string") return !!this.getResolved(option, optionDisabled);
		return !!option.disabled;
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
		const value = this.args.value ?? [];
		const optionVal = this.getOptionValue(option);
		return value.some((v) => this.valueEquals(v, optionVal));
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

	get visibleOptions() {
		const sourceOptionsList = this.hasGroups ? this.flatOptions : (this.args.options ?? []);
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

	get selectedOptions() {
		const value = this.args.value ?? [];
		const options = this.args.options ?? [];
		if (!Array.isArray(value) || value.length === 0) return [];

		if (this.hasGroups) {
			const flat = this.flatOptions;
			return value
				.map(
					(val) => flat.find(({ item }) => this.valueEquals(this.getOptionValue(item), val))?.item
				)
				.filter(Boolean);
		}
		return value
			.map((val) => options.find((opt) => this.valueEquals(this.getOptionValue(opt), val)))
			.filter(Boolean);
	}

	get selectedLabelsComma() {
		const selected = this.selectedOptions;
		return selected.map((opt) => this.getOptionLabel(opt)).join(", ");
	}

	get selectedCount() {
		return this.selectedOptions.length;
	}

	get placeholderDisplay() {
		return this.args.placeholder ?? t("msg.multiselect.placeholder");
	}

	get displayClass() {
		const displayMode = this.args.display === "chip" ? "chip-display" : "comma-display";
		return displayMode;
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

	get selectAllItemLabel() {
		const { selectAllLabel } = this.args;
		return selectAllLabel !== undefined ? selectAllLabel : t("lbl.select.all");
	}

	get allowOptionSelect() {
		const { selectionLimit, value } = this.args;
		if (!selectionLimit) return true;
		const current = Array.isArray(value) ? value.length : 0;
		return current < selectionLimit;
	}

	get isAllSelected() {
		const onSelectAll = this.args.onSelectAll;
		if (typeof onSelectAll === "function" && this.args.selectAll != null) {
			return !!this.args.selectAll;
		}
		const visible = this.visibleOptions;
		if (!visible.length) return false;
		const selectable = this.hasGroups
			? visible.filter(({ item }) => !this.isOptionDisabled(item))
			: visible.filter((opt) => !this.isOptionDisabled(opt));
		return selectable.every((entry) => {
			const option = this.hasGroups ? entry.item : entry;
			return this.isOptionSelected(option);
		});
	}

	get optionList() {
		if (this.hasGroups) return this.visibleOptions;
		return this.visibleOptions.map((option) => ({ item: option }));
	}

	get optionListWithGroups() {
		if (!this.hasGroups) return [];
		const visibleOptionsList = this.visibleOptions;
		const rows = [];
		let lastGroupLabel = null;
		for (let flatIndex = 0; flatIndex < visibleOptionsList.length; flatIndex++) {
			const entry = visibleOptionsList[flatIndex];
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

	get useVirtualScroll() {
		const opts = this.args.virtualScrollerOptions;
		return !!(opts && typeof opts.itemSize === "number") && !this.hasGroups;
	}

	get virtualItemSize() {
		return this.args.virtualScrollerOptions?.itemSize ?? 43;
	}

	get virtualStartIndex() {
		if (!this.useVirtualScroll) return 0;
		const itemSize = this.virtualItemSize;
		const effectiveHeight = this.wrapperClientHeight || 232;
		const start = Math.floor(this.wrapperScrollTop / itemSize) - 5;
		return Math.max(0, start);
	}

	get virtualEndIndex() {
		if (!this.useVirtualScroll) return this.optionList.length;
		const itemSize = this.virtualItemSize;
		const effectiveHeight = this.wrapperClientHeight || 232;
		const end = Math.ceil((this.wrapperScrollTop + effectiveHeight) / itemSize) + 5;
		return Math.min(this.optionList.length, end);
	}

	get virtualOptionList() {
		if (!this.useVirtualScroll) return this.optionList;
		const list = this.optionList;
		const start = this.virtualStartIndex;
		const end = this.virtualEndIndex;
		return list.slice(start, end).map((entry, i) => ({ ...entry, virtualIndex: start + i }));
	}

	get virtualTotalHeight() {
		if (!this.useVirtualScroll) return 0;
		return this.optionList.length * this.virtualItemSize;
	}

	get virtualStartIndexTimesItemSize() {
		if (!this.useVirtualScroll) return 0;
		return this.virtualStartIndex * this.virtualItemSize;
	}

	get virtualBottomSpacerHeight() {
		if (!this.useVirtualScroll) return 0;
		return Math.max(0, (this.optionList.length - this.virtualEndIndex) * this.virtualItemSize);
	}

	closeOverlay = modifier((element, [when], { onClose }) => {
		let clickListener = null;
		let keyListener = null;
		if (when && typeof onClose === "function") {
			clickListener = (e) => {
				const insideRoot = element?.contains(e.target);
				const insidePanel = this.panelElement?.contains(e.target);
				if (!insideRoot && !insidePanel) onClose();
			};
			keyListener = (e) => {
				if (e.key === "Escape") {
					e.preventDefault();
					onClose();
				}
			};
			setTimeout(() => {
				document.addEventListener("click", clickListener, true);
				document.addEventListener("keydown", keyListener);
			}, 0);
		}
		return () => {
			if (clickListener) document.removeEventListener("click", clickListener, true);
			if (keyListener) document.removeEventListener("keydown", keyListener);
		};
	});

	appendToBody = modifier((element, [when]) => {
		if (!when) {
			if (element?.parentNode === document.body) document.body.removeChild(element);
			return;
		}
		if (element?.parentNode !== document.body) document.body.appendChild(element);
		return () => {
			if (element?.parentNode === document.body) document.body.removeChild(element);
		};
	});

	positionPanel = modifier((element, [when, triggerEl]) => {
		if (!when || !element) return;
		const alignPanelToTrigger = () => {
			const trigger = this.triggerElement ?? triggerEl;
			if (!trigger) return;
			const triggerRect = trigger.getBoundingClientRect();
			element.style.position = "fixed";
			element.style.top = `${triggerRect.bottom + 2}px`;
			element.style.left = `${triggerRect.left}px`;
			element.style.width = `${triggerRect.width}px`;
			element.style.minWidth = `${triggerRect.width}px`;
			element.style.maxWidth = `${triggerRect.width}px`;
			element.style.zIndex = "1100";
			element.style.margin = "0";
			element.style.padding = "0";
		};
		schedule("afterRender", () => {
			alignPanelToTrigger();
			if (element.parentNode === document.body) requestAnimationFrame(alignPanelToTrigger);
		});
		const onScroll = () => {
			if (this.overlayVisible && element.parentNode === document.body) alignPanelToTrigger();
		};
		window.addEventListener("scroll", onScroll, true);
		return () => window.removeEventListener("scroll", onScroll, true);
	});

	scrollFocusedIntoView = modifier(
		(element, [when, focusedIndex, listId, useVirtual, itemSize]) => {
			if (!when || focusedIndex < 0 || !element) return;
			const runScroll = (retry = false) => {
				const wrapper = element;
				if (useVirtual && typeof itemSize === "number") {
					const targetScroll = Math.max(0, focusedIndex * itemSize - wrapper.clientHeight / 2);
					wrapper.scrollTop = targetScroll;
					return;
				}
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
		}
	);

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

	virtualScrollSync = modifier((element, [whenVisible, useVirtual]) => {
		if (!whenVisible || !useVirtual) return;
		const update = () => {
			this.wrapperScrollTop = element.scrollTop;
			this.wrapperClientHeight = element.clientHeight;
		};
		update();
		schedule("afterRender", () => update());
		element.addEventListener("scroll", update);
		return () => element.removeEventListener("scroll", update);
	});

	@action
	toggleOverlay(event) {
		if (this.args.disabled || this.args.loading) return;
		event?.preventDefault?.();
		this.overlayVisible = !this.overlayVisible;
		if (this.overlayVisible) {
			this.filterValue = "";
			const visible = this.visibleOptions;
			const firstSelected = visible.findIndex((entry) => {
				const opt = this.hasGroups ? entry.item : entry;
				return this.isOptionSelected(opt);
			});
			this.focusedOptionIndex = firstSelected >= 0 ? firstSelected : visible.length > 0 ? 0 : -1;
			this.args.onShow?.();
		} else {
			if (this.args.resetFilterOnHide !== false) {
				this.filterValue = "";
				this.args.onFilter?.("");
			}
			this.args.onHide?.();
		}
	}

	@action
	selectOption(entry) {
		const optionItem = entry?.item != null ? entry.item : entry;
		if (this.isOptionDisabled(optionItem)) return;
		const optionVal = this.getOptionValue(optionItem);
		const value = this.args.value ?? [];
		const next = this.isOptionSelected(optionItem)
			? value.filter((v) => !this.valueEquals(v, optionVal))
			: [...value, optionVal];
		this.args.onChange?.(next);
	}

	@action
	clearSelection(event) {
		event?.stopPropagation?.();
		event?.preventDefault?.();
		if (this.args.disabled) return;
		this.closePanel(event);
		this.args.onChange?.([]);
	}

	@action
	closePanel(event) {
		event?.stopPropagation?.();
		event?.preventDefault?.();
		this.overlayVisible = false;
		if (this.args.resetFilterOnHide !== false) {
			this.filterValue = "";
			this.args.onFilter?.("");
		}
		this.args.onHide?.();
	}

	@action
	onItemCheckboxChange(entry, _checked, event) {
		event?.stopPropagation?.();
		this.selectOption(entry);
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
	onChipRemoveIconKeydown(option, event) {
		const keyPressed = event.code || event.key;
		if (
			keyPressed === "Enter" ||
			keyPressed === "NumpadEnter" ||
			keyPressed === " " ||
			keyPressed === "Space"
		) {
			event.preventDefault();
			this.removeChipOption(option, event);
		}
	}

	@action
	removeChipOption(option, event) {
		event?.stopPropagation?.();
		if (this.args.disabled) return;
		const optionVal = this.getOptionValue(option);
		const value = (this.args.value ?? []).filter((v) => !this.valueEquals(v, optionVal));
		this.args.onChange?.(value);
	}

	@action
	onSelectAllChange(checked) {
		const onSelectAll = this.args.onSelectAll;
		if (typeof onSelectAll === "function") {
			onSelectAll({ originalEvent: null }, checked);
			return;
		}
		const visible = this.visibleOptions;
		const validOptions = this.hasGroups
			? visible
					.filter(({ item }) => !this.isOptionDisabled(item))
					.map(({ item }) => this.getOptionValue(item))
			: visible.filter((opt) => !this.isOptionDisabled(opt)).map((opt) => this.getOptionValue(opt));
		const limit = this.args.selectionLimit;
		const value = checked ? (limit ? validOptions.slice(0, limit) : validOptions) : [];
		this.args.onChange?.(value);
	}

	@action
	onFilterInput(event) {
		const filterInputValue = event.target?.value ?? "";
		this.filterValue = filterInputValue;
		this.focusedOptionIndex = this.visibleOptions.length > 0 ? 0 : -1;
		this.args.onFilter?.(filterInputValue);
	}

	@action
	onFilterKeydown(event) {
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
				const visibleOptionsList = this.visibleOptions;
				const focusedEntry = visibleOptionsList[this.focusedOptionIndex];
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
	onTriggerKeydown(event) {
		if (this.args.disabled) return;
		const keyPressed = event.code || event.key;
		if (keyPressed === "ArrowDown") {
			event.preventDefault();
			if (!this.overlayVisible) this.toggleOverlay();
			else this.moveFocus(1);
			return;
		}
		if (keyPressed === "ArrowUp") {
			event.preventDefault();
			if (this.overlayVisible) this.moveFocus(-1);
			else this.toggleOverlay();
			return;
		}
		if (keyPressed === "Enter" || keyPressed === "NumpadEnter" || keyPressed === " ") {
			event.preventDefault();
			if (this.overlayVisible && this.focusedOptionIndex >= 0) {
				const visibleOptionsList = this.visibleOptions;
				const focusedEntry = visibleOptionsList[this.focusedOptionIndex];
				const optionItem =
					this.hasGroups && focusedEntry?.item != null ? focusedEntry.item : focusedEntry;
				if (optionItem && !this.isOptionDisabled(optionItem)) this.selectOption(focusedEntry);
			} else if (!this.overlayVisible) this.toggleOverlay();
			return;
		}
		if (keyPressed === "Escape") {
			event.preventDefault();
			if (this.overlayVisible) this.toggleOverlay();
			return;
		}
	}

	@action
	moveFocus(delta) {
		const visibleOptionsList = this.visibleOptions;
		if (!visibleOptionsList.length) return;
		let next = this.focusedOptionIndex + delta;
		if (next < 0) next = 0;
		if (next >= visibleOptionsList.length) next = visibleOptionsList.length - 1;
		this.focusedOptionIndex = next;
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
				const visibleOptionsList = this.visibleOptions;
				const focusedEntry = visibleOptionsList[this.focusedOptionIndex];
				const optionItem =
					this.hasGroups && focusedEntry?.item != null ? focusedEntry.item : focusedEntry;
				if (optionItem && !this.isOptionDisabled(optionItem)) this.selectOption(focusedEntry);
			}
		}
	}

	@action
	stopPanelClick(event) {
		event.stopPropagation();
	}

	<template>
		<div class={{this.fieldClass}}>
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
						id={{this.triggerId}}
						class={{this.floatLabelRootClasses}}
						role="combobox"
						aria-haspopup="listbox"
						aria-expanded={{this.overlayVisible}}
						aria-controls={{this.listboxId}}
						aria-multiselectable="true"
						aria-invalid={{if (eq this.isInvalid true) "true" "false"}}
						aria-required={{this.isRequired}}
						aria-describedby={{this.ariaDescribedBy}}
						tabindex={{if (not @disabled) "0" "-1"}}
						{{this.triggerRef}}
						{{this.closeOverlay this.overlayVisible onClose=this.toggleOverlay}}
						{{on "click" this.toggleOverlay}}
						{{on "keydown" this.onTriggerKeydown}}
						...attributes
					>
						<div class="multiselect-label-container {{this.displayClass}}" tabindex="-1">
							{{#if (has-block "value")}}
								<div class="flex items-center">
									{{yield
										(hash
											selectedOptions=this.selectedOptions
											selectedLabels=this.selectedLabelsComma
											placeholder=this.placeholderDisplay
										)
										to="value"
									}}
								</div>
							{{else}}
								{{#if this.displayChips}}
									{{#if this.hasValue}}
										<div class="multiselect-label">
											{{#each this.selectedOptions as |option|}}
												{{#if (has-block "chip")}}
													{{yield
														(hash
															option=option
															label=(this.getOptionLabel option)
															value=(this.getOptionValue option)
														)
														to="chip"
													}}
												{{else}}
													<span class="multiselect-token">
														<span class="multiselect-token-label">
															{{this.getOptionLabel option}}
														</span>
														<UlxIcon
															@type="font"
															@iconName="close-stroke-icon"
															@componentClass="bs-icons1"
															@size="s16"
															class="multiselect-token-icon"
															role="button"
															tabindex="0"
															aria-label={{t "lbl.remove"}}
															{{on "click" (fn this.removeChipOption option)}}
															{{on "keydown" (fn this.onChipRemoveIconKeydown option)}}
														/>
													</span>
												{{/if}}
											{{/each}}
										</div>
									{{else}}
										<span class="multiselect-token">{{this.placeholderDisplay}}</span>
									{{/if}}
								{{else}}
									{{#if this.hasValue}}
										<span class="multiselect-label">{{this.selectedLabelsComma}}</span>
									{{else}}
										<span class="multiselect-label">{{this.placeholderDisplay}}</span>
									{{/if}}
								{{/if}}
							{{/if}}
						</div>
						<div class="multiselect-trigger {{if @disabled 'disabled' ''}}" tabindex="-1"></div>
						{{#if (and @showClear this.hasValue (not @disabled))}}
							<UlxIcon
								@type="font"
								@iconName="close-stroke-icon"
								@componentClass="bs-icons1"
								@size="s24"
								aria-hidden="true"
								role="button"
								tabindex="0"
								aria-label={{this.clearButtonAriaLabel}}
								{{on "click" this.clearSelection}}
								{{on "keydown" this.onClearIconKeydown}}
							/>
						{{/if}}
						{{#if (and @loading)}}
							<span class="multiselect-loading-icon" aria-hidden="true">
								<UlxProgressSpinner @size="xs-size" aria-hidden="true" />
							</span>
						{{else}}
							{{#if (has-block "icon")}}
								{{yield (hash overlayVisible=this.overlayVisible) to="icon"}}
							{{else}}
								<UlxIcon
									@iconName="down-arrow-icon"
									@type="font"
									@size="s22"
									@componentClass="bs-icons1"
									aria-hidden="true"
								/>
							{{/if}}
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
					role="combobox"
					aria-haspopup="listbox"
					aria-expanded={{this.overlayVisible}}
					aria-controls={{this.listboxId}}
					aria-multiselectable="true"
					aria-invalid={{if (eq this.isInvalid true) "true" "false"}}
					aria-required={{this.isRequired}}
					aria-describedby={{this.ariaDescribedBy}}
					{{this.triggerRef}}
					{{this.closeOverlay this.overlayVisible onClose=this.toggleOverlay}}
					{{on "click" this.toggleOverlay}}
					{{on "keydown" this.onTriggerKeydown}}
					{{on "focus" this.handleFocus}}
					{{on "blur" this.handleBlur}}
					...attributes
				>
					<div class="multiselect-label-container {{this.displayClass}}" tabindex="-1">
						{{#if (has-block "value")}}
							<div class="flex items-center">
								{{yield
									(hash
										selectedOptions=this.selectedOptions
										selectedLabels=this.selectedLabelsComma
										placeholder=this.placeholderDisplay
									)
									to="value"
								}}
							</div>
						{{else}}
							{{#if this.displayChips}}
								{{#if this.hasValue}}
									<div class="multiselect-label">
										{{#each this.selectedOptions as |option|}}
											{{#if (has-block "chip")}}
												{{yield
													(hash
														option=option
														label=(this.getOptionLabel option)
														value=(this.getOptionValue option)
													)
													to="chip"
												}}
											{{else}}
												<span class="multiselect-token">
													<span class="multiselect-token-label">
														{{this.getOptionLabel option}}
													</span>
													<UlxIcon
														@type="font"
														@iconName="close-stroke-icon"
														@componentClass="bs-icons1"
														@size="s16"
														class="multiselect-token-icon"
														role="button"
														tabindex="0"
														aria-label={{t "lbl.remove"}}
														{{on "click" (fn this.removeChipOption option)}}
														{{on "keydown" (fn this.onChipRemoveIconKeydown option)}}
													/>
												</span>
											{{/if}}
										{{/each}}
									</div>
								{{else}}
									<span class="multiselect-label">{{this.placeholderDisplay}}</span>
								{{/if}}
							{{else}}
								{{#if this.hasValue}}
									<span class="multiselect-label">{{this.selectedLabelsComma}}</span>
								{{else}}
									<span class="multiselect-label">{{this.placeholderDisplay}}</span>
								{{/if}}
							{{/if}}
						{{/if}}
					</div>
					<div
						class="multiselect-trigger {{if @disabled 'disabled' ''}}"
						id={{this.triggerId}}
						tabindex={{if (not @disabled) "0" "-1"}}
						role="button"
					></div>
					{{#if (and @showClear this.hasValue (not @disabled))}}
						<UlxIcon
							@type="font"
							@iconName="close-stroke-icon"
							@componentClass="bs-icons1"
							@size="s24"
							aria-hidden="true"
							role="button"
							tabindex="0"
							aria-label={{this.clearButtonAriaLabel}}
							{{on "click" this.clearSelection}}
							{{on "keydown" this.onClearIconKeydown}}
						/>
					{{/if}}
					{{#if (and @loading)}}
						<span class="multiselect-loading-icon" aria-hidden="true">
							<UlxProgressSpinner @size="xs-size" aria-hidden="true" />
						</span>
					{{else}}
						{{#if (has-block "icon")}}
							{{yield (hash overlayVisible=this.overlayVisible) to="icon"}}
						{{else}}
							<UlxIcon
								@iconName="down-arrow-icon"
								@type="font"
								@size="s22"
								@componentClass="bs-icons1"
								aria-hidden="true"
							/>
						{{/if}}
					{{/if}}
				</div>
			{{/if}}

			{{#if this.overlayVisible}}
				<div
					id={{this.listboxId}}
					class="ulx-multiselect-panel"
					role="listbox"
					aria-multiselectable="true"
					aria-activedescendant={{this.activeDescendantId}}
					aria-hidden="false"
					{{this.panelRef}}
					{{this.appendToBody this.overlayVisible}}
					{{this.positionPanel this.overlayVisible this.triggerElement}}
					{{on "keydown" this.onPanelKeydown}}
					{{on "click" this.stopPanelClick}}
				>
					<div class="multiselect-header">
						{{#if (and @selectAll this.allowOptionSelect)}}
							<div class="multiselect-header-checkbox-container">
								<UlxCheckbox
									@checked={{this.isAllSelected}}
									@itemLabel={{this.selectAllItemLabel}}
									@onCheckedChange={{this.onSelectAllChange}}
								/>
							</div>
						{{/if}}
						{{#if @filter}}
							<div class="multiselect-filter-container">
								<input
									type="text"
									class="multiselect-filter-input"
									value={{this.filterValue}}
									placeholder={{or @filterPlaceholder (t "msg.multiselect.filter.placeholder")}}
									{{on "input" this.onFilterInput}}
									{{on "keydown" this.onFilterKeydown}}
								/>
							</div>
						{{/if}}
						<button
							type="button"
							class="multiselect-close-button"
							aria-label={{t "lbl.close"}}
							{{on "click" this.closePanel}}
						>
							<UlxIcon
								@iconName="close-icon-01"
								@type="font"
								@size="s22"
								@componentClass="bs-icons1"
								aria-hidden="true"
							/>
						</button>
					</div>
					<div
						class="multiselect-wrapper"
						style="max-height: {{this.scrollHeightValue}};"
						{{this.scrollFocusedIntoView
							this.overlayVisible
							this.focusedOptionIndex
							this.triggerId
							this.useVirtualScroll
							this.virtualItemSize
						}}
						{{this.virtualScrollSync this.overlayVisible this.useVirtualScroll}}
					>
						{{#if this.useVirtualScroll}}
							<div style="height: {{this.virtualTotalHeight}}px;">
								<div
									style="height: {{this.virtualStartIndexTimesItemSize}}px;"
									aria-hidden="true"
								></div>
								<ul class="multiselect-list" role="listbox" aria-multiselectable="true">
									{{#if (eq this.optionList.length 0)}}
										<li class="multiselect-empty-message" role="option">
											{{or
												(and @filter @emptyFilterMessage)
												@emptyMessage
												(t "msg.multiselect.empty")
											}}
										</li>
									{{else}}
										{{#each this.virtualOptionList as |entry|}}
											{{#let entry.item as |option|}}
												<li
													role="option"
													id="{{this.triggerId}}-item-{{entry.virtualIndex}}"
													class="multiselect-item
														{{if
															(eq entry.virtualIndex this.focusedOptionIndex)
															this.focusItemClass
															''
														}}
														{{if (this.isOptionSelected option) 'selected' ''}}
														{{if (this.isOptionDisabled option) 'disabled' ''}}"
													aria-selected={{this.isOptionSelected option}}
													aria-disabled={{this.isOptionDisabled option}}
													tabindex="-1"
													style="height: {{this.virtualItemSize}}px;"
													{{on "click" (fn this.selectOption entry)}}
												>
													<span class="multiselect-item-checkbox">
														<UlxCheckbox
															@checked={{this.isOptionSelected option}}
															@onCheckedChange={{fn this.onItemCheckboxChange entry}}
														/>
													</span>
													{{#if (has-block "item")}}
														<span class="multiselect-item-content">
															{{yield
																(hash
																	option=option
																	label=(this.getOptionLabel option)
																	index=entry.virtualIndex
																)
																to="item"
															}}
														</span>
													{{else}}
														<span
															class="multiselect-item-label
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
								<div style="height: {{this.virtualBottomSpacerHeight}}px;" aria-hidden="true"></div>
							</div>
						{{else}}
							<ul class="multiselect-list" role="listbox" aria-multiselectable="true">
								{{#if (eq this.visibleOptions.length 0)}}
									<li class="multiselect-empty-message" role="option">
										{{or
											(and @filter @emptyFilterMessage)
											@emptyMessage
											(t "msg.multiselect.empty")
										}}
									</li>
								{{else if this.hasGroups}}
									{{#each this.optionListWithGroups as |row|}}
										{{#if (eq row.type "group")}}
											<li class="multiselect-item-group" role="presentation" aria-hidden="true">
												{{#if (has-block "group")}}
													{{yield (hash label=row.label group=row.group) to="group"}}
												{{else}}
													<span>{{row.label}}</span>
												{{/if}}
											</li>
										{{else}}
											{{#let row.entry.item as |option|}}
												<li
													role="option"
													id="{{this.triggerId}}-item-{{row.flatIndex}}"
													class="multiselect-item
														{{if (eq row.flatIndex this.focusedOptionIndex) this.focusItemClass ''}}
														{{if (this.isOptionSelected option) 'selected' ''}}
														{{if (this.isOptionDisabled option) 'disabled' ''}}"
													aria-selected={{this.isOptionSelected option}}
													aria-disabled={{this.isOptionDisabled option}}
													tabindex="-1"
													{{on "click" (fn this.selectOption row.entry)}}
												>
													<span class="multiselect-item-checkbox">
														<UlxCheckbox
															@checked={{this.isOptionSelected option}}
															@onCheckedChange={{fn this.onItemCheckboxChange row.entry}}
														/>
													</span>
													{{#if (has-block "item")}}
														<span class="multiselect-item-content">
															{{yield
																(hash
																	option=option
																	label=(this.getOptionLabel option)
																	index=row.flatIndex
																)
																to="item"
															}}
														</span>
													{{else}}
														<span
															class="multiselect-item-label
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
												class="multiselect-item
													{{if (eq index this.focusedOptionIndex) this.focusItemClass ''}}
													{{if (this.isOptionSelected option) 'selected' ''}}
													{{if (this.isOptionDisabled option) 'disabled' ''}}"
												aria-selected={{this.isOptionSelected option}}
												aria-disabled={{this.isOptionDisabled option}}
												tabindex="-1"
												{{on "click" (fn this.selectOption entry)}}
											>
												<span class="multiselect-item-checkbox">
													<UlxCheckbox
														@checked={{this.isOptionSelected option}}
														@onCheckedChange={{fn this.onItemCheckboxChange entry}}
													/>
												</span>
												{{#if (has-block "item")}}
													<span class="multiselect-item-content">
														{{yield
															(hash option=option label=(this.getOptionLabel option) index=index)
															to="item"
														}}
													</span>
												{{else}}
													<span
														class="multiselect-item-label
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
						{{/if}}
					</div>
					{{#if (or (has-block "footer") (gt this.selectedCount 3))}}
						<div class="multiselect-panel-footer">
							<div class="multiselect-panel-footer-content">
								{{#if (has-block "footer")}}
									{{yield (hash selectedOptions=this.selectedOptions) to="footer"}}
								{{else}}
									<span class="multiselect-footer-count">{{t
											"msg.multiselect.items.selected"
											count=this.selectedCount
										}}</span>
								{{/if}}
							</div>
						</div>
					{{/if}}
				</div>
			{{/if}}

			{{#if (and @helpText)}}
				<div id="{{this.triggerId}}-help" class="help-text">{{@helpText}}</div>
			{{/if}}
			{{#if (and @error)}}
				<div
					id="{{this.triggerId}}-error"
					class="error-message"
					role="alert"
					aria-atomic="true"
				>{{@error}}</div>
			{{/if}}
		</div>
	</template>
}
