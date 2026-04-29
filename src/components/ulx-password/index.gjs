import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { modifier } from "ember-modifier";
import { htmlSafe } from "@ember/template";

import appendToBody from "../../modifiers/append-to-body";
import { applyBodyAbsoluteFromViewport } from "../../utils/overlay-helpers";

import { getComponentClass, NAMESPACE } from "../../utils/component-config";
import {
	normalizeRules,
	getConstraintValue,
	isRulesRequired,
	resolveKey,
	buildInputId,
	buildInputClass,
	buildAriaDescribedBy,
	isInvalidState
} from "../../utils/input-util";

import { t } from "../../utils/i18n";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import UlxIconInput from "../ulx-icon-input/index.gjs";

const DEFAULT_MEDIUM_REGEX =
	"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).";

const DEFAULT_STRONG_REGEX = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";

export default class UlxPassword extends Component {
	@tracked unmasked = false;
	@tracked focused = false;

	triggerElement = null;

	// --------------------------
	// Base
	// --------------------------

	get baseClass() {
		return getComponentClass("password");
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

	// --------------------------
	// Rules
	// --------------------------

	get rules() {
		const { rules: rulesArg } = this.args;
		return normalizeRules(rulesArg ?? this.fieldContext?.rules);
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

	// --------------------------
	// State
	// --------------------------

	get value() {
		return this.args.value ?? "";
	}

	get inputType() {
		return this.unmasked ? "text" : "password";
	}

	get hasToggleMask() {
		return this.args.toggleMask ?? false;
	}

	// --------------------------
	// Strength
	// --------------------------

	get mediumRegex() {
		if (!this._medium) {
			this._medium = new RegExp(this.args.mediumRegex ?? DEFAULT_MEDIUM_REGEX);
		}
		return this._medium;
	}

	get strongRegex() {
		if (!this._strong) {
			this._strong = new RegExp(this.args.strongRegex ?? DEFAULT_STRONG_REGEX);
		}
		return this._strong;
	}

	get strengthLevel() {
		const value = this.value;

		if (!value) return 0;
		if (this.strongRegex.test(value)) return 3;
		if (this.mediumRegex.test(value)) return 2;
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
		return this.focused && this.args.feedback !== false;
	}

	// --------------------------
	// Classes
	// --------------------------

	get rootClass() {
		const parts = [this.baseClass];
		if (this.args.customClass) parts.push(this.args.customClass);
		return parts.join(" ");
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
			floatLabel: false,
			value
		});
	}

	get panelClass() {
		return `${getComponentClass("password-panel")} enter-done`;
	}

	get meterClass() {
		return [getComponentClass("password-meter"), this.strengthName].filter(Boolean).join(" ");
	}

	get strengthBarClass() {
		return [getComponentClass("password-strength"), this.strengthName].filter(Boolean).join(" ");
	}

	get infoClass() {
		return getComponentClass("password-info");
	}

	// --------------------------
	// Accessibility
	// --------------------------

	get ariaDescribedBy() {
		const { ariaDescribedBy, helpText, error: errorArg } = this.args;
		if (ariaDescribedBy) return ariaDescribedBy;
		if (this.fieldContext?.describedBy) return this.fieldContext.describedBy;
		const error = errorArg ?? this.fieldContext?.error;

		return buildAriaDescribedBy(this.inputId, {
			helpText,
			error
		});
	}

	get ariaErrorMessage() {
		const { ariaErrorMessage, error: errorArg } = this.args;
		if (ariaErrorMessage) return ariaErrorMessage;
		if (this.fieldContext?.errorId) return this.fieldContext.errorId;
		const error = errorArg ?? this.fieldContext?.error;
		return error ? `${this.inputId}-error` : undefined;
	}

	get toggleIconName() {
		return this.unmasked ? "hide-icon" : "view-icon";
	}

	get toggleAriaLabel() {
		return this.unmasked ? t("label.hide.password") : t("label.show.password");
	}

	// --------------------------
	// Modifiers
	// --------------------------

	triggerRef = modifier((element) => {
		this.triggerElement = element;
		return () => {
			if (this.triggerElement === element) this.triggerElement = null;
		};
	});

	positionPanel = modifier((element, [when]) => {
		if (!when || !this.triggerElement) return;

		const position = () => {
			const inputEl = this.triggerElement.querySelector("input") || this.triggerElement;

			const rect = inputEl.getBoundingClientRect();
			const panelHeight = element.offsetHeight || 80;
			const viewportHeight = window.innerHeight;

			let top = rect.bottom + 4;
			let left = rect.left;
			let transformOrigin = "center top";

			// flip
			if (rect.bottom + panelHeight > viewportHeight) {
				const topPos = rect.top - panelHeight - 4;
				if (topPos >= 0) {
					top = topPos;
					transformOrigin = "center bottom";
				} else {
					top = viewportHeight - panelHeight - 10;
				}
			}

			if (top < 0) top = 10;

			applyBodyAbsoluteFromViewport(element, top, left);

			element.style.top = `${top + window.scrollY}px`;
			element.style.left = `${left + window.scrollX}px`;
			element.style.right = "auto";
			element.style.bottom = "auto";

			element.style.width = `${rect.width}px`;
			element.style.minWidth = `${rect.width}px`;
			element.style.maxWidth = `${rect.width}px`;

			element.style.zIndex = "1001";
			element.style.transformOrigin = transformOrigin;
		};

		position();

		const onScroll = () => position();
		const onResize = () => position();

		window.addEventListener("scroll", onScroll, true);
		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("scroll", onScroll, true);
			window.removeEventListener("resize", onResize);
		};
	});

	// --------------------------
	// Actions
	// --------------------------

	@action toggleMask() {
		if (this.args.disabled) return;
		this.unmasked = !this.unmasked;
	}

	@action handleInput(e) {
		this.args.onInput?.(e);
	}

	@action handleFocus(e) {
		this.focused = true;
		this.args.onFocus?.(e);
	}

	@action handleBlur(e) {
		requestAnimationFrame(() => {
			this.focused = false;
		});
		this.args.onBlur?.(e);
	}

	// --------------------------
	// Template
	// --------------------------

	<template>
		<div class={{this.rootClass}} {{this.triggerRef}}>

			<UlxIconInput @iconRight={{true}} @disabled={{@disabled}}>

				<:input>
					<input
						id={{this.inputId}}
						type={{this.inputType}}
						class={{this.inputClass}}
						value={{this.value}}
						placeholder={{@placeholder}}
						disabled={{@disabled}}
						readonly={{@readonly}}
						minlength={{this.minLength}}
						maxlength={{this.maxLength}}
						required={{this.isRequired}}
						aria-invalid={{if this.isInvalid "true" "false"}}
						aria-describedby={{this.ariaDescribedBy}}
						aria-errormessage={{this.ariaErrorMessage}}
						{{on "input" this.handleInput}}
						{{on "focus" this.handleFocus}}
						{{on "blur" this.handleBlur}}
					/>
				</:input>

				<:icon>
					{{#if this.hasToggleMask}}
						<UlxIconButton
							@iconLeft={{this.toggleIconName}}
							@iconSize="s18"
							@variant="basic"
							@size="xs-size compact"
							@text={{true}}
							@disabled={{@disabled}}
							@onClick={{this.toggleMask}}
							aria-label={{this.toggleAriaLabel}}
							aria-pressed={{if this.unmasked "true" "false"}}
						/>
					{{/if}}
				</:icon>

			</UlxIconInput>

			{{#if this.showPanel}}
				<div
					class={{this.panelClass}}
					aria-hidden="false"
					{{appendToBody this.showPanel}}
					{{this.positionPanel this.showPanel}}
				>

					{{! HEADER SLOT }}
					{{#if (has-block "panel-header")}}
						<div class="ulx-password-header">
							{{yield to="panel-header"}}
						</div>
					{{/if}}

					{{! DEFAULT METER }}
					<div class={{this.meterClass}}>
						<div class={{this.strengthBarClass}} style={{this.strengthWidthStyle}}></div>
					</div>

					<div class={{this.infoClass}}>
						{{this.strengthLabel}}
					</div>

					{{! FOOTER SLOT }}
					{{#if (has-block "panel-footer")}}
						<div class="ulx-password-footer">
							{{yield to="panel-footer"}}
						</div>
					{{/if}}

				</div>
			{{/if}}

		</div>
	</template>
}
