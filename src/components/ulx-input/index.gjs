import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { NAMESPACE } from "../../utils/component-config";

import {
	buildInputClass,
	getConstraintValue,
	getKeyFilterPattern,
	getRuleValue,
	isInvalidState,
	isRulesRequired,
	isSpecialKey,
	normalizeRules,
	resolveKey,
	buildInputId
} from "../../utils/input-util";

/**
 * Text-like input with ULX classes and optional rule-driven constraints.
 *
 * @class UlxInput
 * @param {object} [field] - Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.
 * @param {string} [key] - Stable key or id; overrides `field.key` when set.
 * @param {string} [ariaDescribedBy] - Overrides `field.describedBy`.
 * @param {string} [ariaErrorMessage] - Overrides `field.errorId`.
 * @param {boolean} [omitDomValue=false] - When true, the `value` attribute is not bound (for controls that manage the value externally, e.g. flatpickr).
 * @param {function} [onInput] - Invoked on native input with `(value, event)`.
 * @param {function} [onChange] - Invoked on native change with `(value, event)`.
 * @param {function} [onBlur] - Invoked on native blur with `(value, event)`.
 */
export default class UlxInput extends Component {
	get omitDomValue() {
		return Boolean(this.args.omitDomValue);
	}
	// Rules
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

	get inputId() {
		return buildInputId(NAMESPACE, this.args.id, this.key);
	}

	get isRequired() {
		return isRulesRequired(this.rules);
	}

	get minLength() {
		return getConstraintValue(this.rules, "minLength");
	}

	get maxLength() {
		return getConstraintValue(this.rules, "maxLength");
	}

	get min() {
		return getRuleValue(this.rules, "min");
	}

	get max() {
		return getRuleValue(this.rules, "max");
	}

	get isInvalid() {
		const { invalid, error: errorArg } = this.args;
		const error = errorArg ?? this.fieldContext?.error;
		return isInvalidState(invalid, error);
	}

	// Classes
	get inputClass() {
		const { size = "m-size", disabled, readonly, customClass, value } = this.args;

		const parts = [
			buildInputClass({
				isTextarea: false,
				size,
				invalid: this.isInvalid,
				disabled,
				readonly,
				value
			})
		];

		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	// Type
	get inputType() {
		return this.args.type ?? "text";
	}

	// ARIA
	get ariaDescribedBy() {
		const { ariaDescribedBy } = this.args;
		return ariaDescribedBy ?? this.fieldContext?.describedBy;
	}

	get ariaErrorMessage() {
		const { ariaErrorMessage } = this.args;
		return ariaErrorMessage ?? this.fieldContext?.errorId;
	}

	// Key filter
	get keyFilterPattern() {
		return getKeyFilterPattern(this.args.keyfilter);
	}

	// Actions
	@action
	handleKeydown(event) {
		this.args.onKeydown?.(event);

		if (this.keyFilterPattern && !isSpecialKey(event)) {
			const key = event.key;
			const currentValue = event.target.value ?? "";
			const selectionStart = event.target.selectionStart;
			const selectionEnd = event.target.selectionEnd;

			let newValue;

			if (selectionStart === selectionEnd) {
				newValue = currentValue.slice(0, selectionStart) + key + currentValue.slice(selectionStart);
			} else {
				newValue = currentValue.slice(0, selectionStart) + key + currentValue.slice(selectionEnd);
			}

			if (!this.keyFilterPattern.test(newValue)) {
				event.preventDefault();
				return false;
			}
		}
	}

	@action
	handleInput(event) {
		this.args.onInput?.(event.target.value, event);
	}

	@action
	handleChange(event) {
		this.args.onChange?.(event.target.value, event);
	}

	@action
	handleFocus(event) {
		this.args.onFocus?.(event);
	}

	@action
	handleBlur(event) {
		this.args.onBlur?.(event.target.value, event);
	}

	<template>
		<input
			id={{this.inputId}}
			type={{this.inputType}}
			class={{this.inputClass}}
			value={{if this.omitDomValue undefined @value}}
			placeholder={{@placeholder}}
			disabled={{@disabled}}
			readonly={{@readonly}}
			min={{this.min}}
			max={{this.max}}
			minlength={{this.minLength}}
			maxlength={{this.maxLength}}
			required={{this.isRequired}}
			aria-required="{{this.isRequired}}"
			aria-invalid="{{this.isInvalid}}"
			aria-describedby="{{this.ariaDescribedBy}}"
			aria-errormessage={{this.ariaErrorMessage}}
			{{on "keydown" this.handleKeydown}}
			{{on "input" this.handleInput}}
			{{on "change" this.handleChange}}
			{{on "focus" this.handleFocus}}
			{{on "blur" this.handleBlur}}
			...attributes
		/>
	</template>
}
