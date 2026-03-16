import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import eq from "ember-truth-helpers/helpers/eq";
import not from "ember-truth-helpers/helpers/not";
import UlxRadio from "../../elements/ulx-radio/index.gjs";
import UlxIcon from "../../elements/ulx-icon/index.gjs";
import UlxButton from "../../elements/ulx-button/index.gjs";
import UlxDivider from "../../elements/ulx-divider/index.gjs";

import { t } from "../../../utils/i18n.js";
import { fn } from "@ember/helper";
import { getComponentClass } from "../../../utils/component-config.js";

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
		const sortBy = this.args.sortBy;
		if (!sortBy || typeof sortBy !== "string") return "";
		const [key] = sortBy.split(":");
		return key ?? "";
	}

	get sortByOrder() {
		const sortBy = this.args.sortBy;
		if (!sortBy || typeof sortBy !== "string") return "asc";
		const [, order] = sortBy.split(":");
		return order === "desc" ? "desc" : "asc";
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
	onSortCriterionChange(item, checked, event) {
		if (!checked || !this.args.onChange) return;
		this.args.onChange(`${item.value}:${this.sortByOrder}`);
	}

	@action
	updateOrderBy(orderBy) {
		if (!this.args.onChange) return;
		this.args.onChange(`${this.sortByKey}:${orderBy}`);
	}

	<template>
		<div
			class="{{this.ulxSortClass}} flex flex-col gp4 mgt1"
			role="dialog"
			aria-label={{t "lbl.sort"}}
		>
			<UlxRadio
				@items={{this.radioItems}}
				@onItemChange={{this.onSortCriterionChange}}
				@groupClass="nmg-default"
			/>
			<UlxDivider />
			<div class="flex flex-col items-start gap-3">
				<UlxButton
					@label={{t "lbl.ascending"}}
					@icon="ascending-icon"
					@iconComponentClass="bs-icons1"
					@iconSize="s14"
					@size="compact"
					@variant="secondary"
					@text={{true}}
					@customClass={{if
						this.isAsc
						"fg-primary"
						""
					}}
					aria-pressed={{this.isAsc}}
					@onClick={{fn this.updateOrderBy "asc"}}
				/>

				<UlxButton
					@label={{t "lbl.descending"}}
					@icon="descending-icon"
					@iconComponentClass="bs-icons1"
					@iconSize="s14"
					@text={{true}}
					@size="compact"
					@variant="secondary"
					@customClass={{if
						this.isAsc
						""
						"fg-primary"
					}}
					aria-pressed={{not this.isAsc}}
					@onClick={{fn this.updateOrderBy "desc"}}
				/>
			</div>
		</div>
	</template>
