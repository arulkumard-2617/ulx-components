import Component from "@glimmer/component";
import or from "ember-truth-helpers/helpers/or";
import { getComponentClass } from "../../utils/component-config";

/**
 * Card container built on top of existing ULS_V2.0 card.less styles.
 * Supports header, title, subtitle, content, and footer, plus visual
 * variants like outlined / elevated / flat / gradient and tone variants like primary,
 * success, warning, danger, info, and contrast.
 *
 * ## Structure (card.less)
 * - Root: ulx-card
 * - Sections: ulx-card-header, ulx-card-title, ulx-card-subtitle,
 *   ulx-card-content, ulx-card-footer
 *
 * ## Appearance
 * - @appearance: "outlined" (default), "elevated", "flat", "gradient"
 * - @variant: "primary", "secondary", "success", "warning", "danger",
 *   "info", "contrast"
 * - @size: "xs-size", "s-size", "m-size" (default), "l-size", "xl-size"
 * - @density: "compact" | "spacious"
 * - @rounded / @square: booleans that add "rounded" or "square"
 * - @interactive / @clickable / @hoverable: booleans to add interactive
 *   classes for hover / focus styles.
 *
 * @class UlxCard
 * @param {string} [title] - Card title text; rendered in the header section.
 * @param {string} [subTitle] - Optional subtitle text under the title.
 * @param {unknown} [header] - Optional header content; when provided, rendered inside header section.
 * @param {unknown} [footer] - Optional footer content; rendered inside footer section.
 * @param {'outlined'|'elevated'|'flat'|'gradient'} [appearance='outlined'] - Visual style variant from card.less.
 * @param {'primary'|'secondary'|'success'|'warning'|'danger'|'info'|'contrast'} [variant] - Tone variant for outlined cards.
 * @param {'xs-size'|'s-size'|'m-size'|'l-size'|'xl-size'} [size='m-size'] - Size modifier from card.less.
 * @param {'compact'|'spacious'} [density] - Content density modifier.
 * @param {boolean} [rounded] - When true, adds "rounded" class.
 * @param {boolean} [square] - When true, adds "square" class (overrides rounded).
 * @param {boolean} [interactive] - When true, adds "interactive" class.
 * @param {boolean} [clickable] - Alias for interactive; also adds "interactive".
 * @param {boolean} [hoverable] - When true, adds "hoverable" class.
 * @param {string} [customClass] - Extra classes applied to the root.
 * @param {string} [contentClass] - Extra classes applied to the content region.
 * @param {string} [footerClass] - Extra classes applied to the footer region.
 * @param {string} [componentClass] - Override base component class; defaults to getComponentClass('card').
 * @param {string} [dataQa='ulx-card'] - Root data-qa identifier; internal element identifiers are derived from this value.
 * @block default - Main card content.
 * @block header - Optional custom header block; receives no args.
 * @block content - Optional custom content block; receives no args.
 * @block footer - Optional custom footer block; receives no args.
 */
export default class UlxCard extends Component {
	get baseClass() {
		return this.args.componentClass ?? getComponentClass("card");
	}

	get sizeClass() {
		return this.args.size ?? "m-size";
	}

	get appearanceClass() {
		const appearance = this.args.appearance ?? "outlined";
		return appearance;
	}

	get toneClass() {
		return this.args.variant;
	}

	get densityClass() {
		return this.args.density;
	}

	get shapeClass() {
		const { square = false, rounded = false } = this.args;
		if (square) {
			return "square";
		}
		if (rounded) {
			return "rounded";
		}
		return undefined;
	}

	get interactionClasses() {
		const { interactive = false, clickable = false, hoverable = false } = this.args;
		const classes = [];

		(interactive || clickable) && classes.push("interactive");
		hoverable && classes.push("hoverable");

		return classes;
	}

	get rootClasses() {
		const { customClass } = this.args;
		const parts = [this.baseClass];

		this.appearanceClass && parts.push(this.appearanceClass);
		this.sizeClass && parts.push(this.sizeClass);
		this.densityClass && parts.push(this.densityClass);
		this.shapeClass && parts.push(this.shapeClass);
		this.toneClass && parts.push(this.toneClass);

		parts.push(...this.interactionClasses);

		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-card";
	}

	get headerClass() {
		return `${this.baseClass}-header`;
	}

	get titleClass() {
		return `${this.baseClass}-title`;
	}

	get subTitleClass() {
		return `${this.baseClass}-subtitle`;
	}

	get contentClass() {
		const baseContentClassName = `${this.baseClass}-content`;
		const customContentClassName = this.args.contentClass;
		return customContentClassName
			? `${baseContentClassName} ${customContentClassName}`
			: baseContentClassName;
	}

	get footerClass() {
		const baseFooterClassName = `${this.baseClass}-footer`;
		const customFooterClassName = this.args.footerClass;
		return customFooterClassName
			? `${baseFooterClassName} ${customFooterClassName}`
			: baseFooterClassName;
	}

	<template>
		<div class={{this.rootClasses}} data-qa={{this.rootDataQa}} ...attributes>
			{{#if (or (has-block "header") @header)}}
				<div class={{this.headerClass}}>
					{{#if (has-block "header")}}
						{{yield to="header"}}
					{{else if @header}}
						{{@header}}
					{{/if}}
				</div>
			{{else if (or @title @subTitle)}}
				<div class={{this.headerClass}}>
					{{#if @title}}
						<div class={{this.titleClass}}>{{@title}}</div>
					{{/if}}
					{{#if @subTitle}}
						<p class={{this.subTitleClass}}>{{@subTitle}}</p>
					{{/if}}
				</div>
			{{/if}}

			{{#if (or (has-block) (has-block "content"))}}
				<div class={{this.contentClass}}>
					{{#if (has-block "content")}}
						{{yield to="content"}}
					{{else}}
						{{yield}}
					{{/if}}
				</div>
			{{/if}}

			{{#if (or (has-block "footer") @footer)}}
				<div class={{this.footerClass}}>
					{{#if (has-block "footer")}}
						{{yield to="footer"}}
					{{else if @footer}}
						{{@footer}}
					{{/if}}
				</div>
			{{/if}}
		</div>
	</template>
}
