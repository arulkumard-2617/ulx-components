import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { schedule } from "@ember/runloop";
import { on } from "@ember/modifier";
import { modifier } from "ember-modifier";
import { fn } from "@ember/helper";
import { getComponentClass } from "../../../utils/component-config";
import overlayDismiss from "../../../modifiers/overlay-dismiss";
import { getOverlayZIndexAboveMask } from "../../../utils/overlay-helpers";
import {
	buildFloatLabelClass,
	getFloatLabelLabelClass,
	resolveFloatLabelText
} from "../../../utils/input-util";
import { guidFor } from "@ember/object/internals";
import { t } from "../../../utils/i18n";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxProgressSpinner from "../ulx-progressspinner/index.gjs";
import UlxCheckbox from "../ulx-checkbox/index.gjs";
import UlxTristateCheckbox from "../ulx-tristate-checkbox/index.gjs";
import UlxButton from "../ulx-button/index.gjs";
import { eq, and, not, or, gt } from "ember-truth-helpers";
import { hash, concat } from "@ember/helper";

/**
 * MultiSelect: multiple selection from a list with optional chips, filter, groups, templates.
 * Supports: basic, chips, group, template, filter, select-all, loading, float label, filled,
 * invalid, disabled. Accessible: listbox aria-multiselectable, keyboard nav, ARIA.
 * Label, help, error, and field layout: use UlxField wrapping the control; pass
 * `@key`, `@ariaDescribedBy`, and `@ariaErrorMessage` from the field control hash.
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
 * Named block <:footerActions> - Panel footer actions (right side). Use for buttons/links such as Remove.
 * Named block <:icon> - Custom trigger icon. Receives (hash overlayVisible).
 * Named block <:chip> - Custom chip content per selected item. Receives (hash option label value).
 * @param {string} [placeholder] - Placeholder when nothing selected.
 * @param {string} [display='comma'] - 'comma' | 'chip' for selected display.
 * @param {number} [selectionLimit] - Max number of selections (optional).
 * @param {boolean} [disabled=false] - Disables the component.
 * @param {boolean} [loading=false] - Shows progress spinner in trigger.
 * @param {boolean} [invalid=false] - Invalid state styling.
 * @param {boolean} [filter] - Show filter input in panel. When not provided, filter auto-enables for larger option lists (more than 10).
 * @param {boolean} [showClose=false] - Show close (X) button in panel header.
 * @param {boolean} [showClear=true] - Show a Clear action in the panel footer when value has items. Pass `false` to disable.
 * @param {boolean} [selectAll=false] - Show select-all checkbox in panel header.
 * @param {string} [selectAllLabel] - Label for select-all checkbox. When empty string, checkbox is shown without text.
 * @param {boolean} [filled=false] - Filled variant styling.
 * @param {boolean|string} [floatLabel=false] - Float label mode.
 * @param {string} [filterPlaceholder] - Placeholder for filter input.
 * @param {string} [emptyMessage] - Message when options list is empty.
 * @param {string} [emptyFilterMessage] - Message when filter has no results.
 * @param {string} [scrollHeight='232px'] - Max height of option list (CSS value).
 * @param {number} [zIndex=1100] - Overlay z-index (useful since panel is appended to <body>).
 * @param {'body'|'self'|HTMLElement|Function|string} [renderContainer='body'] - Where to render the overlay panel.
 *   - `"body"`: append overlay to `<body>` (default).
 *   - `"self"`: keep overlay where it is rendered in DOM (no re-parenting).
 *   - `HTMLElement`: append to that element.
 *   - `Function`: called to resolve the container element.
 *   - `string`: a CSS selector resolved via `document.querySelector()`.
 * @param {boolean} [resetFilterOnHide=true] - Reset filter when overlay closes.
 * @param {string} [label] - When `@floatLabel` is set: text for the floating label (or use string `@floatLabel`).
 * @param {string} [id] - Id for the trigger (or use `@key` with UlxField).
 * @param {string} [key] - Stable id when `@id` is omitted (e.g. `field.key` from UlxField).
 * @param {string} [ariaDescribedBy] - `aria-describedby` ids (e.g. from UlxField control hash).
 * @param {string} [ariaErrorMessage] - `aria-errormessage` id (e.g. `field.errorId`).
 * @param {boolean} [required=false] - Required field.
 * @param {Function} [onChange] - (value) => void when selection changes.
 * @param {Function} [onFocus] - Focus callback.
 * @param {Function} [onBlur] - Blur callback.
 * @param {Function} [onFilter] - (filterValue) => void when filter input changes.
 * @param {boolean} [allowAddition=false] - When true, show an Add button in the panel header tied to the filter input.
 * @param {Function} [onAddItem] - (filterValue) => void | Promise<void>; called when the Add button is clicked.
 * @param {Function} [onShow] - When overlay opens.
 * @param {Function} [onHide] - When overlay closes.
 * @param {Function} [onSelectAll] - Optional (event, checked) => void; when provided overrides default select-all.
 * @param {Function} [optionDisabled] - (option) => boolean or property key to disable options.
 * @param {Object} [virtualScrollerOptions] - When set with <code>itemSize</code> (number, px), the list is virtualized for large datasets. Not used when <code>@optionGroupLabel</code> is set.
 */
export default class UlxMultiSelect extends Component {
	@service modalStack;

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

	get triggerId() {
		const { id, key } = this.args;
		if (typeof id === "string" && id.length) return id;
		if (typeof key === "string" && key.length) return key;
		return `ulx-multiselect-${guidFor(this)}`;
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
			invalid = false,
			filled = false,
			loading = false,
			size = "m-size",
			customClass
		} = this.args;
		const parts = [this.baseClass];
		size && parts.push(size);
		(disabled || loading) && parts.push("disabled");
		!!invalid && parts.push("invalid");
		loading && parts.push("loading");
		filled && parts.push("filled");
		this.overlayVisible && parts.push("open");
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get isTriggerDisabled() {
		return !!this.args.disabled || !!this.args.loading;
	}

	get multiselectSize() {
		return this.args.size ?? "m-size";
	}

	get focusItemClass() {
		return getComponentClass("focus");
	}

	get floatLabelText() {
		const { floatLabel, label } = this.args;
		return resolveFloatLabelText(floatLabel, label);
	}

	get floatLabelClass() {
		const { size, filled } = this.args;
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

	get hasValue() {
		const value = this.args.value;
		return Array.isArray(value) && value.length > 0;
	}

	get isClearEnabled() {
		return typeof this.args.showClear === "boolean" ? this.args.showClear : true;
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
		return !!this.args.invalid;
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

	get optionCount() {
		if (this.hasGroups) return this.flatOptions.length;
		const options = this.args.options ?? [];
		return Array.isArray(options) ? options.length : 0;
	}

	get isFilterEnabled() {
		// Explicit override wins.
		if (typeof this.args.filter === "boolean") return this.args.filter;

		// Allow-addition needs filter input for typing new items.
		if (this.args.allowAddition) return true;

		// Heuristic: large lists get filter by default.
		return this.optionCount > 10;
	}

	get shouldRenderPanelHeader() {
		const selectAllEnabled = !!this.args.selectAll && this.allowOptionSelect;
		const showClose = !!this.args.showClose;
		return selectAllEnabled || this.isFilterEnabled || showClose;
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

	get selectedValueCount() {
		const value = this.args.value;
		return Array.isArray(value) ? value.length : 0;
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
		return this.args.ariaDescribedBy;
	}

	get ariaErrorMessage() {
		return this.args.ariaErrorMessage;
	}

	get isRequired() {
		return !!this.args.required;
	}

	@action
	clearSelectionInPanel(event) {
		event?.stopPropagation?.();
		event?.preventDefault?.();
		if (this.isTriggerDisabled) return;
		this.args.onChange?.([]);
	}

	get selectAllItemLabel() {
		const { selectAllLabel } = this.args;
		return selectAllLabel !== undefined ? selectAllLabel : t("lbl.select.all");
	}

	get selectAllHeaderLabel() {
		return this.isFilterEnabled ? undefined : this.selectAllItemLabel;
	}

	get allowOptionSelect() {
		const { selectionLimit, value } = this.args;
		if (!selectionLimit) return true;
		const current = Array.isArray(value) ? value.length : 0;
		return current < selectionLimit;
	}

	get canAddItem() {
		const allowAddition = !!this.args.allowAddition;
		if (!allowAddition) return false;
		const filterValue = (this.filterValue ?? "").trim();
		if (!filterValue) return false;
		const { selectionLimit, value } = this.args;
		const currentLength = Array.isArray(value) ? value.length : 0;
		if (typeof selectionLimit === "number" && currentLength >= selectionLimit) return false;
		return true;
	}

	get headerSelectableCount() {
		const visible = this.visibleOptions;
		if (!visible.length) return 0;
		if (this.hasGroups) {
			return visible.filter(({ item }) => !this.isOptionDisabled(item)).length;
		}
		return visible.filter((option) => !this.isOptionDisabled(option)).length;
	}

	get headerSelectedCount() {
		const visible = this.visibleOptions;
		if (!visible.length) return 0;
		if (this.hasGroups) {
			return visible.reduce((count, { item }) => {
				if (this.isOptionDisabled(item)) return count;
				return this.isOptionSelected(item) ? count + 1 : count;
			}, 0);
		}
		return visible.reduce((count, option) => {
			if (this.isOptionDisabled(option)) return count;
			return this.isOptionSelected(option) ? count + 1 : count;
		}, 0);
	}

	get headerTristateValue() {
		const totalSelectable = this.headerSelectableCount;
		if (totalSelectable === 0) return false;
		const selectedCount = this.headerSelectedCount;
		if (selectedCount === 0) return false;
		if (selectedCount === totalSelectable) return true;
		return null;
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

	resolveRenderContainer() {
		const containerArg = this.args.renderContainer ?? "body";
		if (containerArg === "self") return null;
		if (containerArg === "body") return document.body;
		if (typeof containerArg === "function") {
			try {
				const result = containerArg();
				return result instanceof HTMLElement ? result : document.body;
			} catch {
				return document.body;
			}
		}
		if (typeof containerArg === "string") {
			if (containerArg.trim().length === 0) return document.body;
			return document.querySelector(containerArg) ?? document.body;
		}
		return containerArg instanceof HTMLElement ? containerArg : document.body;
	}

	parsePx(value, fallback) {
		if (typeof value !== "string") return fallback;
		const trimmed = value.trim();
		if (!trimmed.endsWith("px")) return fallback;
		const n = Number(trimmed.slice(0, -2));
		return Number.isFinite(n) ? n : fallback;
	}

	@action
	alignPanelToTrigger(panelEl, triggerElArg) {
		if (!panelEl) return;
		const trigger = this.triggerElement ?? triggerElArg;
		if (!trigger) return;

		const triggerRect = trigger.getBoundingClientRect();
		const viewportPadding = 8;
		const spacing = 2;

		const container = this.resolveRenderContainer();
		const useBody = !container || container === document.body;
		const containerRect = !useBody ? container.getBoundingClientRect() : null;

		const triggerLeft = useBody
			? triggerRect.left
			: triggerRect.left - containerRect.left + container.scrollLeft;
		const triggerTop = useBody
			? triggerRect.top
			: triggerRect.top - containerRect.top + container.scrollTop;
		const triggerBottom = useBody
			? triggerRect.bottom
			: triggerRect.bottom - containerRect.top + container.scrollTop;

		// Ensure the panel is laid out so we can measure chrome heights.
		panelEl.style.position = useBody ? "fixed" : "absolute";
		panelEl.style.left = `${triggerLeft}px`;
		panelEl.style.width = `${triggerRect.width}px`;
		panelEl.style.minWidth = `${triggerRect.width}px`;
		panelEl.style.maxWidth = `${triggerRect.width}px`;

		const zIndex =
			typeof this.args.zIndex === "number"
				? this.args.zIndex
				: getOverlayZIndexAboveMask(this.modalStack);
		panelEl.style.zIndex = `${zIndex}`;
		panelEl.style.margin = "0";
		panelEl.style.padding = "0";

		const headerEl = panelEl.querySelector(".multiselect-header");
		const footerEl = panelEl.querySelector(".multiselect-footer");
		const wrapperEl = panelEl.querySelector(".multiselect-wrapper");

		const headerH = headerEl?.offsetHeight ?? 0;
		const footerH = footerEl?.offsetHeight ?? 0;
		const chromeH = headerH + footerH;

		const requestedWrapperMax = this.parsePx(this.scrollHeightValue, 232);
		const desiredWrapperHeight = Math.min(
			requestedWrapperMax,
			Math.max(0, wrapperEl?.scrollHeight ?? requestedWrapperMax)
		);

		const boundaryTop = useBody ? 0 : container.scrollTop;
		const boundaryBottom = useBody
			? window.innerHeight
			: container.scrollTop + container.clientHeight;

		const spaceBelow = Math.max(0, boundaryBottom - triggerBottom - spacing - viewportPadding);
		const spaceAbove = Math.max(0, triggerTop - boundaryTop - spacing - viewportPadding);

		const availableWrapperBelow = Math.max(0, spaceBelow - chromeH);
		const availableWrapperAbove = Math.max(0, spaceAbove - chromeH);
		const maxWrapperBelow = Math.min(desiredWrapperHeight, availableWrapperBelow);
		const maxWrapperAbove = Math.min(desiredWrapperHeight, availableWrapperAbove);

		const useAbove = maxWrapperAbove > maxWrapperBelow;
		const wrapperMax = useAbove ? maxWrapperAbove : maxWrapperBelow;

		if (wrapperEl) {
			wrapperEl.style.maxHeight = `${wrapperMax}px`;
			wrapperEl.style.height = `${wrapperMax}px`;
		}

		const panelHeight = chromeH + wrapperMax;
		const desiredTop = useAbove ? triggerTop - panelHeight - spacing : triggerBottom + spacing;

		// Clamp panel within the visible boundary only while the trigger is within it.
		// If the trigger scrolls off-screen (top or bottom), allow the panel to move off-screen too
		// (prevents the panel from getting "stuck" at a fixed top value).
		let boundaryMinTop = boundaryTop + viewportPadding;
		let boundaryMaxTop = boundaryBottom - panelHeight - viewportPadding;

		const triggerOutTop = triggerBottom < boundaryTop + viewportPadding;
		const triggerOutBottom = triggerTop > boundaryBottom - viewportPadding;

		triggerOutTop && (boundaryMinTop = Math.min(boundaryMinTop, desiredTop));
		triggerOutBottom && (boundaryMaxTop = Math.max(boundaryMaxTop, desiredTop));

		// Safety: allow negative values when rendering to body and moving above viewport.
		if (useBody) {
			boundaryMinTop = Math.min(boundaryMinTop, -panelHeight);
		}

		const clampedTop = Math.min(
			Math.max(boundaryMinTop, desiredTop),
			Math.max(boundaryMinTop, boundaryMaxTop)
		);

		panelEl.style.top = `${clampedTop}px`;
		panelEl.dataset.placement = useAbove ? "top" : "bottom";
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

	appendToBody = modifier((element, [when]) => {
		const container = this.resolveRenderContainer();

		let restoreContainerPosition = null;

		if (!when) {
			// Modifier teardown handles any cleanup via returned function below.
			return;
		}

		if (container && element?.parentNode !== container) {
			container.appendChild(element);
		}

		// If we append to a non-body container, ensure it can anchor absolute positioning.
		if (container && container !== document.body) {
			const computed = window.getComputedStyle(container);
			if (computed.position === "static") {
				const prev = container.style.position;
				container.style.position = "relative";
				restoreContainerPosition = () => {
					container.style.position = prev;
				};
			}
		}

		return () => {
			restoreContainerPosition?.();
			// Remove element if it was moved under a container.
			if (container && element?.parentNode === container) container.removeChild(element);
		};
	});

	positionPanel = modifier((element, [when, triggerEl]) => {
		if (!when || !element) return;
		const alignPanel = () => this.alignPanelToTrigger(element, triggerEl);
		schedule("afterRender", () => {
			alignPanel();
			requestAnimationFrame(alignPanel);
		});
		const onScrollOrResize = () => {
			if (this.overlayVisible) alignPanel();
		};
		const containerForScroll = this.resolveRenderContainer();
		window.addEventListener("scroll", onScrollOrResize, true);
		window.addEventListener("resize", onScrollOrResize);
		containerForScroll &&
			containerForScroll !== document.body &&
			containerForScroll.addEventListener("scroll", onScrollOrResize, true);
		return () => {
			window.removeEventListener("scroll", onScrollOrResize, true);
			window.removeEventListener("resize", onScrollOrResize);
			containerForScroll &&
				containerForScroll !== document.body &&
				containerForScroll.removeEventListener("scroll", onScrollOrResize, true);
		};
	});

	repositionOnLayoutChange = modifier(
		(element, [when, selectedCount, headerShown, footerShown]) => {
			if (!when || !element) return;
			// Runs when these args change while overlay is open (e.g. footer appears after selecting).
			schedule("afterRender", () => {
				this.alignPanelToTrigger(element);
				requestAnimationFrame(() => this.alignPanelToTrigger(element));
			});
		}
	);

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
	addItem() {
		if (!this.canAddItem) return;
		const query = (this.filterValue ?? "").trim();
		const handler = this.args.onAddItem;
		if (typeof handler !== "function") return;
		const result = handler(query);
		this.filterValue = "";
		this.args.onFilter?.("");
		if (result != null && typeof result.then === "function") {
			result.then(() => this.closePanel());
		} else {
			this.closePanel();
		}
	}

	@action
	onItemCheckboxChange(entry, _checked, event) {
		event?.stopPropagation?.();
		this.selectOption(entry);
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
		if (this.isTriggerDisabled) return;
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
	onHeaderTristateChange(_nextValue, event) {
		event?.stopPropagation?.();
		const nextChecked = this.isAllSelected ? false : true;
		this.onSelectAllChange(nextChecked);
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
			if (this.args.allowAddition && this.canAddItem) {
				this.addItem();
				return;
			}
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
		if (this.isTriggerDisabled) return;
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

	@action
	stopItemCheckboxClick(event) {
		event.stopPropagation();
	}

	<template>
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
						aria-errormessage={{this.ariaErrorMessage}}
						tabindex={{if (not this.isTriggerDisabled) "0" "-1"}}
						{{this.triggerRef}}
						{{overlayDismiss this.overlayVisible onClose=this.toggleOverlay panel=this.panelElement dismissVariant="rootPanel" defer=true}}
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
						{{#if (and @loading)}}
							<span class="multiselect-loading-icon" aria-hidden="true">
								<UlxProgressSpinner @size={{this.multiselectSize}} aria-hidden="true" />
							</span>
						{{else}}
							{{#if (has-block "icon")}}
								{{yield (hash overlayVisible=this.overlayVisible) to="icon"}}
							{{else}}
								<div
									class="multiselect-trigger {{if this.isTriggerDisabled 'disabled' ''}}"
									tabindex="-1"
								>
									<UlxIcon
										@iconName="down-stroke-icon-new multiselect-icon"
										@type="font"
										@componentClass="bs-icons1"
										aria-hidden="true"
									/>
								</div>
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
					aria-errormessage={{this.ariaErrorMessage}}
					{{this.triggerRef}}
					{{overlayDismiss this.overlayVisible onClose=this.toggleOverlay panel=this.panelElement dismissVariant="rootPanel" defer=true}}
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

					{{#if (and @loading)}}
						<span class="multiselect-loading-icon" aria-hidden="true">
							<UlxProgressSpinner @size={{this.multiselectSize}} aria-hidden="true" />
						</span>
					{{else}}
						{{#if (has-block "icon")}}
							{{yield (hash overlayVisible=this.overlayVisible) to="icon"}}
						{{else}}
							<div
								class="multiselect-trigger {{if this.isTriggerDisabled 'disabled' ''}}"
								id={{this.triggerId}}
								tabindex={{if (not this.isTriggerDisabled) "0" "-1"}}
								role="button"
							>
								<UlxIcon
									@iconName="down-stroke-icon-new multiselect-icon"
									@type="font"
									@componentClass="bs-icons1"
									aria-hidden="true"
								/>
							</div>
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
					{{this.repositionOnLayoutChange
						this.overlayVisible
						this.selectedValueCount
						this.shouldRenderPanelHeader
						(or (has-block "footer") (has-block "footerActions") (gt this.selectedValueCount 0))
					}}
					{{on "keydown" this.onPanelKeydown}}
					{{on "click" this.stopPanelClick}}
				>
					{{#if this.shouldRenderPanelHeader}}
						<div class="multiselect-header">
							{{#if (and @selectAll this.allowOptionSelect)}}
								<div class="multiselect-header-checkbox-container">
									<UlxTristateCheckbox
										@value={{this.headerTristateValue}}
										@itemLabel={{this.selectAllHeaderLabel}}
										@onValueChange={{this.onHeaderTristateChange}}
									/>
								</div>
							{{/if}}
							{{#if this.isFilterEnabled}}
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
								{{#if @allowAddition}}
									<UlxButton
										@label={{t "label.add"}}
										@variant="primary"
										@onClick={{this.addItem}}
										@disabled={{not this.canAddItem}}
									/>
								{{/if}}
							{{/if}}
							{{#if @showClose}}
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
							{{/if}}
						</div>
					{{/if}}
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
												(and this.isFilterEnabled @emptyFilterMessage)
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
													<span
														class="multiselect-item-checkbox"
														{{on "click" this.stopItemCheckboxClick}}
													>
														<UlxCheckbox
															@checked={{this.isOptionSelected option}}
															@onCheckedChange={{fn this.onItemCheckboxChange entry}}
															@fieldClass="flex"
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
											(and this.isFilterEnabled @emptyFilterMessage)
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
													<span
														class="multiselect-item-checkbox"
														{{on "click" this.stopItemCheckboxClick}}
													>
														<UlxCheckbox
															@checked={{this.isOptionSelected option}}
															@onCheckedChange={{fn this.onItemCheckboxChange row.entry}}
															@fieldClass="flex"
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
												<span
													class="multiselect-item-checkbox"
													{{on "click" this.stopItemCheckboxClick}}
												>
													<UlxCheckbox
														@checked={{this.isOptionSelected option}}
														@onCheckedChange={{fn this.onItemCheckboxChange entry}}
														@fieldClass="flex"
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

					<div class="multiselect-footer">
						<div class="multiselect-footer-left">
							{{#if (has-block "footer")}}
								{{yield (hash selectedOptions=this.selectedOptions) to="footer"}}
							{{else}}
								<span class="multiselect-footer-count">{{t
										"msg.multiselect.items.selected"
										count=this.selectedValueCount
									}}</span>
							{{/if}}
						</div>
						<div class="multiselect-footer-right">
							{{#if (has-block "footerActions")}}
								{{yield (hash selectedOptions=this.selectedOptions) to="footerActions"}}
							{{/if}}
								{{#if (and this.isClearEnabled this.hasValue (not this.isTriggerDisabled))}}
								<UlxButton
									@label={{t "lbl.clear"}}
									@variant="link"
									@onClick={{this.clearSelectionInPanel}}
								/>
							{{/if}}
						</div>
					</div>

				</div>
			{{/if}}
	</template>
}
