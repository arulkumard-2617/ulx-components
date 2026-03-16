import Component from "@glimmer/component";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../../utils/component-config";
import UlxIcon from "../ulx-icon/index.gjs";

/**
 * Internal building block for `UlxCheckbox`.
 *
 * Renders a single checkbox row (input + box + tick icon + right-side label).
 *
 * @class UlxCheckboxItem
 * @param {string} id - Input id.
 * @param {boolean} [checked=false] - Checked state.
 * @param {boolean} [indeterminate=false] - Indeterminate visual state.
 * @param {boolean} [disabled=false] - Disabled state.
 * @param {boolean} [invalid=false] - Invalid state (aria + styling).
 * @param {boolean} [filled=false] - Filled variant styling.
 * @param {string} [size="m-size"] - Size variant. Defaults to "m-size" when not provided.
 * @param {string} [iconSize="s20"] - Icon size class passed to `UlxIcon` (e.g. "s20").
 * @param {string} [customClass] - Extra classes for the row wrapper.
 * @param {string} [itemLabel] - Label text rendered next to the checkbox.
 * @param {boolean} [required=false] - Adds `required` / `aria-required` to the input.
 * @param {boolean} [showRequiredStar=false] - Appends `*` next to the right-side label text.
 * @param {string} [ariaDescribedBy] - `aria-describedby` value.
 * @param {string} [ariaErrorMessage] - `aria-errormessage` value.
 * @param {string} [uncheckIconName] - When set and not checked and not indeterminate, show this icon (e.g. tristate unchecked).
 * @param {boolean} [hideLabel=false] - When true, do not render the right-side label (used for control-only usage).
 * @param {string} [dataQa] - Optional root data-qa override. Defaults to "ulx-checkbox-item".
 * @param {Function} [onChange] - Fired on input change: (event) => void.
 */
export default class UlxCheckboxItem extends Component {
	get rootDataQa() {
		return this.args.dataQa ?? "ulx-checkbox-item";
	}

	get isIndeterminate() {
		return !!this.args.indeterminate;
	}

	get isChecked() {
		return !!this.args.checked;
	}

	get baseClass() {
		return getComponentClass("checkbox");
	}

	get resolvedSize() {
		return this.args.size ?? "m-size";
	}

	get resolvedVariant() {
		return this.args.filled ? "filled" : "outlined";
	}

	get wrapperClass() {
		const { invalid = false, disabled = false, customClass } = this.args;

		const parts = [this.baseClass];
		parts.push(this.resolvedSize);
		parts.push(this.resolvedVariant);

		// States
		invalid && parts.push("invalid");
		disabled && parts.push("disabled");

		// Visual state
		// For indeterminate, apply both "indeterminate" and "checked"
		// so styles targeting either state class are active.
		this.isIndeterminate && parts.push("indeterminate", "checked");
		!this.isIndeterminate && this.isChecked && parts.push("checked");

		// Custom classes
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get isUncheckedWithIcon() {
		return !this.isChecked && !this.isIndeterminate && this.args.uncheckIconName;
	}

	get checkboxIconClass() {
		const { disabled = false } = this.args;

		const parts = ["check-icon"];
		disabled && parts.push("disabled");
		this.isIndeterminate && parts.push("indeterminate");
		this.isUncheckedWithIcon && parts.push("unchecked");

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get checkboxIconName() {
		if (this.isChecked && !this.isIndeterminate) return "tick-thick-icon";
		if (this.isUncheckedWithIcon) return this.args.uncheckIconName;
		return undefined;
	}

	get ariaChecked() {
		return this.isIndeterminate ? "mixed" : undefined;
	}

	get hasItemLabelText() {
		const { itemLabel } = this.args;
		return typeof itemLabel === "string" && itemLabel.length > 0;
	}

	get itemLabelClass() {
		const { disabled = false } = this.args;

		const parts = ["checkbox-label"];
		disabled && parts.push("disabled");

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get checkboxIconSize() {
		return this.args.iconSize;
	}

	<template>
		<div class={{this.wrapperClass}} data-qa={{this.rootDataQa}}>
			<input
				id={{@id}}
				class="checkbox-input"
				aria-invalid={{if @invalid "true" "false"}}
				aria-describedby={{@ariaDescribedBy}}
				aria-errormessage={{@ariaErrorMessage}}
				aria-checked={{this.ariaChecked}}
				type="checkbox"
				checked={{@checked}}
				name={{@name}}
				value={{@value}}
				disabled={{@disabled}}
				required={{@required}}
				aria-required={{@required}}
				{{on "change" @onChange}}
				...attributes
			/>

			<div class="checkbox-box">
				{{#if this.checkboxIconName}}
					<UlxIcon
						@type="font"
						@iconName={{this.checkboxIconName}}
						@customClass={{this.checkboxIconClass}}
						@size={{this.checkboxIconSize}}
						@componentClass="bs-icons1"
					/>
				{{else if this.isIndeterminate}}
					<UlxIcon @customClass={{this.checkboxIconClass}} @size={{this.checkboxIconSize}}>
						<:icon>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								focusable="false"
							>
								<line
									x1="6"
									y1="12"
									x2="18"
									y2="12"
									stroke="currentColor"
									stroke-width="1"
									stroke-linecap="round"
								/>
							</svg>
						</:icon>
					</UlxIcon>
				{{/if}}
			</div>

			{{#unless @hideLabel}}
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
			{{/unless}}
		</div>
	</template>
}
