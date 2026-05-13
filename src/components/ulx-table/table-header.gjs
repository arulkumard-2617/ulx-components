import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import eq from "ember-truth-helpers/helpers/eq";
import and from "ember-truth-helpers/helpers/and";
import or from "ember-truth-helpers/helpers/or";
import not from "ember-truth-helpers/helpers/not";
import UlxTristateCheckbox from "../ulx-tristate-checkbox/index.gjs";
import UlxInput from "../ulx-input/index.gjs";
import UlxMultiSelect from "../ulx-multi-select/index.gjs";
import UlxButton from "../ulx-button/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import UlxIcon from "../ulx-icon/index.gjs";
import { t } from "../../utils/i18n.js";

/**
 * Internal thead for UlxTable.
 * Handles: sort headers, column resize, filter row, selection header, manage-columns button.
 */
export default class TableHeader extends Component {
	// ─── Debounce timer for row filter inputs ─────────────────────────────────
	_rowFilterTimer = null;

	willDestroy() {
		super.willDestroy(...arguments);
		clearTimeout(this._rowFilterTimer);
	}

	// ─── Pure computation helpers — arrow properties preserve `this` binding ──
	// when invoked from the template as {{this.method arg}}.

	sortOrderFor = (field) => {
		const { sortMode, sortField, sortOrder, multiSortMeta } = this.args;
		if (sortMode === "multiple") {
			const meta = multiSortMeta?.find((m) => m.field === field);
			return meta ? meta.order : 0;
		}
		return sortField === field ? (sortOrder ?? 0) : 0;
	};

	sortBadgeFor = (field) => {
		const { sortMode, multiSortMeta } = this.args;
		if (sortMode !== "multiple") return null;
		const idx = multiSortMeta?.findIndex((m) => m.field === field) ?? -1;
		return idx >= 0 ? idx + 1 : null;
	};

	sortIconClass = (field) => {
		const order = this.sortOrderFor(field);
		if (order === 1) return "asc";
		if (order === -1) return "desc";
		return "";
	};

	ariaSort = (field) => {
		const order = this.sortOrderFor(field);
		if (order === 1) return "ascending";
		if (order === -1) return "descending";
		return "none";
	};

	filterValueFor = (field) => {
		return this.args.filters?.[field]?.value ?? "";
	};

	isFilterActive = (field) => {
		const v = this.filterValueFor(field);
		return v != null && v !== "";
	};

	headerCellClass = (col) => {
		const base = "column-header-cell";
		if (!col) return base;
		const parts = [base];
		const field = col.sortField ?? col.field;
		col.sortable && parts.push("sort");
		if (this.sortOrderFor(field) !== 0) parts.push("sorted");
		col.filter && this.args.filterDisplay === "menu" && parts.push("filterable");
		this.args.resizableColumns &&
			col.resizable !== false &&
			!col.selectionMode &&
			!col.expander &&
			parts.push("resizable");
		col.frozen && parts.push(`frozen-${col.alignFrozen ?? "left"}`);
		col.headerClassName && parts.push(col.headerClassName);
		return parts.filter(Boolean).join(" ");
	};

	headerCellStyle = (col) => {
		if (!col) return undefined;
		const parts = [];
		col.headerStyle && parts.push(col.headerStyle);
		if (col.frozen) {
			const side = col.alignFrozen ?? "left";
			parts.push(`${side}: ${col.frozenOffset ?? "0px"}`);
		}
		if (col.style) parts.push(col.style);
		const width = this.args.columnWidths?.[col.field];
		if (typeof width === "number") {
			parts.push(`min-width: ${width}px`);
			parts.push(`width: ${width}px`);
		}
		return parts.join("; ") || undefined;
	};

	isMultiSelectionMode = (col) => {
		return col.selectionMode === "multiple" || this.args.selectionMode === "checkbox";
	};

	filterButtonClass = (col) => {
		const field = col?.filterField ?? col?.field;
		const active = this.isFilterActive(field);
		return `datatable-filter-menu-button${active ? " active" : ""}`;
	};

	filterClearButtonClass = (col) => {
		const field = col?.filterField ?? col?.field;
		const active = this.isFilterActive(field);
		return `datatable-header-filter-clear-button${active ? " active" : ""}`;
	};

	isFilterMenuOpen = (col) => {
		const field = col?.filterField ?? col?.field;
		return this.args.filterOverlayField === field;
	};

	// ─── State getters ────────────────────────────────────────────────────────

	get headerCheckboxValue() {
		if (this.args.allSelected) return true;
		if (this.args.someSelected) return null;
		return false;
	}

	// ─── Event handlers ───────────────────────────────────────────────────────

	@action
	handleSort(col, event) {
		if (!col.sortable) return;
		if (event?.target?.closest?.(".datatable-column-filter")) return;
		this.args.onSort?.(col.sortField ?? col.field);
	}

	@action
	handleSortKeydown(col, event) {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			this.handleSort(col, event);
		}
	}

	@action
	handleHeaderCheckbox(nextValue) {
		this.args.onHeaderCheckboxChange?.(nextValue === true);
	}

	@action
	handleFilterInput(field, event) {
		const value = typeof event === "string" ? event : (event?.target?.value ?? "");
		clearTimeout(this._rowFilterTimer);
		this._rowFilterTimer = setTimeout(() => {
			this.args.onFilterChange?.(field, value, "contains");
		}, 300);
	}

	@action
	handleMultiSelectFilter(field, value) {
		this.args.onFilterChange?.(field, value, "in");
	}

	@action
	handleFilterMenuOpen(col, event) {
		event?.stopPropagation?.();
		this.args.onFilterMenuOpen?.(event, col);
	}

	@action
	handleRowFilterClear(col, event) {
		event?.stopPropagation?.();
		const field = col?.filterField ?? col?.field;
		this.args.onFilterChange?.(field, "", "contains");
	}

	@action
	handleResizeStart(colIndex, event) {
		this.args.onColumnResizeStart?.(event, colIndex);
	}

	<template>
		<thead class="datatable-header">
			{{! Column title row }}
			<tr class="datatable-header-row">
				{{#each @columns as |col index|}}
					{{#if (not col)}}
						{{! skip undefined column entries }}
					{{else if col.selectionMode}}
						<th class="column-header-cell selection" scope="col" style="width: 3rem">
							{{#if (this.isMultiSelectionMode col)}}
								<UlxTristateCheckbox
									@value={{this.headerCheckboxValue}}
									@onValueChange={{this.handleHeaderCheckbox}}
									@hideLabel={{true}}
									aria-label={{t "lbl.a11y.table.select.all"}}
								/>
							{{/if}}
						</th>
					{{else if col.expander}}
						<th class="column-header-cell" scope="col" style="width: 3rem"></th>
					{{else if col.rowReorder}}
						<th class="column-header-cell" scope="col" style="width: 3rem"></th>
					{{else if col.rowEditor}}
						<th class="column-header-cell" scope="col" style="width: 6rem"></th>
					{{else}}
						<th
							class={{this.headerCellClass col}}
							style={{this.headerCellStyle col}}
							scope="col"
							tabindex={{if col.sortable "0"}}
							aria-sort={{if col.sortable (this.ariaSort (or col.sortField col.field))}}
							{{on "click" (fn this.handleSort col)}}
							{{on "keydown" (fn this.handleSortKeydown col)}}
						>
							<div class="column-header-content">
								{{#if col.headerTemplate}}
									<col.headerTemplate @col={{col}} />
								{{else}}
									<span class="column-header-title">{{col.header}}</span>
								{{/if}}

								{{#if col.sortable}}
									<span
										class="datatable-column-sort-icon
											{{this.sortIconClass (or col.sortField col.field)}}"
										aria-hidden="true"
									>
										{{#let (this.sortOrderFor (or col.sortField col.field)) as |order|}}
											{{#if (eq order 1)}}

												<UlxIcon
													@componentClass="bs-icons1 ms-1 flex"
													@type="font"
													@iconName="ascending-icon"
													@size="s18"
												/>
											{{else if (eq order -1)}}
												<UlxIcon
													@componentClass="bs-icons1 ms-1 flex "
													@type="font"
													@iconName="descending-icon"
													@size="s18"
												/>
											{{else}}
												<UlxIcon
													@componentClass="bs-icons1 ms-1 flex "
													@type="font"
													@iconName="sort-icon"
													@size="s18"
												/>
											{{/if}}
										{{/let}}
									</span>
									{{#let (this.sortBadgeFor (or col.sortField col.field)) as |badge|}}
										{{#if badge}}
											<span class="datatable-sort-badge">{{badge}}</span>
										{{/if}}
									{{/let}}
								{{/if}}

								{{#if (and col.filter (eq @filterDisplay "menu"))}}
									<UlxIconButton
										@text={{true}}
										@variant="secondary"
										@iconLeft="filter-icon"
										@customClass={{this.filterButtonClass col}}
										@onClick={{fn this.handleFilterMenuOpen col}}
										aria-label={{t "lbl.a11y.table.filter.column" header=col.header}}
									/>
								{{/if}}

								{{#if (and @resizableColumns (not (eq col.resizable false)))}}
									{{#if (and (not col.selectionMode) (not col.expander))}}
										<span
											class="datatable-column-resizer"
											{{on "mousedown" (fn this.handleResizeStart index)}}
										></span>
									{{/if}}
								{{/if}}
							</div>
						</th>
					{{/if}}
				{{/each}}

				{{#if @hasOptionCell}}
					<th class="column-header-cell" scope="col" style="width: 6rem"></th>
				{{/if}}

			</tr>

			{{! Separate filter row — rendered below header row when filterDisplay="row" }}
			{{#if (eq @filterDisplay "row")}}
				<tr class="datatable-header-row">
					{{#each @columns as |col|}}
						{{#if (not col)}}
							{{! skip undefined column entries }}
						{{else if col.selectionMode}}
							<th class="column-header-cell selection" scope="col" style="width: 3rem"></th>
						{{else if col.expander}}
							<th class="column-header-cell" scope="col" style="width: 3rem"></th>
						{{else if col.rowReorder}}
							<th class="column-header-cell" scope="col" style="width: 3rem"></th>
						{{else if col.rowEditor}}
							<th class="column-header-cell" scope="col" style="width: 6rem"></th>
						{{else}}
							<th class="column-header-cell" scope="col">
								{{#if col.filter}}
									<div class="datatable-column-filter">
										<div class="datatable-filter-input">
											{{#if col.filterElement}}
												<col.filterElement
													@field={{or col.filterField col.field}}
													@value={{this.filterValueFor (or col.filterField col.field)}}
													@onChange={{fn this.handleFilterInput (or col.filterField col.field)}}
												/>
											{{else if (eq col.filterType "multiselect")}}
												<UlxMultiSelect
													@value={{this.filterValueFor (or col.filterField col.field)}}
													@options={{col.filterOptions}}
													@optionLabel="label"
													@optionValue="value"
													@placeholder={{or col.filterPlaceholder (t "lbl.select")}}
													@filter={{true}}
													@onChange={{fn
														this.handleMultiSelectFilter
														(or col.filterField col.field)
													}}
													aria-label={{t "lbl.a11y.table.filter.column" header=col.header}}
												/>
											{{else}}
												<UlxInput
													@value={{this.filterValueFor (or col.filterField col.field)}}
													@onInput={{fn this.handleFilterInput (or col.filterField col.field)}}
													placeholder={{or col.filterPlaceholder (t "lbl.search")}}
													aria-label={{t "lbl.a11y.table.filter.column" header=col.header}}
												/>
											{{/if}}
										</div>
										<UlxIconButton
											@variant="secondary"
											@text={{true}}
											@iconLeft="filter-icon"
											@customClass="datatable-filter-menu-button"
											@onClick={{fn this.handleFilterMenuOpen col}}
											aria-haspopup="true"
											aria-expanded={{this.isFilterMenuOpen col}}
											aria-label={{t "lbl.a11y.table.show.filter.menu"}}
										/>
										<UlxIconButton
											@variant="secondary"
											@text={{true}}
											@iconLeft="close-icon-01"
											@customClass={{this.filterClearButtonClass col}}
											@onClick={{fn this.handleRowFilterClear col}}
											aria-label={{t "lbl.clear"}}
										/>
									</div>
								{{/if}}
							</th>
						{{/if}}
					{{/each}}
					{{#if @hasOptionCell}}
						<th class="column-header-cell" scope="col" style="width: 6rem"></th>
					{{/if}}
				</tr>
			{{/if}}
		</thead>
	</template>
}
