import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import eq from "ember-truth-helpers/helpers/eq";
import and from "ember-truth-helpers/helpers/and";
import or from "ember-truth-helpers/helpers/or";
import not from "ember-truth-helpers/helpers/not";
import UlxCheckbox from "../../elements/ulx-checkbox/index.gjs";
import { getFieldValue } from "./utils.js";

/**
 * Internal tbody for UlxTable.
 * Handles: row rendering, custom body components, row selection, row expansion,
 * row editing, row groups, conditional row classes, context menu, row reorder.
 */
export default class TableBody extends Component {
	@action
	getRowId(row, index) {
		const { dataKey } = this.args;
		return dataKey ? String(getFieldValue(row, dataKey)) : String(index);
	}

	@action
	isRowSelected(row) {
		const { selection, selectionMode, dataKey } = this.args;
		if (!selection) return false;
		if (selectionMode === "single") {
			if (!dataKey) return selection === row;
			return getFieldValue(selection, dataKey) === getFieldValue(row, dataKey);
		}
		if (selectionMode === "multiple" || selectionMode === "checkbox" || selectionMode === "radio") {
			if (!Array.isArray(selection)) return false;
			if (!dataKey) return selection.includes(row);
			const rowKey = getFieldValue(row, dataKey);
			return selection.some((s) => getFieldValue(s, dataKey) === rowKey);
		}
		return false;
	}

	@action
	isRowExpanded(row) {
		const { expandedRows, dataKey } = this.args;
		if (!expandedRows) return false;
		if (Array.isArray(expandedRows)) {
			if (!dataKey) return expandedRows.includes(row);
			const rowKey = getFieldValue(row, dataKey);
			return expandedRows.some((r) => getFieldValue(r, dataKey) === rowKey);
		}
		if (typeof expandedRows === "object") {
			const rowKey = dataKey ? String(getFieldValue(row, dataKey)) : null;
			return rowKey ? Boolean(expandedRows[rowKey]) : false;
		}
		return false;
	}

	@action
	isRowEditing(row) {
		const { editingRows, dataKey } = this.args;
		if (!editingRows) return false;
		if (Array.isArray(editingRows)) {
			if (!dataKey) return editingRows.includes(row);
			const rowKey = getFieldValue(row, dataKey);
			return editingRows.some((r) => getFieldValue(r, dataKey) === rowKey);
		}
		if (typeof editingRows === "object") {
			const rowKey = dataKey ? String(getFieldValue(row, dataKey)) : null;
			return rowKey ? Boolean(editingRows[rowKey]) : false;
		}
		return false;
	}

	@action
	isCellEditing(row, col) {
		const { editingCell } = this.args;
		if (!editingCell) return false;
		return editingCell.row === row && editingCell.field === col.field;
	}

	@action
	rowClass(row, index) {
		const parts = ["datatable-body-row"];
		this.isRowSelected(row) && parts.push("selected");
		this.isRowExpanded(row) && parts.push("expanded");
		this.isRowEditing(row) && parts.push("editing");
		const { rowClassName, selectionMode } = this.args;
		(selectionMode === "single" ||
			selectionMode === "multiple" ||
			selectionMode === "checkbox" ||
			selectionMode === "radio") &&
			parts.push("row-selection");
		if (typeof rowClassName === "function") {
			const extra = rowClassName(row, index);
			extra && parts.push(extra);
		} else if (typeof rowClassName === "string") {
			parts.push(rowClassName);
		}
		return parts.filter(Boolean).join(" ");
	}

	@action
	bodyCellClass(col, row) {
		const parts = ["datatable-flex-col-body-cell"];
		this.isRowSelected(row) && this.args.selectionMode !== "cell" && parts.push("selected");
		col.frozen && parts.push(`frozen-${col.alignFrozen ?? "left"}`);
		col.className && parts.push(col.className);
		this.args.editMode === "cell" && col.editor && parts.push("editable");
		this.isCellEditing(row, col) && parts.push("editing");
		return parts.filter(Boolean).join(" ");
	}

	@action
	bodyCellStyle(col) {
		const parts = [];
		col.style && parts.push(col.style);
		if (col.frozen) {
			const side = col.alignFrozen ?? "left";
			parts.push(`${side}: ${col.frozenOffset ?? "0px"}`);
		}
		if (col.align) parts.push(`text-align: ${col.align}`);
		return parts.join("; ") || undefined;
	}

	@action
	cellValue(row, col) {
		if (!col.field) return "";
		return getFieldValue(row, col.field);
	}

	get colCount() {
		const { columns = [], showManageColumns } = this.args;
		return columns.length + (showManageColumns ? 1 : 0);
	}

	get hasRowReorder() {
		return this.args.columns?.some((c) => c.rowReorder) ?? false;
	}

	@action
	handleRowClick(row, index, event) {
		const { selectionMode, onRowClick, onSelectionChange, dataKey, selection } = this.args;
		onRowClick?.({ row, index, originalEvent: event });
		if (!selectionMode || selectionMode === "cell") return;
		if (selectionMode === "checkbox") return;
		if (selectionMode === "single") {
			onSelectionChange?.(row);
		} else if (selectionMode === "multiple" || selectionMode === "radio") {
			const current = Array.isArray(selection) ? selection : [];
			const isSelected = this.isRowSelected(row);
			if (isSelected) {
				const updated = current.filter((s) => {
					if (!dataKey) return s !== row;
					return getFieldValue(s, dataKey) !== getFieldValue(row, dataKey);
				});
				onSelectionChange?.(updated);
			} else {
				if (event?.ctrlKey || event?.metaKey || event?.shiftKey) {
					onSelectionChange?.([...current, row]);
				} else {
					onSelectionChange?.([row]);
				}
			}
		}
	}

	@action
	handleRowDoubleClick(row, index, event) {
		this.args.onRowDoubleClick?.({ row, index, originalEvent: event });
	}

	@action
	handleRowContextMenu(row, index, event) {
		if (this.args.onContextMenu) {
			event?.preventDefault?.();
			this.args.onContextMenu?.({ row, index, originalEvent: event });
		}
	}

	@action
	handleCheckboxChange(row, checked) {
		const { onSelectionChange, selection = [], dataKey } = this.args;
		if (checked) {
			onSelectionChange?.([...selection, row]);
		} else {
			const updated = selection.filter((s) => {
				if (!dataKey) return s !== row;
				return getFieldValue(s, dataKey) !== getFieldValue(row, dataKey);
			});
			onSelectionChange?.(updated);
		}
	}

	@action
	handleRadioChange(row) {
		this.args.onSelectionChange?.([row]);
	}

	@action
	handleRowToggle(row) {
		const { expandedRows, onRowToggle, dataKey } = this.args;
		const isExp = this.isRowExpanded(row);
		if (Array.isArray(expandedRows) || !expandedRows) {
			const current = Array.isArray(expandedRows) ? expandedRows : [];
			if (isExp) {
				const updated = current.filter((r) => {
					if (!dataKey) return r !== row;
					return getFieldValue(r, dataKey) !== getFieldValue(row, dataKey);
				});
				onRowToggle?.({ data: updated });
			} else {
				onRowToggle?.({ data: [...current, row] });
			}
		} else {
			// Object map keyed by dataKey
			const rowKey = dataKey ? String(getFieldValue(row, dataKey)) : null;
			if (!rowKey) return;
			const updated = { ...expandedRows };
			if (isExp) {
				delete updated[rowKey];
			} else {
				updated[rowKey] = true;
			}
			onRowToggle?.({ data: updated });
		}
	}

	@action
	handleCellClick(row, col, event) {
		if (this.args.editMode === "cell" && col.editor) {
			this.args.onCellEditInit?.({ row, field: col.field, originalEvent: event });
		}
		if (this.args.selectionMode === "cell") {
			this.args.onSelectionChange?.({ row, field: col.field });
		}
	}

	@action
	handleRowEditInit(row, event) {
		this.args.onRowEditInit?.({ row, originalEvent: event });
	}

	@action
	handleRowEditSave(row, event) {
		this.args.onRowEditSave?.({ row, originalEvent: event });
	}

	@action
	handleRowEditCancel(row, event) {
		this.args.onRowEditCancel?.({ row, originalEvent: event });
	}

	@action
	handleDragStart(index, event) {
		event.dataTransfer.effectAllowed = "move";
		event.dataTransfer.setData("text/plain", String(index));
		this.args.onRowDragStart?.({ index, originalEvent: event });
	}

	@action
	handleDragOver(index, event) {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	}

	@action
	handleDrop(index, event) {
		event.preventDefault();
		const fromIndex = Number(event.dataTransfer.getData("text/plain"));
		if (!isNaN(fromIndex) && fromIndex !== index) {
			this.args.onRowReorder?.({ dragIndex: fromIndex, dropIndex: index });
		}
	}

	<template>
		<tbody class="datatable-tbody">
			{{#if (and (not @loading) (eq @rows.length 0))}}
				<tr class="datatable-row">
					<td
						class="datatable-flex-col-body-cell datatable-empty-message"
						colspan={{this.colCount}}
					>
						{{#if (has-block "emptyMessage")}}
							{{yield to="emptyMessage"}}
						{{else}}
							{{or @emptyMessage "No records found."}}
						{{/if}}
					</td>
				</tr>
			{{else}}
				{{#each @rows as |row index|}}
					<tr
						class={{this.rowClass row index}}
						aria-selected={{this.isRowSelected row}}
						draggable={{if this.hasRowReorder "true"}}
						{{on "click" (fn this.handleRowClick row index)}}
						{{on "dblclick" (fn this.handleRowDoubleClick row index)}}
						{{on "contextmenu" (fn this.handleRowContextMenu row index)}}
						{{on "dragstart" (fn this.handleDragStart index)}}
						{{on "dragover" (fn this.handleDragOver index)}}
						{{on "drop" (fn this.handleDrop index)}}
					>
						{{#each @columns as |col|}}
							{{#if col.selectionMode}}
								<td class="datatable-flex-col-body-cell selection" style="width: 3rem">
									{{#if (eq col.selectionMode "multiple")}}
										<UlxCheckbox
											@checked={{this.isRowSelected row}}
											@onChange={{fn this.handleCheckboxChange row}}
											aria-label="Select row {{index}}"
										/>
									{{else if (eq col.selectionMode "single")}}
										<input
											type="radio"
											checked={{this.isRowSelected row}}
											aria-label="Select row {{index}}"
											{{on "change" (fn this.handleRadioChange row)}}
										/>
									{{/if}}
								</td>
							{{else if col.expander}}
								<td class="datatable-flex-col-body-cell" style="width: 3rem">
									<button
										type="button"
										class="datatable-row-toggler"
										aria-expanded={{this.isRowExpanded row}}
										aria-label={{if (this.isRowExpanded row) "Collapse row" "Expand row"}}
										{{on "click" (fn this.handleRowToggle row)}}
									>
										<i
											class="bs-icons1
												{{if (this.isRowExpanded row) 'chevron-down' 'chevron-right'}}
												s14"
											aria-hidden="true"
										></i>
									</button>
								</td>
							{{else if col.rowReorder}}
								<td
									class="datatable-flex-col-body-cell"
									style="width: 3rem; cursor: grab"
									aria-label="Drag to reorder"
								>
									<i class="bs-icons1 grip-vertical s16" aria-hidden="true"></i>
								</td>
							{{else if col.rowEditor}}
								<td class="datatable-flex-col-body-cell" style="width: 6rem">
									{{#if (this.isRowEditing row)}}
										<div class="datatable-row-editor editing">
											<button
												type="button"
												class="datatable-row-save-button"
												aria-label="Save row"
												{{on "click" (fn this.handleRowEditSave row)}}
											>
												<i class="bs-icons1 check s14" aria-hidden="true"></i>
											</button>
											<button
												type="button"
												class="datatable-row-cancel-button"
												aria-label="Cancel editing"
												{{on "click" (fn this.handleRowEditCancel row)}}
											>
												<i class="bs-icons1 x s14" aria-hidden="true"></i>
											</button>
										</div>
									{{else}}
										<div class="datatable-row-editor">
											<button
												type="button"
												class="datatable-row-editor-init-button"
												aria-label="Edit row"
												{{on "click" (fn this.handleRowEditInit row)}}
											>
												<i class="bs-icons1 pencil s14" aria-hidden="true"></i>
											</button>
										</div>
									{{/if}}
								</td>
							{{else}}
								<td
									class={{this.bodyCellClass col row}}
									style={{this.bodyCellStyle col}}
									{{on "click" (fn this.handleCellClick row col)}}
								>
									{{#if (and (eq @editMode "cell") col.editor (this.isCellEditing row col))}}
										<col.editor
											@row={{row}}
											@field={{col.field}}
											@value={{this.cellValue row col}}
											@onChange={{@onCellEditComplete}}
										/>
									{{else if (and (eq @editMode "row") col.editor (this.isRowEditing row))}}
										<col.editor
											@row={{row}}
											@field={{col.field}}
											@value={{this.cellValue row col}}
											@onChange={{@onCellEditComplete}}
										/>
									{{else if col.body}}
										<col.body @row={{row}} @index={{index}} @value={{this.cellValue row col}} />
									{{else}}
										{{this.cellValue row col}}
									{{/if}}
								</td>
							{{/if}}
						{{/each}}

						{{#if @showManageColumns}}
							<td class="datatable-flex-col-body-cell" style="width: 2.5rem"></td>
						{{/if}}
					</tr>

					{{#if (this.isRowExpanded row)}}
						<tr class="datatable-row-expansion expanded">
							<td colspan={{this.colCount}} class="datatable-flex-col-body-cell">
								{{yield row to="rowExpansion"}}
							</td>
						</tr>
					{{/if}}
				{{/each}}
			{{/if}}
		</tbody>
	</template>
}
