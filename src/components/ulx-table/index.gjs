import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import and from "ember-truth-helpers/helpers/and";
import or from "ember-truth-helpers/helpers/or";
import eq from "ember-truth-helpers/helpers/eq";
import { getComponentClass } from "../../utils/component-config.js";
import {
	exportCSV,
	reorderArray,
	getFieldValue,
	isSpecialColumn,
	parseSortBy,
	formatSortBy,
	getNextSingleSortState,
	getNextMultiSortMeta,
	applySelectionToFilters,
	applySelectionMapToFilters,
	processAndPaginateData,
	resolvePersistenceStorage,
	resolveGlobalFilterFields,
	resolveVisibleColumns,
	resolveOrderedColumns,
	rehydrateColumnOrder,
	saveTableState,
	loadTableState
} from "./utils.js";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";
import UlxButton from "../ulx-button/index.gjs";
import TableToolbar from "./table-toolbar.gjs";
import TableFilterBubblesBar from "./table-filter-bubbles-bar.gjs";
import TablePaginatorRow from "./table-paginator-row.gjs";
import TableLoadingOverlay from "./table-loading-overlay.gjs";
import TableViewDetailed from "./table-view-detailed.gjs";
import TableViewCard from "./table-view-card.gjs";
import TableViewVertical from "./table-view-vertical.gjs";
import TableGridShell from "./table-grid-shell.gjs";
import TableEmptyState from "./table-empty-state.gjs";
import TableOverlays from "./table-overlays.gjs";
import { t } from "../../utils/i18n.js";

const DEFAULT_MINIMUM_PAGINATOR_ROWS = 10;

/**
 * UlxTable — Full-featured data table component.
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
 * @param {string}  [dataQa]         - Optional root `data-qa` override (default: `ulx-table`). Subregions use this value as the prefix.
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
 * @param {string}  [paginatorTemplate]     - paginator layout string; defaults to prev/page links/next + rows dropdown + current page report (no first/last). Include `CurrentPageReport` in the string to show the report; omit that token to hide it.
 * @param {string}  [currentPageReportTemplate] - Placeholders: {currentPage}, {totalPages}, {first}, {last}, {rows}, {totalRecords}. Used only when `CurrentPageReport` is present in @paginatorTemplate.
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
 * @param {string}  [stateKey]              - localStorage/sessionStorage key; only column order and
 *                                            column visibility are persisted under this key.
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
	@tracked filterOverlayZIndex = 1100;

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
	/** null = all accordion groups expanded; set when the user toggles a section. */
	@tracked _filterPaneAccordionActive = null;

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
		return resolvePersistenceStorage(stateStorage, moduleName, stateKey);
	}

	restorePersistedState() {
		const key = this.persistenceKey;
		if (!key || this._restoredStateKey === key) return;

		this._restoredStateKey = key;
		const persistedState = loadTableState(key, this.persistenceStorage) ?? {};
		Array.isArray(persistedState.visibleColumnFields) &&
			(this._visibleColumnFields = new Set(persistedState.visibleColumnFields));
		Array.isArray(persistedState.columnOrder) &&
			(this._columnOrder = rehydrateColumnOrder(this.allColumns, persistedState.columnOrder));
	}

	get persistenceState() {
		return {
			visibleColumnFields: this._visibleColumnFields ? [...this._visibleColumnFields] : null,
			columnOrder: Array.isArray(this._columnOrder)
				? this._columnOrder.map((column) => column?.field).filter(Boolean)
				: null
		};
	}

	persistState() {
		const key = this.persistenceKey;
		if (!key) return;
		saveTableState(key, this.persistenceStorage, this.persistenceState);
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "table");
	}

	/** Bound so template / helper invocations always see the component instance (`this`). */
	getDataQa = (part) => buildDataQa(this.rootDataQa, part);

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
		const opts = this.args.sortOptions;
		if (opts?.length) {
			return parseSortBy(this.args.sortBy ?? this._sortByString).field;
		}
		return this.args.sortField !== undefined ? this.args.sortField : this._sortField;
	}

	get sortOrder() {
		const opts = this.args.sortOptions;
		if (opts?.length) {
			return parseSortBy(this.args.sortBy ?? this._sortByString).order;
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
		return formatSortBy(field, order);
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
		this.restorePersistedState();
		return resolveVisibleColumns(this.allColumns, this._visibleColumnFields);
	}

	get orderedColumns() {
		this.restorePersistedState();
		return resolveOrderedColumns(this.visibleColumns, this._columnOrder);
	}

	get allColumnsInManagedOrder() {
		this.restorePersistedState();
		return resolveOrderedColumns(this.allColumns, this._columnOrder);
	}

	// ─── Data pipeline ───────────────────────────────────────────────────────
	get rawData() {
		return this.args.value ?? [];
	}

	get unfilteredCount() {
		return this.rawData.length;
	}

	get globalFilterFields() {
		return resolveGlobalFilterFields(this.allColumns, this.args.globalFilterFields);
	}

	get globalFilterValue() {
		return this.filters?.global?.value ?? "";
	}

	get shouldUseSearchEmptyState() {
		return this.hasActiveFilters && !this.args.emptyMessage;
	}

	get emptyStateHeaderText() {
		if (this.shouldUseSearchEmptyState) {
			return t("msg.empty.state.title");
		}

		return this.args.emptyMessage ?? t("msg.table.no.records");
	}

	get emptyStateSubHeaderText() {
		return this.shouldUseSearchEmptyState ? t("msg.empty.state.subtitle") : null;
	}

	get emptyStateIconName() {
		return this.shouldUseSearchEmptyState ? "search-empty-icon" : null;
	}

	get processedData() {
		return this.dataPipelineResult.processedData;
	}

	get pagedData() {
		return this.dataPipelineResult.pagedData;
	}

	get dataPipelineResult() {
		return processAndPaginateData({
			rawData: this.rawData,
			lazy: this.args.lazy,
			filters: this.filters,
			globalFilterFields: this.globalFilterFields,
			sortMode: this.sortMode,
			sortField: this.sortField,
			sortOrder: this.sortOrder,
			multiSortMeta: this.multiSortMeta,
			paginator: this.args.paginator,
			first: this.first,
			rows: this.rows
		});
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

	get minimumPaginatorRows() {
		const rowsPerPageOptions = this.args.rowsPerPageOptions ?? [];
		const rowOptions = rowsPerPageOptions.filter((rowOption) => {
			return typeof rowOption === "number" && Number.isFinite(rowOption) && rowOption > 0;
		});

		return rowOptions.length ? Math.min(...rowOptions) : DEFAULT_MINIMUM_PAGINATOR_ROWS;
	}

	get shouldShowPaginator() {
		return this.args.paginator && this.paginatorTotalRecords > this.minimumPaginatorRows;
	}

	get showPaginatorTop() {
		return (
			this.shouldShowPaginator &&
			(this.paginatorPosition === "top" || this.paginatorPosition === "both")
		);
	}

	get showPaginatorBottom() {
		return (
			this.shouldShowPaginator &&
			(this.paginatorPosition === "bottom" || this.paginatorPosition === "both")
		);
	}

	/**
	 * Default layout: previous + page numbers + next, rows-per-page, and current page report.
	 * Omit first/last links to match standard table footer pagination.
	 */
	get tablePaginatorTemplate() {
		return this.args.paginatorTemplate ?? "PrevPageLink PageLinks NextPageLink RowsPerPageDropdown";
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
	commitFilterUpdate(updated) {
		this._filters = updated;
		this._first = 0;
		this.persistState();
		this.args.lazy && this.args.onFilter?.({ filters: updated });
	}

	@action
	handleSort(field) {
		const { removableSort } = this.args;

		if (this.sortMode === "multiple") {
			const meta = getNextMultiSortMeta(this.multiSortMeta ?? [], field, removableSort);
			this._multiSortMeta = meta;
			this.persistState();
			this.args.onSort?.({ multiSortMeta: meta });
		} else {
			const next = getNextSingleSortState({
				currentField: this.sortField,
				currentOrder: this.sortOrder,
				nextField: field,
				removableSort
			});
			const { sortField, sortOrder, cleared } = next;
			this._sortField = sortField;
			this._sortOrder = sortOrder;
			const sortByString = formatSortBy(sortField, sortOrder);
			this._sortByString = sortByString;
			this.persistState();
			this.args.onSort?.(
				cleared ? { field: null, order: null } : { field: sortField, order: sortOrder }
			);
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
		this.commitFilterUpdate(updated);
	}

	@action
	handleFilterApply(field, meta) {
		const updated = { ...this.filters, [field]: meta };
		this.filterOverlayColumn = null;
		this.commitFilterUpdate(updated);
	}

	@action
	handleFilterClear(field) {
		const updated = { ...this.filters };
		delete updated[field];
		this.filterOverlayColumn = null;
		this.commitFilterUpdate(updated);
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

	get filterPaneAccordionActiveIndex() {
		if (this._filterPaneAccordionActive != null) {
			return this._filterPaneAccordionActive;
		}
		return this.filterGroups.map((_, i) => i);
	}

	@action
	onFilterPaneAccordionChange(detail) {
		this._filterPaneAccordionActive = detail.index;
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
		return Object.keys(this.filters).some((k) => k !== "global");
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
				group,
				selectionCount: values.length
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
			let selectionCount = 0;
			for (const c of constraints) {
				const v = c?.value;
				if (v == null || v === "") continue;
				if (Array.isArray(v)) {
					selectionCount += v.filter((x) => x != null && x !== "").length;
				} else {
					selectionCount += 1;
				}
			}
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
				col,
				selectionCount
			});
			processedFields.add(field);
		}

		return bubbles;
	}

	/** Total applied filter values (e.g. checked pane options), not number of groups/columns. */
	get activeFilterSelectionCount() {
		return this.activeFilterBubbles.reduce((n, b) => n + (b.selectionCount ?? 0), 0);
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
		this.commitFilterUpdate(updated);
	};

	@action
	handleClearAllFilters() {
		this.filterOverlayColumn = null;
		this.commitFilterUpdate({});
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
		const currentModal = this.modalStack?.topModal;
		this.filterOverlayZIndex = currentModal ? this.modalStack.getZIndex(currentModal) + 20 : 1100;
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
		this.filterOverlayColumn = null;
		this.closeFilterBubble();
		this.commitFilterUpdate(updated);
	}

	@action
	applyFilterFromBubble(field, meta) {
		const updated = { ...this.filters, [field]: meta };
		this.closeFilterBubble();
		this.commitFilterUpdate(updated);
	}

	@action
	applyPaneFilterFromBubble(field) {
		const arr = this._filterPaneSelections[field];
		const updated = applySelectionToFilters(this.filters, field, arr);
		this.closeFilterBubble();
		this.commitFilterUpdate(updated);
	}

	@action
	handleSortByChange(sortByString) {
		this._sortByString = sortByString;
		this._first = 0;
		this.persistState();
		this.args.onSortByChange?.(sortByString);
		this.args.first !== undefined && this.args.onPage?.({ first: 0, rows: this.rows, page: 0 });
	}

	@action
	openSortPopover(event) {
		const trigger = event?.currentTarget;
		this.filterOverlayColumn = null;
		if (this.showSortPopover) {
			this.closeSortPopover();
			return;
		}
		this.closeManageColumns();
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
		this._filterPaneAccordionActive = null;
		this.filterPaneOpen = true;
	}

	@action
	closeFilterPane() {
		this.filterPaneOpen = false;
		this._filterPaneAccordionActive = null;
	}

	@action
	applyFilterPane() {
		const updated = applySelectionMapToFilters(this.filters, this._filterPaneSelections);
		this.filterPaneOpen = false;
		this._filterPaneAccordionActive = null;
		this.commitFilterUpdate(updated);
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
		return `position: absolute; top: ${p.top}px; left: ${p.left}px; z-index: ${this.filterOverlayZIndex};`;
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
		const { onSelectionChange } = this.args;
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
		if (this.showManagePanel) {
			this.closeManageColumns();
			return;
		}
		this.closeSortPopover();
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
	handleManageColumnsApply({ columns, visibleFields }) {
		const dataFields = Array.isArray(visibleFields)
			? new Set(visibleFields)
			: new Set(columns.filter((c) => c.field && !isSpecialColumn(c)).map((c) => c.field));
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
		const opts = [
			{ value: "table", label: t("lbl.a11y.table.view.table"), icon: "grid-icon-master" }
		];
		hasDetailed &&
			opts.push({
				value: "detailed",
				label: t("lbl.a11y.table.view.detailed"),
				icon: "list-view-icon"
			});
		hasCard &&
			opts.push({
				value: "card",
				label: t("lbl.a11y.table.view.card"),
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

	get manageColumnsOverlayConfig() {
		return {
			visible: this.showManagePanel,
			target: this.manageColumnsTriggerElement,
			allColumns: this.allColumnsInManagedOrder,
			visibleColumns: this.visibleColumns,
			onApply: this.handleManageColumnsApply,
			onClose: this.closeManageColumns,
			onReset: this.handleManageColumnsReset,
			onSetRef: this.setManageColumnsRef,
			onInvokeApply: this.invokeManageColumnsApply
		};
	}

	get filterBubbleOverlayConfig() {
		return {
			activeBubble: this.activeBubble,
			target: this.filterBubbleTriggerEl,
			isOptionChecked: this.isFilterPaneOptionChecked,
			onUpdateSelection: this.updateFilterPaneSelection,
			onApplyPane: this.applyPaneFilterFromBubble,
			onApply: this.applyFilterFromBubble,
			onDelete: this.deleteFilterFromBubble,
			onClose: this.closeFilterBubble
		};
	}

	get filterOverlayConfig() {
		const column = this.filterOverlayColumn;
		return {
			column,
			portalTarget: this.filterOverlayPortalTarget,
			// Only resolve modal-stack aware wrapper style when overlay is active.
			wrapperStyle: column ? this.filterOverlayWrapperStyle : undefined,
			filterMetaFor: this.filterMetaFor,
			onApply: this.handleFilterApply,
			onClear: this.handleFilterClear,
			onClose: this.closeFilterOverlay
		};
	}

	get sortPopoverConfig() {
		return {
			visible: this.showSortPopover,
			target: this.sortPopoverTriggerElement,
			sortBy: this.sortByString,
			options: this.args.sortOptions,
			onChange: this.handleSortByChange,
			onClose: this.closeSortPopover
		};
	}

	get filterPaneOverlayConfig() {
		return {
			hasGroups: this.hasFilterGroups,
			visible: this.filterPaneOpen,
			onClose: this.closeFilterPane,
			onApply: this.applyFilterPane,
			accordionModel: this.filterAccordionModel,
			accordionActiveIndex: this.filterPaneAccordionActiveIndex,
			onAccordionChange: this.onFilterPaneAccordionChange,
			getGroupAt: this.getFilterGroupAt,
			groupClass: this.filterPaneGroupClass,
			isOptionChecked: this.isFilterPaneOptionChecked,
			onUpdateSelection: this.updateFilterPaneSelection
		};
	}

	<template>
		<div
			class={{this.rootClasses}}
			...attributes
			data-qa={{this.rootDataQa}}
			data-module-name={{@moduleName}}
			aria-busy={{if @loading "true"}}
		>
			{{! Custom table header area }}
			{{#if (has-block "header")}}
				<div class="header-toolbar" data-qa={{this.getDataQa "header"}}>
					{{yield to="header"}}
				</div>
			{{/if}}

			{{! Unified toolbar (filter menu): left = slots + search, right = actions + view toggle }}
			{{#let (has-block "detailed") (has-block "card") as |hasDetailed hasCard|}}
				{{#let (this.getViewToggleOptions hasDetailed hasCard) as |viewOpts|}}
					<TableToolbar
						@visible={{or
							this.showToolbar
							(has-block "preLeftMenu")
							(has-block "postLeftMenu")
							(has-block "preRightMenu")
							(has-block "postRightMenu")
						}}
						@dataQa={{this.getDataQa "toolbar"}}
						@showGlobalFilter={{@showGlobalFilter}}
						@globalFilterValue={{this.globalFilterValue}}
						@globalFilterPlaceholder={{@globalFilterPlaceholder}}
						@hasFilterGroups={{this.hasFilterGroups}}
						@activeFilterCount={{this.activeFilterSelectionCount}}
						@sortOptions={{@sortOptions}}
						@showManageColumns={{@showManageColumns}}
						@showManageColumnsPopup={{this.showManagePanel}}
						@showToggleViews={{@showToggleViews}}
						@showSortPopover={{this.showSortPopover}}
						@viewOptions={{viewOpts}}
						@viewMode={{this.effectiveViewModeForOptions this.viewMode viewOpts}}
						@onGlobalFilterInput={{this.handleGlobalFilterInput}}
						@filterPaneOpen={{this.filterPaneOpen}}
						@onOpenFilterPane={{this.openFilterPane}}
						@onOpenSortPopover={{this.openSortPopover}}
						@onOpenManageColumns={{this.openManageColumns}}
						@onViewToggleChange={{this.handleViewToggleChange}}
					>
						<:preLeftMenu>{{yield to="preLeftMenu"}}</:preLeftMenu>
						<:postLeftMenu>{{yield to="postLeftMenu"}}</:postLeftMenu>
						<:preRightMenu>{{yield to="preRightMenu"}}</:preRightMenu>
						<:postRightMenu>{{yield to="postRightMenu"}}</:postRightMenu>
					</TableToolbar>
				{{/let}}
			{{/let}}

			{{! Row-mode clear filters bar }}
			{{#if this.showClearFiltersBar}}
				<div
					class="datatable-clear-filters-bar py-2"
					data-qa={{this.getDataQa "clear-filters-bar"}}
				>
					<UlxButton
						@variant="text"
						@label={{t "lbl.clear.filters"}}
						@onClick={{this.handleClearAllFilters}}
						aria-label={{t "lbl.clear.filters"}}
					/>
				</div>
			{{/if}}

			{{! Filter bubbles bar — shown whenever any filter is active }}
			<TableFilterBubblesBar
				@visible={{this.showFilterBubblesBar}}
				@dataQa={{this.getDataQa "filter-bubbles"}}
				@bubbles={{this.activeFilterBubbles}}
				@activeField={{this.activeFilterBubbleField}}
				@onOpenBubble={{this.openFilterBubble}}
				@onRemoveBubble={{this.deleteFilterFromBubble}}
				@onClearAll={{this.handleClearAllFilters}}
			/>

			{{! Top paginator }}
			<TablePaginatorRow
				@visible={{this.showPaginatorTop}}
				@dataQa={{this.getDataQa "paginator-top"}}
				@totalRecords={{this.paginatorTotalRecords}}
				@rows={{this.rows}}
				@first={{this.first}}
				@rowsPerPageOptions={{@rowsPerPageOptions}}
				@template={{this.tablePaginatorTemplate}}
				@currentPageReportTemplate={{@currentPageReportTemplate}}
				@onPageChange={{this.handlePageChange}}
				@hasLeft={{has-block "paginatorLeft"}}
				@hasRight={{has-block "paginatorRight"}}
			>
				<:left>{{yield to="paginatorLeft"}}</:left>
				<:right>{{yield to="paginatorRight"}}</:right>
			</TablePaginatorRow>

			{{! Detailed, card, vertical and default grid views }}
			{{#if (and (eq this.viewMode "detailed") (has-block "detailed"))}}
				<TableViewDetailed
					@loading={{@loading}}
					@dataQa={{this.getDataQa "view-detailed"}}
					@rows={{this.pagedData}}
					@scrollable={{@scrollable}}
					@wrapperStyle={{this.wrapperStyle}}
					@emptyStateHeaderText={{this.emptyStateHeaderText}}
					@emptyStateSubHeaderText={{this.emptyStateSubHeaderText}}
					@emptyStateIconName={{this.emptyStateIconName}}
					@hasCustomEmptyMessage={{has-block "emptyMessage"}}
				>
					<:detailed as |row|>{{yield row to="detailed"}}</:detailed>
					<:emptyMessage>{{yield to="emptyMessage"}}</:emptyMessage>
				</TableViewDetailed>
			{{else if (and (eq this.viewMode "card") (has-block "card"))}}
				<TableViewCard
					@loading={{@loading}}
					@dataQa={{this.getDataQa "view-card"}}
					@rows={{this.pagedData}}
					@cardViewColumns={{this.cardViewColumns}}
					@scrollable={{@scrollable}}
					@wrapperStyle={{this.wrapperStyle}}
					@emptyStateHeaderText={{this.emptyStateHeaderText}}
					@emptyStateSubHeaderText={{this.emptyStateSubHeaderText}}
					@emptyStateIconName={{this.emptyStateIconName}}
					@hasCustomEmptyMessage={{has-block "emptyMessage"}}
				>
					<:card as |row|>{{yield row to="card"}}</:card>
					<:emptyMessage>{{yield to="emptyMessage"}}</:emptyMessage>
				</TableViewCard>
			{{else if this.isVertical}}
				<TableViewVertical
					@loading={{@loading}}
					@dataQa={{this.getDataQa "view-vertical"}}
					@rows={{this.pagedData}}
					@tableClass={{this.tableClass}}
					@verticalLabelField={{@verticalLabelField}}
					@verticalRows={{this.verticalRows}}
					@getCellValue={{this.getCellValue}}
					@scrollable={{@scrollable}}
					@wrapperStyle={{this.wrapperStyle}}
					@emptyStateHeaderText={{this.emptyStateHeaderText}}
					@emptyStateSubHeaderText={{this.emptyStateSubHeaderText}}
					@emptyStateIconName={{this.emptyStateIconName}}
					@hasCustomEmptyMessage={{has-block "emptyMessage"}}
				>
					<:emptyMessage>{{yield to="emptyMessage"}}</:emptyMessage>
				</TableViewVertical>
			{{else}}
				<TableGridShell
					@rows={{this.pagedData}}
					@dataQa={{this.getDataQa "grid"}}
					@frozenRows={{this.frozenData}}
					@columns={{this.orderedColumns}}
					@columnWidths={{this._columnWidths}}
					@tableClass={{this.tableClass}}
					@tableStyle={{this.tableStyle}}
					@scrollable={{@scrollable}}
					@wrapperStyle={{this.wrapperStyle}}
					@sortField={{this.sortField}}
					@sortOrder={{this.sortOrder}}
					@sortMode={{this.sortMode}}
					@multiSortMeta={{this.multiSortMeta}}
					@removableSort={{@removableSort}}
					@resizableColumns={{@resizableColumns}}
					@selectionMode={{@selectionMode}}
					@selection={{@selection}}
					@allSelected={{this.allSelected}}
					@someSelected={{this.someSelected}}
					@filterDisplay={{@filterDisplay}}
					@filters={{this.filters}}
					@showManageColumns={{@showManageColumns}}
					@hasOptionCell={{has-block "optionCell"}}
					@filterOverlayField={{this.filterOverlayField}}
					@dataKey={{@dataKey}}
					@expandedRows={{@expandedRows}}
					@editMode={{@editMode}}
					@editingRows={{this.editingRows}}
					@editingCell={{this.editingCell}}
					@rowClassName={{@rowClassName}}
					@loading={{@loading}}
					@emptyMessage={{@emptyMessage}}
					@onSort={{this.handleSort}}
					@onHeaderCheckboxChange={{this.handleHeaderCheckboxChange}}
					@onFilterChange={{this.handleFilterChange}}
					@onFilterMenuOpen={{this.handleFilterMenuOpen}}
					@onColumnResizeStart={{this.handleColumnResizeStart}}
					@onManageColumns={{this.openManageColumns}}
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
						{{else}}
							<TableEmptyState
								@headerText={{this.emptyStateHeaderText}}
								@subHeaderText={{this.emptyStateSubHeaderText}}
								@iconName={{this.emptyStateIconName}}
								@hasCustomEmptyMessage={{has-block "emptyMessage"}}
							>
								<:emptyMessage>{{yield to="emptyMessage"}}</:emptyMessage>
							</TableEmptyState>
						{{/if}}
					</:emptyMessage>
				</TableGridShell>
			{{/if}}

			{{! Loading overlay }}
			<TableLoadingOverlay @loading={{@loading}} @dataQa={{this.getDataQa "loading-overlay"}}>
				<:loadingOverlay>{{yield to="loadingOverlay"}}</:loadingOverlay>
			</TableLoadingOverlay>

			{{! Bottom paginator }}
			<TablePaginatorRow
				@visible={{this.showPaginatorBottom}}
				@dataQa={{this.getDataQa "paginator-bottom"}}
				@totalRecords={{this.paginatorTotalRecords}}
				@rows={{this.rows}}
				@first={{this.first}}
				@rowsPerPageOptions={{@rowsPerPageOptions}}
				@template={{this.tablePaginatorTemplate}}
				@currentPageReportTemplate={{@currentPageReportTemplate}}
				@onPageChange={{this.handlePageChange}}
				@hasLeft={{has-block "paginatorLeft"}}
				@hasRight={{has-block "paginatorRight"}}
			>
				<:left>{{yield to="paginatorLeft"}}</:left>
				<:right>{{yield to="paginatorRight"}}</:right>
			</TablePaginatorRow>

			{{! Custom table footer area }}
			{{#if (has-block "footer")}}
				<div class="datatable-footer" data-qa={{this.getDataQa "footer"}}>
					{{yield to="footer"}}
				</div>
			{{/if}}

			<TableOverlays
				@dataQa={{this.getDataQa "overlays"}}
				@manageColumns={{this.manageColumnsOverlayConfig}}
				@filterBubble={{this.filterBubbleOverlayConfig}}
				@filterOverlay={{this.filterOverlayConfig}}
				@sortPopover={{this.sortPopoverConfig}}
				@filterPane={{this.filterPaneOverlayConfig}}
			/>
		</div>
	</template>
}
