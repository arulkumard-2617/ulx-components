import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { NAMESPACE } from "../../../utils/component-config";

import {
	buildInputClass,
	getKeyFilterPattern,
	getRuleValue,
	isInvalidState,
	isSpecialKey,
	normalizeRules,
	resolveKey,
	buildInputId
} from "../../../utils/input-util";

export default class UlxInput extends Component {
	// Rules
	get rules() {
		return normalizeRules(this.args.rules);
	}

	get key() {
		return resolveKey(this, this.args.key);
	}

	get inputId() {
		return buildInputId(NAMESPACE, this.args.id, this.key);
	}

	get isRequired() {
		return !!this.rules.required;
	}

	get minLength() {
		return getRuleValue(this.rules, "minLength");
	}

	get maxLength() {
		return getRuleValue(this.rules, "maxLength");
	}

	get min() {
		return getRuleValue(this.rules, "min");
	}

	get max() {
		return getRuleValue(this.rules, "max");
	}

	get isInvalid() {
		const { invalid, error } = this.args;
		return isInvalidState(invalid, error);
	}

	// Classes
	get inputClass() {
		const { size = "m-size", filled, disabled, readonly, customClass } = this.args;

		const parts = [
			buildInputClass({
				isTextarea: false,
				size,
				filled,
				invalid: this.isInvalid,
				disabled,
				readonly
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
		return this.args.ariaDescribedBy;
	}

	get ariaErrorMessage() {
		return this.args.ariaErrorMessage;
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
			const currentValue = event.target.value;
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
		this.args.onInput?.(event);
	}

	@action
	handleChange(event) {
		this.args.onChange?.(event);
	}

	@action
	handleFocus(event) {
		this.args.onFocus?.(event);
	}

	@action
	handleBlur(event) {
		this.args.onBlur?.(event);
	}

	<template>
		<input
			id={{this.inputId}}
			type={{this.inputType}}
			class={{this.inputClass}}
			value={{@value}}
			placeholder={{@placeholder}}
			disabled={{@disabled}}
			readonly={{@readonly}}
			min={{this.min}}
			max={{this.max}}
			minlength={{this.minLength}}
			maxlength={{this.maxLength}}
			required={{this.isRequired}}
			aria-required={{this.isRequired}}
			aria-invalid="{{this.isInvalid}}"
			aria-describedby={{this.ariaDescribedBy}}
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
