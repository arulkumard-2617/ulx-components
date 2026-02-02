import Component from "@glimmer/component";
import { getComponentClass, NAMESPACE } from "../../../utils/component-config";

const BAR_PREFIX = `${NAMESPACE}-progressbar`;

/**
 * Progress bar element (PrimeReact ProgressBar–style).
 * Uses existing classes from uls-v2 progress-bar.less. Determinate shows a fill
 * from 0–100%; indeterminate shows an animated sliding bar.
 *
 * ## Sizes (progress-bar.less)
 * - xs-size, s-size, m-size, l-size, xl-size
 *
 * ## Severity (progress-bar.less)
 * - secondary, success, info, warning, danger
 *
 * ## WCAG
 * - role="progressbar", aria-valuenow, aria-valuemin, aria-valuemax (determinate).
 * - Indeterminate: role="progressbar" with aria-valuetext="Loading" (no valuenow).
 * - Pass aria-label via ...attributes when needed.
 *
 * @class UlxProgressBar
 * @param {number} [value] - Progress 0–100. Omit or null for indeterminate.
 * @param {'determinate'|'indeterminate'} [mode] - Override: 'indeterminate' forces indeterminate; otherwise inferred from value.
 * @param {boolean} [showValue=true] - Show percentage label (determinate only). Use hide-value / show-value classes.
 * @param {'xs'|'s'|'m'|'l'|'xl'} [size] - Size class (xs/s/m/l/xl-size). Omit for default.
 * @param {'secondary'|'success'|'info'|'warning'|'danger'} [severity] - Bar color variant.
 * @param {string} [customClass] - Additional CSS classes
 * @param {string} [componentClass] - Override base component class (default from getComponentClass('progressbar'))
 * @block content - Optional. Yields value for custom label (e.g. "{{value}}%" or formatted text).
 */
export default class UlxProgressBar extends Component {
	get baseClass() {
		return this.args.componentClass ?? getComponentClass("progressbar");
	}

	get isIndeterminate() {
		const mode = this.args.mode;
		if (mode === "indeterminate") return true;
		if (mode === "determinate") return false;
		const v = this.args.value;
		return v == null || typeof v !== "number";
	}

	get valuePercent() {
		if (this.isIndeterminate) return 0;
		const v = Number(this.args.value);
		return Math.min(100, Math.max(0, isNaN(v) ? 0 : v));
	}

	get sizeClass() {
		const size = this.args.size;
		if (!size) return "";
		const map = { xs: "xs-size", s: "s-size", m: "m-size", l: "l-size", xl: "xl-size" };
		return map[size] ?? "";
	}

	get showValue() {
		return this.args.showValue !== false;
	}

	get valueVisibilityClass() {
		return this.showValue ? "show-value" : "hide-value";
	}

	get rootClasses() {
		const parts = [this.baseClass];
		if (this.isIndeterminate) parts.push("indeterminate");
		parts.push(this.valueVisibilityClass);
		if (this.sizeClass) parts.push(this.sizeClass);
		if (this.args.severity) parts.push(this.args.severity);
		if (this.args.customClass) parts.push(this.args.customClass);
		return parts.filter(Boolean).join(" ");
	}

	get valueStyle() {
		if (this.isIndeterminate) return undefined;
		return `width: ${this.valuePercent}%`;
	}

	get ariaValueText() {
		return this.isIndeterminate ? "Loading" : undefined;
	}

	get ariaValueNow() {
		return this.isIndeterminate ? undefined : this.valuePercent;
	}

	<template>
		<div
			class={{this.rootClasses}}
			role="progressbar"
			aria-valuetext={{this.ariaValueText}}
			aria-valuenow={{this.ariaValueNow}}
			aria-valuemin={{if this.isIndeterminate undefined 0}}
			aria-valuemax={{if this.isIndeterminate undefined 100}}
			...attributes
		>
			<div class="{{BAR_PREFIX}}-value" style={{this.valueStyle}} aria-hidden="true">
				{{#unless this.isIndeterminate}}
					<div class="{{BAR_PREFIX}}-label" aria-hidden="true">
						{{#if (has-block "content")}}
							{{yield this.valuePercent to="content"}}
						{{else}}
							{{this.valuePercent}}%
						{{/if}}
					</div>
				{{/unless}}
			</div>
		</div>
	</template>
}
