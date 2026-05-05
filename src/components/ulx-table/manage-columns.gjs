import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { modifier } from "ember-modifier";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import not from "ember-truth-helpers/helpers/not";
import UlxCheckbox from "../ulx-checkbox/index.gjs";
import UlxButton from "../ulx-button/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxMessage from "../ulx-message/index.gjs";
import { t } from "../../utils/i18n.js";
import { isSpecialColumn } from "./utils.js";

/**
 * Manage Columns panel for UlxTable.
 * Allows hiding/showing columns and reordering via drag-and-drop.
 * Mandatory columns that cannot be disabled: set column `manageable: false`;
 * they appear in the list as locked (checkbox disabled, lock icon) and cannot be toggled off.
 *
 * @param {Array} allColumns - full flex-col list (including hidden ones)
 * @param {Array} visibleColumns - currently visible columns
 * @param {Function} onApply - ({ columns, visibleFields }) => void  — called with updated full order and visible fields
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
	@tracked dragOverIndex = null;
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
		const allColumns = this.args.allColumns ?? [];
		const nonManageableCols = [];
		const lockedCols = [];
		const unlockedManageable = [];

		allColumns.forEach((column) => {
			if (isSpecialColumn(column)) {
				nonManageableCols.push(column);
				return;
			}
			this.isLocked(column) && lockedCols.push(column);
		});

		this.orderedColumns.forEach((column) => {
			!this.isLocked(column) && unlockedManageable.push(column);
		});

		const result = [...nonManageableCols, ...lockedCols, ...unlockedManageable];
		this.args.onApply?.({
			columns: result,
			visibleFields: [...this.visibleSet]
		});
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
		const column = this.orderedColumns[index];
		if (!column || this.isLocked(column)) {
			event.preventDefault();
			return;
		}
		this.dragFromIndex = index;
		this.dragOverIndex = null;
		event.dataTransfer.effectAllowed = "move";
		event.dataTransfer.setData("text/plain", String(index));
	}

	@action
	handleDragEnter(index, event) {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
		this.dragOverIndex = index;
	}

	@action
	handleDragOver(index, event) {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
		this.dragOverIndex = index;
	}

	@action
	handleDrop(toIndex, event) {
		event.preventDefault();
		const fromIndex = this.dragFromIndex ?? Number(event.dataTransfer.getData("text/plain"));
		let dropIndex = toIndex;
		if (dropIndex === fromIndex && this.dragOverIndex !== null) {
			dropIndex = this.dragOverIndex;
		}
		if (Number.isNaN(fromIndex) || fromIndex === dropIndex) return;
		const resolvedToIndex = this.resolveDropTargetIndex(fromIndex, dropIndex);
		resolvedToIndex !== null && this.reorderColumns(fromIndex, resolvedToIndex);
		this.dragFromIndex = null;
		this.dragOverIndex = null;
	}

	@action
	handleListDragOver(event) {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	}

	@action
	handleListDrop(event) {
		event.preventDefault();
		const fromIndex = this.dragFromIndex ?? Number(event.dataTransfer.getData("text/plain"));
		if (Number.isNaN(fromIndex)) return;
		const fallbackIndex = this.findLastUnlockedIndex();
		const dropIndex = this.dragOverIndex ?? fallbackIndex;
		if (dropIndex === null || fromIndex === dropIndex) return;
		const resolvedToIndex = this.resolveDropTargetIndex(fromIndex, dropIndex);
		resolvedToIndex !== null && this.reorderColumns(fromIndex, resolvedToIndex);
		this.dragFromIndex = null;
		this.dragOverIndex = null;
	}

	@action
	handleDragEnd() {
		if (this.dragFromIndex !== null && this.dragOverIndex !== null && this.dragFromIndex !== this.dragOverIndex) {
			const resolvedToIndex = this.resolveDropTargetIndex(this.dragFromIndex, this.dragOverIndex);
			resolvedToIndex !== null && this.reorderColumns(this.dragFromIndex, resolvedToIndex);
		}
		this.dragFromIndex = null;
		this.dragOverIndex = null;
	}

	@action
	canMoveUp(col, index) {
		return !this.isLocked(col) && this.findPreviousUnlockedIndex(index) !== null;
	}

	@action
	canMoveDown(col, index) {
		return !this.isLocked(col) && this.findNextUnlockedIndex(index) !== null;
	}

	@action
	handleMoveUp(col, index) {
		if (!this.canMoveUp(col, index)) return;
		const targetIndex = this.findPreviousUnlockedIndex(index);
		targetIndex !== null && this.reorderColumns(index, targetIndex);
	}

	@action
	handleMoveDown(col, index) {
		if (!this.canMoveDown(col, index)) return;
		const targetIndex = this.findNextUnlockedIndex(index);
		targetIndex !== null && this.reorderColumns(index, targetIndex);
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
		const fromColumn = cols[fromIndex];
		const toColumn = cols[toIndex];
		if (!fromColumn || !toColumn) return;
		if (this.isLocked(fromColumn) || this.isLocked(toColumn)) return;

		const unlockedIndexes = [];
		const unlockedColumns = [];

		cols.forEach((column, index) => {
			if (this.isLocked(column)) return;
			unlockedIndexes.push(index);
			unlockedColumns.push(column);
		});

		const fromUnlockedIndex = unlockedIndexes.indexOf(fromIndex);
		const toUnlockedIndex = unlockedIndexes.indexOf(toIndex);
		if (
			fromUnlockedIndex === -1 ||
			toUnlockedIndex === -1 ||
			fromUnlockedIndex === toUnlockedIndex
		) {
			return;
		}

		const [moved] = unlockedColumns.splice(fromUnlockedIndex, 1);
		unlockedColumns.splice(toUnlockedIndex, 0, moved);

		const nextColumns = [...cols];
		unlockedIndexes.forEach((index, unlockedIndex) => {
			nextColumns[index] = unlockedColumns[unlockedIndex];
		});

		this.localOrder = nextColumns;
		this.liveMessage = t("msg.table.column.moved", {
			header: moved?.header ?? "",
			position: toIndex + 1
		});
	}

	resolveDropTargetIndex(fromIndex, toIndex) {
		const toColumn = this.orderedColumns[toIndex];
		if (!toColumn) return null;
		if (!this.isLocked(toColumn)) {
			return toIndex;
		}

		const movingDown = toIndex > fromIndex;
		const directionalIndex = movingDown
			? this.findNextUnlockedIndex(toIndex)
			: this.findPreviousUnlockedIndex(toIndex);
		if (directionalIndex !== null) {
			return directionalIndex;
		}

		const fallbackIndex = movingDown
			? this.findPreviousUnlockedIndex(toIndex)
			: this.findNextUnlockedIndex(toIndex);
		return fallbackIndex;
	}

	findPreviousUnlockedIndex(index) {
		for (let candidate = index - 1; candidate >= 0; candidate--) {
			if (!this.isLocked(this.orderedColumns[candidate])) return candidate;
		}
		return null;
	}

	findNextUnlockedIndex(index) {
		for (let candidate = index + 1; candidate < this.orderedColumns.length; candidate++) {
			if (!this.isLocked(this.orderedColumns[candidate])) return candidate;
		}
		return null;
	}

	findLastUnlockedIndex() {
		for (let candidate = this.orderedColumns.length - 1; candidate >= 0; candidate--) {
			if (!this.isLocked(this.orderedColumns[candidate])) return candidate;
		}
		return null;
	}

	<template>
		<div class="datatable-manage-columns-panel" {{this.registerRefModifier}}>

			{{#if this.liveMessage}}
				<UlxMessage
					@text={{this.liveMessage}}
					@variant="success"
					@customClass="mx-4 mb-2"
					@size="s-size"
				/>
			{{/if}}
			<ul
				class="ulx-drag"
				role="list"
				{{on "dragover" this.handleListDragOver}}
				{{on "drop" this.handleListDrop}}
			>
				{{#each this.orderedColumns as |col index|}}
					<li
						class="drag-item {{if (this.isLocked col) 'locked'}}"
						draggable={{if (not (this.isLocked col)) "true"}}
						tabindex={{if (not (this.isLocked col)) "0" "-1"}}
						{{on "dragstart" (fn this.handleDragStart index)}}
						{{on "dragenter" (fn this.handleDragEnter index)}}
						{{on "dragover" (fn this.handleDragOver index)}}
						{{on "drop" (fn this.handleDrop index)}}
						{{on "dragend" this.handleDragEnd}}
						{{on "keydown" (fn this.handleItemKeyDown col index)}}
					>
						<span class="drag-handle" aria-hidden="true">
							<UlxIcon
								@componentClass="bs-icons1"
								@type="font"
								@iconName="dragdrop-icon1"
								@size="s18"
							/>
						</span>
						<UlxCheckbox
							@checked={{this.isVisible col}}
							@disabled={{this.isLocked col}}
							@itemLabel={{col.header}}
							@onChange={{fn this.toggleColumn col}}
							@customClass="datatable-manage-columns-label"
							aria-label={{t "lbl.a11y.table.toggle.column" header=col.header}}
						/>
						<div class="drag-controls">
							{{#if (this.isLocked col)}}
								<UlxIcon
									@componentClass="bs-icons1"
									@type="font"
									@iconName="	lock-filled-icon"
									@size="s16"
									@customClass="me-1"
								/>
							{{/if}}
							<UlxIconButton
								@size="xs-size"
								@variant="primary"
								@iconLeft="up-stroke-icon-new"
								@disabled={{not (this.canMoveUp col index)}}
								@onClick={{fn this.handleMoveUp col index}}
								aria-label={{t "lbl.a11y.table.move.column.up" header=col.header}}
							/>
							<UlxIconButton
								@size="xs-size"
								@variant="primary"
								@iconLeft="down-stroke-icon-new"
								@disabled={{not (this.canMoveDown col index)}}
								@onClick={{fn this.handleMoveDown col index}}
								aria-label={{t "lbl.a11y.table.move.column.down" header=col.header}}
							/>
						</div>
					</li>
				{{/each}}
			</ul>
		</div>
	</template>
}
