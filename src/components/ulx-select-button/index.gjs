import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { guidFor } from "@ember/object/internals";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import { or, not } from "ember-truth-helpers";
import { getComponentClass } from "../../utils/component-config";
import { joinClassNames } from "../../utils/class-names";
import { areOptionValuesEqual, isInvalidState } from "../../utils/input-util";
import { t } from "../../utils/i18n";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";

/**
 * SelectButton: choose one or more options from a list rendered as buttons.
 * Uses existing ULS select-button styles (sizes, variants, states).
 *
 * ## Sizes
 * xs-size, s-size (default), m-size, l-size, xl-size
 *
 * ## Visual variants
 * filled, text, raised, rounded
 *
 * ## Variant
 * primary (default), secondary, success, info, warning, help, danger
 *
 * ## WCAG
 * Container has role="group" and optional aria-label. Each button has role="button",
 * aria-pressed reflecting selection, and aria-label from option label for screen readers.
 * Keyboard: Tab to focus, Space toggles selection.
 *
 * @class UlxSelectButton
 * @param {Array} [options=[]] - List of options (objects or primitives). Use optionLabel/optionValue for object shape.
 * @param {*} [value] - Current selection. Single value or array when multiple is true.
 * @param {Function} [onChange] - Callback fired on selection change: (value, event) => void.
 * @param {string} [optionLabel='label'] - Property name for option display text.
 * @param {string} [optionValue='value'] - Property name for option value.
 * @param {string|Function} [optionDisabled] - Property name or function(option) => boolean to disable an option.
 * @param {boolean} [multiple=false] - Allow multiple selections; value must be an array.
 * @param {boolean} [disabled=false] - Disables the whole component.
 * @param {boolean} [invalid=false] - Invalid/error state for validation.
 * @param {boolean} [stretch=false] - Buttons stretch to fill width.
 * @param {boolean} [carousel=false] - When true, shows a fixed window of options with prev/next arrow controls.
 * @param {number} [visibleCount=4] - Carousel mode only. Maximum number of option buttons visible at once.
 * @param {number} [carouselOffset] - Carousel mode only. Controlled index of the first visible option.
 * @param {Function} [onCarouselOffsetChange] - Carousel mode only. Callback when the visible window shifts: (offset) => void.
 * @param {string} [prevIcon='left-arrow-icon'] - Carousel mode only. Icon name for the previous control.
 * @param {string} [nextIcon='right-arrow-icon'] - Carousel mode only. Icon name for the next control.
 * @param {string} [size='m-size'] - Size class: xs-size, s-size, m-size, l-size, xl-size.
 * @param {string} [variant='primary'] - Variant: primary, secondary, success, info, warning, help, danger.
 * @param {string} [styleVariant] - Visual style: filled, text, raised, rounded.
 * @param {string} [ariaLabel] - Accessible name for the group (recommended when no visible label).
 * @param {string} [customClass] - Additional CSS classes for the root.
 * @param {string} [dataQa] - Override for root element data-qa (default: "ulx-selectbutton").
 *
 * ## Named blocks
 * - `<:item as |option|>` — replaces the entire button content for every option.
 */
export default class UlxSelectButton extends Component {
	@tracked _internalCarouselOffset = 0;

	get baseClass() {
		return getComponentClass("selectbutton");
	}

	get buttonClass() {
		return getComponentClass("selectbutton-button");
	}

	get labelClass() {
		return getComponentClass("selectbutton-label");
	}

	get iconClass() {
		return getComponentClass("selectbutton-icon");
	}

	get carouselWrapperClass() {
		return getComponentClass("selectbutton-carousel");
	}

	get carouselNavClass() {
		return getComponentClass("selectbutton-nav");
	}

	get carouselTrackClass() {
		return getComponentClass("selectbutton-track");
	}

	get rootDataQa() {
		return this.args.dataQa ?? this.baseClass;
	}

	get carouselDataQa() {
		return `${this.rootDataQa}-carousel`;
	}

	get optionsList() {
		return Array.isArray(this.args.options) ? this.args.options : [];
	}

	get optionLabelKey() {
		return this.args.optionLabel ?? "label";
	}

	get optionValueKey() {
		return this.args.optionValue ?? "value";
	}

	get isMultiple() {
		return !!this.args.multiple;
	}

	get isDisabled() {
		return !!this.args.disabled;
	}

	get isInvalid() {
		return isInvalidState(this.args.invalid, this.args.error);
	}

	get isCarousel() {
		return !!this.args.carousel;
	}

	get visibleCount() {
		const count = this.args.visibleCount ?? 4;
		return Math.max(1, Math.floor(count));
	}

	get maxCarouselOffset() {
		return Math.max(0, this.optionsList.length - this.visibleCount);
	}

	get carouselOffset() {
		const { carouselOffset } = this.args;
		const base =
			carouselOffset !== undefined && carouselOffset !== null
				? carouselOffset
				: this._internalCarouselOffset;
		return this.clampCarouselOffset(base);
	}

	get canMoveBack() {
		return this.carouselOffset > 0;
	}

	get canMoveForward() {
		return this.carouselOffset < this.maxCarouselOffset;
	}

	get showCarouselNav() {
		return this.isCarousel && this.optionsList.length > this.visibleCount;
	}

	get renderedOptions() {
		if (!this.isCarousel) {
			return this.optionsList;
		}

		return this.optionsList.slice(this.carouselOffset, this.carouselOffset + this.visibleCount);
	}

	get prevIconName() {
		return this.args.prevIcon ?? "left-arrow-icon";
	}

	get nextIconName() {
		return this.args.nextIcon ?? "right-arrow-icon";
	}

	get rootClasses() {
		const {
			size = "m-size",
			variant = "primary",
			styleVariant,
			stretch = false,
			customClass
		} = this.args;

		const parts = [this.baseClass];
		parts.push(size);
		parts.push(variant);
		styleVariant && parts.push(styleVariant);
		this.isMultiple && parts.push("multiple");
		this.isCarousel && parts.push("carousel");
		this.isDisabled && parts.push("disabled");
		this.isInvalid && parts.push("invalid");
		stretch && parts.push("stretch");
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get carouselWrapperClasses() {
		const { stretch = false } = this.args;

		return joinClassNames(
			this.carouselWrapperClass,
			stretch && "stretch",
			this.isDisabled && "disabled"
		);
	}

	get carouselNavPrevClasses() {
		return joinClassNames(this.carouselNavClass, "prev");
	}

	get carouselNavNextClasses() {
		return joinClassNames(this.carouselNavClass, "next");
	}

	get carouselViewportStyle() {
		const optionCount = Math.max(this.optionsList.length, 1);

		return `--carousel-offset: ${this.carouselOffset}; --option-count: ${optionCount}; --visible-count: ${this.visibleCount};`;
	}

	get groupId() {
		return this.args.id ?? `${this.baseClass}-${guidFor(this)}`;
	}

	clampCarouselOffset(offset) {
		const safe = Number.isFinite(offset) ? Math.max(0, Math.floor(offset)) : 0;
		return Math.min(safe, this.maxCarouselOffset);
	}

	updateCarouselOffset(offset) {
		const clamped = this.clampCarouselOffset(offset);
		const { carouselOffset } = this.args;

		if (carouselOffset === undefined || carouselOffset === null) {
			this._internalCarouselOffset = clamped;
		}

		if (typeof this.args.onCarouselOffsetChange === "function") {
			this.args.onCarouselOffsetChange(clamped);
		}
	}

	ensureSelectionVisible(option) {
		if (!this.isCarousel) return;

		const optVal = this.getOptionValue(option);
		const idx = this.optionsList.findIndex((item) =>
			this.valuesEqual(this.getOptionValue(item), optVal)
		);

		if (idx < 0) return;

		const currentOffset = this.carouselOffset;
		const lastVisibleIndex = currentOffset + this.visibleCount - 1;
		let nextOffset = currentOffset;

		if (idx < currentOffset) {
			nextOffset = idx;
		} else if (idx >= currentOffset + this.visibleCount) {
			nextOffset = idx - this.visibleCount + 1;
		} else if (idx === lastVisibleIndex && currentOffset < this.maxCarouselOffset) {
			nextOffset = Math.min(idx, this.maxCarouselOffset);
		} else if (idx === currentOffset && currentOffset > 0) {
			nextOffset = Math.max(0, idx - this.visibleCount + 1);
		} else {
			return;
		}

		if (nextOffset !== currentOffset) {
			this.updateCarouselOffset(nextOffset);
		}
	}

	@action
	getResolved(option, key) {
		if (option == null) return undefined;
		const propertyPath = key ?? this.optionLabelKey;
		const pathSegments = propertyPath.split(".");
		let currentValue = option;
		for (const segment of pathSegments) {
			currentValue = currentValue?.[segment];
		}
		return currentValue;
	}

	@action
	getOptionLabel(option) {
		if (option == null) return "";
		if (typeof option === "object" && option !== null) {
			const label = this.getResolved(option, this.optionLabelKey);
			return label != null ? String(label) : "";
		}
		return String(option);
	}

	@action
	getOptionValue(option) {
		if (option == null) return undefined;
		if (typeof option === "object" && option !== null) {
			const val = this.getResolved(option, this.optionValueKey);
			return val !== undefined ? val : option;
		}
		return option;
	}

	@action
	isOptionDisabled(option) {
		if (option == null) return true;
		const { optionDisabled } = this.args;
		if (typeof optionDisabled === "function") return optionDisabled(option);
		if (typeof optionDisabled === "string") return !!this.getResolved(option, optionDisabled);
		return !!option?.disabled;
	}

	@action
	isOptionSelected(option) {
		const optVal = this.getOptionValue(option);
		const value = this.args.value;
		if (this.isMultiple && Array.isArray(value)) {
			return value.some((v) => this.valuesEqual(v, optVal));
		}
		return this.valuesEqual(value, optVal);
	}

	valuesEqual(a, b) {
		return areOptionValuesEqual(a, b);
	}

	@action
	getButtonClasses(option, index) {
		const parts = [this.buttonClass];
		const selected = this.isOptionSelected(option);
		const optionDisabled = this.isOptionDisabled(option);
		const total = this.isCarousel ? this.optionsList.length : this.renderedOptions.length;

		if (this.isCarousel) {
			const firstVisibleIndex = this.carouselOffset;
			const lastVisibleIndex = Math.min(this.carouselOffset + this.visibleCount - 1, total - 1);

			if (index === firstVisibleIndex) parts.push("first");
			if (index === lastVisibleIndex) parts.push("last");
			if (index !== firstVisibleIndex && index !== lastVisibleIndex) parts.push("middle");
		} else if (index === 0) {
			parts.push("first");
		} else if (index === total - 1) {
			parts.push("last");
		} else {
			parts.push("middle");
		}

		selected && parts.push("selected");
		optionDisabled && parts.push("disabled");
		option?.highlighted && parts.push("highlighted");

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	@action
	handleOptionClick(option, event) {
		if (this.isDisabled) {
			event.preventDefault();
			return;
		}
		if (this.isOptionDisabled(option)) {
			event.preventDefault();
			return;
		}

		const optVal = this.getOptionValue(option);
		const currentValue = this.args.value;
		let nextValue;

		if (this.isMultiple) {
			const arr = Array.isArray(currentValue) ? [...currentValue] : [];
			const idx = arr.findIndex((v) => this.valuesEqual(v, optVal));
			if (idx >= 0) {
				arr.splice(idx, 1);
			} else {
				arr.push(optVal);
			}
			nextValue = arr;
		} else {
			nextValue = this.isOptionSelected(option) ? currentValue : optVal;
		}

		if (typeof this.args.onChange === "function") {
			this.args.onChange(nextValue, event);
		}

		this.ensureSelectionVisible(option);
	}

	@action
	handleCarouselBack(event) {
		if (this.isDisabled || !this.canMoveBack) {
			event?.preventDefault();
			return;
		}

		this.updateCarouselOffset(this.carouselOffset - 1);
	}

	@action
	handleCarouselForward(event) {
		if (this.isDisabled || !this.canMoveForward) {
			event?.preventDefault();
			return;
		}

		this.updateCarouselOffset(this.carouselOffset + 1);
	}

	@action
	isButtonDisabled(option) {
		return this.isDisabled || this.isOptionDisabled(option);
	}

	@action
	getOptionIconComponentClass(option) {
		return option?.iconComponentClass ?? "bs-icons1";
	}

	@action
	handleKeyDown(option, event) {
		if (event.key !== " " && event.key !== "Enter") return;
		event.preventDefault();
		this.handleOptionClick(option, event);
	}

	<template>
		{{#if this.isCarousel}}
			<div class={{this.carouselWrapperClasses}} data-qa={{this.carouselDataQa}} ...attributes>
				{{#if this.showCarouselNav}}
					<UlxIconButton
						@text={{true}}
						@variant="basic"
						@size={{@size}}
						@iconLeft={{this.prevIconName}}
						@iconSize="s24"
						@customClass={{this.carouselNavPrevClasses}}
						@disabled={{or this.isDisabled (not this.canMoveBack)}}
						@onClick={{this.handleCarouselBack}}
						aria-label={{t "label.previous"}}
						data-qa="{{this.rootDataQa}}-prev"
					/>
				{{/if}}

				<div
					id={{this.groupId}}
					class={{this.rootClasses}}
					style={{this.carouselViewportStyle}}
					role="group"
					aria-label={{@ariaLabel}}
					data-qa={{this.rootDataQa}}
				>
					<div class={{this.carouselTrackClass}}>
						{{#each this.optionsList as |option index|}}
							<button
								type="button"
								class={{this.getButtonClasses option index}}
								role="button"
								aria-pressed="{{this.isOptionSelected option}}"
								aria-label={{this.getOptionLabel option}}
								disabled={{this.isButtonDisabled option}}
								tabindex={{if (this.isButtonDisabled option) "-1" "0"}}
								{{on "click" (fn this.handleOptionClick option)}}
								{{on "keydown" (fn this.handleKeyDown option)}}
							>
								{{#if (has-block "item")}}
									{{yield option to="item"}}
								{{else}}
									{{#if option.icon}}
										<span
											class="{{this.iconClass}}
												{{if (this.isOptionSelected option) 'selected'}}
												{{if (this.isOptionDisabled option) 'disabled'}}"
											aria-hidden="true"
										>
											<UlxIcon
												@iconName={{option.icon}}
												@type="font"
												@componentClass={{this.getOptionIconComponentClass option}}
												aria-hidden="true"
											/>
										</span>
									{{/if}}
									<span
										class="{{this.labelClass}}
											{{if (this.isOptionSelected option) 'selected'}}
											{{if (this.isOptionDisabled option) 'disabled'}}"
									>
										{{this.getOptionLabel option}}
									</span>
								{{/if}}
							</button>
						{{/each}}
					</div>
				</div>

				{{#if this.showCarouselNav}}
					<UlxIconButton
						@text={{true}}
						@variant="basic"
						@size={{@size}}
						@iconLeft={{this.nextIconName}}
						@iconSize="s24"
						@customClass={{this.carouselNavNextClasses}}
						@disabled={{or this.isDisabled (not this.canMoveForward)}}
						@onClick={{this.handleCarouselForward}}
						aria-label={{t "label.next"}}
						data-qa="{{this.rootDataQa}}-next"
					/>
				{{/if}}
			</div>
		{{else}}
			<div
				id={{this.groupId}}
				class={{this.rootClasses}}
				role="group"
				aria-label={{@ariaLabel}}
				data-qa={{this.rootDataQa}}
				...attributes
			>
				{{#each this.renderedOptions as |option index|}}
					<button
						type="button"
						class={{this.getButtonClasses option index}}
						role="button"
						aria-pressed="{{this.isOptionSelected option}}"
						aria-label={{this.getOptionLabel option}}
						disabled={{this.isButtonDisabled option}}
						tabindex={{if (this.isButtonDisabled option) "-1" "0"}}
						{{on "click" (fn this.handleOptionClick option)}}
						{{on "keydown" (fn this.handleKeyDown option)}}
					>
						{{#if (has-block "item")}}
							{{yield option to="item"}}
						{{else}}
							{{#if option.icon}}
								<span
									class="{{this.iconClass}}
										{{if (this.isOptionSelected option) 'selected'}}
										{{if (this.isOptionDisabled option) 'disabled'}}"
									aria-hidden="true"
								>
									<UlxIcon
										@iconName={{option.icon}}
										@type="font"
										@componentClass={{this.getOptionIconComponentClass option}}
										aria-hidden="true"
									/>
								</span>
							{{/if}}
							<span
								class="{{this.labelClass}}
									{{if (this.isOptionSelected option) 'selected'}}
									{{if (this.isOptionDisabled option) 'disabled'}}"
							>
								{{this.getOptionLabel option}}
							</span>
						{{/if}}
					</button>
				{{/each}}
			</div>
		{{/if}}
	</template>
}
