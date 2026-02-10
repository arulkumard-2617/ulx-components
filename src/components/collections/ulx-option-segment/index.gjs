import Component from "@glimmer/component";
import { action } from "@ember/object";
import { hash } from "@ember/helper";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../../utils/component-config";
import UlxOptionSegmentItem from "./item.gjs";

/**
 * OptionSegment component for building radio / checkbox style option cards.
 *
 * Uses ULX option segment styles with the updated structure:
 *
 * - Group container:
 *   - `.ulx-option-segments` (from `getComponentClass("option-segments")`)
 * - Individual option item inside the group:
 *   - `.os-item` (clickable card)
 *     - `.os-control` for the visual/control element
 *     - `.os-content` for text content
 *       - `.os-title` for primary label
 *       - `.os-description` for helper / secondary text
 *       - `.os-nested` and `.os-nested-item` for nested options
 *
 * WCAG semantics:
 * - The **group container** behaves as:
 *   - `role="radiogroup"` when `@type="radio"` (container of radio options)
 *   - `role="group"` for all other types (e.g. checkbox/basic containers)
 * - The **individual option item** inside the group behaves as:
 *   - `role="radio"` when `@type="radio"`
 *   - `role="checkbox"` when `@type="checkbox"`
 *   - `role="group"` for basic/other types
 *
 * Keyboard and screen reader behavior:
 * - When `@type` is `"radio"` or `"checkbox"`, the root element exposes
 *   a `radiogroup`/`group` container role, and the item exposes
 *   `role="radio"` / `role="checkbox"` with `aria-checked` and `tabindex`.
 * - Space / Enter on the item activate the option and invoke `@onSelect`.
 *
 * @class UlxOptionSegment
 * @param {"radio"|"checkbox"|null} [type="radio"] - Semantic type of the option, used for ARIA role and `aria-checked`
 * @param {Array<object>} [items] - List of option items. When provided, the
 *   component renders a group:
 *   - Each item can include:
 *     - {string} value
 *     - {boolean} [selected]
 *     - {boolean} [disabled]
 *     - {boolean} [compact]
 *     - {string} [title]
 *     - {string} [description]
 *     - {Array<object>} [nestedItems]
 * @param {boolean} [selected=false] - Single-item selected state (when `@items` is not used)
 * @param {boolean} [disabled=false] - Disable interaction when true (group-level)
 * @param {boolean} [compact=false] - Use the compact visual variant (group-level)
 * @param {string} [value] - Value passed back to `@onSelect` (single-item mode)
 * @param {Function} [onSelect] - Callback invoked on click / key activation: `(selected, value, event) => void`
 * @param {string} [title] - Primary label text when no `title` block is provided
 * @param {string} [description] - Helper text when no `description` block is provided
 * @param {string} [customClass] - Extra CSS classes appended to the root element
 * @param {string} [role] - Custom ARIA role for the root element (overrides `@type`-based role)
 * @param {string} [ariaLabel] - Accessible label for the option
 * @param {string} [ariaLabelledBy] - ID of element that labels the option
 * @param {string} [ariaDescribedBy] - ID of element that describes the option
 *
 * @yield {Block} default - Additional content inside `.os-content` after title/description (single or items mode)
 * @yield {Block} control - Custom control content per item, receives the current `item`
 * @yield {Block} title - Custom title content per item, receives the current `item`
 * @yield {Block} description - Custom description content per item, receives the current `item`
 * @yield {Block} nested - Custom nested content per item, receives the current `item`
 */
export default class UlxOptionSegment extends Component {
	get baseClass() {
		// Updated to the group container class `.ulx-option-segments`
		return getComponentClass("option-segments");
	}

	get type() {
		return this.args.type ?? "radio";
	}

	get isRadioType() {
		return this.type === "radio";
	}

	get isCheckboxType() {
		return this.type === "checkbox";
	}

	get isSelected() {
		return Boolean(this.args.selected);
	}

	get isDisabled() {
		return Boolean(this.args.disabled);
	}

	get isCompact() {
		return Boolean(this.args.compact);
	}

	get hasItems() {
		return Array.isArray(this.args.items) && this.args.items.length > 0;
	}

	get items() {
		return this.hasItems ? this.args.items : [];
	}

	get rootClasses() {
		const parts = [this.baseClass, this.args.customClass];

		// boolean API
		this.args.horizontal && parts.push("horizontal");

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	/**
	 * Group/container role:
	 * - radiogroup for radio options
	 * - group for all other types (checkbox/basic)
	 * Can be overridden via `@role` when needed.
	 */
	get groupRole() {
		if (this.args.role) {
			return this.args.role;
		}

		if (this.isRadioType) {
			return "radiogroup";
		}

		return "group";
	}

	get title() {
		return this.args.title;
	}

	get description() {
		return this.args.description;
	}

	get ariaLabel() {
		return this.args.ariaLabel;
	}

	get ariaLabelledBy() {
		return this.args.ariaLabelledBy;
	}

	get ariaDescribedBy() {
		return this.args.ariaDescribedBy;
	}

	@action
	handleItemSelect(selected, value, event, item) {
		if (typeof this.args.onSelect === "function") {
			this.args.onSelect(selected, value, event, item);
		}
	}

	<template>
		<div
			class={{this.rootClasses}}
			role={{this.groupRole}}
			aria-label={{this.ariaLabel}}
			aria-labelledby={{this.ariaLabelledBy}}
			aria-describedby={{this.ariaDescribedBy}}
			...attributes
		>
			{{#if this.hasItems}}
				{{#each this.items as |item|}}
					<UlxOptionSegmentItem
						@type={{this.type}}
						@item={{item}}
						@disabled={{this.isDisabled}}
						@compact={{this.isCompact}}
						@onSelect={{this.handleItemSelect}}
						@hasControlBlock={{has-block "control"}}
						@hasTitleBlock={{has-block "title"}}
						@hasDescriptionBlock={{has-block "description"}}
						@hasNestedBlock={{has-block "nested"}}
					>
						<:control as |currentItem|>
							{{yield currentItem to="control"}}
						</:control>

						<:title as |currentItem|>
							{{yield currentItem to="title"}}
						</:title>

						<:description as |currentItem|>
							{{yield currentItem to="description"}}
						</:description>

						<:nested as |currentItem|>
							{{yield currentItem to="nested"}}
						</:nested>
					</UlxOptionSegmentItem>
				{{/each}}
			{{else}}
				<UlxOptionSegmentItem
					@type={{this.type}}
					@item={{hash
						value=this.args.value
						selected=this.isSelected
						disabled=this.isDisabled
						compact=this.isCompact
						title=this.title
						description=this.description
					}}
					@disabled={{this.isDisabled}}
					@compact={{this.isCompact}}
					@onSelect={{this.handleItemSelect}}
					@hasControlBlock={{has-block "control"}}
					@hasTitleBlock={{has-block "title"}}
					@hasDescriptionBlock={{has-block "description"}}
					@hasNestedBlock={{has-block "nested"}}
				>
					<:control as |currentItem|>
						{{yield currentItem to="control"}}
					</:control>

					<:title as |currentItem|>
						{{yield currentItem to="title"}}
					</:title>

					<:description as |currentItem|>
						{{yield currentItem to="description"}}
					</:description>

					<:nested as |currentItem|>
						{{yield currentItem to="nested"}}
					</:nested>
				</UlxOptionSegmentItem>
			{{/if}}
		</div>
	</template>
}
