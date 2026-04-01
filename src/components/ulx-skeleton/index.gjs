import Component from "@glimmer/component";
import { getComponentClass } from "../../utils/component-config";

/**
 * Skeleton placeholder component to indicate loading states with optional animation.
 *
 * ## WCAG
 * - **Decorative by default**: Uses `aria-hidden="true"` so screen readers ignore it.
 * - **Container a11y**: When grouping multiple skeletons, use `aria-busy="true"` on the container.
 * - **No keyboard interaction**: Component has no interactive elements.
 * - Callers can override via `...attributes`.
 *
 * @class UlxSkeleton
 * @param {string} [shape="rectangle"] - Shape of the skeleton: "rectangle" | "circle".
 * @param {string} [size] - Shorthand for equal width and height (e.g. "4rem"). Overrides width/height when set.
 * @param {string} [width="100%"] - Width of the skeleton element.
 * @param {string} [height="1rem"] - Height of the skeleton element.
 * @param {string} [borderRadius] - Custom border radius override.
 * @param {string} [animation="wave"] - Animation type: "wave" (default) | "none".
 * @param {string} [customClass] - Extra CSS classes appended to the root element.
 * @param {string} [componentClass] - Override base component class (defaults to "ulx-skeleton").
 * @param {string} [dataQa] - Override for root element data-qa (default: "ulx-skeleton").
 */
export default class UlxSkeleton extends Component {
	get baseClass() {
		const { componentClass } = this.args;
		return componentClass ?? getComponentClass("skeleton");
	}

	get rootClasses() {
		const { shape = "rectangle", animation = "wave", customClass } = this.args;

		const parts = [this.baseClass];

		shape === "circle" && parts.push("circle");
		animation === "wave" && parts.push("wave");
		animation === "none" && parts.push("no-animation");
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get rootDataQa() {
		return this.args.dataQa ?? this.baseClass;
	}

	get inlineStyle() {
		const { size, width = "100%", height = "1rem", borderRadius } = this.args;

		const w = size ?? width;
		const h = size ?? height;
		const styleParts = [`width: ${w}`, `height: ${h}`];
		borderRadius && styleParts.push(`border-radius: ${borderRadius}`);

		return styleParts.join("; ");
	}

	<template>
		<div
			class={{this.rootClasses}}
			style={{this.inlineStyle}}
			aria-hidden="true"
			data-qa={{this.rootDataQa}}
			...attributes
		></div>
	</template>
}
