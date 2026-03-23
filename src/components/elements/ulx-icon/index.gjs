import Component from "@glimmer/component";

import { getComponentClass } from "../../../utils/component-config";

/**
 * Icon element component. Three modes:
 * 1. **Symbol (default)** – @iconName points to an SVG symbol: <svg><use href="#id"></use></svg>
 * 2. **Font** – @iconName is the font-icon class: <i> with that class
 * 3. **Custom / inline** – default block: paste full SVG (or any markup) inside `<UlxIcon>…</UlxIcon>`.
 *
 * ## WCAG
 * - **aria-hidden**: "true" by default (decorative). When @ariaLabel is passed, set to "false" so screen readers can focus and announce the icon (e.g. close icon in modals, slide panes).
 * - **aria-label**: Pass @ariaLabel to make the icon meaningful. The component then sets aria-hidden="false", aria-label, and role="img" so the icon is announced (e.g. `<UlxIcon @ariaLabel="Close" />`).
 * - **Suggestions**: (1) For pasted SVG in the default block, add `focusable="false"` on the <svg>. (2) When the icon is the only content of a button/link, the control must have an accessible name (e.g. aria-label on the button).
 *
 * Font CDN (include in app as needed):
 * - https://cdn.zicons.in/21598000000025464/latest/bs-icons1.css
 *
 * @class UlxIcon
 * @param {string} [iconName] - Symbol id or font class. Not used when a custom block is provided.
 * @param {string} [ariaLabel] - Accessible name for meaningful icons. When set, aria-hidden becomes "false" and role="img" is applied so screen readers announce it (e.g. close icon in modal).
 * @param {string} [size] - Size class (e.g. "s18", "m-size").
 * @param {string} [customClass] - Extra CSS classes.
 * @param {string} [componentClass] - Additional class for icon styling (e.g. "bs-icons1" for font icons).
 * @param {'svg'|'font'} [type='svg'] - "svg" = symbol reference; "font" = font icon.
 * @param {string} [dataQa="ulx-icon"] - Root test selector override.
 */
export default class UlxIcon extends Component {
	get baseClass() {
		return getComponentClass("icon");
	}

	get rootDataQa() {
		const { dataQa } = this.args;
		return dataQa ?? "ulx-icon";
	}

	get resolvedAriaLabel() {
		const { ariaLabel } = this.args;
		return typeof ariaLabel === "string" ? ariaLabel.trim() : "";
	}

	get iconClasses() {
		const { iconName, type = "svg", size, customClass, componentClass = "bs-icons1" } = this.args;

		const parts = [];
		componentClass && parts.push(componentClass);
		iconName && type === "font" && parts.push(iconName);
		size && parts.push(size);
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get useFontIcon() {
		const { type = "svg" } = this.args;
		return type === "font";
	}

	get hasAriaLabel() {
		return this.resolvedAriaLabel.length > 0;
	}

	get symbolHref() {
		const { iconName } = this.args;
		return iconName ? `#${iconName}` : null;
	}

	<template>
		{{#if (has-block)}}
			<span
				class={{this.iconClasses}}
				data-qa={{this.rootDataQa}}
				aria-hidden={{if this.hasAriaLabel "false" "true"}}
				role={{if this.hasAriaLabel "img"}}
				aria-label={{this.resolvedAriaLabel}}
				...attributes
			>
				{{yield}}
			</span>
		{{else if this.useFontIcon}}
			<i
				class={{this.iconClasses}}
				data-qa={{this.rootDataQa}}
				aria-hidden={{if this.hasAriaLabel "false" "true"}}
				role={{if this.hasAriaLabel "img"}}
				aria-label={{this.resolvedAriaLabel}}
				...attributes
			></i>
		{{else}}
			<svg
				class={{this.iconClasses}}
				data-qa={{this.rootDataQa}}
				aria-hidden={{if this.hasAriaLabel "false" "true"}}
				role={{if this.hasAriaLabel "img"}}
				aria-label={{this.resolvedAriaLabel}}
				focusable="false"
				...attributes
				xmlns="http://www.w3.org/2000/svg"
			>
				{{#if this.symbolHref}}
					<use href={{this.symbolHref}}></use>
				{{/if}}
			</svg>
		{{/if}}
	</template>
}
