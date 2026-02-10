import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";

/**
 * Badge component for displaying status indicators, labels, and small text badges.
 *
 * ## WCAG
 * - **Dot badges**: Always decorative (`aria-hidden="true"`) as they are purely visual indicators. Cannot be made accessible.
 * - **Badges with content**: Decorative by default (`aria-hidden="true"`). For meaningful badges, provide `@ariaLabel` prop to make them accessible (automatically sets `aria-hidden="false"` and `role="status"`).
 * - **Interactive badges**: When `@clickable` or `@interactive` is true, automatically makes badge focusable (`tabindex="0"`). Requires `@ariaLabel` for accessible name.
 * - **Override via attributes**: You can override accessibility attributes via `...attributes` (e.g., `aria-hidden="false"`, `role="status"`, `aria-label="..."`).
 *
 * @class UlxBadge
 * @param {string|number} [value] - Content to display inside the badge. If not provided, children will be rendered.
 * @param {string} [variant] - Color variant: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "contrast" | "light-grey". Defaults to "primary".
 * @param {string} [size] - Size variant: "xs-size" | "s-size" | "m-size" | "l-size" | "xl-size". Defaults to "s-size".
 * @param {string} [type] - Badge type: "circle" | "dot" | "square" (default). "dot" renders as a dot indicator without text content. "circle" applies fully rounded shape.
 * @param {string} [ariaLabel] - Accessible name for meaningful badges. When provided, automatically sets `aria-hidden="false"` and `role="status"`.
 * @param {boolean} [disabled=false] - When true, applies disabled styling and prevents interaction.
 * @param {boolean} [clickable=false] - When true, applies clickable styling with hover/active states. Requires `@ariaLabel` for accessibility.
 * @param {boolean} [interactive=false] - When true, applies interactive styling with focus support. Requires `@ariaLabel` for accessibility.
 * @param {string} [customClass] - Extra CSS classes appended to the root element.
 * @param {string} [componentClass] - Override base component class (defaults to "ulx-badge").
 */
export default class UlxBadge extends Component {
	get baseClass() {
		const { componentClass } = this.args;
		return componentClass ?? getComponentClass("badge");
	}

	get rootClasses() {
		const {
			variant = "primary",
			size = "s-size",
			type,
			disabled = false,
			clickable = false,
			interactive = false,
			customClass
		} = this.args;

		const parts = [this.baseClass];

		// Variant
		parts.push(variant);

		// Size
		parts.push(size);

		// Type (circle, dot, or default square)
		type === "dot" && parts.push("dot");
		type === "circle" && parts.push("circle");

		// States
		disabled && parts.push("disabled");
		clickable && parts.push("clickable");
		interactive && parts.push("interactive");

		// Custom classes
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get isDot() {
		return this.args.type === "dot";
	}

	get hasAriaLabel() {
		return typeof this.args.ariaLabel === "string" && this.args.ariaLabel.length > 0;
	}

	get ariaHidden() {
		// Dot badges are always decorative
		if (this.isDot) {
			return this.hasAriaLabel ? "false" : "true";
		}
	}

	get role() {
		// Only set role when badge is meaningful (has aria-label prop)
		// Users can override via ...attributes if needed
		return this.hasAriaLabel ? "status" : undefined;
	}

	get tabindex() {
		// Interactive badges should be focusable
		if (this.args.clickable || this.args.interactive) {
			return this.args.disabled ? "-1" : "0";
		}
		return undefined;
	}

	<template>
		<span
			class={{this.rootClasses}}
			aria-hidden={{this.ariaHidden}}
			role={{this.role}}
			aria-label={{@ariaLabel}}
			aria-disabled={{if @disabled "true"}}
			tabindex={{this.tabindex}}
			...attributes
		>
			{{#unless this.isDot}}
				{{#if @value}}
					{{@value}}
				{{else}}
					{{yield}}
				{{/if}}
			{{/unless}}
		</span>
	</template>
}
