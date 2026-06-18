import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { on } from "@ember/modifier";
import textareaResizeY from "../../modifiers/textarea-resize-y";
import { NAMESPACE } from "../../utils/component-config";
import and from "ember-truth-helpers/helpers/and";
import { hash } from "@ember/helper";
import {
	buildInputClass,
	getConstraintValue,
	isInvalidState,
	isRulesRequired,
	normalizeRules,
	resolveKey,
	buildInputId
} from "../../utils/input-util";

/**
 * Textarea component (multi-line) with ULX classes and optional rule-driven constraints.
 *
 * @class UlxTextarea
 * @param {object} [field] - Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.
 * @param {string} [key] - Stable key or id; overrides `field.key` when set.
 * @param {string} [ariaDescribedBy] - Overrides `field.describedBy`.
 * @param {string} [ariaErrorMessage] - Overrides `field.errorId`.
 * @param {function} [onInput] - Invoked on native input with `(value, event)`.
 * @param {function} [onChange] - Invoked on native change with `(value, event)`.
 * @param {function} [onBlur] - Invoked on native blur with `(value, event)`.
 * @param {function} [onKeydown] - Invoked on native keydown with `(event)`.
 * @param {boolean} [resizeY=false] - Grow height on the Y axis as content exceeds the minimum.
 */
export default class UlxTextarea extends Component {
	@tracked _textContent;

	get textContent() {
		return this._textContent ?? this.args.value ?? "";
	}

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

	get textareaId() {
		return buildInputId(NAMESPACE, this.args.id, this.key);
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-textarea";
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

	get isInvalid() {
		const { invalid, error: errorArg } = this.args;
		const error = errorArg ?? this.fieldContext?.error;
		return isInvalidState(invalid, error);
	}

	get isResizeY() {
		const { resizeY = false, customClass } = this.args;

		if (resizeY) {
			return true;
		}

		return customClass?.split(/\s+/).includes("resize-y") ?? false;
	}

	get textareaClass() {
		const { size, filled, disabled, readonly, value, customClass } = this.args;
		const parts = [
			buildInputClass({
				isTextarea: true,
				size,
				filled,
				invalid: this.isInvalid,
				disabled,
				readonly,
				value
			})
		];
		this.isResizeY && parts.push("resize-y");
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get ariaDescribedBy() {
		const { ariaDescribedBy } = this.args;
		return ariaDescribedBy ?? this.fieldContext?.describedBy;
	}

	get ariaErrorMessage() {
		const { ariaErrorMessage } = this.args;
		return ariaErrorMessage ?? this.fieldContext?.errorId;
	}

	@action
	handleKeydown(event) {
		this.args.onKeydown?.(event);
	}

	@action
	handleInput(event) {
		this._textContent = event.target.value;
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

	@action
	updateContent(newValue) {
		const value = newValue ?? "";
		this._textContent = value;
		this.args.onInput?.(value);
		this.args.onChange?.(value);
	}

	<template>
		{{#if (and @showZiaButton (has-block "ziaButton"))}}
			{{yield (hash textContent=this.textContent updateContent=this.updateContent) to="ziaButton"}}
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
			data-qa={{this.rootDataQa}}
			{{on "keydown" this.handleKeydown}}
			{{on "input" this.handleInput}}
			{{on "change" this.handleChange}}
			{{on "focus" this.handleFocus}}
			{{on "blur" this.handleBlur}}
			{{textareaResizeY @value enabled=this.isResizeY}}
			...attributes
		></textarea>
	</template>
}
