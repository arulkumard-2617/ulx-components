import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { NAMESPACE } from "../../../utils/component-config";
import {
	buildAriaDescribedBy,
	buildFieldClass,
	buildFloatLabelClass,
	buildInputGroupClass,
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
 * Input component (single-line) with support for:
 * - key filtering
 * - validation/help/error text
 * - float labels
 *
 * For multi-line text, use `UlxTextarea`.
 *
 * ## WCAG
 * - Proper label association via `id` and `for` attributes
 * - Error messages associated via `aria-describedby`
 * - Required fields marked with `aria-required`
 * - Invalid state communicated via `aria-invalid`
 *
 * @class UlxInput
 * @param {string} [id] - Unique ID for the input element. Auto-generated if not provided.
 * @param {string} [key] - Stable key used for auto-generated IDs (when `@id` is not provided).
 * @param {string} [value] - The input value (controlled).
 * @param {string} [label] - Label text displayed above the input.
 * @param {object} [rules] - Rules object for constraints (old component pattern):
 *   - `required`: truthy to mark required
 *   - `minLength.value` / `maxLength.value`: length constraints
 *   - `min.value` / `max.value`: numeric constraints
 * @param {string} [helpText] - Help text displayed below the input.
 * @param {string} [error] - Error message displayed below the input. Sets invalid state.
 * @param {string} [fieldClass] - Extra classes for the field wrapper (e.g. grid utilities).
 * @param {string} [placeholder] - Placeholder text.
 * @param {boolean} [disabled=false] - Whether the input is disabled.
 * @param {boolean} [readonly=false] - Whether the input is read-only.
 * @param {boolean} [invalid=false] - Whether the input is in invalid state.
 * @param {boolean} [filled=false] - Whether to use filled variant styling.
 * @param {boolean|string} [floatLabel=false] - Float label mode. When `true`, uses `@label` (or <:label>). When a string, uses that string.
 *
 * @param {boolean} [inputGroup=false] - When true, wraps the input in an `.ulx-inputgroup` container and supports `:start` / `:end` named blocks as addons.
 * @param {string} [inputGroupClass] - Extra classes for the input-group wrapper (appended).
 * @param {string} [size] - Size variant: "xs-size", "s-size", "m-size", "l-size", "xl-size".
 * @param {string} [type='text'] - Input type: "text", "email", "password", "number", etc.
 * @param {string} [keyfilter] - Key filter preset: "int", "float", "email", "url", "phone", "cpf", "cnpj", "hex", "alpha", "alphanum", "uuid", "date", "time", "datetime", "datetime-local", "month", "week", or RegExp string.
 * @param {Function} [onInput] - Callback fired on input event: (event) => void.
 * @param {Function} [onChange] - Callback fired on change event: (event) => void.
 * @param {Function} [onKeydown] - Callback fired on keydown event: (event) => void.
 * @param {Function} [onFocus] - Callback fired on focus event: (event) => void.
 * @param {Function} [onBlur] - Callback fired on blur event: (event) => void.
 */
export default class UlxInput extends Component {
	get rules() {
		return normalizeRules(this.args.rules);
	}

	get key() {
		return resolveKey(this, this.args.key);
	}

	get inputId() {
		return buildInputId(NAMESPACE, this.args.id, this.key);
	}

	get floatLabelText() {
		return resolveFloatLabelText(this.args.floatLabel, this.args.label);
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

	get min() {
		return getRuleValue(this.rules, "min");
	}

	get max() {
		return getRuleValue(this.rules, "max");
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
		return isInvalidState(this.args.invalid, this.args.error);
	}

	get inputClass() {
		return buildInputClass({
			isTextarea: false,
			size: this.args.size,
			filled: this.args.filled,
			invalid: this.isInvalid,
			disabled: this.args.disabled,
			readonly: this.args.readonly,
			floatLabel: this.args.floatLabel,
			value: this.args.value
		});
	}

	get fieldClass() {
		return buildFieldClass(this.args.fieldClass);
	}

	get floatLabelClass() {
		return buildFloatLabelClass({
			size: this.args.size,
			filled: this.args.filled,
			invalid: this.isInvalid,
			disabled: this.args.disabled
		});
	}

	get floatLabelLabelClass() {
		return getFloatLabelLabelClass();
	}

	get inputGroupWrapperClass() {
		const base = buildInputGroupClass({
			size: this.args.size,
			filled: this.args.filled,
			invalid: this.isInvalid,
			disabled: this.args.disabled
		});
		const extra = this.args.inputGroupClass;
		return [base, extra].filter(Boolean).join(" ");
	}

	get inputType() {
		const type = this.args.type ?? "text";
		return type === "textarea" ? "text" : type;
	}

	get ariaDescribedBy() {
		return buildAriaDescribedBy(this.inputId, {
			helpText: this.args.helpText,
			error: this.args.error
		});
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
		if (this.args.floatLabel) {
			syncFloatLabelFilledClass(event.target);
		}
		if (this.args.onInput) {
			this.args.onInput(event);
		}
	}

	@action
	handleChange(event) {
		if (this.args.onChange) {
			this.args.onChange(event);
		}
	}

	@action
	handleFocus(event) {
		if (this.args.floatLabel) {
			event.target.classList.add("focus");
		}
		if (this.args.onFocus) {
			this.args.onFocus(event);
		}
	}

	@action
	handleBlur(event) {
		if (this.args.floatLabel) {
			event.target.classList.remove("focus");
			syncFloatLabelFilledClass(event.target);
		}
		if (this.args.onBlur) {
			this.args.onBlur(event);
		}
	}

	<template>
		<div class={{this.fieldClass}}>
			{{#if @floatLabel}}
				<span class={{this.floatLabelClass}}>
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
						aria-invalid={{if this.isInvalid "true" "false"}}
						aria-describedby={{this.ariaDescribedBy}}
						{{on "keydown" this.handleKeydown}}
						{{on "input" this.handleInput}}
						{{on "change" this.handleChange}}
						{{on "focus" this.handleFocus}}
						{{on "blur" this.handleBlur}}
						...attributes
					/>

					<label for={{this.inputId}} class={{this.floatLabelLabelClass}}>
						{{this.floatLabelText}}
						{{#if this.isRequired}}
							<span class="fg-red">*</span>
						{{/if}}
					</label>
				</span>
			{{else}}
				{{#if (has-block "label")}}
					<label for={{this.inputId}}>
						<span class="label-text">
							{{yield to="label"}}
							{{#if this.isRequired}}
								<span class="fg-red">*</span>
							{{/if}}
						</span>
						{{#if this.hasLabelMeta}}
							<span class="label-right">{{this.labelMetaText}}</span>
						{{/if}}
					</label>
				{{else if @label}}
					<label for={{this.inputId}}>
						<span class="label-text">
							{{@label}}
							{{#if this.isRequired}}
								<span class="fg-red">*</span>
							{{/if}}
						</span>
						{{#if this.hasLabelMeta}}
							<span class="label-right">{{this.labelMetaText}}</span>
						{{/if}}
					</label>
				{{/if}}

				{{#if @inputGroup}}
					<div class={{this.inputGroupWrapperClass}}>
						{{#if (has-block "start")}}
							{{yield to="start"}}
						{{/if}}
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
							aria-invalid={{if this.isInvalid "true" "false"}}
							aria-describedby={{this.ariaDescribedBy}}
							{{on "keydown" this.handleKeydown}}
							{{on "input" this.handleInput}}
							{{on "change" this.handleChange}}
							{{on "focus" this.handleFocus}}
							{{on "blur" this.handleBlur}}
							...attributes
						/>

						{{#if (has-block "end")}}
							{{yield to="end"}}
						{{/if}}
					</div>
				{{else}}
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
						aria-invalid={{if this.isInvalid "true" "false"}}
						aria-describedby={{this.ariaDescribedBy}}
						{{on "keydown" this.handleKeydown}}
						{{on "input" this.handleInput}}
						{{on "change" this.handleChange}}
						{{on "focus" this.handleFocus}}
						{{on "blur" this.handleBlur}}
						...attributes
					/>
				{{/if}}
			{{/if}}

			{{#if @helpText}}
				<div id="{{this.inputId}}-help" class="help-text">{{@helpText}}</div>
			{{/if}}

			{{#if @error}}
				<div id="{{this.inputId}}-error" class="error-message">{{@error}}</div>
			{{/if}}
		</div>
	</template>
}
