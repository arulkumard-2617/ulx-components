import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import UlxRadio from "../../elements/ulx-radio/index.gjs";
import UlxCheckbox from "../../elements/ulx-checkbox/index.gjs";
import UlxTristateCheckbox from "../../elements/ulx-tristate-checkbox/index.gjs";

/**
 * Internal building block for `UlxOptionSegment`.
 *
 * Renders a single option card (`.option-item`) inside the
 * `.ulx-option-segments` group container.
 *
 * @class UlxOptionSegmentItem
 * @param {"radio"|"checkbox"|"tristate"|"basic"} [type="radio"] - Type of the option.
 * @param {object} item - Option data object:
 *   - {string} value
 *   - {boolean} [selected]
 *   - {boolean} [disabled]
 *   - {boolean} [compact]
 *   - {string} [title]
 *   - {string} [description]
 *   - {string} [itemClass] - Custom CSS class for the item root.
 *   - {Array<object>} [nestedItems] - Optional nested checkbox rows.
 * @param {boolean} [disabled=false] - Group-level disabled flag (overrides item.disabled).
 * @param {boolean} [compact=false] - Group-level compact flag (fallback when item.compact is undefined).
 * @param {Function} [onSelect] - Called when the option is toggled:
 *   `(selected, value, event, item) => void`.
 */
export default class UlxOptionSegmentItem extends Component {
	get type() {
		return this.args.type ?? "radio";
	}

	get isRadioType() {
		return this.type === "radio";
	}

	get isCheckboxType() {
		return this.type === "checkbox";
	}

	get isTristateType() {
		return this.type === "tristate";
	}

	get item() {
		return this.args.item ?? {};
	}

	get value() {
		return this.item.value;
	}

	get isSelected() {
		return Boolean(this.item.selected);
	}

	get isDisabled() {
		return Boolean(this.args.disabled) || Boolean(this.item.disabled);
	}

	get isCompact() {
		if (typeof this.item.compact === "boolean") {
			return this.item.compact;
		}

		return Boolean(this.args.compact);
	}

	get itemClasses() {
		const { itemClass } = this.item;

		const parts = ["option-item"];

		// Visual state on the individual option card
		this.isSelected && parts.push("is-selected");
		this.isDisabled && parts.push("disabled");
		this.isCompact && parts.push("compact");

		// Custom per-item class (not the group-level customClass)
		itemClass && parts.push(itemClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get itemRole() {
		if (this.isCheckboxType || this.isTristateType) {
			return "checkbox";
		}

		if (this.isRadioType) {
			return "radio";
		}

		return "radio";
	}

	get isToggleRole() {
		return this.itemRole === "radio" || this.itemRole === "checkbox";
	}

	get tabIndex() {
		if (this.isDisabled) {
			return -1;
		}

		// Focusable only when it behaves like an interactive control
		return this.isToggleRole ? 0 : undefined;
	}

	get ariaChecked() {
		if (!this.isToggleRole) {
			return undefined;
		}

		// Tristate uses its own value for aria-checked
		if (this.isTristateType) {
			const v = this.tristateValue;
			if (v === null) return "mixed";
			return v ? "true" : "false";
		}

		return this.isSelected ? "true" : "false";
	}

	get ariaDisabled() {
		return this.isDisabled ? "true" : undefined;
	}

	get title() {
		return this.item.title;
	}

	get description() {
		return this.item.description;
	}

	get hasNestedItems() {
		return Array.isArray(this.item.nestedItems) && this.item.nestedItems.length > 0;
	}

	get nestedItems() {
		return this.hasNestedItems ? this.item.nestedItems : [];
	}

	get hasControlBlock() {
		return Boolean(this.args.hasControlBlock);
	}

	get hasTitleBlock() {
		return Boolean(this.args.hasTitleBlock);
	}

	get hasContentBlock() {
		return Boolean(this.args.hasContentBlock);
	}

	get hasDescriptionBlock() {
		return Boolean(this.args.hasDescriptionBlock);
	}

	get hasNestedBlock() {
		if (!this.args.hasNestedBlock) {
			return false;
		}

		const item = this.item;

		// When the consumer explicitly controls nesting via `item.hasNested`,
		// only render the nested section when that flag is truthy.
		if (item && Object.prototype.hasOwnProperty.call(item, "hasNested")) {
			return Boolean(item.hasNested);
		}

		// Backwards-compatible default: when no `hasNested` flag is present,
		// keep rendering the nested block whenever it exists.
		return true;
	}

	get hasControlSection() {
		return this.hasControlBlock || this.isRadioType || this.isCheckboxType || this.isTristateType;
	}

	get tristateValue() {
		return this.item.tristateValue;
	}

	@action
	handleControlCheckedChange(checked, event) {
		if (this.isDisabled) {
			return;
		}

		if (typeof this.args.onSelect === "function") {
			this.args.onSelect(checked, this.value, event, this.item);
		}
	}

	@action
	handleTristateValueChange(nextValue, event) {
		if (this.isDisabled) {
			return;
		}

		const callback = this.item?.onTristateChange;
		if (typeof callback === "function") {
			callback(nextValue, event, this.item);
		}
	}

	@action
	handleSelect(event) {
		if (this.isDisabled) {
			return;
		}

		if (typeof this.args.onSelect === "function") {
			let nextSelected;

			if (this.isCheckboxType) {
				nextSelected = !this.isSelected;
			} else if (this.isRadioType) {
				nextSelected = true;
			} else {
				nextSelected = !this.isSelected;
			}

			this.args.onSelect(nextSelected, this.value, event, this.item);
		}
	}

	@action
	handleClick(event) {
		this.handleSelect(event);
	}

	@action
	handleKeyDown(event) {
		if (!this.isToggleRole || this.isDisabled) {
			return;
		}

		// Activate on Space or Enter for keyboard users
		if (event.key === " " || event.key === "Spacebar" || event.key === "Enter") {
			event.preventDefault();
			this.handleSelect(event);
		}
	}

	@action
	stopNestedClickPropagation(event) {
		event.stopPropagation();
	}

	<template>
		<div
			class={{this.itemClasses}}
			role={{this.itemRole}}
			tabindex={{this.tabIndex}}
			aria-checked={{this.ariaChecked}}
			aria-disabled={{this.ariaDisabled}}
			{{on "click" this.handleClick}}
			{{on "keydown" this.handleKeyDown}}
			...attributes
		>
			{{#if this.hasControlSection}}
				<div class="option-control">
					{{#if this.hasControlBlock}}
						{{yield this.item to="control"}}
					{{else if this.isRadioType}}
						<UlxRadio
							@checked={{this.isSelected}}
							@disabled={{this.isDisabled}}
							@itemLabel=""
							@customClass="option-control-radio"
							@onCheckedChange={{this.handleControlCheckedChange}}
						/>
					{{else if this.isCheckboxType}}
						<UlxCheckbox
							@checked={{this.isSelected}}
							@disabled={{this.isDisabled}}
							@itemLabel=""
							@customClass="option-control-checkbox"
							@onCheckedChange={{this.handleControlCheckedChange}}
						/>
					{{else if this.isTristateType}}
						<UlxTristateCheckbox
							@value={{this.tristateValue}}
							@disabled={{this.isDisabled}}
							@itemLabel=""
							@hideLabel={{true}}
							@customClass="option-control-checkbox"
							@onValueChange={{this.handleTristateValueChange}}
							{{on "click" this.stopNestedClickPropagation}}
						/>
					{{/if}}
				</div>
			{{/if}}

			<div class="option-content">
				{{#if this.hasContentBlock}}
					{{yield this.item to="content"}}
				{{/if}}

				{{#if this.hasTitleBlock}}
					<div class="option-title">
						{{yield this.item to="title"}}
					</div>
				{{else if this.title}}
					<div class="option-title">
						{{this.title}}
					</div>
				{{/if}}

				{{#if this.hasDescriptionBlock}}
					<div class="option-description">
						{{yield this.item to="description"}}
					</div>
				{{else if this.description}}
					<div class="option-description">
						{{this.description}}
					</div>
				{{/if}}

				{{#if this.hasNestedBlock}}
					<div class="option-nested" {{on "click" this.stopNestedClickPropagation}}>
						{{yield this.item to="nested"}}
					</div>
				{{else if this.hasNestedItems}}
					<div class="option-nested" {{on "click" this.stopNestedClickPropagation}}>
						{{#each this.nestedItems as |nestedItem|}}
							<div class="option-nested-item">
								{{nestedItem.label}}
							</div>
						{{/each}}
					</div>
				{{/if}}

				{{yield this.item}}
			</div>
		</div>
	</template>
}
