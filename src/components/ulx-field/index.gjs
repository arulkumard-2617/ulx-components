import Component from "@glimmer/component";
import { guidFor } from "@ember/object/internals";
import UlxIcon from "../ulx-icon/index.gjs";
import tooltip from "../../modifiers/tooltip";
import { or, and, not } from "ember-truth-helpers";
import { t } from "../../utils/i18n";

import {
	buildFieldClass,
	getConstraintValue,
	isRulesRequired,
	normalizeRules
} from "../../utils/input-util";

/**
 * Field wrapper: label, control yield, help, and error. `@fieldId` sets the field id (label `for`, help/error ids).
 *
 * **Control wiring (yield hash: `key`, `labelId`, `describedBy`, `errorId`, `rules`, `error`):** Use `<UlxField ... as |field|>…</UlxField>` and pass `@field={{field}}` on the control. With other named blocks (`assistive`, etc.), use `<:default as |field|>…</:default>`—Ember does not allow mixing an implicit default block with other named blocks on the same invocation.
 * **Group controls:** For multi-option controls (e.g. `UlxCheckbox` `@items`), set `@labelFor={{false}}` so the label names the group via `labelId` / `aria-labelledby` instead of a single input `for` association.
 *
 * @class UlxField
 * @param {string} [fieldClass] - Extra classes on the root `.field` wrapper.
 * @param {string} [fieldId] - Stable id for the control, help, and error nodes. Auto-generated when omitted.
 * @param {string|false} [labelFor] - Label `for` target. Defaults to `@fieldId`. Set to `false` for group controls so the label is referenced via `labelId` only.
 * @param {string} [label] - Plain-text label (or use the `label` block).
 * @param {string} [labelRightText] - Optional text rendered in the label-right slot. Overrides rules metadata and character count when the `labelRight` block is not used.
 * @namedBlock {labelRight} - Custom markup for the label-right slot (wraps in `.label-right`). Takes precedence over `@labelRightText`, rules metadata, and character count.
 * @param {boolean} [showCharacterCount=false] - When true, `@label` is set, `@rules` includes `maxLength`, and the `labelRight` block is not used, shows live `current / max` in the label-right slot and links it to the control via `aria-describedby`.
 * @param {string|number} [value] - Current control value used to derive character count when `@showCharacterCount` is true.
 * @param {number} [characterCount] - Optional explicit current length; overrides length derived from `@value`.
 * @param {string} [helpText] - Help copy rendered below the control (linked via `aria-describedby`).
 * @param {string} [error] - Error copy; when set, invalid region is shown and linked via `aria-errormessage`.
 * @param {string} [tooltipMessage] - Optional info icon tooltip next to the label. The icon exposes `lbl.a11y.field.moreInformation` as its accessible name; tooltip text is linked as supplementary description on focus/hover.
 * @param {object} [rules] - `{ required: true }` or editor-style `{ required: t('…'), format: { with, allowBlank, msg }, maxLength: { value?, msg } }`.
 */
export default class UlxField extends Component {
	get fieldClass() {
		return buildFieldClass(this.args.fieldClass);
	}

	get fieldId() {
		return this.args.fieldId ?? `ulx-field-${guidFor(this)}`;
	}

	get labelId() {
		return this.fieldId ? `${this.fieldId}-label` : undefined;
	}

	get labelForId() {
		const { labelFor } = this.args;

		if (labelFor === false) {
			return undefined;
		}

		if (typeof labelFor === "string" && labelFor.length) {
			return labelFor;
		}

		return this.fieldId;
	}

	// Rules
	get rules() {
		return normalizeRules(this.args.rules);
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

	get showCharacterCount() {
		return Boolean(this.args.showCharacterCount);
	}

	get currentCharacterCount() {
		const { characterCount, value } = this.args;

		if (typeof characterCount === "number" && Number.isFinite(characterCount)) {
			return Math.max(0, Math.floor(characterCount));
		}

		if (value == null) {
			return 0;
		}

		return String(value).length;
	}

	get hasMeta() {
		return (
			this.args.labelRightText != null ||
			this.minLength != null ||
			this.maxLength != null ||
			(this.showCharacterCount && this.maxLength != null)
		);
	}

	get metaText() {
		if (this.args.labelRightText != null) {
			return this.args.labelRightText;
		}

		if (this.showCharacterCount && this.maxLength != null) {
			return `${this.currentCharacterCount} / ${this.maxLength}`;
		}
	}

	get hasCharacterCountForA11y() {
		return (
			this.hasVisibleLabel &&
			this.showCharacterCount &&
			this.maxLength != null &&
			this.args.labelRightText == null
		);
	}

	get hasVisibleLabel() {
		return Boolean(this.args.label);
	}

	get characterCountId() {
		return this.hasCharacterCountForA11y ? `${this.fieldId}-character-count` : undefined;
	}

	// ARIA
	get describedBy() {
		const { helpText, error } = this.args;
		const id = this.fieldId;
		if (!id) return;

		const ids = [];
		helpText && ids.push(`${id}-help`);
		this.characterCountId && ids.push(this.characterCountId);
		error && ids.push(`${id}-error`);

		return ids.length ? ids.join(" ") : undefined;
	}

	get errorId() {
		const { error } = this.args;
		const id = this.fieldId;
		return error && id ? `${id}-error` : undefined;
	}

	get hasHelpText() {
		return !!(this.args.helpText && this.fieldId);
	}

	get hasError() {
		return !!(this.args.error && this.fieldId);
	}

	get tooltipIconAriaLabel() {
		return t("lbl.a11y.field.moreInformation");
	}

	get controlYieldHash() {
		const { rules, error } = this.args;

		return {
			key: this.fieldId,
			labelId: this.labelId,
			describedBy: this.describedBy,
			errorId: this.errorId,
			rules,
			error
		};
	}

	<template>
		<div class={{this.fieldClass}} title={{@titleMessage}}>

			{{! LABEL (safe render) }}
			{{#if (or (has-block "label") @label)}}
				<label for={{this.labelForId}} id={{this.labelId}}>
					<span class="label-text">

						{{#if (has-block "label")}}
							{{yield to="label"}}
						{{else}}
							{{@label}}
						{{/if}}

						{{#if this.isRequired}}
							<span class="fg-red" aria-hidden="true">*</span>
						{{/if}}

						{{#if @tooltipMessage}}
							<UlxIcon
								{{tooltip @tooltipMessage position="bottom"}}
								@type="font"
								@iconName="info-icon"
								@size="s16"
								@ariaLabel={{this.tooltipIconAriaLabel}}
							/>
						{{/if}}

					</span>

					{{#if (or (has-block "labelRight") this.hasMeta)}}
						<span
							class="label-right"
							id={{if (and this.hasCharacterCountForA11y (not (has-block "labelRight"))) this.characterCountId}}
							aria-live={{if (and this.hasCharacterCountForA11y (not (has-block "labelRight"))) "polite"}}
						>
							{{#if (has-block "labelRight")}}
								{{yield to="labelRight"}}
							{{else}}
								{{this.metaText}}
							{{/if}}
						</span>
					{{/if}}
				</label>
			{{/if}}

			{{yield this.controlYieldHash}}

			{{! HELP }}
			{{#if (has-block "helptext")}}
				{{yield to="helptext"}}
			{{else if this.hasHelpText}}
				<div id="{{this.fieldId}}-help" class="help-text">
					{{@helpText}}
				</div>
			{{/if}}

			{{! ERROR }}
			{{#if (has-block "error")}}
				{{yield to="error"}}
			{{else if this.hasError}}
				<div
					id="{{this.fieldId}}-error"
					data-qa="{{this.fieldId}}-error"
					class="error-message fg-red"
					role="alert"
					aria-atomic="true"
				>
					<span aria-hidden="true">*</span>{{@error}}
				</div>
			{{/if}}

			{{! SUPPORTING }}
			{{#if (has-block "assistive")}}
				{{yield to="assistive"}}
			{{/if}}

		</div>
	</template>
}
