import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import not from "ember-truth-helpers/helpers/not";
import UlxRadio from "../ulx-radio/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import UlxDivider from "../ulx-divider/index.gjs";
import { t } from "../../utils/i18n.js";
import { getComponentClass } from "../../utils/component-config.js";
import { parseSortBy, formatSortBy } from "./utils.js";

/**
 * Sort options overlay for UlxTable toolbar: choose sort criterion (radio) and order (asc/desc).
 * Mirrors bs-table/sort-options behavior: @sortBy "key:asc" | "key:desc", @sortOptions [{ key, lbl }], @onChange(string).
 *
 * @param {string} sortBy - Current sort string "key:order"
 * @param {Array<{key: string, lbl: string}>} sortOptions - Options for sort criterion
 * @param {Function} onChange - (sortByString) => void
 * @param {Function} [onClose] - Optional close callback (e.g. when used in popover)
 */
export default class SortOptions extends Component {
	get sortByKey() {
		return parseSortBy(this.args.sortBy).field ?? "";
	}

	get sortByOrder() {
		return parseSortBy(this.args.sortBy).order === -1 ? "desc" : "asc";
	}

	get isAsc() {
		return this.sortByOrder === "asc";
	}

	get radioItems() {
		const options = this.args.sortOptions ?? [];
		const currentKey = this.sortByKey;
		return options.map((opt) => ({
			label: opt.lbl,
			value: opt.key,
			checked: opt.key === currentKey
		}));
	}

	get ulxSortClass() {
		return getComponentClass("sort");
	}

	@action
	onSortCriterionChange(item, checked) {
		if (!checked || !this.args.onChange) return;
		this.args.onChange(formatSortBy(item.value, this.sortByOrder === "desc" ? -1 : 1));
	}

	@action
	updateOrderBy(orderBy) {
		if (!this.args.onChange) return;
		this.args.onChange(formatSortBy(this.sortByKey, orderBy === "desc" ? -1 : 1));
	}

	<template>
		<div
			class="{{this.ulxSortClass}} flex flex-col gp3"
			role="dialog"
			aria-label={{t "lbl.sort"}}
		>
			<UlxRadio
				@items={{this.radioItems}}
				@onItemChange={{this.onSortCriterionChange}}
			/>

			<UlxDivider @customClass="m-0" />

			<div class="flex flex-col items-start gap-3">
				<UlxIconButton
					@label={{t "label.ascending"}}
					@iconLeft="ascending-icon"
					@iconComponentClass="bs-icons1"
					@iconSize="s14"
					@size="compact"
					@variant="basic"
					@text={{true}}
					@customClass={{if this.isAsc "fg-primary" ""}}
					aria-pressed={{this.isAsc}}
					@onClick={{fn this.updateOrderBy "asc"}}
				/>

				<UlxIconButton
					@label={{t "label.descending"}}
					@iconLeft="descending-icon"
					@iconComponentClass="bs-icons1"
					@iconSize="s14"
					@text={{true}}
					@size="compact"
					@variant="basic"
					@customClass={{if this.isAsc "" "fg-primary"}}
					aria-pressed={{not this.isAsc}}
					@onClick={{fn this.updateOrderBy "desc"}}
				/>
			</div>
		</div>
	</template>
}
