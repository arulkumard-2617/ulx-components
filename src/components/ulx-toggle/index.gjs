import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
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
 * Uses existing input-switch.less classes (no new styles).
 *
 * ## WCAG
 * - Hidden native checkbox for semantics and keyboard (Space toggles).
 * - Label via inputId + <label for="">, or aria-label / aria-labelledby via ...attributes.
 *
 * @class UlxToggle
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
 * @param {string} [customClass] - Extra classes on root.
 * @param {string} [dataQa] - Override for root element data-qa (default: "ulx-toggle").
 */
export default class UlxToggle extends Component {
	get baseClass() {
		return getComponentClass("inputswitch");
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-toggle";
	}

	get key() {
		return resolveKey(this, this.args.key);
	}

	get toggleId() {
		return buildToggleId(NAMESPACE, this.args.inputId, this.key);
	}

	get isInvalid() {
		return isInvalidState(this.args.invalid, this.args.error);
	}

	get rootClasses() {
		const { size = "m-size", variant = "green", disabled = false, customClass } = this.args;

		const parts = [this.baseClass];
		parts.push(size);
		parts.push(variant);
		this.isInvalid && parts.push("invalid");
		disabled && parts.push("disabled");
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
	</template>
}
