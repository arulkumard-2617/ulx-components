import Component from "@glimmer/component";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../../utils/component-config";

/**
 * Internal building block for `UlxRadio`.
 *
 * Renders a single radio row (input + circle + right-side label).
 *
 * @class UlxRadioItem
 * @param {string} id - Input id.
 * @param {boolean} [checked=false] - Checked state.
 * @param {boolean} [disabled=false] - Disabled state.
 * @param {boolean} [invalid=false] - Invalid state (aria + styling).
 * @param {boolean} [filled=false] - Filled variant styling.
 * @param {string} [size] - Size variant.
 * @param {string} [customClass] - Extra classes for the row wrapper.
 * @param {string} [itemLabel] - Label text rendered next to the radio.
 * @param {boolean} [required=false] - Adds `required` / `aria-required` to the input.
 * @param {boolean} [showRequiredStar=false] - Appends `*` next to the right-side label text.
 * @param {string} [ariaDescribedBy] - `aria-describedby` value.
 * @param {string} [ariaErrorMessage] - `aria-errormessage` value.
 * @param {Function} [onChange] - Fired on input change: (event) => void.
 */
export default class UlxRadioItem extends Component {
	get isChecked() {
		return !!this.args.checked;
	}

	get resolvedSize() {
		return this.args.size ?? "xxxs-size";
	}

	get resolvedVariant() {
		return this.args.filled ? "filled" : "outlined";
	}

	get baseClass() {
		return getComponentClass("radiobutton");
	}

	get wrapperClass() {
		const { invalid = false, disabled = false, customClass } = this.args;

		const parts = [this.baseClass];
		parts.push(this.resolvedSize);
		parts.push(this.resolvedVariant);

		// States
		invalid && parts.push("invalid");
		disabled && parts.push("disabled");
		this.isChecked && parts.push("checked");

		// Custom classes
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get inputClass() {
		// `radio.less` uses unprefixed inner class hooks.
		return "radiobutton-input";
	}

	get boxClass() {
		const { disabled = false } = this.args;

		const parts = ["radiobutton-box"];
		disabled && parts.push("disabled");

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get iconClass() {
		// NOTE: `radio.less` includes styles that key off both the parent
		// `.checked` and the icon's own `.checked` class (variant-dependent).
		const { disabled = false } = this.args;

		const parts = ["radiobutton-icon"];
		this.isChecked && parts.push("checked");
		disabled && parts.push("disabled");

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get hasItemLabelText() {
		const v = this.args.itemLabel;
		return typeof v === "string" && v.length > 0;
	}

	get itemLabelClass() {
		const { disabled = false } = this.args;

		const parts = ["radiobutton-label"];
		disabled && parts.push("disabled");

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	<template>
		<div class={{this.wrapperClass}}>
			<input
				id={{@id}}
				class={{this.inputClass}}
				aria-invalid={{if @invalid "true" "false"}}
				aria-describedby={{@ariaDescribedBy}}
				aria-errormessage={{@ariaErrorMessage}}
				type="radio"
				checked={{@checked}}
				name={{@name}}
				value={{@value}}
				disabled={{@disabled}}
				required={{@required}}
				aria-required={{@required}}
				{{on "change" @onChange}}
				...attributes
			/>

			<div class={{this.boxClass}}>
				<div class={{this.iconClass}}></div>
			</div>

			{{#if (has-block "itemLabel")}}
				<label for={{@id}} class={{this.itemLabelClass}}>
					{{yield to="itemLabel"}}
					{{#if @showRequiredStar}}
						<span class="fg-red" aria-hidden="true">*</span>
					{{/if}}
				</label>
			{{else if this.hasItemLabelText}}
				<label for={{@id}} class={{this.itemLabelClass}}>
					{{@itemLabel}}
					{{#if @showRequiredStar}}
						<span class="fg-red" aria-hidden="true">*</span>
					{{/if}}
				</label>
			{{/if}}
		</div>
	</template>
}
