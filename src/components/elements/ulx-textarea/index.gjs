import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { NAMESPACE } from "../../../utils/component-config";
import {
	buildAriaDescribedBy,
	buildFieldClass,
	buildFloatLabelClass,
	buildInputClass,
	getFloatLabelLabelClass,
	getKeyFilterPattern,
	getRuleValue,
	isInvalidState,
	isSpecialKey,
	normalizeRules,
	resolveFloatLabelText,
	resolveKey,
	buildInputId,
	syncFloatLabelFilledClass
} from "../../../utils/input-util";

/**
 * Textarea component (multi-line) with support for:
 * - key filtering
 * - validation/help/error text
 * - float labels
 *
 * @class UlxTextarea
 */
export default class UlxTextarea extends Component {
	get rules() {
		return normalizeRules(this.args.rules);
	}

	get key() {
		return resolveKey(this, this.args.key);
	}

	get textareaId() {
		return buildInputId(NAMESPACE, this.args.id, this.key);
	}

	get floatLabelText() {
		const { floatLabel, label } = this.args;
		return resolveFloatLabelText(floatLabel, label);
	}

	get hasFloatLabelText() {
		return typeof this.floatLabelText === "string" && this.floatLabelText.length > 0;
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

	get hasLabelMeta() {
		return this.minLength != null || this.maxLength != null;
	}

	get labelMetaText() {
		const parts = [];
		if (this.minLength != null) parts.push(`${this.minLength}`);
		if (this.maxLength != null) parts.push(`${this.maxLength}`);
		return parts.join(" / ");
	}

	get isInvalid() {
		const { invalid, error } = this.args;
		return isInvalidState(invalid, error);
	}

	get textareaClass() {
		const { size, filled, disabled, readonly, floatLabel, value } = this.args;
		return buildInputClass({
			isTextarea: true,
			size,
			filled,
			invalid: this.isInvalid,
			disabled,
			readonly,
			floatLabel,
			value
		});
	}

	get fieldClass() {
		return buildFieldClass(this.args.fieldClass);
	}

	get floatLabelClass() {
		const { size, filled, disabled } = this.args;
		return buildFloatLabelClass({
			size,
			filled,
			invalid: this.isInvalid,
			disabled
		});
	}

	get floatLabelLabelClass() {
		return getFloatLabelLabelClass();
	}

	get ariaDescribedBy() {
		const { helpText, error } = this.args;
		return buildAriaDescribedBy(this.textareaId, { helpText, error });
	}

	get ariaErrorMessage() {
		return this.args.error ? `${this.textareaId}-error` : undefined;
	}

	get keyFilterPattern() {
		return getKeyFilterPattern(this.args.keyfilter);
	}

	@action
	handleKeydown(event) {
		if (this.args.onKeydown) {
			this.args.onKeydown(event);
		}

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
		const { floatLabel, onInput } = this.args;
		if (floatLabel) syncFloatLabelFilledClass(event.target);
		if (onInput) onInput(event);
	}

	@action
	handleChange(event) {
		if (this.args.onChange) {
			this.args.onChange(event);
		}
	}

	@action
	handleFocus(event) {
		const { floatLabel, onFocus } = this.args;
		if (floatLabel) event.target.classList.add("focus");
		if (onFocus) onFocus(event);
	}

	@action
	handleBlur(event) {
		const { floatLabel, onBlur } = this.args;
		if (floatLabel) {
			event.target.classList.remove("focus");
			syncFloatLabelFilledClass(event.target);
		}
		if (onBlur) onBlur(event);
	}

	<template>
		<div class={{this.fieldClass}}>
			{{#if @floatLabel}}
				<span class={{this.floatLabelClass}}>
					<textarea
						id={{this.textareaId}}
						class={{this.textareaClass}}
						value={{@value}}
						placeholder={{@placeholder}}
						disabled={{@disabled}}
						readonly={{@readonly}}
						minlength={{this.minLength}}
						maxlength={{this.maxLength}}
						required={{this.isRequired}}
						aria-required={{this.isRequired}}
						aria-invalid={{if this.isInvalid "true" "false"}}
						aria-describedby={{this.ariaDescribedBy}}
						aria-errormessage={{this.ariaErrorMessage}}
						{{on "keydown" this.handleKeydown}}
						{{on "input" this.handleInput}}
						{{on "change" this.handleChange}}
						{{on "focus" this.handleFocus}}
						{{on "blur" this.handleBlur}}
						...attributes
					></textarea>

					<label for={{this.textareaId}} class={{this.floatLabelLabelClass}}>
						{{this.floatLabelText}}
						{{#if this.isRequired}}
							<span class="fg-red" aria-hidden="true">*</span>
						{{/if}}
					</label>
				</span>
			{{else}}
				{{#if (has-block "label")}}
					<label for={{this.textareaId}}>
						<span class="label-text">
							{{yield to="label"}}
							{{#if this.isRequired}}
								<span class="fg-red" aria-hidden="true">*</span>
							{{/if}}
						</span>
						{{#if this.hasLabelMeta}}
							<span class="label-right">{{this.labelMetaText}}</span>
						{{/if}}
					</label>
				{{else if @label}}
					<label for={{this.textareaId}}>
						<span class="label-text">
							{{@label}}
							{{#if this.isRequired}}
								<span class="fg-red" aria-hidden="true">*</span>
							{{/if}}
						</span>
						{{#if this.hasLabelMeta}}
							<span class="label-right">{{this.labelMetaText}}</span>
						{{/if}}
					</label>
				{{/if}}

				<textarea
					id={{this.textareaId}}
					class={{this.textareaClass}}
					value={{@value}}
					placeholder={{@placeholder}}
					disabled={{@disabled}}
					readonly={{@readonly}}
					minlength={{this.minLength}}
					maxlength={{this.maxLength}}
					required={{this.isRequired}}
					aria-required={{this.isRequired}}
					aria-invalid={{if this.isInvalid "true" "false"}}
					aria-describedby={{this.ariaDescribedBy}}
					aria-errormessage={{this.ariaErrorMessage}}
					{{on "keydown" this.handleKeydown}}
					{{on "input" this.handleInput}}
					{{on "change" this.handleChange}}
					{{on "focus" this.handleFocus}}
					{{on "blur" this.handleBlur}}
					...attributes
				></textarea>
			{{/if}}

			{{#if @helpText}}
				<div id="{{this.textareaId}}-help" class="help-text">{{@helpText}}</div>
			{{/if}}

			{{#if @error}}
				<div
					id="{{this.textareaId}}-error"
					class="error-message"
					role="alert"
					aria-atomic="true"
				>{{@error}}</div>
			{{/if}}
		</div>
	</template>
}
