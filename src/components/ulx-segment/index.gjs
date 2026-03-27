import Component from "@glimmer/component";
import { getComponentClass } from "../../utils/component-config";

/**
 * Segment component for grouping related content.
 * Based on Semantic UI Segment with ULS styling conventions.
 *
 * ## WCAG
 * - Uses semantic HTML (`<section>` or `<div>`)
 * - Proper ARIA attributes for accessibility
 * - High contrast and reduced motion support via CSS
 *
 * @class UlxSegment
 * @param {string} [type] - Segment type: "placeholder", "vertical", "basic", "circular", "clearing"
 * @param {string} [variant] - Visual variant: "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black", "primary", "secondary", "tertiary", or with "-invert" suffix for inverted colors (e.g., "blue-invert")
 * @param {string} [borderColor] - Border color variant: "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black", "primary"
 * @param {string} [borderSide] - Border side for colored border: "top", "bottom", "left", "right"
 * @param {string} [attached] - Attached position: "top", "bottom", or "attached" for middle
 * @param {boolean} [disabled=false] - Whether the segment is disabled
 * @param {boolean} [loading=false] - Whether the segment is in loading state
 * @param {boolean} [inline=false] - Whether placeholder type should be inline (for placeholder type only)
 * @param {string} [customClass] - Extra CSS classes appended to the root element
 * @param {string} [role] - ARIA role for the segment (defaults to "region" for semantic sections, or "none" for decorative)
 * @param {string} [ariaLabel] - Accessible label for the segment
 * @param {string} [ariaLabelledBy] - ID of element that labels the segment
 * @param {string} [ariaDescribedBy] - ID of element that describes the segment
 * @param {string} [dataQa] - Override root data-qa attribute.
 *
 * @example
 * // Basic segment
 * <UlxSegment>
 *   <p>Content here</p>
 * </UlxSegment>
 *
 * @example
 * // Colored segment
 * <UlxSegment @variant="blue">
 *   <p>Blue segment content</p>
 * </UlxSegment>
 *
 * @example
 * // Primary variant segment
 * <UlxSegment @variant="primary">
 *   <p>Primary segment content</p>
 * </UlxSegment>
 *
 * @example
 * // Vertical segment with header
 * <UlxSegment @type="vertical">
 *   <:header>Section Title</:header>
 *   <:default>Content here</:default>
 * </UlxSegment>
 *
 * @example
 * // Placeholder segment
 * <UlxSegment @type="placeholder" @inline={{false}}>
 *   <div class="segment-placeholder-content">
 *     <p>No content available</p>
 *   </div>
 * </UlxSegment>
 *
 * @example
 * // Disabled segment
 * <UlxSegment @disabled={{true}}>
 *   <p>This segment is disabled</p>
 * </UlxSegment>
 */
export default class UlxSegment extends Component {
	get baseClass() {
		return getComponentClass("segment");
	}

	get rootClasses() {
		const {
			type,
			variant,
			borderColor,
			borderSide,
			attached,
			disabled = false,
			loading = false,
			inline = false,
			customClass
		} = this.args;

		const parts = [this.baseClass];

		type && parts.push(type);
		variant && parts.push(variant);

		if (borderColor && borderSide) {
			parts.push(`border-${borderSide}-${borderColor}`);
		}

		if (attached) {
			parts.push("attached");
			attached !== "attached" && parts.push(attached);
		}

		disabled && parts.push("disabled");
		loading && parts.push("loading");

		if (type === "placeholder" && inline) {
			parts.push("inline");
		}

		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get role() {
		return this.args.role ?? (this.args.type === "basic" ? undefined : "region");
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

	get isDisabled() {
		return this.args.disabled === true;
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-segment";
	}

	get headerDataQa() {
		return `${this.rootDataQa}-header`;
	}

	get contentDataQa() {
		return `${this.rootDataQa}-content`;
	}

	<template>
		<div
			class={{this.rootClasses}}
			data-qa={{this.rootDataQa}}
			role={{this.role}}
			aria-label={{this.ariaLabel}}
			aria-labelledby={{this.ariaLabelledBy}}
			aria-describedby={{this.ariaDescribedBy}}
			aria-disabled="{{this.isDisabled}}"
			...attributes
		>
			{{#if (has-block "header")}}
				<div class="segment-header" data-qa={{this.headerDataQa}}>
					{{yield to="header"}}
				</div>
			{{/if}}

			{{#if (has-block "default")}}
				<div class="segment-content" data-qa={{this.contentDataQa}}>
					{{yield}}
				</div>
			{{else}}
				{{yield}}
			{{/if}}
		</div>
	</template>
}
