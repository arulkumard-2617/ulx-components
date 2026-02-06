import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";

/**
 * SegmentsGroup component for grouping multiple segments together.
 * Based on Semantic UI Segments with ULS styling conventions.
 *
 * Segments groups automatically format multiple segments with shared borders
 * and spacing, creating a cohesive visual group.
 *
 * ## WCAG
 * - Uses semantic HTML (`<div>`)
 * - Proper ARIA attributes for accessibility
 * - High contrast and reduced motion support via CSS
 *
 * @class UlxSegmentsGroup
 * @param {boolean} [horizontal=false] - When true, displays segments horizontally instead of vertically
 * @param {string} [customClass] - Extra CSS classes appended to the root element
 * @param {string} [role] - ARIA role for the segments group (defaults to "group")
 * @param {string} [ariaLabel] - Accessible label for the segments group
 * @param {string} [ariaLabelledBy] - ID of element that labels the segments group
 * @param {string} [ariaDescribedBy] - ID of element that describes the segments group
 *
 * @example
 * // Vertical segments group (default)
 * <UlxSegmentsGroup>
 *   <UlxSegment>
 *     <p>First segment</p>
 *   </UlxSegment>
 *   <UlxSegment>
 *     <p>Second segment</p>
 *   </UlxSegment>
 *   <UlxSegment>
 *     <p>Third segment</p>
 *   </UlxSegment>
 * </UlxSegmentsGroup>
 *
 * @example
 * // Horizontal segments group
 * <UlxSegmentsGroup @horizontal={{true}}>
 *   <UlxSegment>
 *     <p>Left segment</p>
 *   </UlxSegment>
 *   <UlxSegment>
 *     <p>Middle segment</p>
 *   </UlxSegment>
 *   <UlxSegment>
 *     <p>Right segment</p>
 *   </UlxSegment>
 * </UlxSegmentsGroup>
 */
export default class UlxSegmentsGroup extends Component {
	get baseClass() {
		return getComponentClass("segments");
	}

	get rootClasses() {
		const { horizontal = false, customClass } = this.args;

		const parts = [this.baseClass];

		// Horizontal layout
		horizontal && parts.push("horizontal");

		// Custom class
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get role() {
		return this.args.role ?? "group";
	}

	get ariaLabel() {
		return this.args.ariaLabel;
	}

	get ariaLabelledBy() {
		return this.args.ariaLabelledBy;
	}

	get ariaDescribedBy() {
		return this.args.ariaDescribedBy;
	}

	<template>
		<div
			class={{this.rootClasses}}
			role={{this.role}}
			aria-label={{this.ariaLabel}}
			aria-labelledby={{this.ariaLabelledBy}}
			aria-describedby={{this.ariaDescribedBy}}
			...attributes
		>
			{{yield}}
		</div>
	</template>
}
