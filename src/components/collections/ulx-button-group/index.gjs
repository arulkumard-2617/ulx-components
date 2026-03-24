import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";
import { joinClassNames } from "../../../utils/class-names";
import { resolveRootDataQa } from "../../../utils/data-qa";

/**
 * Button group container that groups multiple buttons with connected styling
 * (shared borders, no gap between buttons). Uses uls-v2 .button-groups styles.
 *
 * @class UlxButtonGroup
 * @param {'horizontal'|'vertical'} [orientation='horizontal'] - Layout direction
 * @param {string} [size] - Size class from parent (e.g. xs-size, s-size, m-size, l-size, xl-size). Default m-size.
 * @param {boolean} [fluid=false] - Equal-width buttons (grid)
 * @param {'primary'|'secondary'|'success'|'info'|'warning'|'help'|'danger'} [severity] - Severity for active state styling
 * @param {boolean} [outlined=false] - Outlined variant on group
 * @param {boolean} [text=false] - Text variant on group
 * @param {boolean} [raised=false] - Raised variant on group
 * @param {string} [customClass] - Additional CSS classes
 * @param {string} [dataQa] - Optional override for root `data-qa` (default `ulx-button-group`).
 */
export default class UlxButtonGroup extends Component {
	get baseClass() {
		return getComponentClass("button-groups");
	}

	/** Root classes: base + orientation + size + optional variant flags (`fluid`, `severity`, etc.). */
	get groupClasses() {
		const {
			orientation = "horizontal",
			size = "m-size",
			fluid = false,
			outlined = false,
			text = false,
			raised = false,
			severity,
			customClass
		} = this.args;

		const parts = [this.baseClass, orientation, size];
		fluid && parts.push("fluid");
		severity && parts.push(severity);
		outlined && parts.push("outlined");
		text && parts.push("text");
		raised && parts.push("raised");
		customClass && parts.push(customClass);

		return joinClassNames(...parts);
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "button-group");
	}

	<template>
		<div class={{this.groupClasses}} data-qa={{this.rootDataQa}} ...attributes>
			{{yield}}
		</div>
	</template>
}
