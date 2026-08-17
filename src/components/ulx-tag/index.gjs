import Component from "@glimmer/component";
import { action } from "@ember/object";
import { getComponentClass } from "../../utils/component-config";
import { joinClassNames } from "../../utils/class-names";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";
import UlxIcon from "../ulx-icon/index.gjs";

/** Maps layout modifiers onto the root class string from `rootClasses` (icon slot vs text-only, optional template block). */
function buildSurfaceClass(rootClasses, icon, hasIconBlock, hasDefaultBlock) {
	const hasIcon = Boolean(icon) || Boolean(hasIconBlock);
	return joinClassNames(
		rootClasses,
		hasIcon ? "with-icon" : "",
		hasDefaultBlock && "with-template"
	);
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
 * @param {string} [dataQa] - Optional override for root `data-qa` (default `ulx-tag`).
 */
export default class UlxTag extends Component {
	get baseClass() {
		return this.args.componentClass ?? getComponentClass("tag");
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "tag");
	}

	@action
	getDataQa(part) {
		return buildDataQa(this.rootDataQa, part);
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

		variant && parts.push(variant);
		size && parts.push(size);
		this.typeClass && parts.push(this.typeClass);

		/* `.icon-right` on root flips flex direction for `@iconPosition="right"`. */
		iconPosition === "right" && parts.push("icon-right");

		rounded && parts.push("rounded");
		invert && parts.push("outlined");
		disabled && parts.push("disabled");
		customClass && parts.push(customClass);

		return joinClassNames(...parts);
	}

	get iconWrapperClass() {
		const { iconPosition = "left", disabled = false } = this.args;
		const position = iconPosition === "right" ? "right" : "left";
		const parts = ["tag-icon", position];
		disabled && parts.push("disabled");
		return joinClassNames(...parts);
	}

	<template>
		{{#let (has-block "icon") (has-block) as |hasIconBlock hasDefaultBlock|}}
			<span
				class={{buildSurfaceClass this.rootClasses @icon hasIconBlock hasDefaultBlock}}
				aria-disabled={{if @disabled "true"}}
				data-qa={{this.rootDataQa}}
				...attributes
			>
				{{#if hasIconBlock}}
					<span class={{this.iconWrapperClass}} data-qa={{this.getDataQa "icon"}}>
						{{yield to="icon"}}
					</span>
				{{else if @icon}}
					<span class={{this.iconWrapperClass}} data-qa={{this.getDataQa "icon"}}>
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
					<span class="tag-label" data-qa={{this.getDataQa "label"}}>{{@value}}</span>
				{{/if}}

				{{yield}}
			</span>
		{{/let}}
	</template>
}
