import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";
import UlxIcon from "../ulx-icon/index.gjs";

function buildRootClass(rootClasses, icon, hasIconBlock, hasDefaultBlock) {
	const hasIcon = !!icon || !!hasIconBlock;
	return `${rootClasses}${hasIcon ? " with-icon" : " text-only"}${hasDefaultBlock ? " with-template" : ""}`;
}

const TYPE_CLASS_ALIASES = {
	outline: "outlined"
};

function normalizeTypeClass(type) {
	if (!type) return undefined;
	return TYPE_CLASS_ALIASES[type] ?? type;
}

/**
 * Tag element component (ULX).
 *
 * ## Notes
 * - Uses existing ULX classes from `ulx-v2` (`elements/tag.less`).
 * - `@invert` is an ULX extension that maps to the existing `.outlined` style.
 *
 * @class UlxTag
 * @param {string} [value] - Label text shown inside the tag.
 * @param {string} [variant] - Tag color variant class (e.g. "primary", "success", "light-salmon-red", "lt-green").
 * @param {boolean} [rounded=false] - Applies fully rounded tag styling.
 * @param {string} [icon] - Icon name passed to `UlxIcon` as `@iconName`. Renders before the label.
 * @param {string} [iconClass] - Passed to `UlxIcon` as `@componentClass` (e.g. "bs-icons1" for font icons).
 * @param {string} [iconSize] - Passed to `UlxIcon` as `@size` (e.g. "s18").
 *
 * @param {boolean} [invert=false] - ULX extension. When true, applies the existing `.outlined` class.
 *
 * @param {boolean} [disabled=false] - Applies `.disabled` styling (visual + pointer-events none).
 * @param {string} [size] - Size class: "xs-size" | "s-size" | "m-size" | "l-size" | "xl-size".
 * @param {string} [type] - Visual type class: "outlined" | "elevated" | "flat" | "pill" | "rounded" (alias: "outline" => "outlined").
 *
 * @param {string} [iconPosition='left'] - Icon position: "left" | "right".
 * @param {'svg'|'font'} [iconType='svg'] - Passed to `UlxIcon` when `@icon` is used.
 * @param {string} [iconAriaLabel] - Accessible name for meaningful icons (passed to `UlxIcon`).
 *
 * @param {string} [customClass] - Extra CSS classes appended to the root.
 * @param {string} [componentClass] - Override base component class.
 * @param {string} [dataQa] - Override for root element data-qa (default: "ulx-tag").
 */
export default class UlxTag extends Component {
	get baseClass() {
		return this.args.componentClass ?? getComponentClass("tag");
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-tag";
	}

	get typeClass() {
		return normalizeTypeClass(this.args.type);
	}

	get rootClasses() {
		const {
			variant,
			size,
			iconPosition = "left",
			rounded = false,
			invert = false,
			disabled = false,
			customClass
		} = this.args;

		const parts = [this.baseClass];

		// Variant
		variant && parts.push(variant);

		// Size
		size && parts.push(size);

		// Type
		this.typeClass && parts.push(this.typeClass);

		// ULX styles: `.icon-right` on root flips layout (row-reverse)
		iconPosition === "right" && parts.push("icon-right");

		// States
		rounded && parts.push("rounded");
		invert && parts.push("outlined");
		disabled && parts.push("disabled");

		// Custom classes
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get iconWrapperClass() {
		const { iconPosition = "left", disabled = false } = this.args;

		const position = iconPosition === "right" ? "right" : "left";
		const parts = ["tag-icon", position];
		disabled && parts.push("disabled");

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	<template>
		{{#let (has-block "icon") (has-block) as |hasIconBlock hasDefaultBlock|}}
			<span
				class={{buildRootClass this.rootClasses @icon hasIconBlock hasDefaultBlock}}
				aria-disabled={{if @disabled "true"}}
				data-qa={{this.rootDataQa}}
				...attributes
			>
				{{#if hasIconBlock}}
					<span class={{this.iconWrapperClass}} data-qa="ulx-tag-icon">
						{{yield to="icon"}}
					</span>
				{{else if @icon}}
					<span class={{this.iconWrapperClass}} data-qa="ulx-tag-icon">
						<UlxIcon
							@componentClass={{@iconClass}}
							@iconName={{@icon}}
							@type={{@iconType}}
							@size={{@iconSize}}
							@ariaLabel={{@iconAriaLabel}}
						/>
					</span>
				{{/if}}

				{{#if @value}}
					<span class="tag-label" data-qa="ulx-tag-label">{{@value}}</span>
				{{/if}}

				{{yield}}
			</span>
		{{/let}}
	</template>
}
