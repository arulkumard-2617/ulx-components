import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { modifier } from "ember-modifier";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import not from "ember-truth-helpers/helpers/not";
import UlxCheckbox from "../../elements/ulx-checkbox/index.gjs";
import UlxButton from "../../elements/ulx-button/index.gjs";
import UlxIcon from "../../elements/ulx-icon/index.gjs";
import { t } from "../../../utils/i18n.js";
import { isSpecialColumn } from "./utils.js";

/**
 * Manage Columns panel for UlxTable.
 * Allows hiding/showing columns and reordering via drag-and-drop.
 * Mandatory columns that cannot be disabled: set column `manageable: false`;
 * they appear in the list as locked (checkbox disabled, lock icon) and cannot be toggled off.
 *
 * @param {Array} allColumns - full flex-col list (including hidden ones)
 * @param {Array} visibleColumns - currently visible columns
 * @param {Function} onApply - ({ columns }) => void  — called with updated visible columns
 * @param {Function} onClose - () => void
 * @param {Function} onReset - () => void
 * @param {Function} [registerRef] - (instance | null) => void — called with this component instance on mount, null on teardown
 */
export default class ManageColumns extends Component {
	registerRefModifier = modifier(() => {
		this.args.registerRef?.(this);
		return () => {
			this.args.registerRef?.(null);
		};
	});
	@tracked localOrder = null;
	@tracked localVisible = null;
	@tracked dragFromIndex = null;
	@tracked liveMessage = "";

	get manageableColumns() {
		return (
			this.args.allColumns?.filter((c) => {
				return c.field && !isSpecialColumn(c);
			}) ?? []
		);
	}

	get orderedColumns() {
		return this.localOrder ?? this.manageableColumns;
	}

	get visibleSet() {
		if (this.localVisible) return this.localVisible;
		const visibleFields = new Set(this.args.visibleColumns?.map((c) => c.field));
		return new Set(
			this.manageableColumns.filter((c) => visibleFields.has(c.field)).map((c) => c.field)
		);
	}

	@action
	isVisible(col) {
		return this.visibleSet.has(col.field);
	}

	@action
	isLocked(col) {
		return col.manageable === false;
	}

	@action
	toggleColumn(col) {
		if (this.isLocked(col)) return;
		const updated = new Set(this.visibleSet);
		if (updated.has(col.field)) {
			updated.delete(col.field);
		} else {
			updated.add(col.field);
		}
		this.localVisible = updated;
	}

	@action
	handleApply() {
		const orderedVisible = this.orderedColumns.filter((c) => this.visibleSet.has(c.field));
		const lockedCols = this.args.allColumns?.filter((c) => c.manageable === false) ?? [];
		const nonManageableCols = this.args.allColumns?.filter((c) => isSpecialColumn(c)) ?? [];
		const result = [...nonManageableCols, ...lockedCols, ...orderedVisible];
		this.args.onApply?.({ columns: result });
		this.args.onClose?.();
	}

	@action
	handleReset() {
		this.localOrder = null;
		this.localVisible = null;
		this.args.onReset?.();
	}

	@action
	handleDragStart(index, event) {
		this.dragFromIndex = index;
		event.dataTransfer.effectAllowed = "move";
		event.dataTransfer.setData("text/plain", String(index));
	}

	@action
	handleDragEnter(event) {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	}

	@action
	handleDragOver(event) {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	}

	@action
	handleDrop(toIndex, event) {
		event.preventDefault();
		const fromIndex = this.dragFromIndex ?? Number(event.dataTransfer.getData("text/plain"));
		if (Number.isNaN(fromIndex) || fromIndex === toIndex) return;
		this.reorderColumns(fromIndex, toIndex);
		this.dragFromIndex = null;
	}

	@action
	handleDragEnd() {
		this.dragFromIndex = null;
	}

	@action
	canMoveUp(col, index) {
		return !this.isLocked(col) && index > 0;
	}

	@action
	canMoveDown(col, index) {
		return !this.isLocked(col) && index < this.orderedColumns.length - 1;
	}

	@action
	handleMoveUp(col, index) {
		if (!this.canMoveUp(col, index)) return;
		this.reorderColumns(index, index - 1);
	}

	@action
	handleMoveDown(col, index) {
		if (!this.canMoveDown(col, index)) return;
		this.reorderColumns(index, index + 1);
	}

	@action
	handleItemKeyDown(col, index, event) {
		if (event.target !== event.currentTarget || this.isLocked(col)) return;
		if (event.key === "ArrowUp") {
			event.preventDefault();
			this.handleMoveUp(col, index);
			return;
		}
		if (event.key === "ArrowDown") {
			event.preventDefault();
			this.handleMoveDown(col, index);
		}
	}

	reorderColumns(fromIndex, toIndex) {
		const cols = [...this.orderedColumns];
		const [moved] = cols.splice(fromIndex, 1);
		cols.splice(toIndex, 0, moved);
		this.localOrder = cols;
		this.liveMessage = t("msg.table.column.moved", {
			header: moved?.header ?? "",
			position: toIndex + 1
		});
	}

	<template>
		<div class="datatable-manage-columns-panel" {{this.registerRefModifier}}>
			<div role="status" aria-live="polite" aria-atomic="true" class="datatable-manage-columns-live">{{this.liveMessage}}</div>
			<ul class="datatable-manage-columns-list" role="list">
				{{#each this.orderedColumns as |col index|}}
					<li
						class="datatable-manage-columns-item {{if (this.isLocked col) 'locked'}}"
						draggable={{if (not (this.isLocked col)) "true"}}
						tabindex={{if (not (this.isLocked col)) "0" "-1"}}
						{{on "dragstart" (fn this.handleDragStart index)}}
						{{on "dragenter" this.handleDragEnter}}
						{{on "dragover" this.handleDragOver}}
						{{on "drop" (fn this.handleDrop index)}}
						{{on "dragend" this.handleDragEnd}}
						{{on "keydown" (fn this.handleItemKeyDown col index)}}
					>
						<span class="datatable-manage-columns-drag-handle" aria-hidden="true">
							<UlxIcon
								@componentClass="bs-icons1"
								@type="font"
								@iconName="dragdrop-icon1"
								@size="s14"
							/>
						</span>
						<UlxCheckbox
							@checked={{this.isVisible col}}
							@disabled={{this.isLocked col}}
							@itemLabel={{col.header}}
							@onChange={{fn this.toggleColumn col}}
							@customClass="datatable-manage-columns-label"
							aria-label={{t "aria.table.toggle.column" header=col.header}}
						/>
						<UlxButton
							@variant="text"
							@label={{t "lbl.move.up"}}
							@disabled={{not (this.canMoveUp col index)}}
							@onClick={{fn this.handleMoveUp col index}}
							aria-label={{t "aria.table.move.column.up" header=col.header}}
						/>
						<UlxButton
							@variant="text"
							@label={{t "lbl.move.down"}}
							@disabled={{not (this.canMoveDown col index)}}
							@onClick={{fn this.handleMoveDown col index}}
							aria-label={{t "aria.table.move.column.down" header=col.header}}
						/>
						{{#if (this.isLocked col)}}
							<span
								class="datatable-manage-columns-locked-icon"
								aria-label={{t "aria.table.column.locked"}}
							>
								<UlxIcon @componentClass="bs-icons1" @type="font" @iconName="lock" @size="s12" />
							</span>
						{{/if}}
					</li>
				{{/each}}
			</ul>
		</div>
	</template>
}
