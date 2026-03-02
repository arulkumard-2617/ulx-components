import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";

/**
 * Icon element component. Three modes:
 * 1. **Symbol (default)** – @iconName points to an SVG symbol: <svg><use href="#id"></use></svg>
 * 2. **Font** – @iconName is the font-icon class: <i> with that class
 * 3. **Custom / inline** – <:icon> block: user pastes full SVG (or any markup). Use for one-off SVGs.
 *
 * ## WCAG
 * - **aria-hidden**: "true" by default (decorative). When @ariaLabel is passed, set to "false" so screen readers can focus and announce the icon (e.g. close icon in modals, slide panes).
 * - **aria-label**: Pass @ariaLabel to make the icon meaningful. The component then sets aria-hidden="false", aria-label, and role="img" so the icon is announced (e.g. `<UlxIcon @ariaLabel="Close" />`).
 * - **Suggestions**: (1) For pasted SVG in <:icon>, add `focusable="false"` on the <svg>. (2) When the icon is the only content of a button/link, the control must have an accessible name (e.g. aria-label on the button).
 *
 * Font CDN (include in app as needed):
 * - https://cdn.zicons.in/21598000000025464/latest/bs-icons1.css
 *
 * @class UlxIcon
 * @param {string} [iconName] - Symbol id or font class. Not used when <:icon> block is provided.
 * @param {string} [ariaLabel] - Accessible name for meaningful icons. When set, aria-hidden becomes "false" and role="img" is applied so screen readers announce it (e.g. close icon in modal).
 * @param {string} [size] - Size class (e.g. "s18", "m-size").
 * @param {string} [customClass] - Extra CSS classes.
 * @param {string} [componentClass="bs-icons1"] - Override base component class.
 * @param {'svg'|'font'} [type='svg'] - "svg" = symbol reference; "font" = font icon.
 */
export default class UlxIcon extends Component {
	get baseClass() {
		return this.args.componentClass ?? "bs-icons1";
	}

	get iconClasses() {
		const { iconName, type, size, customClass } = this.args;
		const parts = [this.baseClass];
		iconName && type === "font" && parts.push(iconName);
		size && parts.push(size);
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get useFontIcon() {
		return this.args.type === "font";
	}

	get hasAriaLabel() {
		return typeof this.args.ariaLabel === "string" && this.args.ariaLabel.length > 0;
	}

	<template>
		{{#if (has-block "icon")}}
			<span
				class={{this.iconClasses}}
				aria-hidden={{if this.hasAriaLabel "false" "true"}}
				role={{if this.hasAriaLabel "img"}}
				aria-label={{@ariaLabel}}
				...attributes
			>
				{{yield to="icon"}}
			</span>
		{{else if this.useFontIcon}}
			<i
				class={{this.iconClasses}}
				aria-hidden={{if this.hasAriaLabel "false" "true"}}
				role={{if this.hasAriaLabel "img"}}
				aria-label={{@ariaLabel}}
				...attributes
			></i>
		{{else}}
			<svg
				class={{this.iconClasses}}
				aria-hidden={{if this.hasAriaLabel "false" "true"}}
				role={{if this.hasAriaLabel "img"}}
				aria-label={{@ariaLabel}}
				focusable="false"
				...attributes
				xmlns="http://www.w3.org/2000/svg"
			>
				<use href="#{{@iconName}}"></use>
			</svg>
		{{/if}}
	</template>
}
