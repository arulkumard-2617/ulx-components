import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { NAMESPACE, getComponentClass } from "../../../utils/component-config";
import {
	buildAriaDescribedBy,
	buildFieldClass,
	isInvalidState,
	normalizeRules,
	resolveKey
} from "../../../utils/input-util";
import UlxCheckboxItem from "./checkbox-item.gjs";

function buildCheckboxId(namespace, idArg, key) {
	return idArg ?? `${namespace}-checkbox-${key}`;
}

/**
 * Checkbox component with support for:
 * - single checkbox
 * - checkbox items list via `@items`
 * - indeterminate visual state (single checkbox or per-item)
 * - validation/help/error text (field-level)
 *
 * ## WCAG
 * - Proper label association via `id` and `for` attributes
 * - Help/error associated via `aria-describedby`
 * - Required fields marked with `aria-required` (single checkbox)
 * - Invalid state communicated via `aria-invalid`
 * - Indeterminate state communicated via `aria-checked="mixed"`
 *
 * @class UlxCheckbox
 * @param {string} [id] - Unique ID for the checkbox input. Auto-generated if not provided.
 * @param {string} [key] - Stable key used for auto-generated IDs (when `@id` is not provided).
 *
 * @param {Array<object>} [items] - Optional list of checkbox items. When provided, the component renders a group.
 *   Each item supports: `{ label, checked, indeterminate, disabled, customClass, id }`
 * @param {Function} [onItemChange] - When `@items` is provided: (item, checked, event) => void.
 *
 * @param {boolean} [checked] - Whether the checkbox is checked (controlled) (single mode).
 * @param {boolean} [indeterminate=false] - Whether the checkbox is in indeterminate state (single mode).
 * @param {string} [name] - Name attribute for form submissions (single mode).
 * @param {string} [value] - Value attribute for form submissions (single mode).
 *
 * @param {string} [label] - Field label rendered above the checkbox/group (UlxInput pattern).
 * @param {string} [labelRight] - Right-side meta text shown in the field label (e.g. "10 / 20").
 * @param {string} [itemLabel] - Single checkbox label rendered next to the checkbox (single mode).
 *
 * @param {object} [rules] - Rules object for constraints (old component pattern): { required: true }
 * @param {string} [helpText] - Help text displayed below the field.
 * @param {string} [error] - Error message displayed below the field. Sets invalid state.
 *
 * @param {boolean} [disabled=false] - Whether the checkbox is disabled (single mode) or disables all items (group mode).
 * @param {boolean} [invalid=false] - Whether the field is in invalid state.
 * @param {boolean} [filled=false] - Whether to use filled variant styling.
 * @param {string} [size] - Size variant: "xs-size", "s-size", "m-size", "l-size", "xl-size".
 *
 * @param {string} [fieldClass] - Extra classes for the field wrapper (appended to base `field`).
 * @param {string} [groupClass] - Extra classes for the items wrapper (appended to base `ulx-checkbox-group`).
 * @param {string} [customClass] - Extra classes for the checkbox wrapper (single mode or per-item).
 * @param {string} [ariaDescribedBy] - Override `aria-describedby` for the checkbox input (used by group rendering).
 * @param {string} [ariaErrorMessage] - Override `aria-errormessage` for the checkbox input (used by group rendering).
 *
 * @param {Function} [onChange] - Callback fired on change event (single/bare): (event) => void.
 * @param {Function} [onCheckedChange] - Callback fired with next checked value (single/bare): (checked, event) => void.
 */
export default class UlxCheckbox extends Component {
	get rules() {
		return normalizeRules(this.args.rules);
	}

	get key() {
		return resolveKey(this, this.args.key);
	}

	get checkboxId() {
		return buildCheckboxId(NAMESPACE, this.args.id, this.key);
	}

	get items() {
		return Array.isArray(this.args.items) ? this.args.items : [];
	}

	get hasItems() {
		return this.items.length > 0;
	}

	get itemIds() {
		return this.items.map((item, index) => {
			const id = item?.id;
			return typeof id === "string" && id.length > 0 ? id : `${this.checkboxId}-item-${index}`;
		});
	}

	get labelForId() {
		return this.hasItems ? this.itemIds[0] : this.checkboxId;
	}

	get isRequired() {
		return !!this.rules.required;
	}

	get isInvalid() {
		return isInvalidState(this.args.invalid, this.args.error);
	}

	get fieldClass() {
		return buildFieldClass(this.args.fieldClass);
	}

	get ariaDescribedBy() {
		if (this.args.ariaDescribedBy) return this.args.ariaDescribedBy;
		return buildAriaDescribedBy(this.checkboxId, {
			helpText: this.args.helpText,
			error: this.args.error
		});
	}

	get ariaErrorMessage() {
		if (this.args.ariaErrorMessage) return this.args.ariaErrorMessage;
		return this.args.error ? `${this.checkboxId}-error` : undefined;
	}

	get groupClass() {
		const { groupClass } = this.args;

		const parts = [getComponentClass("checkbox-group")];
		groupClass && parts.push(groupClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	@action
	handleChange(event) {
		if (this.args.onChange) {
			this.args.onChange(event);
		}
		if (this.args.onCheckedChange) {
			this.args.onCheckedChange(event.target.checked, event);
		}
	}

	@action
	handleItemChange(item, event) {
		if (!this.args.onItemChange) return;
		this.args.onItemChange(item, event.target.checked, event);
	}

	<template>
		<div class={{this.fieldClass}}>
			{{! Field label (UlxInput pattern) }}
			{{#if (has-block "label")}}
				<label for={{this.labelForId}}>
					<span class="label-text">
						{{yield to="label"}}
						{{#if this.isRequired}}
							<span class="fg-red" aria-hidden="true">*</span>
						{{/if}}
					</span>
					{{#if @labelRight}}
						<span class="label-right">{{@labelRight}}</span>
					{{/if}}
				</label>
			{{else if @label}}
				<label for={{this.labelForId}}>
					<span class="label-text">
						{{@label}}
						{{#if this.isRequired}}
							<span class="fg-red" aria-hidden="true">*</span>
						{{/if}}
					</span>
					{{#if @labelRight}}
						<span class="label-right">{{@labelRight}}</span>
					{{/if}}
				</label>
			{{/if}}

			{{#if this.hasItems}}
				<div class={{this.groupClass}}>
					{{#each this.items key="@index" as |item index|}}
						<UlxCheckboxItem
							@id={{this.itemIds.index}}
							@checked={{item.checked}}
							@indeterminate={{item.indeterminate}}
							@disabled={{if @disabled true item.disabled}}
							@invalid={{this.isInvalid}}
							@filled={{@filled}}
							@size={{@size}}
							@customClass={{item.customClass}}
							@itemLabel={{item.label}}
							@ariaDescribedBy={{this.ariaDescribedBy}}
							@ariaErrorMessage={{this.ariaErrorMessage}}
							@onChange={{fn this.handleItemChange item}}
						/>
					{{/each}}
				</div>
			{{else}}
				{{! NOTE: Named blocks (e.g. <:itemLabel>) must be direct children of a component invocation. }}
				{{#if (has-block "itemLabel")}}
					<UlxCheckboxItem
						...attributes
						@id={{this.checkboxId}}
						@checked={{@checked}}
						@indeterminate={{@indeterminate}}
						@disabled={{@disabled}}
						@invalid={{this.isInvalid}}
						@filled={{@filled}}
						@size={{@size}}
						@customClass={{@customClass}}
						@required={{this.isRequired}}
						@showRequiredStar={{if (has-block "label") false (if @label false this.isRequired)}}
						@ariaDescribedBy={{this.ariaDescribedBy}}
						@ariaErrorMessage={{this.ariaErrorMessage}}
						@name={{@name}}
						@value={{@value}}
						@onChange={{this.handleChange}}
					>
						<:itemLabel>
							{{yield to="itemLabel"}}
						</:itemLabel>
					</UlxCheckboxItem>
				{{else}}
					<UlxCheckboxItem
						...attributes
						@id={{this.checkboxId}}
						@checked={{@checked}}
						@indeterminate={{@indeterminate}}
						@disabled={{@disabled}}
						@invalid={{this.isInvalid}}
						@filled={{@filled}}
						@size={{@size}}
						@customClass={{@customClass}}
						@itemLabel={{@itemLabel}}
						@required={{this.isRequired}}
						@showRequiredStar={{if (has-block "label") false (if @label false this.isRequired)}}
						@ariaDescribedBy={{this.ariaDescribedBy}}
						@ariaErrorMessage={{this.ariaErrorMessage}}
						@name={{@name}}
						@value={{@value}}
						@onChange={{this.handleChange}}
					/>
				{{/if}}
			{{/if}}

			{{#if @helpText}}
				<div id="{{this.checkboxId}}-help" class="help-text">{{@helpText}}</div>
			{{/if}}

			{{#if @error}}
				<div id="{{this.checkboxId}}-error" class="error-message" role="alert" aria-atomic="true">
					{{@error}}
				</div>
			{{/if}}
		</div>
	</template>
}
