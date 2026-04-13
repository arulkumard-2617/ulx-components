import Component from "@glimmer/component";
import { action } from "@ember/object";
import { guidFor } from "@ember/object/internals";
import { on } from "@ember/modifier";
import { joinClassNames } from "../../utils/class-names";
import { NAMESPACE } from "../../utils/component-config";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";
import { optionSegmentRowKey } from "../../utils/input-util";
import UlxRadio from "../ulx-radio/index.gjs";
import UlxCheckbox from "../ulx-checkbox/index.gjs";
import UlxTristateCheckbox from "../ulx-tristate-checkbox/index.gjs";

/**
 * Internal building block for `UlxOptionSegment`.
 *
 * Renders a single option card (`.option-item`) inside the
 * `.ulx-option-segments` group container.
 *
 * @class UlxOptionSegmentItem
 * @param {"radio"|"checkbox"|"tristate"|"basic"|"color-swatch"} [type="radio"] - Type of the option.
 * @param {object} item - Option data object:
 *   - {string} value
 *   - {boolean} [selected]
 *   - {boolean} [disabled]
 *   - {boolean} [compact]
 *   - {string} [title]
 *   - {string} [description]
 *   - {string} [id] - Unique id for the embedded control when items can reorder; otherwise derived from `@segmentIdBase` + `@itemIndex`.
 *   - {string} [itemClass] - Per-item CSS class for the item root (merged after group `itemClass` from parent)
 *   - {string} [optionColorCode] - Sets `--ulx-option-color-code` when the group uses **color-swatch** (`segments.less`).
 *   - {string} [colorCode] - Alias of **optionColorCode**.
 *   - {Array<object>} [nestedItems] - Optional nested checkbox rows.
 * @param {string} [itemClass] - Group-level class from `UlxOptionSegment`; applied before each `item.itemClass`
 * @param {number} [itemIndex=0] - Index in the parent list (stable input ids with `@segmentIdBase`).
 * @param {string} [controlId] - Must match parent `itemEntries.rowKey` / `{{#each key=}}` (same string as native input `id`).
 * @param {string} [segmentIdBase] - Id base from parent `UlxOptionSegment`.
 * @param {boolean} [disabled=false] - Group-level disabled flag (overrides item.disabled).
 * @param {boolean} [compact=false] - Group-level compact flag (fallback when item.compact is undefined).
 * @param {Function} [onSelect] - Called when the option is toggled:
 *   `(selected, value, event, item) => void`.
 * @param {string} [radiogroupFocusMemberId] - For `@type="color-swatch"`, set by `UlxOptionSegment` (roving `tabindex`).
 * @param {Function} [onColorSwatchRadiogroupNavigate] - For `@type="color-swatch"`, set by `UlxOptionSegment` for arrow / Home / End (not a public consumer argument).
 * @param {string} [dataQa] - Root data-qa prefix from parent option segment.
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

	get isBasicType() {
		return this.type === "basic";
	}

	get isColorSwatchType() {
		return this.type === "color-swatch";
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "option-segment-item");
	}

	@action
	getDataQa(part) {
		return buildDataQa(this.rootDataQa, part);
	}

	get item() {
		return this.args.item ?? {};
	}

	/**
	 * Stable id for the native radio/checkbox input — identical to the parent `rowKey`
	 * so `{{#each key="rowKey"}}` and the input `id` never diverge.
	 */
	get stableControlId() {
		const { controlId } = this.args;
		if (typeof controlId === "string" && controlId.length > 0) {
			return controlId;
		}

		const fromKey = optionSegmentRowKey(
			this.item,
			this.args.itemIndex ?? 0,
			this.args.segmentIdBase
		);
		if (typeof fromKey === "string" && fromKey.length > 0) {
			return fromKey;
		}

		return `ulx-option-segment-control-${guidFor(this)}`;
	}

	get hasVisibleTitle() {
		return this.hasTitleBlock || (typeof this.title === "string" && this.title.length > 0);
	}

	get hasVisibleDescription() {
		return (
			this.hasDescriptionBlock ||
			(typeof this.description === "string" && this.description.length > 0)
		);
	}

	get optionTitleId() {
		return this.hasVisibleTitle ? `${this.stableControlId}-title` : undefined;
	}

	get optionDescriptionId() {
		return this.hasVisibleDescription ? `${this.stableControlId}-description` : undefined;
	}

	/** When there is no title region, expose a minimal inline label (e.g. string value). */
	get fallbackItemLabel() {
		if (this.hasVisibleTitle) {
			return "";
		}
		const v = this.value;
		return typeof v === "string" && v.length > 0 ? v : "";
	}

	get colorSwatchAriaLabel() {
		if (!this.isColorSwatchType || this.hasVisibleTitle) {
			return undefined;
		}

		const label = this.fallbackItemLabel || (typeof this.value === "string" ? this.value : "");
		return typeof label === "string" && label.length > 0 ? label : undefined;
	}

	get colorSwatchAriaLabelledBy() {
		if (!this.isColorSwatchType || !this.hasVisibleTitle || !this.optionTitleId) {
			return undefined;
		}

		return this.optionTitleId;
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
		const { itemClass: groupItemClass } = this.args;
		return joinClassNames(
			"option-item",
			this.isSelected && "is-selected",
			this.isDisabled && "disabled",
			this.isCompact && "compact",
			groupItemClass,
			itemClass
		);
	}

	get optionColorInlineStyle() {
		const raw = this.item.optionColorCode ?? this.item.colorCode;
		if (typeof raw !== "string" || raw.length === 0) {
			return undefined;
		}
		return `--${NAMESPACE}-option-color-code: ${raw};`;
	}

	get itemRole() {
		if (this.usesBuiltInToggleControl) {
			return undefined;
		}

		if (this.isBasicType) {
			return "button";
		}

		if (this.isCheckboxType || this.isTristateType) {
			return "checkbox";
		}

		if (this.isRadioType || this.isColorSwatchType) {
			return "radio";
		}

		return undefined;
	}

	get isToggleRole() {
		if (this.usesBuiltInToggleControl) {
			return false;
		}

		const role = this.itemRole;
		return role === "radio" || role === "checkbox";
	}

	get tabIndex() {
		if (this.usesBuiltInToggleControl) {
			return undefined;
		}

		if (this.isDisabled) {
			return -1;
		}

		if (this.isBasicType) {
			return 0;
		}

		if (this.isColorSwatchType) {
			const targetId = this.args.radiogroupFocusMemberId;
			if (typeof targetId !== "string" || targetId.length === 0) {
				return -1;
			}

			return this.stableControlId === targetId ? 0 : -1;
		}

		return this.isToggleRole ? 0 : undefined;
	}

	get ariaPressed() {
		if (!this.isBasicType || this.usesBuiltInToggleControl) {
			return undefined;
		}

		return this.isSelected ? "true" : "false";
	}

	get ariaChecked() {
		if (this.usesBuiltInToggleControl) {
			return undefined;
		}

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
		if (this.usesBuiltInToggleControl) {
			return undefined;
		}

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

	/**
	 * When true, the native control handles focus and keyboard; the card must not be
	 * a second tab stop or ARIA toggle (avoids focus traps and double-toggle on Space/click).
	 */
	get usesBuiltInToggleControl() {
		return (
			this.hasControlSection &&
			!this.hasControlBlock &&
			(this.isRadioType || this.isCheckboxType || this.isTristateType)
		);
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
			} else if (this.isRadioType || this.isColorSwatchType) {
				nextSelected = true;
			} else {
				nextSelected = !this.isSelected;
			}

			this.args.onSelect(nextSelected, this.value, event, this.item);
		}
	}

	@action
	handleClick(event) {
		if (this.isDisabled) {
			return;
		}

		// Built-in control: native input/label already toggles; ignore bubbled clicks from `.option-control`.
		if (this.usesBuiltInToggleControl) {
			const controlRoot = event.currentTarget?.querySelector?.(".option-control");
			if (controlRoot?.contains(event.target)) {
				return;
			}
		}

		this.handleSelect(event);
	}

	@action
	handleKeyDown(event) {
		if (this.isDisabled) {
			return;
		}

		if (this.isColorSwatchType && typeof this.args.onColorSwatchRadiogroupNavigate === "function") {
			let intent;
			if (event.key === "ArrowRight" || event.key === "ArrowDown") {
				intent = "next";
			} else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
				intent = "prev";
			} else if (event.key === "Home") {
				intent = "first";
			} else if (event.key === "End") {
				intent = "last";
			}

			if (intent) {
				this.args.onColorSwatchRadiogroupNavigate(intent, this.stableControlId, event);
				return;
			}
		}

		const keyboardActivatable =
			(this.isToggleRole || this.isBasicType) && !this.usesBuiltInToggleControl;

		if (!keyboardActivatable) {
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
			style={{this.optionColorInlineStyle}}
			data-qa={{this.rootDataQa}}
			id={{if this.isColorSwatchType this.stableControlId}}
			role={{this.itemRole}}
			tabindex={{this.tabIndex}}
			aria-pressed={{this.ariaPressed}}
			aria-checked={{this.ariaChecked}}
			aria-disabled={{this.ariaDisabled}}
			aria-label={{this.colorSwatchAriaLabel}}
			aria-labelledby={{this.colorSwatchAriaLabelledBy}}
			{{on "click" this.handleClick}}
			{{on "keydown" this.handleKeyDown}}
			...attributes
		>
			{{#if this.hasControlSection}}
				<div class="option-control" data-qa={{this.getDataQa "control"}}>
					{{#if this.hasControlBlock}}
						{{yield this.item to="control"}}
					{{else if this.isRadioType}}
						<UlxRadio
							@id={{this.stableControlId}}
							@checked={{this.isSelected}}
							@disabled={{this.isDisabled}}
							@itemLabel={{this.fallbackItemLabel}}
							@customClass="option-control-radio"
							@onCheckedChange={{this.handleControlCheckedChange}}
							@ariaDescribedBy={{this.optionDescriptionId}}
							aria-labelledby={{if this.optionTitleId this.optionTitleId}}
						/>
					{{else if this.isCheckboxType}}
						<UlxCheckbox
							@id={{this.stableControlId}}
							@checked={{this.isSelected}}
							@disabled={{this.isDisabled}}
							@itemLabel={{this.fallbackItemLabel}}
							@hideLabel={{this.hasVisibleTitle}}
							@customClass="option-control-checkbox"
							@onCheckedChange={{this.handleControlCheckedChange}}
							@ariaDescribedBy={{this.optionDescriptionId}}
							aria-labelledby={{if this.optionTitleId this.optionTitleId}}
						/>
					{{else if this.isTristateType}}
						<UlxTristateCheckbox
							@id={{this.stableControlId}}
							@value={{this.tristateValue}}
							@disabled={{this.isDisabled}}
							@itemLabel={{this.fallbackItemLabel}}
							@hideLabel={{this.hasVisibleTitle}}
							@customClass="option-control-checkbox"
							@onValueChange={{this.handleTristateValueChange}}
							@ariaDescribedBy={{this.optionDescriptionId}}
							aria-labelledby={{if this.optionTitleId this.optionTitleId}}
							{{on "click" this.stopNestedClickPropagation}}
						/>
					{{/if}}
				</div>
			{{/if}}

			<div class="option-content" data-qa={{this.getDataQa "content"}}>
				{{#if this.hasContentBlock}}
					{{yield this.item to="content"}}
				{{/if}}

				{{#if this.hasTitleBlock}}
					<div class="option-title" data-qa={{this.getDataQa "title"}} id={{this.optionTitleId}}>
						{{yield this.item to="title"}}
					</div>
				{{else if this.title}}
					<div class="option-title" data-qa={{this.getDataQa "title"}} id={{this.optionTitleId}}>
						{{this.title}}
					</div>
				{{/if}}

				{{#if this.hasDescriptionBlock}}
					<div
						class="option-description"
						data-qa={{this.getDataQa "description"}}
						id={{this.optionDescriptionId}}
					>
						{{yield this.item to="description"}}
					</div>
				{{else if this.description}}
					<div
						class="option-description"
						data-qa={{this.getDataQa "description"}}
						id={{this.optionDescriptionId}}
					>
						{{this.description}}
					</div>
				{{/if}}

				{{#if this.hasNestedBlock}}
					<div
						class="option-nested"
						data-qa={{this.getDataQa "nested"}}
						{{on "click" this.stopNestedClickPropagation}}
					>
						{{yield this.item to="nested"}}
					</div>
				{{else if this.hasNestedItems}}
					<div
						class="option-nested"
						data-qa={{this.getDataQa "nested"}}
						{{on "click" this.stopNestedClickPropagation}}
					>
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
