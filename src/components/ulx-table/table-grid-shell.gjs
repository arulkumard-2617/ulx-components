import Component from "@glimmer/component";
import TableHeader from "./table-header.gjs";
import TableBody from "./table-body.gjs";
import TableFooter from "./table-footer.gjs";
import TableEmptyState from "./table-empty-state.gjs";

export default class TableGridShell extends Component {
	get frozenRows() {
		return this.args.frozenRows ?? [];
	}

	<template>
		<div class="datatable-wrapper {{if @scrollable 'scrollable'}}" style={{@wrapperStyle}}>
			<table class={{@tableClass}} style={{@tableStyle}} role="grid">
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
						<:emptyMessage>
							<TableEmptyState
								@headerText={{@emptyStateHeaderText}}
								@subHeaderText={{@emptyStateSubHeaderText}}
								@iconName={{@emptyStateIconName}}
							>
								<:emptyMessage>{{yield to="emptyMessage"}}</:emptyMessage>
							</TableEmptyState>
						</:emptyMessage>
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
					<:emptyMessage>
						<TableEmptyState
							@headerText={{@emptyStateHeaderText}}
							@subHeaderText={{@emptyStateSubHeaderText}}
							@iconName={{@emptyStateIconName}}
						>
							<:emptyMessage>{{yield to="emptyMessage"}}</:emptyMessage>
						</TableEmptyState>
					</:emptyMessage>
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
