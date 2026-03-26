import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { NAMESPACE, getComponentClass } from "../../../utils/component-config";
import {
	invokeCheckedChange,
	isInvalidState,
	normalizeRules,
	resolveKey
} from "../../../utils/input-util";
import UlxCheckboxItem from "./checkbox-item.gjs";

function buildCheckboxId(namespace, idArg, key) {
	if (typeof idArg === "string" && idArg.length) return idArg;
	if (typeof key === "string" && key.length) return key;
	return `${namespace}-checkbox-${key}`;
}

/**
 * Checkbox component with support for:
 * - single checkbox
 * - checkbox items list via `@items`
 * - indeterminate visual state (single checkbox or per-item)
 * - invalid state communication (help/error rendering is handled by `UlxField`)
 *
 * ## WCAG
 * - Proper label association via `id` and `for` attributes
 * - Help/error associated via `aria-describedby`
 * - Required fields marked with `aria-required` (single checkbox)
 * - Invalid state communicated via `aria-invalid`
 * - Indeterminate state communicated via `aria-checked="mixed"`
 *
 * @class UlxCheckbox
 * @param {object} [field] - Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.
 * @param {string} [id] - Unique ID for the checkbox input. Auto-generated if not provided.
 * @param {string} [key] - When `@id` is omitted, used as the input id (e.g. `@key={{field.key}}` with `UlxField`); otherwise stable key for auto-generated ids. Overrides `field.key` when set.
 *
 * @param {Array<object>} [items] - Optional list of checkbox items. When provided, the component renders a group.
 *   Each item supports: `{ label, checked, indeterminate, disabled, customClass, id }`.
 *   Provide a string `id` per item when the list can reorder or grow; otherwise ids are derived from index (stable across checked toggles).
 * @param {Function} [onItemChange] - When `@items` is provided: (item, checked, event) => void.
 *
 * @param {boolean} [checked] - Whether the checkbox is checked (controlled) (single mode).
 * @param {boolean} [indeterminate=false] - Whether the checkbox is in indeterminate state (single mode).
 * @param {string} [name] - Name attribute for form submissions (single mode).
 * @param {string} [value] - Value attribute for form submissions (single mode).
 *
 * @param {string} [itemLabel] - Single checkbox label rendered next to the checkbox (single mode).
 *
 * @param {object} [rules] - Rules object for constraints (old component pattern): { required: true }
 *
 * @param {boolean} [disabled=false] - Whether the checkbox is disabled (single mode) or disables all items (group mode).
 * @param {boolean} [invalid=false] - Whether the field is in invalid state.
 * @param {boolean} [filled=false] - Whether to use filled variant styling.
 * @param {string} [size="m-size"] - Size variant: "s-size", "m-size", "l-size".
 *
 * @param {string} [groupClass] - Extra classes for the items wrapper (appended to base `ulx-checkbox-group`).
 * @param {string} [customClass] - Extra classes for the checkbox wrapper (single mode or per-item).
 * @param {string} [ariaDescribedBy] - Override `aria-describedby` for the checkbox input (used by group rendering).
 * @param {string} [ariaErrorMessage] - Override `aria-errormessage` for the checkbox input (used by group rendering).
 *
 * @param {Function} [onChange] - Callback fired on change event (single/bare): (event) => void.
 * @param {Function} [onCheckedChange] - Callback fired with next checked value (single/bare): (checked, event) => void.
 * @param {string} [dataQa] - Optional root data-qa override. Defaults to "ulx-checkbox".
 */
export default class UlxCheckbox extends Component {
	get rules() {
		const { rules: rulesArg } = this.args;
		return normalizeRules(rulesArg ?? this.fieldContext?.rules);
	}

	get fieldContext() {
		const { field } = this.args;
		return field && typeof field === "object" ? field : null;
	}

	get key() {
		const { key: keyArg } = this.args;
		return resolveKey(this, keyArg ?? this.fieldContext?.key);
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

	get itemEntries() {
		return this.items.map((item, index) => {
			const id = item?.id;
			const resolvedId =
				typeof id === "string" && id.length > 0
					? id
					: index === 0
						? this.checkboxId
						: `${this.checkboxId}-item-${index}`;

			return { item, id: resolvedId };
		});
	}

	@action
	getItemId(index) {
		return this.itemEntries?.[index]?.id;
	}

	get isRequired() {
		return !!this.rules.required;
	}

	get isInvalid() {
		const { invalid = false, error: errorArg } = this.args;
		const error = errorArg ?? this.fieldContext?.error;
		return isInvalidState(invalid, error);
	}

	get ariaDescribedBy() {
		const { ariaDescribedBy } = this.args;
		return ariaDescribedBy ?? this.fieldContext?.describedBy;
	}

	get ariaErrorMessage() {
		const { ariaErrorMessage } = this.args;
		return ariaErrorMessage ?? this.fieldContext?.errorId;
	}

	get groupClass() {
		const { groupClass } = this.args;

		const parts = [getComponentClass("checkbox-group")];
		groupClass && parts.push(groupClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-checkbox";
	}

	@action
	handleChange(event) {
		invokeCheckedChange(this.args, event);
	}

	@action
	handleItemChange(item, event) {
		if (!this.args.onItemChange) return;
		this.args.onItemChange(item, event.target.checked, event);
	}

	<template>
		{{#if this.hasItems}}
			<div class={{this.groupClass}} data-qa={{this.rootDataQa}}>
				{{#each this.itemEntries key="id" as |entry|}}
					<UlxCheckboxItem
						@id={{entry.id}}
						@checked={{entry.item.checked}}
						@indeterminate={{entry.item.indeterminate}}
						@disabled={{if @disabled true entry.item.disabled}}
						@invalid={{this.isInvalid}}
						@required={{this.isRequired}}
						@filled={{@filled}}
						@size={{@size}}
						@customClass={{entry.item.customClass}}
						@itemLabel={{entry.item.label}}
						@ariaDescribedBy={{this.ariaDescribedBy}}
						@ariaErrorMessage={{this.ariaErrorMessage}}
						@onChange={{fn this.handleItemChange entry.item}}
					/>
				{{/each}}
			</div>
		{{else}}
			{{! NOTE: Named blocks (e.g. <:itemLabel>) must be direct children of a component invocation. }}
			{{#if (has-block "itemLabel")}}
				<UlxCheckboxItem
					...attributes
					@dataQa={{this.rootDataQa}}
					@id={{this.checkboxId}}
					@checked={{@checked}}
					@indeterminate={{@indeterminate}}
					@disabled={{@disabled}}
					@invalid={{this.isInvalid}}
					@filled={{@filled}}
					@size={{@size}}
					@customClass={{@customClass}}
					@required={{this.isRequired}}
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
					@dataQa={{this.rootDataQa}}
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
					@ariaDescribedBy={{this.ariaDescribedBy}}
					@ariaErrorMessage={{this.ariaErrorMessage}}
					@name={{@name}}
					@value={{@value}}
					@onChange={{this.handleChange}}
				/>
			{{/if}}
		{{/if}}
	</template>
}
