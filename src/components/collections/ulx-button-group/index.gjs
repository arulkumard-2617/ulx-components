import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";

/**
 * Button group container that groups multiple buttons with connected styling
 * (shared borders, no gap between buttons). Uses uls-v2 .button-groups styles.
 *
 * @class UlxButtonGroup
 * @param {'horizontal'|'vertical'} [orientation='horizontal'] - Layout direction
 * @param {'small'|'normal'|'large'} [size='normal'] - Size of grouped buttons (maps to uls-v2 s-size, m-size, l-size)
 * @param {boolean} [fluid=false] - Equal-width buttons (grid)
 * @param {'primary'|'secondary'|'success'|'info'|'warning'|'help'|'danger'} [severity] - Severity for active state styling
 * @param {boolean} [outlined=false] - Outlined variant on group
 * @param {boolean} [text=false] - Text variant on group
 * @param {boolean} [raised=false] - Raised variant on group
 * @param {string} [customClass] - Additional CSS classes
 */
export default class UlxButtonGroup extends Component {
	get baseClass() {
		return getComponentClass("button-groups");
	}

	get groupClasses() {
		const parts = [this.baseClass];

		const orientation = this.args.orientation || "horizontal";
		parts.push(orientation);

		if (this.args.size === "small") parts.push("s-size");
		else if (this.args.size === "large") parts.push("l-size");
		else parts.push("m-size");

		if (this.args.fluid) parts.push("fluid");
		if (this.args.severity) parts.push(this.args.severity);
		if (this.args.outlined) parts.push("outlined");
		if (this.args.text) parts.push("text");
		if (this.args.raised) parts.push("raised");
		if (this.args.customClass) parts.push(this.args.customClass);

		return parts.filter(Boolean).join(" ");
	}

	<template>
		<div class={{this.groupClasses}} ...attributes>
			{{yield}}
		</div>
	</template>
}
