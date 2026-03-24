import { b as _initializerDefineProperty, _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import and from 'ember-truth-helpers/helpers/and';
import or from 'ember-truth-helpers/helpers/or';
import eq from 'ember-truth-helpers/helpers/eq';
import not from 'ember-truth-helpers/helpers/not';
import gt from 'ember-truth-helpers/helpers/gt';
import { getComponentClass } from '../../../utils/component-config.js';
import { loadTableState, saveTableState, parseSortBy, isSpecialColumn, filterItems, multiSortItems, sortItems, paginateItems, getFieldValue, reorderArray, exportCSV } from './utils.js';
import TableHeader from './table-header.js';
import TableBody from './table-body.js';
import TableFooter from './table-footer.js';
import ManageColumns from './manage-columns.js';
import FilterOverlay from './filter-overlay.js';
import SortOptions from './sort-options.js';
import UlxPaginator from '../ulx-paginator/index.js';
import UlxProgressSpinner from '../../elements/ulx-progressspinner/index.js';
import UlxButton from '../../elements/ulx-button/index.js';
import UlxIconButton from '../../elements/ulx-icon-button/index.js';
import UlxButtonGroup from '../../collections/ulx-button-group/index.js';
import UlxIcon from '../../elements/ulx-icon/index.js';
import UlxSelectButton from '../../elements/ulx-select-button/index.js';
import UlxIconInput from '../../elements/ulx-icon-input/index.js';
import UlxSlidePane from '../ulx-slide-pane/index.js';
import UlxPopup from '../ulx-popup/index.js';
import UlxAccordion from '../../collections/ulx-accordion/index.js';
import UlxCheckboxItem from '../../elements/ulx-checkbox/checkbox-item.js';
import UlxCard from '../../elements/ulx-card/index.js';
import UlxChip from '../../elements/ulx-chip/index.js';
import UlxDataView from '../ulx-data-view/index.js';
import UlxEmptyState from '../../elements/ulx-empty-state/index.js';
import { t } from '../../../utils/i18n.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0, _descriptor1, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _UlxTable;
let UlxTable = (_class = (_UlxTable = class UlxTable extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "modalStack", _descriptor, this);
    _defineProperty(this, "_restoredStateKey", null);
    // ─── Internal sort state (uncontrolled) ──────────────────────────────────
    _initializerDefineProperty(this, "_sortField", _descriptor2, this);
    _initializerDefineProperty(this, "_sortOrder", _descriptor3, this);
    _initializerDefineProperty(this, "_multiSortMeta", _descriptor4, this);
    // ─── Internal filter state (uncontrolled) ────────────────────────────────
    _initializerDefineProperty(this, "_filters", _descriptor5, this);
    // ─── Internal pagination state (uncontrolled) ────────────────────────────
    _initializerDefineProperty(this, "_first", _descriptor6, this);
    _initializerDefineProperty(this, "_rows", _descriptor7, this);
    // ─── Column management ───────────────────────────────────────────────────
    _initializerDefineProperty(this, "_visibleColumnFields", _descriptor8, this);
    _initializerDefineProperty(this, "_columnOrder", _descriptor9, this);
    _initializerDefineProperty(this, "_columnWidths", _descriptor0, this);
    _initializerDefineProperty(this, "showManagePanel", _descriptor1, this);
    // ─── Filter overlay ──────────────────────────────────────────────────────
    _initializerDefineProperty(this, "filterOverlayColumn", _descriptor10, this);
    _initializerDefineProperty(this, "filterOverlayPosition", _descriptor11, this);
    _initializerDefineProperty(this, "filterOverlayWrapperElement", _descriptor12, this);
    // ─── Toolbar sort popover (sortOptions) ───────────────────────────────────
    _initializerDefineProperty(this, "showSortPopover", _descriptor13, this);
    _initializerDefineProperty(this, "sortPopoverPosition", _descriptor14, this);
    _initializerDefineProperty(this, "sortPopoverTriggerElement", _descriptor15, this);
    _initializerDefineProperty(this, "_sortByString", _descriptor16, this);
    // ─── Manage columns popup ─────────────────────────────────────────────────
    _initializerDefineProperty(this, "manageColumnsTriggerElement", _descriptor17, this);
    _initializerDefineProperty(this, "manageColumnsRef", _descriptor18, this);
    // ─── Filter slide pane (filterGroups) ──────────────────────────────────────
    _initializerDefineProperty(this, "filterPaneOpen", _descriptor19, this);
    _initializerDefineProperty(this, "_filterPaneSelections", _descriptor20, this);
    // ─── Filter bubble popup ──────────────────────────────────────────────────
    _initializerDefineProperty(this, "activeFilterBubbleField", _descriptor21, this);
    _initializerDefineProperty(this, "filterBubbleTriggerEl", _descriptor22, this);
    // ─── Resize state ────────────────────────────────────────────────────────
    _defineProperty(this, "_resizingColField", null);
    _defineProperty(this, "_resizeStartX", null);
    _defineProperty(this, "_resizeStartWidth", null);
    // ─── Debounce timer ──────────────────────────────────────────────────────
    _defineProperty(this, "_globalFilterTimer", null);
    // ─── Editing (uncontrolled fallback) ─────────────────────────────────────
    _initializerDefineProperty(this, "_editingRows", _descriptor23, this);
    _initializerDefineProperty(this, "_editingCell", _descriptor24, this);
    // ─── View toggle (table / card) ──────────────────────────────────────────
    _initializerDefineProperty(this, "_viewMode", _descriptor25, this);
    _defineProperty(this, "_applyGlobalFilter", value => {
      const updated = {
        ...this.filters
      };
      if (value) {
        updated.global = {
          value,
          matchMode: "contains"
        };
      } else {
        delete updated.global;
      }
      this._filters = updated;
      this._first = 0;
      this.persistState();
      if (this.args.lazy) this.args.onFilter?.({
        filters: updated
      });
    });
    _defineProperty(this, "_onResizeMove", event => {
      if (this._resizingColField == null) return;
      const delta = event.clientX - this._resizeStartX;
      const newWidth = Math.max(50, this._resizeStartWidth + delta);
      const widths = {
        ...this._columnWidths,
        [this._resizingColField]: newWidth
      };
      this._columnWidths = widths;
    });
    _defineProperty(this, "_onResizeEnd", () => {
      document.removeEventListener("mousemove", this._onResizeMove);
      document.removeEventListener("mouseup", this._onResizeEnd);
      this._resizingColField = null;
      this.persistState();
    });
  }
  get filterPaneGroupClass() {
    return getComponentClass("checkbox-group");
  }
  willDestroy() {
    super.willDestroy(...arguments);
    document.removeEventListener("mousemove", this._onResizeMove);
    document.removeEventListener("mouseup", this._onResizeEnd);
    this._globalFilterTimer && clearTimeout(this._globalFilterTimer);
  }
  get baseClass() {
    return getComponentClass("datatable");
  }
  get persistenceKey() {
    return this.args.stateKey ?? this.args.moduleName ?? null;
  }
  get persistenceStorage() {
    const {
      stateStorage,
      moduleName,
      stateKey
    } = this.args;
    if (stateStorage) return stateStorage;
    return moduleName && !stateKey ? "local" : "session";
  }
  restorePersistedState() {
    const key = this.persistenceKey;
    if (!key || this._restoredStateKey === key) return;
    this._restoredStateKey = key;
    const persistedState = loadTableState(key, this.persistenceStorage) ?? {};
    const columnMap = new Map(this.allColumns.filter(column => column?.field).map(column => [column.field, column]));
    this.args.sortField === undefined && ("sortField" in persistedState || "sortOrder" in persistedState) && (this._sortField = persistedState.sortField ?? null);
    this.args.sortOrder === undefined && typeof persistedState.sortOrder === "number" && (this._sortOrder = persistedState.sortOrder);
    this.args.multiSortMeta === undefined && Array.isArray(persistedState.multiSortMeta) && (this._multiSortMeta = persistedState.multiSortMeta);
    this.args.sortBy === undefined && typeof persistedState.sortBy === "string" && (this._sortByString = persistedState.sortBy);
    this.args.filters === undefined && persistedState.filters && typeof persistedState.filters === "object" && (this._filters = persistedState.filters);
    this.args.first === undefined && typeof persistedState.first === "number" && (this._first = persistedState.first);
    this.args.rows === undefined && typeof persistedState.rows === "number" && (this._rows = persistedState.rows);
    typeof persistedState.viewMode === "string" && (this._viewMode = persistedState.viewMode);
    Array.isArray(persistedState.visibleColumnFields) && (this._visibleColumnFields = new Set(persistedState.visibleColumnFields));
    Array.isArray(persistedState.columnOrder) && (this._columnOrder = persistedState.columnOrder.map(field => columnMap.get(field)).filter(Boolean));
    persistedState.columnWidths && typeof persistedState.columnWidths === "object" && (this._columnWidths = persistedState.columnWidths);
  }
  get persistenceState() {
    const sortByString = this._sortByString || this.args.sortBy || "";
    return {
      sortField: this._sortField ?? this.args.sortField ?? null,
      sortOrder: this._sortOrder ?? this.args.sortOrder ?? 1,
      multiSortMeta: this._multiSortMeta ?? this.args.multiSortMeta ?? [],
      sortBy: sortByString,
      filters: this._filters ?? this.args.filters ?? {},
      first: this._first ?? this.args.first ?? 0,
      rows: this._rows ?? this.args.rows ?? 10,
      viewMode: this._viewMode ?? this.args.defaultView ?? "table",
      visibleColumnFields: this._visibleColumnFields ? [...this._visibleColumnFields] : null,
      columnOrder: Array.isArray(this._columnOrder) ? this._columnOrder.map(column => column?.field).filter(Boolean) : null,
      columnWidths: this._columnWidths ?? {}
    };
  }
  persistState() {
    const key = this.persistenceKey;
    if (!key) return;
    saveTableState(key, this.persistenceStorage, this.persistenceState);
  }
  get rootClasses() {
    const {
      size = "m-size",
      stripedRows,
      showGridlines,
      loading,
      scrollable,
      layout,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    parts.push(size);
    stripedRows && parts.push("striped-rows");
    showGridlines && parts.push("gridlines");
    loading && parts.push("loading");
    scrollable && parts.push("scrollable");
    layout === "vertical" && parts.push("vertical-layout");
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get tableClass() {
    const {
      stripedRows,
      showGridlines
    } = this.args;
    const parts = ["datatable-table"];
    stripedRows && parts.push("striped");
    showGridlines && parts.push("gridlines");
    return parts.filter(Boolean).join(" ");
  }
  get tableStyle() {
    return this.args.resizableColumns ? "table-layout: fixed;" : undefined;
  }
  get wrapperStyle() {
    const {
      scrollable,
      scrollHeight
    } = this.args;
    if (scrollable && scrollHeight) return `overflow: auto; max-height: ${scrollHeight};`;
    if (scrollable) return "overflow: auto;";
    return undefined;
  }
  // ─── Sort (controlled vs uncontrolled) ───────────────────────────────────
  // When sortOptions is provided, sort is driven by sortBy string "key:asc|desc".
  get sortField() {
    this.restorePersistedState();
    const opts = this.args.sortOptions;
    if (opts?.length) {
      return parseSortBy(this.args.sortBy ?? this._sortByString).field;
    }
    return this.args.sortField !== undefined ? this.args.sortField : this._sortField;
  }
  get sortOrder() {
    this.restorePersistedState();
    const opts = this.args.sortOptions;
    if (opts?.length) {
      return parseSortBy(this.args.sortBy ?? this._sortByString).order;
    }
    return this.args.sortOrder !== undefined ? this.args.sortOrder : this._sortOrder;
  }
  get sortByString() {
    this.restorePersistedState();
    const opts = this.args.sortOptions;
    if (opts?.length) {
      return this.args.sortBy ?? this._sortByString ?? "";
    }
    const field = this.sortField;
    const order = this.sortOrder;
    return field ? `${field}:${order === 1 ? "asc" : "desc"}` : "";
  }
  get sortMode() {
    return this.args.sortMode ?? "single";
  }
  get multiSortMeta() {
    this.restorePersistedState();
    return this.args.multiSortMeta !== undefined ? this.args.multiSortMeta : this._multiSortMeta;
  }
  // ─── Filter (controlled vs uncontrolled) ────────────────────────────────
  get filters() {
    this.restorePersistedState();
    return this.args.filters !== undefined ? this.args.filters : this._filters;
  }
  // ─── Pagination (controlled vs uncontrolled) ─────────────────────────────
  get first() {
    this.restorePersistedState();
    return this.args.first !== undefined ? this.args.first : this._first;
  }
  get rows() {
    this.restorePersistedState();
    return this.args.rows !== undefined ? this.args.rows : this._rows;
  }
  get totalRecords() {
    return this.args.totalRecords ?? this.unfilteredCount;
  }
  // ─── Editing ─────────────────────────────────────────────────────────────
  get editingRows() {
    return this.args.editingRows !== undefined ? this.args.editingRows : this._editingRows;
  }
  get editingCell() {
    return this._editingCell;
  }
  // ─── Column management ───────────────────────────────────────────────────
  get allColumns() {
    return this.args.columns ?? [];
  }
  get visibleColumns() {
    this.restorePersistedState();
    const fields = this._visibleColumnFields;
    if (!fields) return this.allColumns;
    return this.allColumns.filter(c => {
      if (isSpecialColumn(c)) return true;
      if (c.manageable === false) return true;
      return fields.has(c.field);
    });
  }
  get orderedColumns() {
    this.restorePersistedState();
    const order = this._columnOrder;
    if (!order) return this.visibleColumns;
    const fieldOrder = order.map(c => c.field);
    return [...this.visibleColumns].sort((a, b) => {
      const ia = fieldOrder.indexOf(a.field);
      const ib = fieldOrder.indexOf(b.field);
      if (ia === -1 && ib === -1) return 0;
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });
  }
  // ─── Data pipeline ───────────────────────────────────────────────────────
  get rawData() {
    return this.args.value ?? [];
  }
  get unfilteredCount() {
    return this.rawData.length;
  }
  get globalFilterFields() {
    return this.args.globalFilterFields ?? this.allColumns.filter(c => c.field && !isSpecialColumn(c)).map(c => c.filterField ?? c.field);
  }
  get globalFilterValue() {
    return this.filters?.global?.value ?? "";
  }
  get shouldUseSearchEmptyState() {
    return this.hasActiveFilters && !this.args.emptyMessage;
  }
  get emptyStateHeaderText() {
    if (this.shouldUseSearchEmptyState) {
      return "msg.empty.state.title";
    }
    return this.args.emptyMessage ?? "msg.table.no.records";
  }
  get emptyStateSubHeaderText() {
    return this.shouldUseSearchEmptyState ? "msg.empty.state.subtitle" : null;
  }
  get emptyStateIconName() {
    return this.shouldUseSearchEmptyState ? "event-past-icon" : null;
  }
  get processedData() {
    const {
      lazy
    } = this.args;
    if (lazy) return this.rawData;
    let data = this.rawData;
    // Filter
    if (Object.keys(this.filters).length) {
      data = filterItems(data, this.filters, this.globalFilterFields);
    }
    // Sort
    if (this.sortMode === "multiple") {
      if (this.multiSortMeta?.length) {
        data = multiSortItems(data, this.multiSortMeta);
      }
    } else {
      if (this.sortField) {
        data = sortItems(data, this.sortField, this.sortOrder);
      }
    }
    return data;
  }
  get pagedData() {
    const {
      lazy,
      paginator
    } = this.args;
    if (lazy || !paginator) return this.processedData;
    return paginateItems(this.processedData, this.first, this.rows);
  }
  get frozenData() {
    return this.args.frozenValue ?? [];
  }
  get paginatorTotalRecords() {
    const {
      lazy
    } = this.args;
    if (lazy) return this.totalRecords;
    return this.processedData.length;
  }
  get paginatorPosition() {
    return this.args.paginatorPosition ?? "bottom";
  }
  get showPaginatorTop() {
    return this.args.paginator && (this.paginatorPosition === "top" || this.paginatorPosition === "both");
  }
  get showPaginatorBottom() {
    return this.args.paginator && (this.paginatorPosition === "bottom" || this.paginatorPosition === "both");
  }
  // ─── View mode (table / detailed / card) ──────────────────────────────────
  get viewMode() {
    this.restorePersistedState();
    return this._viewMode ?? this.args.defaultView ?? "table";
  }
  get cardViewColumns() {
    return this.args.cardViewColumns ?? 3;
  }
  // ─── Vertical layout ──────────────────────────────────────────────────────
  get isVertical() {
    return this.args.layout === "vertical";
  }
  get verticalRows() {
    return this.orderedColumns.filter(col => col.field && !isSpecialColumn(col));
  }
  getCellValue(row, col) {
    return getFieldValue(row, col.field);
  }
  // ─── Selection helpers ────────────────────────────────────────────────────
  get allSelected() {
    const {
      selection,
      dataKey
    } = this.args;
    if (!Array.isArray(selection) || !selection.length) return false;
    return this.pagedData.every(row => {
      if (!dataKey) return selection.includes(row);
      const rk = String(row[dataKey]);
      return selection.some(s => String(s[dataKey]) === rk);
    });
  }
  get someSelected() {
    const {
      selection,
      dataKey
    } = this.args;
    if (!Array.isArray(selection) || !selection.length) return false;
    return !this.allSelected && this.pagedData.some(row => {
      if (!dataKey) return selection.includes(row);
      const rk = String(row[dataKey]);
      return selection.some(s => String(s[dataKey]) === rk);
    });
  }
  // ─── Sort actions ─────────────────────────────────────────────────────────
  handleSort(field) {
    const {
      removableSort
    } = this.args;
    if (this.sortMode === "multiple") {
      const meta = [...(this.multiSortMeta ?? [])];
      const idx = meta.findIndex(m => m.field === field);
      if (idx >= 0) {
        if (meta[idx].order === 1) {
          meta[idx] = {
            field,
            order: -1
          };
        } else if (removableSort) {
          meta.splice(idx, 1);
        } else {
          meta[idx] = {
            field,
            order: 1
          };
        }
      } else {
        meta.push({
          field,
          order: 1
        });
      }
      this._multiSortMeta = meta;
      this._first = 0;
      this.persistState();
      this.args.onSort?.({
        multiSortMeta: meta
      });
    } else {
      let order;
      if (this.sortField === field) {
        if (this.sortOrder === 1) order = -1;else if (removableSort) {
          this._sortField = null;
          this._sortOrder = 1;
          this._sortByString = "";
          this._first = 0;
          this.persistState();
          this.args.onSort?.({
            field: null,
            order: null
          });
          this.args.sortOptions?.length && this.args.onSortByChange?.("");
          return;
        } else order = 1;
      } else {
        order = 1;
      }
      this._sortField = field;
      this._sortOrder = order;
      const sortByString = `${field}:${order === 1 ? "asc" : "desc"}`;
      this._sortByString = sortByString;
      this._first = 0;
      this.persistState();
      this.args.onSort?.({
        field,
        order
      });
      this.args.sortOptions?.length && this.args.onSortByChange?.(sortByString);
    }
  }
  // ─── Filter actions ───────────────────────────────────────────────────────
  handleFilterChange(field, value, matchMode = "contains") {
    const updated = {
      ...this.filters
    };
    const isEmpty = value == null || value === "" || Array.isArray(value) && value.length === 0;
    if (isEmpty) {
      delete updated[field];
    } else {
      updated[field] = {
        value,
        matchMode
      };
    }
    this._filters = updated;
    this._first = 0;
    this.persistState();
    if (this.args.lazy) this.args.onFilter?.({
      filters: updated
    });
  }
  handleFilterApply(field, meta) {
    const updated = {
      ...this.filters,
      [field]: meta
    };
    this._filters = updated;
    this._first = 0;
    this.filterOverlayColumn = null;
    this.persistState();
    if (this.args.lazy) this.args.onFilter?.({
      filters: updated
    });
  }
  handleFilterClear(field) {
    const updated = {
      ...this.filters
    };
    delete updated[field];
    this._filters = updated;
    this._first = 0;
    this.filterOverlayColumn = null;
    this.persistState();
    if (this.args.lazy) this.args.onFilter?.({
      filters: updated
    });
  }
  get hasFilterableColumns() {
    return this.allColumns.some(c => c.filter);
  }
  get hasActiveFilters() {
    return Object.keys(this.filters).length > 0;
  }
  get filterGroups() {
    return this.args.filterGroups ?? [];
  }
  get hasFilterGroups() {
    return this.filterGroups.length > 0;
  }
  get showToolbar() {
    const {
      showGlobalFilter,
      sortOptions,
      showManageColumns,
      showToggleViews
    } = this.args;
    return !!showGlobalFilter || sortOptions?.length > 0 || this.hasFilterGroups || !!showManageColumns || !!showToggleViews;
  }
  get filterAccordionModel() {
    return this.filterGroups.map(g => ({
      header: g.heading ?? g.key
    }));
  }
  getFilterGroupAt(index) {
    return this.filterGroups[index] ?? null;
  }
  isFilterPaneOptionChecked(groupKey, optionValue) {
    const arr = this._filterPaneSelections[groupKey];
    return Array.isArray(arr) && arr.includes(optionValue);
  }
  get showClearFiltersBar() {
    const fd = this.args.filterDisplay;
    return fd === "row" && this.hasFilterableColumns && this.hasActiveFilters;
  }
  get showFilterBubblesBar() {
    return this.hasActiveFilters;
  }
  get activeFilterBubbles() {
    const bubbles = [];
    const processedFields = new Set();
    for (const group of this.filterGroups) {
      const meta = this.filters[group.key];
      if (!meta) continue;
      const values = Array.isArray(meta.value) ? meta.value : [meta.value].filter(Boolean);
      if (!values.length) continue;
      const labels = values.map(v => group.options?.find(o => o.value === v)?.label ?? String(v));
      bubbles.push({
        field: group.key,
        label: group.heading ?? group.key,
        displayValue: labels.join(", "),
        type: "pane",
        meta,
        group
      });
      processedFields.add(group.key);
    }
    for (const col of this.allColumns) {
      if (!col.filter) continue;
      const field = col.filterField ?? col.field;
      if (processedFields.has(field)) continue;
      const meta = this.filters[field];
      if (!meta) continue;
      const constraints = meta.constraints ?? [{
        value: meta.value,
        matchMode: meta.matchMode
      }];
      const ruleCount = constraints.length;
      const firstValue = constraints[0]?.value;
      const displayValue = ruleCount > 1 ? `${ruleCount} rules` : Array.isArray(firstValue) ? firstValue.join(", ") : String(firstValue ?? "");
      bubbles.push({
        field,
        label: col.header ?? field,
        displayValue,
        ruleCount,
        type: "column",
        meta,
        col
      });
      processedFields.add(field);
    }
    return bubbles;
  }
  get activeBubble() {
    if (!this.activeFilterBubbleField) return null;
    return this.activeFilterBubbles.find(b => b.field === this.activeFilterBubbleField) ?? null;
  }
  handleGlobalFilterInput(event) {
    const value = event?.target?.value ?? "";
    this._globalFilterTimer && clearTimeout(this._globalFilterTimer);
    this._globalFilterTimer = setTimeout(() => {
      this._applyGlobalFilter(value);
    }, 300);
  }
  handleClearAllFilters() {
    this._filters = {};
    this._first = 0;
    this.filterOverlayColumn = null;
    this.persistState();
    if (this.args.lazy) this.args.onFilter?.({
      filters: {}
    });
  }
  handleFilterMenuOpen(event, col) {
    const trigger = event?.currentTarget;
    if (trigger) {
      const rect = trigger.getBoundingClientRect();
      const scrollTop = window.scrollY ?? window.pageYOffset ?? 0;
      const scrollLeft = window.scrollX ?? window.pageXOffset ?? 0;
      this.filterOverlayPosition = {
        top: rect.bottom + scrollTop,
        left: rect.left + scrollLeft
      };
    } else {
      this.filterOverlayPosition = {
        top: 0,
        left: 0
      };
    }
    this.filterOverlayColumn = col;
  }
  closeFilterOverlay() {
    this.filterOverlayColumn = null;
  }
  openFilterBubble(bubble, event) {
    this.filterBubbleTriggerEl = event?.currentTarget ?? null;
    this.activeFilterBubbleField = bubble.field;
    if (bubble.type === "pane") {
      const meta = this.filters[bubble.field];
      const val = meta?.value;
      this._filterPaneSelections = {
        ...this._filterPaneSelections,
        [bubble.field]: Array.isArray(val) ? [...val] : val != null ? [val] : []
      };
    }
  }
  closeFilterBubble() {
    this.activeFilterBubbleField = null;
    this.filterBubbleTriggerEl = null;
  }
  deleteFilterFromBubble(field) {
    const updated = {
      ...this.filters
    };
    delete updated[field];
    this._filters = updated;
    this._first = 0;
    this.filterOverlayColumn = null;
    this.closeFilterBubble();
    this.persistState();
    if (this.args.lazy) this.args.onFilter?.({
      filters: updated
    });
  }
  applyFilterFromBubble(field, meta) {
    const updated = {
      ...this.filters,
      [field]: meta
    };
    this._filters = updated;
    this._first = 0;
    this.closeFilterBubble();
    this.persistState();
    if (this.args.lazy) this.args.onFilter?.({
      filters: updated
    });
  }
  applyPaneFilterFromBubble(field) {
    const arr = this._filterPaneSelections[field];
    const updated = {
      ...this.filters
    };
    if (Array.isArray(arr) && arr.length > 0) {
      updated[field] = {
        value: arr,
        matchMode: "in"
      };
    } else {
      delete updated[field];
    }
    this._filters = updated;
    this._first = 0;
    this.closeFilterBubble();
    this.persistState();
    if (this.args.lazy) this.args.onFilter?.({
      filters: updated
    });
  }
  handleSortByChange(sortByString) {
    this._sortByString = sortByString;
    this.persistState();
    this.args.onSortByChange?.(sortByString);
  }
  openSortPopover(event) {
    const trigger = event?.currentTarget;
    this.sortPopoverTriggerElement = trigger ?? null;
    this.showSortPopover = true;
  }
  closeSortPopover() {
    this.showSortPopover = false;
    this.sortPopoverTriggerElement = null;
    this.sortPopoverPosition = null;
  }
  openFilterPane() {
    const sel = {};
    this.filterGroups.forEach(g => {
      const key = g.key;
      const current = this.filters?.[key];
      const val = current?.value;
      sel[key] = Array.isArray(val) ? [...val] : val != null && val !== "" ? [val] : [];
    });
    this._filterPaneSelections = sel;
    this.filterPaneOpen = true;
  }
  closeFilterPane() {
    this.filterPaneOpen = false;
  }
  applyFilterPane() {
    const updated = {
      ...this.filters
    };
    Object.keys(this._filterPaneSelections).forEach(key => {
      const arr = this._filterPaneSelections[key];
      if (Array.isArray(arr) && arr.length > 0) {
        updated[key] = {
          value: arr,
          matchMode: "in"
        };
      } else {
        delete updated[key];
      }
    });
    this._filters = updated;
    this._first = 0;
    this.filterPaneOpen = false;
    this.persistState();
    if (this.args.lazy) this.args.onFilter?.({
      filters: updated
    });
    this.args.onFilterApply?.(this._filterPaneSelections);
  }
  updateFilterPaneSelection(groupKey, optionValue, checkedOrEvent) {
    const checked = typeof checkedOrEvent === "boolean" ? checkedOrEvent : !!checkedOrEvent?.target?.checked;
    const arr = this._filterPaneSelections[groupKey] ?? [];
    let next;
    if (checked) {
      next = arr.includes(optionValue) ? arr : [...arr, optionValue];
    } else {
      next = arr.filter(v => v !== optionValue);
    }
    this._filterPaneSelections = {
      ...this._filterPaneSelections,
      [groupKey]: next
    };
  }
  get filterOverlayField() {
    return this.filterOverlayColumn?.filterField ?? this.filterOverlayColumn?.field ?? null;
  }
  get filterOverlayPortalTarget() {
    return typeof document !== "undefined" ? document.body : null;
  }
  get filterOverlayWrapperStyle() {
    const p = this.filterOverlayPosition;
    if (p == null || typeof p.top !== "number" || typeof p.left !== "number") return undefined;
    const zIndex = this.modalStack?.topModal ? this.modalStack.getZIndex(this.modalStack.topModal) + 20 : 1100;
    return `position: absolute; top: ${p.top}px; left: ${p.left}px; z-index: ${zIndex};`;
  }
  // ─── Pagination actions ───────────────────────────────────────────────────
  handlePageChange(event) {
    this._first = event.first;
    this._rows = event.rows;
    this.persistState();
    this.args.onPage?.(event);
  }
  // ─── Selection actions ─────────────────────────────────────────────────────
  handleSelectionChange(selection) {
    this.args.onSelectionChange?.(selection);
  }
  handleHeaderCheckboxChange(checked) {
    const {
      onSelectionChange,
      dataKey
    } = this.args;
    if (checked) {
      onSelectionChange?.([...this.pagedData]);
    } else {
      onSelectionChange?.([]);
    }
  }
  // ─── Row expansion actions ────────────────────────────────────────────────
  handleRowToggle({
    data
  }) {
    this.args.onRowToggle?.({
      data
    });
  }
  // ─── Editing actions ──────────────────────────────────────────────────────
  handleRowEditInit({
    row,
    originalEvent
  }) {
    if (this.args.onRowEditInit) {
      this.args.onRowEditInit({
        row,
        originalEvent
      });
    } else {
      this._editingRows = [...this._editingRows, row];
    }
  }
  handleRowEditSave({
    row,
    originalEvent
  }) {
    if (this.args.onRowEditSave) {
      this.args.onRowEditSave({
        row,
        originalEvent
      });
    } else {
      this._editingRows = this._editingRows.filter(r => r !== row);
    }
  }
  handleRowEditCancel({
    row,
    originalEvent
  }) {
    if (this.args.onRowEditCancel) {
      this.args.onRowEditCancel({
        row,
        originalEvent
      });
    } else {
      this._editingRows = this._editingRows.filter(r => r !== row);
    }
  }
  handleCellEditInit({
    row,
    field,
    originalEvent
  }) {
    this._editingCell = {
      row,
      field
    };
    this.args.onCellEditInit?.({
      row,
      field,
      originalEvent
    });
  }
  handleCellEditComplete({
    row,
    field,
    value
  }) {
    this._editingCell = null;
    this.args.onCellEditComplete?.({
      row,
      field,
      value
    });
  }
  // ─── Column resize actions ────────────────────────────────────────────────
  handleColumnResizeStart(event, colIndex) {
    const col = this.orderedColumns[colIndex];
    this._resizingColField = col?.field ?? colIndex;
    this._resizeStartX = event.clientX;
    const th = event.target?.closest?.("th");
    this._resizeStartWidth = th?.offsetWidth ?? 100;
    document.addEventListener("mousemove", this._onResizeMove);
    document.addEventListener("mouseup", this._onResizeEnd);
    event.preventDefault();
  }
  // ─── Manage columns ────────────────────────────────────────────────────────
  openManageColumns(event) {
    this.manageColumnsTriggerElement = event?.currentTarget ?? null;
    this.showManagePanel = true;
  }
  closeManageColumns() {
    this.showManagePanel = false;
    this.manageColumnsTriggerElement = null;
    this.manageColumnsRef = null;
  }
  setManageColumnsRef(ref) {
    this.manageColumnsRef = ref;
  }
  handleManageColumnsApply({
    columns
  }) {
    const dataFields = new Set(columns.filter(c => c.field && !isSpecialColumn(c)).map(c => c.field));
    this._visibleColumnFields = dataFields;
    this._columnOrder = columns;
    this.showManagePanel = false;
    this.manageColumnsTriggerElement = null;
    this.persistState();
  }
  handleManageColumnsReset() {
    this._visibleColumnFields = null;
    this._columnOrder = null;
    this.persistState();
  }
  invokeManageColumnsApply() {
    this.manageColumnsRef?.handleApply();
  }
  // ─── Row reorder ──────────────────────────────────────────────────────────
  handleRowReorder({
    dragIndex,
    dropIndex
  }) {
    const reordered = reorderArray(this.pagedData, dragIndex, dropIndex);
    this.args.onRowReorder?.({
      dragIndex,
      dropIndex,
      value: reordered
    });
  }
  // ─── Context menu ──────────────────────────────────────────────────────────
  handleContextMenu({
    row,
    index,
    originalEvent
  }) {
    this.args.onContextMenu?.({
      row,
      index,
      originalEvent
    });
  }
  // ─── View toggle actions ──────────────────────────────────────────────────
  setViewMode(mode) {
    this._viewMode = mode;
    this.persistState();
  }
  getViewToggleOptions(hasDetailed, hasCard) {
    const opts = [{
      value: "table",
      label: t("aria.table.view.table"),
      icon: "grid-icon-master"
    }];
    hasDetailed && opts.push({
      value: "detailed",
      label: t("aria.table.view.detailed"),
      icon: "list-view-icon"
    });
    hasCard && opts.push({
      value: "card",
      label: t("aria.table.view.card"),
      icon: "card-view-icon"
    });
    return opts;
  }
  effectiveViewModeForOptions(currentViewMode, options) {
    const values = Array.isArray(options) ? options.map(o => o?.value) : [];
    return values.includes(currentViewMode) ? currentViewMode : options?.[0]?.value ?? "table";
  }
  handleViewToggleChange(value) {
    this.setViewMode(value);
  }
  // ─── Row events ────────────────────────────────────────────────────────────
  handleRowClick(event) {
    this.args.onRowClick?.(event);
  }
  handleRowDoubleClick(event) {
    this.args.onRowDoubleClick?.(event);
  }
  // ─── CSV export ────────────────────────────────────────────────────────────
  exportCSV(filename) {
    exportCSV(this.orderedColumns, this.processedData, filename);
  }
  filterMetaFor(col) {
    const field = col?.filterField ?? col?.field;
    return this.filters?.[field];
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} ...attributes aria-busy={{if @loading \"true\"}}>\n\t\t\t{{!-- Custom table header area --}}\n\t\t\t{{#if (has-block \"header\")}}\n\t\t\t\t<div class=\"header-toolbar\">\n\t\t\t\t\t{{yield to=\"header\"}}\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t{{!-- Unified toolbar (filter menu): left = slots + search, right = slots + button group (Filter, Sort, Columns) + view toggle --}}\n\t\t\t{{#if (or this.showToolbar (has-block \"preLeftMenu\") (has-block \"postLeftMenu\") (has-block \"preRightMenu\") (has-block \"postRightMenu\"))}}\n\t\t\t\t<div class=\"header-toolbar datatable-toolbar\">\n\t\t\t\t\t<div class=\"datatable-toolbar-left\">\n\t\t\t\t\t\t{{yield to=\"preLeftMenu\"}}\n\t\t\t\t\t\t{{#if @showGlobalFilter}}\n\t\t\t\t\t\t\t<div class=\"datatable-globalfilter\" role=\"search\">\n\t\t\t\t\t\t\t\t<UlxIconInput @value={{this.globalFilterValue}} @iconLeft=\"search-icon\" @iconType=\"font\" @iconClass=\"bs-icons1\" @iconSize=\"s14\" @onInput={{this.handleGlobalFilterInput}} placeholder={{or @globalFilterPlaceholder (t \"msg.table.global.filter.placeholder\")}} aria-label={{t \"aria.table.global.filter\"}} />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{yield to=\"postLeftMenu\"}}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"datatable-toolbar-right flex gap-4\">\n\t\t\t\t\t\t{{yield to=\"preRightMenu\"}}\n\t\t\t\t\t\t{{#if (or this.hasFilterGroups (and @sortOptions (gt @sortOptions.length 0)) @showManageColumns @showToggleViews)}}\n\t\t\t\t\t\t\t<UlxButtonGroup @size=\"m-size\" @customClass=\"uls-inline-popup\">\n\t\t\t\t\t\t\t\t{{#if this.hasFilterGroups}}\n\t\t\t\t\t\t\t\t\t<UlxIconButton @variant=\"outlined\" @size=\"m-size\" @iconLeft=\"filter-icon\" @iconComponentClass=\"bs-icons1\" aria-label={{t \"lbl.filter\"}} {{on \"click\" this.openFilterPane}} />\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{#if (and @sortOptions (gt @sortOptions.length 0))}}\n\t\t\t\t\t\t\t\t\t<UlxIconButton @variant=\"outlined\" @size=\"m-size\" @iconLeft=\"sort-icon\" @iconComponentClass=\"bs-icons1\" aria-label={{t \"lbl.sort\"}} aria-expanded={{this.showSortPopover}} {{on \"click\" this.openSortPopover}} />\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{#if @showManageColumns}}\n\t\t\t\t\t\t\t\t\t<UlxIconButton @variant=\"outlined\" @size=\"m-size\" @iconLeft=\"columns-icon\" @iconComponentClass=\"bs-icons1\" aria-label={{t \"lbl.columns\"}} {{on \"click\" this.openManageColumns}} />\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</UlxButtonGroup>\n\t\t\t\t\t\t\t{{#if @showToggleViews}}\n\t\t\t\t\t\t\t\t{{#if (or (has-block \"detailed\") (has-block \"card\"))}}\n\t\t\t\t\t\t\t\t\t{{#let (has-block \"detailed\") (has-block \"card\") as |hasDetailed hasCard|}}\n\t\t\t\t\t\t\t\t\t\t{{#let (this.getViewToggleOptions hasDetailed hasCard) as |viewOpts|}}\n\t\t\t\t\t\t\t\t\t\t\t<UlxSelectButton @options={{viewOpts}} @value={{this.effectiveViewModeForOptions this.viewMode viewOpts}} @onChange={{this.handleViewToggleChange}} @size=\"m-size\" @variant=\"primary\" @ariaLabel={{t \"aria.table.view.toggle\"}}>\n\t\t\t\t\t\t\t\t\t\t\t\t<:item as |option|>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @iconName={{option.icon}} @type=\"font\" @componentClass=\"bs-icons1\" @size=\"s16\" aria-hidden=\"true\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</:item>\n\t\t\t\t\t\t\t\t\t\t\t</UlxSelectButton>\n\t\t\t\t\t\t\t\t\t\t{{/let}}\n\t\t\t\t\t\t\t\t\t{{/let}}\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{yield to=\"postRightMenu\"}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t{{!-- Row-mode clear filters bar --}}\n\t\t\t{{#if this.showClearFiltersBar}}\n\t\t\t\t<div class=\"datatable-clear-filters-bar py-2\">\n\t\t\t\t\t<UlxButton @variant=\"text\" @label={{t \"lbl.clear.filters\"}} @onClick={{this.handleClearAllFilters}} aria-label={{t \"lbl.clear.filters\"}} />\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t{{!-- Filter bubbles bar \u2014 shown whenever any filter is active --}}\n\t\t\t{{#if this.showFilterBubblesBar}}\n\t\t\t\t<div class=\"datatable-filter-bubbles-bar\" role=\"group\" aria-label={{t \"lbl.filter\"}}>\n\t\t\t\t\t{{#each this.activeFilterBubbles as |bubble|}}\n\t\t\t\t\t\t<div class=\"datatable-filter-bubble-item\">\n\t\t\t\t\t\t\t<UlxButton @variant=\"outlined\" @size=\"compact\" @customClass=\"filter-bubble-trigger\" @onClick={{fn this.openFilterBubble bubble}} aria-haspopup=\"true\" aria-expanded={{eq this.activeFilterBubbleField bubble.field}}>\n\t\t\t\t\t\t\t\t<:default>\n\t\t\t\t\t\t\t\t\t<UlxChip @size=\"s-size\" @customClass=\"filter-bubble-chip\">\n\t\t\t\t\t\t\t\t\t\t<UlxIcon @iconName=\"filter-icon\" @componentClass=\"bs-icons1\" @type=\"font\" @size=\"s18\" aria-hidden=\"true\" />\n\t\t\t\t\t\t\t\t\t\t<span class=\"filter-bubble-label\">\n\t\t\t\t\t\t\t\t\t\t\t{{bubble.label}}:\n\t\t\t\t\t\t\t\t\t\t\t<strong>{{bubble.displayValue}}</strong>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<UlxIcon @iconName=\"down-arrow-filled-icon\" @componentClass=\"bs-icons1\" @type=\"font\" @size=\"s18\" aria-hidden=\"true\" />\n\t\t\t\t\t\t\t\t\t</UlxChip>\n\t\t\t\t\t\t\t\t</:default>\n\t\t\t\t\t\t\t</UlxButton>\n\t\t\t\t\t\t\t<UlxIconButton @variant=\"link\" @size=\"s-size\" @iconSize=\"s18\" @iconLeft=\"remove-icon\" @customClass=\"filter-bubble-remove-btn\" @onClick={{fn this.deleteFilterFromBubble bubble.field}} aria-label={{t \"lbl.delete.filter\"}} />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/each}}\n\t\t\t\t\t<UlxIconButton @variant=\"danger\" @text={{true}} @size=\"compact\" @iconLeft=\"delete-icon-02\" @label={{t \"lbl.clear.filters\"}} @onClick={{this.handleClearAllFilters}} />\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t{{!-- Top paginator --}}\n\t\t\t{{#if this.showPaginatorTop}}\n\t\t\t\t<div class=\"datatable-paginator\">\n\t\t\t\t\t<UlxPaginator @totalRecords={{this.paginatorTotalRecords}} @rows={{this.rows}} @first={{this.first}} @rowsPerPageOptions={{@rowsPerPageOptions}} @template={{@paginatorTemplate}} @currentPageReportTemplate={{@currentPageReportTemplate}} @onPageChange={{this.handlePageChange}}>\n\t\t\t\t\t\t<:left>{{yield to=\"paginatorLeft\"}}</:left>\n\t\t\t\t\t\t<:right>{{yield to=\"paginatorRight\"}}</:right>\n\t\t\t\t\t</UlxPaginator>\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t{{!-- Detailed view (list view \u2014 uses UlxDataView when there is data) --}}\n\t\t\t{{#if (and (eq this.viewMode \"detailed\") (has-block \"detailed\"))}}\n\t\t\t\t<div class=\"datatable-wrapper {{if @scrollable \"scrollable\"}}\" style={{this.wrapperStyle}}>\n\t\t\t\t\t{{#if (or @loading this.pagedData.length)}}\n\t\t\t\t\t\t<UlxDataView @layout=\"list\" @gridRole=\"list\">\n\t\t\t\t\t\t\t<:content>\n\t\t\t\t\t\t\t\t{{#each this.pagedData as |row|}}\n\t\t\t\t\t\t\t\t\t<div class=\"dataview-item\">\n\t\t\t\t\t\t\t\t\t\t{{yield row to=\"detailed\"}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t\t\t</:content>\n\t\t\t\t\t\t</UlxDataView>\n\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{#if (and (not @loading) (not this.pagedData.length))}}\n\t\t\t\t\t\t<div class=\"datatable-empty-message\">\n\t\t\t\t\t\t\t{{#if (has-block \"emptyMessage\")}}\n\t\t\t\t\t\t\t\t{{yield to=\"emptyMessage\"}}\n\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t<UlxEmptyState @headerText={{this.emptyStateHeaderText}} @subHeaderText={{this.emptyStateSubHeaderText}} @iconName={{this.emptyStateIconName}} @iconSize=\"s32\" />\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</div>\n\t\t\t{{else if (and (eq this.viewMode \"card\") (has-block \"card\"))}}\n\t\t\t\t{{!-- Card view (grid; column count from @cardViewColumns \u2014 uses ulx-grid from grid.less) --}}\n\t\t\t\t<div class=\"datatable-wrapper {{if @scrollable \"scrollable\"}}\" style={{this.wrapperStyle}}>\n\t\t\t\t\t<div class=\"ulx-grid gap-4 col-{{this.cardViewColumns}}\">\n\t\t\t\t\t\t{{#each this.pagedData as |row|}}\n\t\t\t\t\t\t\t<UlxCard @bodyClass=\"p-0\">{{yield row to=\"card\"}}</UlxCard>\n\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t</div>\n\t\t\t\t\t{{#if (and (not @loading) (not this.pagedData.length))}}\n\t\t\t\t\t\t<div class=\"datatable-empty-message\">\n\t\t\t\t\t\t\t{{#if (has-block \"emptyMessage\")}}\n\t\t\t\t\t\t\t\t{{yield to=\"emptyMessage\"}}\n\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t<UlxEmptyState @headerText={{this.emptyStateHeaderText}} @subHeaderText={{this.emptyStateSubHeaderText}} @iconName={{this.emptyStateIconName}} @iconSize=\"s32\" />\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</div>\n\t\t\t{{else if this.isVertical}}\n\t\t\t\t{{!-- Vertical (transposed) table \u2014 rows = properties, columns = data records --}}\n\t\t\t\t<div class=\"datatable-wrapper {{if @scrollable \"scrollable\"}}\" style={{this.wrapperStyle}}>\n\t\t\t\t\t<table class=\"{{this.tableClass}} datatable-vertical\" role=\"grid\">\n\t\t\t\t\t\t{{#if @verticalLabelField}}\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th class=\"datatable-vertical-corner\" scope=\"col\" aria-label={{t \"aria.table.vertical.corner\"}}></th>\n\t\t\t\t\t\t\t\t\t{{#each this.pagedData as |row|}}\n\t\t\t\t\t\t\t\t\t\t<th class=\"datatable-vertical-col-header\" scope=\"col\">\n\t\t\t\t\t\t\t\t\t\t\t{{getFieldValue row @verticalLabelField}}\n\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t{{#each this.verticalRows as |col|}}\n\t\t\t\t\t\t\t\t<tr class=\"datatable-vertical-row\">\n\t\t\t\t\t\t\t\t\t<th class=\"column-header-cell datatable-vertical-row-header\" scope=\"row\">\n\t\t\t\t\t\t\t\t\t\t{{col.header}}\n\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t{{#each this.pagedData as |row rowIdx|}}\n\t\t\t\t\t\t\t\t\t\t<td class=\"datatable-cell\">\n\t\t\t\t\t\t\t\t\t\t\t{{#if col.body}}\n\t\t\t\t\t\t\t\t\t\t\t\t<col.body @row={{row}} @value={{this.getCellValue row col}} @index={{rowIdx}} />\n\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{this.getCellValue row col}}\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t{{#if (and (not @loading) (not this.pagedData.length))}}\n\t\t\t\t\t\t<div class=\"datatable-empty-message\">\n\t\t\t\t\t\t\t{{#if (has-block \"emptyMessage\")}}\n\t\t\t\t\t\t\t\t{{yield to=\"emptyMessage\"}}\n\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t<UlxEmptyState @headerText={{this.emptyStateHeaderText}} @subHeaderText={{this.emptyStateSubHeaderText}} @iconName={{this.emptyStateIconName}} @iconSize=\"s32\" />\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</div>\n\t\t\t{{else}}\n\t\t\t\t{{!-- Table wrapper --}}\n\t\t\t\t<div class=\"datatable-wrapper {{if @scrollable \"scrollable\"}}\" style={{this.wrapperStyle}}>\n\t\t\t\t\t<table class={{this.tableClass}} style={{this.tableStyle}} role=\"grid\">\n\t\t\t\t\t\t<TableHeader @columns={{this.orderedColumns}} @columnWidths={{this._columnWidths}} @sortField={{this.sortField}} @sortOrder={{this.sortOrder}} @sortMode={{this.sortMode}} @multiSortMeta={{this.multiSortMeta}} @removableSort={{@removableSort}} @resizableColumns={{@resizableColumns}} @selectionMode={{@selectionMode}} @allSelected={{this.allSelected}} @someSelected={{this.someSelected}} @filterDisplay={{@filterDisplay}} @filters={{this.filters}} @showManageColumns={{@showManageColumns}} @hasOptionCell={{has-block \"optionCell\"}} @filterOverlayField={{this.filterOverlayField}} @onSort={{this.handleSort}} @onHeaderCheckboxChange={{this.handleHeaderCheckboxChange}} @onFilterChange={{this.handleFilterChange}} @onFilterMenuOpen={{this.handleFilterMenuOpen}} @onColumnResizeStart={{this.handleColumnResizeStart}} @onManageColumns={{this.openManageColumns}} />\n\n\t\t\t\t\t\t{{!-- Frozen rows body --}}\n\t\t\t\t\t\t{{#if this.frozenData.length}}\n\t\t\t\t\t\t\t<TableBody @rows={{this.frozenData}} @columns={{this.orderedColumns}} @columnWidths={{this._columnWidths}} @dataKey={{@dataKey}} @selectionMode={{@selectionMode}} @selection={{@selection}} @expandedRows={{@expandedRows}} @editMode={{@editMode}} @editingRows={{this.editingRows}} @editingCell={{this.editingCell}} @rowClassName={{@rowClassName}} @showManageColumns={{@showManageColumns}} @hasOptionCell={{has-block \"optionCell\"}} @emptyMessage={{@emptyMessage}} @onSelectionChange={{this.handleSelectionChange}} @onRowToggle={{this.handleRowToggle}} @onRowEditInit={{this.handleRowEditInit}} @onRowEditSave={{this.handleRowEditSave}} @onRowEditCancel={{this.handleRowEditCancel}} @onCellEditInit={{this.handleCellEditInit}} @onCellEditComplete={{this.handleCellEditComplete}} @onRowReorder={{this.handleRowReorder}} @onRowClick={{this.handleRowClick}} @onRowDoubleClick={{this.handleRowDoubleClick}} @onContextMenu={{this.handleContextMenu}}>\n\t\t\t\t\t\t\t\t<:rowExpansion as |row|>{{yield row to=\"rowExpansion\"}}</:rowExpansion>\n\t\t\t\t\t\t\t\t<:optionCell as |row|>{{yield row to=\"optionCell\"}}</:optionCell>\n\t\t\t\t\t\t\t\t<:emptyMessage>\n\t\t\t\t\t\t\t\t\t{{#if (has-block \"customEmptyState\")}}\n\t\t\t\t\t\t\t\t\t\t{{yield to=\"customEmptyState\"}}\n\t\t\t\t\t\t\t\t\t{{else if (has-block \"emptyMessage\")}}\n\t\t\t\t\t\t\t\t\t\t{{yield to=\"emptyMessage\"}}\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t<UlxEmptyState @headerText={{this.emptyStateHeaderText}} @subHeaderText={{this.emptyStateSubHeaderText}} @iconName={{this.emptyStateIconName}} @iconSize=\"s32\" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t</:emptyMessage>\n\t\t\t\t\t\t\t</TableBody>\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{!-- Main data body --}}\n\t\t\t\t\t\t<TableBody @rows={{this.pagedData}} @columns={{this.orderedColumns}} @columnWidths={{this._columnWidths}} @dataKey={{@dataKey}} @loading={{@loading}} @selectionMode={{@selectionMode}} @selection={{@selection}} @expandedRows={{@expandedRows}} @editMode={{@editMode}} @editingRows={{this.editingRows}} @editingCell={{this.editingCell}} @rowClassName={{@rowClassName}} @showManageColumns={{@showManageColumns}} @hasOptionCell={{has-block \"optionCell\"}} @emptyMessage={{@emptyMessage}} @onSelectionChange={{this.handleSelectionChange}} @onRowToggle={{this.handleRowToggle}} @onRowEditInit={{this.handleRowEditInit}} @onRowEditSave={{this.handleRowEditSave}} @onRowEditCancel={{this.handleRowEditCancel}} @onCellEditInit={{this.handleCellEditInit}} @onCellEditComplete={{this.handleCellEditComplete}} @onRowReorder={{this.handleRowReorder}} @onRowClick={{this.handleRowClick}} @onRowDoubleClick={{this.handleRowDoubleClick}} @onContextMenu={{this.handleContextMenu}}>\n\t\t\t\t\t\t\t<:rowExpansion as |row|>{{yield row to=\"rowExpansion\"}}</:rowExpansion>\n\t\t\t\t\t\t\t<:optionCell as |row|>{{yield row to=\"optionCell\"}}</:optionCell>\n\t\t\t\t\t\t\t<:emptyMessage>\n\t\t\t\t\t\t\t\t{{#if (has-block \"customEmptyState\")}}\n\t\t\t\t\t\t\t\t\t{{yield to=\"customEmptyState\"}}\n\t\t\t\t\t\t\t\t{{else if (has-block \"emptyMessage\")}}\n\t\t\t\t\t\t\t\t\t{{yield to=\"emptyMessage\"}}\n\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t<UlxEmptyState @headerText={{this.emptyStateHeaderText}} @subHeaderText={{this.emptyStateSubHeaderText}} @iconName={{this.emptyStateIconName}} @iconSize=\"s32\" />\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</:emptyMessage>\n\t\t\t\t\t\t</TableBody>\n\n\t\t\t\t\t\t<TableFooter @columns={{this.orderedColumns}} @showManageColumns={{@showManageColumns}} @hasOptionCell={{has-block \"optionCell\"}} />\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t{{!-- Loading overlay --}}\n\t\t\t{{#if @loading}}\n\t\t\t\t<div class=\"datatable-loading-overlay\" aria-live=\"polite\" aria-label={{t \"aria.table.loading\"}}>\n\t\t\t\t\t{{#if (has-block \"loadingOverlay\")}}\n\t\t\t\t\t\t{{yield to=\"loadingOverlay\"}}\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t<UlxProgressSpinner @size=\"l-size\" />\n\t\t\t\t\t{{/if}}\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t{{!-- Bottom paginator --}}\n\t\t\t{{#if this.showPaginatorBottom}}\n\t\t\t\t<div class=\"datatable-paginator\">\n\t\t\t\t\t<UlxPaginator @totalRecords={{this.paginatorTotalRecords}} @rows={{this.rows}} @first={{this.first}} @rowsPerPageOptions={{@rowsPerPageOptions}} @template={{@paginatorTemplate}} @currentPageReportTemplate={{@currentPageReportTemplate}} @onPageChange={{this.handlePageChange}}>\n\t\t\t\t\t\t<:left>{{yield to=\"paginatorLeft\"}}</:left>\n\t\t\t\t\t\t<:right>{{yield to=\"paginatorRight\"}}</:right>\n\t\t\t\t\t</UlxPaginator>\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t{{!-- Custom table footer area --}}\n\t\t\t{{#if (has-block \"footer\")}}\n\t\t\t\t<div class=\"datatable-footer\">\n\t\t\t\t\t{{yield to=\"footer\"}}\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t{{!-- Manage columns panel (in UlxPopup, anchored to trigger button) --}}\n\t\t\t{{#if (and this.showManagePanel this.manageColumnsTriggerElement)}}\n\t\t\t\t<UlxPopup @visible={{this.showManagePanel}} @target={{this.manageColumnsTriggerElement}} @position=\"position-bottom-right\" @size=\"l-size\" @closable={{true}} @bodyClassName=\"p-0\" @title={{t \"lbl.manage.columns\"}} @onHide={{this.closeManageColumns}} @ariaLabel={{t \"lbl.manage.columns\"}} @hideTertiaryButton={{false}} @tertiaryButtonLabel={{t \"lbl.reset.to.default\"}} @tertiaryButtonIcon=\"reset-icon\" @cancelButtonLabel={{t \"lbl.cancel\"}} @doneButtonLabel={{t \"lbl.save\"}} @onTertiary={{this.handleManageColumnsReset}} @onCancel={{this.closeManageColumns}} @onDone={{this.invokeManageColumnsApply}}>\n\t\t\t\t\t<ManageColumns @allColumns={{this.allColumns}} @visibleColumns={{this.visibleColumns}} @onApply={{this.handleManageColumnsApply}} @onClose={{this.closeManageColumns}} @onReset={{this.handleManageColumnsReset}} @registerRef={{this.setManageColumnsRef}} />\n\t\t\t\t</UlxPopup>\n\t\t\t{{/if}}\n\n\t\t\t{{!-- Filter bubble edit popup --}}\n\t\t\t{{#if (and this.activeBubble this.filterBubbleTriggerEl)}}\n\t\t\t\t<UlxPopup @visible={{true}} @target={{this.filterBubbleTriggerEl}} @position=\"position-bottom-left\" @size=\"m-size\" @dismissable={{true}} @onHide={{this.closeFilterBubble}} @ariaLabel={{t \"lbl.filter\"}} @hideFooter={{true}}>\n\t\t\t\t\t{{#if (eq this.activeBubble.type \"column\")}}\n\t\t\t\t\t\t<FilterOverlay @column={{this.activeBubble.col}} @filterMeta={{this.activeBubble.meta}} @onApply={{this.applyFilterFromBubble}} @onClear={{this.deleteFilterFromBubble}} @onClose={{this.closeFilterBubble}} />\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t<div class=\"flex flex-col gap-3\">\n\t\t\t\t\t\t\t<div class=\"flex justify-between items-center\">\n\t\t\t\t\t\t\t\t<span class=\"popup-title\">{{this.activeBubble.label}}</span>\n\t\t\t\t\t\t\t\t<UlxIconButton @variant=\"danger\" @text={{true}} @size=\"s-size\" @iconLeft=\"delete-icon-02\" @iconComponentClass=\"bs-icons1\" @label={{t \"lbl.delete.filter\"}} @onClick={{fn this.deleteFilterFromBubble this.activeBubble.field}} />\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"ulx-checkbox-group\">\n\t\t\t\t\t\t\t\t{{#each this.activeBubble.group.options as |opt|}}\n\t\t\t\t\t\t\t\t\t<UlxCheckboxItem @itemLabel={{opt.label}} @checked={{this.isFilterPaneOptionChecked this.activeBubble.group.key opt.value}} @onChange={{fn this.updateFilterPaneSelection this.activeBubble.group.key opt.value}} />\n\t\t\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"flex justify-end\">\n\t\t\t\t\t\t\t\t<UlxButton @variant=\"primary\" @size=\"s-size\" @label={{t \"lbl.apply.filter\"}} @onClick={{fn this.applyPaneFilterFromBubble this.activeBubble.field}} />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</UlxPopup>\n\t\t\t{{/if}}\n\n\t\t\t{{!-- Filter overlay (menu mode) \u2013 portaled to body, position: absolute in document --}}\n\t\t\t{{#if (and this.filterOverlayColumn this.filterOverlayPortalTarget)}}\n\t\t\t\t{{#in-element this.filterOverlayPortalTarget insertBefore=null}}\n\t\t\t\t\t<div class=\"ulx-datatable-filter-overlay-wrapper\" style={{this.filterOverlayWrapperStyle}} role=\"presentation\">\n\t\t\t\t\t\t<FilterOverlay @column={{this.filterOverlayColumn}} @filterMeta={{this.filterMetaFor this.filterOverlayColumn}} @onApply={{this.handleFilterApply}} @onClear={{this.handleFilterClear}} @onClose={{this.closeFilterOverlay}} />\n\t\t\t\t\t</div>\n\t\t\t\t{{/in-element}}\n\t\t\t{{/if}}\n\n\t\t\t{{!-- Sort options popover (toolbar sort button) --}}\n\t\t\t{{#if (and this.showSortPopover this.sortPopoverTriggerElement)}}\n\t\t\t\t<UlxPopup @visible={{this.showSortPopover}} @target={{this.sortPopoverTriggerElement}} @position=\"position-bottom-center\" @size=\"xs-size\" @dismissable={{true}} @closable={{true}} @onHide={{this.closeSortPopover}} @ariaLabel={{t \"lbl.sort\"}}>\n\t\t\t\t\t<div class=\"fs-popup p-1\">\n\t\t\t\t\t\t<SortOptions @sortBy={{this.sortByString}} @sortOptions={{@sortOptions}} @onChange={{this.handleSortByChange}} />\n\t\t\t\t\t</div>\n\t\t\t\t</UlxPopup>\n\t\t\t{{/if}}\n\n\t\t\t{{!-- Filter slide pane (toolbar filter button: UlxAccordion + UlxCheckbox) --}}\n\t\t\t{{#if this.hasFilterGroups}}\n\t\t\t\t<UlxSlidePane @visible={{this.filterPaneOpen}} @title={{t \"lbl.filter\"}} @position=\"right\" @contentClassName=\"p-0\" @onHide={{this.closeFilterPane}} @onCancel={{this.closeFilterPane}} @onDone={{this.applyFilterPane}} @cancelButtonLabel={{t \"lbl.close\"}} @doneButtonLabel={{t \"lbl.apply.filter\"}}>\n\t\t\t\t\t<:body>\n\t\t\t\t\t\t<UlxAccordion @model={{this.filterAccordionModel}} @multiple={{true}} @toggleIconPosition=\"right\" @variant=\"elevated\" @size=\"m-size\">\n\t\t\t\t\t\t\t<:content as |item idx|>\n\t\t\t\t\t\t\t\t{{#let (this.getFilterGroupAt idx) as |group|}}\n\t\t\t\t\t\t\t\t\t{{#if group}}\n\t\t\t\t\t\t\t\t\t\t<div class={{this.filterPaneGroupClass}}>\n\t\t\t\t\t\t\t\t\t\t\t{{#each group.options as |opt|}}\n\t\t\t\t\t\t\t\t\t\t\t\t<UlxCheckboxItem @itemLabel={{opt.label}} @checked={{this.isFilterPaneOptionChecked group.key opt.value}} @onChange={{fn this.updateFilterPaneSelection group.key opt.value}} />\n\t\t\t\t\t\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{/let}}\n\t\t\t\t\t\t\t</:content>\n\t\t\t\t\t\t</UlxAccordion>\n\t\t\t\t\t</:body>\n\t\t\t\t</UlxSlidePane>\n\t\t\t{{/if}}\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    or,
    UlxIconInput,
    t,
    and,
    gt,
    UlxButtonGroup,
    UlxIconButton,
    on,
    UlxSelectButton,
    UlxIcon,
    UlxButton,
    fn,
    eq,
    UlxChip,
    UlxPaginator,
    UlxDataView,
    not,
    UlxEmptyState,
    UlxCard,
    getFieldValue,
    TableHeader,
    TableBody,
    TableFooter,
    UlxProgressSpinner,
    UlxPopup,
    ManageColumns,
    FilterOverlay,
    UlxCheckboxItem,
    SortOptions,
    UlxSlidePane,
    UlxAccordion
  })
}), _UlxTable), _UlxTable), _descriptor = _applyDecoratedDescriptor(_class.prototype, "modalStack", [inject], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_sortField", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "_sortOrder", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 1;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "_multiSortMeta", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "_filters", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {};
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "_first", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "_rows", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 10;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "_visibleColumnFields", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "_columnOrder", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor0 = _applyDecoratedDescriptor(_class.prototype, "_columnWidths", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {};
  }
}), _descriptor1 = _applyDecoratedDescriptor(_class.prototype, "showManagePanel", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "filterOverlayColumn", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "filterOverlayPosition", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "filterOverlayWrapperElement", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "showSortPopover", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "sortPopoverPosition", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "sortPopoverTriggerElement", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "_sortByString", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "manageColumnsTriggerElement", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "manageColumnsRef", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "filterPaneOpen", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, "_filterPaneSelections", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {};
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, "activeFilterBubbleField", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, "filterBubbleTriggerEl", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, "_editingRows", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, "_editingCell", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, "_viewMode", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, "getCellValue", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getCellValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleSort", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleSort"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleFilterChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFilterChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleFilterApply", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFilterApply"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleFilterClear", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFilterClear"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getFilterGroupAt", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getFilterGroupAt"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isFilterPaneOptionChecked", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isFilterPaneOptionChecked"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleGlobalFilterInput", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleGlobalFilterInput"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleClearAllFilters", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleClearAllFilters"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleFilterMenuOpen", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFilterMenuOpen"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeFilterOverlay", [action], Object.getOwnPropertyDescriptor(_class.prototype, "closeFilterOverlay"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openFilterBubble", [action], Object.getOwnPropertyDescriptor(_class.prototype, "openFilterBubble"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeFilterBubble", [action], Object.getOwnPropertyDescriptor(_class.prototype, "closeFilterBubble"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteFilterFromBubble", [action], Object.getOwnPropertyDescriptor(_class.prototype, "deleteFilterFromBubble"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "applyFilterFromBubble", [action], Object.getOwnPropertyDescriptor(_class.prototype, "applyFilterFromBubble"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "applyPaneFilterFromBubble", [action], Object.getOwnPropertyDescriptor(_class.prototype, "applyPaneFilterFromBubble"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleSortByChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleSortByChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openSortPopover", [action], Object.getOwnPropertyDescriptor(_class.prototype, "openSortPopover"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeSortPopover", [action], Object.getOwnPropertyDescriptor(_class.prototype, "closeSortPopover"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openFilterPane", [action], Object.getOwnPropertyDescriptor(_class.prototype, "openFilterPane"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeFilterPane", [action], Object.getOwnPropertyDescriptor(_class.prototype, "closeFilterPane"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "applyFilterPane", [action], Object.getOwnPropertyDescriptor(_class.prototype, "applyFilterPane"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateFilterPaneSelection", [action], Object.getOwnPropertyDescriptor(_class.prototype, "updateFilterPaneSelection"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handlePageChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handlePageChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleSelectionChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleSelectionChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleHeaderCheckboxChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleHeaderCheckboxChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleRowToggle", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleRowToggle"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleRowEditInit", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleRowEditInit"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleRowEditSave", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleRowEditSave"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleRowEditCancel", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleRowEditCancel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleCellEditInit", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleCellEditInit"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleCellEditComplete", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleCellEditComplete"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleColumnResizeStart", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleColumnResizeStart"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openManageColumns", [action], Object.getOwnPropertyDescriptor(_class.prototype, "openManageColumns"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeManageColumns", [action], Object.getOwnPropertyDescriptor(_class.prototype, "closeManageColumns"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setManageColumnsRef", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setManageColumnsRef"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleManageColumnsApply", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleManageColumnsApply"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleManageColumnsReset", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleManageColumnsReset"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "invokeManageColumnsApply", [action], Object.getOwnPropertyDescriptor(_class.prototype, "invokeManageColumnsApply"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleRowReorder", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleRowReorder"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleContextMenu", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleContextMenu"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setViewMode", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setViewMode"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleViewToggleChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleViewToggleChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleRowClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleRowClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleRowDoubleClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleRowDoubleClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "filterMetaFor", [action], Object.getOwnPropertyDescriptor(_class.prototype, "filterMetaFor"), _class.prototype), _class);

export { UlxTable as default };
//# sourceMappingURL=index.js.map
