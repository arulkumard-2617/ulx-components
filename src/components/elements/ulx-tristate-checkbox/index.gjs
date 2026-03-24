import Component from "@glimmer/component";
import { action } from "@ember/object";
import { NAMESPACE, getComponentClass } from "../../../utils/component-config";
import {
	isInvalidState,
	normalizeRules,
	resolveKey
} from "../../../utils/input-util";
import UlxCheckboxItem from "../ulx-checkbox/checkbox-item.gjs";

function buildTristateCheckboxId(namespace, idArg, key) {
	if (typeof idArg === "string" && idArg.length) return idArg;
	if (typeof key === "string" && key.length) return key;
	return `${namespace}-tristatecheckbox-${key}`;
}

/**
 * Tri-state checkbox component.
 *
 * Cycles between three visual states:
 * - checked (tick icon)
 * - indeterminate (horizontal dash)
 * - unchecked (empty box)
 *
 * ## WCAG
 * - Uses native `<input type="checkbox">` semantics for keyboard and screen readers.
 * - Exposes indeterminate state via `aria-checked="mixed"` (handled by `UlxCheckboxItem`).
 * - Supports external labelling via `@itemLabel` or `aria-*` attributes through `...attributes`.
 *
 * With `UlxField`, set `@fieldId` on the field and pass `@key={{field.key}}` on the control plus `aria-describedby` / `aria-errormessage` from the control hash.
 *
 * @class UlxTristateCheckbox
 * @param {string} [id] - Unique id for the input and label `for`. Auto-generated if omitted.
 * @param {string} [key] - Stable key used for auto-generated ids when `@id` is not provided.
 *
 * @param {boolean|null} [value=false] - Current value: `true` (checked), `false` (unchecked), `null` (indeterminate).
 * @param {Function} [onValueChange] - Callback fired with next value on toggle: (nextValue, event) => void.
 *
 * @param {object} [rules] - Rules object (aligned with `UlxCheckbox`): `{ required: true }` sets required on the input.
 * @param {boolean} [disabled=false] - Disabled state.
 * @param {boolean} [invalid=false] - Invalid state (aria + styling).
 * @param {string} [error] - When set, field is treated as invalid (same pattern as `UlxCheckbox` / `UlxField`).
 * @param {boolean} [filled=false] - Filled visual variant.
 * @param {string} [size="m-size"] - Size variant: "xxxs-size", "xs-size", "s-size", "m-size", "l-size", "xl-size".
 * @param {string} [customClass] - Extra classes applied in addition to `ulx-tristatecheckbox ulx-checkbox`.
 *
 * @param {string} [itemLabel] - Right-side label text.
 * @param {boolean} [required=false] - Adds `required` / `aria-required` to the input (in addition to `rules.required`).
 * @param {boolean} [showRequiredStar=false] - Appends `*` to the label.
 * @param {string} [ariaDescribedBy] - `aria-describedby` value.
 * @param {string} [ariaErrorMessage] - `aria-errormessage` value.
 * @param {string} [uncheckIconName] - When set, unchecked state shows filled box + this icon (e.g. "close-icon"). When unset, unchecked is normal empty box (nothing selected).
 * @param {boolean} [hideLabel=false] - When true, do not render the right-side label (used for control-only usage).
 * @param {string} [dataQa] - Optional root data-qa override. Defaults to "ulx-tristatecheckbox".
 * @param {string} [name] - Name attribute for form submissions.
 */
export default class UlxTristateCheckbox extends Component {
	get rules() {
		return normalizeRules(this.args.rules);
	}

	get key() {
		return resolveKey(this, this.args.key);
	}

	get tristateCheckboxId() {
		return buildTristateCheckboxId(NAMESPACE, this.args.id, this.key);
	}

	get baseTristateClass() {
		return getComponentClass("tristatecheckbox");
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-tristatecheckbox";
	}

	get rootClasses() {
		const { customClass } = this.args;

		const parts = [this.baseTristateClass];
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get resolvedSize() {
		const { size = "m-size" } = this.args;
		return size;
	}

	get isRequired() {
		const { required = false } = this.args;
		return !!this.rules.required || required;
	}

	get isInvalid() {
		const { invalid = false, error } = this.args;
		return isInvalidState(invalid, error);
	}

	get value() {
		const { value = false } = this.args;
		return value === true || value === false || value === null ? value : false;
	}

	get isChecked() {
		return this.value === true;
	}

	get isIndeterminate() {
		return this.value === null;
	}

	@action
	handleChange(event) {
		const current = this.value;
		const next = current === true ? null : current === null ? false : true;

		this.args.onValueChange?.(next, event);
	}

	<template>
		{{#if (has-block "itemLabel")}}
			<UlxCheckboxItem
				...attributes
				@dataQa={{this.rootDataQa}}
				@id={{this.tristateCheckboxId}}
				@checked={{this.isChecked}}
				@indeterminate={{this.isIndeterminate}}
				@disabled={{@disabled}}
				@invalid={{this.isInvalid}}
				@filled={{@filled}}
				@size={{this.resolvedSize}}
				@customClass={{this.rootClasses}}
				@uncheckIconName={{@uncheckIconName}}
				@hideLabel={{@hideLabel}}
				@required={{this.isRequired}}
				@showRequiredStar={{@showRequiredStar}}
				@ariaDescribedBy={{@ariaDescribedBy}}
				@ariaErrorMessage={{@ariaErrorMessage}}
				@name={{@name}}
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
				@id={{this.tristateCheckboxId}}
				@checked={{this.isChecked}}
				@indeterminate={{this.isIndeterminate}}
				@disabled={{@disabled}}
				@invalid={{this.isInvalid}}
				@filled={{@filled}}
				@size={{this.resolvedSize}}
				@customClass={{this.rootClasses}}
				@uncheckIconName={{@uncheckIconName}}
				@hideLabel={{@hideLabel}}
				@itemLabel={{@itemLabel}}
				@required={{this.isRequired}}
				@showRequiredStar={{@showRequiredStar}}
				@ariaDescribedBy={{@ariaDescribedBy}}
				@ariaErrorMessage={{@ariaErrorMessage}}
				@name={{@name}}
				@onChange={{this.handleChange}}
			/>
		{{/if}}
	</template>
}
