import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { NAMESPACE } from "../../../utils/component-config";
import {
	buildAriaDescribedBy,
	buildFieldClass,
	buildIconFieldClass,
	buildInputClass,
	getInputIconClass,
	getKeyFilterPattern,
	getRuleValue,
	isInvalidState,
	isSpecialKey,
	normalizeRules,
	resolveKey,
	buildInputId
} from "../../../utils/input-util";
import UlxIcon from "../ulx-icon/index.gjs";

/**
 * Icon input component (single-line input wrapped with ULS icon-field).
 *
 * Expected ULS structure (from `uls-v2/.../elements/icon-field.less`):
 * `<div class="ulx-iconfield icon-left s-size outlined"> <span class="ulx-input-icon">…</span> <input/> </div>`
 *
 * @class UlxIconInput
 * @param {string} [id] - Unique ID for the input element. Auto-generated if not provided.
 * @param {string} [key] - Stable key used for auto-generated IDs (when `@id` is not provided).
 * @param {string} [value] - The input value (controlled).
 * @param {string} [label] - Label text displayed above the input.
 * @param {object} [rules] - Rules object for constraints (old component pattern).
 * @param {string} [helpText] - Help text displayed below the input.
 * @param {string} [error] - Error message displayed below the input. Sets invalid state.
 * @param {string} [fieldClass] - Extra classes for the field wrapper (e.g. grid utilities).
 * @param {string} [placeholder] - Placeholder text.
 * @param {boolean} [disabled=false] - Whether the input is disabled.
 * @param {boolean} [readonly=false] - Whether the input is read-only.
 * @param {boolean} [invalid=false] - Whether the input is in invalid state.
 * @param {boolean} [filled=false] - Whether to use filled variant styling.
 * @param {string} [size] - Size variant: "xs-size", "s-size", "m-size", "l-size", "xl-size".
 * @param {string} [type='text'] - Input type: "text", "email", "password", "number", etc.
 * @param {string} [keyfilter] - Key filter preset or RegExp string.
 *
 * @param {string} [iconName] - Icon name passed to `UlxIcon`.
 * @param {string} [icon] - Alias for `@iconName`.
 * @param {'svg'|'font'} [iconType='svg'] - Passed to `UlxIcon @type`.
 * @param {string} [iconAriaLabel] - Passed to `UlxIcon @ariaLabel` for meaningful icons.
 * @param {string} [iconSize] - Passed to `UlxIcon @size`.
 * @param {string} [iconClass] - Passed to `UlxIcon @customClass`.
 * @param {'left'|'right'} [iconPosition='left'] - Icon position.
 * @param {string} [iconFieldClass] - Extra classes for the icon-field wrapper (e.g. "loading", "clickable-icon").
 *
 * @param {Function} [onInput] - Callback fired on input event: (event) => void.
 * @param {Function} [onChange] - Callback fired on change event: (event) => void.
 * @param {Function} [onKeydown] - Callback fired on keydown event: (event) => void.
 * @param {Function} [onFocus] - Callback fired on focus event: (event) => void.
 * @param {Function} [onBlur] - Callback fired on blur event: (event) => void.
 */
export default class UlxIconInput extends Component {
	get rules() {
		return normalizeRules(this.args.rules);
	}

	get key() {
		return resolveKey(this, this.args.key);
	}

	get inputId() {
		return buildInputId(NAMESPACE, this.args.id, this.key);
	}

	get resolvedIconName() {
		const { iconName, icon } = this.args;
		return iconName ?? icon;
	}

	get hasIconName() {
		return typeof this.resolvedIconName === "string" && this.resolvedIconName.length > 0;
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
		const { invalid, error } = this.args;
		return isInvalidState(invalid, error);
	}

	get inputClass() {
		const { size, filled, disabled, readonly, value } = this.args;
		return buildInputClass({
			isTextarea: false,
			size,
			filled,
			invalid: this.isInvalid,
			disabled,
			readonly,
			value
		});
	}

	get fieldClass() {
		return buildFieldClass(this.args.fieldClass);
	}

	get inputType() {
		const type = this.args.type ?? "text";
		return type === "textarea" ? "text" : type;
	}

	get iconFieldClass() {
		const { iconPosition, size, filled, disabled, iconFieldClass } = this.args;
		return buildIconFieldClass({
			iconPosition,
			size,
			filled,
			invalid: this.isInvalid,
			disabled,
			iconFieldClass
		});
	}

	get inputIconClass() {
		return getInputIconClass();
	}

	get ariaDescribedBy() {
		const { helpText, error } = this.args;
		return buildAriaDescribedBy(this.inputId, { helpText, error });
	}

	get keyFilterPattern() {
		return getKeyFilterPattern(this.args.keyfilter);
	}

	@action
	handleIconFieldFocusIn(event) {
		event.currentTarget.classList.add("focused");
	}

	@action
	handleIconFieldFocusOut(event) {
		if (!event.currentTarget.contains(event.relatedTarget)) {
			event.currentTarget.classList.remove("focused");
		}
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
		if (this.args.onFocus) {
			this.args.onFocus(event);
		}
	}

	@action
	handleBlur(event) {
		if (this.args.onBlur) {
			this.args.onBlur(event);
		}
	}

	<template>
		<div class={{this.fieldClass}}>
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

			<div
				class={{this.iconFieldClass}}
				{{on "focusin" this.handleIconFieldFocusIn}}
				{{on "focusout" this.handleIconFieldFocusOut}}
			>
				<span class={{this.inputIconClass}} aria-hidden="true">
					{{#if (has-block "icon")}}
						{{yield to="icon"}}
					{{else if this.hasIconName}}
						<UlxIcon
							@iconName={{this.resolvedIconName}}
							@type={{@iconType}}
							@ariaLabel={{@iconAriaLabel}}
							@size={{@iconSize}}
							@customClass={{@iconClass}}
						/>
					{{/if}}
				</span>

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
			</div>

			{{#if @helpText}}
				<div id="{{this.inputId}}-help" class="help-text">{{@helpText}}</div>
			{{/if}}

			{{#if @error}}
				<div id="{{this.inputId}}-error" class="error-message">{{@error}}</div>
			{{/if}}
		</div>
	</template>
}
