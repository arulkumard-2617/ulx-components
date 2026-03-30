import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../utils/component-config";
import { t } from "../../utils/i18n";
import UlxButton from "../ulx-button/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";

/**
 * Progress bar element. Uses existing classes from uls-v2 progress-bar.less. Determinate shows a fill
 * from 0–100%; indeterminate shows an animated sliding bar.
 *
 * ## Sizes (progress-bar.less)
 * - xxxs-size, xs-size, s-size, m-size, l-size, xl-size
 *
 * ## Variant (progress-bar.less)
 * - secondary, success, info, warning, danger
 *
 * ## With controls
 * When @showControls is true, renders decrease (-) and increase (+) buttons with the bar and a percentage label.
 * Parent must pass @value and @onChange for controlled usage.
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
 * @param {boolean} [showControls=false] - When true, render [ - ] [ bar ] [ + ] [ value% ] layout.
 * @param {function} [onChange] - Called when user clicks + or - with the new value. Required when showControls is true.
 * @param {number} [step=1] - Increment/decrement amount for controls.
 * @param {number} [min=0] - Minimum value when using controls.
 * @param {number} [max=100] - Maximum value when using controls.
 * @param {string} [size="xxxs-size"] - Size class (e.g. xxxs-size, xs-size, s-size, m-size).
 * @param {string} [iconSize] - Optional icon size for control buttons (e.g. s12). No default; only applied when provided.
 * @param {'secondary'|'success'|'info'|'warning'|'danger'} [variant] - Bar color variant.
 * @param {string} [customClass] - Additional CSS classes
 * @param {string} [componentClass] - Override base component class (default from getComponentClass('progressbar'))
 * @param {string} [dataQa] - Override for root element data-qa (default: "ulx-progressbar").
 * @block content - Optional. Yields value for custom label (e.g. "{{value}}%" or formatted text).
 */
export default class UlxProgressBar extends Component {
	get baseClass() {
		return this.args.componentClass ?? getComponentClass("progressbar");
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-progressbar";
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
		if (!Number.isFinite(v)) return 0;
		return Math.min(100, Math.max(0, v));
	}

	get currentValue() {
		const v = Number(this.args.value);
		return Number.isFinite(v) ? v : this.min;
	}

	get fillPercentForControls() {
		if (this.isIndeterminate || !this.showControls) return this.valuePercent;
		const range = this.max - this.min;
		if (range <= 0) return 0;
		const p = ((this.currentValue - this.min) / range) * 100;
		return Math.max(0, Math.min(100, p));
	}

	get valueStyleWithControls() {
		if (this.isIndeterminate) return undefined;
		return `width: ${this.controlsValuePercent}%`;
	}

	get controlsValuePercent() {
		if (this.isIndeterminate) return 0;
		return Math.round(this.fillPercentForControls);
	}

	get sizeClass() {
		return this.args.size ?? "xxxs-size";
	}

	get showValue() {
		return this.args.showValue !== false;
	}

	get valueVisibilityClass() {
		return this.showValue ? "show-value" : "hide-value";
	}

	get rootClasses() {
		const { variant, customClass } = this.args;
		const parts = [this.baseClass];
		this.isIndeterminate && parts.push("indeterminate");
		parts.push(this.valueVisibilityClass);
		this.sizeClass && parts.push(this.sizeClass);
		variant && parts.push(variant);
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get valueStyle() {
		if (this.isIndeterminate) return undefined;
		return `width: ${this.valuePercent}%`;
	}

	get ariaValueNow() {
		return this.isIndeterminate ? undefined : this.valuePercent;
	}

	get showControls() {
		return Boolean(this.args.showControls);
	}

	get step() {
		const step = Number(this.args.step);
		return Number.isFinite(step) && step > 0 ? step : 1;
	}

	get min() {
		const min = Number(this.args.min);
		return Number.isFinite(min) ? min : 0;
	}

	get max() {
		const max = Number(this.args.max);
		return Number.isFinite(max) ? max : 100;
	}

	get decreaseDisabled() {
		if (!this.showControls) return true;
		return this.currentValue <= this.min;
	}

	get increaseDisabled() {
		if (!this.showControls) return true;
		return this.currentValue >= this.max;
	}

	get barClassesWithControls() {
		const parts = this.rootClasses.split(" ");
		return parts.filter((c) => c !== "show-value" && c !== "hide-value").join(" ");
	}

	get withControlsWrapperClass() {
		return `${this.baseClass}-with-controls`;
	}

	get controlsIconSize() {
		return this.args.iconSize;
	}

	@action
	handleDecrease() {
		if (this.decreaseDisabled || typeof this.args.onChange !== "function") return;
		const next = Math.max(this.min, this.currentValue - this.step);
		this.args.onChange(next);
	}

	@action
	handleIncrease() {
		if (this.increaseDisabled || typeof this.args.onChange !== "function") return;
		const next = Math.min(this.max, this.currentValue + this.step);
		this.args.onChange(next);
	}

	@action
	handleBarClick(event) {
		if (!this.showControls || typeof this.args.onChange !== "function") return;
		const element = event.currentTarget;
		if (!element || typeof element.getBoundingClientRect !== "function") return;
		const rect = element.getBoundingClientRect();
		const clientX = typeof event.clientX === "number" ? event.clientX : rect.left + rect.width / 2;
		let ratio = (clientX - rect.left) / rect.width;
		ratio = Math.max(0, Math.min(1, ratio));
		let value = this.min + ratio * (this.max - this.min);
		value = Math.round(value);
		value = Math.max(this.min, Math.min(this.max, value));
		this.args.onChange(value);
	}

	<template>
		{{#if this.showControls}}
			<div class={{this.withControlsWrapperClass}} data-qa={{this.rootDataQa}}>
				<UlxIconButton
					@iconLeft="hr-tag-icon"
					@iconSize={{this.controlsIconSize}}
					@variant="outlined"
					@iconComponentClass="bs-icons1"
					@size="compact"
					@disabled={{this.decreaseDisabled}}
					@onClick={{this.handleDecrease}}
					aria-label={{t "lbl.progress.decrease"}}
				/>
				<div
					class={{this.barClassesWithControls}}
					role="progressbar"
					aria-valuenow={{this.currentValue}}
					aria-valuemin={{this.min}}
					aria-valuemax={{this.max}}
					{{on "click" this.handleBarClick}}
					...attributes
				>
					<div class="progressbar-value" style={{this.valueStyleWithControls}} aria-hidden="true">
						{{#if this.showValue}}
							{{#unless this.isIndeterminate}}
								{{#if (has-block "content")}}
									<div class="progressbar-label" aria-hidden="true">
										{{yield this.controlsValuePercent to="content"}}
									</div>
								{{else}}
									<div class="progressbar-label" aria-hidden="true">
										{{this.controlsValuePercent}}%
									</div>
								{{/if}}
							{{/unless}}
						{{/if}}
					</div>
				</div>
				<UlxIconButton
					@iconLeft="add-icon-01"
					@iconSize={{this.controlsIconSize}}
					@iconComponentClass="bs-icons1"
					@variant="outlined"
					@size="compact"
					@disabled={{this.increaseDisabled}}
					@onClick={{this.handleIncrease}}
					aria-label={{t "lbl.progress.increase"}}
				/>
			</div>
		{{else}}
			<div
				class={{this.rootClasses}}
				role="progressbar"
				aria-valuetext={{if this.isIndeterminate (t "lbl.loading")}}
				aria-valuenow={{this.ariaValueNow}}
				aria-valuemin={{if this.isIndeterminate undefined 0}}
				aria-valuemax={{if this.isIndeterminate undefined 100}}
				data-qa={{this.rootDataQa}}
				...attributes
			>
				<div class="progressbar-value" style={{this.valueStyle}} aria-hidden="true">
					{{#unless this.isIndeterminate}}
						{{#if (has-block "content")}}
							<div class="progressbar-label" aria-hidden="true">
								{{yield this.valuePercent to="content"}}
							</div>
						{{else}}
							<div class="progressbar-label" aria-hidden="true">
								{{this.valuePercent}}%
							</div>
						{{/if}}
					{{/unless}}
				</div>
			</div>
		{{/if}}
	</template>
}
