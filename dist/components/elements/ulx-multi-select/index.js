import { b as _initializerDefineProperty, _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';
import { schedule } from '@ember/runloop';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { fn, hash } from '@ember/helper';
import { getComponentClass } from '../../../utils/component-config.js';
import { isInvalidState } from '../../../utils/input-util.js';
import overlayDismiss from '../../../modifiers/overlay-dismiss.js';
import overlayPortal from '../../../modifiers/overlay-portal.js';
import { getOverlayZIndexAboveMask } from '../../../utils/overlay-helpers.js';
import { resolveOverlayContext, resolveOverlayBoundary, resolveOverlayScrollContext, buildOverlayCoordinateApi, getBoundaryRectInOverlaySpace, clampOverlayValue } from '../../../utils/overlay-context.js';
import { guidFor } from '@ember/object/internals';
import { t } from '../../../utils/i18n.js';
import UlxIcon from '../ulx-icon/index.js';
import UlxProgressSpinner from '../ulx-progressspinner/index.js';
import UlxCheckbox from '../ulx-checkbox/index.js';
import UlxTristateCheckbox from '../ulx-tristate-checkbox/index.js';
import UlxButton from '../ulx-button/index.js';
import { gt, or, and, not, eq } from 'ember-truth-helpers';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _UlxMultiSelect;
const MULTISELECT_HEADER_FOCUSABLE_SELECTOR = "[data-qa='ulx-multiselect-select-all'] .checkbox-input:not([disabled]), " + "[data-qa='ulx-multiselect-filter']:not([disabled]), " + "[data-qa='ulx-multiselect-add']:not([disabled]), " + "[data-qa='ulx-multiselect-close']:not([disabled]), " + "[data-qa='ulx-multiselect-clear']:not([disabled])";
/** Broader set (includes disabled nodes) to detect when focus is still “in” the header strip. */
const MULTISELECT_HEADER_ACTIVE_SELECTOR = "[data-qa='ulx-multiselect-select-all'] .checkbox-input, " + "[data-qa='ulx-multiselect-filter'], " + "[data-qa='ulx-multiselect-add'], " + "[data-qa='ulx-multiselect-close'], " + "[data-qa='ulx-multiselect-clear']";
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
 * @param {string} [display='comma'] - 'comma' | 'chip' for selected display.
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
 * @param {Function} [onShow] - When overlay opens.
 * @param {Function} [onHide] - When overlay closes.
 * @param {Function} [onSelectAll] - Optional (event, checked) => void; when provided overrides default select-all.
 * @param {Function} [optionDisabled] - (option) => boolean or property key to disable options.
 * @param {Object} [virtualScrollerOptions] - When set with <code>itemSize</code> (number, px), the list is virtualized for large datasets. Not used when <code>@optionGroupLabel</code> is set.
 */
let UlxMultiSelect = (_class = (_UlxMultiSelect = class UlxMultiSelect extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "modalStack", _descriptor, this);
    _initializerDefineProperty(this, "overlayVisible", _descriptor2, this);
    _initializerDefineProperty(this, "focusedOptionIndex", _descriptor3, this);
    _initializerDefineProperty(this, "keyboardNavigationMode", _descriptor4, this);
    _initializerDefineProperty(this, "filterValue", _descriptor5, this);
    _initializerDefineProperty(this, "triggerElement", _descriptor6, this);
    _initializerDefineProperty(this, "panelElement", _descriptor7, this);
    _initializerDefineProperty(this, "wrapperScrollTop", _descriptor8, this);
    _initializerDefineProperty(this, "wrapperClientHeight", _descriptor9, this);
    _defineProperty(this, "positionPanel", modifier((element, [when, triggerEl]) => {
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
      return () => {
        window.removeEventListener("resize", onResize);
        shouldTrackScroll && scrollTarget?.removeEventListener?.("scroll", onScroll);
      };
    }));
    _defineProperty(this, "repositionOnLayoutChange", modifier((element, [when, selectedCount, headerShown, footerShown]) => {
      if (!when || !element) return;
      // Runs when these args change while overlay is open (e.g. footer appears after selecting).
      schedule("afterRender", () => {
        this.alignPanelToTrigger(element);
        requestAnimationFrame(() => this.alignPanelToTrigger(element));
      });
    }));
    _defineProperty(this, "scrollFocusedIntoView", modifier((element, [when, focusedIndex, listId, useVirtual, itemSize]) => {
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
        if (itemBottom > wrapperScrollTop + wrapperHeight) wrapper.scrollTop = itemBottom - wrapperHeight;
        if (itemTop < wrapperScrollTop) wrapper.scrollTop = itemTop;
      };
      schedule("afterRender", () => {
        requestAnimationFrame(() => runScroll(false));
      });
    }));
    _defineProperty(this, "triggerRef", modifier(element => {
      this.triggerElement = element;
      return () => {
        if (this.triggerElement === element) this.triggerElement = null;
      };
    }));
    _defineProperty(this, "panelRef", modifier(element => {
      this.panelElement = element;
      if (this.overlayVisible) this.focusPanelInputOnOpen();
      return () => {
        if (this.panelElement === element) this.panelElement = null;
      };
    }));
    _defineProperty(this, "virtualScrollSync", modifier((element, [whenVisible, useVirtual]) => {
      if (!whenVisible || !useVirtual) return;
      const update = () => {
        this.wrapperScrollTop = element.scrollTop;
        this.wrapperClientHeight = element.clientHeight;
      };
      update();
      schedule("afterRender", () => update());
      element.addEventListener("scroll", update);
      return () => element.removeEventListener("scroll", update);
    }));
  }
  handleFocus(event) {
    this.args.onFocus?.(event);
  }
  handleBlur(event) {
    this.args.onBlur?.(event);
  }
  get fieldContext() {
    const {
      field
    } = this.args;
    return field && typeof field === "object" ? field : null;
  }
  get triggerId() {
    const {
      id,
      key
    } = this.args;
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
      customClass
    } = this.args;
    const invalid = isInvalidState(invalidArg, error ?? this.fieldContext?.error);
    const parts = [this.baseClass];
    size && parts.push(size);
    (disabled || loading) && parts.push("disabled");
    invalid && parts.push("invalid");
    loading && parts.push("loading");
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
  get hasValue() {
    const value = this.args.value;
    return Array.isArray(value) && value.length > 0;
  }
  get isClearEnabled() {
    return typeof this.args.showClear === "boolean" ? this.args.showClear : true;
  }
  get isInvalid() {
    const {
      invalid,
      error
    } = this.args;
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
    return this.args.display === "chip";
  }
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
  getOptionLabel(option) {
    if (option == null) return "";
    if (typeof option === "object" && option !== null) {
      const label = this.getResolved(option, this.optionLabelKey);
      return label != null ? String(label) : "";
    }
    return String(option);
  }
  getOptionValue(option) {
    if (option == null) return undefined;
    if (typeof option === "object" && option !== null) {
      return this.getResolved(option, this.optionValueKey);
    }
    return option;
  }
  isOptionDisabled(option) {
    if (option == null) return true;
    const {
      optionDisabled
    } = this.args;
    if (typeof optionDisabled === "function") return optionDisabled(option);
    if (typeof optionDisabled === "string") return !!this.getResolved(option, optionDisabled);
    return !!option.disabled;
  }
  valueEquals(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (typeof a === "object" && typeof b === "object") return JSON.stringify(a) === JSON.stringify(b);
    return false;
  }
  isAdditionFilterDuplicateOfOption(option, trimmedFilter, normalizedFilter) {
    if (this.getOptionLabel(option).trim().toLowerCase() === normalizedFilter) return true;
    const optionVal = this.getOptionValue(option);
    if (optionVal == null) return false;
    if (this.valueEquals(optionVal, trimmedFilter)) return true;
    if (typeof optionVal === "object" && optionVal !== null) return false;
    return String(optionVal).trim().toLowerCase() === normalizedFilter;
  }
  isOptionSelected(option) {
    if (option == null) return false;
    const value = this.args.value ?? [];
    const optionVal = this.getOptionValue(option);
    return value.some(v => this.valueEquals(v, optionVal));
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
    const sourceOptionsList = this.hasGroups ? this.flatOptions : this.args.options ?? [];
    const normalizedFilterValue = (this.filterValue ?? "").trim().toLowerCase();
    if (!normalizedFilterValue) return sourceOptionsList;
    if (this.hasGroups) {
      return sourceOptionsList.filter(({
        item
      }) => this.getOptionLabel(item).toLowerCase().includes(normalizedFilterValue));
    }
    return sourceOptionsList.filter(option => this.getOptionLabel(option).toLowerCase().includes(normalizedFilterValue));
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
      return value.map(val => flat.find(({
        item
      }) => this.valueEquals(this.getOptionValue(item), val))?.item).filter(Boolean);
    }
    return value.map(val => options.find(opt => this.valueEquals(this.getOptionValue(opt), val))).filter(Boolean);
  }
  get selectedLabelsComma() {
    const selected = this.selectedOptions;
    return selected.map(opt => this.getOptionLabel(opt)).join(", ");
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
    return this.args.display === "chip" ? "chip-display" : "comma-display";
  }
  get inputtextClass() {
    return getComponentClass("inputtext");
  }
  get ariaDescribedBy() {
    const {
      ariaDescribedBy
    } = this.args;
    return ariaDescribedBy ?? this.fieldContext?.describedBy;
  }
  get ariaErrorMessage() {
    const {
      ariaErrorMessage
    } = this.args;
    return ariaErrorMessage ?? this.fieldContext?.errorId;
  }
  get isRequired() {
    return !!this.args.required;
  }
  clearSelectionInPanel(event) {
    event?.stopPropagation?.();
    event?.preventDefault?.();
    if (this.isTriggerDisabled) return;
    this.keyboardNavigationMode = "header";
    this.args.onChange?.([]);
    this.focusedOptionIndex = this.firstEnabledVisibleOptionIndex;
    this.focusPanelInputOnOpen();
  }
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
    const {
      selectAllLabel
    } = this.args;
    return selectAllLabel !== undefined ? selectAllLabel : t("lbl.select.all");
  }
  get selectAllHeaderLabel() {
    return this.isFilterEnabled ? undefined : this.selectAllItemLabel;
  }
  get allowOptionSelect() {
    const {
      selectionLimit,
      value
    } = this.args;
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
    const options = this.hasGroups ? this.flatOptions.map(({
      item
    }) => item) : this.args.options ?? [];
    const hasDuplicate = options.some(option => this.isAdditionFilterDuplicateOfOption(option, filterValue, normalizedFilterValue));
    if (hasDuplicate) return false;
    const {
      selectionLimit,
      value
    } = this.args;
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
    return visible.filter(entry => !this.isOptionDisabled(this.visibleEntryToOption(entry))).length;
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
    const selectable = visible.filter(entry => !this.isOptionDisabled(this.visibleEntryToOption(entry)));
    return selectable.every(entry => this.isOptionSelected(this.visibleEntryToOption(entry)));
  }
  get optionList() {
    if (this.hasGroups) return this.visibleOptions;
    return this.visibleOptions.map(option => ({
      item: option
    }));
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
        rows.push({
          type: "group",
          label: groupLabel,
          group: entry?.group ?? null
        });
        lastGroupLabel = groupLabel;
      }
      rows.push({
        type: "option",
        entry,
        flatIndex
      });
    }
    return rows;
  }
  get activeDescendantId() {
    return this.focusedOptionIndex >= 0 ? `${this.triggerId}-item-${this.focusedOptionIndex}` : undefined;
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
    const zIndex = typeof this.args.zIndex === "number" ? this.args.zIndex : resolvedContext === document.body ? getOverlayZIndexAboveMask(this.modalStack) : 1;
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
    const desiredWrapperHeight = Math.min(requestedWrapperMax, Math.max(0, wrapperEl?.scrollHeight ?? requestedWrapperMax));
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
      wrapperEl.style.maxHeight = `${wrapperMax}px`;
      wrapperEl.style.height = `${wrapperMax}px`;
    }
    const panelHeight = chromeH + wrapperMax;
    const desiredTop = useAbove ? triggerRect.top - panelHeight - spacing : triggerRect.bottom + spacing;
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
    const clampedTop = clampOverlayValue(desiredTop, boundaryMinTop, Math.max(boundaryMinTop, boundaryMaxTop));
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
    this.wrapperClientHeight || 232;
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
    return list.slice(start, end).map((entry, i) => ({
      ...entry,
      virtualIndex: start + i
    }));
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
  toggleOverlay(event) {
    if (this.args.disabled || this.args.loading) return;
    event?.preventDefault?.();
    this.overlayVisible = !this.overlayVisible;
    if (this.overlayVisible) {
      this.filterValue = "";
      const visible = this.visibleOptions;
      const firstSelected = visible.findIndex(entry => this.isOptionSelected(this.visibleEntryToOption(entry)));
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
  selectOption(entry) {
    const optionItem = entry?.item != null ? entry.item : entry;
    if (this.isOptionDisabled(optionItem)) return;
    const optionVal = this.getOptionValue(optionItem);
    const value = this.args.value ?? [];
    const next = this.isOptionSelected(optionItem) ? value.filter(v => !this.valueEquals(v, optionVal)) : [...value, optionVal];
    this.args.onChange?.(next);
  }
  /** Enter on the focused row: `syncListMode` keeps keyboard mode aligned after selection from trigger/panel. */
  selectFocusedVisibleOption(options = {}) {
    const {
      syncListMode = false
    } = options;
    if (this.focusedOptionIndex < 0) return;
    const focusedEntry = this.visibleOptions[this.focusedOptionIndex];
    const optionItem = this.visibleEntryToOption(focusedEntry);
    if (!optionItem || this.isOptionDisabled(optionItem)) return;
    syncListMode && (this.keyboardNavigationMode = "list");
    this.selectOption(focusedEntry);
  }
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
  closePanelAndRestoreTriggerFocus(event) {
    this.closePanel(event);
    schedule("afterRender", () => {
      this.triggerElement?.focus?.({
        preventScroll: true
      });
    });
  }
  addItem() {
    if (!this.canAddItem) return;
    const query = (this.filterValue ?? "").trim();
    const handler = this.args.onAddItem;
    if (typeof handler !== "function") return;
    const result = handler(query);
    this.filterValue = "";
    this.args.onFilter?.("");
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
  onCloseButtonInteract(event) {
    event?.stopPropagation?.();
    event?.preventDefault?.();
  }
  onItemCheckboxChange(entry, _checked, event) {
    event?.stopPropagation?.();
    this.selectOption(entry);
  }
  onChipRemoveIconKeydown(option, event) {
    const keyPressed = event.code || event.key;
    if (keyPressed === "Enter" || keyPressed === "NumpadEnter" || keyPressed === " " || keyPressed === "Space") {
      event.preventDefault();
      this.removeChipOption(option, event);
    }
  }
  removeChipOption(option, event) {
    event?.stopPropagation?.();
    if (this.isTriggerDisabled) return;
    const optionVal = this.getOptionValue(option);
    const value = (this.args.value ?? []).filter(v => !this.valueEquals(v, optionVal));
    this.args.onChange?.(value);
  }
  onSelectAllChange(checked) {
    const onSelectAll = this.args.onSelectAll;
    if (typeof onSelectAll === "function") {
      onSelectAll({
        originalEvent: null
      }, checked);
      return;
    }
    const visible = this.visibleOptions;
    const validOptions = visible.filter(entry => !this.isOptionDisabled(this.visibleEntryToOption(entry))).map(entry => this.getOptionValue(this.visibleEntryToOption(entry)));
    const limit = this.args.selectionLimit;
    const value = checked ? limit ? validOptions.slice(0, limit) : validOptions : [];
    this.args.onChange?.(value);
  }
  onHeaderTristateChange(_nextValue, event) {
    event?.stopPropagation?.();
    const nextChecked = this.isAllSelected ? false : true;
    this.onSelectAllChange(nextChecked);
  }
  onFilterInput(event) {
    const filterInputValue = event.target?.value ?? "";
    this.filterValue = filterInputValue;
    this.focusedOptionIndex = this.visibleOptions.length > 0 ? 0 : -1;
    this.args.onFilter?.(filterInputValue);
  }
  onFilterKeydown(event) {
    const keyPressed = event.code || event.key;
    if (keyPressed === "ArrowDown") {
      event.preventDefault();
      if (this.keyboardNavigationMode !== "list") {
        this.enterListMode({
          startFromFirst: true
        });
      } else {
        this.moveFocus(1);
      }
      this.focusFocusedItem();
    } else if (keyPressed === "ArrowUp") {
      event.preventDefault();
      if (this.keyboardNavigationMode !== "list") {
        this.enterListMode({
          startFromLast: true
        });
      } else {
        this.moveFocus(-1);
      }
      this.focusFocusedItem();
    } else if (keyPressed === "Enter" || keyPressed === "NumpadEnter") {
      event.preventDefault();
      this.enterListMode({
        startFromFirst: true
      });
      this.selectFocusedVisibleOption();
      this.focusFocusedItem();
    } else if (keyPressed === "Escape") {
      event.preventDefault();
      this.closePanelAndRestoreTriggerFocus(event);
    }
  }
  onTriggerKeydown(event) {
    if (this.isTriggerDisabled) return;
    const keyPressed = event.code || event.key;
    if (keyPressed === "ArrowDown") {
      event.preventDefault();
      if (!this.overlayVisible) this.toggleOverlay();else {
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
          this.enterListMode({
            startFromFirst: true
          });
        }
        if (this.focusedOptionIndex >= 0) {
          this.selectFocusedVisibleOption({
            syncListMode: true
          });
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
      if (this.hasHeaderFocusableControls) this.enterHeaderMode({
        focusFirst: !event.shiftKey
      });else this.triggerElement?.focus?.({
        preventScroll: true
      });
      return;
    }
  }
  moveFocus(delta) {
    const list = this.visibleOptions;
    if (!list.length) return;
    this.keyboardNavigationMode = "list";
    let next = this.focusedOptionIndex + delta;
    if (next < 0) next = 0;
    if (next >= list.length) next = list.length - 1;
    this.focusedOptionIndex = next;
  }
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
        this.enterListMode({
          startFromFirst: true
        });
      } else {
        this.moveFocus(1);
      }
      this.focusFocusedItem();
    } else if (keyPressed === "ArrowUp") {
      event.preventDefault();
      if (this.keyboardNavigationMode !== "list") {
        this.enterListMode({
          startFromLast: true
        });
      } else {
        this.moveFocus(-1);
      }
      this.focusFocusedItem();
    } else if (keyPressed === "Enter" || keyPressed === "NumpadEnter") {
      if (this.isHeaderControlFocused()) return;
      event.preventDefault();
      if (this.focusedOptionIndex >= 0) {
        this.selectFocusedVisibleOption({
          syncListMode: true
        });
      }
    }
  }
  enterHeaderMode(options = {}) {
    const {
      focusFirst = true
    } = options;
    this.keyboardNavigationMode = "header";
    const controls = this.getPanelHeaderFocusableElements();
    if (!controls.length) return;
    const targetControl = focusFirst ? controls[0] : controls[controls.length - 1];
    targetControl?.focus?.({
      preventScroll: true
    });
  }
  enterListMode(options = {}) {
    const {
      startFromFirst = false,
      startFromLast = false
    } = options;
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
    return Array.from(panelRoot.querySelectorAll(MULTISELECT_HEADER_FOCUSABLE_SELECTOR)).filter(element => element.offsetParent !== null);
  }
  cycleHeaderFocus(direction = 1) {
    const controls = this.getPanelHeaderFocusableElements();
    if (!controls.length) {
      this.triggerElement?.focus?.({
        preventScroll: true
      });
      return;
    }
    this.keyboardNavigationMode = "header";
    const activeElement = document.activeElement;
    const currentIndex = controls.indexOf(activeElement);
    if (currentIndex === -1) {
      const fallbackIndex = direction < 0 ? controls.length - 1 : 0;
      controls[fallbackIndex]?.focus?.({
        preventScroll: true
      });
      return;
    }
    const nextIndex = (currentIndex + direction + controls.length) % controls.length;
    controls[nextIndex]?.focus?.({
      preventScroll: true
    });
  }
  focusFilterInput() {
    const filterInput = this.panelElement?.querySelector("[data-qa='ulx-multiselect-filter']");
    if (!filterInput || filterInput.disabled) return false;
    filterInput.focus?.({
      preventScroll: true
    });
    return true;
  }
  focusFirstAvailablePanelControl() {
    const controls = this.getPanelHeaderFocusableElements();
    if (controls.length <= 0) return false;
    controls[0]?.focus?.({
      preventScroll: true
    });
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
        this.triggerElement?.focus?.({
          preventScroll: true
        });
      };
      requestAnimationFrame(() => tryFocus(0));
    });
  }
  isHeaderControlFocused() {
    const active = document.activeElement;
    if (!active || !this.panelElement) return false;
    return Array.from(this.panelElement.querySelectorAll(MULTISELECT_HEADER_ACTIVE_SELECTOR)).includes(active);
  }
  focusFocusedItem() {
    if (this.focusedOptionIndex < 0) return;
    schedule("afterRender", () => {
      requestAnimationFrame(() => {
        const focusedOptionElement = document.getElementById(`${this.triggerId}-item-${this.focusedOptionIndex}`);
        focusedOptionElement?.focus?.({
          preventScroll: true
        });
      });
    });
  }
  stopPanelClick(event) {
    event.stopPropagation();
  }
  stopItemCheckboxClick(event) {
    event.stopPropagation();
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div id={{this.triggerId}} class={{this.rootClasses}} role=\"combobox\" aria-haspopup=\"listbox\" aria-expanded={{this.overlayVisible}} aria-controls={{this.listboxId}} aria-multiselectable=\"true\" aria-invalid={{if (eq this.isInvalid true) \"true\" \"false\"}} aria-required={{this.isRequired}} aria-describedby={{this.ariaDescribedBy}} aria-errormessage={{this.ariaErrorMessage}} tabindex={{if (not this.isTriggerDisabled) \"0\" \"-1\"}} {{this.triggerRef}} {{overlayDismiss this.overlayVisible onClose=this.closePanelAndRestoreTriggerFocus panel=this.panelElement dismissVariant=\"rootPanel\" defer=true}} {{on \"click\" this.toggleOverlay}} {{on \"keydown\" this.onTriggerKeydown}} {{on \"focus\" this.handleFocus}} {{on \"blur\" this.handleBlur}} ...attributes>\n\t\t\t<div class=\"multiselect-label-container {{this.displayClass}}\" tabindex=\"-1\">\n\t\t\t\t{{#if (has-block \"value\")}}\n\t\t\t\t\t<div class=\"flex items-center\">\n\t\t\t\t\t\t{{yield (hash selectedOptions=this.selectedOptions selectedLabels=this.selectedLabelsComma placeholder=this.placeholderDisplay) to=\"value\"}}\n\t\t\t\t\t</div>\n\t\t\t\t{{else}}\n\t\t\t\t\t{{#if this.displayChips}}\n\t\t\t\t\t\t{{#if this.hasValue}}\n\t\t\t\t\t\t\t<div class=\"multiselect-label\">\n\t\t\t\t\t\t\t\t{{#each this.selectedOptions as |option|}}\n\t\t\t\t\t\t\t\t\t{{#if (has-block \"chip\")}}\n\t\t\t\t\t\t\t\t\t\t{{yield (hash option=option label=(this.getOptionLabel option) value=(this.getOptionValue option)) to=\"chip\"}}\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t<span class=\"multiselect-token\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"multiselect-token-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{this.getOptionLabel option}}\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @type=\"font\" @iconName=\"close-stroke-icon\" @componentClass=\"bs-icons1\" @size=\"s16\" class=\"multiselect-token-icon\" role=\"button\" tabindex=\"0\" aria-label={{t \"lbl.remove\"}} {{on \"click\" (fn this.removeChipOption option)}} {{on \"keydown\" (fn this.onChipRemoveIconKeydown option)}} />\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t<span class=\"multiselect-label\">{{this.placeholderDisplay}}</span>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t{{#if this.hasValue}}\n\t\t\t\t\t\t\t<span class=\"multiselect-label\">{{this.selectedLabelsComma}}</span>\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t<span class=\"multiselect-label\">{{this.placeholderDisplay}}</span>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\n\t\t\t{{#if (and @loading)}}\n\t\t\t\t<span class=\"multiselect-loading-icon\" aria-hidden=\"true\">\n\t\t\t\t\t<UlxProgressSpinner @size={{this.multiselectSize}} aria-hidden=\"true\" />\n\t\t\t\t</span>\n\t\t\t{{else}}\n\t\t\t\t{{#if (has-block \"icon\")}}\n\t\t\t\t\t{{yield (hash overlayVisible=this.overlayVisible) to=\"icon\"}}\n\t\t\t\t{{else}}\n\t\t\t\t\t<div class=\"multiselect-trigger {{if this.isTriggerDisabled \"disabled\" \"\"}}\" tabindex=\"-1\">\n\t\t\t\t\t\t<UlxIcon @iconName=\"down-stroke-icon-new multiselect-icon\" @type=\"font\" @componentClass=\"bs-icons1\" aria-hidden=\"true\" />\n\t\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\t\t\t{{/if}}\n\t\t</div>\n\n\t\t{{#if this.overlayVisible}}\n\t\t\t<div id={{this.listboxId}} class=\"ulx-multiselect-panel\" role=\"listbox\" aria-multiselectable=\"true\" aria-activedescendant={{this.activeDescendantId}} aria-hidden=\"false\" {{this.panelRef}} {{overlayPortal this.overlayVisible this.resolvedContext}} {{this.positionPanel this.overlayVisible this.triggerElement}} {{this.repositionOnLayoutChange this.overlayVisible this.selectedValueCount this.shouldRenderPanelHeader (or (has-block \"footer\") (has-block \"footerActions\") (gt this.selectedValueCount 0))}} {{on \"keydown\" this.onPanelKeydown}} {{on \"click\" this.stopPanelClick}}>\n\t\t\t\t{{#if this.shouldRenderPanelHeader}}\n\t\t\t\t\t<div class=\"multiselect-header\">\n\t\t\t\t\t\t{{#if (and @selectAll this.allowOptionSelect)}}\n\t\t\t\t\t\t\t<div class=\"multiselect-header-checkbox-container\">\n\t\t\t\t\t\t\t\t<UlxTristateCheckbox @dataQa=\"ulx-multiselect-select-all\" @value={{this.headerTristateValue}} @itemLabel={{this.selectAllHeaderLabel}} @onValueChange={{this.onHeaderTristateChange}} />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{#if this.isFilterEnabled}}\n\t\t\t\t\t\t\t<div class=\"multiselect-filter-container\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"multiselect-filter-input\" data-qa=\"ulx-multiselect-filter\" value={{this.filterValue}} placeholder={{or @filterPlaceholder (t \"msg.multiselect.filter.placeholder\")}} {{on \"input\" this.onFilterInput}} {{on \"keydown\" this.onFilterKeydown}} />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{#if @allowAddition}}\n\t\t\t\t\t\t\t\t<UlxButton @dataQa=\"ulx-multiselect-add\" @label={{t \"label.add\"}} @variant=\"primary\" @onClick={{this.addItem}} @disabled={{not this.canAddItem}} />\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{#if @showClose}}\n\t\t\t\t\t\t\t<button type=\"button\" class=\"multiselect-close-button\" data-qa=\"ulx-multiselect-close\" aria-label={{t \"lbl.close\"}} {{on \"click\" this.onCloseButtonInteract}}>\n\t\t\t\t\t\t\t\t<UlxIcon @iconName=\"close-icon-01\" @type=\"font\" @size=\"s22\" @componentClass=\"bs-icons1\" aria-hidden=\"true\" />\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\t\t\t\t<div class=\"multiselect-wrapper\" style=\"max-height: {{this.scrollHeightValue}};\" {{this.scrollFocusedIntoView this.overlayVisible this.focusedOptionIndex this.triggerId this.useVirtualScroll this.virtualItemSize}} {{this.virtualScrollSync this.overlayVisible this.useVirtualScroll}}>\n\t\t\t\t\t{{#if this.useVirtualScroll}}\n\t\t\t\t\t\t<div style=\"height: {{this.virtualTotalHeight}}px;\">\n\t\t\t\t\t\t\t<div style=\"height: {{this.virtualStartIndexTimesItemSize}}px;\" aria-hidden=\"true\"></div>\n\t\t\t\t\t\t\t<ul class=\"multiselect-list\" role=\"listbox\" aria-multiselectable=\"true\">\n\t\t\t\t\t\t\t\t{{#if (eq this.optionList.length 0)}}\n\t\t\t\t\t\t\t\t\t<li class=\"multiselect-empty-message\" role=\"option\">\n\t\t\t\t\t\t\t\t\t\t{{or (and this.isFilterEnabled @emptyFilterMessage) @emptyMessage (t \"msg.multiselect.empty\")}}\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t{{#each this.virtualOptionList as |entry|}}\n\t\t\t\t\t\t\t\t\t\t{{#let entry.item as |option|}}\n\t\t\t\t\t\t\t\t\t\t\t<li role=\"option\" id=\"{{this.triggerId}}-item-{{entry.virtualIndex}}\" class=\"multiselect-item\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (eq entry.virtualIndex this.focusedOptionIndex) this.focusItemClass \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionSelected option) \"selected\" \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionDisabled option) \"disabled\" \"\"}}\" aria-selected=\"{{this.isOptionSelected option}}\" aria-disabled=\"{{this.isOptionDisabled option}}\" tabindex=\"-1\" style=\"height: {{this.virtualItemSize}}px;\" {{on \"click\" (fn this.selectOption entry)}}>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"multiselect-item-checkbox\" {{on \"click\" this.stopItemCheckboxClick}}>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<UlxCheckbox @checked={{this.isOptionSelected option}} @onCheckedChange={{fn this.onItemCheckboxChange entry}} @fieldClass=\"flex\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if (has-block \"item\")}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"multiselect-item-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{yield (hash option=option label=(this.getOptionLabel option) index=entry.virtualIndex) to=\"item\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"multiselect-item-label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionSelected option) \"selected\" \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionDisabled option) \"disabled\" \"\"}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{this.getOptionLabel option}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t{{/let}}\n\t\t\t\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div style=\"height: {{this.virtualBottomSpacerHeight}}px;\" aria-hidden=\"true\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t<ul class=\"multiselect-list\" role=\"listbox\" aria-multiselectable=\"true\">\n\t\t\t\t\t\t\t{{#if (eq this.visibleOptions.length 0)}}\n\t\t\t\t\t\t\t\t<li class=\"multiselect-empty-message\" role=\"option\">\n\t\t\t\t\t\t\t\t\t{{or (and this.isFilterEnabled @emptyFilterMessage) @emptyMessage (t \"msg.multiselect.empty\")}}\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t{{else if this.hasGroups}}\n\t\t\t\t\t\t\t\t{{#each this.optionListWithGroups as |row|}}\n\t\t\t\t\t\t\t\t\t{{#if (eq row.type \"group\")}}\n\t\t\t\t\t\t\t\t\t\t<li class=\"multiselect-item-group\" role=\"presentation\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t{{#if (has-block \"group\")}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{yield (hash label=row.label group=row.group) to=\"group\"}}\n\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t<span>{{row.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t{{#let row.entry.item as |option|}}\n\t\t\t\t\t\t\t\t\t\t\t<li role=\"option\" id=\"{{this.triggerId}}-item-{{row.flatIndex}}\" class=\"multiselect-item\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (eq row.flatIndex this.focusedOptionIndex) this.focusItemClass \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionSelected option) \"selected\" \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionDisabled option) \"disabled\" \"\"}}\" aria-selected={{this.isOptionSelected option}} aria-disabled={{this.isOptionDisabled option}} tabindex=\"-1\" {{on \"click\" (fn this.selectOption row.entry)}}>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"multiselect-item-checkbox\" {{on \"click\" this.stopItemCheckboxClick}}>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<UlxCheckbox @checked={{this.isOptionSelected option}} @onCheckedChange={{fn this.onItemCheckboxChange row.entry}} @fieldClass=\"flex\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if (has-block \"item\")}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"multiselect-item-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{yield (hash option=option label=(this.getOptionLabel option) index=row.flatIndex) to=\"item\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"multiselect-item-label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionSelected option) \"selected\" \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionDisabled option) \"disabled\" \"\"}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{this.getOptionLabel option}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t{{/let}}\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t{{#each this.optionList as |entry index|}}\n\t\t\t\t\t\t\t\t\t{{#let entry.item as |option|}}\n\t\t\t\t\t\t\t\t\t\t<li role=\"option\" id=\"{{this.triggerId}}-item-{{index}}\" class=\"multiselect-item\n\t\t\t\t\t\t\t\t\t\t\t\t{{if (eq index this.focusedOptionIndex) this.focusItemClass \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionSelected option) \"selected\" \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionDisabled option) \"disabled\" \"\"}}\" aria-selected={{this.isOptionSelected option}} aria-disabled={{this.isOptionDisabled option}} tabindex=\"-1\" {{on \"click\" (fn this.selectOption entry)}}>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"multiselect-item-checkbox\" {{on \"click\" this.stopItemCheckboxClick}}>\n\t\t\t\t\t\t\t\t\t\t\t\t<UlxCheckbox @checked={{this.isOptionSelected option}} @onCheckedChange={{fn this.onItemCheckboxChange entry}} @fieldClass=\"flex\" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t{{#if (has-block \"item\")}}\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"multiselect-item-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{yield (hash option=option label=(this.getOptionLabel option) index=index) to=\"item\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"multiselect-item-label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionSelected option) \"selected\" \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionDisabled option) \"disabled\" \"\"}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{this.getOptionLabel option}}\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t{{/let}}\n\t\t\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"multiselect-footer\">\n\t\t\t\t\t<div class=\"multiselect-footer-left\">\n\t\t\t\t\t\t{{#if (has-block \"footer\")}}\n\t\t\t\t\t\t\t{{yield (hash selectedOptions=this.selectedOptions) to=\"footer\"}}\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t<span class=\"multiselect-footer-count\">{{t \"msg.multiselect.items.selected\" count=this.selectedValueCount}}</span>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"multiselect-footer-right\">\n\t\t\t\t\t\t{{#if (has-block \"footerActions\")}}\n\t\t\t\t\t\t\t{{yield (hash selectedOptions=this.selectedOptions) to=\"footerActions\"}}\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{#if (and this.isClearEnabled this.hasValue (not this.isTriggerDisabled))}}\n\t\t\t\t\t\t\t<UlxButton @dataQa=\"ulx-multiselect-clear\" @label={{t \"lbl.clear\"}} @variant=\"link\" @onClick={{this.clearSelectionInPanel}} {{on \"keydown\" this.onClearButtonKeydown}} />\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t{{/if}}\n\t", {
  strictMode: true,
  scope: () => ({
    eq,
    not,
    overlayDismiss,
    on,
    hash,
    UlxIcon,
    t,
    fn,
    and,
    UlxProgressSpinner,
    overlayPortal,
    or,
    gt,
    UlxTristateCheckbox,
    UlxButton,
    UlxCheckbox
  })
}), _UlxMultiSelect), _UlxMultiSelect), _descriptor = _applyDecoratedDescriptor(_class.prototype, "modalStack", [inject], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "handleFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleBlur", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleBlur"), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "overlayVisible", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "focusedOptionIndex", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return -1;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "keyboardNavigationMode", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "header";
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "filterValue", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "triggerElement", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "panelElement", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "wrapperScrollTop", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "wrapperClientHeight", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _applyDecoratedDescriptor(_class.prototype, "getResolved", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getResolved"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getOptionLabel", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getOptionLabel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getOptionValue", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getOptionValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isOptionDisabled", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isOptionDisabled"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "valueEquals", [action], Object.getOwnPropertyDescriptor(_class.prototype, "valueEquals"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isAdditionFilterDuplicateOfOption", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isAdditionFilterDuplicateOfOption"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isOptionSelected", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isOptionSelected"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearSelectionInPanel", [action], Object.getOwnPropertyDescriptor(_class.prototype, "clearSelectionInPanel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onClearButtonKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onClearButtonKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "alignPanelToTrigger", [action], Object.getOwnPropertyDescriptor(_class.prototype, "alignPanelToTrigger"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleOverlay", [action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleOverlay"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "selectOption", [action], Object.getOwnPropertyDescriptor(_class.prototype, "selectOption"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closePanel", [action], Object.getOwnPropertyDescriptor(_class.prototype, "closePanel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closePanelAndRestoreTriggerFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "closePanelAndRestoreTriggerFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addItem", [action], Object.getOwnPropertyDescriptor(_class.prototype, "addItem"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onCloseButtonInteract", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onCloseButtonInteract"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onItemCheckboxChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onItemCheckboxChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onChipRemoveIconKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onChipRemoveIconKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeChipOption", [action], Object.getOwnPropertyDescriptor(_class.prototype, "removeChipOption"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onSelectAllChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onSelectAllChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onHeaderTristateChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onHeaderTristateChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onFilterInput", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onFilterInput"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onFilterKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onFilterKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onTriggerKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onTriggerKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "moveFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "moveFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onPanelKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onPanelKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "enterHeaderMode", [action], Object.getOwnPropertyDescriptor(_class.prototype, "enterHeaderMode"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "enterListMode", [action], Object.getOwnPropertyDescriptor(_class.prototype, "enterListMode"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cycleHeaderFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "cycleHeaderFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stopPanelClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "stopPanelClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stopItemCheckboxClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "stopItemCheckboxClick"), _class.prototype), _class);

export { UlxMultiSelect as default };
//# sourceMappingURL=index.js.map
