import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { guidFor } from "@ember/object/internals";
import or from "ember-truth-helpers/helpers/or";
import { NAMESPACE, getComponentClass } from "../../../utils/component-config";

/**
 * Input component with support for text input and textarea, key filtering,
 * validation, float labels, help text, and error messages.
 *
 * ## Variations
 * - **keyfilter**: Restricts input based on preset patterns (int, float, email, url, phone, cpf, cnpj, hex, alpha, alphanum, uuid, date, time, datetime, datetime-local, month, week)
 * - **Sizes**: xs-size, s-size, m-size, l-size, xl-size
 * - **Float Label**: Label floats above input when focused or has value
 * - **filled**: Filled background variant
 * - **invalid**: Invalid state styling
 * - **Disabled**: Disabled state
 *
 * ## HTML Structure
 * ```html
 * <div class="field">
 *   <label>
 *     <span class="label-text">label text <span class="fg-red">*</span></span>
 *     <span class="label-right">min/max</span>
 *   </label>
 *   <input />
 *   <div class="help-text">help text</div>
 *   <div class="error-message">Error message</div>
 * </div>
 * ```
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
 *   - `minLength.value` / `maxLength.value`: length constraints (mapped to `minlength` / `maxlength`)
 *   - `min.value` / `max.value`: numeric constraints (mapped to `min` / `max`)
 * @param {string} [helpText] - Help text displayed below the input.
 * @param {string} [errorMessage] - Error message displayed below the input. Sets invalid state.
 * @param {string} [fieldClass] - Extra classes for the field wrapper (e.g. "col-6 col-md-4") so forms can use grid column utilities.
 * @param {string} [placeholder] - Placeholder text.
 * @param {boolean} [disabled=false] - Whether the input is disabled.
 * @param {boolean} [readonly=false] - Whether the input is read-only.
 * @param {boolean} [invalid=false] - Whether the input is in invalid state.
 * @param {boolean} [filled=false] - Whether to use filled variant styling.
 * @param {boolean|string} [floatLabel=false] - Float label mode. When `true`, uses `@label` (or <:label>). When a string, enables float label mode and uses that string as the label text.
 * @param {string} [size] - Size variant: "xs-size", "s-size", "m-size", "l-size", "xl-size".
 * @param {string} [type='text'] - Input type: "text", "email", "password", "number", etc. Use "textarea" for textarea element.
 * @param {string} [keyfilter] - Key filter preset: "int", "float", "email", "url", "phone", "cpf", "cnpj", "hex", "alpha", "alphanum", "uuid", "date", "time", "datetime", "datetime-local", "month", "week", or RegExp pattern string.
 * @param {Function} [onInput] - Callback fired on input event: (event) => void.
 * @param {Function} [onChange] - Callback fired on change event: (event) => void.
 * @param {Function} [onKeydown] - Callback fired on keydown event: (event) => void.
 * @param {Function} [onFocus] - Callback fired on focus event: (event) => void.
 * @param {Function} [onBlur] - Callback fired on blur event: (event) => void.
 */
export default class UlxInput extends Component {
	get rules() {
		return this.args.rules ?? {};
	}

	get key() {
		// `guidFor(this)` is stable per component instance (unlike Math.random()).
		return this.args.key ?? guidFor(this);
	}

	get inputId() {
		return this.args.id ?? `${NAMESPACE}-input-${this.key}`;
	}

	get floatLabelText() {
		// If @floatLabel is a string, treat it as the label text.
		if (typeof this.args.floatLabel === "string") {
			return this.args.floatLabel;
		}
		// Otherwise (boolean true), fall back to the regular label arg.
		return this.args.label;
	}

	get hasFloatLabelText() {
		return typeof this.floatLabelText === "string" && this.floatLabelText.length > 0;
	}

	get isRequired() {
		return !!this.rules.required;
	}

	get minLength() {
		return this.rules.minLength?.value;
	}

	get maxLength() {
		return this.rules.maxLength?.value;
	}

	get min() {
		return this.rules.min?.value;
	}

	get max() {
		return this.rules.max?.value;
	}

	get inputClass() {
		// Textarea has a dedicated base class (see uls-v2 `input-textarea.less`).
		// When `@type="textarea"`, include both classes (e.g. `uls-inputtextarea uls-input`).
		const parts = this.isTextarea
			? [getComponentClass("inputtextarea"), getComponentClass("input")]
			: [getComponentClass("input")];

		// Size variant
		if (this.args.size) {
			parts.push(this.args.size);
		}

		// Visual variant
		if (this.args.filled) {
			parts.push("filled");
		}

		// States
		if (this.args.invalid || this.args.errorMessage) {
			parts.push("invalid");
		}

		if (this.args.disabled) {
			parts.push("disabled");
		}

		if (this.args.readonly) {
			parts.push("readonly");
		}

		// Float label: add input-filled class if value exists (for initial render)
		if (this.args.floatLabel && this.args.value) {
			parts.push("input-filled");
		}

		return parts.filter(Boolean).join(" ");
	}

	get fieldClass() {
		const parts = ["field"];

		// Allow consumers to pass grid/layout classes like `col-6`, `col-md-4`, etc.
		if (this.args.fieldClass) {
			parts.push(this.args.fieldClass);
		}

		// Note: Focus and filled states are handled via classes on the input element itself

		return parts.filter(Boolean).join(" ");
	}

	get floatLabelClass() {
		const parts = [getComponentClass("floatlabel")];

		if (this.args.size) {
			parts.push(this.args.size);
		}

		if (this.args.filled) {
			parts.push("filled");
		}

		if (this.args.invalid || this.args.errorMessage) {
			parts.push("invalid");
		}

		if (this.args.disabled) {
			parts.push("disabled");
		}

		return parts.filter(Boolean).join(" ");
	}

	get isTextarea() {
		return this.args.type === "textarea";
	}

	get inputType() {
		// For textarea, return undefined so we render <textarea> instead of <input>
		if (this.isTextarea) {
			return undefined;
		}
		return this.args.type ?? "text";
	}

	get hasLabelMeta() {
		return this.minLength != null || this.maxLength != null;
	}

	get labelMetaText() {
		const parts = [];
		if (this.minLength != null) {
			parts.push(`${this.minLength}`);
		}
		if (this.maxLength != null) {
			parts.push(`${this.maxLength}`);
		}
		return parts.join(" / ");
	}

	get ariaDescribedBy() {
		const parts = [];
		if (this.args.helpText) {
			parts.push(`${this.inputId}-help`);
		}
		if (this.args.errorMessage) {
			parts.push(`${this.inputId}-error`);
		}
		return parts.length > 0 ? parts.join(" ") : undefined;
	}

	/**
	 * Key filter patterns for validation
	 */
	get keyFilterPattern() {
		const keyfilter = this.args.keyfilter;
		if (!keyfilter) return null;

		// If it's a RegExp string (starts with /), parse it
		if (typeof keyfilter === "string" && keyfilter.startsWith("/")) {
			try {
				const match = keyfilter.match(/^\/(.*)\/([gimuy]*)$/);
				if (match) {
					return new RegExp(match[1], match[2] || "");
				}
			} catch (e) {
				console.warn("Invalid RegExp pattern:", keyfilter);
				return null;
			}
		}

		// Preset patterns
		const patterns = {
			int: /^-?\d*$/,
			float: /^-?\d*\.?\d*$/,
			email: /^[^\s@]*@?[^\s@]*$/,
			url: /^[^\s]*$/,
			phone: /^[\d\s\-\(\)\+]*$/,
			cpf: /^\d{0,11}$/,
			cnpj: /^\d{0,14}$/,
			hex: /^[0-9A-Fa-f]*$/,
			alpha: /^[a-zA-Z\s]*$/,
			alphanum: /^[a-zA-Z0-9\s]*$/,
			uuid: /^[0-9a-fA-F\-]*$/,
			date: /^[\d\-]*$/,
			time: /^[\d:]*$/,
			datetime: /^[\d\s\-:T]*$/,
			"datetime-local": /^[\d\s\-:T]*$/,
			month: /^[\d\-]*$/,
			week: /^[\d\-W]*$/
		};

		return patterns[keyfilter] || null;
	}

	@action
	handleKeydown(event) {
		// Call user's onKeydown handler first
		if (this.args.onKeydown) {
			this.args.onKeydown(event);
		}

		// Apply keyfilter if provided
		if (this.keyFilterPattern && !this.isSpecialKey(event)) {
			const key = event.key;
			const currentValue = event.target.value;
			const selectionStart = event.target.selectionStart;
			const selectionEnd = event.target.selectionEnd;

			// Build the new value as if this key was pressed
			let newValue;
			if (selectionStart === selectionEnd) {
				// No selection, insert at cursor
				newValue = currentValue.slice(0, selectionStart) + key + currentValue.slice(selectionStart);
			} else {
				// Replace selection
				newValue = currentValue.slice(0, selectionStart) + key + currentValue.slice(selectionEnd);
			}

			// Test if the new value matches the pattern
			if (!this.keyFilterPattern.test(newValue)) {
				event.preventDefault();
				return false;
			}
		}
	}

	@action
	handleInput(event) {
		// Update filled class for float label when value changes
		if (this.args.floatLabel) {
			if (event.target.value) {
				event.target.classList.add("input-filled");
			} else {
				event.target.classList.remove("input-filled");
			}
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
		// Add focus class for float label
		if (this.args.floatLabel) {
			event.target.classList.add("focus");
		}
		if (this.args.onFocus) {
			this.args.onFocus(event);
		}
	}

	@action
	handleBlur(event) {
		// Remove focus class for float label
		if (this.args.floatLabel) {
			event.target.classList.remove("focus");
			// Add filled class if has value (for float label positioning)
			if (event.target.value) {
				event.target.classList.add("input-filled");
			} else {
				event.target.classList.remove("input-filled");
			}
		}
		if (this.args.onBlur) {
			this.args.onBlur(event);
		}
	}

	/**
	 * Check if the key is a special key that should be allowed regardless of filter
	 */
	isSpecialKey(event) {
		const specialKeys = [
			"Backspace",
			"Delete",
			"Tab",
			"Escape",
			"Enter",
			"ArrowLeft",
			"ArrowRight",
			"ArrowUp",
			"ArrowDown",
			"Home",
			"End",
			"PageUp",
			"PageDown",
			"Insert",
			"F1",
			"F2",
			"F3",
			"F4",
			"F5",
			"F6",
			"F7",
			"F8",
			"F9",
			"F10",
			"F11",
			"F12"
		];

		// Allow Ctrl/Cmd + key combinations (for copy, paste, etc.)
		if (event.ctrlKey || event.metaKey) {
			return true;
		}

		return specialKeys.includes(event.key);
	}

	<template>
		<div class={{this.fieldClass}}>
			{{#if @floatLabel}}
				<span class={{this.floatLabelClass}}>
					{{#if this.isTextarea}}
						<textarea
							id={{this.inputId}}
							class={{this.inputClass}}
							value={{@value}}
							placeholder={{@placeholder}}
							disabled={{@disabled}}
							readonly={{@readonly}}
							minlength={{this.minLength}}
							maxlength={{this.maxLength}}
							required={{this.isRequired}}
							aria-required={{this.isRequired}}
							aria-invalid={{if (or @invalid @errorMessage) "true" "false"}}
							aria-describedby={{this.ariaDescribedBy}}
							{{on "keydown" this.handleKeydown}}
							{{on "input" this.handleInput}}
							{{on "change" this.handleChange}}
							{{on "focus" this.handleFocus}}
							{{on "blur" this.handleBlur}}
							...attributes
						></textarea>
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
							aria-invalid={{if (or @invalid @errorMessage) "true" "false"}}
							aria-describedby={{this.ariaDescribedBy}}
							{{on "keydown" this.handleKeydown}}
							{{on "input" this.handleInput}}
							{{on "change" this.handleChange}}
							{{on "focus" this.handleFocus}}
							{{on "blur" this.handleBlur}}
							...attributes
						/>
					{{/if}}

					{{#if (or this.hasFloatLabelText (has-block "label"))}}
						<label for={{this.inputId}} class="floatlabel-label">
							{{#if (has-block "label")}}
								{{yield to="label"}}
							{{else}}
								{{this.floatLabelText}}
							{{/if}}
							{{#if this.isRequired}}
								<span class="fg-red">*</span>
							{{/if}}
						</label>
					{{/if}}
				</span>
			{{else}}
				{{#if (or @label (has-block "label"))}}
					<label for={{this.inputId}}>
						<span class="label-text">
							{{#if (has-block "label")}}
								{{yield to="label"}}
							{{else}}
								{{@label}}
							{{/if}}
							{{#if this.isRequired}}
								<span class="fg-red">*</span>
							{{/if}}
						</span>
						{{#if this.hasLabelMeta}}
							<span class="label-right">{{this.labelMetaText}}</span>
						{{/if}}
					</label>
				{{/if}}

				{{#if this.isTextarea}}
					<textarea
						id={{this.inputId}}
						class={{this.inputClass}}
						value={{@value}}
						placeholder={{@placeholder}}
						disabled={{@disabled}}
						readonly={{@readonly}}
						minlength={{this.minLength}}
						maxlength={{this.maxLength}}
						required={{this.isRequired}}
						aria-required={{this.isRequired}}
						aria-invalid={{if (or @invalid @errorMessage) "true" "false"}}
						aria-describedby={{this.ariaDescribedBy}}
						{{on "keydown" this.handleKeydown}}
						{{on "input" this.handleInput}}
						{{on "change" this.handleChange}}
						{{on "focus" this.handleFocus}}
						{{on "blur" this.handleBlur}}
						...attributes
					></textarea>
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
						aria-invalid={{if (or @invalid @errorMessage) "true" "false"}}
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

			{{#if @errorMessage}}
				<div id="{{this.inputId}}-error" class="error-message">{{@errorMessage}}</div>
			{{/if}}
		</div>
	</template>
}
