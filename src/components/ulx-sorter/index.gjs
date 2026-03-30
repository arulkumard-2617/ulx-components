import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import sortable from "../../modifiers/sortable.js";
import { getComponentClass } from "../../utils/component-config";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";
import { t } from "../../utils/i18n";

export default class UlxSorter extends Component {
	@tracked _items = [];

	_isDragging = false;

	constructor(owner, args) {
		super(owner, args);
		this._items = [...(args.items ?? [])];
	}

	get baseClass() {
		return getComponentClass("sorter");
	}

	// ✅ Sync from @items ONLY when not dragging (i.e. after parent updates state)
	get items() {
		if (!this._isDragging) {
			const incoming = this.args.items ?? [];
			this._items = [...incoming];
		}
		return this._items;
	}
	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "sorter");
	}
	get rootClasses() {
		const { customClass = "ulx-drag" } = this.args;
		const parts = [this.baseClass];
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}
	get itemClasses() {
		return this.args.itemClass ?? "drag-item";
	}
	get ariaLabel() {
		return this.args.ariaLabel ?? t("lbl.sorter");
	}
	get sortableOptions() {
		return this.args.options;
	}
	@action getDataQa(part) {
		return buildDataQa(this.rootDataQa, part);
	}
	@action getItemId(item, index) {
		const { idKey } = this.args;
		if (idKey && item && typeof item === "object" && item[idKey] != null) {
			return String(item[idKey]);
		}
		return String(index);
	}
	<template>
		<div
			id={{@rootId}}
			class={{this.rootClasses}}
			role="listbox"
			aria-label={{this.ariaLabel}}
			data-qa={{this.rootDataQa}}
			data-id={{@rootId}}
			...attributes
			{{sortable this.sortableOptions}}
		>
			{{#each this.items as |item index|}}
				<div
					class={{this.itemClasses}}
					data-qa={{this.getDataQa "item"}}
					role="option"
					aria-selected="false"
				>
					{{yield item index}}
				</div>
			{{/each}}
		</div>
	</template>
}
