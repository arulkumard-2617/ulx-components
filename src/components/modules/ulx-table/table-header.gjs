import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import eq from "ember-truth-helpers/helpers/eq";
import and from "ember-truth-helpers/helpers/and";
import or from "ember-truth-helpers/helpers/or";
import not from "ember-truth-helpers/helpers/not";
import UlxIcon from "../../elements/ulx-icon/index.gjs";
import UlxCheckbox from "../../elements/ulx-checkbox/index.gjs";
import UlxInput from "../../elements/ulx-input/index.gjs";
import UlxButton from "../../elements/ulx-button/index.gjs";

/**
 * Internal thead for UlxTable.
 * Handles: sort headers, flex-col resize, filter row, selection header, manage-columns button.
 */
export default class TableHeader extends Component {
	@action
	sortOrderFor(field) {
		const { sortMode, sortField, sortOrder, multiSortMeta } = this.args;
		if (sortMode === "multiple") {
			const meta = multiSortMeta?.find((m) => m.field === field);
			return meta ? meta.order : 0;
		}
		return sortField === field ? (sortOrder ?? 0) : 0;
	}

	@action
	sortBadgeFor(field) {
		const { sortMode, multiSortMeta } = this.args;
		if (sortMode !== "multiple") return null;
		const idx = multiSortMeta?.findIndex((m) => m.field === field) ?? -1;
		return idx >= 0 ? idx + 1 : null;
	}

	@action
	isSorted(field) {
		return this.sortOrderFor(field) !== 0;
	}

	@action
	sortIconClass(field) {
		const order = this.sortOrderFor(field);
		if (order === 1) return "asc";
		if (order === -1) return "desc";
		return "";
	}

	@action
	sortIconName(field) {
		const order = this.sortOrderFor(field);
		if (order === 1) return "sort-amount-up-alt";
		if (order === -1) return "sort-amount-down";
		return "sort-alt";
	}

	@action
	ariaSort(field) {
		const order = this.sortOrderFor(field);
		if (order === 1) return "ascending";
		if (order === -1) return "descending";
		return "none";
	}

	@action
	filterValueFor(field) {
		return this.args.filters?.[field]?.value ?? "";
	}

	@action
	isFilterActive(field) {
		const v = this.filterValueFor(field);
		return v != null && v !== "";
	}

	@action
	headerCellClass(col) {
		const base = "datatable-flex-col-header-cell";
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
	}

	@action
	headerCellStyle(col) {
		if (!col) return undefined;
		const parts = [];
		col.headerStyle && parts.push(col.headerStyle);
		if (col.frozen) {
			const side = col.alignFrozen ?? "left";
			parts.push(`${side}: ${col.frozenOffset ?? "0px"}`);
		}
		if (col.style) parts.push(col.style);
		return parts.join("; ") || undefined;
	}

	@action
	isMultiSelectionMode(col) {
		return col.selectionMode === "multiple" || this.args.selectionMode === "checkbox";
	}

	@action
	colHasFilter(col) {
		return Boolean(col.filter);
	}

	@action
	handleSort(col, event) {
		if (!col.sortable) return;
		this.args.onSort?.(col.sortField ?? col.field, col);
	}

	@action
	handleHeaderCheckbox(checked) {
		this.args.onHeaderCheckboxChange?.(checked);
	}

	@action
	handleFilterInput(field, event) {
		const value = typeof event === "string" ? event : (event?.target?.value ?? "");
		this.args.onFilterChange?.(field, value, "contains");
	}

	@action
	handleFilterMenuOpen(col, event) {
		event?.stopPropagation?.();
		this.args.onFilterMenuOpen?.(event, col);
	}

	@action
	handleResizeStart(colIndex, event) {
		this.args.onColumnResizeStart?.(event, colIndex);
	}

	<template>
		<thead class="datatable-thead">
			<tr class="datatable-header-row">
				{{#each @columns as |col index|}}
					{{#if (not col)}}
						{{! skip undefined flex-col entries }}
					{{else if col.selectionMode}}
						<th class="datatable-flex-col-header-cell selection" scope="col" style="width: 3rem">
							{{#if (this.isMultiSelectionMode col)}}
								<UlxCheckbox
									@checked={{@allSelected}}
									@indeterminate={{@someSelected}}
									@onChange={{this.handleHeaderCheckbox}}
									aria-label="Select all rows"
								/>
							{{/if}}
						</th>
					{{else if col.expander}}
						<th class="datatable-flex-col-header-cell" scope="col" style="width: 3rem"></th>
					{{else if col.rowReorder}}
						<th class="datatable-flex-col-header-cell" scope="col" style="width: 3rem"></th>
					{{else if col.rowEditor}}
						<th class="datatable-flex-col-header-cell" scope="col" style="width: 6rem"></th>
					{{else}}
						<th
							class={{this.headerCellClass col}}
							style={{this.headerCellStyle col}}
							scope="col"
							aria-sort={{this.ariaSort (or col.sortField col.field)}}
							{{on "click" (fn this.handleSort col)}}
						>
							<div class="datatable-flex-col-header-content">
								{{#if col.headerTemplate}}
									<col.headerTemplate @col={{col}} />
								{{else}}
									<span class="datatable-flex-col-header-title">{{col.header}}</span>
								{{/if}}

								{{#if col.sortable}}
									<span
										class="datatable-flex-col-sort-icon
											{{this.sortIconClass (or col.sortField col.field)}}"
										aria-hidden="true"
									>
										<i class="bs-icons1 {{this.sortIconName (or col.sortField col.field)}} s12"></i>
									</span>
									{{#if (this.sortBadgeFor (or col.sortField col.field))}}
										<span class="datatable-sort-badge">
											{{this.sortBadgeFor (or col.sortField col.field)}}
										</span>
									{{/if}}
								{{/if}}

								{{#if (and col.filter (eq @filterDisplay "menu"))}}
									<button
										type="button"
										class="datatable-filter-menu-button
											{{if (this.isFilterActive (or col.filterField col.field)) 'active'}}"
										aria-label="Filter flex-col {{col.header}}"
										{{on "click" (fn this.handleFilterMenuOpen col)}}
									>
										<i class="bs-icons1 filter s12" aria-hidden="true"></i>
									</button>
								{{/if}}

								{{#if (and @resizableColumns (not (eq col.resizable false)))}}
									{{#if (and (not col.selectionMode) (not col.expander))}}
										<span
											class="datatable-flex-col-resizer"
											{{on "mousedown" (fn this.handleResizeStart index)}}
										></span>
									{{/if}}
								{{/if}}
							</div>

							{{#if (and col.filter (eq @filterDisplay "row"))}}
								<div class="datatable-flex-col-filter">
									{{#if col.filterElement}}
										<col.filterElement
											@field={{or col.filterField col.field}}
											@value={{this.filterValueFor (or col.filterField col.field)}}
											@onChange={{fn this.handleFilterInput (or col.filterField col.field)}}
										/>
									{{else}}
										<UlxInput
											@value={{this.filterValueFor (or col.filterField col.field)}}
											@placeholder={{or col.filterPlaceholder "Search"}}
											{{on "input" (fn this.handleFilterInput (or col.filterField col.field))}}
											aria-label="Filter {{col.header}}"
										/>
									{{/if}}
								</div>
							{{/if}}
						</th>
					{{/if}}
				{{/each}}

				{{#if @showManageColumns}}
					<th
						class="datatable-flex-col-header-cell"
						scope="col"
						style="width: 2.5rem; padding: 0.5rem;"
					>
						<UlxButton
							@variant="text"
							@icon="sliders"
							@iconComponentClass="bs-icons1"
							@iconSize="s16"
							@onClick={{@onManageColumns}}
							aria-label="Manage columns"
						/>
					</th>
				{{/if}}
			</tr>
		</thead>
	</template>
}
