import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { or } from "ember-truth-helpers";
import { NAMESPACE, getComponentClass } from "../../utils/component-config";
import { t } from "../../utils/i18n";
import {
	buildToggleId,
	invokeCheckedChange,
	isInvalidState,
	resolveKey
} from "../../utils/input-util";

/**
 * Toggle (switch) component: controlled on/off state with slider visual.
 *
 * ## WCAG
 * - Hidden native checkbox for semantics and keyboard (Space toggles).
 * - Label via `@label` / label block and aria-labelledby, inputId + <label for="">, or aria-label / aria-labelledby via ...attributes.
 *
 * @class UlxToggle
 * @param {string} [label] - Optional text label rendered with the toggle when using labeled layout.
 * @param {string} [description] - Optional helper text rendered below the label and linked with aria-describedby.
 * @param {"start"|"end"} [togglePosition="end"] - Position of the toggle relative to label/description in labeled layout.
 * @param {boolean} [checked=false] - Controlled on/off state.
 * @param {Function} [onChange] - Called on native change: (event) => void.
 * @param {Function} [onCheckedChange] - Called with next value and event: (checked, event) => void.
 * @param {boolean} [disabled=false] - Disables and prevents focus.
 * @param {boolean} [invalid=false] - Error/invalid state.
 * @param {string} [error] - Error message or flag; sets invalid state when present (with @invalid).
 * @param {string} [inputId] - Id for the hidden input; use with <label for=""> for a11y.
 * @param {string} [key] - When `inputId` is omitted, used as the input id (e.g. `@key={{field.key}}` with `UlxField`); otherwise stable key for auto-generated id.
 * @param {string} [size="m-size"] - Size: s-size, m-size, l-size.
 * @param {string} [variant="green"] - Color variant class (e.g. "green", "primary", etc.).
 * @param {string} [customClass] - Extra classes on the outermost root: labeled wrapper when present, otherwise the switch root.
 * @param {string} [toggleClass] - Extra classes on the switch root.
 * @param {string} [dataQa] - Override for root element data-qa (default: "ulx-toggle").
 * @block label - Custom label content (use `@label` or this block).
 * @block description - Custom description content (use `@description` or this block).
 */
export default class UlxToggle extends Component {
	get baseClass() {
		return getComponentClass("inputswitch");
	}

	get wrapperBaseClass() {
		return getComponentClass("inputswitch-field");
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-toggle";
	}

	get switchDataQa() {
		return `${this.rootDataQa}-switch`;
	}

	get key() {
		return resolveKey(this, this.args.key);
	}

	get toggleId() {
		return buildToggleId(NAMESPACE, this.args.inputId, this.key);
	}

	get descriptionId() {
		return `${this.toggleId}-description`;
	}

	get labelId() {
		return `${this.toggleId}-label`;
	}

	get hasLabeledLayout() {
		const { label, description } = this.args;
		return Boolean(label || description);
	}

	get togglePosition() {
		const { togglePosition = "end" } = this.args;
		return togglePosition === "start" ? "start" : "end";
	}

	get wrapperClasses() {
		const { customClass } = this.args;

		const parts = [this.wrapperBaseClass];
		parts.push(`toggle-position-${this.togglePosition}`);
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get isInvalid() {
		return isInvalidState(this.args.invalid, this.args.error);
	}

	get switchClasses() {
		const { size = "m-size", variant = "green", disabled = false, toggleClass } = this.args;

		const parts = [this.baseClass];
		parts.push(size);
		parts.push(variant);
		this.isInvalid && parts.push("invalid");
		disabled && parts.push("disabled");
		toggleClass && parts.push(toggleClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get rootClasses() {
		const { customClass } = this.args;
		const parts = [this.switchClasses];
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get sliderClasses() {
		const { checked = false } = this.args;
		const parts = ["inputswitch-slider"];
		checked && parts.push("checked");
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get inputClasses() {
		const { disabled = false } = this.args;
		const parts = ["inputswitch-input"];
		disabled && parts.push("disabled");
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	@action
	handleChange(event) {
		invokeCheckedChange(this.args, event);
	}

	<template>
		{{#if (or this.hasLabeledLayout (has-block "label") (has-block "description"))}}
			<div class={{this.wrapperClasses}} data-qa={{this.rootDataQa}}>
				<div class="inputswitch-content" data-qa="ulx-toggle-content">
					{{#if (or @label (has-block "label"))}}
						<div id={{this.labelId}} class="inputswitch-label" data-qa="ulx-toggle-label">
							{{#if (has-block "label")}}
								{{yield to="label"}}
							{{else}}
								{{@label}}
							{{/if}}
						</div>
					{{/if}}

					{{#if (or @description (has-block "description"))}}
						<div
							id={{this.descriptionId}}
							class="inputswitch-description"
							data-qa="ulx-toggle-description"
						>
							{{#if (has-block "description")}}
								{{yield to="description"}}
							{{else}}
								{{@description}}
							{{/if}}
						</div>
					{{/if}}
				</div>

				<div class="inputswitch-control" data-qa={{this.switchDataQa}}>
					<div class={{this.switchClasses}}>
						<input
							type="checkbox"
							id={{this.toggleId}}
							class={{this.inputClasses}}
							checked={{@checked}}
							disabled={{@disabled}}
							aria-invalid={{if this.isInvalid "true" "false"}}
							aria-checked={{if @checked "true" "false"}}
							aria-labelledby={{if (or @label (has-block "label")) this.labelId}}
							aria-describedby={{if (or @description (has-block "description")) this.descriptionId}}
							role="switch"
							data-qa="ulx-toggle-input"
							{{on "change" this.handleChange}}
							...attributes
						/>
						<div class={{this.sliderClasses}} aria-hidden="true" data-qa="ulx-toggle-slider">
							{{#if @checked}}
								<span class="on-lbl">{{t "label.on"}}</span>
							{{else}}
								<span class="off-lbl">{{t "label.off"}}</span>
							{{/if}}
						</div>
					</div>
				</div>
			</div>
		{{else}}
			<div class={{this.rootClasses}} data-qa={{this.rootDataQa}}>
				<input
					type="checkbox"
					id={{this.toggleId}}
					class={{this.inputClasses}}
					checked={{@checked}}
					disabled={{@disabled}}
					aria-invalid={{if this.isInvalid "true" "false"}}
					aria-checked={{if @checked "true" "false"}}
					role="switch"
					data-qa="ulx-toggle-input"
					{{on "change" this.handleChange}}
					...attributes
				/>
				<div class={{this.sliderClasses}} aria-hidden="true" data-qa="ulx-toggle-slider">
					{{#if @checked}}
						<span class="on-lbl">{{t "label.on"}}</span>
					{{else}}
						<span class="off-lbl">{{t "label.off"}}</span>
					{{/if}}
				</div>
			</div>
		{{/if}}
	</template>
}
