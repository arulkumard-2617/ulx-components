import Component from "@glimmer/component";
import { action } from "@ember/object";
import { getComponentClass } from "../../../utils/component-config";
import UlxCheckboxItem from "../ulx-checkbox/checkbox-item.gjs";

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
 * @class UlxTristateCheckbox
 * @param {string} [id] - Input id. When provided, used for `<input>` and associated `<label>`.
 * @param {boolean|null} [value=false] - Current value: `true` (checked), `false` (unchecked), `null` (indeterminate).
 * @param {Function} [onValueChange] - Callback fired with next value on toggle: (nextValue, event) => void.
 *
 * @param {boolean} [disabled=false] - Disabled state.
 * @param {boolean} [invalid=false] - Invalid state (aria + styling).
 * @param {boolean} [filled=false] - Filled visual variant.
 * @param {string} [size="xxxs-size"] - Size variant: "xxxs-size", "xs-size", "s-size", "m-size", "l-size", "xl-size".
 * @param {string} [customClass] - Extra classes applied in addition to `ulx-tristatecheckbox ulx-checkbox`.
 *
 * @param {string} [itemLabel] - Right-side label text.
 * @param {boolean} [required=false] - Adds `required` / `aria-required` to the input.
 * @param {boolean} [showRequiredStar=false] - Appends `*` to the label.
 * @param {string} [ariaDescribedBy] - `aria-describedby` value.
 * @param {string} [ariaErrorMessage] - `aria-errormessage` value.
 * @param {string} [uncheckIconName] - When set, unchecked state shows filled box + this icon (e.g. "close-icon"). When unset, unchecked is normal empty box (nothing selected).
 * @param {boolean} [hideLabel=false] - When true, do not render the right-side label (used for control-only usage).
 */
export default class UlxTristateCheckbox extends Component {
	get baseTristateClass() {
		return getComponentClass("tristatecheckbox");
	}

	get mergedCustomClass() {
		const { customClass } = this.args;

		const parts = [this.baseTristateClass];
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get resolvedSize() {
		return this.args.size ?? "xxxs-size";
	}

	get value() {
		const v = this.args.value;
		if (v === true || v === false || v === null) return v;
		return false;
	}

	get isChecked() {
		return this.value === true;
	}

	get isIndeterminate() {
		return this.value === null;
	}

	get ariaDescribedBy() {
		return this.args.ariaDescribedBy;
	}

	get uncheckIconName() {
		return this.args.uncheckIconName;
	}

	@action
	handleChange(event) {
		const current = this.value;
		let next;

		if (current === true) {
			next = null;
		} else if (current === null) {
			next = false;
		} else {
			next = true;
		}

		if (typeof this.args.onValueChange === "function") {
			this.args.onValueChange(next, event);
		}
	}

	<template>
		{{#if (has-block "itemLabel")}}
			<UlxCheckboxItem
				...attributes
				@id={{@id}}
				@checked={{this.isChecked}}
				@indeterminate={{this.isIndeterminate}}
				@disabled={{@disabled}}
				@invalid={{@invalid}}
				@filled={{@filled}}
				@size={{this.resolvedSize}}
				@customClass={{this.mergedCustomClass}}
				@uncheckIconName={{@uncheckIconName}}
				@hideLabel={{@hideLabel}}
				@required={{@required}}
				@showRequiredStar={{@showRequiredStar}}
				@ariaDescribedBy={{this.ariaDescribedBy}}
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
				@id={{@id}}
				@checked={{this.isChecked}}
				@indeterminate={{this.isIndeterminate}}
				@disabled={{@disabled}}
				@invalid={{@invalid}}
				@filled={{@filled}}
				@size={{this.resolvedSize}}
				@customClass={{this.mergedCustomClass}}
				@uncheckIconName={{@uncheckIconName}}
				@hideLabel={{@hideLabel}}
				@itemLabel={{@itemLabel}}
				@required={{@required}}
				@showRequiredStar={{@showRequiredStar}}
				@ariaDescribedBy={{this.ariaDescribedBy}}
				@ariaErrorMessage={{@ariaErrorMessage}}
				@name={{@name}}
				@onChange={{this.handleChange}}
			/>
		{{/if}}
	</template>
}
