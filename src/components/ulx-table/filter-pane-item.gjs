import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import gt from "ember-truth-helpers/helpers/gt";
import eq from "ember-truth-helpers/helpers/eq";
import or from "ember-truth-helpers/helpers/or";
import UlxCheckboxItem from "../ulx-checkbox/checkbox-item.gjs";
import UlxIconInput from "../ulx-icon-input/index.gjs";
import UlxInput from "../ulx-input/index.gjs";
import UlxButton from "../ulx-button/index.gjs";
import UlxRadioItem from "../ulx-radio/radio-item.gjs";
import UlxSegment from "../ulx-segment/index.gjs";
import UlxDropdown from "../ulx-dropdown/index.gjs";
import UlxMultiSelect from "../ulx-multi-select/index.gjs";
import { t } from "../../utils/i18n.js";

const DEFAULT_VISIBLE_ITEMS_COUNT = 5;

/**
 * Renders one filter section inside UlxTable filter slide pane.
 * Supports bs-table compatible group models:
 * - { key, heading, options[] } (legacy checkbox list)
 * - { key, heading, checkbox: { items[] }, visibleItemsCount? }
 * - { key, heading, groupedRadioItems: { items: Array<{ heading: string, values: Array<{ key: any, label?: string, lbl?: string }> }>, currentSelected?: any } } — each item renders inside UlxSegment
 * - { key, heading, dropdown: { items[], multiSelect?, zIndex? } }
 *
 * @param {Object} group
 * @param {any} selection - current selection for this group
 * @param {number} [dropdownZIndex] - z-index for single-select dropdown panels in the filter slide pane
 * @param {Function} onToggleOption - (groupKey, optionValue, checkedOrEvent) => void
 * @param {Function} onSetSelection - (groupKey, selection) => void
 */
export default class FilterPaneItem extends Component {
	@tracked showMore = true;
	@tracked searchString = "";

	get group() {
		return this.args.group ?? {};
	}

	get groupKey() {
		return this.group.key;
	}

	get isCheckboxGroup() {
		return !!this.group.checkbox || Array.isArray(this.group.options);
	}

	get isGroupedRadioGroup() {
		return !!this.group.groupedRadioItems;
	}

	get isDropdownGroup() {
		return !!this.group.dropdown;
	}

	get checkboxItems() {
		if (Array.isArray(this.group.checkbox?.items)) {
			return this.group.checkbox.items.map((item, index) => {
				const value = item.value ?? item.key ?? item.lbl ?? item.label ?? String(index);
				return {
					value,
					label: item.label ?? item.lbl ?? String(value),
					dataQa: item.dataQa
				};
			});
		}
		return (this.group.options ?? []).map((option) => ({
			value: option.value,
			label: option.label ?? option.lbl ?? String(option.value),
			dataQa: option.dataQa
		}));
	}

	get dropdownOptions() {
		return (this.group.dropdown?.items ?? []).map((item, index) => {
			const value = item.value ?? item.key ?? item.lbl ?? item.label ?? String(index);
			return {
				value,
				label: item.label ?? item.lbl ?? String(value)
			};
		});
	}

	get groupedRadioItems() {
		return this.group.groupedRadioItems?.items ?? [];
	}

	get checkboxSelection() {
		return Array.isArray(this.args.selection) ? this.args.selection : [];
	}

	get dropdownSelection() {
		if (this.group.dropdown?.multiSelect) {
			return Array.isArray(this.args.selection) ? this.args.selection : [];
		}
		return this.args.selection ?? "";
	}

	get radioSelection() {
		return this.args.selection ?? "";
	}

	get dropdownZIndex() {
		const groupZIndex = this.group.dropdown?.zIndex;
		if (typeof groupZIndex === "number") return groupZIndex;
		const paneZIndex = this.args.dropdownZIndex;
		if (typeof paneZIndex === "number") return paneZIndex;
		return null;
	}

	get visibleItemsCount() {
		return (
			this.group.visibleItemsCount ??
			this.group.checkbox?.visibleItemsCount ??
			DEFAULT_VISIBLE_ITEMS_COUNT
		);
	}

	get showSearch() {
		return this.isCheckboxGroup && this.checkboxItems.length > this.visibleItemsCount;
	}

	get filteredCheckboxItems() {
		const term = this.searchString.trim().toLowerCase();
		if (term) {
			return this.checkboxItems.filter((item) => item.label.toLowerCase().includes(term));
		}
		return this.showMore ? this.checkboxItems.slice(0, this.visibleItemsCount) : this.checkboxItems;
	}

	get showViewMoreToggle() {
		return (
			this.isCheckboxGroup &&
			this.checkboxItems.length > this.visibleItemsCount &&
			this.searchString.trim() === ""
		);
	}

	isOptionChecked = (value) => this.checkboxSelection.includes(value);

	isRadioChecked = (radioKey) => String(this.radioSelection) === String(radioKey);

	getRadioId = (groupIndex, valueIndex) => `${this.groupKey}-radio-${groupIndex}-${valueIndex}`;

	@action
	handleSearchInput(valueOrEvent) {
		const value =
			typeof valueOrEvent === "string" ? valueOrEvent : (valueOrEvent?.target?.value ?? "");
		this.searchString = value.trim();
	}

	@action
	toggleShowMore() {
		this.showMore = !this.showMore;
	}

	@action
	handleCheckboxToggle(optionValue, checkedOrEvent) {
		this.args.onToggleOption?.(this.groupKey, optionValue, checkedOrEvent);
	}

	@action
	handleRadioChange(optionValue, event) {
		const value = optionValue ?? event?.target?.value;
		this.args.onSetSelection?.(this.groupKey, value);
	}

	@action
	handleDropdownChange(selection) {
		this.args.onSetSelection?.(this.groupKey, selection);
	}

	<template>
		{{#if this.isCheckboxGroup}}
			{{#if this.showSearch}}
				<UlxIconInput
					@iconLeft="search-icon"
					@iconType="font"
					@iconClass="bs-icons1"
					@iconSize="s20"
					@iconFieldClass="my-3"
				>
					<UlxInput
						@key="table-filter-group-search"
						@value={{this.searchString}}
						@onInput={{this.handleSearchInput}}
						placeholder={{t "label.search"}}
						aria-label={{t "label.search"}}
					/>
				</UlxIconInput>
			{{/if}}

			<div class="ulx-checkbox-group">
				{{#each this.filteredCheckboxItems as |opt|}}
					<UlxCheckboxItem
						@itemLabel={{opt.label}}
						@checked={{this.isOptionChecked opt.value}}
						@onChange={{fn this.handleCheckboxToggle opt.value}}
						@dataQa={{opt.dataQa}}
					/>
				{{/each}}
			</div>

			{{#if this.showViewMoreToggle}}
				<UlxButton
					@variant="text"
					@size="s-size"
					@customClass="mt-2"
					@label={{t (if this.showMore "lbl.view.more" "lbl.view.less")}}
					@onClick={{this.toggleShowMore}}
				/>
			{{/if}}
		{{else if this.isGroupedRadioGroup}}
			<div class="flex flex-col gap-3">
				{{#each this.groupedRadioItems as |radioGroup groupIndex|}}
					<UlxSegment @ariaLabel={{radioGroup.heading}}>
						<div class="flex flex-col gap-2">
							{{#if (gt radioGroup.values.length 1)}}
								<div class="semibold-font">{{radioGroup.heading}}</div>
							{{/if}}
							<div class="ulx-radio-group">
								{{#each radioGroup.values as |radioValue valueIndex|}}
									<UlxRadioItem
										@id={{this.getRadioId groupIndex valueIndex}}
										@name={{this.groupKey}}
										@value={{radioValue.key}}
										@itemLabel={{if
											(eq radioGroup.values.length 1)
											radioGroup.heading
											(or radioValue.lbl radioValue.label)
										}}
										@checked={{this.isRadioChecked radioValue.key}}
										@onChange={{fn this.handleRadioChange radioValue.key}}
									/>
								{{/each}}
							</div>
						</div>
					</UlxSegment>
				{{/each}}
			</div>
		{{else if this.isDropdownGroup}}
			{{#if this.group.dropdown.multiSelect}}
				<UlxMultiSelect
					@value={{this.dropdownSelection}}
					@options={{this.dropdownOptions}}
					@optionLabel="label"
					@optionValue="value"
					@placeholder={{this.group.dropdown.placeholder}}
					@onChange={{this.handleDropdownChange}}
				/>
			{{else}}
				<UlxDropdown
					@value={{this.dropdownSelection}}
					@options={{this.dropdownOptions}}
					@optionLabel="label"
					@optionValue="value"
					@placeholder={{this.group.dropdown.placeholder}}
					@context="body"
					@zIndex={{this.dropdownZIndex}}
					@onChange={{this.handleDropdownChange}}
				/>
			{{/if}}
		{{/if}}
	</template>
}
