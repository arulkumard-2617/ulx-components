import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import and from "ember-truth-helpers/helpers/and";
import or from "ember-truth-helpers/helpers/or";
import eq from "ember-truth-helpers/helpers/eq";
import not from "ember-truth-helpers/helpers/not";
import gt from "ember-truth-helpers/helpers/gt";
import { getComponentClass } from "../../../utils/component-config.js";
import {
	sortItems,
	multiSortItems,
	filterItems,
	paginateItems,
	exportCSV,
	reorderArray,
	getFieldValue
} from "./utils.js";
import TableHeader from "./table-header.gjs";
import TableBody from "./table-body.gjs";
import TableFooter from "./table-footer.gjs";
import ManageColumns from "./manage-columns.gjs";
import FilterOverlay from "./filter-overlay.gjs";
import SortOptions from "./sort-options.gjs";
import UlxPaginator from "../ulx-paginator/index.gjs";
import UlxProgressSpinner from "../../elements/ulx-progressspinner/index.gjs";
import UlxButton from "../../elements/ulx-button/index.gjs";
import UlxButtonGroup from "../../collections/ulx-button-group/index.gjs";
import UlxIcon from "../../elements/ulx-icon/index.gjs";
import UlxInput from "../../elements/ulx-input/index.gjs";
import UlxIconInput from "../../elements/ulx-icon-input/index.gjs";
import UlxSlidePane from "../ulx-slide-pane/index.gjs";
import UlxPopup from "../ulx-popup/index.gjs";
import UlxAccordion from "../../collections/ulx-accordion/index.gjs";
import UlxCheckbox from "../../elements/ulx-checkbox/index.gjs";
import UlxCard from "../../elements/ulx-card/index.gjs";
import { t } from "../../../utils/i18n.js";
import { fn } from "@ember/helper";

/**
 * UlxTable — Full-featured data table component matching PrimeReact DataTable.
 *
 * ## Basic usage
 * ```hbs
 * <UlxTable @value={{this.products}} @columns={{this.columns}} @dataKey="id" />
 * ```
 *
 * ## Column definition (in @columns array)
 * ```js
 * const columns = [
 *   { field: 'code',   header: 'Code',   sortable: true },
 *   { field: 'price',  header: 'Price',  sortable: true, body: PriceCell },
 *   { selectionMode: 'multiple' },   // checkbox column
 *   { expander: true },              // row expansion toggle
 * ];
 * ```
 *
 * @class UlxTable
 *
 * ── Data ────────────────────────────────────────────────────────────────────
 * @param {Array}   value            - data array
 * @param {string}  [dataKey]        - unique row identifier field (dot notation OK)
 * @param {boolean} [loading=false]  - show loading overlay
 * @param {string}  [emptyMessage]   - text when no rows; or use <:emptyMessage> block
 *
 * ── Columns ─────────────────────────────────────────────────────────────────
 * @param {Array}   columns          - column definition array (see above)
 * @param {boolean} [showManageColumns=false] - show manage-columns button
 *
 * ── Layout ──────────────────────────────────────────────────────────────────
 * @param {string}  [size]           - 'xs-size' | 's-size' | 'm-size' | 'l-size' | 'xl-size'
 * @param {boolean} [stripedRows]    - alternating row backgrounds
 * @param {boolean} [showGridlines]  - borders on all cells
 * @param {boolean} [scrollable]     - enable overflow scroll with sticky header
 * @param {string}  [scrollHeight]   - CSS height for scroll container (e.g. '400px')
 * @param {string}  [customClass]    - extra classes on root element
 * @param {string}  [layout='horizontal'] - 'horizontal' (default) | 'vertical'. In vertical layout,
 *                                          each row represents a column/property and each column
 *                                          represents a data record (transposed table).
 * @param {string}  [verticalLabelField]  - field name from each data record to use as column headers
 *                                          in vertical layout (e.g. 'name' shows row.name as header)
 *
 * ── Sort ────────────────────────────────────────────────────────────────────
 * @param {string}  [sortMode='single']     - 'single' | 'multiple'
 * @param {string}  [sortField]             - controlled sort field
 * @param {1|-1}    [sortOrder]             - controlled sort order (1=asc, -1=desc)
 * @param {Array}   [multiSortMeta]         - controlled multi-sort: [{field, order}]
 * @param {boolean} [removableSort]         - third click removes sort
 * @param {Function}[onSort]                - ({field, order, multiSortMeta}) => void (lazy)
 * Toolbar sort dropdown (bs-table style): when provided, shows Sort button and drives sort from "key:asc|desc".
 * @param {Array<{key: string, lbl: string}>} [sortOptions] - options for sort criterion dropdown
 * @param {string}  [sortBy]                - controlled sort string "key:asc" | "key:desc"
 * @param {Function}[onSortByChange]        - (sortByString) => void when user changes sort from toolbar
 *
 * ── Filter ──────────────────────────────────────────────────────────────────
 * @param {string}  [filterDisplay]         - 'row' | 'menu'
 * @param {Object}  [filters]               - controlled filter state
 * @param {boolean} [showGlobalFilter]      - show built-in global search input above the table
 * @param {string}  [globalFilterPlaceholder] - placeholder text for the global search input
 * @param {Array}   [globalFilterFields]    - fields searched by global filter; defaults to all data fields
 * @param {Function}[onFilter]              - ({filters}) => void (lazy)
 *
 * Per-column filter props (set on each column definition object):
 * @param {boolean} [col.filter]            - enable filter for this column
 * @param {string}  [col.filterType]        - 'text' (default) | 'multiselect'
 *                                             'multiselect' renders UlxMultiSelect and uses 'in' match mode
 * @param {Array}   [col.filterOptions]     - options for filterType='multiselect': [{label, value}]
 * @param {string}  [col.filterField]       - field used for filtering (defaults to col.field)
 * @param {string}  [col.filterPlaceholder] - placeholder text for filter input
 * @param {Array}   [col.filterMatchModeOptions] - custom match mode options; false to hide match mode selector
 * @param {Component} [col.filterElement]   - fully custom filter component; receives @field @value @onChange
 * Filter slide pane (bs-table style): when provided, shows Filter button and UlxSlidePane with UlxAccordion + UlxCheckbox.
 * @param {Array<{key: string, heading: string, options: Array<{value: any, label: string}>}>} [filterGroups] - groups for filter pane
 * @param {Function}[onFilterApply]        - (selectedMap) => void when user applies filter pane (key -> selected value[])
 *
 * ── Pagination ──────────────────────────────────────────────────────────────
 * @param {boolean} [paginator]             - enable pagination
 * @param {number}  [rows=10]               - rows per page
 * @param {number}  [first=0]               - zero-based first row index
 * @param {number}  [totalRecords]          - total records (lazy mode)
 * @param {Array}   [rowsPerPageOptions]    - e.g. [10, 25, 50]
 * @param {string}  [paginatorTemplate]     - paginator layout string
 * @param {string}  [currentPageReportTemplate]
 * @param {string}  [paginatorPosition='bottom'] - 'top' | 'bottom' | 'both'
 * @param {Function}[onPage]                - ({first, rows, page}) => void
 *
 * ── Selection ───────────────────────────────────────────────────────────────
 * @param {string}  [selectionMode]         - 'single' | 'multiple' | 'checkbox' | 'radio' | 'cell'
 * @param {any}     [selection]             - controlled selection (row, row[], or {row, field})
 * @param {Function}[onSelectionChange]     - (selection) => void
 *
 * ── Row expansion ────────────────────────────────────────────────────────────
 * @param {Array|Object} [expandedRows]     - controlled expanded rows
 * @param {Function}[onRowToggle]           - ({data}) => void
 * Named block: <:rowExpansion as |row|>
 *
 * ── Editing ──────────────────────────────────────────────────────────────────
 * @param {string}  [editMode]              - 'cell' | 'row'
 * @param {Array}   [editingRows]           - controlled row edit state
 * @param {Function}[onRowEditInit]         - ({row}) => void
 * @param {Function}[onRowEditSave]         - ({row}) => void
 * @param {Function}[onRowEditCancel]       - ({row}) => void
 * @param {Function}[onCellEditInit]        - ({row, field}) => void
 * @param {Function}[onCellEditComplete]    - ({row, field, value}) => void
 *
 * ── Column resize ───────────────────────────────────────────────────────────
 * @param {boolean} [resizableColumns]      - enable column resize handles
 * @param {string}  [columnResizeMode='fit'] - 'fit' | 'expand'
 *
 * ── Row reorder ─────────────────────────────────────────────────────────────
 * @param {Function}[onRowReorder]          - ({dragIndex, dropIndex, value}) => void
 *
 * ── Lazy ────────────────────────────────────────────────────────────────────
 * @param {boolean} [lazy]                  - skip client-side sort/filter/paginate
 *
 * ── Row events ──────────────────────────────────────────────────────────────
 * @param {Function}[onRowClick]            - ({row, index, originalEvent}) => void
 * @param {Function}[onRowDoubleClick]      - ({row, index, originalEvent}) => void
 * @param {Function}[onContextMenu]         - ({row, index, originalEvent}) => void
 * @param {string|Function}[rowClassName]   - extra class string or fn(row)=>string
 *
 * ── State persistence ───────────────────────────────────────────────────────
 * @param {string}  [stateKey]              - localStorage/sessionStorage key
 * @param {string}  [stateStorage='session'] - 'local' | 'session'
 *
 * ── Frozen rows ─────────────────────────────────────────────────────────────
 * @param {Array}   [frozenValue]           - rows always shown at top
 *
 * ── Row groups ──────────────────────────────────────────────────────────────
 * @param {string}  [rowGroupMode]          - 'subheader' | 'rowspan'
 * @param {string}  [groupRowsBy]           - field to group by
 * Named blocks: <:rowGroupHeader as |data|>, <:rowGroupFooter as |data|>
 *
 * ── View toggle (table / detailed / card) ─────────────────────────────────────
 * @param {boolean} [showToggleViews=false] - show view toggle (table / detailed / card) and optional custom options
 * @param {string}  [defaultView='table']   - initial view: 'table' | 'detailed' | 'card'
 * @param {number}  [cardViewColumns=3]     - number of columns in card view grid (passed from outside; used with ulx-grid col span)
 * When view is 'card', <:card as |row|> renders each row in a grid (ulx-grid, column count from @cardViewColumns).
 * When view is 'detailed', <:detailed as |row|> renders each row as a full-width list row (ulx-grid, col-12).
 *
 * ── Named blocks ────────────────────────────────────────────────────────────
 * Toolbar slots (rendered before view-toggle/global-filter):
 * <:preLeftMenu>             - toolbar far-left (before any default left content)
 * <:postLeftMenu>            - toolbar left (after default left content)
 * <:preRightMenu>            - toolbar right (before default right content)
 * <:postRightMenu>           - toolbar far-right
 *
 * Per-row actions column (last column, no header/footer cell):
 * <:optionCell as |row|>     - action buttons for each row
 *
 * Table content:
 * <:header>                  - custom table header area (above toolbar)
 * <:footer>                  - custom table footer area
 * <:emptyMessage>            - custom empty state content
 * <:customEmptyState>        - alias for <:emptyMessage> (BSTable compat)
 * <:rowExpansion as |row|>   - row expansion content
 * <:rowGroupHeader as |data|> - row group header
 * <:rowGroupFooter as |data|> - row group footer
 * <:loadingOverlay>          - custom loading content
 * <:paginatorLeft>           - content left of paginator
 * <:paginatorRight>          - content right of paginator
 * <:card as |row|>           - card view renderer
 * <:detailed as |row|>       - detailed/list view renderer
 */
export default class UlxTable extends Component {
	// ─── Internal sort state (uncontrolled) ──────────────────────────────────
	@tracked _sortField = null;
	@tracked _sortOrder = 1;
	@tracked _multiSortMeta = [];

	// ─── Internal filter state (uncontrolled) ────────────────────────────────
	@tracked _filters = {};

	// ─── Internal pagination state (uncontrolled) ────────────────────────────
	@tracked _first = 0;
	@tracked _rows = 10;

	// ─── Column management ───────────────────────────────────────────────────
	@tracked _visibleColumnFields = null;
	@tracked _columnOrder = null;
	@tracked _columnWidths = {};
	@tracked showManagePanel = false;

	// ─── Filter overlay ──────────────────────────────────────────────────────
	@tracked filterOverlayColumn = null;
	@tracked filterOverlayPosition = null;
	@tracked filterOverlayWrapperElement = null;

	// ─── Toolbar sort popover (sortOptions) ───────────────────────────────────
	@tracked showSortPopover = false;
	@tracked sortPopoverPosition = null;
	@tracked sortPopoverTriggerElement = null;
	@tracked _sortByString = "";

	// ─── Manage columns popup ─────────────────────────────────────────────────
	@tracked manageColumnsTriggerElement = null;

	// ─── Filter slide pane (filterGroups) ──────────────────────────────────────
	@tracked filterPaneOpen = false;
	@tracked _filterPaneSelections = {};

	// ─── Resize state ────────────────────────────────────────────────────────
	_resizingColIndex = null;
	_resizeStartX = null;
	_resizeStartWidth = null;

	// ─── Editing (uncontrolled fallback) ─────────────────────────────────────
	@tracked _editingRows = [];
	@tracked _editingCell = null;

	// ─── Context menu ─────────────────────────────────────────────────────────
	@tracked contextMenuData = null;

	// ─── View toggle (table / card) ──────────────────────────────────────────
	@tracked _viewMode = null;

	get baseClass() {
		return getComponentClass("datatable");
	}

	get rootClasses() {
		const {
			size = "s-size",
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
		const { stripedRows, showGridlines } = this.args;
		const parts = ["datatable-table"];
		stripedRows && parts.push("striped");
		showGridlines && parts.push("gridlines");
		return parts.filter(Boolean).join(" ");
	}

	get wrapperStyle() {
		const { scrollable, scrollHeight } = this.args;
		if (scrollable && scrollHeight) return `overflow: auto; max-height: ${scrollHeight};`;
		if (scrollable) return "overflow: auto;";
		return undefined;
	}

	// ─── Sort (controlled vs uncontrolled) ───────────────────────────────────
	// When sortOptions is provided, sort is driven by sortBy string "key:asc|desc".
	get sortField() {
		const opts = this.args.sortOptions;
		if (opts?.length) {
			const s = this.args.sortBy ?? this._sortByString;
			if (s && typeof s === "string") {
				const [k] = s.split(":");
				return k || null;
			}
			return null;
		}
		return this.args.sortField !== undefined ? this.args.sortField : this._sortField;
	}

	get sortOrder() {
		const opts = this.args.sortOptions;
		if (opts?.length) {
			const s = this.args.sortBy ?? this._sortByString;
			if (s && typeof s === "string") {
				const [, o] = s.split(":");
				return o === "desc" ? -1 : 1;
			}
			return 1;
		}
		return this.args.sortOrder !== undefined ? this.args.sortOrder : this._sortOrder;
	}

	get sortByString() {
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
		return this.args.multiSortMeta !== undefined ? this.args.multiSortMeta : this._multiSortMeta;
	}

	// ─── Filter (controlled vs uncontrolled) ────────────────────────────────
	get filters() {
		return this.args.filters !== undefined ? this.args.filters : this._filters;
	}

	// ─── Pagination (controlled vs uncontrolled) ─────────────────────────────
	get first() {
		return this.args.first !== undefined ? this.args.first : this._first;
	}

	get rows() {
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
		const fields = this._visibleColumnFields;
		if (!fields) return this.allColumns;
		return this.allColumns.filter((c) => {
			if (c.selectionMode || c.expander || c.rowReorder || c.rowEditor) return true;
			if (c.manageable === false) return true;
			return fields.has(c.field);
		});
	}

	get orderedColumns() {
		const order = this._columnOrder;
		if (!order) return this.visibleColumns;
		const fieldOrder = order.map((c) => c.field);
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
		return (
			this.args.globalFilterFields ??
			this.allColumns
				.filter((c) => c.field && !c.selectionMode && !c.expander && !c.rowReorder && !c.rowEditor)
				.map((c) => c.filterField ?? c.field)
		);
	}

	get globalFilterValue() {
		return this.filters?.global?.value ?? "";
	}

	get processedData() {
		const { lazy } = this.args;
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
		const { lazy, paginator } = this.args;
		if (lazy || !paginator) return this.processedData;
		return paginateItems(this.processedData, this.first, this.rows);
	}

	get frozenData() {
		return this.args.frozenValue ?? [];
	}

	get paginatorTotalRecords() {
		const { lazy } = this.args;
		if (lazy) return this.totalRecords;
		return this.processedData.length;
	}

	get showPaginatorTop() {
		const pos = this.args.paginatorPosition ?? "top";
		return this.args.paginator && (pos === "top" || pos === "both");
	}

	get showPaginatorBottom() {
		const pos = this.args.paginatorPosition ?? "bottom";
		return this.args.paginator && (pos === "bottom" || pos === "both");
	}

	// ─── View mode (table / detailed / card) ──────────────────────────────────
	get viewMode() {
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
		return this.orderedColumns.filter(
			(col) => col.field && !col.selectionMode && !col.expander && !col.rowReorder && !col.rowEditor
		);
	}

	@action
	getCellValue(row, col) {
		return getFieldValue(row, col.field);
	}

	// ─── Selection helpers ────────────────────────────────────────────────────
	get allSelected() {
		const { selection, dataKey } = this.args;
		if (!Array.isArray(selection) || !selection.length) return false;
		return this.pagedData.every((row) => {
			if (!dataKey) return selection.includes(row);
			const rk = String(row[dataKey]);
			return selection.some((s) => String(s[dataKey]) === rk);
		});
	}

	get someSelected() {
		const { selection, dataKey } = this.args;
		if (!Array.isArray(selection) || !selection.length) return false;
		return (
			!this.allSelected &&
			this.pagedData.some((row) => {
				if (!dataKey) return selection.includes(row);
				const rk = String(row[dataKey]);
				return selection.some((s) => String(s[dataKey]) === rk);
			})
		);
	}

	// ─── Sort actions ─────────────────────────────────────────────────────────
	@action
	handleSort(field) {
		const { lazy, removableSort } = this.args;

		if (this.sortMode === "multiple") {
			const meta = [...(this.multiSortMeta ?? [])];
			const idx = meta.findIndex((m) => m.field === field);
			if (idx >= 0) {
				if (meta[idx].order === 1) {
					meta[idx] = { field, order: -1 };
				} else if (removableSort) {
					meta.splice(idx, 1);
				} else {
					meta[idx] = { field, order: 1 };
				}
			} else {
				meta.push({ field, order: 1 });
			}
			this._multiSortMeta = meta;
			if (lazy) this.args.onSort?.({ multiSortMeta: meta });
		} else {
			let order;
			if (this.sortField === field) {
				if (this.sortOrder === 1) order = -1;
				else if (removableSort) {
					this._sortField = null;
					this._sortOrder = 1;
					if (lazy) this.args.onSort?.({ field: null, order: null });
					return;
				} else order = 1;
			} else {
				order = 1;
			}
			this._sortField = field;
			this._sortOrder = order;
			this._first = 0;
			if (lazy) this.args.onSort?.({ field, order });
		}
	}

	// ─── Filter actions ───────────────────────────────────────────────────────
	@action
	handleFilterChange(field, value, matchMode = "contains") {
		const updated = { ...this.filters, [field]: { value, matchMode } };
		this._filters = updated;
		this._first = 0;
		if (this.args.lazy) this.args.onFilter?.({ filters: updated });
	}

	@action
	handleFilterApply(field, meta) {
		const updated = { ...this.filters, [field]: meta };
		this._filters = updated;
		this._first = 0;
		this.filterOverlayColumn = null;
		if (this.args.lazy) this.args.onFilter?.({ filters: updated });
	}

	@action
	handleFilterClear(field) {
		const updated = { ...this.filters };
		delete updated[field];
		this._filters = updated;
		this._first = 0;
		this.filterOverlayColumn = null;
		if (this.args.lazy) this.args.onFilter?.({ filters: updated });
	}

	get hasFilterableColumns() {
		return this.allColumns.some((c) => c.filter);
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
		const { showGlobalFilter, sortOptions, showManageColumns, showToggleViews } = this.args;
		return (
			!!showGlobalFilter ||
			sortOptions?.length > 0 ||
			this.hasFilterGroups ||
			(showManageColumns && this.orderedColumns.length > 1) ||
			!!showToggleViews
		);
	}

	get filterAccordionModel() {
		return this.filterGroups.map((g) => ({ header: g.heading ?? g.key }));
	}

	get filterPaneSelectionForKey() {
		return (key) => {
			const arr = this._filterPaneSelections[key];
			return Array.isArray(arr) ? arr : [];
		};
	}

	@action
	getFilterGroupAt(index) {
		return this.filterGroups[index] ?? null;
	}

	@action
	isFilterPaneOptionChecked(groupKey, optionValue) {
		const arr = this._filterPaneSelections[groupKey];
		return Array.isArray(arr) && arr.includes(optionValue);
	}

	get showClearFiltersBar() {
		const fd = this.args.filterDisplay;
		const hasColumnFilters = (fd === "menu" || fd === "row") && this.hasFilterableColumns;
		return (hasColumnFilters || this.args.showGlobalFilter) && this.hasActiveFilters;
	}

	@action
	handleGlobalFilterInput(event) {
		const value = event?.target?.value ?? "";
		if (value) {
			const updated = { ...this.filters, global: { value, matchMode: "contains" } };
			this._filters = updated;
			this._first = 0;
			if (this.args.lazy) this.args.onFilter?.({ filters: updated });
		} else {
			const updated = { ...this.filters };
			delete updated.global;
			this._filters = updated;
			this._first = 0;
			if (this.args.lazy) this.args.onFilter?.({ filters: updated });
		}
	}

	@action
	handleClearAllFilters() {
		this._filters = {};
		this._first = 0;
		this.filterOverlayColumn = null;
		if (this.args.lazy) this.args.onFilter?.({ filters: {} });
	}

	@action
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
			this.filterOverlayPosition = { top: 0, left: 0 };
		}
		this.filterOverlayColumn = col;
	}

	@action
	closeFilterOverlay() {
		this.filterOverlayColumn = null;
	}

	@action
	handleSortByChange(sortByString) {
		this._sortByString = sortByString;
		this.args.onSortByChange?.(sortByString);
		this.closeSortPopover();
	}

	@action
	openSortPopover(event) {
		const trigger = event?.currentTarget;
		this.sortPopoverTriggerElement = trigger ?? null;
		this.showSortPopover = true;
	}

	@action
	closeSortPopover() {
		this.showSortPopover = false;
		this.sortPopoverTriggerElement = null;
		this.sortPopoverPosition = null;
	}

	@action
	openFilterPane() {
		const sel = {};
		this.filterGroups.forEach((g) => {
			const key = g.key;
			const current = this.filters?.[key];
			const val = current?.value;
			sel[key] = Array.isArray(val) ? [...val] : val != null && val !== "" ? [val] : [];
		});
		this._filterPaneSelections = sel;
		this.filterPaneOpen = true;
	}

	@action
	closeFilterPane() {
		this.filterPaneOpen = false;
	}

	@action
	applyFilterPane() {
		const updated = { ...this.filters };
		Object.keys(this._filterPaneSelections).forEach((key) => {
			const arr = this._filterPaneSelections[key];
			if (Array.isArray(arr) && arr.length > 0) {
				updated[key] = { value: arr, matchMode: "in" };
			} else {
				delete updated[key];
			}
		});
		this._filters = updated;
		this._first = 0;
		this.filterPaneOpen = false;
		if (this.args.lazy) this.args.onFilter?.({ filters: updated });
		this.args.onFilterApply?.(this._filterPaneSelections);
	}

	@action
	updateFilterPaneSelection(groupKey, optionValue, checked) {
		const arr = this._filterPaneSelections[groupKey] ?? [];
		let next;
		if (checked) {
			next = arr.includes(optionValue) ? arr : [...arr, optionValue];
		} else {
			next = arr.filter((v) => v !== optionValue);
		}
		this._filterPaneSelections = {
			...this._filterPaneSelections,
			[groupKey]: next
		};
	}

	get filterOverlayPortalTarget() {
		return typeof document !== "undefined" ? document.body : null;
	}

	get filterOverlayWrapperStyle() {
		const p = this.filterOverlayPosition;
		if (p == null || typeof p.top !== "number" || typeof p.left !== "number") return undefined;
		return `position: absolute; top: ${p.top}px; left: ${p.left}px; z-index: 1000;`;
	}

	// ─── Pagination actions ───────────────────────────────────────────────────
	@action
	handlePageChange(event) {
		this._first = event.first;
		this._rows = event.rows;
		this.args.onPage?.(event);
	}

	// ─── Selection actions ─────────────────────────────────────────────────────
	@action
	handleSelectionChange(selection) {
		this.args.onSelectionChange?.(selection);
	}

	@action
	handleHeaderCheckboxChange(checked) {
		const { onSelectionChange, dataKey } = this.args;
		if (checked) {
			onSelectionChange?.([...this.pagedData]);
		} else {
			onSelectionChange?.([]);
		}
	}

	// ─── Row expansion actions ────────────────────────────────────────────────
	@action
	handleRowToggle({ data }) {
		this.args.onRowToggle?.({ data });
	}

	// ─── Editing actions ──────────────────────────────────────────────────────
	@action
	handleRowEditInit({ row, originalEvent }) {
		if (this.args.onRowEditInit) {
			this.args.onRowEditInit({ row, originalEvent });
		} else {
			this._editingRows = [...this._editingRows, row];
		}
	}

	@action
	handleRowEditSave({ row, originalEvent }) {
		if (this.args.onRowEditSave) {
			this.args.onRowEditSave({ row, originalEvent });
		} else {
			this._editingRows = this._editingRows.filter((r) => r !== row);
		}
	}

	@action
	handleRowEditCancel({ row, originalEvent }) {
		if (this.args.onRowEditCancel) {
			this.args.onRowEditCancel({ row, originalEvent });
		} else {
			this._editingRows = this._editingRows.filter((r) => r !== row);
		}
	}

	@action
	handleCellEditInit({ row, field, originalEvent }) {
		this._editingCell = { row, field };
		this.args.onCellEditInit?.({ row, field, originalEvent });
	}

	@action
	handleCellEditComplete({ row, field, value }) {
		this._editingCell = null;
		this.args.onCellEditComplete?.({ row, field, value });
	}

	// ─── Column resize actions ────────────────────────────────────────────────
	@action
	handleColumnResizeStart(event, colIndex) {
		this._resizingColIndex = colIndex;
		this._resizeStartX = event.clientX;
		const th = event.target?.closest?.("th");
		this._resizeStartWidth = th?.offsetWidth ?? 100;
		document.addEventListener("mousemove", this._onResizeMove);
		document.addEventListener("mouseup", this._onResizeEnd);
		event.preventDefault();
	}

	_onResizeMove = (event) => {
		if (this._resizingColIndex == null) return;
		const delta = event.clientX - this._resizeStartX;
		const newWidth = Math.max(50, this._resizeStartWidth + delta);
		const widths = { ...this._columnWidths, [this._resizingColIndex]: newWidth };
		this._columnWidths = widths;
	};

	_onResizeEnd = () => {
		document.removeEventListener("mousemove", this._onResizeMove);
		document.removeEventListener("mouseup", this._onResizeEnd);
		this._resizingColIndex = null;
	};

	// ─── Manage columns ────────────────────────────────────────────────────────
	@action
	openManageColumns(event) {
		this.manageColumnsTriggerElement = event?.currentTarget ?? null;
		this.showManagePanel = true;
	}

	@action
	closeManageColumns() {
		this.showManagePanel = false;
		this.manageColumnsTriggerElement = null;
	}

	@action
	handleManageColumnsApply({ columns }) {
		const dataFields = new Set(
			columns
				.filter((c) => c.field && !c.selectionMode && !c.expander && !c.rowReorder && !c.rowEditor)
				.map((c) => c.field)
		);
		this._visibleColumnFields = dataFields;
		this._columnOrder = columns;
		this.showManagePanel = false;
		this.manageColumnsTriggerElement = null;
	}

	@action
	handleManageColumnsReset() {
		this._visibleColumnFields = null;
		this._columnOrder = null;
	}

	// ─── Row reorder ──────────────────────────────────────────────────────────
	@action
	handleRowReorder({ dragIndex, dropIndex }) {
		const reordered = reorderArray(this.pagedData, dragIndex, dropIndex);
		this.args.onRowReorder?.({ dragIndex, dropIndex, value: reordered });
	}

	// ─── Context menu ──────────────────────────────────────────────────────────
	@action
	handleContextMenu({ row, index, originalEvent }) {
		this.contextMenuData = { row, index };
		this.args.onContextMenu?.({ row, index, originalEvent });
	}

	// ─── View toggle actions ──────────────────────────────────────────────────
	@action
	setViewMode(mode) {
		this._viewMode = mode;
	}

	// ─── Row events ────────────────────────────────────────────────────────────
	@action
	handleRowClick(event) {
		this.args.onRowClick?.(event);
	}

	@action
	handleRowDoubleClick(event) {
		this.args.onRowDoubleClick?.(event);
	}

	// ─── CSV export ────────────────────────────────────────────────────────────
	exportCSV(filename) {
		exportCSV(this.orderedColumns, this.processedData, filename);
	}

	<template>
		<div class={{this.rootClasses}} ...attributes>
			{{! Custom table header area }}
			{{#if (has-block "header")}}
				<div class="datatable-header-toolbar">
					{{yield to="header"}}
				</div>
			{{/if}}

			{{! Unified toolbar (filter menu): left = slots + search, right = slots + button group (Filter, Sort, Columns) + view toggle }}
			{{#if
				(or
					this.showToolbar
					(has-block "preLeftMenu")
					(has-block "postLeftMenu")
					(has-block "preRightMenu")
					(has-block "postRightMenu")
				)
			}}
				<div class="datatable-header-toolbar datatable-toolbar flex justify-between">
					<div class="datatable-toolbar-left">
						{{yield to="preLeftMenu"}}
						{{#if @showGlobalFilter}}
							<div class="datatable-globalfilter" role="search">
								<UlxIconInput
									@value={{this.globalFilterValue}}
									@iconName="search-icon"
									@iconType="font"
									@iconClass="bs-icons1"
									@iconPosition="left"
									@iconSize="s14"
									@onInput={{this.handleGlobalFilterInput}}
									placeholder={{or
										@globalFilterPlaceholder
										(t "msg.table.global.filter.placeholder")
									}}
									aria-label={{t "aria.table.global.filter"}}
								/>
							</div>
						{{/if}}
						{{yield to="postLeftMenu"}}
					</div>
					<div class="datatable-toolbar-right flex gap-4">
						{{yield to="preRightMenu"}}
						{{#if
							(or
								this.hasFilterGroups
								(and @sortOptions (gt @sortOptions.length 0))
								(and @showManageColumns (gt this.orderedColumns.length 1))
								@showToggleViews
							)
						}}
							<UlxButtonGroup @size="m-size" @customClass="uls-inline-popup">
								{{#if this.hasFilterGroups}}
									<UlxButton
										@variant="outlined"
										@size="m-size"
										@icon="filter-icon"
										@iconComponentClass="bs-icons1"
										@iconSize="s14"
										aria-label={{t "lbl.filter"}}
										{{on "click" this.openFilterPane}}
									/>
								{{/if}}
								{{#if (and @sortOptions (gt @sortOptions.length 0))}}
									<UlxButton
										@variant="outlined"
										@size="m-size"
										@icon="sort-icon"
										@iconComponentClass="bs-icons1"
										@iconSize="s14"
										aria-label={{t "lbl.sort"}}
										aria-expanded={{this.showSortPopover}}
										{{on "click" this.openSortPopover}}
									/>
								{{/if}}
								{{#if (and @showManageColumns (gt this.orderedColumns.length 1))}}
									<UlxButton
										@variant="outlined"
										@size="m-size"
										@icon="columns-icon"
										@iconComponentClass="bs-icons1"
										@iconSize="s14"
										aria-label={{t "lbl.columns"}}
										{{on "click" this.openManageColumns}}
									/>
								{{/if}}
							</UlxButtonGroup>
							{{#if @showToggleViews}}
								<UlxButtonGroup @size="m-size">
									<UlxButton
										@variant="outlined"
										@size="m-size"
										@onClick={{fn this.setViewMode "table"}}
										aria-pressed={{eq this.viewMode "table"}}
										aria-label="Table view"
									>
										<UlxIcon
											@componentClass="bs-icons1"
											@type="font"
											@iconName="grid-icon-master"
											@size="s16"
											aria-hidden="true"
										/>
									</UlxButton>
									<UlxButton
										@variant="outlined"
										@size="m-size"
										@onClick={{fn this.setViewMode "detailed"}}
										aria-pressed={{eq this.viewMode "detailed"}}
										aria-label="Detailed view"
									>
										<UlxIcon
											@componentClass="bs-icons1"
											@type="font"
											@iconName="list-view-icon"
											@size="s16"
											aria-hidden="true"
										/>
									</UlxButton>
									<UlxButton
										@variant="outlined"
										@size="m-size"
										@onClick={{fn this.setViewMode "card"}}
										aria-pressed={{eq this.viewMode "card"}}
										aria-label="Card view"
									>
										<UlxIcon
											@componentClass="bs-icons1"
											@type="font"
											@iconName="card-view-icon"
											@size="s16"
											aria-hidden="true"
										/>
									</UlxButton>
								</UlxButtonGroup>
							{{/if}}
						{{/if}}
						{{yield to="postRightMenu"}}
					</div>
				</div>
			{{/if}}

			{{! Common clear filters bar (menu or row filter when any filter is active) }}
			{{#if this.showClearFiltersBar}}
				<div class="datatable-clear-filters-bar">
					<UlxButton
						@variant="text"
						@label={{t "lbl.clear.filters"}}
						@onClick={{this.handleClearAllFilters}}
						aria-label={{t "lbl.clear.filters"}}
					/>
				</div>
			{{/if}}

			{{! Top paginator }}
			{{#if this.showPaginatorTop}}
				<div class="datatable-paginator">
					<UlxPaginator
						@totalRecords={{this.paginatorTotalRecords}}
						@rows={{this.rows}}
						@first={{this.first}}
						@rowsPerPageOptions={{@rowsPerPageOptions}}
						@template={{@paginatorTemplate}}
						@currentPageReportTemplate={{@currentPageReportTemplate}}
						@onPageChange={{this.handlePageChange}}
					>
						<:left>{{yield to="paginatorLeft"}}</:left>
						<:right>{{yield to="paginatorRight"}}</:right>
					</UlxPaginator>
				</div>
			{{/if}}

			{{! Detailed view (list view — one full-width row per item; uses ulx-grid from grid.less) }}
			{{#if (and (eq this.viewMode "detailed") (has-block "detailed"))}}
				<div class="datatable-wrapper {{if @scrollable 'scrollable'}}" style={{this.wrapperStyle}}>
					<div class="ulx-dataview">
						{{#each this.pagedData as |row|}}
							<div class="ulx-dataview-list-item">{{yield row to="detailed"}}</div>
						{{/each}}
					</div>
					{{#if (and (not @loading) (not this.pagedData.length))}}
						<div class="datatable-empty-message">
							{{#if (has-block "emptyMessage")}}{{yield
									to="emptyMessage"
								}}{{else}}{{@emptyMessage}}{{/if}}
						</div>
					{{/if}}
				</div>
			{{else if (and (eq this.viewMode "card") (has-block "card"))}}
				{{! Card view (grid; column count from @cardViewColumns — uses ulx-grid from grid.less) }}
				<div class="datatable-wrapper {{if @scrollable 'scrollable'}}" style={{this.wrapperStyle}}>
					<div class="ulx-grid gap-4 col-{{this.cardViewColumns}}">
						{{#each this.pagedData as |row|}}
							<UlxCard>{{yield row to="card"}}</UlxCard>
						{{/each}}
					</div>
					{{#if (and (not @loading) (not this.pagedData.length))}}
						<div class="datatable-empty-message">
							{{#if (has-block "emptyMessage")}}{{yield
									to="emptyMessage"
								}}{{else}}{{@emptyMessage}}{{/if}}
						</div>
					{{/if}}
				</div>
			{{else if this.isVertical}}
				{{! Vertical (transposed) table — rows = properties, columns = data records }}
				<div class="datatable-wrapper {{if @scrollable 'scrollable'}}" style={{this.wrapperStyle}}>
					<table class="{{this.tableClass}} datatable-vertical" role="grid">
						{{#if @verticalLabelField}}
							<thead>
								<tr>
									<th
										class="datatable-vertical-corner"
										scope="col"
										aria-label={{t "aria.table.vertical.corner"}}
									></th>
									{{#each this.pagedData as |row|}}
										<th class="datatable-vertical-col-header" scope="col">
											{{getFieldValue row @verticalLabelField}}
										</th>
									{{/each}}
								</tr>
							</thead>
						{{/if}}
						<tbody>
							{{#each this.verticalRows as |col|}}
								<tr class="datatable-vertical-row">
									<th
										class="datatable-column-header-cell datatable-vertical-row-header"
										scope="row"
									>
										{{col.header}}
									</th>
									{{#each this.pagedData as |row rowIdx|}}
										<td class="datatable-cell">
											{{#if col.body}}
												<col.body
													@row={{row}}
													@value={{this.getCellValue row col}}
													@index={{rowIdx}}
												/>
											{{else}}
												{{this.getCellValue row col}}
											{{/if}}
										</td>
									{{/each}}
								</tr>
							{{/each}}
						</tbody>
					</table>
					{{#if (and (not @loading) (not this.pagedData.length))}}
						<div class="datatable-empty-message">
							{{#if (has-block "emptyMessage")}}{{yield
									to="emptyMessage"
								}}{{else}}{{@emptyMessage}}{{/if}}
						</div>
					{{/if}}
				</div>
			{{else}}
				{{! Table wrapper }}
				<div class="datatable-wrapper {{if @scrollable 'scrollable'}}" style={{this.wrapperStyle}}>
					<table class={{this.tableClass}} role="grid">
						<TableHeader
							@columns={{this.orderedColumns}}
							@sortField={{this.sortField}}
							@sortOrder={{this.sortOrder}}
							@sortMode={{this.sortMode}}
							@multiSortMeta={{this.multiSortMeta}}
							@removableSort={{@removableSort}}
							@resizableColumns={{@resizableColumns}}
							@selectionMode={{@selectionMode}}
							@allSelected={{this.allSelected}}
							@someSelected={{this.someSelected}}
							@filterDisplay={{@filterDisplay}}
							@filters={{this.filters}}
							@showManageColumns={{@showManageColumns}}
							@hasOptionCell={{has-block "optionCell"}}
							@onSort={{this.handleSort}}
							@onHeaderCheckboxChange={{this.handleHeaderCheckboxChange}}
							@onFilterChange={{this.handleFilterChange}}
							@onFilterMenuOpen={{this.handleFilterMenuOpen}}
							@onColumnResizeStart={{this.handleColumnResizeStart}}
							@onManageColumns={{this.openManageColumns}}
						/>

						{{! Frozen rows body }}
						{{#if this.frozenData.length}}
							<TableBody
								@rows={{this.frozenData}}
								@columns={{this.orderedColumns}}
								@dataKey={{@dataKey}}
								@selectionMode={{@selectionMode}}
								@selection={{@selection}}
								@expandedRows={{@expandedRows}}
								@editMode={{@editMode}}
								@editingRows={{this.editingRows}}
								@editingCell={{this.editingCell}}
								@rowClassName={{@rowClassName}}
								@showManageColumns={{@showManageColumns}}
								@hasOptionCell={{has-block "optionCell"}}
								@emptyMessage={{@emptyMessage}}
								@onSelectionChange={{this.handleSelectionChange}}
								@onRowToggle={{this.handleRowToggle}}
								@onRowEditInit={{this.handleRowEditInit}}
								@onRowEditSave={{this.handleRowEditSave}}
								@onRowEditCancel={{this.handleRowEditCancel}}
								@onCellEditInit={{this.handleCellEditInit}}
								@onCellEditComplete={{this.handleCellEditComplete}}
								@onRowReorder={{this.handleRowReorder}}
								@onRowClick={{this.handleRowClick}}
								@onRowDoubleClick={{this.handleRowDoubleClick}}
								@onContextMenu={{this.handleContextMenu}}
							>
								<:rowExpansion as |row|>{{yield row to="rowExpansion"}}</:rowExpansion>
								<:optionCell as |row|>{{yield row to="optionCell"}}</:optionCell>
								<:emptyMessage>
									{{#if (has-block "customEmptyState")}}{{yield to="customEmptyState"}}
									{{else if (has-block "emptyMessage")}}{{yield to="emptyMessage"}}
									{{/if}}
								</:emptyMessage>
							</TableBody>
						{{/if}}

						{{! Main data body }}
						<TableBody
							@rows={{this.pagedData}}
							@columns={{this.orderedColumns}}
							@dataKey={{@dataKey}}
							@loading={{@loading}}
							@selectionMode={{@selectionMode}}
							@selection={{@selection}}
							@expandedRows={{@expandedRows}}
							@editMode={{@editMode}}
							@editingRows={{this.editingRows}}
							@editingCell={{this.editingCell}}
							@rowClassName={{@rowClassName}}
							@showManageColumns={{@showManageColumns}}
							@hasOptionCell={{has-block "optionCell"}}
							@emptyMessage={{@emptyMessage}}
							@onSelectionChange={{this.handleSelectionChange}}
							@onRowToggle={{this.handleRowToggle}}
							@onRowEditInit={{this.handleRowEditInit}}
							@onRowEditSave={{this.handleRowEditSave}}
							@onRowEditCancel={{this.handleRowEditCancel}}
							@onCellEditInit={{this.handleCellEditInit}}
							@onCellEditComplete={{this.handleCellEditComplete}}
							@onRowReorder={{this.handleRowReorder}}
							@onRowClick={{this.handleRowClick}}
							@onRowDoubleClick={{this.handleRowDoubleClick}}
							@onContextMenu={{this.handleContextMenu}}
						>
							<:rowExpansion as |row|>{{yield row to="rowExpansion"}}</:rowExpansion>
							<:optionCell as |row|>{{yield row to="optionCell"}}</:optionCell>
							<:emptyMessage>
								{{#if (has-block "customEmptyState")}}{{yield to="customEmptyState"}}
								{{else if (has-block "emptyMessage")}}{{yield to="emptyMessage"}}
								{{/if}}
							</:emptyMessage>
						</TableBody>

						<TableFooter
							@columns={{this.orderedColumns}}
							@showManageColumns={{@showManageColumns}}
							@hasOptionCell={{has-block "optionCell"}}
						/>
					</table>
				</div>
			{{/if}}

			{{! Loading overlay }}
			{{#if @loading}}
				<div class="datatable-loading-overlay" aria-live="polite" aria-label="Loading data">
					{{#if (has-block "loadingOverlay")}}
						{{yield to="loadingOverlay"}}
					{{else}}
						<UlxProgressSpinner @size="l-size" />
					{{/if}}
				</div>
			{{/if}}

			{{! Bottom paginator }}
			{{#if this.showPaginatorBottom}}
				<div class="datatable-paginator">
					<UlxPaginator
						@totalRecords={{this.paginatorTotalRecords}}
						@rows={{this.rows}}
						@first={{this.first}}
						@rowsPerPageOptions={{@rowsPerPageOptions}}
						@template={{@paginatorTemplate}}
						@currentPageReportTemplate={{@currentPageReportTemplate}}
						@onPageChange={{this.handlePageChange}}
					>
						<:left>{{yield to="paginatorLeft"}}</:left>
						<:right>{{yield to="paginatorRight"}}</:right>
					</UlxPaginator>
				</div>
			{{/if}}

			{{! Custom table footer area }}
			{{#if (has-block "footer")}}
				<div class="datatable-footer">
					{{yield to="footer"}}
				</div>
			{{/if}}

			{{! Manage columns panel (in UlxPopup, anchored to trigger button) }}
			{{#if (and this.showManagePanel this.manageColumnsTriggerElement)}}
				<UlxPopup
					@visible={{this.showManagePanel}}
					@target={{this.manageColumnsTriggerElement}}
					@position="position-bottom-right"
					@size="m-size"
					@closable={{true}}
					@onHide={{this.closeManageColumns}}
					@ariaLabel={{t "lbl.manage.columns"}}
				>
					<ManageColumns
						@allColumns={{this.allColumns}}
						@visibleColumns={{this.visibleColumns}}
						@onApply={{this.handleManageColumnsApply}}
						@onClose={{this.closeManageColumns}}
						@onReset={{this.handleManageColumnsReset}}
					/>
				</UlxPopup>
			{{/if}}

			{{! Filter overlay (menu mode) – portaled to body, position: absolute in document like PrimeReact }}
			{{#if (and this.filterOverlayColumn this.filterOverlayPortalTarget)}}
				{{#in-element this.filterOverlayPortalTarget insertBefore=null}}
					<div
						class="ulx-datatable-filter-overlay-wrapper"
						style={{this.filterOverlayWrapperStyle}}
						role="presentation"
					>
						<FilterOverlay
							@column={{this.filterOverlayColumn}}
							@filterMeta={{this.filterMetaFor this.filterOverlayColumn}}
							@onApply={{this.handleFilterApply}}
							@onClear={{this.handleFilterClear}}
							@onClose={{this.closeFilterOverlay}}
						/>
					</div>
				{{/in-element}}
			{{/if}}

			{{! Sort options popover (toolbar sort button) }}
			{{#if (and this.showSortPopover this.sortPopoverTriggerElement)}}
				<UlxPopup
					@visible={{this.showSortPopover}}
					@target={{this.sortPopoverTriggerElement}}
					@position="position-bottom-center"
					@size="xs-size"
					@onHide={{this.closeSortPopover}}
					@ariaLabel={{t "lbl.sort"}}
				>
					<div class="fs-popup p-1">
						<SortOptions
							@sortBy={{this.sortByString}}
							@sortOptions={{@sortOptions}}
							@onChange={{this.handleSortByChange}}
						/>
					</div>
				</UlxPopup>
			{{/if}}

			{{! Filter slide pane (toolbar filter button: UlxAccordion + UlxCheckbox) }}
			{{#if this.hasFilterGroups}}
				<UlxSlidePane
					@visible={{this.filterPaneOpen}}
					@position="right"
					@width="320px"
					@onHide={{this.closeFilterPane}}
				>
					<:head>
						<h2 class="slidepane-title" id="ulx-table-filter-pane-title">
							{{t "lbl.filter"}}
						</h2>
						<UlxButton
							@icon="close-icon-01"
							@iconComponentClass="bs-icons1"
							@variant="text"
							@iconSize="s18"
							aria-label={{t "lbl.close"}}
							{{on "click" this.closeFilterPane}}
						/>
					</:head>
					<:body>
						<UlxAccordion @model={{this.filterAccordionModel}} @multiple={{true}} @size="s-size">
							<:content as |item idx|>
								{{#let (this.getFilterGroupAt idx) as |group|}}
									{{#if group}}
										<div class="ulx-table-filter-pane-group flex flex-col gp2">
											{{#each group.options as |opt|}}
												<UlxCheckbox
													@itemLabel={{opt.label}}
													@checked={{this.isFilterPaneOptionChecked group.key opt.value}}
													@onCheckedChange={{fn this.updateFilterPaneSelection group.key opt.value}}
												/>
											{{/each}}
										</div>
									{{/if}}
								{{/let}}
							</:content>
						</UlxAccordion>
					</:body>
					<:footer>
						<UlxButtonGroup @size="s-size">
							<UlxButton
								@variant="outlined"
								@label={{t "lbl.close"}}
								{{on "click" this.closeFilterPane}}
							/>
							<UlxButton
								@variant="primary"
								@label={{t "lbl.apply.filter"}}
								{{on "click" this.applyFilterPane}}
							/>
						</UlxButtonGroup>
					</:footer>
				</UlxSlidePane>
			{{/if}}
		</div>
	</template>

	@action
	filterMetaFor(col) {
		const field = col?.filterField ?? col?.field;
		return this.filters?.[field];
	}
}
