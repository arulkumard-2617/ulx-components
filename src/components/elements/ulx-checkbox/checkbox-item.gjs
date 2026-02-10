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
 * @param {string} [size] - Size variant.
 * @param {string} [customClass] - Extra classes for the row wrapper.
 * @param {string} [itemLabel] - Label text rendered next to the checkbox.
 * @param {boolean} [required=false] - Adds `required` / `aria-required` to the input.
 * @param {boolean} [showRequiredStar=false] - Appends `*` next to the right-side label text.
 * @param {string} [ariaDescribedBy] - `aria-describedby` value.
 * @param {string} [ariaErrorMessage] - `aria-errormessage` value.
 * @param {Function} [onChange] - Fired on input change: (event) => void.
 */
export default class UlxCheckboxItem extends Component {
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
		return this.args.size ?? "s-size";
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
		this.isIndeterminate && parts.push("indeterminate");
		!this.isIndeterminate && this.isChecked && parts.push("checked");

		// Custom classes
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get checkboxIconClass() {
		const { disabled = false } = this.args;

		const parts = ["checkbox-icon"];
		disabled && parts.push("disabled");
		this.isIndeterminate && parts.push("indeterminate");

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get checkboxIconName() {
		// Render the tick icon only for checked state.
		// Indeterminate state uses the existing ULS `.checkbox-icon.indeterminate::after` dash styling.
		return this.isChecked && !this.isIndeterminate ? "ls-tick-icon" : undefined;
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

	<template>
		<div class={{this.wrapperClass}}>
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
					>
						<:icon>
							<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z"
									fill="currentColor"
								></path>
							</svg>
						</:icon>
					</UlxIcon>
				{{/if}}
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
