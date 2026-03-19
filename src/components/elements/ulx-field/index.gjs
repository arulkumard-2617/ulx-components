import Component from "@glimmer/component";
import UlxIcon from "../ulx-icon/index.gjs";
import tooltip from "../../../modifiers/tooltip";
import { hash } from "@ember/helper";
import { or } from "ember-truth-helpers";

import { buildFieldClass, normalizeRules, getRuleValue } from "../../../utils/input-util";

export default class UlxField extends Component {
	get fieldClass() {
		return buildFieldClass(this.args.fieldClass);
	}

	// Rules
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
		const { inputId, helpText, error } = this.args;
		if (!inputId) return;

		const ids = [];
		helpText && ids.push(`${inputId}-help`);
		error && ids.push(`${inputId}-error`);

		return ids.length ? ids.join(" ") : undefined;
	}

	get errorId() {
		const { inputId, error } = this.args;
		return error && inputId ? `${inputId}-error` : undefined;
	}

	get hasHelpText() {
		return !!(this.args.helpText && this.args.inputId);
	}

	get hasError() {
		return !!(this.args.error && this.args.inputId);
	}

	<template>
		<div class={{this.fieldClass}}>

			{{! LABEL (safe render) }}
			{{#if (or (has-block "label") @label)}}
				<label for={{@inputId}}>
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

			{{! CONTROL }}
			{{yield
				(hash inputId=@inputId describedBy=this.describedBy errorId=this.errorId)
				to="control"
			}}

			{{! HELP }}
			{{#if (has-block "helptext")}}
				{{yield to="helptext"}}
			{{else if this.hasHelpText}}
				<div id="{{@inputId}}-help" class="help-text">
					{{@helpText}}
				</div>
			{{/if}}

			{{! ERROR }}
			{{#if (has-block "error")}}
				{{yield to="error"}}
			{{else if this.hasError}}
				<div id="{{@inputId}}-error" class="error-message" role="alert" aria-atomic="true">
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
