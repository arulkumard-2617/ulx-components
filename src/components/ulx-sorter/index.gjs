import Component from "@glimmer/component";
import { action } from "@ember/object";
import sortable from "../../modifiers/sortable.js";
import { getComponentClass } from "../../utils/component-config";
import { joinClassNames } from "../../utils/class-names";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";
import { t } from "../../utils/i18n";

/** Stable empty reference so `{{sortable}}` does not see a new options object every render. */
const EMPTY_SORTABLE_OPTIONS = {};

/**
 * Sortable list/grid built on SortableJS. DOM matches `uls-styles/.../modules/sorter.less`:
 * `.ulx-sorter` > `.sorter-container` > `.sorter-item` rows.
 * When there are no items, `.sorter-container` also gets `.is-empty` (see `sorter.less`).
 *
 * @class UlxSorter
 * @param {Array} [items=[]] - Items to render; each becomes one `.sorter-item`.
 * @param {Object} [options] - SortableJS options (may include onEnd, onAdd, onRemove, …).
 * @param {string} [filter] - SortableJS `filter` selector (merged into options).
 * @param {string} [layout="list"] - `list` | `grid` | `shared` — adds `sorter-{layout}`.
 * @param {string} [columnsClass] - Extra layout classes on `.sorter-container` when `@layout="grid"` only; any tokens you use with `ulx-grid` (default `col-5` when omitted).
 * @param {string} [customClass] - Extra classes on the root `.ulx-sorter` element.
 * @param {string} [itemClass] - Extra classes per row, or `(item, index) => string` merged with `sorter-item`.
 * @param {string} [itemKey="@identity"] - `{{#each}}` key used for row stability (`"id"` for object items is recommended in nested lists).
 * @param {string} [rootId] - `id` / `data-id` on `.sorter-container` (Sortable root).
 * @param {string} [listKey] - `data-list` on `.sorter-container`.
 * @param {string} [sortLevel] - Optional `data-sort-level` on `.sorter-container` (e.g. nested demos + `onMove` guards).
 * @param {string} [ariaLabel] - `aria-label` on the listbox container.
 * @param {string} [containerClass] - Extra classes on `.sorter-container`.
 * @param {string} [dataQa] - Root `data-qa` prefix (default `ulx-sorter`).
 */
export default class UlxSorter extends Component {
	get baseClass() {
		return getComponentClass("sorter");
	}

	get layoutClass() {
		const layout = this.args.layout ?? "list";
		const key = ["list", "grid", "shared"].includes(layout) ? layout : "list";
		return `sorter-${key}`;
	}

	get isGridLayout() {
		return (this.args.layout ?? "list") === "grid";
	}

	get gridClass() {
		return this.isGridLayout ? getComponentClass("grid") : null;
	}

	get columnsClass() {
		if (!this.isGridLayout) {
			return null;
		}

		return this.args.columnsClass ?? "col-5";
	}

	get rootClasses() {
		const { customClass } = this.args;
		const parts = [this.baseClass, this.layoutClass];
		customClass && parts.push(customClass);
		return joinClassNames(...parts);
	}

	get sortableOptions() {
		const base = this.args.options ?? EMPTY_SORTABLE_OPTIONS;
		const filter = this.args.filter;
		if (filter == null || filter === "") {
			return base;
		}
		return { ...base, filter };
	}

	get ariaLabel() {
		return this.args.ariaLabel ?? t("lbl.sorter");
	}

	get items() {
		return this.args.items ?? [];
	}

	get itemKey() {
		return this.args.itemKey ?? "@identity";
	}

	get isEmpty() {
		return this.items.length === 0;
	}

	get containerClasses() {
		const { containerClass } = this.args;
		return joinClassNames(
			"sorter-container",
			this.isEmpty && "is-empty",
			this.gridClass,
			this.columnsClass,
			containerClass
		);
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "sorter");
	}

	@action
	getDataQa(part) {
		return buildDataQa(this.rootDataQa, part);
	}

	@action
	rowClass(item, index) {
		const { itemClass } = this.args;
		const extra = typeof itemClass === "function" ? itemClass(item, index) : itemClass;
		return joinClassNames("sorter-item", extra);
	}

	<template>
		<div class={{this.rootClasses}} data-qa={{this.rootDataQa}} ...attributes>
			<div
				class={{this.containerClasses}}
				id={{@rootId}}
				data-id={{@rootId}}
				data-list={{@listKey}}
				data-sort-level={{@sortLevel}}
				role="listbox"
				aria-label={{this.ariaLabel}}
				data-qa={{this.getDataQa "container"}}
				{{sortable this.sortableOptions}}
			>
				{{#each this.items key=this.itemKey as |item index|}}
					<div
						class={{this.rowClass item index}}
						data-item-id={{item.id}}
						data-qa={{this.getDataQa "item"}}
						role="option"
						aria-selected="false"
					>
						{{yield item index}}
					</div>
				{{/each}}
			</div>
		</div>
	</template>
}
