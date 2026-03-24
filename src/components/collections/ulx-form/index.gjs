import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";
import { joinClassNames } from "../../../utils/class-names";
import { resolveRootDataQa } from "../../../utils/data-qa";

/** Size tokens that add a class on the root (`s-size` is the default in CSS and is not emitted). */
const FORM_SIZE_CLASSES = new Set(["m-size", "l-size", "xl-size"]);

/**
 * Form container that provides layout and typography for form fields.
 * Uses grid layout; direct children with class "field" get flex flex-col layout
 * (label, control, help-text, error-message). Structure per form.less:
 * form > .field > label (.label-text, .label-right) + control + .help-text / .error-message
 *
 * ## WCAG
 * - Uses semantic <form> element
 * - Pass aria-label, aria-labelledby, or aria-describedby via ...attributes
 *
 * @class UlxForm
 * @param {2|3} [cols] - flex-col layout: 2 or 3 columns for direct .field children
 * @param {'m-size'|'l-size'|'xl-size'} [size] - Size variant (default s-size has no class)
 * @param {string} [customClass] - Extra CSS classes on the form root
 * @param {string} [dataQa] - Optional override for root `data-qa` (default `ulx-form`).
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

	/** Grid column count (`cols-2` / `cols-3`), optional size from `FORM_SIZE_CLASSES`, then `customClass`. */
	get rootClasses() {
		const { cols, size, customClass } = this.args;

		const parts = [this.baseClass];
		cols === 2 && parts.push("cols-2");
		cols === 3 && parts.push("cols-3");
		size && FORM_SIZE_CLASSES.has(size) && parts.push(size);
		customClass && parts.push(customClass);

		return joinClassNames(...parts);
	}

	/** Default root `data-qa` is `ulx-form`; optional `@dataQa` replaces it. */
	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "form");
	}

	<template>
		<form class={{this.rootClasses}} data-qa={{this.rootDataQa}} ...attributes>
			{{yield}}
		</form>
	</template>
}
