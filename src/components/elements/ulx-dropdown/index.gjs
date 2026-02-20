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
 */
export default class UlxDropdown extends Component {
	@action
	handleFocus(event) {
		const cb = this.args.onFocus;
		if (typeof cb === "function") cb(event);
	}

	@action
	handleBlur(event) {
		const cb = this.args.onBlur;
		if (typeof cb === "function") cb(event);
	}

	@tracked overlayVisible = false;
	@tracked focusedOptionIndex = -1;
	@tracked filterValue = "";
	@tracked triggerElement = null;
	@tracked panelElement = null;

	get key() {
		return this.args.key ?? guidFor(this);
	}

	get triggerId() {
		const { id } = this.args;
		return id ?? `ulx-dropdown-${this.key}`;
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

	get floatLabelRootClasses() {
		const base = this.rootClasses;
		const parts = base ? [base] : [];
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
		const k = key ?? this.optionLabelKey;
		const segs = k.split(".");
		let v = option;
		for (const seg of segs) {
			v = v?.[seg];
		}
		return v;
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
		const key = this.optionImageUrlKey;
		return key && option != null ? this.getResolved(option, key) : undefined;
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
		const opts = this.args.options ?? [];
		if (!this.hasGroups) return opts;
		const out = [];
		const labelKey = this.groupLabelKey;
		const childrenKey = this.optionGroupChildrenKey;
		for (const group of opts) {
			const children = group?.[childrenKey] ?? [];
			for (const item of children) {
				out.push({
					item,
					groupLabel: this.getResolved(group, labelKey),
					group
				});
			}
		}
		return out;
	}

	get allOptionsFlat() {
		const opts = this.args.options ?? [];
		if (!this.hasGroups) return opts;
		const out = [];
		const childrenKey = this.optionGroupChildrenKey;
		for (const group of opts) {
			const children = group?.[childrenKey] ?? [];
			out.push(...children);
		}
		return out;
	}

	get visibleOptions() {
		const list = this.hasGroups ? this.flatOptions : (this.args.options ?? []);
		const fv = (this.filterValue ?? "").trim().toLowerCase();
		if (!fv) return list;

		if (this.hasGroups) {
			return list.filter(({ item }) => this.getOptionLabel(item).toLowerCase().includes(fv));
		}
		return list.filter((opt) => this.getOptionLabel(opt).toLowerCase().includes(fv));
	}

	get selectedOption() {
		const value = this.args.value;
		const opts = this.args.options ?? [];
		if (this.hasGroups) {
			const flat = this.allOptionsFlat;
			return flat.find((opt) => this.valueEquals(this.getOptionValue(opt), value)) ?? null;
		}
		return opts.find((opt) => this.valueEquals(this.getOptionValue(opt), value)) ?? null;
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
		const opt = this.selectedOption;
		return opt != null ? this.getOptionLabel(opt) : null;
	}

	get selectedOptionImageUrl() {
		const key = this.optionImageUrlKey;
		const opt = this.selectedOption;
		return key && opt != null ? this.getResolved(opt, key) : undefined;
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
			if (element.parentNode === document.body) {
				document.body.removeChild(element);
			}
			return;
		}
		if (element.parentNode !== document.body) {
			document.body.appendChild(element);
		}
		return () => {
			if (element.parentNode === document.body) {
				document.body.removeChild(element);
			}
		};
	});

	positionPanel = modifier((element, [when, triggerEl]) => {
		if (!when || !element) return;

		const align = () => {
			const trigger = this.triggerElement ?? triggerEl;
			if (!trigger) return;

			const rect = trigger.getBoundingClientRect();
			const scrollX = window.pageXOffset ?? document.documentElement.scrollLeft ?? 0;
			const scrollY = window.pageYOffset ?? document.documentElement.scrollTop ?? 0;

			element.style.position = "absolute";
			element.style.top = `${rect.bottom + scrollY + 2}px`;
			element.style.left = `${rect.left + scrollX}px`;
			element.style.width = `${rect.width}px`;
			element.style.minWidth = `${rect.width}px`;
			element.style.maxWidth = `${rect.width}px`;
			element.style.zIndex = "1100";
			element.style.margin = "0";
			element.style.padding = "0";
		};

		schedule("afterRender", () => {
			align();
			if (element.parentNode === document.body) {
				requestAnimationFrame(align);
			}
		});

		const onScroll = () => {
			if (this.overlayVisible && element.parentNode === document.body) align();
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

	@action
	toggleOverlay() {
		if (this.args.disabled || this.args.loading) return;
		this.overlayVisible = !this.overlayVisible;
		if (this.overlayVisible) {
			this.filterValue = this.args.editable ? (this.selectedLabel ?? "") : "";
			this.focusedOptionIndex = this.selectedOptionIndex;
			if (this.focusedOptionIndex < 0 && this.visibleOptions.length > 0)
				this.focusedOptionIndex = 0;
			this.args.onShow?.();
		} else {
			this.args.onHide?.();
		}
	}

	get selectedOptionIndex() {
		const vis = this.visibleOptions;
		const val = this.args.value;
		if (this.hasGroups) {
			for (let i = 0; i < vis.length; i++) {
				const o = vis[i].item ?? vis[i];
				if (this.valueEquals(this.getOptionValue(o), val)) return i;
			}
		} else {
			for (let i = 0; i < vis.length; i++) {
				if (this.valueEquals(this.getOptionValue(vis[i]), val)) return i;
			}
		}
		return -1;
	}

	@action
	selectOption(entry) {
		const o = entry?.item != null ? entry.item : entry;
		if (this.isOptionDisabled(o)) return;
		const value = this.getOptionValue(o);
		this.overlayVisible = false;
		this.args.onChange?.(value);
		this.args.onHide?.();
	}

	@action
	clearSelection(event) {
		event?.stopPropagation?.();
		event?.preventDefault?.();
		if (this.args.disabled) return;
		this.overlayVisible = false;
		this.args.onChange?.(undefined);
		this.args.onFilter?.("");
		this.filterValue = "";
		this.args.onHide?.();
	}

	@action
	onClearIconKeydown(event) {
		const code = event.code || event.key;
		if (code === "Enter" || code === "NumpadEnter" || code === " " || code === "Space") {
			event.preventDefault();
			this.clearSelection(event);
		}
	}

	@action
	onFilterInput(event) {
		const v = event.target?.value ?? "";
		this.filterValue = v;
		this.focusedOptionIndex = 0;
		this.args.onFilter?.(v);
	}

	@action
	onFilterKeydown(event) {
		const code = event.code || event.key;
		if (code === "ArrowDown") {
			event.preventDefault();
			this.moveFocus(1);
			this.focusFocusedItem();
		} else if (code === "ArrowUp") {
			event.preventDefault();
			this.moveFocus(-1);
			this.focusFocusedItem();
		} else if (code === "Enter" || code === "NumpadEnter") {
			event.preventDefault();
			if (this.focusedOptionIndex >= 0) {
				const vis = this.visibleOptions;
				const item = vis[this.focusedOptionIndex];
				const o = this.hasGroups && item?.item != null ? item.item : item;
				if (o && !this.isOptionDisabled(o)) this.selectOption(item);
			}
		} else if (code === "Escape") {
			event.preventDefault();
			this.toggleOverlay();
		}
	}

	@action
	focusFocusedItem() {
		if (this.focusedOptionIndex < 0) return;
		const el = document.getElementById(`${this.triggerId}-item-${this.focusedOptionIndex}`);
		el?.focus?.();
	}

	@action
	onTriggerKeydown(event) {
		if (this.args.disabled) return;
		const code = event.code || event.key;
		if (code === "ArrowDown") {
			event.preventDefault();
			if (!this.overlayVisible) this.toggleOverlay();
			else this.moveFocus(1);
			return;
		}
		if (code === "ArrowUp") {
			event.preventDefault();
			if (this.overlayVisible) this.moveFocus(-1);
			else this.toggleOverlay();
			return;
		}
		if (code === "Enter" || code === "NumpadEnter") {
			event.preventDefault();
			if (this.overlayVisible && this.focusedOptionIndex >= 0) {
				const vis = this.visibleOptions;
				const item = vis[this.focusedOptionIndex];
				const o = this.hasGroups && item?.item != null ? item.item : item;
				if (o && !this.isOptionDisabled(o)) this.selectOption(item);
			} else if (!this.overlayVisible) this.toggleOverlay();
			return;
		}
		if (code === "Escape") {
			event.preventDefault();
			if (this.overlayVisible) this.toggleOverlay();
			return;
		}
	}

	@action
	onEditableInput(event) {
		const v = event.target?.value ?? "";
		this.filterValue = v;
		if (!this.overlayVisible) this.overlayVisible = true;
		this.focusedOptionIndex = 0;
		this.args.onFilter?.(v);
	}

	@action
	onEditableFocus(event) {
		if (this.args.disabled) return;
		if (!this.overlayVisible) {
			this.filterValue = this.selectedLabel ?? "";
			this.overlayVisible = true;
			this.focusedOptionIndex = this.selectedOptionIndex >= 0 ? this.selectedOptionIndex : 0;
			if (this.focusedOptionIndex < 0 && this.visibleOptions.length > 0)
				this.focusedOptionIndex = 0;
			this.args.onShow?.();
		}
		this.handleFocus(event);
	}

	@action
	onEditableClick(event) {
		if (this.args.disabled || this.args.loading) return;
		event.stopPropagation();
		if (!this.overlayVisible) {
			this.filterValue = this.selectedLabel ?? "";
			this.overlayVisible = true;
			this.focusedOptionIndex = this.selectedOptionIndex >= 0 ? this.selectedOptionIndex : 0;
			if (this.focusedOptionIndex < 0 && this.visibleOptions.length > 0)
				this.focusedOptionIndex = 0;
			this.args.onShow?.();
		}
	}

	@action
	onEditableBlur(event) {
		this.handleBlur(event);
	}

	@action
	onEditableTriggerKeydown(event) {
		if (this.args.disabled) return;
		const code = event.code || event.key;
		if (code === "ArrowDown") {
			event.preventDefault();
			if (!this.overlayVisible) {
				this.filterValue = this.selectedLabel ?? "";
				this.overlayVisible = true;
				this.focusedOptionIndex = this.selectedOptionIndex >= 0 ? this.selectedOptionIndex : 0;
				if (this.focusedOptionIndex < 0 && this.visibleOptions.length > 0)
					this.focusedOptionIndex = 0;
				this.args.onShow?.();
			} else this.moveFocus(1);
			return;
		}
		if (code === "ArrowUp") {
			event.preventDefault();
			if (this.overlayVisible) this.moveFocus(-1);
			else {
				this.filterValue = this.selectedLabel ?? "";
				this.overlayVisible = true;
				this.focusedOptionIndex =
					this.visibleOptions.length > 0 ? this.visibleOptions.length - 1 : 0;
				this.args.onShow?.();
			}
			return;
		}
		if (code === "Enter" || code === "NumpadEnter") {
			event.preventDefault();
			if (this.overlayVisible && this.focusedOptionIndex >= 0) {
				const vis = this.visibleOptions;
				const item = vis[this.focusedOptionIndex];
				const o = this.hasGroups && item?.item != null ? item.item : item;
				if (o && !this.isOptionDisabled(o)) this.selectOption(item);
			} else if (!this.overlayVisible) {
				this.filterValue = this.selectedLabel ?? "";
				this.overlayVisible = true;
				this.focusedOptionIndex = this.selectedOptionIndex >= 0 ? this.selectedOptionIndex : 0;
				if (this.focusedOptionIndex < 0 && this.visibleOptions.length > 0)
					this.focusedOptionIndex = 0;
				this.args.onShow?.();
			}
			return;
		}
		if (code === "Escape") {
			event.preventDefault();
			if (this.overlayVisible) this.toggleOverlay();
			return;
		}
		if (code === " " || code === "Space") {
			event.preventDefault();
			if (!this.overlayVisible) {
				this.filterValue = this.selectedLabel ?? "";
				this.overlayVisible = true;
				this.focusedOptionIndex = this.selectedOptionIndex >= 0 ? this.selectedOptionIndex : 0;
				if (this.focusedOptionIndex < 0 && this.visibleOptions.length > 0)
					this.focusedOptionIndex = 0;
				this.args.onShow?.();
			} else if (this.focusedOptionIndex >= 0) {
				const vis = this.visibleOptions;
				const item = vis[this.focusedOptionIndex];
				const o = this.hasGroups && item?.item != null ? item.item : item;
				if (o && !this.isOptionDisabled(o)) this.selectOption(item);
			}
			return;
		}
	}

	@action
	moveFocus(delta) {
		const vis = this.visibleOptions;
		if (!vis.length) return;
		let next = this.focusedOptionIndex + delta;
		if (next < 0) next = 0;
		if (next >= vis.length) next = vis.length - 1;
		this.focusedOptionIndex = next;
	}

	@action
	onPanelKeydown(event) {
		const code = event.code || event.key;
		if (code === "ArrowDown") {
			event.preventDefault();
			this.moveFocus(1);
		} else if (code === "ArrowUp") {
			event.preventDefault();
			this.moveFocus(-1);
		} else if (code === "Enter" || code === "NumpadEnter") {
			event.preventDefault();
			if (this.focusedOptionIndex >= 0) {
				const vis = this.visibleOptions;
				const item = vis[this.focusedOptionIndex];
				const o = this.hasGroups && item?.item != null ? item.item : item;
				if (o && !this.isOptionDisabled(o)) this.selectOption(item);
			}
		}
	}

	get optionList() {
		if (this.hasGroups) return this.visibleOptions;
		return this.visibleOptions.map((opt) => ({ item: opt }));
	}

	get optionListWithGroups() {
		if (!this.hasGroups) return [];
		const vis = this.visibleOptions;
		const rows = [];
		let lastLabel = null;
		for (let flatIndex = 0; flatIndex < vis.length; flatIndex++) {
			const entry = vis[flatIndex];
			const label = entry?.groupLabel ?? "";
			if (label !== lastLabel) {
				rows.push({ type: "group", label, group: entry?.group ?? null });
				lastLabel = label;
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
						{{on "click" this.toggleOverlay}}
						...attributes
					>
						{{#if @editable}}
							<input
								id={{this.triggerId}}
								class="dropdown-input editable {{this.inputtextClass}}"
								type="text"
								autocomplete="off"
								value={{this.editableInputValue}}
								placeholder={{this.triggerPlaceholderDisplay}}
								readonly={{@disabled}}
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
								{{on "click" this.onEditableClick}}
								{{on "blur" this.onEditableBlur}}
							/>
							<div class="dropdown-trigger {{if @disabled 'disabled' ''}}" tabindex="-1">
								{{#if (and @showClear this.selectedOption (not @disabled))}}
									<UlxIcon
										@type="font"
										@iconName="close-icon-01"
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
									<span class="dropdown-loading-icon" aria-hidden="true">
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
						{{else}}
							<div class="dropdown-input {{this.contentPlaceholderClass}}" tabindex="-1">
								{{#if (has-block "value")}}
									<div class="fxb fvc">
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
								class="dropdown-trigger {{if @disabled 'disabled' ''}}"
								id={{this.triggerId}}
								tabindex={{if (not @disabled) "0" "-1"}}
								role="button"
								{{on "keydown" this.onTriggerKeydown}}
								{{on "focus" this.handleFocus}}
								{{on "blur" this.handleBlur}}
							>
								{{#if (and @showClear this.selectedOption (not @disabled))}}
									<UlxIcon
										@type="font"
										@iconName="close-icon-01"
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
									<span class="dropdown-loading-icon" aria-hidden="true">
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
					{{on "click" this.toggleOverlay}}
					...attributes
				>
					{{#if @editable}}
						<input
							id={{this.triggerId}}
							class="dropdown-input editable {{this.inputtextClass}}"
							type="text"
							autocomplete="off"
							value={{this.editableInputValue}}
							placeholder={{this.triggerPlaceholderDisplay}}
							readonly={{@disabled}}
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
							{{on "click" this.onEditableClick}}
							{{on "blur" this.onEditableBlur}}
						/>
						<div class="dropdown-trigger {{if @disabled 'disabled' ''}}" tabindex="-1">
							{{#if (and @showClear this.selectedOption (not @disabled))}}
								<UlxIcon
									@type="font"
									@iconName="close-icon-01"
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
								<span class="dropdown-loading-icon" aria-hidden="true">
									<UlxProgressSpinner @size="xs-size" aria-hidden="true" />
								</span>
							{{else}}
								{{#if (has-block "icon")}}
									{{yield (hash overlayVisible=this.overlayVisible) to="icon"}}
								{{else}}
									<UlxIcon
										@iconName="down-arrow-icon"
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
								<div class="fxb fvc">
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
							class="dropdown-trigger {{if @disabled 'disabled' ''}}"
							id={{this.triggerId}}
							tabindex={{if (not @disabled) "0" "-1"}}
							role="button"
							{{on "keydown" this.onTriggerKeydown}}
							{{on "focus" this.handleFocus}}
							{{on "blur" this.handleBlur}}
						>
							{{#if (and @showClear this.selectedOption (not @disabled))}}
								<UlxIcon
									@type="font"
									@iconName="close-icon-01"
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
								<span class="dropdown-loading-icon" aria-hidden="true">
									<UlxProgressSpinner @size="xs-size" aria-hidden="true" />
								</span>
							{{else}}
								{{#if (has-block "icon")}}
									{{yield (hash overlayVisible=this.overlayVisible) to="icon"}}
								{{else}}
									<UlxIcon
										@iconName="down-arrow-icon"
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
					class="dropdown-panel"
					role="listbox"
					aria-activedescendant={{this.activeDescendantId}}
					aria-hidden="false"
					{{this.panelRef}}
					{{this.appendToBody this.overlayVisible}}
					{{this.positionPanel this.overlayVisible this.triggerElement}}
					{{on "keydown" this.onPanelKeydown}}
					{{on "click" this.stopPanelClick}}
				>
					{{#if (and @filter)}}
						<div class="dropdown-filter-container">
							<input
								type="text"
								class="dropdown-filter-input"
								value={{this.filterValue}}
								placeholder={{@filterPlaceholder}}
								{{on "input" this.onFilterInput}}
								{{on "keydown" this.onFilterKeydown}}
							/>
						</div>
					{{/if}}
					<div
						class="dropdown-wrapper"
						style="max-height: {{this.scrollHeightValue}};"
						{{this.scrollFocusedIntoView
							this.overlayVisible
							this.focusedOptionIndex
							this.triggerId
						}}
					>
						<ul class="dropdown-list" role="listbox">
							{{#if (eq this.visibleOptions.length 0)}}
								<li class="dropdown-empty-message" role="option">
									{{or (and @filter @emptyFilterMessage) @emptyMessage}}
								</li>
							{{else if this.hasGroups}}
								{{#each this.optionListWithGroups as |row|}}
									{{#if (eq row.type "group")}}
										<li class="dropdown-item-group" role="presentation" aria-hidden="true">
											{{#if (has-block "group")}}
												{{yield (hash label=row.label group=row.group) to="group"}}
											{{else}}
												<span>
													<div class="fxb fvc">
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
												class="dropdown-item grouped
													{{if (eq row.flatIndex this.focusedOptionIndex) this.focusItemClass ''}}
													{{if (this.isOptionSelected option) 'selected' ''}}
													{{if (and @checkmark (this.isOptionSelected option)) 'checkmark' ''}}
													{{if (this.isOptionDisabled option) 'disabled' ''}}"
												aria-selected={{this.isOptionSelected option}}
												aria-disabled={{this.isOptionDisabled option}}
												tabindex="-1"
												{{on "click" (fn this.selectOption row.entry)}}
											>
												{{#if (has-block "item")}}
													<span>
														<div class="fxb fvc">
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
														<span class="dropdown-check-icon selected" aria-hidden="true">
															<UlxIcon
																@size="s24"
																@componentClass="bs-icons1"
																@type="font"
																@iconName="ls-tick-icon"
																@componentClass="bs-icons1"
																aria-hidden="true"
															/>
														</span>
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
											class="dropdown-item
												{{if (eq index this.focusedOptionIndex) this.focusItemClass ''}}
												{{if (this.isOptionSelected option) 'selected' ''}}
												{{if (and @checkmark (this.isOptionSelected option)) 'checkmark' ''}}
												{{if (this.isOptionDisabled option) 'disabled' ''}}"
											aria-selected={{this.isOptionSelected option}}
											aria-disabled={{this.isOptionDisabled option}}
											tabindex="-1"
											{{on "click" (fn this.selectOption entry)}}
										>
											{{#if (has-block "item")}}
												<span>
													<div class="fxb fvc">
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
													<span class="dropdown-check-icon selected" aria-hidden="true">
														<UlxIcon
															@size="s24"
															@componentClass="bs-icons1"
															@type="font"
															@iconName="ls-tick-icon"
															@componentClass="bs-icons1"
															aria-hidden="true"
														/>
													</span>
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
						<div class="dropdown-panel-footer">
							<div class="dropdown-panel-footer-content">
								{{yield (hash selectedOption=this.selectedOption) to="footer"}}
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
