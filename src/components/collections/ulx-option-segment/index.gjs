import Component from "@glimmer/component";
import { action } from "@ember/object";
import { hash } from "@ember/helper";
import { on } from "@ember/modifier";
import { NAMESPACE, getComponentClass } from "../../../utils/component-config";
import { optionSegmentRowKey, resolveKey } from "../../../utils/input-util";
import UlxOptionSegmentItem from "./item.gjs";

function buildOptionSegmentId(namespace, idArg, key) {
	if (typeof idArg === "string" && idArg.length) return idArg;
	if (typeof key === "string" && key.length) return key;
	return `${namespace}-option-segment-${key}`;
}

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
 * - With the default embedded `UlxRadio` / `UlxCheckbox` / `UlxTristateCheckbox`, the
 *   native input is the only tab stop; the card still handles clicks outside `.option-control`.
 * - With a custom `<:control>` block (or non-toggle types), each item card may expose
 *   `role="radio"` / `role="checkbox"` with `aria-checked` and `tabindex` for Space / Enter.
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
 *     - {string} [id] - Unique id for the embedded control when items can reorder; otherwise ids use index (stable when toggling selection).
 * @param {boolean} [selected=false] - Single-item selected state (when `@items` is not used)
 * @param {boolean} [disabled=false] - Disable interaction when true (group-level)
 * @param {boolean} [compact=false] - Use the compact visual variant (group-level)
 * @param {string} [value] - Value passed back to `@onSelect` (single-item mode)
 * @param {Function} [onSelect] - Callback invoked on click / key activation: `(selected, value, event) => void`
 * @param {string} [title] - Primary label text when no `title` block is provided
 * @param {string} [description] - Helper text when no `description` block is provided
 * @param {string} [customClass] - Extra CSS classes appended to the root element
 * @param {string} [id] - Base id for embedded controls and title/description ids (first list item). Auto-generated if omitted.
 * @param {string} [key] - When `@id` is omitted, stable key for auto-generated ids (e.g. `@key={{field.key}}` with `UlxField`).
 * @param {string} [role] - Custom ARIA role for the root element (overrides `@type`-based role)
 * @param {string} [ariaLabel] - Accessible label for the option
 * @param {string} [ariaLabelledBy] - ID of element that labels the option
 * @param {string} [ariaDescribedBy] - ID of element that describes the option
 * @param {string} [dataQa] - Override root data-qa attribute.
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

	get isTristateType() {
		return this.type === "tristate";
	}

	get groupTypeClass() {
		// If consumer provides a custom `control` block, they are not using the
		// built-in `UlxRadio` / `UlxCheckbox` control UI.
		if (this.args.hasControlBlock) {
			return "default-options";
		}

		if (this.isRadioType) {
			return "radio-options";
		}

		if (this.isCheckboxType || this.isTristateType) {
			return "checkbox-options";
		}

		return "default-options";
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

	get segmentKey() {
		return resolveKey(this, this.args.key);
	}

	get segmentIdBase() {
		return buildOptionSegmentId(NAMESPACE, this.args.id, this.segmentKey);
	}

	get items() {
		return this.hasItems ? this.args.items : [];
	}

	/**
	 * Stable row keys for `{{#each}}` so immutable item updates do not recreate
	 * `UlxOptionSegmentItem` (avoids focus loss on the embedded input).
	 */
	get itemEntries() {
		return this.items.map((item, index) => ({
			item,
			index,
			rowKey: optionSegmentRowKey(item, index, this.segmentIdBase)
		}));
	}

	/** Same id as row 0 in `itemEntries` (single-item mode has no `item.id` on the hash). */
	get singleItemControlId() {
		return optionSegmentRowKey({}, 0, this.segmentIdBase);
	}

	get rootClasses() {
		const parts = [this.baseClass, this.groupTypeClass, this.args.customClass];

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

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-option-segment";
	}

	get itemDataQaPrefix() {
		return `${this.rootDataQa}-item`;
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
			data-qa={{this.rootDataQa}}
			role={{this.groupRole}}
			aria-label={{this.ariaLabel}}
			aria-labelledby={{this.ariaLabelledBy}}
			aria-describedby={{this.ariaDescribedBy}}
			...attributes
		>
			{{#if this.hasItems}}
				{{#each this.itemEntries key="rowKey" as |entry|}}
					<UlxOptionSegmentItem
						@dataQa={{this.itemDataQaPrefix}}
						@type={{this.type}}
						@item={{entry.item}}
						@itemIndex={{entry.index}}
						@controlId={{entry.rowKey}}
						@segmentIdBase={{this.segmentIdBase}}
						@disabled={{this.isDisabled}}
						@compact={{this.isCompact}}
						@onSelect={{this.handleItemSelect}}
						@hasControlBlock={{has-block "control"}}
						@hasContentBlock={{has-block "content"}}
						@hasTitleBlock={{has-block "title"}}
						@hasDescriptionBlock={{has-block "description"}}
						@hasNestedBlock={{has-block "nested"}}
					>
						<:control as |currentItem|>
							{{yield currentItem to="control"}}
						</:control>

						<:content as |currentItem|>
							{{yield currentItem to="content"}}
						</:content>

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
					@dataQa={{this.itemDataQaPrefix}}
					@type={{this.type}}
					@item={{hash
						value=this.args.value
						selected=this.isSelected
						disabled=this.isDisabled
						compact=this.isCompact
						title=this.title
						description=this.description
					}}
					@itemIndex={{0}}
					@controlId={{this.singleItemControlId}}
					@segmentIdBase={{this.segmentIdBase}}
					@disabled={{this.isDisabled}}
					@compact={{this.isCompact}}
					@onSelect={{this.handleItemSelect}}
					@hasControlBlock={{has-block "control"}}
					@hasContentBlock={{has-block "content"}}
					@hasTitleBlock={{has-block "title"}}
					@hasDescriptionBlock={{has-block "description"}}
					@hasNestedBlock={{has-block "nested"}}
				>
					<:control as |currentItem|>
						{{yield currentItem to="control"}}
					</:control>

					<:content as |currentItem|>
						{{yield currentItem to="content"}}
					</:content>

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
