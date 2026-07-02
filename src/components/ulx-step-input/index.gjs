import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { t } from "../../utils/i18n";
import {
	getConstraintValue,
	isInvalidState,
	normalizeRules
} from "../../utils/input-util";
import UlxInput from "../ulx-input/index.gjs";
import UlxInputGroup from "../ulx-input-group/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";

/**
 * Number input with increment/decrement step controls in an input group.
 * Controlled via `@value` and `@onChange`. Bounds come from `@min` / `@max` and/or `@rules`.
 *
 * ## Layout
 * - Number field with optional text label addon and vertical up/down icon buttons (same pattern as input group step controls).
 *
 * ## WCAG
 * - Pass `aria-label` on the component for the input accessible name when `@label` is decorative (`aria-hidden` on the text addon).
 * - Step buttons use default increase/decrease labels from i18n; override with `@increaseAriaLabel` / `@decreaseAriaLabel` when needed.
 *
 * @class UlxStepInput
 * @param {number} [value] - Current numeric value (controlled).
 * @param {function} [onChange] - Called with `(value, event?)` when the value changes via typing, blur, or step buttons.
 * @param {number} [min] - Minimum allowed value (also read from `@rules.min`).
 * @param {number} [max] - Maximum allowed value (also read from `@rules.max`).
 * @param {number} [step=1] - Increment/decrement amount.
 * @param {boolean} [disabled=false] - Disables the whole control.
 * @param {boolean} [invalid=false] - Marks the group invalid.
 * @param {string} [error] - Error message for invalid state (via `UlxField` or direct).
 * @param {object} [field] - Yield hash from `UlxField` for id, rules, and error wiring.
 * @param {object} [rules] - Rule object for min/max on the native input.
 * @param {string} [size="m-size"] - Input group size class.
 * @param {string} [label] - Optional suffix label shown in the end addon (decorative when input has `aria-label`).
 * @param {string} [placeholder] - Input placeholder.
 * @param {string} [customClass] - Additional classes on the input group root.
 * @param {string} [inputCustomClass] - Additional classes on the number input (e.g. width utilities).
 * @param {boolean} [filled] - Filled input group variant.
 * @param {string} [increaseAriaLabel] - Accessible name for the increase button.
 * @param {string} [decreaseAriaLabel] - Accessible name for the decrease button.
 * @block label - Optional custom suffix label markup; replaces `@label` when present.
 */
export default class UlxStepInput extends Component {
	get fieldContext() {
		const { field } = this.args;
		return field && typeof field === "object" ? field : null;
	}

	get rules() {
		const { rules: rulesArg } = this.args;
		return normalizeRules(rulesArg ?? this.fieldContext?.rules);
	}

	get isInvalid() {
		const { invalid, error: errorArg } = this.args;
		const error = errorArg ?? this.fieldContext?.error;
		return isInvalidState(invalid, error);
	}

	get size() {
		return this.args.size ?? "m-size";
	}

	get step() {
		const step = Number(this.args.step);
		return Number.isFinite(step) && step > 0 ? step : 1;
	}

	get hasMin() {
		return Number.isFinite(this.min);
	}

	get hasMax() {
		return Number.isFinite(this.max);
	}

	get min() {
		const { min: minArg } = this.args;
		const fromArg = Number(minArg);
		if (Number.isFinite(fromArg)) {
			return fromArg;
		}

		const fromRules = getConstraintValue(this.rules, "min");
		return typeof fromRules === "number" ? fromRules : undefined;
	}

	get max() {
		const { max: maxArg } = this.args;
		const fromArg = Number(maxArg);
		if (Number.isFinite(fromArg)) {
			return fromArg;
		}

		const fromRules = getConstraintValue(this.rules, "max");
		return typeof fromRules === "number" ? fromRules : undefined;
	}

	get currentValue() {
		const value = Number(this.args.value);
		return Number.isFinite(value) ? value : 0;
	}

	get isDisabled() {
		return Boolean(this.args.disabled);
	}

	get decreaseDisabled() {
		return this.isDisabled || (this.hasMin && this.currentValue <= this.min);
	}

	get increaseDisabled() {
		return this.isDisabled || (this.hasMax && this.currentValue >= this.max);
	}

	get increaseAriaLabel() {
		return this.args.increaseAriaLabel ?? t("lbl.progress.increase");
	}

	get decreaseAriaLabel() {
		return this.args.decreaseAriaLabel ?? t("lbl.progress.decrease");
	}

	get showLabelAddon() {
		const { label } = this.args;
		return Boolean(label);
	}

	isWithinBounds(value) {
		const intVal = parseInt(value, 10);
		if (Number.isNaN(intVal)) {
			return false;
		}

		if (this.hasMin && intVal < this.min) {
			return false;
		}

		if (this.hasMax && intVal > this.max) {
			return false;
		}

		return true;
	}

	parseValue(rawValue) {
		const parsed = parseInt(rawValue, 10);
		return Number.isNaN(parsed) ? undefined : parsed;
	}

	@action
	blockExponentKey(event) {
		if (event.key === "e" || event.key === "E") {
			event.preventDefault();
		}
	}

	@action
	notifyChange(value, event) {
		const { onChange } = this.args;
		typeof onChange === "function" && onChange(value, event);
	}

	@action
	handleChange(value, event) {
		const parsed = this.parseValue(value);
		parsed !== undefined && this.notifyChange(parsed, event);
	}

	@action
	handleBlur(value, event) {
		const parsed = this.parseValue(value);
		parsed !== undefined && this.notifyChange(parsed, event);
	}

	@action
	increment() {
		if (this.increaseDisabled) {
			return;
		}

		const next = this.currentValue + this.step;
		this.isWithinBounds(next) && this.notifyChange(next);
	}

	@action
	decrement() {
		if (this.decreaseDisabled) {
			return;
		}

		const next = this.currentValue - this.step;
		this.isWithinBounds(next) && this.notifyChange(next);
	}

	<template>
		<UlxInputGroup
			@size={{this.size}}
			@disabled={{this.isDisabled}}
			@invalid={{this.isInvalid}}
			@filled={{@filled}}
			@customClass={{@customClass}}
		>
			<:input as |group|>
				<UlxInput
					@field={{@field}}
					@value={{@value}}
					@rules={{@rules}}
					@placeholder={{@placeholder}}
					@disabled={{group.disabled}}
					@invalid={{group.invalid}}
					@onChange={{this.handleChange}}
					@onBlur={{this.handleBlur}}
					type="number"
					@customClass={{@inputCustomClass}}
					{{on "keydown" this.blockExponentKey}}
					...attributes
				/>
			</:input>

			<:end>
				{{#if (has-block "label")}}
					<span class="inputgroup-addon text-addon" aria-hidden="true">
						{{yield to="label"}}
					</span>
				{{else if this.showLabelAddon}}
					<span class="inputgroup-addon text-addon" aria-hidden="true">
						{{@label}}
					</span>
				{{/if}}

				<span class="inputgroup-addon vertical-stack-addon">
					<UlxIconButton
						@variant="basic"
						@size="compact"
						@iconLeft="up-arrow-icon"
						@iconSize="s14"
						@onClick={{this.increment}}
						@disabled={{this.increaseDisabled}}
						aria-label={{this.increaseAriaLabel}}
					/>
					<UlxIconButton
						@variant="basic"
						@size="compact"
						@iconLeft="down-arrow-icon"
						@iconSize="s14"
						@onClick={{this.decrement}}
						@disabled={{this.decreaseDisabled}}
						aria-label={{this.decreaseAriaLabel}}
					/>
				</span>
			</:end>
		</UlxInputGroup>
	</template>
}
