import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
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
	getFieldValue,
	isSpecialColumn,
	parseSortBy,
	saveTableState,
	loadTableState
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
import UlxSelectButton from "../../elements/ulx-select-button/index.gjs";
import UlxInput from "../../elements/ulx-input/index.gjs";
import UlxIconInput from "../../elements/ulx-icon-input/index.gjs";
import UlxSlidePane from "../ulx-slide-pane/index.gjs";
import UlxPopup from "../ulx-popup/index.gjs";
import UlxAccordion from "../../collections/ulx-accordion/index.gjs";
import UlxCheckbox from "../../elements/ulx-checkbox/index.gjs";
import UlxCheckboxItem from "../../elements/ulx-checkbox/checkbox-item.gjs";
import UlxCard from "../../elements/ulx-card/index.gjs";
import UlxChip from "../../elements/ulx-chip/index.gjs";
import UlxDataView from "../../modules/ulx-data-view/index.gjs";
import UlxEmptyState from "../../elements/ulx-empty-state/index.gjs";
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
 * @param {Array}   columns          - column definition array (see above). Use manageable: false on a
 *                                    column to make it mandatory (always visible, cannot be disabled in manage columns).
 * @param {boolean} [showManageColumns=false] - show manage-columns button (shown even when only one column is enabled)
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
 * @param {string}  [moduleName]            - BSTable-compatible alias for stateKey. When used without
 *                                            stateStorage, state is persisted in localStorage.
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
 * @param {boolean} [showToggleViews=false] - show view toggle when at least one of <:detailed> or <:card> is passed. Buttons shown are derived from named blocks: table always; detailed/card only when block is present.
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
	@service modalStack;

	_restoredStateKey = null;

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
	@tracked manageColumnsRef = null;

	// ─── Filter slide pane (filterGroups) ──────────────────────────────────────
	@tracked filterPaneOpen = false;
	@tracked _filterPaneSelections = {};

	// ─── Filter bubble popup ──────────────────────────────────────────────────
	@tracked activeFilterBubbleField = null;
	@tracked filterBubbleTriggerEl = null;

	// ─── Resize state ────────────────────────────────────────────────────────
	_resizingColField = null;
	_resizeStartX = null;
	_resizeStartWidth = null;

	// ─── Debounce timer ──────────────────────────────────────────────────────
	_globalFilterTimer = null;

	// ─── Editing (uncontrolled fallback) ─────────────────────────────────────
	@tracked _editingRows = [];
	@tracked _editingCell = null;

	// ─── View toggle (table / card) ──────────────────────────────────────────
	@tracked _viewMode = null;

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
		const { stateStorage, moduleName, stateKey } = this.args;
		if (stateStorage) return stateStorage;
		return moduleName && !stateKey ? "local" : "session";
	}

	restorePersistedState() {
		const key = this.persistenceKey;
		if (!key || this._restoredStateKey === key) return;

		this._restoredStateKey = key;
		const persistedState = loadTableState(key, this.persistenceStorage) ?? {};
		const columnMap = new Map(
			this.allColumns.filter((column) => column?.field).map((column) => [column.field, column])
		);

		this.args.sortField === undefined &&
			("sortField" in persistedState || "sortOrder" in persistedState) &&
			(this._sortField = persistedState.sortField ?? null);
		this.args.sortOrder === undefined &&
			typeof persistedState.sortOrder === "number" &&
			(this._sortOrder = persistedState.sortOrder);
		this.args.multiSortMeta === undefined &&
			Array.isArray(persistedState.multiSortMeta) &&
			(this._multiSortMeta = persistedState.multiSortMeta);
		this.args.sortBy === undefined &&
			typeof persistedState.sortBy === "string" &&
			(this._sortByString = persistedState.sortBy);
		this.args.filters === undefined &&
			persistedState.filters &&
			typeof persistedState.filters === "object" &&
			(this._filters = persistedState.filters);
		this.args.first === undefined &&
			typeof persistedState.first === "number" &&
			(this._first = persistedState.first);
		this.args.rows === undefined &&
			typeof persistedState.rows === "number" &&
			(this._rows = persistedState.rows);
		typeof persistedState.viewMode === "string" && (this._viewMode = persistedState.viewMode);
		Array.isArray(persistedState.visibleColumnFields) &&
			(this._visibleColumnFields = new Set(persistedState.visibleColumnFields));
		Array.isArray(persistedState.columnOrder) &&
			(this._columnOrder = persistedState.columnOrder
				.map((field) => columnMap.get(field))
				.filter(Boolean));
		persistedState.columnWidths &&
			typeof persistedState.columnWidths === "object" &&
			(this._columnWidths = persistedState.columnWidths);
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
			columnOrder: Array.isArray(this._columnOrder)
				? this._columnOrder.map((column) => column?.field).filter(Boolean)
				: null,
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
		const { stripedRows, showGridlines } = this.args;
		const parts = ["datatable-table"];
		stripedRows && parts.push("striped");
		showGridlines && parts.push("gridlines");
		return parts.filter(Boolean).join(" ");
	}

	get tableStyle() {
		return this.args.resizableColumns ? "table-layout: fixed;" : undefined;
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
		return this.allColumns.filter((c) => {
			if (isSpecialColumn(c)) return true;
			if (c.manageable === false) return true;
			return fields.has(c.field);
		});
	}

	get orderedColumns() {
		this.restorePersistedState();
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
				.filter((c) => c.field && !isSpecialColumn(c))
				.map((c) => c.filterField ?? c.field)
		);
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

	get paginatorPosition() {
		return this.args.paginatorPosition ?? "bottom";
	}

	get showPaginatorTop() {
		return (
			this.args.paginator && (this.paginatorPosition === "top" || this.paginatorPosition === "both")
		);
	}

	get showPaginatorBottom() {
		return (
			this.args.paginator &&
			(this.paginatorPosition === "bottom" || this.paginatorPosition === "both")
		);
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
		return this.orderedColumns.filter((col) => col.field && !isSpecialColumn(col));
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
		const { removableSort } = this.args;

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
			this._first = 0;
			this.persistState();
			this.args.onSort?.({ multiSortMeta: meta });
		} else {
			let order;
			if (this.sortField === field) {
				if (this.sortOrder === 1) order = -1;
				else if (removableSort) {
					this._sortField = null;
					this._sortOrder = 1;
					this._sortByString = "";
					this._first = 0;
					this.persistState();
					this.args.onSort?.({ field: null, order: null });
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
			this.args.onSort?.({ field, order });
			this.args.sortOptions?.length && this.args.onSortByChange?.(sortByString);
		}
	}

	// ─── Filter actions ───────────────────────────────────────────────────────
	@action
	handleFilterChange(field, value, matchMode = "contains") {
		const updated = { ...this.filters };
		const isEmpty = value == null || value === "" || (Array.isArray(value) && value.length === 0);
		if (isEmpty) {
			delete updated[field];
		} else {
			updated[field] = { value, matchMode };
		}
		this._filters = updated;
		this._first = 0;
		this.persistState();
		if (this.args.lazy) this.args.onFilter?.({ filters: updated });
	}

	@action
	handleFilterApply(field, meta) {
		const updated = { ...this.filters, [field]: meta };
		this._filters = updated;
		this._first = 0;
		this.filterOverlayColumn = null;
		this.persistState();
		if (this.args.lazy) this.args.onFilter?.({ filters: updated });
	}

	@action
	handleFilterClear(field) {
		const updated = { ...this.filters };
		delete updated[field];
		this._filters = updated;
		this._first = 0;
		this.filterOverlayColumn = null;
		this.persistState();
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
			!!showManageColumns ||
			!!showToggleViews
		);
	}

	get filterAccordionModel() {
		return this.filterGroups.map((g) => ({ header: g.heading ?? g.key }));
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
			const labels = values.map(
				(v) => group.options?.find((o) => o.value === v)?.label ?? String(v)
			);
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
			const constraints = meta.constraints ?? [{ value: meta.value, matchMode: meta.matchMode }];
			const ruleCount = constraints.length;
			const firstValue = constraints[0]?.value;
			const displayValue =
				ruleCount > 1
					? `${ruleCount} rules`
					: Array.isArray(firstValue)
						? firstValue.join(", ")
						: String(firstValue ?? "");
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
		return this.activeFilterBubbles.find((b) => b.field === this.activeFilterBubbleField) ?? null;
	}

	@action
	handleGlobalFilterInput(event) {
		const value = event?.target?.value ?? "";
		this._globalFilterTimer && clearTimeout(this._globalFilterTimer);
		this._globalFilterTimer = setTimeout(() => {
			this._applyGlobalFilter(value);
		}, 300);
	}

	_applyGlobalFilter = (value) => {
		const updated = { ...this.filters };
		if (value) {
			updated.global = { value, matchMode: "contains" };
		} else {
			delete updated.global;
		}
		this._filters = updated;
		this._first = 0;
		this.persistState();
		if (this.args.lazy) this.args.onFilter?.({ filters: updated });
	};

	@action
	handleClearAllFilters() {
		this._filters = {};
		this._first = 0;
		this.filterOverlayColumn = null;
		this.persistState();
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

	@action
	closeFilterBubble() {
		this.activeFilterBubbleField = null;
		this.filterBubbleTriggerEl = null;
	}

	@action
	deleteFilterFromBubble(field) {
		const updated = { ...this.filters };
		delete updated[field];
		this._filters = updated;
		this._first = 0;
		this.filterOverlayColumn = null;
		this.closeFilterBubble();
		this.persistState();
		if (this.args.lazy) this.args.onFilter?.({ filters: updated });
	}

	@action
	applyFilterFromBubble(field, meta) {
		const updated = { ...this.filters, [field]: meta };
		this._filters = updated;
		this._first = 0;
		this.closeFilterBubble();
		this.persistState();
		if (this.args.lazy) this.args.onFilter?.({ filters: updated });
	}

	@action
	applyPaneFilterFromBubble(field) {
		const arr = this._filterPaneSelections[field];
		const updated = { ...this.filters };
		if (Array.isArray(arr) && arr.length > 0) {
			updated[field] = { value: arr, matchMode: "in" };
		} else {
			delete updated[field];
		}
		this._filters = updated;
		this._first = 0;
		this.closeFilterBubble();
		this.persistState();
		if (this.args.lazy) this.args.onFilter?.({ filters: updated });
	}

	@action
	handleSortByChange(sortByString) {
		this._sortByString = sortByString;
		this.persistState();
		this.args.onSortByChange?.(sortByString);
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
		this.persistState();
		if (this.args.lazy) this.args.onFilter?.({ filters: updated });
		this.args.onFilterApply?.(this._filterPaneSelections);
	}

	@action
	updateFilterPaneSelection(groupKey, optionValue, checkedOrEvent) {
		const checked =
			typeof checkedOrEvent === "boolean" ? checkedOrEvent : !!checkedOrEvent?.target?.checked;
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

	get filterOverlayField() {
		return this.filterOverlayColumn?.filterField ?? this.filterOverlayColumn?.field ?? null;
	}

	get filterOverlayPortalTarget() {
		return typeof document !== "undefined" ? document.body : null;
	}

	get filterOverlayWrapperStyle() {
		const p = this.filterOverlayPosition;
		if (p == null || typeof p.top !== "number" || typeof p.left !== "number") return undefined;
		const zIndex = this.modalStack?.topModal
			? this.modalStack.getZIndex(this.modalStack.topModal) + 20
			: 1100;
		return `position: absolute; top: ${p.top}px; left: ${p.left}px; z-index: ${zIndex};`;
	}

	// ─── Pagination actions ───────────────────────────────────────────────────
	@action
	handlePageChange(event) {
		this._first = event.first;
		this._rows = event.rows;
		this.persistState();
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
		const col = this.orderedColumns[colIndex];
		this._resizingColField = col?.field ?? colIndex;
		this._resizeStartX = event.clientX;
		const th = event.target?.closest?.("th");
		this._resizeStartWidth = th?.offsetWidth ?? 100;
		document.addEventListener("mousemove", this._onResizeMove);
		document.addEventListener("mouseup", this._onResizeEnd);
		event.preventDefault();
	}

	_onResizeMove = (event) => {
		if (this._resizingColField == null) return;
		const delta = event.clientX - this._resizeStartX;
		const newWidth = Math.max(50, this._resizeStartWidth + delta);
		const widths = { ...this._columnWidths, [this._resizingColField]: newWidth };
		this._columnWidths = widths;
	};

	_onResizeEnd = () => {
		document.removeEventListener("mousemove", this._onResizeMove);
		document.removeEventListener("mouseup", this._onResizeEnd);
		this._resizingColField = null;
		this.persistState();
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
		this.manageColumnsRef = null;
	}

	@action
	setManageColumnsRef(ref) {
		this.manageColumnsRef = ref;
	}

	@action
	handleManageColumnsApply({ columns }) {
		const dataFields = new Set(
			columns.filter((c) => c.field && !isSpecialColumn(c)).map((c) => c.field)
		);
		this._visibleColumnFields = dataFields;
		this._columnOrder = columns;
		this.showManagePanel = false;
		this.manageColumnsTriggerElement = null;
		this.persistState();
	}

	@action
	handleManageColumnsReset() {
		this._visibleColumnFields = null;
		this._columnOrder = null;
		this.persistState();
	}

	@action
	invokeManageColumnsApply() {
		this.manageColumnsRef?.handleApply();
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
		this.args.onContextMenu?.({ row, index, originalEvent });
	}

	// ─── View toggle actions ──────────────────────────────────────────────────
	@action
	setViewMode(mode) {
		this._viewMode = mode;
		this.persistState();
	}

	getViewToggleOptions(hasDetailed, hasCard) {
		const opts = [{ value: "table", label: t("aria.table.view.table"), icon: "grid-icon-master" }];
		hasDetailed &&
			opts.push({
				value: "detailed",
				label: t("aria.table.view.detailed"),
				icon: "list-view-icon"
			});
		hasCard &&
			opts.push({
				value: "card",
				label: t("aria.table.view.card"),
				icon: "card-view-icon"
			});
		return opts;
	}

	effectiveViewModeForOptions(currentViewMode, options) {
		const values = Array.isArray(options) ? options.map((o) => o?.value) : [];
		return values.includes(currentViewMode) ? currentViewMode : (options?.[0]?.value ?? "table");
	}

	@action
	handleViewToggleChange(value) {
		this.setViewMode(value);
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

	@action
	filterMetaFor(col) {
		const field = col?.filterField ?? col?.field;
		return this.filters?.[field];
	}

	<template>
		<div class={{this.rootClasses}} ...attributes aria-busy={{if @loading "true"}}>
			{{! Custom table header area }}
			{{#if (has-block "header")}}
				<div class="header-toolbar">
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
				<div class="header-toolbar datatable-toolbar">
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
								@showManageColumns
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
										aria-label={{t "lbl.sort"}}
										aria-expanded={{this.showSortPopover}}
										{{on "click" this.openSortPopover}}
									/>
								{{/if}}
								{{#if @showManageColumns}}
									<UlxButton
										@variant="outlined"
										@size="m-size"
										@icon="columns-icon"
										@iconComponentClass="bs-icons1"
										aria-label={{t "lbl.columns"}}
										{{on "click" this.openManageColumns}}
									/>
								{{/if}}
							</UlxButtonGroup>
							{{#if @showToggleViews}}
								{{#if (or (has-block "detailed") (has-block "card"))}}
									{{#let (has-block "detailed") (has-block "card") as |hasDetailed hasCard|}}
										{{#let (this.getViewToggleOptions hasDetailed hasCard) as |viewOpts|}}
											<UlxSelectButton
												@options={{viewOpts}}
												@value={{this.effectiveViewModeForOptions this.viewMode viewOpts}}
												@onChange={{this.handleViewToggleChange}}
												@size="m-size"
												@variant="primary"
												@ariaLabel={{t "aria.table.view.toggle"}}
											>
												<:item as |option|>
													<UlxIcon
														@iconName={{option.icon}}
														@type="font"
														@componentClass="bs-icons1"
														@size="s16"
														aria-hidden="true"
													/>
												</:item>
											</UlxSelectButton>
										{{/let}}
									{{/let}}
								{{/if}}
							{{/if}}
						{{/if}}
						{{yield to="postRightMenu"}}
					</div>
				</div>
			{{/if}}

			{{! Row-mode clear filters bar }}
			{{#if this.showClearFiltersBar}}
				<div class="datatable-clear-filters-bar py-2">
					<UlxButton
						@variant="text"
						@label={{t "lbl.clear.filters"}}
						@onClick={{this.handleClearAllFilters}}
						aria-label={{t "lbl.clear.filters"}}
					/>
				</div>
			{{/if}}

			{{! Filter bubbles bar — shown whenever any filter is active }}
			{{#if this.showFilterBubblesBar}}
				<div class="datatable-filter-bubbles-bar" role="group" aria-label={{t "lbl.filter"}}>
					{{#each this.activeFilterBubbles as |bubble|}}
						<div class="datatable-filter-bubble-item">
							<UlxButton
								@variant="outlined"
								@size="compact"
								@customClass="filter-bubble-trigger"
								@onClick={{fn this.openFilterBubble bubble}}
								aria-haspopup="true"
								aria-expanded={{eq this.activeFilterBubbleField bubble.field}}
							>
								<:default>
									<UlxChip @size="s-size" @customClass="filter-bubble-chip">
										<UlxIcon
											@iconName="filter-icon"
											@componentClass="bs-icons1"
											@type="font"
											@size="s18"
											aria-hidden="true"
										/>
										<span class="filter-bubble-label">
											{{bubble.label}}:
											<strong>{{bubble.displayValue}}</strong>
										</span>
										<UlxIcon
											@iconName="down-arrow-filled-icon"
											@componentClass="bs-icons1"
											@type="font"
											@size="s18"
											aria-hidden="true"
										/>
									</UlxChip>
								</:default>
							</UlxButton>
							<UlxButton
								@variant="link"
								@size="s-size"
								@iconSize="s18"
								@icon="remove-icon"
								@customClass="filter-bubble-remove-btn"
								@onClick={{fn this.deleteFilterFromBubble bubble.field}}
								aria-label={{t "lbl.delete.filter"}}
							/>
						</div>
					{{/each}}
					<UlxButton
						@variant="danger"
						@text={{true}}
						@size="compact"
						@icon="delete-icon-02"
						@label={{t "lbl.clear.filters"}}
						@onClick={{this.handleClearAllFilters}}
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

			{{! Detailed view (list view — uses UlxDataView when there is data) }}
			{{#if (and (eq this.viewMode "detailed") (has-block "detailed"))}}
				<div class="datatable-wrapper {{if @scrollable 'scrollable'}}" style={{this.wrapperStyle}}>
					{{#if (or @loading this.pagedData.length)}}
						<UlxDataView @layout="list" @gridRole="list">
							<:content>
								{{#each this.pagedData as |row|}}
									<div class="dataview-item">
										{{yield row to="detailed"}}
									</div>
								{{/each}}
							</:content>
						</UlxDataView>
					{{/if}}
					{{#if (and (not @loading) (not this.pagedData.length))}}
						<div class="datatable-empty-message">
							{{#if (has-block "emptyMessage")}}
								{{yield to="emptyMessage"}}
							{{else}}
								<UlxEmptyState
									@headerText={{this.emptyStateHeaderText}}
									@subHeaderText={{this.emptyStateSubHeaderText}}
									@iconName={{this.emptyStateIconName}}
									@iconSize="s32"
								/>
							{{/if}}
						</div>
					{{/if}}
				</div>
			{{else if (and (eq this.viewMode "card") (has-block "card"))}}
				{{! Card view (grid; column count from @cardViewColumns — uses ulx-grid from grid.less) }}
				<div class="datatable-wrapper {{if @scrollable 'scrollable'}}" style={{this.wrapperStyle}}>
					<div class="ulx-grid gap-4 col-{{this.cardViewColumns}}">
						{{#each this.pagedData as |row|}}
							<UlxCard @bodyClass="p-0">{{yield row to="card"}}</UlxCard>
						{{/each}}
					</div>
					{{#if (and (not @loading) (not this.pagedData.length))}}
						<div class="datatable-empty-message">
							{{#if (has-block "emptyMessage")}}
								{{yield to="emptyMessage"}}
							{{else}}
								<UlxEmptyState
									@headerText={{this.emptyStateHeaderText}}
									@subHeaderText={{this.emptyStateSubHeaderText}}
									@iconName={{this.emptyStateIconName}}
									@iconSize="s32"
								/>
							{{/if}}
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
									<th class="column-header-cell datatable-vertical-row-header" scope="row">
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
							{{#if (has-block "emptyMessage")}}
								{{yield to="emptyMessage"}}
							{{else}}
								<UlxEmptyState
									@headerText={{this.emptyStateHeaderText}}
									@subHeaderText={{this.emptyStateSubHeaderText}}
									@iconName={{this.emptyStateIconName}}
									@iconSize="s32"
								/>
							{{/if}}
						</div>
					{{/if}}
				</div>
			{{else}}
				{{! Table wrapper }}
				<div class="datatable-wrapper {{if @scrollable 'scrollable'}}" style={{this.wrapperStyle}}>
					<table class={{this.tableClass}} style={{this.tableStyle}} role="grid">
						<TableHeader
							@columns={{this.orderedColumns}}
							@columnWidths={{this._columnWidths}}
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
							@filterOverlayField={{this.filterOverlayField}}
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
								@columnWidths={{this._columnWidths}}
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
									{{#if (has-block "customEmptyState")}}
										{{yield to="customEmptyState"}}
									{{else if (has-block "emptyMessage")}}
										{{yield to="emptyMessage"}}
									{{else}}
										<UlxEmptyState
											@headerText={{this.emptyStateHeaderText}}
											@subHeaderText={{this.emptyStateSubHeaderText}}
											@iconName={{this.emptyStateIconName}}
											@iconSize="s32"
										/>
									{{/if}}
								</:emptyMessage>
							</TableBody>
						{{/if}}

						{{! Main data body }}
						<TableBody
							@rows={{this.pagedData}}
							@columns={{this.orderedColumns}}
							@columnWidths={{this._columnWidths}}
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
								{{#if (has-block "customEmptyState")}}
									{{yield to="customEmptyState"}}
								{{else if (has-block "emptyMessage")}}
									{{yield to="emptyMessage"}}
								{{else}}
									<UlxEmptyState
										@headerText={{this.emptyStateHeaderText}}
										@subHeaderText={{this.emptyStateSubHeaderText}}
										@iconName={{this.emptyStateIconName}}
										@iconSize="s32"
									/>
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
				<div
					class="datatable-loading-overlay"
					aria-live="polite"
					aria-label={{t "aria.table.loading"}}
				>
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
					@size="l-size"
					@closable={{true}}
					@bodyClassName="p-0"
					@title={{t "lbl.manage.columns"}}
					@onHide={{this.closeManageColumns}}
					@ariaLabel={{t "lbl.manage.columns"}}
					@hideTertiaryButton={{false}}
					@tertiaryButtonLabel={{t "lbl.reset.to.default"}}
					@tertiaryButtonIcon="reset-icon"
					@cancelButtonLabel={{t "lbl.cancel"}}
					@doneButtonLabel={{t "lbl.save"}}
					@onTertiary={{this.handleManageColumnsReset}}
					@onCancel={{this.closeManageColumns}}
					@onDone={{this.invokeManageColumnsApply}}
				>
					<ManageColumns
						@allColumns={{this.allColumns}}
						@visibleColumns={{this.visibleColumns}}
						@onApply={{this.handleManageColumnsApply}}
						@onClose={{this.closeManageColumns}}
						@onReset={{this.handleManageColumnsReset}}
						@registerRef={{this.setManageColumnsRef}}
					/>
				</UlxPopup>
			{{/if}}

			{{! Filter bubble edit popup }}
			{{#if (and this.activeBubble this.filterBubbleTriggerEl)}}
				<UlxPopup
					@visible={{true}}
					@target={{this.filterBubbleTriggerEl}}
					@position="position-bottom-left"
					@size="m-size"
					@dismissable={{true}}
					@onHide={{this.closeFilterBubble}}
					@ariaLabel={{t "lbl.filter"}}
					@hideFooter={{true}}
				>
					{{#if (eq this.activeBubble.type "column")}}
						<FilterOverlay
							@column={{this.activeBubble.col}}
							@filterMeta={{this.activeBubble.meta}}
							@onApply={{this.applyFilterFromBubble}}
							@onClear={{this.deleteFilterFromBubble}}
							@onClose={{this.closeFilterBubble}}
						/>
					{{else}}
						<div class="flex flex-col gap-3">
							<div class="flex justify-between items-center">
								<span class="popup-title">{{this.activeBubble.label}}</span>
								<UlxButton
									@variant="danger"
									@text={{true}}
									@size="s-size"
									@icon="delete-icon-02"
									@iconComponentClass="bs-icons1"
									@label={{t "lbl.delete.filter"}}
									@onClick={{fn this.deleteFilterFromBubble this.activeBubble.field}}
								/>
							</div>

							<div class="ulx-checkbox-group">
								{{#each this.activeBubble.group.options as |opt|}}
									<UlxCheckboxItem
										@itemLabel={{opt.label}}
										@checked={{this.isFilterPaneOptionChecked
											this.activeBubble.group.key
											opt.value
										}}
										@onChange={{fn
											this.updateFilterPaneSelection
											this.activeBubble.group.key
											opt.value
										}}
									/>
								{{/each}}
							</div>

							<div class="flex justify-end">
								<UlxButton
									@variant="primary"
									@size="s-size"
									@label={{t "lbl.apply.filter"}}
									@onClick={{fn this.applyPaneFilterFromBubble this.activeBubble.field}}
								/>
							</div>
						</div>
					{{/if}}
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
					@dismissable={{true}}
					@closable={{true}}
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
					@title={{t "lbl.filter"}}
					@position="right"
					@contentClassName="p-0"
					@onHide={{this.closeFilterPane}}
					@onCancel={{this.closeFilterPane}}
					@onDone={{this.applyFilterPane}}
					@cancelButtonLabel={{t "lbl.close"}}
					@doneButtonLabel={{t "lbl.apply.filter"}}
				>
					<:body>
						<UlxAccordion
							@model={{this.filterAccordionModel}}
							@multiple={{true}}
							@toggleIconPosition="right"
							@variant="elevated"
							@size="m-size"
						>
							<:content as |item idx|>
								{{#let (this.getFilterGroupAt idx) as |group|}}
									{{#if group}}
										<div class={{this.filterPaneGroupClass}}>
											{{#each group.options as |opt|}}
												<UlxCheckboxItem
													@itemLabel={{opt.label}}
													@checked={{this.isFilterPaneOptionChecked group.key opt.value}}
													@onChange={{fn this.updateFilterPaneSelection group.key opt.value}}
												/>
											{{/each}}
										</div>
									{{/if}}
								{{/let}}
							</:content>
						</UlxAccordion>
					</:body>
				</UlxSlidePane>
			{{/if}}
		</div>
	</template>
}
