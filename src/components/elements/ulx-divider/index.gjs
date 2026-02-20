import Component from "@glimmer/component";
import { action } from "@ember/object";
import { getComponentClass } from "../../../utils/component-config";

function normalizeLayout(layout) {
	return layout === "vertical" ? "vertical" : "horizontal";
}

function normalizeType(type) {
	if (type === "dashed" || type === "dotted") return type;
	return "solid";
}

function normalizeAlign(layout, align) {
	if (layout === "vertical") {
		if (align === "top" || align === "bottom") return align;
		// ULS uses align-middle as the vertical default.
		return "middle";
	}

	if (align === "right" || align === "center") return align;
	// Horizontal default.
	return "left";
}

function buildRootClass(baseClasses, hasContent) {
	return `${baseClasses} ${hasContent ? "with-content" : "without-content"}`.trim();
}

/**
 * Divider element component (ULX).
 *
 * @class UlxDivider
 * @param {'horizontal'|'vertical'} [layout='horizontal'] - Divider layout (affects orientation + base class).
 * @param {'left'|'center'|'right'|'top'|'bottom'|null} [align=null] - Content alignment. When omitted, align classes are only applied when content is present.
 * @param {'solid'|'dashed'|'dotted'} [type='solid'] - Divider line style.
 *
 * @param {string} [size='s-size'] - ULS size class: xs-size | s-size | m-size | l-size | xl-size.
 * @param {string} [thickness] - ULS thickness class: size-2 | size-3.
 * @param {string} [variant] - ULS color/variant class: primary | dark | secondary.
 *
 * @param {string} [customClass] - Extra CSS classes appended to the root.
 * @param {string} [componentClass] - Override base component class (rare; defaults to `getComponentClass('divider')` or `getComponentClass('vtl-divider')`).
 *
 * @block default - Optional content rendered inside the divider content slot.
 */
export default class UlxDivider extends Component {
	get layout() {
		return normalizeLayout(this.args.layout);
	}

	get ariaOrientation() {
		return this.layout;
	}

	get baseClass() {
		if (this.args.componentClass) return this.args.componentClass;
		return this.layout === "vertical"
			? getComponentClass("vtl-divider")
			: getComponentClass("divider");
	}

	get contentClass() {
		return getComponentClass("divider-content");
	}

	get baseRootClasses() {
		const {
			type = "solid",
			size = "s-size",
			thickness,
			variant,
			customClass
		} = this.args;

		const parts = [this.baseClass];

		// Layout
		this.layout === "horizontal" && parts.push("horizontal");

		// Size / thickness
		size && parts.push(size);
		thickness && parts.push(thickness);

		// Type
		parts.push(normalizeType(type));

		// Color / variant
		variant && parts.push(variant);

		// Custom classes
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	@action
	getRootClasses(hasContent) {
		const { align = null } = this.args;
		const parts = [this.baseRootClasses];

		// Only apply align classes when explicitly provided OR when content exists.
		if (align != null || hasContent) {
			const normalizedAlign = normalizeAlign(this.layout, align);
			parts.push(`align-${normalizedAlign}`);
		}

		return [...new Set(parts.filter(Boolean).join(" ").split(/\s+/).filter(Boolean))].join(" ");
	}

	<template>
		{{#let (has-block) as |hasContent|}}
			<div
				class={{buildRootClass (this.getRootClasses hasContent) hasContent}}
				role="separator"
				aria-orientation={{this.ariaOrientation}}
				...attributes
			>
				<div class={{this.contentClass}}>
					{{yield}}
				</div>
			</div>
		{{/let}}
	</template>
}

