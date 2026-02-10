import Component from "@glimmer/component";
import { getComponentClass, NAMESPACE } from "../../../utils/component-config";

/**
 * Progress bar element. Uses existing classes from uls-v2 progress-bar.less. Determinate shows a fill
 * from 0–100%; indeterminate shows an animated sliding bar.
 *
 * ## Sizes (progress-bar.less)
 * - xs-size, s-size, m-size, l-size, xl-size
 *
 * ## Variant (progress-bar.less)
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
 * @param {string} [size] - Size class from parent (e.g. xs-size, s-size, m-size). Omit for default.
 * @param {'secondary'|'success'|'info'|'warning'|'danger'} [variant] - Bar color variant.
 * @param {string} [customClass] - Additional CSS classes
 * @param {string} [componentClass] - Override base component class (default from getComponentClass('progressbar'))
 * @block content - Optional. Yields value for custom label (e.g. "{{value}}%" or formatted text).
 */
export default class UlxProgressBar extends Component {
	get baseClass() {
		return this.args.componentClass ?? getComponentClass("progressbar");
	}

	get isIndeterminate() {
		const { mode, value } = this.args;
		if (mode === "indeterminate") return true;
		if (mode === "determinate") return false;
		return value == null || typeof value !== "number";
	}

	get valuePercent() {
		if (this.isIndeterminate) return 0;
		const v = Number(this.args.value);
		return Math.min(100, Math.max(0, isNaN(v) ? 0 : v));
	}

	get sizeClass() {
		return this.args.size || "s-size";
	}

	get showValue() {
		return this.args.showValue !== false;
	}

	get valueVisibilityClass() {
		return this.showValue ? "show-value" : "hide-value";
	}

	get rootClasses() {
		const { variant, severity, customClass } = this.args;
		const variantValue = variant || severity;
		const parts = [this.baseClass];
		if (this.isIndeterminate) parts.push("indeterminate");
		parts.push(this.valueVisibilityClass);
		if (this.sizeClass) parts.push(this.sizeClass);
		if (variantValue) parts.push(variantValue);
		if (customClass) parts.push(customClass);
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
			<div class="progressbar-value" style={{this.valueStyle}} aria-hidden="true">
				{{#unless this.isIndeterminate}}
					<div class="progressbar-label" aria-hidden="true">
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
