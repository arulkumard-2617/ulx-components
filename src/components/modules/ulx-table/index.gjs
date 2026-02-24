import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import eq from "ember-truth-helpers/helpers/eq";
import and from "ember-truth-helpers/helpers/and";
import { getComponentClass } from "../../../utils/component-config.js";
import {
	sortItems,
	multiSortItems,
	filterItems,
	paginateItems,
	exportCSV,
	reorderArray
} from "./utils.js";
import TableHeader from "./table-header.gjs";
import TableBody from "./table-body.gjs";
import TableFooter from "./table-footer.gjs";
import ManageColumns from "./manage-columns.gjs";
import FilterOverlay from "./filter-overlay.gjs";
import UlxPaginator from "../ulx-paginator/index.gjs";
import UlxProgressSpinner from "../../elements/ulx-progressspinner/index.gjs";

/**
 * UlxTable — Full-featured data table component matching PrimeReact DataTable.
 *
 * ## Basic usage
 * ```hbs
 * <UlxTable @value={{this.products}} @columns={{this.columns}} @dataKey="id" />
 * ```
 *
 * ## flex-col definition (in @columns array)
 * ```js
 * const columns = [
 *   { field: 'code',   header: 'Code',   sortable: true },
 *   { field: 'price',  header: 'Price',  sortable: true, body: PriceCell },
 *   { selectionMode: 'multiple' },   // checkbox flex-col
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
 * @param {Array}   columns          - flex-col definition array (see above)
 * @param {boolean} [showManageColumns=false] - show manage-columns button
 *
 * ── Layout ──────────────────────────────────────────────────────────────────
 * @param {string}  [size]           - 'xs-size' | 's-size' | 'm-size' | 'l-size' | 'xl-size'
 * @param {boolean} [stripedRows]    - alternating row backgrounds
 * @param {boolean} [showGridlines]  - borders on all cells
 * @param {boolean} [scrollable]     - enable overflow scroll with sticky header
 * @param {string}  [scrollHeight]   - CSS height for scroll container (e.g. '400px')
 * @param {string}  [customClass]    - extra classes on root element
 *
 * ── Sort ────────────────────────────────────────────────────────────────────
 * @param {string}  [sortMode='single']     - 'single' | 'multiple'
 * @param {string}  [sortField]             - controlled sort field
 * @param {1|-1}    [sortOrder]             - controlled sort order (1=asc, -1=desc)
 * @param {Array}   [multiSortMeta]         - controlled multi-sort: [{field, order}]
 * @param {boolean} [removableSort]         - third click removes sort
 * @param {Function}[onSort]                - ({field, order, multiSortMeta}) => void (lazy)
 *
 * ── Filter ──────────────────────────────────────────────────────────────────
 * @param {string}  [filterDisplay]         - 'row' | 'menu'
 * @param {Object}  [filters]               - controlled filter state
 * @param {Array}   [globalFilterFields]    - fields searched by global filter
 * @param {Function}[onFilter]              - ({filters}) => void (lazy)
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
 * ── flex-col resize ───────────────────────────────────────────────────────────
 * @param {boolean} [resizableColumns]      - enable flex-col resize handles
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
 * ── Named blocks ────────────────────────────────────────────────────────────
 * <:header>             - custom table header area
 * <:footer>             - custom table footer area
 * <:emptyMessage>       - custom empty state content
 * <:rowExpansion as |row|> - row expansion content
 * <:rowGroupHeader as |data|> - row group header
 * <:rowGroupFooter as |data|> - row group footer
 * <:loadingOverlay>     - custom loading content
 * <:paginatorLeft>      - content left of paginator
 * <:paginatorRight>     - content right of paginator
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

	// ─── flex-col management ───────────────────────────────────────────────────
	@tracked _visibleColumnFields = null;
	@tracked _columnOrder = null;
	@tracked _columnWidths = {};
	@tracked showManagePanel = false;

	// ─── Filter overlay ──────────────────────────────────────────────────────
	@tracked filterOverlayColumn = null;
	@tracked filterOverlayPosition = null;

	// ─── Resize state ────────────────────────────────────────────────────────
	_resizingColIndex = null;
	_resizeStartX = null;
	_resizeStartWidth = null;

	// ─── Editing (uncontrolled fallback) ─────────────────────────────────────
	@tracked _editingRows = [];
	@tracked _editingCell = null;

	// ─── Context menu ─────────────────────────────────────────────────────────
	@tracked contextMenuData = null;

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
			customClass
		} = this.args;
		const parts = [this.baseClass];
		parts.push(size);
		stripedRows && parts.push("striped-rows");
		showGridlines && parts.push("gridlines");
		loading && parts.push("loading");
		scrollable && parts.push("scrollable");
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
	get sortField() {
		return this.args.sortField !== undefined ? this.args.sortField : this._sortField;
	}

	get sortOrder() {
		return this.args.sortOrder !== undefined ? this.args.sortOrder : this._sortOrder;
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

	// ─── flex-col management ───────────────────────────────────────────────────
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

	get processedData() {
		const { lazy } = this.args;
		if (lazy) return this.rawData;

		let data = this.rawData;

		// Filter
		if (Object.keys(this.filters).length) {
			data = filterItems(data, this.filters, this.args.globalFilterFields);
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
		const pos = this.args.paginatorPosition ?? "bottom";
		return this.args.paginator && (pos === "top" || pos === "both");
	}

	get showPaginatorBottom() {
		const pos = this.args.paginatorPosition ?? "bottom";
		return this.args.paginator && (pos === "bottom" || pos === "both");
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

	@action
	handleFilterMenuOpen(event, col) {
		this.filterOverlayColumn = col;
		this.filterOverlayPosition = { x: event?.clientX ?? 0, y: event?.clientY ?? 0 };
	}

	@action
	closeFilterOverlay() {
		this.filterOverlayColumn = null;
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

	// ─── flex-col resize actions ────────────────────────────────────────────────
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
	openManageColumns() {
		this.showManagePanel = true;
	}

	@action
	closeManageColumns() {
		this.showManagePanel = false;
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
	}

	@action
	handleManageColumnsReset() {
		this._visibleColumnFields = null;
		this._columnOrder = null;
		this.showManagePanel = false;
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
				<div class="datatable-header">
					{{yield to="header"}}
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
							<:emptyMessage>{{yield to="emptyMessage"}}</:emptyMessage>
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
						<:emptyMessage>{{yield to="emptyMessage"}}</:emptyMessage>
					</TableBody>

					<TableFooter @columns={{this.orderedColumns}} @showManageColumns={{@showManageColumns}} />
				</table>
			</div>

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

			{{! Manage columns panel }}
			{{#if this.showManagePanel}}
				<div class="datatable-manage-columns-overlay" role="presentation">
					<ManageColumns
						@allColumns={{this.allColumns}}
						@visibleColumns={{this.visibleColumns}}
						@onApply={{this.handleManageColumnsApply}}
						@onClose={{this.closeManageColumns}}
						@onReset={{this.handleManageColumnsReset}}
					/>
				</div>
			{{/if}}

			{{! Filter overlay (menu mode) }}
			{{#if this.filterOverlayColumn}}
				<FilterOverlay
					@flex-col={{this.filterOverlayColumn}}
					@filterMeta={{this.filterMetaFor this.filterOverlayColumn}}
					@onApply={{this.handleFilterApply}}
					@onClear={{this.handleFilterClear}}
					@onClose={{this.closeFilterOverlay}}
				/>
			{{/if}}
		</div>
	</template>

	@action
	filterMetaFor(col) {
		const field = col?.filterField ?? col?.field;
		return this.filters?.[field];
	}
}
