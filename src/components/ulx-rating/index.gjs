import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../utils/component-config";
import { t } from "../../utils/i18n";
import { eq, lte, not } from "ember-truth-helpers";
import { fn } from "@ember/helper";
import UlxIcon from "../ulx-icon/index.gjs";

/**
 * Star-based rating input. Controlled via @value and @onChange.
 * Uses existing rating.less classes (ulx-rating, ulx-rating-icon, onicon, cancelicon).
 *
 * ## WCAG
 * - role="radiogroup" with aria-label; each star is role="radio" with aria-checked.
 * - Keyboard: Tab to focus, Left/Right to change, Space to set value.
 *
 * @class UlxRating
 * @param {number} [value=0] - Current rating (0 to stars).
 * @param {Function} [onChange] - Called with new value: (value) => void.
 * @param {number} [stars=5] - Number of stars to display.
 * @param {boolean} [cancel=true] - Whether to show the cancel (reset) icon.
 * @param {boolean} [readOnly=false] - When true, value cannot be changed.
 * @param {boolean} [disabled=false] - Disables interaction.
 * @param {string} [size="xxs-size"] - Size: xxxs-size, xxs-size, xs-size, s-size, m-size, l-size, xl-size.
 * @param {string} [variant] - Optional: "filled" or "elevated".
 * @param {string} [customClass] - Extra CSS classes on root.
 * @param {string} [ariaLabel] - Accessible name for the rating group (default from i18n).
 * @param {string} [dataQa] - Override for root element data-qa (default: "ulx-rating").
 */
export default class UlxRating extends Component {
	get baseClass() {
		return getComponentClass("rating");
	}

	get rootDataQa() {
		return this.args.dataQa ?? this.baseClass;
	}

	get iconClass() {
		return "rating-icon";
	}

	get rootClasses() {
		const {
			size = "xxs-size",
			variant,
			disabled = false,
			readOnly = false,
			customClass
		} = this.args;

		const parts = [this.baseClass];
		parts.push(size);
		variant && parts.push(variant);
		disabled && parts.push("disabled");
		readOnly && parts.push("readonly");
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get starsCount() {
		const { stars = 5 } = this.args;
		return Math.max(1, Math.min(Number(stars) || 5, 100));
	}

	get currentValue() {
		const v = Number(this.args.value);
		if (Number.isNaN(v) || v < 0) return 0;
		return Math.min(v, this.starsCount);
	}

	get isInteractive() {
		const { disabled = false, readOnly = false } = this.args;
		return !disabled && !readOnly;
	}

	get showCancel() {
		return this.args.cancel !== false && this.isInteractive;
	}

	get ariaLabelText() {
		return this.args.ariaLabel ?? t("lbl.rating");
	}

	get starIndices() {
		return Array.from({ length: this.starsCount }, (_, i) => i + 1);
	}

	@action
	setValue(newValue) {
		if (!this.isInteractive) return;
		const { onChange } = this.args;
		const clamped = Math.max(0, Math.min(Number(newValue), this.starsCount));
		onChange?.(clamped);
	}

	@action
	handleStarClick(value) {
		this.setValue(value);
	}

	@action
	handleCancelClick() {
		this.setValue(0);
	}

	@action
	handleKeydown(type, value, event) {
		if (!this.isInteractive) return;
		const { key, code } = event;
		if (type === "star") {
			if (key === "ArrowRight" || key === "ArrowDown") {
				event.preventDefault();
				const newVal = Math.min(value + 1, this.starsCount);
				this.setValue(newVal);
				this.focusStarByValue(event.currentTarget, newVal);
			} else if (key === "ArrowLeft" || key === "ArrowUp") {
				event.preventDefault();
				const newVal = Math.max(value - 1, 0);
				this.setValue(newVal);
				this.focusStarByValue(event.currentTarget, newVal === 0 ? 1 : newVal);
			} else if (key === " " || key === "Enter" || code === "NumpadEnter" || code === "Space") {
				event.preventDefault();
				this.setValue(value);
			}
		} else if (
			type === "cancel" &&
			(key === " " || key === "Enter" || code === "NumpadEnter" || code === "Space")
		) {
			event.preventDefault();
			this.setValue(0);
		}
	}

	@action
	focusStarByValue(fromElement, starValue) {
		const root = fromElement?.closest?.('[role="radiogroup"]');
		const star = root?.querySelector?.(`[aria-posinset="${starValue}"]`);
		star?.focus?.();
	}

	<template>
		<div
			class={{this.rootClasses}}
			role="radiogroup"
			aria-label={{this.ariaLabelText}}
			data-qa={{this.rootDataQa}}
			...attributes
		>
			{{#if this.showCancel}}
				{{#if (has-block "cancelIcon")}}
					<span
						role="button"
						tabindex="0"
						class="{{this.iconClass}} cancelicon"
						aria-label={{t "lbl.rating.cancel"}}
						data-qa="ulx-rating-cancel"
						{{on "click" this.handleCancelClick}}
						{{on "keydown" (fn this.handleKeydown "cancel" 0)}}
					>
						{{yield to="cancelIcon"}}
					</span>
				{{else}}
					<UlxIcon
						@type="font"
						@iconName="taken-icon"
						@componentClass="bs-icons1"
						@customClass="{{this.iconClass}} cancelicon"
						role="button"
						tabindex="0"
						aria-label={{t "lbl.rating.cancel"}}
						data-qa="ulx-rating-cancel"
						{{on "click" this.handleCancelClick}}
						{{on "keydown" (fn this.handleKeydown "cancel" 0)}}
					/>
				{{/if}}
			{{/if}}
			{{#each this.starIndices as |starValue|}}
				{{#if (has-block "onIcon")}}
					<span
						class="{{this.iconClass}} {{if (lte starValue this.currentValue) 'onicon' ''}}"
						role="radio"
						aria-checked={{eq starValue this.currentValue}}
						aria-posinset={{starValue}}
						aria-setsize={{this.starsCount}}
						aria-disabled={{not this.isInteractive}}
						tabindex="0"
						data-qa="ulx-rating-star"
						{{on "click" (fn this.handleStarClick starValue)}}
						{{on "keydown" (fn this.handleKeydown "star" starValue)}}
					>
						{{#if (lte starValue this.currentValue)}}
							{{yield to="onIcon"}}
						{{else}}
							{{yield to="offIcon"}}
						{{/if}}
					</span>
				{{else}}
					<UlxIcon
						@type="font"
						@iconName={{if
							(lte starValue this.currentValue)
							"ls-star-filled-icon"
							"ls-star-stroke-icon"
						}}
						@componentClass="bs-icons1"
						@customClass="{{this.iconClass}} {{if (lte starValue this.currentValue) 'onicon' ''}}"
						role="radio"
						aria-checked={{eq starValue this.currentValue}}
						aria-posinset={{starValue}}
						aria-setsize={{this.starsCount}}
						aria-disabled={{not this.isInteractive}}
						tabindex="0"
						data-qa="ulx-rating-star"
						{{on "click" (fn this.handleStarClick starValue)}}
						{{on "keydown" (fn this.handleKeydown "star" starValue)}}
					/>
				{{/if}}
			{{/each}}
		</div>
	</template>
}
