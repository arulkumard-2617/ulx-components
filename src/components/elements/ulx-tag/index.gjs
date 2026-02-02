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
 * PrimeReact reference: https://github.com/primefaces/primereact/tree/master/components/lib/tag
 *
 * ## Notes
 * - Uses existing ULX classes from `uls-v2` (`elements/tag.less`).
 * - `@invert` is an ULX extension that maps to the existing `.outlined` style.
 *
 * @class UlxTag
 * @param {string} [value] - Label text shown inside the tag.
 * @param {string} [variant] - Tag color variant class (e.g. "primary", "success", "light-salmon-red", "lt-green").
 * @param {boolean} [rounded=false] - Applies fully rounded tag styling.
 * @param {string} [icon] - Icon name passed to `UlxIcon` as `@iconName`. Renders before the label (PrimeReact order).
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
 */
export default class UlxTag extends Component {
	get baseClass() {
		return this.args.componentClass ?? getComponentClass("tag");
	}

	get typeClass() {
		return normalizeTypeClass(this.args.type);
	}

	get rootClasses() {
		const parts = [this.baseClass];

		if (this.args.variant) parts.push(this.args.variant);
		if (this.args.size) parts.push(this.args.size);
		if (this.typeClass) parts.push(this.typeClass);
		// ULX styles: `.icon-right` on root flips layout (row-reverse)
		if (this.args.iconPosition === "right") parts.push("icon-right");
		if (this.args.rounded) parts.push("rounded");
		if (this.args.invert) parts.push("outlined");
		if (this.args.disabled) parts.push("disabled");
		if (this.args.customClass) parts.push(this.args.customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get iconWrapperClass() {
		const position = this.args.iconPosition === "right" ? "right" : "left";
		const parts = ["tag-icon", position];
		if (this.args.disabled) parts.push("disabled");
		return parts.join(" ");
	}

	<template>
		{{#let (has-block "icon") (has-block) as |hasIconBlock hasDefaultBlock|}}
			<span
				class={{buildRootClass this.rootClasses @icon hasIconBlock hasDefaultBlock}}
				aria-disabled={{if @disabled "true"}}
				...attributes
			>
				{{#if hasIconBlock}}
					<span class={{this.iconWrapperClass}}>
						{{yield to="icon"}}
					</span>
				{{else if @icon}}
					<span class={{this.iconWrapperClass}}>
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
					{{! Match PrimeReact: value is a sibling element. }}
					<span class="tag-label">{{@value}}</span>
				{{/if}}

				{{! Match PrimeReact: children render after value. }}
				{{yield}}
			</span>
		{{/let}}
	</template>
}
