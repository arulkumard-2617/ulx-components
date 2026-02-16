import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";

/**
 * Form container that provides layout and typography for form fields.
 * Uses grid layout; direct children with class "field" get flex column layout
 * (label, control, help-text, error-message). Structure per form.less:
 * form > .field > label (.label-text, .label-right) + control + .help-text / .error-message
 *
 * ## WCAG
 * - Uses semantic <form> element
 * - Pass aria-label, aria-labelledby, or aria-describedby via ...attributes
 *
 * @class UlxForm
 * @param {2|3} [cols] - Column layout: 2 or 3 columns for direct .field children
 * @param {'m-size'|'l-size'|'xl-size'} [size] - Size variant (default s-size has no class)
 * @param {string} [customClass] - Extra CSS classes on the form root
 *
 * @example
 * <UlxForm @cols={{2}} @size="m-size">
 *   <div class="field">
 *     <label for="name">
 *       <span class="label-text">Name</span>
 *       <span class="label-right">Optional</span>
 *     </label>
 *     <input id="name" class="ulx-input" />
 *     <p class="help-text">Enter your full name.</p>
 *   </div>
 * </UlxForm>
 */
export default class UlxForm extends Component {
	get baseClass() {
		return getComponentClass("form");
	}

	get rootClasses() {
		const { cols, size, customClass } = this.args;

		const parts = [this.baseClass];
		cols === 2 && parts.push("cols-2");
		cols === 3 && parts.push("cols-3");
		(size === "m-size" || size === "l-size" || size === "xl-size") && parts.push(size);
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	<template>
		<form class={{this.rootClasses}} ...attributes>
			{{yield}}
		</form>
	</template>
}
