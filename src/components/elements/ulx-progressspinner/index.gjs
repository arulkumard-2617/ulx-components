import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";

/**
 * Progress spinner element component (PrimeReact ProgressSpinner–style).
 * Renders an infinite circular spinner using uls-v2 progress-spinner.less classes.
 * Use standalone for loading states (e.g. page or section) or inside UlxButton when @loading.
 *
 * ## Sizes (uls-v2 progress-spinner.less)
 * - xs-size, s-size, m-size, l-size, xl-size
 *
 * ## WCAG
 * - When used as the only loading indicator in a region, pass aria-label (e.g. "Loading") via ...attributes.
 * - When decorative (e.g. inside a button that already has aria-busy), use aria-hidden="true".
 *
 * @class UlxProgressSpinner
 * @param {'xs'|'s'|'m'|'l'|'xl'} [size] - Size class (xs/s/m/l/xl-size). Omit for default.
 * @param {string} [color] - Stroke color (any valid CSS color). Sets uls-v2 progressspinner CSS variables so the spinner uses this color; omit for theme default.
 * @param {string} [customClass] - Additional CSS classes
 * @param {string} [componentClass] - Override base component class (default: ulx-progressspinner)
 * @param {string} [ariaLabel] - Accessible name when spinner is the main loading indicator (e.g. "Loading")
 */
export default class UlxProgressSpinner extends Component {
	get baseClass() {
		return this.args.componentClass ?? getComponentClass("progressspinner");
	}

	get sizeClass() {
		const size = this.args.size;
		if (!size) return "";
		const map = { xs: "xs-size", s: "s-size", m: "m-size", l: "l-size", xl: "xl-size" };
		return map[size] ?? "";
	}

	get spinnerClasses() {
		const parts = [this.baseClass];
		if (this.sizeClass) parts.push(this.sizeClass);
		if (this.args.customClass) parts.push(this.args.customClass);
		return parts.filter(Boolean).join(" ");
	}

	get spinnerStyle() {
		const color = this.args.color;
		if (!color) return undefined;
		const v = "ulx-progressspinner";
		return `--${v}-color: ${color}; --${v}-color1: ${color}; --${v}-color2: ${color}; --${v}-color3: ${color}; --${v}-color4: ${color}`;
	}

	<template>
		<span
			class={{this.spinnerClasses}}
			role="progressbar"
			aria-label={{@ariaLabel}}
			style={{this.spinnerStyle}}
			...attributes
		>
			<svg class="{{this.baseClass}}-svg" viewBox="0 0 100 100" focusable="false">
				<circle class="{{this.baseClass}}-circle" cx="50" cy="50" r="32" />
			</svg>
		</span>
	</template>
}
