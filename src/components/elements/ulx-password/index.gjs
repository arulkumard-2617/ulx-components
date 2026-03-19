import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { htmlSafe } from "@ember/template";
import { modifier } from "ember-modifier";
import { schedule } from "@ember/runloop";
import { getComponentClass, NAMESPACE } from "../../../utils/component-config";
import {
	normalizeRules,
	getRuleValue,
	isInvalidState,
	resolveKey,
	buildInputId,
	buildFieldClass,
	buildInputClass,
	buildAriaDescribedBy,
	buildIconFieldClass,
	getInputIconClass,
	buildFloatLabelClass,
	getFloatLabelLabelClass,
	resolveFloatLabelText,
	syncFloatLabelFilledClass
} from "../../../utils/input-util";
import { t } from "../../../utils/i18n";
import { and, not } from "ember-truth-helpers";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxButton from "../ulx-button/index.gjs";
import tooltip from "../../../modifiers/tooltip";

const DEFAULT_MEDIUM_REGEX =
	"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).";
const DEFAULT_STRONG_REGEX = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";

/**
 * Password input with strength indicator and toggle mask.
 *
 * @class UlxPassword
 * @param {string} [id] - Unique ID for the input element.
 * @param {string} [key] - Stable key for auto-generated IDs.
 * @param {string} [value] - The input value (controlled).
 * @param {string} [label] - Label text.
 * @param {object} [rules] - Rules object for constraints.
 * @param {string} [helpText] - Help text below the input.
 * @param {string} [error] - Error message below the input.
 * @param {string} [fieldClass] - Extra classes for the field wrapper.
 * @param {string} [tooltipMessage] - Optional info text shown in a tooltip on an info icon next to the label.
 * @param {string} [placeholder] - Placeholder text.
 * @param {boolean} [disabled=false] - Disabled state.
 * @param {boolean} [readonly=false] - Read-only state.
 * @param {boolean} [invalid=false] - Invalid state.
 * @param {boolean} [filled=false] - Filled variant.
 * @param {string} [size] - Size variant.
 * @param {boolean|string} [floatLabel=false] - Float label mode.
 * @param {boolean} [feedback=true] - Show strength indicator.
 * @param {boolean} [toggleMask=false] - Show toggle visibility icon.
 * @param {string} [mediumRegex] - Regex for medium strength.
 * @param {string} [strongRegex] - Regex for strong strength.
 * @param {string} [promptLabel] - Custom prompt label override.
 * @param {string} [weakLabel] - Custom weak label override.
 * @param {string} [mediumLabel] - Custom medium label override.
 * @param {string} [strongLabel] - Custom strong label override.
 * @param {string} [customClass] - Additional root classes.
 * @param {Function} [onInput] - Input callback: (event) => void.
 * @param {Function} [onChange] - Change callback: (event) => void.
 * @param {Function} [onFocus] - Focus callback: (event) => void.
 * @param {Function} [onBlur] - Blur callback: (event) => void.
 */
export default class UlxPassword extends Component {
	@tracked unmasked = false;
	@tracked focused = false;

	triggerElement = null;

	get baseClass() {
		return getComponentClass("password");
	}

	get key() {
		return resolveKey(this, this.args.key);
	}

	get inputId() {
		return buildInputId(NAMESPACE, this.args.id, this.key);
	}

	get rules() {
		return normalizeRules(this.args.rules);
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

	get isInvalid() {
		const { invalid, error } = this.args;
		return isInvalidState(invalid, error);
	}

	get hasFeedback() {
		const { feedback = true } = this.args;
		return feedback;
	}

	get hasToggleMask() {
		const { toggleMask = false } = this.args;
		return toggleMask;
	}

	get inputType() {
		return this.unmasked ? "text" : "password";
	}

	get strengthLevel() {
		const {
			value,
			mediumRegex = DEFAULT_MEDIUM_REGEX,
			strongRegex = DEFAULT_STRONG_REGEX
		} = this.args;

		if (!value || value.length === 0) return 0;
		if (new RegExp(strongRegex).test(value)) return 3;
		if (new RegExp(mediumRegex).test(value)) return 2;
		return 1;
	}

	get strengthName() {
		switch (this.strengthLevel) {
			case 1:
				return "weak";
			case 2:
				return "medium";
			case 3:
				return "strong";
			default:
				return "";
		}
	}

	get strengthLabel() {
		const { promptLabel, weakLabel, mediumLabel, strongLabel } = this.args;

		switch (this.strengthLevel) {
			case 1:
				return weakLabel ?? t("lbl.password.weak");
			case 2:
				return mediumLabel ?? t("lbl.password.medium");
			case 3:
				return strongLabel ?? t("lbl.password.strong");
			default:
				return promptLabel ?? t("lbl.password.prompt");
		}
	}

	get strengthWidthStyle() {
		switch (this.strengthLevel) {
			case 1:
				return htmlSafe("width: 33.33%");
			case 2:
				return htmlSafe("width: 66.66%");
			case 3:
				return htmlSafe("width: 100%");
			default:
				return htmlSafe("width: 0%");
		}
	}

	get showPanel() {
		return this.hasFeedback && this.focused;
	}

	get fieldClass() {
		return buildFieldClass(this.args.fieldClass);
	}

	get rootClass() {
		const { customClass } = this.args;
		const parts = [this.baseClass];
		customClass && parts.push(customClass);
		return parts.filter(Boolean).join(" ");
	}

	get inputClass() {
		const { size = "m-size", filled, disabled, readonly, value } = this.args;
		return buildInputClass({
			isTextarea: false,
			size,
			filled,
			invalid: this.isInvalid,
			disabled,
			readonly,
			floatLabel: this.args.floatLabel,
			value
		});
	}

	get iconFieldClass() {
		const { size = "m-size", filled, disabled } = this.args;
		return buildIconFieldClass({
			iconPosition: "right",
			size,
			filled,
			invalid: this.isInvalid,
			disabled,
			iconFieldClass: null
		});
	}

	get inputIconClass() {
		return getInputIconClass();
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

	get ariaDescribedBy() {
		return buildAriaDescribedBy(this.inputId, {
			helpText: this.args.helpText,
			error: this.args.error
		});
	}

	get ariaErrorMessage() {
		return this.args.error ? `${this.inputId}-error` : undefined;
	}

	get floatLabelText() {
		const { floatLabel, label } = this.args;
		return resolveFloatLabelText(floatLabel, label);
	}

	get floatLabelClass() {
		const { size = "m-size", filled, disabled } = this.args;
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

	get toggleIconWrapperClass() {
		const { disabled = false } = this.args;
		const iconTypeClass = this.unmasked
			? getComponentClass("password-hide-icon")
			: getComponentClass("password-show-icon");

		const parts = [iconTypeClass];
		disabled && parts.push("disabled");

		return parts.filter(Boolean).join(" ");
	}

	get toggleIconName() {
		return this.unmasked ? "hide-icon" : "view-icon";
	}

	get panelClass() {
		return getComponentClass("password-panel enter-done");
	}

	get meterClass() {
		const parts = [getComponentClass("password-meter"), this.strengthName];
		return parts.filter(Boolean).join(" ");
	}

	get strengthBarClass() {
		const parts = [getComponentClass("password-strength"), this.strengthName];
		return parts.filter(Boolean).join(" ");
	}

	get infoClass() {
		return getComponentClass("password-info");
	}

	get headerClass() {
		return getComponentClass("password-header");
	}

	get footerClass() {
		return getComponentClass("password-footer");
	}

	get toggleAriaLabel() {
		return this.unmasked ? t("lbl.password.hide") : t("lbl.password.show");
	}

	appendToBody = modifier((element, [when]) => {
		if (!when) {
			if (element.parentNode === document.body) {
				document.body.removeChild(element);
			}
			return;
		}
		if (element.parentNode !== document.body) {
			document.body.appendChild(element);
		}
		return () => {
			if (element.parentNode === document.body) {
				document.body.removeChild(element);
			}
		};
	});

	triggerRef = modifier((element) => {
		this.triggerElement = element;
		return () => {
			if (this.triggerElement === element) this.triggerElement = null;
		};
	});

	positionPanel = modifier((element, [when, triggerEl]) => {
		if (!when || !element) return;

		const alignPanelToTrigger = () => {
			const trigger = this.triggerElement ?? triggerEl;
			if (!trigger) return;

			const inputEl = trigger.tagName === "INPUT" ? trigger : trigger.querySelector("input");
			const targetRect = (inputEl ?? trigger).getBoundingClientRect();
			const scrollX = window.pageXOffset ?? document.documentElement.scrollLeft ?? 0;
			const scrollY = window.pageYOffset ?? document.documentElement.scrollTop ?? 0;

			element.style.position = "absolute";
			element.style.top = `${targetRect.bottom + scrollY + 4}px`;
			element.style.left = `${targetRect.left + scrollX}px`;
			element.style.width = `${targetRect.width}px`;
			element.style.minWidth = `${targetRect.width}px`;
			element.style.maxWidth = `${targetRect.width}px`;
			element.style.zIndex = "1001";
			element.style.transformOrigin = "center top";

			const panelHeight = element.offsetHeight || 80;
			let top = targetRect.bottom + 4;
			const left = targetRect.left;
			const viewportHeight = window.innerHeight;

			if (top + panelHeight > viewportHeight) {
				const topPosition = targetRect.top - panelHeight - 4;
				top = topPosition >= 0 ? topPosition : viewportHeight - panelHeight - 10;
			}
			if (top < 0) {
				top = 10;
			}

			element.style.top = `${top + scrollY}px`;
			element.style.left = `${left + scrollX}px`;
		};

		schedule("afterRender", () => {
			alignPanelToTrigger();
			if (element.parentNode === document.body) {
				requestAnimationFrame(alignPanelToTrigger);
			}
		});

		const onScroll = () => {
			if (this.showPanel && element.parentNode === document.body) alignPanelToTrigger();
		};
		window.addEventListener("scroll", onScroll, true);

		return () => {
			window.removeEventListener("scroll", onScroll, true);
		};
	});

	@action
	toggleMask() {
		const { disabled = false } = this.args;
		if (disabled) return;
		this.unmasked = !this.unmasked;
	}

	@action
	handleToggleKeydown(event) {
		if (event.key === "Enter" || event.code === "Space") {
			this.toggleMask();
			event.preventDefault();
		}
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
	handleInput(event) {
		const { floatLabel } = this.args;
		if (floatLabel) syncFloatLabelFilledClass(event.target);
		this.args.onInput?.(event);
	}

	@action
	handleChange(event) {
		this.args.onChange?.(event);
	}

	@action
	handleFocus(event) {
		const { floatLabel } = this.args;
		if (floatLabel) event.target.classList.add("focus");
		this.focused = true;
		this.args.onFocus?.(event);
	}

	@action
	handleBlur(event) {
		const { floatLabel } = this.args;
		if (floatLabel) {
			event.target.classList.remove("focus");
			syncFloatLabelFilledClass(event.target);
		}
		this.focused = false;
		this.args.onBlur?.(event);
	}

	<template>
		<div class={{this.fieldClass}}>
			{{#if (and @label (not @floatLabel))}}
				<label for={{this.inputId}}>
					<span class="label-text">
						{{@label}}
						{{#if this.isRequired}}
							<span class="fg-red" aria-hidden="true">*</span>
						{{/if}}
						{{#if @tooltipMessage}}
							<UlxIcon
								{{tooltip @tooltipMessage position="bottom"}}
								@type="font"
								@iconName="info-icon"
								@size="s14"
							/>
						{{/if}}
					</span>
					{{#if this.hasLabelMeta}}
						<span class="label-right">{{this.labelMetaText}}</span>
					{{/if}}
				</label>
			{{/if}}

			<div class={{this.rootClass}} {{this.triggerRef}}>
				{{#if @floatLabel}}
					<span class={{this.floatLabelClass}}>
						{{#if this.hasToggleMask}}
							<div
								class={{this.iconFieldClass}}
								{{on "focusin" this.handleIconFieldFocusIn}}
								{{on "focusout" this.handleIconFieldFocusOut}}
							>
								<input
									id={{this.inputId}}
									type={{this.inputType}}
									class={{this.inputClass}}
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
									{{on "input" this.handleInput}}
									{{on "change" this.handleChange}}
									{{on "focus" this.handleFocus}}
									{{on "blur" this.handleBlur}}
									...attributes
								/>
								<span class={{this.inputIconClass}} aria-hidden="true">
									<UlxButton
										@icon={{this.toggleIconName}}
										@iconSize="s18"
										@text={{true}}
										@disabled={{@disabled}}
										@customClass={{this.toggleIconWrapperClass}}
										@onClick={{this.toggleMask}}
										aria-label={{this.toggleAriaLabel}}
										aria-pressed={{if this.unmasked "true" "false"}}
									/>
								</span>
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
								minlength={{this.minLength}}
								maxlength={{this.maxLength}}
								required={{this.isRequired}}
								aria-required={{this.isRequired}}
								aria-invalid={{if this.isInvalid "true" "false"}}
								aria-describedby={{this.ariaDescribedBy}}
								aria-errormessage={{this.ariaErrorMessage}}
								{{on "input" this.handleInput}}
								{{on "change" this.handleChange}}
								{{on "focus" this.handleFocus}}
								{{on "blur" this.handleBlur}}
								...attributes
							/>
						{{/if}}
						<label for={{this.inputId}} class={{this.floatLabelLabelClass}}>
							<span class="label-text">
								{{this.floatLabelText}}
								{{#if this.isRequired}}
									<span class="fg-red" aria-hidden="true">*</span>
								{{/if}}
								{{#if @tooltipMessage}}
									<UlxIcon
										{{tooltip @tooltipMessage position="bottom"}}
										@type="font"
										@iconName="info-icon"
										@size="s14"
									/>
								{{/if}}
							</span>
						</label>
					</span>
				{{else}}
					{{#if this.hasToggleMask}}
						<div
							class={{this.iconFieldClass}}
							{{on "focusin" this.handleIconFieldFocusIn}}
							{{on "focusout" this.handleIconFieldFocusOut}}
						>
							<input
								id={{this.inputId}}
								type={{this.inputType}}
								class={{this.inputClass}}
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
								{{on "input" this.handleInput}}
								{{on "change" this.handleChange}}
								{{on "focus" this.handleFocus}}
								{{on "blur" this.handleBlur}}
								...attributes
							/>
							<span class={{this.inputIconClass}} aria-hidden="true">
								<UlxButton
									@icon={{this.toggleIconName}}
									@iconSize="s18"
									@text={{true}}
									@disabled={{@disabled}}
									@customClass={{this.toggleIconWrapperClass}}
									@onClick={{this.toggleMask}}
									aria-label={{this.toggleAriaLabel}}
									aria-pressed={{if this.unmasked "true" "false"}}
								/>
							</span>
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
							minlength={{this.minLength}}
							maxlength={{this.maxLength}}
							required={{this.isRequired}}
							aria-required={{this.isRequired}}
							aria-invalid={{if this.isInvalid "true" "false"}}
							aria-describedby={{this.ariaDescribedBy}}
							aria-errormessage={{this.ariaErrorMessage}}
							{{on "input" this.handleInput}}
							{{on "change" this.handleChange}}
							{{on "focus" this.handleFocus}}
							{{on "blur" this.handleBlur}}
							...attributes
						/>
					{{/if}}
				{{/if}}

				{{#if this.showPanel}}
					<div
						class={{this.panelClass}}
						aria-hidden="false"
						{{this.appendToBody this.showPanel}}
						{{this.positionPanel this.showPanel this.triggerElement}}
					>
						{{#if (has-block "panel-header")}}
							<div class={{this.headerClass}}>
								{{yield to="panel-header"}}
							</div>
						{{/if}}

						<div class={{this.meterClass}}>
							<div class={{this.strengthBarClass}} style={{this.strengthWidthStyle}}></div>
						</div>
						<div class={{this.infoClass}}>{{this.strengthLabel}}</div>

						{{#if (has-block "panel-footer")}}
							<div class={{this.footerClass}}>
								{{yield to="panel-footer"}}
							</div>
						{{/if}}
					</div>
				{{/if}}
			</div>

			{{#if (has-block "footer")}}
				{{yield to="footer"}}
			{{/if}}

			{{#if @helpText}}
				<div id="{{this.inputId}}-help" class="help-text">{{@helpText}}</div>
			{{/if}}

			{{#if @error}}
				<div
					id="{{this.inputId}}-error"
					class="error-message"
					role="alert"
					aria-atomic="true"
				>*{{@error}}</div>
			{{/if}}
		</div>
	</template>
}
