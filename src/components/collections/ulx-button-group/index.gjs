import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";

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
 * @param {string} [dataQa] - Override root data-qa attribute.
 */
export default class UlxButtonGroup extends Component {
	get baseClass() {
		return getComponentClass("button-groups");
	}

	get groupClasses() {
		const { orientation, size, fluid, severity, outlined, text, raised, customClass } = this.args;
		const parts = [this.baseClass];
		parts.push(orientation || "horizontal");
		parts.push(size || "m-size");
		if (fluid) parts.push("fluid");
		if (severity) parts.push(severity);
		if (outlined) parts.push("outlined");
		if (text) parts.push("text");
		if (raised) parts.push("raised");
		if (customClass) parts.push(customClass);
		return parts.filter(Boolean).join(" ");
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-button-group";
	}

	<template>
		<div class={{this.groupClasses}} data-qa={{this.rootDataQa}} ...attributes>
			{{yield}}
		</div>
	</template>
}
