import Component from '@glimmer/component';
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { or, and, not } from "ember-truth-helpers";
import { guidFor } from "@ember/object/internals";
import { Input, Textarea } from '@ember/component';

/**
 * ULS Input Component
 * 
 * A text input component for user input.
 * 
 * @class UlsInputComponent
 * @public
 */
export default class UlsInputComponent extends Component {

    elementName = Input;

    inputClass = "uls-input"

    get type() {
        return this.args.type || "text";
    }

    get key() {
        return this.args.key || guidFor(this);
    }

    get helpTextId() {
        return `help-${this.key}`;
    }

    get labelTextId() {
        return `label-${this.key}`;
    }

    get rules() {
        return this.args.rules || {};
    }

    get isRequired() {
		return !!this.rules.required;
	}

    get maxLength() {
		return this.rules.maxLength?.value;
	}

	@action
	onkeypress(event) {
		let value = event.target.value;

		if (event.key === "Enter") {
			this?.args?.onEnter?.(value, this.key);
		}
	}

	@action
	focusOut(event) {
		let value = event.target.value;

		event.preventDefault();
		this.args.onFocusout?.(value, this.key);
	}

	@action
	escapePress(event) {
		if (event.key === "Escape") {
			let value = event.target.value;
			event.preventDefault();
			this.args.onEscape?.(value, event);
		}
	}

    @action
	updateValue(event) {
		const value = event.target.value;
		
		if (this.args.onChange) {
			this.args.onChange({
				originalEvent: event,
				value: value,
				key: this.key
			});
		}
	}

	get size() {
		return this.args.size || "m-size";
	}


  <template>
    {{#let
        (has-block "helpText")
        (has-block "left-item")
        (has-block "right-item")
        (has-block "label")
        as |hasHelpText hasLeftItem hasRightItem hasLabel|
    }}
        <div class="field">
            {{#unless @hideLabel}}
                <label for="{{this.key}}">
                    {{#if hasLabel}}
                        {{yield this.labelTextId this.isRequired to="label"}}
                    {{else if @label}}
                        <span id="{{this.labelTextId}}">{{@label}}</span>
                        {{#if @isRequired}}
                            <span class="fg-red" aria-hidden="true">*</span>
                        {{/if}}
                    {{/if}}

                    {{#if (and this.maxLength (not @hideCharCount))}}
                        <div class="right floated" aria-hidden="true">
                            {{or @value.length 0}}
                            /
                            {{this.maxLength}}
                        </div>
                    {{/if}}
                    {{yield to="info"}}
                </label>
            {{/unless}}
            <this.elementName
                id={{this.key}}
                type="{{@type}}"
                value={{@value}}
                class="{{this.inputClass}} {{this.size}} {{if @error 'error'}}"
                maxlength="{{this.maxLength}}"
                min="{{@rules.min.value}}"
                max="{{@rules.max.value}}"
                placeholder={{@placeholder}}
                aria-describedby="{{if hasHelpText this.helpTextId}}"
                aria-labelledby="{{this.labelTextId}}"
                required={{this.isRequired}}
                aria-required="{{this.isRequired}}"
                aria-invalid="{{@error}}"
                readonly={{@readonly}}
                disabled={{@disabled}}
                {{on "keydown" this.escapePress}}
                {{on "keypress" this.onkeypress}}
                {{on "input" this.updateValue}}
                {{on "focusout" this.focusOut}}
                ...attributes
            />
            {{#if hasHelpText}}
                <div id={{this.helpTextId}} class="ui description">
                    {{yield to="helpText"}}
                </div>
            {{/if}}
            {{#if (and @error (not @errorIcon))}}
                <div class="error-message" role="alert">*{{@error}}</div>
            {{/if}}
        </div>
    {{/let}}
  </template>
}

export class UlsTextArea extends UlsInputComponent {
    elementName = Textarea;
    inputClass = "uls-input uls-textarea"; 
}
