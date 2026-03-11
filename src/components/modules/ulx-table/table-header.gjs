import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import eq from "ember-truth-helpers/helpers/eq";
import and from "ember-truth-helpers/helpers/and";
import or from "ember-truth-helpers/helpers/or";
import not from "ember-truth-helpers/helpers/not";
import UlxTristateCheckbox from "../../elements/ulx-tristate-checkbox/index.gjs";
import UlxInput from "../../elements/ulx-input/index.gjs";
import UlxMultiSelect from "../../elements/ulx-multi-select/index.gjs";
import UlxButton from "../../elements/ulx-button/index.gjs";
import UlxIcon from "../../elements/ulx-icon/index.gjs";

/**
 * Internal thead for UlxTable.
 * Handles: sort headers, column resize, filter row, selection header, manage-columns button.
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
		//need to change correct icons
		const order = this.sortOrderFor(field);
		if (order === 1) return "sort-icon "; //"sort-amount-up-alt";
		if (order === -1) return "sort-icon "; //"sort-amount-down";
		return "sort-icon"; // "sort-alt";
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
		// Ignore clicks coming from the filter row inside this header cell
		if (event?.target?.closest?.(".datatable-column-filter")) {
			return;
		}
		this.args.onSort?.(col.sortField ?? col.field, col);
	}

	get headerCheckboxValue() {
		if (this.args.allSelected) return true;
		if (this.args.someSelected) return null;
		return false;
	}

	@action
	handleHeaderCheckbox(nextValue) {
		this.args.onHeaderCheckboxChange?.(nextValue === true);
	}

	@action
	handleFilterInput(field, event) {
		const value = typeof event === "string" ? event : (event?.target?.value ?? "");
		this.args.onFilterChange?.(field, value, "contains");
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
	filterButtonClass(col) {
		const field = col?.filterField ?? col?.field;
		const active = this.isFilterActive(field);
		return `datatable-filter-menu-button${active ? " active" : ""}`;
	}

	@action
	filterClearButtonClass(col) {
		const field = col?.filterField ?? col?.field;
		const active = this.isFilterActive(field);
		return `datatable-header-filter-clear-button${active ? " active" : ""}`;
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
									aria-label="Select all rows"
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
							aria-sort={{this.ariaSort (or col.sortField col.field)}}
							{{on "click" (fn this.handleSort col)}}
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
										<UlxIcon
											@componentClass="bs-icons1"
											@type="font"
											@iconName={{this.sortIconName (or col.sortField col.field)}}
											@size="s12"
										/>
									</span>
									{{#if (this.sortBadgeFor (or col.sortField col.field))}}
										<span class="datatable-sort-badge">
											{{this.sortBadgeFor (or col.sortField col.field)}}
										</span>
									{{/if}}
								{{/if}}

								{{#if (and col.filter (eq @filterDisplay "menu"))}}
									<UlxButton
										@variant="text"
										@icon="filter-icon"
										@iconComponentClass="bs-icons1"
										@iconSize="s12"
										@customClass={{this.filterButtonClass col}}
										@onClick={{fn this.handleFilterMenuOpen col}}
										aria-label="Filter column {{col.header}}"
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

				{{#if @showManageColumns}}
					<th class="column-header-cell" scope="col" style="width: 2.5rem; padding: 0.5rem;">
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

			{{! Separate filter row — rendered below header row when filterDisplay="row" (matches PrimeReact BasicFilter structure) }}
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
													@placeholder={{or col.filterPlaceholder "Select"}}
													@filter={{true}}
													@onChange={{fn
														this.handleMultiSelectFilter
														(or col.filterField col.field)
													}}
													aria-label="Filter {{col.header}}"
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
										<UlxButton
											@variant="text"
											@icon="filter-icon"
											@iconComponentClass="bs-icons1"
											@iconSize="s12"
											@customClass="datatable-filter-menu-button"
											@onClick={{fn this.handleFilterMenuOpen col}}
											aria-haspopup="true"
											aria-expanded="false"
											aria-label="Show Filter Menu"
										/>
										<UlxButton
											@variant="text"
											@icon="x-circle"
											@iconComponentClass="bs-icons1"
											@iconSize="s12"
											@customClass={{this.filterClearButtonClass col}}
											@onClick={{fn this.handleRowFilterClear col}}
											aria-label="Clear"
										/>
									</div>
								{{/if}}
							</th>
						{{/if}}
					{{/each}}
					{{#if @hasOptionCell}}
						<th class="column-header-cell" scope="col" style="width: 6rem"></th>
					{{/if}}

					{{#if @showManageColumns}}
						<th class="column-header-cell" scope="col" style="width: 2.5rem;"></th>
					{{/if}}
				</tr>
			{{/if}}
		</thead>
	</template>
}
