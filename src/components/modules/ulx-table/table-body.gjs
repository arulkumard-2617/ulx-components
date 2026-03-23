import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import eq from "ember-truth-helpers/helpers/eq";
import and from "ember-truth-helpers/helpers/and";
import or from "ember-truth-helpers/helpers/or";
import not from "ember-truth-helpers/helpers/not";
import UlxCheckbox from "../../elements/ulx-checkbox/index.gjs";
import UlxRadio from "../../elements/ulx-radio/index.gjs";
import UlxButton from "../../elements/ulx-button/index.gjs";
import UlxIconButton from "../../elements/ulx-icon-button/index.gjs";
import UlxIcon from "../../elements/ulx-icon/index.gjs";
import { getFieldValue } from "./utils.js";
import { t } from "../../../utils/i18n.js";

/**
 * Internal tbody for UlxTable.
 * Handles: row rendering, custom body components, row selection, row expansion,
 * row editing, row groups, conditional row classes, context menu, row reorder,
 * and WCAG-compliant keyboard grid navigation.
 */
export default class TableBody extends Component {
	@action
	getRowId(row, index) {
		const { dataKey } = this.args;
		return dataKey ? String(getFieldValue(row, dataKey)) : String(index);
	}

	// ─── O(1) lookup Sets for selection / expansion / editing ─────────────────
	get selectedKeySet() {
		const { selection, selectionMode, dataKey } = this.args;
		if (!selection || !dataKey) return null;
		if (selectionMode === "single") {
			const key = getFieldValue(selection, dataKey);
			return key != null ? new Set([String(key)]) : new Set();
		}
		if (Array.isArray(selection)) {
			return new Set(selection.map((s) => String(getFieldValue(s, dataKey))));
		}
		return null;
	}

	get expandedKeySet() {
		const { expandedRows, dataKey } = this.args;
		if (!expandedRows || !dataKey) return null;
		if (Array.isArray(expandedRows)) {
			return new Set(expandedRows.map((r) => String(getFieldValue(r, dataKey))));
		}
		if (typeof expandedRows === "object") {
			return new Set(
				Object.entries(expandedRows)
					.filter(([, v]) => v)
					.map(([k]) => k)
			);
		}
		return null;
	}

	get editingKeySet() {
		const { editingRows, dataKey } = this.args;
		if (!editingRows || !dataKey) return null;
		if (Array.isArray(editingRows)) {
			return new Set(editingRows.map((r) => String(getFieldValue(r, dataKey))));
		}
		if (typeof editingRows === "object") {
			return new Set(
				Object.entries(editingRows)
					.filter(([, v]) => v)
					.map(([k]) => k)
			);
		}
		return null;
	}

	@action
	isRowSelected(row) {
		const { selection, selectionMode, dataKey } = this.args;
		if (!selection) return false;
		if (dataKey && this.selectedKeySet) {
			return this.selectedKeySet.has(String(getFieldValue(row, dataKey)));
		}
		if (selectionMode === "single") return selection === row;
		if (Array.isArray(selection)) return selection.includes(row);
		return false;
	}

	@action
	isRowExpanded(row) {
		const { expandedRows, dataKey } = this.args;
		if (!expandedRows) return false;
		if (dataKey && this.expandedKeySet) {
			return this.expandedKeySet.has(String(getFieldValue(row, dataKey)));
		}
		if (Array.isArray(expandedRows)) return expandedRows.includes(row);
		return false;
	}

	@action
	isRowEditing(row) {
		const { editingRows, dataKey } = this.args;
		if (!editingRows) return false;
		if (dataKey && this.editingKeySet) {
			return this.editingKeySet.has(String(getFieldValue(row, dataKey)));
		}
		if (Array.isArray(editingRows)) return editingRows.includes(row);
		return false;
	}

	@action
	isCellEditing(row, col) {
		const { editingCell } = this.args;
		if (!editingCell) return false;
		return editingCell.row === row && editingCell.field === col.field;
	}

	// ARIA spec: aria-rowindex is 1-based
	rowAriaIndex(index) {
		return index + 1;
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
		const parts = ["column-body-cell"];
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
		const width = this.args.columnWidths?.[col.field];
		if (typeof width === "number") {
			parts.push(`min-width: ${width}px`);
			parts.push(`width: ${width}px`);
		}
		return parts.join("; ") || undefined;
	}

	@action
	cellValue(row, col) {
		if (!col.field) return "";
		return getFieldValue(row, col.field);
	}

	get colCount() {
		const { columns = [], hasOptionCell } = this.args;
		return columns.length + (hasOptionCell ? 1 : 0);
	}

	get hasRowReorder() {
		return this.args.columns?.some((c) => c.rowReorder) ?? false;
	}

	// ─── Keyboard navigation (WCAG role="grid") ───────────────────────────────
	@action
	handleKeydown(event) {
		const { key, target } = event;
		const tbody = target?.closest?.("tbody");
		if (!tbody) return;

		const isNavKey = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End"].includes(
			key
		);
		if (!isNavKey && key !== "Enter" && key !== " ") return;

		const cell = target?.closest?.("td");
		if (!cell) return;
		const row = cell.closest("tr");
		if (!row) return;

		const allRows = [...tbody.querySelectorAll("tr.datatable-body-row")];
		const rowIndex = allRows.indexOf(row);
		const cells = [...row.querySelectorAll("td")];
		const cellIndex = cells.indexOf(cell);

		if (rowIndex < 0 || cellIndex < 0) return;

		let targetRow = rowIndex;
		let targetCell = cellIndex;

		switch (key) {
			case "ArrowUp":
				targetRow = Math.max(0, rowIndex - 1);
				break;
			case "ArrowDown":
				targetRow = Math.min(allRows.length - 1, rowIndex + 1);
				break;
			case "ArrowLeft":
				targetCell = Math.max(0, cellIndex - 1);
				break;
			case "ArrowRight":
				targetCell = Math.min(cells.length - 1, cellIndex + 1);
				break;
			case "Home":
				targetCell = event.ctrlKey ? ((targetRow = 0), 0) : 0;
				break;
			case "End":
				targetCell = event.ctrlKey
					? ((targetRow = allRows.length - 1), cells.length - 1)
					: cells.length - 1;
				break;
			case "Enter":
			case " ":
				this._activateCell(cell, event);
				return;
			default:
				return;
		}

		event.preventDefault();
		const nextRow = allRows[targetRow];
		if (!nextRow) return;
		const nextCells = [...nextRow.querySelectorAll("td")];
		const nextCell = nextCells[Math.min(targetCell, nextCells.length - 1)];
		if (nextCell) {
			nextCell.setAttribute("tabindex", "0");
			cell.setAttribute("tabindex", "-1");
			nextCell.focus();
		}
	}

	_activateCell(cell, event) {
		const focusable = cell.querySelector('button, input, [tabindex="0"], a, select, textarea');
		if (focusable) {
			event.preventDefault();
			focusable.focus();
			if (focusable.tagName === "BUTTON" || focusable.tagName === "A") {
				focusable.click();
			}
		}
	}

	_getRowContextFromEvent(event) {
		const rowElement = event.target?.closest?.("tr[data-row-index]");
		if (!rowElement) return null;

		const index = Number(rowElement.dataset.rowIndex);
		if (Number.isNaN(index)) return null;

		const rows = this.args.rows ?? [];
		const row = rows[index];
		if (row === undefined) return null;

		return { row, index };
	}

	@action
	handleDelegatedClick(event) {
		const rowContext = this._getRowContextFromEvent(event);
		if (!rowContext) return;

		const cellElement = event.target?.closest?.("td[data-col-index]");
		if (cellElement) {
			const colIndex = Number(cellElement.dataset.colIndex);
			const columns = this.args.columns ?? [];
			const col = columns[colIndex];
			col && this.handleCellClick(rowContext.row, col, event);
		}

		this.handleRowClick(rowContext.row, rowContext.index, event);
	}

	@action
	handleDelegatedRowDoubleClick(event) {
		const rowContext = this._getRowContextFromEvent(event);
		rowContext && this.handleRowDoubleClick(rowContext.row, rowContext.index, event);
	}

	@action
	handleDelegatedRowContextMenu(event) {
		const rowContext = this._getRowContextFromEvent(event);
		rowContext && this.handleRowContextMenu(rowContext.row, rowContext.index, event);
	}

	@action
	handleDelegatedDragStart(event) {
		if (!this.hasRowReorder) return;

		const rowContext = this._getRowContextFromEvent(event);
		rowContext && this.handleDragStart(rowContext.index, event);
	}

	@action
	handleDelegatedDragEnter(event) {
		if (!this.hasRowReorder) return;

		const rowContext = this._getRowContextFromEvent(event);
		rowContext && this.handleDragEnter(rowContext.index, event);
	}

	@action
	handleDelegatedDragOver(event) {
		if (!this.hasRowReorder) return;

		const rowContext = this._getRowContextFromEvent(event);
		rowContext && this.handleDragOver(rowContext.index, event);
	}

	@action
	handleDelegatedDrop(event) {
		if (!this.hasRowReorder) return;

		const rowContext = this._getRowContextFromEvent(event);
		rowContext && this.handleDrop(rowContext.index, event);
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
	stopPropagation(event) {
		event.stopPropagation();
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
	handleDragEnter(index, event) {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
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
		<tbody
			class="datatable-tbody"
			{{on "keydown" this.handleKeydown}}
			{{on "click" this.handleDelegatedClick}}
			{{on "dblclick" this.handleDelegatedRowDoubleClick}}
			{{on "contextmenu" this.handleDelegatedRowContextMenu}}
			{{on "dragstart" this.handleDelegatedDragStart}}
			{{on "dragenter" this.handleDelegatedDragEnter}}
			{{on "dragover" this.handleDelegatedDragOver}}
			{{on "drop" this.handleDelegatedDrop}}
		>
			{{#if (and (not @loading) (eq @rows.length 0))}}
				<tr class="datatable-row" role="row">
					<td
						class="column-body-cell datatable-empty-message"
						colspan={{this.colCount}}
						role="gridcell"
					>
						{{#if (has-block "emptyMessage")}}
							{{yield to="emptyMessage"}}
						{{else}}
							{{or @emptyMessage (t "msg.table.no.records")}}
						{{/if}}
					</td>
				</tr>
			{{else}}
				{{#each @rows as |row index|}}
					<tr
						data-row-index={{index}}
						class={{this.rowClass row index}}
						role="row"
						aria-selected={{this.isRowSelected row}}
						aria-rowindex={{this.rowAriaIndex index}}
						draggable={{if this.hasRowReorder "true"}}
					>
						{{#each @columns as |col colIdx|}}
							{{#if col.selectionMode}}
								<td
									class="column-body-cell selection"
									role="gridcell"
									style="width: 3rem"
									tabindex={{if (eq colIdx 0) "0" "-1"}}
									{{on "click" this.stopPropagation}}
								>
									{{#if (eq col.selectionMode "multiple")}}
										<UlxCheckbox
											@checked={{this.isRowSelected row}}
											@onCheckedChange={{fn this.handleCheckboxChange row}}
											aria-label={{t "aria.table.select.row" index=index}}
										/>
									{{else if (eq col.selectionMode "single")}}
										<UlxRadio
											@checked={{this.isRowSelected row}}
											@onCheckedChange={{fn this.handleRadioChange row}}
											aria-label={{t "aria.table.select.row" index=index}}
										/>
									{{/if}}
								</td>
							{{else if col.expander}}
								<td
									class="column-body-cell"
									role="gridcell"
									style="width: 3rem"
									tabindex={{if (eq colIdx 0) "0" "-1"}}
								>
									<UlxIconButton
										@text={{true}}
										@variant="secondary"
										@iconLeft={{if (this.isRowExpanded row) "down-arrow-icon" "right-arrow-icon"}}
										@iconComponentClass="bs-icons1"
										@iconSize="s20"
										@customClass="datatable-row-toggler"
										@onClick={{fn this.handleRowToggle row}}
										aria-expanded={{this.isRowExpanded row}}
										aria-label={{if
											(this.isRowExpanded row)
											(t "aria.table.collapse.row")
											(t "aria.table.expand.row")
										}}
									/>
								</td>
							{{else if col.rowReorder}}
								<td
									class="column-body-cell"
									role="gridcell"
									style="width: 3rem; cursor: grab"
									tabindex={{if (eq colIdx 0) "0" "-1"}}
									aria-label={{t "aria.table.drag.reorder"}}
								>
									<UlxIcon
										@componentClass="bs-icons1"
										@type="font"
										@iconName="dragdrop-icon1"
										@size="s18"
										aria-hidden="true"
									/>
								</td>
							{{else if col.rowEditor}}
								<td
									class="column-body-cell"
									role="gridcell"
									style="width: 6rem"
									tabindex={{if (eq colIdx 0) "0" "-1"}}
								>
									{{#if (this.isRowEditing row)}}
										<div class="datatable-row-editor editing" role="group">
											<UlxIconButton
												@text={{true}}
												@variant="success"
												@iconLeft="tick-thick-icon"
												@iconSize="s20"
												@customClass="datatable-row-save-button"
												@onClick={{fn this.handleRowEditSave row}}
												aria-label={{t "aria.table.save.row"}}
											/>
											<UlxIconButton
												@text={{true}}
												@variant="danger"
												@iconLeft="close-thick-icon"
												@iconSize="s18"
												@customClass="datatable-row-cancel-button"
												@onClick={{fn this.handleRowEditCancel row}}
												aria-label={{t "aria.table.cancel.editing"}}
											/>
										</div>
									{{else}}
										<div class="datatable-row-editor">
											<UlxIconButton
												@text={{true}}
												@variant="secondary"
												@iconLeft="edit-icon"
												@iconComponentClass="bs-icons1"
												@iconSize="s18"
												@customClass="datatable-row-editor-init-button"
												@onClick={{fn this.handleRowEditInit row}}
												aria-label={{t "aria.table.edit.row"}}
											/>
										</div>
									{{/if}}
								</td>
							{{else}}
								<td
									data-col-index={{colIdx}}
									class={{this.bodyCellClass col row}}
									role="gridcell"
									style={{this.bodyCellStyle col}}
									tabindex={{if (eq colIdx 0) "0" "-1"}}
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

						{{#if @hasOptionCell}}
							<td
								class="column-body-cell datatable-option-cell"
								role="gridcell"
								style="width: 6rem"
								tabindex="-1"
							>
								{{yield row to="optionCell"}}
							</td>
						{{/if}}
					</tr>

					{{#if (this.isRowExpanded row)}}
						<tr class="datatable-row-expansion expanded" role="row">
							<td colspan={{this.colCount}} class="column-body-cell" role="gridcell">
								{{yield row to="rowExpansion"}}
							</td>
						</tr>
					{{/if}}
				{{/each}}
			{{/if}}
		</tbody>
	</template>
}
