import Component from "@glimmer/component";
import { guidFor } from "@ember/object/internals";
import UlxIcon from "../ulx-icon/index.gjs";
import tooltip from "../../../modifiers/tooltip";
import { or } from "ember-truth-helpers";

import {
	buildFieldClass,
	getConstraintValue,
	isRulesRequired,
	normalizeRules
} from "../../../utils/input-util";

/**
 * Field wrapper: label, control yield, help, and error. `@fieldId` sets the field id (label `for`, help/error ids).
 *
 * **Control wiring (yield hash: `key`, `describedBy`, `errorId`, `rules`, `error`):** Use `<UlxField ... as |field|>…</UlxField>` and pass `@field={{field}}` on the control. With other named blocks (`assistive`, etc.), use `<:default as |field|>…</:default>`—Ember does not allow mixing an implicit default block with other named blocks on the same invocation.
 *
 * @class UlxField
 * @param {string} [fieldClass] - Extra classes on the root `.field` wrapper.
 * @param {string} [fieldId] - Stable id for the control, help, and error nodes. Auto-generated when omitted.
 * @param {string} [label] - Plain-text label (or use the `label` block).
 * @param {string} [helpText] - Help copy rendered below the control (linked via `aria-describedby`).
 * @param {string} [error] - Error copy; when set, invalid region is shown and linked via `aria-errormessage`.
 * @param {string} [tooltipMessage] - Optional info icon tooltip next to the label.
 * @param {object} [rules] - `{ required: true }` or editor-style `{ required: t('…'), format: { with, allowBlank, msg }, maxLength: { value?, msg } }`.
 */
export default class UlxField extends Component {
	get fieldClass() {
		return buildFieldClass(this.args.fieldClass);
	}

	get fieldId() {
		return this.args.fieldId ?? `ulx-field-${guidFor(this)}`;
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

	get hasMeta() {
		return this.minLength != null || this.maxLength != null;
	}

	get metaText() {
		const parts = [];
		if (this.minLength != null) parts.push(this.minLength);
		if (this.maxLength != null) parts.push(this.maxLength);
		return parts.join(" / ");
	}

	// ARIA
	get describedBy() {
		const { helpText, error } = this.args;
		const id = this.fieldId;
		if (!id) return;

		const ids = [];
		helpText && ids.push(`${id}-help`);
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

	get controlYieldHash() {
		const { rules, error } = this.args;

		return {
			key: this.fieldId,
			describedBy: this.describedBy,
			errorId: this.errorId,
			rules,
			error
		};
	}

	<template>
		<div class={{this.fieldClass}}>

			{{! LABEL (safe render) }}
			{{#if (or (has-block "label") @label)}}
				<label for={{this.fieldId}}>
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
								@size="s14"
							/>
						{{/if}}

					</span>

					{{#if this.hasMeta}}
						<span class="label-right">{{this.metaText}}</span>
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
					class="error-message fg-red"
					role="alert"
					aria-atomic="true"
				>
					*{{@error}}
				</div>
			{{/if}}

			{{! SUPPORTING }}
			{{#if (has-block "assistive")}}
				{{yield to="assistive"}}
			{{/if}}

		</div>
	</template>
}
