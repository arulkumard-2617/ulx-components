import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { schedule } from "@ember/runloop";
import { on } from "@ember/modifier";
import { modifier } from "ember-modifier";
import { fn } from "@ember/helper";
import { getComponentClass } from "../../utils/component-config";
import { isInvalidState } from "../../utils/input-util";
import overlayDismiss from "../../modifiers/overlay-dismiss";
import overlayPortal from "../../modifiers/overlay-portal";
import { getOverlayZIndexAboveMask } from "../../utils/overlay-helpers";
import {
	buildOverlayCoordinateApi,
	clampOverlayValue,
	getBoundaryRectInOverlaySpace,
	resolveOverlayBoundary,
	resolveOverlayContext,
	resolveOverlayScrollContext
} from "../../utils/overlay-context";
import { guidFor } from "@ember/object/internals";
import { t } from "../../utils/i18n";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxProgressSpinner from "../ulx-progressspinner/index.gjs";
import UlxCheckbox from "../ulx-checkbox/index.gjs";
import UlxTristateCheckbox from "../ulx-tristate-checkbox/index.gjs";
import UlxButton from "../ulx-button/index.gjs";
import { eq, and, not, or, gt } from "ember-truth-helpers";
import { hash, concat } from "@ember/helper";

/** Focus order for Tab cycling in the panel header (must match `data-qa` on real controls). */
const MULTISELECT_HEADER_FOCUSABLE_SELECTOR =
	"[data-qa='ulx-multiselect-select-all'] .checkbox-input:not([disabled]), " +
	"[data-qa='ulx-multiselect-filter']:not([disabled]), " +
	"[data-qa='ulx-multiselect-add']:not([disabled]), " +
	"[data-qa='ulx-multiselect-close']:not([disabled]), " +
	"[data-qa='ulx-multiselect-clear']:not([disabled])";

/** Broader set (includes disabled nodes) to detect when focus is still “in” the header strip. */
const MULTISELECT_HEADER_ACTIVE_SELECTOR =
	"[data-qa='ulx-multiselect-select-all'] .checkbox-input, " +
	"[data-qa='ulx-multiselect-filter'], " +
	"[data-qa='ulx-multiselect-add'], " +
	"[data-qa='ulx-multiselect-close'], " +
	"[data-qa='ulx-multiselect-clear']";

/**
 * MultiSelect: multiple selection from a list with optional chips, filter, groups, templates.
 * Supports: basic, chips, group, template, filter, select-all, loading,
 * invalid, disabled. Accessible: listbox aria-multiselectable, keyboard nav, ARIA.
 * Label, help, error, and field layout: use UlxField wrapping the control and pass
 * `@field={{field}}` (or `@key`, `@ariaDescribedBy`, and `@ariaErrorMessage` from the yield hash).
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
 * @param {string} [display='chip'] - 'comma' | 'chip' for selected display.
 * @param {boolean} [chipWrap=true] - When true with `@display='chip'`, selected chips wrap to multiple lines instead of single-line truncation (ellipsis).
 * @param {number} [selectionLimit] - Max number of selections (optional).
 * @param {boolean} [disabled=false] - Disables the component.
 * @param {boolean} [loading=false] - Shows progress spinner in trigger.
 * @param {object} [field] - Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.
 * @param {boolean} [invalid=false] - Invalid state styling.
 * @param {unknown} [error] - When truthy, treated like invalid for styling (same as `UlxInput`); message is not rendered here.
 * @param {boolean} [filter] - Show filter input in panel. When not provided, filter auto-enables for larger option lists (more than 10).
 * @param {boolean} [showClose=false] - Show close (X) button in panel header.
 * @param {boolean} [showClear=true] - Show a Clear action in the panel footer when value has items. Pass `false` to disable.
 * @param {boolean} [selectAll=false] - Show select-all checkbox in panel header.
 * @param {string} [selectAllLabel] - Label for select-all checkbox. When empty string, checkbox is shown without text.
 * @param {string} [filterPlaceholder] - Placeholder for filter input.
 * @param {string} [filterAriaLabel] - Accessible name for the panel filter input (defaults to `lbl.a11y.multiselect.filter`).
 * @param {string} [emptyMessage] - Message when options list is empty.
 * @param {string} [emptyFilterMessage] - Message when filter has no results.
 * @param {string} [scrollHeight='232px'] - Max height of option list (CSS value).
 * @param {number} [zIndex=1100] - Overlay z-index (useful when the panel must stack above nearby overlays).
 * @param {'self'|'body'|HTMLElement|Function|string} [context='self'] - Where to render the overlay panel.
 *   - `"self"`: keep the panel in-place after the component markup (default).
 *   - `"body"`: append overlay to `<body>`.
 *   - `HTMLElement`: append to that element.
 *   - `Function`: called to resolve the container element.
 *   - `string`: a CSS selector resolved via `document.querySelector()`.
 * @param {'self'|'body'|HTMLElement|Function|string} [renderContainer] - Backward-compatible alias for `@context`.
 * @param {'window'|HTMLElement|Function|string} [boundary='window'] - Boundary used for flip/clamp calculations.
 * @param {'window'|HTMLElement|Function|string} [scrollContext='window'] - Scroll target that closes the overlay immediately.
 * @param {boolean} [resetFilterOnHide=true] - Reset filter when overlay closes.
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
 * @param {Function} [onAddItem] - (filterValue) => void | Promise<void>; when the Add button is clicked; only invoked if the trimmed filter does not match an existing option label or value.
 * @param {boolean} [closeOnAddItem=false] - Close the panel after Add is clicked. Useful when Add opens another overlay.
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
	@tracked keyboardNavigationMode = "header";
	@tracked filterValue = "";
	@tracked triggerElement = null;
	@tracked panelElement = null;
	@tracked wrapperScrollTop = 0;
	@tracked wrapperClientHeight = 0;

	get fieldContext() {
		const { field } = this.args;
		return field && typeof field === "object" ? field : null;
	}

	get triggerId() {
		const { id, key } = this.args;
		if (typeof id === "string" && id.length) return id;
		if (typeof key === "string" && key.length) return key;
		const fieldKey = this.fieldContext?.key;
		if (typeof fieldKey === "string" && fieldKey.length) return fieldKey;
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
			invalid: invalidArg = false,
			error,
			loading = false,
			size = "m-size",
			customClass,
			display = "chip",
			chipWrap = true
		} = this.args;
		const invalid = isInvalidState(invalidArg, error ?? this.fieldContext?.error);
		const parts = [this.baseClass];
		size && parts.push(size);
		(disabled || loading) && parts.push("disabled");
		invalid && parts.push("invalid");
		loading && parts.push("loading");
		this.overlayVisible && parts.push("open");
		chipWrap && display === "chip" && parts.push("chip-wrap");
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

	get hasValue() {
		const value = this.args.value;
		return Array.isArray(value) && value.length > 0;
	}

	get isClearEnabled() {
		return typeof this.args.showClear === "boolean" ? this.args.showClear : true;
	}

	get isInvalid() {
		const { invalid, error } = this.args;
		return isInvalidState(invalid, error ?? this.fieldContext?.error);
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
		return (this.args.display ?? "chip") === "chip";
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
		if (typeof a === "object" && typeof b === "object") {
			return JSON.stringify(a) === JSON.stringify(b);
		}
		return false;
	}

	@action
	isAdditionFilterDuplicateOfOption(option, trimmedFilter, normalizedFilter) {
		if (this.getOptionLabel(option).trim().toLowerCase() === normalizedFilter) return true;
		const optionVal = this.getOptionValue(option);
		if (optionVal == null) return false;
		if (this.valueEquals(optionVal, trimmedFilter)) return true;
		if (typeof optionVal === "object" && optionVal !== null) return false;
		return String(optionVal).trim().toLowerCase() === normalizedFilter;
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

	/** One row from `visibleOptions`: grouped rows are `{ item, groupLabel, … }`, flat list is the option itself. */
	visibleEntryToOption(entry) {
		return this.hasGroups && entry?.item != null ? entry.item : entry;
	}

	get firstEnabledVisibleOptionIndex() {
		const list = this.visibleOptions;
		for (let i = 0; i < list.length; i++) {
			if (!this.isOptionDisabled(this.visibleEntryToOption(list[i]))) return i;
		}
		return list.length > 0 ? 0 : -1;
	}

	get lastEnabledVisibleOptionIndex() {
		const list = this.visibleOptions;
		for (let i = list.length - 1; i >= 0; i--) {
			if (!this.isOptionDisabled(this.visibleEntryToOption(list[i]))) return i;
		}
		return list.length > 0 ? list.length - 1 : -1;
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

	get filterInputAriaLabel() {
		const { filterAriaLabel } = this.args;
		if (typeof filterAriaLabel === "string" && filterAriaLabel.length) {
			return filterAriaLabel;
		}
		return t("lbl.a11y.multiselect.filter");
	}

	get displayClass() {
		return (this.args.display ?? "chip") === "chip" ? "chip-display" : "comma-display";
	}

	get inputtextClass() {
		return getComponentClass("inputtext");
	}

	get ariaDescribedBy() {
		const { ariaDescribedBy } = this.args;
		return ariaDescribedBy ?? this.fieldContext?.describedBy;
	}

	get ariaErrorMessage() {
		const { ariaErrorMessage } = this.args;
		return ariaErrorMessage ?? this.fieldContext?.errorId;
	}

	get isRequired() {
		return !!this.args.required;
	}

	@action
	clearSelectionInPanel(event) {
		event?.stopPropagation?.();
		event?.preventDefault?.();
		if (this.isTriggerDisabled) return;
		this.keyboardNavigationMode = "header";
		this.args.onChange?.([]);
		this.focusedOptionIndex = this.firstEnabledVisibleOptionIndex;
		this.focusPanelInputOnOpen();
	}

	@action
	onClearButtonKeydown(event) {
		const keyPressed = event.code || event.key;
		if (keyPressed === "Enter" || keyPressed === "NumpadEnter") {
			event.preventDefault();
			event.stopPropagation();
		} else if (keyPressed === " " || keyPressed === "Space") {
			event.preventDefault();
			event.stopPropagation();
			this.clearSelectionInPanel(event);
		}
	}

	get selectAllItemLabel() {
		const { selectAllLabel } = this.args;
		return selectAllLabel !== undefined ? selectAllLabel : t("label.select.all");
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
		const normalizedFilterValue = filterValue.toLowerCase();
		const options = this.hasGroups
			? this.flatOptions.map(({ item }) => item)
			: (this.args.options ?? []);
		const hasDuplicate = options.some((option) =>
			this.isAdditionFilterDuplicateOfOption(option, filterValue, normalizedFilterValue)
		);
		if (hasDuplicate) return false;
		const { selectionLimit, value } = this.args;
		const currentLength = Array.isArray(value) ? value.length : 0;
		if (typeof selectionLimit === "number" && currentLength >= selectionLimit) return false;
		return true;
	}

	get hasHeaderFocusableControls() {
		return this.getPanelHeaderFocusableElements().length > 0;
	}

	get headerSelectableCount() {
		const visible = this.visibleOptions;
		if (!visible.length) return 0;
		return visible.filter((entry) => !this.isOptionDisabled(this.visibleEntryToOption(entry)))
			.length;
	}

	get headerSelectedCount() {
		const visible = this.visibleOptions;
		if (!visible.length) return 0;
		return visible.reduce((count, entry) => {
			const option = this.visibleEntryToOption(entry);
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
		const selectable = visible.filter(
			(entry) => !this.isOptionDisabled(this.visibleEntryToOption(entry))
		);
		return selectable.every((entry) => this.isOptionSelected(this.visibleEntryToOption(entry)));
	}

	get optionList() {
		if (this.hasGroups) return this.visibleOptions;
		return this.visibleOptions.map((option) => ({ item: option }));
	}

	get optionListWithGroups() {
		if (!this.hasGroups) return [];
		const list = this.visibleOptions;
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

	get ariaControls() {
		return this.overlayVisible ? this.listboxId : undefined;
	}

	get activeDescendantId() {
		if (!this.overlayVisible || this.focusedOptionIndex < 0) return undefined;
		return `${this.triggerId}-item-${this.focusedOptionIndex}`;
	}

	get scrollHeightValue() {
		return this.args.scrollHeight ?? "232px";
	}

	get resolvedContext() {
		return resolveOverlayContext(this.args.context ?? this.args.renderContainer ?? "self");
	}

	get resolvedBoundary() {
		return resolveOverlayBoundary(this.args.boundary ?? "window");
	}

	get resolvedScrollContext() {
		return resolveOverlayScrollContext(this.args.scrollContext ?? "window");
	}

	resolveRenderContainer() {
		return this.resolvedContext;
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

		const resolvedContext = this.resolveRenderContainer();
		const triggerViewportRect = trigger.getBoundingClientRect();
		const coordinateApi = buildOverlayCoordinateApi(resolvedContext, panelEl);
		const triggerRect = coordinateApi.fromViewportRect(triggerViewportRect);
		const boundaryRect = getBoundaryRectInOverlaySpace(this.resolvedBoundary, coordinateApi);
		const viewportPadding = 8;
		const spacing = 2;

		// Ensure the panel is laid out so we can measure chrome heights.
		coordinateApi.applyPosition(panelEl, triggerRect.bottom + spacing, triggerRect.left);
		panelEl.style.width = `${triggerViewportRect.width}px`;
		panelEl.style.minWidth = `${triggerViewportRect.width}px`;
		panelEl.style.maxWidth = `${triggerViewportRect.width}px`;

		const zIndex =
			typeof this.args.zIndex === "number"
				? this.args.zIndex
				: resolvedContext === document.body
					? getOverlayZIndexAboveMask(this.modalStack)
					: 2;
		panelEl.style.setProperty("z-index", `${zIndex}`, "important");
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

		const fallbackBoundary = boundaryRect ?? {
			top: 0,
			left: 0,
			right: triggerRect.right + triggerViewportRect.width + viewportPadding,
			bottom: triggerRect.bottom + desiredWrapperHeight + chromeH + viewportPadding
		};
		const boundaryTop = fallbackBoundary.top;
		const boundaryBottom = fallbackBoundary.bottom;

		const spaceBelow = Math.max(0, boundaryBottom - triggerRect.bottom - spacing - viewportPadding);
		const spaceAbove = Math.max(0, triggerRect.top - boundaryTop - spacing - viewportPadding);

		const availableWrapperBelow = Math.max(0, spaceBelow - chromeH);
		const availableWrapperAbove = Math.max(0, spaceAbove - chromeH);
		const maxWrapperBelow = Math.min(desiredWrapperHeight, availableWrapperBelow);
		const maxWrapperAbove = Math.min(desiredWrapperHeight, availableWrapperAbove);

		const useAbove = maxWrapperAbove > maxWrapperBelow;
		const wrapperMax = useAbove ? maxWrapperAbove : maxWrapperBelow;

		if (wrapperEl) {
			wrapperEl.style.removeProperty("height");
			wrapperEl.style.removeProperty("max-height");
		}

		const panelHeight = panelEl.offsetHeight || chromeH + wrapperMax;
		const desiredTop = useAbove
			? triggerRect.top - panelHeight - spacing
			: triggerRect.bottom + spacing;

		// Clamp panel within the visible boundary only while the trigger is within it.
		// If the trigger scrolls off-screen (top or bottom), allow the panel to move off-screen too
		// (prevents the panel from getting "stuck" at a fixed top value).
		let boundaryMinTop = boundaryTop + viewportPadding;
		let boundaryMaxTop = boundaryBottom - panelHeight - viewportPadding;

		const triggerOutTop = triggerRect.bottom < boundaryTop + viewportPadding;
		const triggerOutBottom = triggerRect.top > boundaryBottom - viewportPadding;

		triggerOutTop && (boundaryMinTop = Math.min(boundaryMinTop, desiredTop));
		triggerOutBottom && (boundaryMaxTop = Math.max(boundaryMaxTop, desiredTop));

		// Safety: allow negative values when rendering in viewport space and moving above the top edge.
		if (coordinateApi.usesDocumentCoordinates) {
			boundaryMinTop = Math.min(boundaryMinTop, -panelHeight);
		}

		const clampedTop = clampOverlayValue(
			desiredTop,
			boundaryMinTop,
			Math.max(boundaryMinTop, boundaryMaxTop)
		);
		const minLeft = fallbackBoundary.left + viewportPadding;
		const maxLeft = fallbackBoundary.right - triggerViewportRect.width - viewportPadding;
		const clampedLeft = clampOverlayValue(triggerRect.left, minLeft, Math.max(minLeft, maxLeft));

		coordinateApi.applyPosition(panelEl, clampedTop, clampedLeft);
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
		const list = this.optionList;
		if (!this.useVirtualScroll) return list.length;
		const itemSize = this.virtualItemSize;
		const effectiveHeight = this.wrapperClientHeight || 232;
		const end = Math.ceil((this.wrapperScrollTop + effectiveHeight) / itemSize) + 5;
		return Math.min(list.length, end);
	}

	get virtualOptionList() {
		const list = this.optionList;
		if (!this.useVirtualScroll) return list;
		const start = this.virtualStartIndex;
		const end = this.virtualEndIndex;
		return list.slice(start, end).map((entry, i) => ({ ...entry, virtualIndex: start + i }));
	}

	get virtualTotalHeight() {
		if (!this.useVirtualScroll) return 0;
		const list = this.optionList;
		return list.length * this.virtualItemSize;
	}

	get virtualStartIndexTimesItemSize() {
		if (!this.useVirtualScroll) return 0;
		return this.virtualStartIndex * this.virtualItemSize;
	}

	get virtualBottomSpacerHeight() {
		if (!this.useVirtualScroll) return 0;
		const listLength = this.optionList.length;
		return Math.max(0, (listLength - this.virtualEndIndex) * this.virtualItemSize);
	}

	positionPanel = modifier((element, [when, triggerEl]) => {
		if (!when || !element) return;
		const alignPanel = () => this.alignPanelToTrigger(element, triggerEl);
		schedule("afterRender", () => {
			alignPanel();
			requestAnimationFrame(alignPanel);
		});
		const onResize = () => {
			if (this.overlayVisible) alignPanel();
		};
		const shouldTrackScroll = this.resolvedContext != null;
		const scrollTarget = this.resolvedScrollContext;
		const onScroll = () => {
			if (this.overlayVisible) alignPanel();
		};
		window.addEventListener("resize", onResize);
		shouldTrackScroll && scrollTarget?.addEventListener?.("scroll", onScroll);

		const resizeObserver =
			typeof ResizeObserver !== "undefined"
				? new ResizeObserver(() => {
						if (!this.overlayVisible) return;
						requestAnimationFrame(alignPanel);
					})
				: null;

		resizeObserver?.observe(element);

		return () => {
			window.removeEventListener("resize", onResize);
			shouldTrackScroll && scrollTarget?.removeEventListener?.("scroll", onScroll);
			resizeObserver?.disconnect();
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
				if (itemBottom > wrapperScrollTop + wrapperHeight) {
					wrapper.scrollTop = itemBottom - wrapperHeight;
				}
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
		if (this.overlayVisible) this.focusPanelInputOnOpen();
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
			const firstSelected = visible.findIndex((entry) =>
				this.isOptionSelected(this.visibleEntryToOption(entry))
			);
			this.focusedOptionIndex = firstSelected >= 0 ? firstSelected : visible.length > 0 ? 0 : -1;
			this.keyboardNavigationMode = "header";
			this.args.onShow?.();
			this.focusPanelInputOnOpen();
		} else {
			this.keyboardNavigationMode = "header";
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

	/** Enter on the focused row: `syncListMode` keeps keyboard mode aligned after selection from trigger/panel. */
	selectFocusedVisibleOption(options = {}) {
		const { syncListMode = false } = options;
		if (this.focusedOptionIndex < 0) return;
		const focusedEntry = this.visibleOptions[this.focusedOptionIndex];
		const optionItem = this.visibleEntryToOption(focusedEntry);
		if (!optionItem || this.isOptionDisabled(optionItem)) return;
		syncListMode && (this.keyboardNavigationMode = "list");
		this.selectOption(focusedEntry);
	}

	@action
	closePanel(event) {
		event?.stopPropagation?.();
		event?.preventDefault?.();
		this.overlayVisible = false;
		this.keyboardNavigationMode = "header";
		if (this.args.resetFilterOnHide !== false) {
			this.filterValue = "";
			this.args.onFilter?.("");
		}
		this.args.onHide?.();
	}

	@action
	closePanelAndRestoreTriggerFocus(event) {
		this.closePanel(event);
		schedule("afterRender", () => {
			this.triggerElement?.focus?.({ preventScroll: true });
		});
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
		if (this.args.closeOnAddItem) {
			this.overlayVisible = false;
			this.keyboardNavigationMode = "header";
			this.args.onHide?.();
			return;
		}
		if (result != null && typeof result.then === "function") {
			Promise.resolve(result).finally(() => {
				this.enterHeaderMode();
				this.focusFilterInput();
			});
			return;
		}
		this.enterHeaderMode();
		this.focusFilterInput();
	}

	@action
	onCloseButtonInteract(event) {
		event?.stopPropagation?.();
		event?.preventDefault?.();
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
		const validOptions = visible
			.filter((entry) => !this.isOptionDisabled(this.visibleEntryToOption(entry)))
			.map((entry) => this.getOptionValue(this.visibleEntryToOption(entry)));
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
	stopFilterKeyEventPropagation(event) {
		event.stopPropagation();
	}

	@action
	onFilterKeydown(event) {
		event.stopPropagation();
		const keyPressed = event.code || event.key;
		if (keyPressed === "ArrowDown") {
			event.preventDefault();
			if (this.keyboardNavigationMode !== "list") {
				this.enterListMode({ startFromFirst: true });
			} else {
				this.moveFocus(1);
			}
			this.focusFocusedItem();
		} else if (keyPressed === "ArrowUp") {
			event.preventDefault();
			if (this.keyboardNavigationMode !== "list") {
				this.enterListMode({ startFromLast: true });
			} else {
				this.moveFocus(-1);
			}
			this.focusFocusedItem();
		} else if (keyPressed === "Enter" || keyPressed === "NumpadEnter") {
			event.preventDefault();
			this.enterListMode({ startFromFirst: true });
			this.selectFocusedVisibleOption();
			this.focusFocusedItem();
		} else if (keyPressed === "Escape") {
			event.preventDefault();
			this.closePanelAndRestoreTriggerFocus(event);
		}
	}

	@action
	onTriggerKeydown(event) {
		if (this.isTriggerDisabled) return;
		const keyPressed = event.code || event.key;
		if (keyPressed === "ArrowDown") {
			event.preventDefault();
			if (!this.overlayVisible) this.toggleOverlay();
			else {
				this.moveFocus(1);
				this.focusFocusedItem();
			}
			return;
		}
		if (keyPressed === "ArrowUp") {
			event.preventDefault();
			if (this.overlayVisible) {
				this.moveFocus(-1);
				this.focusFocusedItem();
			} else this.toggleOverlay();
			return;
		}
		if (keyPressed === "Enter" || keyPressed === "NumpadEnter" || keyPressed === " ") {
			event.preventDefault();
			if (!this.overlayVisible) {
				this.toggleOverlay();
			} else {
				if (this.focusedOptionIndex < 0) {
					this.enterListMode({ startFromFirst: true });
				}
				if (this.focusedOptionIndex >= 0) {
					this.selectFocusedVisibleOption({ syncListMode: true });
				}
				this.focusFocusedItem();
			}
			return;
		}
		if (keyPressed === "Escape") {
			event.preventDefault();
			if (this.overlayVisible) this.closePanelAndRestoreTriggerFocus(event);
			return;
		}
		if (keyPressed === "Tab" && this.overlayVisible) {
			event.preventDefault();
			if (this.hasHeaderFocusableControls) this.enterHeaderMode({ focusFirst: !event.shiftKey });
			else this.triggerElement?.focus?.({ preventScroll: true });
			return;
		}
	}

	@action
	moveFocus(delta) {
		const list = this.visibleOptions;
		if (!list.length) return;
		this.keyboardNavigationMode = "list";
		let next = this.focusedOptionIndex + delta;
		if (next < 0) next = 0;
		if (next >= list.length) next = list.length - 1;
		this.focusedOptionIndex = next;
	}

	@action
	onPanelKeydown(event) {
		const keyPressed = event.code || event.key;
		if (keyPressed === "Tab") {
			event.preventDefault();
			this.cycleHeaderFocus(event.shiftKey ? -1 : 1);
			return;
		}
		if (keyPressed === "Escape") {
			event.preventDefault();
			this.closePanelAndRestoreTriggerFocus(event);
			return;
		}
		if (keyPressed === "ArrowDown") {
			event.preventDefault();
			if (this.keyboardNavigationMode !== "list") {
				this.enterListMode({ startFromFirst: true });
			} else {
				this.moveFocus(1);
			}
			this.focusFocusedItem();
		} else if (keyPressed === "ArrowUp") {
			event.preventDefault();
			if (this.keyboardNavigationMode !== "list") {
				this.enterListMode({ startFromLast: true });
			} else {
				this.moveFocus(-1);
			}
			this.focusFocusedItem();
		} else if (keyPressed === "Enter" || keyPressed === "NumpadEnter") {
			if (this.isHeaderControlFocused()) return;
			event.preventDefault();
			if (this.focusedOptionIndex >= 0) {
				this.selectFocusedVisibleOption({ syncListMode: true });
			}
		}
	}

	@action
	enterHeaderMode(options = {}) {
		const { focusFirst = true } = options;
		this.keyboardNavigationMode = "header";
		const controls = this.getPanelHeaderFocusableElements();
		if (!controls.length) return;
		const targetControl = focusFirst ? controls[0] : controls[controls.length - 1];
		targetControl?.focus?.({ preventScroll: true });
	}

	@action
	enterListMode(options = {}) {
		const { startFromFirst = false, startFromLast = false } = options;
		this.keyboardNavigationMode = "list";
		const list = this.visibleOptions;
		if (!list.length) {
			this.focusedOptionIndex = -1;
			return;
		}
		if (startFromLast) {
			this.focusedOptionIndex = this.lastEnabledVisibleOptionIndex;
		} else if (startFromFirst || this.focusedOptionIndex < 0) {
			this.focusedOptionIndex = this.firstEnabledVisibleOptionIndex;
		}
	}

	getPanelHeaderFocusableElements() {
		const panelRoot = this.panelElement;
		if (!panelRoot) return [];
		return Array.from(panelRoot.querySelectorAll(MULTISELECT_HEADER_FOCUSABLE_SELECTOR)).filter(
			(element) => element.offsetParent !== null
		);
	}

	@action
	cycleHeaderFocus(direction = 1) {
		const controls = this.getPanelHeaderFocusableElements();
		if (!controls.length) {
			this.triggerElement?.focus?.({ preventScroll: true });
			return;
		}
		this.keyboardNavigationMode = "header";
		const activeElement = document.activeElement;
		const currentIndex = controls.indexOf(activeElement);
		if (currentIndex === -1) {
			const fallbackIndex = direction < 0 ? controls.length - 1 : 0;
			controls[fallbackIndex]?.focus?.({ preventScroll: true });
			return;
		}
		const nextIndex = (currentIndex + direction + controls.length) % controls.length;
		controls[nextIndex]?.focus?.({ preventScroll: true });
	}

	focusFilterInput() {
		const filterInput = this.panelElement?.querySelector("[data-qa='ulx-multiselect-filter']");
		if (!filterInput || filterInput.disabled) return false;
		filterInput.focus?.({ preventScroll: true });
		return true;
	}

	focusFirstAvailablePanelControl() {
		const controls = this.getPanelHeaderFocusableElements();
		if (controls.length <= 0) return false;
		controls[0]?.focus?.({ preventScroll: true });
		return true;
	}

	focusPanelInputOnOpen() {
		schedule("afterRender", () => {
			if (!this.overlayVisible) return;
			const tryFocus = (attempt = 0) => {
				if (!this.overlayVisible) return;
				if (this.focusFilterInput()) return;
				if (this.focusFirstAvailablePanelControl()) return;
				if (attempt < 2) {
					requestAnimationFrame(() => tryFocus(attempt + 1));
					return;
				}
				this.triggerElement?.focus?.({ preventScroll: true });
			};
			requestAnimationFrame(() => tryFocus(0));
		});
	}

	isHeaderControlFocused() {
		const active = document.activeElement;
		if (!active || !this.panelElement) return false;
		return Array.from(
			this.panelElement.querySelectorAll(MULTISELECT_HEADER_ACTIVE_SELECTOR)
		).includes(active);
	}

	focusFocusedItem() {
		if (this.focusedOptionIndex < 0) return;
		schedule("afterRender", () => {
			requestAnimationFrame(() => {
				const focusedOptionElement = document.getElementById(
					`${this.triggerId}-item-${this.focusedOptionIndex}`
				);
				focusedOptionElement?.focus?.({ preventScroll: true });
			});
		});
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
		<div
			id={{this.triggerId}}
			class={{this.rootClasses}}
			role="combobox"
			aria-haspopup="listbox"
			aria-expanded={{this.overlayVisible}}
			aria-controls={{this.ariaControls}}
			aria-activedescendant={{this.activeDescendantId}}
			aria-invalid={{if (eq this.isInvalid true) "true" "false"}}
			aria-required={{this.isRequired}}
			aria-describedby={{this.ariaDescribedBy}}
			aria-errormessage={{this.ariaErrorMessage}}
			tabindex={{if (not this.isTriggerDisabled) "0" "-1"}}
			{{this.triggerRef}}
			{{overlayDismiss
				this.overlayVisible
				onClose=this.closePanelAndRestoreTriggerFocus
				panel=this.panelElement
				dismissVariant="rootPanel"
				defer=true
			}}
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
										<span class="multiselect-token" data-qa="multiselect-token">
											<span class="multiselect-token-label">
												{{this.getOptionLabel option}}
											</span>
											<UlxIcon
												@type="font"
												@iconName="close-icon-01"
												@componentClass="bs-icons1"
												@size="s16"
												@dataQa="close-icon"
												class="multiselect-token-icon"
												role="button"
												tabindex="0"
												aria-label={{t "label.remove"}}
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

		{{#if this.overlayVisible}}
			<div
				id={{this.listboxId}}
				class="ulx-multiselect-panel"
				data-qa="multiselect-panel"
				role="listbox"
				aria-multiselectable="true"
				aria-activedescendant={{this.activeDescendantId}}
				aria-hidden="false"
				{{this.panelRef}}
				{{overlayPortal this.overlayVisible this.resolvedContext}}
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
									@dataQa="ulx-multiselect-select-all"
									@value={{this.headerTristateValue}}
									@itemLabel={{this.selectAllHeaderLabel}}
									@onValueChange={{this.onHeaderTristateChange}}
								/>
							</div>
						{{/if}}
						{{#if this.isFilterEnabled}}
							<div class="multiselect-filter-container">
								<UlxIcon
									@type="font"
									@iconName="search-icon multiselect-filter-icon"
									@componentClass="bs-icons1"
									@size="s18"
									aria-hidden="true"
								/>
								<input
									type="text"
									class="multiselect-filter-input"
									data-qa="ulx-multiselect-filter"
									value={{this.filterValue}}
									placeholder={{or @filterPlaceholder (t "msg.multiselect.filter.placeholder")}}
									aria-label={{this.filterInputAriaLabel}}
									{{on "input" this.onFilterInput}}
									{{on "keydown" this.onFilterKeydown}}
									{{on "keypress" this.stopFilterKeyEventPropagation}}
									{{on "keyup" this.stopFilterKeyEventPropagation}}
								/>
							</div>
							{{#if @allowAddition}}
								<UlxButton
									@dataQa="ulx-multiselect-add"
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
								data-qa="ulx-multiselect-close"
								aria-label={{t "label.close"}}
								{{on "click" this.onCloseButtonInteract}}
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
												data-qa="multiselect-option"
												class="multiselect-item
													{{if
														(eq entry.virtualIndex this.focusedOptionIndex)
														this.focusItemClass
														''
													}}
													{{if (this.isOptionSelected option) 'selected' ''}}
													{{if (this.isOptionDisabled option) 'disabled' ''}}"
												aria-selected="{{this.isOptionSelected option}}"
												aria-disabled="{{this.isOptionDisabled option}}"
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
								<li
									class="multiselect-empty-message"
									role="option"
									data-qa="multiselect-empty-message"
								>
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
												data-qa="multiselect-option"
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
																option=option label=(this.getOptionLabel option) index=row.flatIndex
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
											data-qa="multiselect-option"
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
								@dataQa="ulx-multiselect-clear"
								@label={{t "lbl.clear"}}
								@variant="link"
								@onClick={{this.clearSelectionInPanel}}
								{{on "keydown" this.onClearButtonKeydown}}
							/>
						{{/if}}
					</div>
				</div>

			</div>
		{{/if}}
	</template>
}
