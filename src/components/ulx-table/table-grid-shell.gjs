import Component from "@glimmer/component";
import TableHeader from "./table-header.gjs";
import TableBody from "./table-body.gjs";
import TableFooter from "./table-footer.gjs";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";

/** @param {string} [dataQa] - Root `data-qa` for the grid wrapper (default: `ulx-table-grid`). */
export default class TableGridShell extends Component {
	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "table-grid");
	}

	get tableDataQa() {
		return buildDataQa(this.rootDataQa, "table");
	}

	get frozenRows() {
		return this.args.frozenRows ?? [];
	}

	<template>
		<div
			class="datatable-wrapper {{if @scrollable 'scrollable'}}"
			style={{@wrapperStyle}}
			data-qa={{this.rootDataQa}}
		>
			<table class={{@tableClass}} style={{@tableStyle}} role="grid" data-qa={{this.tableDataQa}}>
				<TableHeader
					@columns={{@columns}}
					@columnWidths={{@columnWidths}}
					@sortField={{@sortField}}
					@sortOrder={{@sortOrder}}
					@sortMode={{@sortMode}}
					@multiSortMeta={{@multiSortMeta}}
					@removableSort={{@removableSort}}
					@resizableColumns={{@resizableColumns}}
					@selectionMode={{@selectionMode}}
					@allSelected={{@allSelected}}
					@someSelected={{@someSelected}}
					@filterDisplay={{@filterDisplay}}
					@filters={{@filters}}
					@showManageColumns={{@showManageColumns}}
					@hasOptionCell={{@hasOptionCell}}
					@filterOverlayField={{@filterOverlayField}}
					@onSort={{@onSort}}
					@onHeaderCheckboxChange={{@onHeaderCheckboxChange}}
					@onFilterChange={{@onFilterChange}}
					@onFilterMenuOpen={{@onFilterMenuOpen}}
					@onColumnResizeStart={{@onColumnResizeStart}}
					@onManageColumns={{@onManageColumns}}
					@headerClass={{@headerClass}}
				/>

				{{#if this.frozenRows.length}}
					<TableBody
						@rows={{this.frozenRows}}
						@columns={{@columns}}
						@columnWidths={{@columnWidths}}
						@dataKey={{@dataKey}}
						@selectionMode={{@selectionMode}}
						@selection={{@selection}}
						@expandedRows={{@expandedRows}}
						@editMode={{@editMode}}
						@editingRows={{@editingRows}}
						@editingCell={{@editingCell}}
						@rowClassName={{@rowClassName}}
						@showManageColumns={{@showManageColumns}}
						@hasOptionCell={{@hasOptionCell}}
						@emptyMessage={{@emptyMessage}}
						@onSelectionChange={{@onSelectionChange}}
						@onRowToggle={{@onRowToggle}}
						@onRowEditInit={{@onRowEditInit}}
						@onRowEditSave={{@onRowEditSave}}
						@onRowEditCancel={{@onRowEditCancel}}
						@onCellEditInit={{@onCellEditInit}}
						@onCellEditComplete={{@onCellEditComplete}}
						@onRowReorder={{@onRowReorder}}
						@onRowClick={{@onRowClick}}
						@onRowDoubleClick={{@onRowDoubleClick}}
						@onContextMenu={{@onContextMenu}}
					>
						<:rowExpansion as |row|>{{yield row to="rowExpansion"}}</:rowExpansion>
						<:optionCell as |row|>{{yield row to="optionCell"}}</:optionCell>
						<:emptyMessage>{{yield to="emptyMessage"}}</:emptyMessage>
					</TableBody>
				{{/if}}

				<TableBody
					@rows={{@rows}}
					@columns={{@columns}}
					@columnWidths={{@columnWidths}}
					@dataKey={{@dataKey}}
					@loading={{@loading}}
					@selectionMode={{@selectionMode}}
					@selection={{@selection}}
					@expandedRows={{@expandedRows}}
					@editMode={{@editMode}}
					@editingRows={{@editingRows}}
					@editingCell={{@editingCell}}
					@rowClassName={{@rowClassName}}
					@showManageColumns={{@showManageColumns}}
					@hasOptionCell={{@hasOptionCell}}
					@emptyMessage={{@emptyMessage}}
					@onSelectionChange={{@onSelectionChange}}
					@onRowToggle={{@onRowToggle}}
					@onRowEditInit={{@onRowEditInit}}
					@onRowEditSave={{@onRowEditSave}}
					@onRowEditCancel={{@onRowEditCancel}}
					@onCellEditInit={{@onCellEditInit}}
					@onCellEditComplete={{@onCellEditComplete}}
					@onRowReorder={{@onRowReorder}}
					@onRowClick={{@onRowClick}}
					@onRowDoubleClick={{@onRowDoubleClick}}
					@onContextMenu={{@onContextMenu}}
				>
					<:rowExpansion as |row|>{{yield row to="rowExpansion"}}</:rowExpansion>
					<:optionCell as |row|>{{yield row to="optionCell"}}</:optionCell>
					<:emptyMessage>{{yield to="emptyMessage"}}</:emptyMessage>
				</TableBody>

				<TableFooter
					@columns={{@columns}}
					@showManageColumns={{@showManageColumns}}
					@hasOptionCell={{@hasOptionCell}}
				/>
			</table>
		</div>
	</template>
}
