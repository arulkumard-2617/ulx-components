import Component from "@glimmer/component";
import { action } from "@ember/object";
import { guidFor } from "@ember/object/internals";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../../utils/component-config";
import { isInvalidState } from "../../../utils/input-util";
import UlxIcon from "../ulx-icon/index.gjs";

/**
 * SelectButton: choose one or more options from a list rendered as buttons.
 * Uses existing ULS select-button styles (sizes, variants, severity, states).
 *
 * ## Sizes
 * xs-size, s-size (default), m-size, l-size, xl-size
 *
 * ## Visual variants
 * filled, text, raised, rounded
 *
 * ## Variant (severity)
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
 * @param {string} [size='s-size'] - Size class: xs-size, s-size, m-size, l-size, xl-size.
 * @param {string} [variant='primary'] - Severity variant: primary, secondary, success, info, warning, help, danger.
 * @param {string} [styleVariant] - Visual style: filled, text, raised, rounded.
 * @param {string} [ariaLabel] - Accessible name for the group (recommended when no visible label).
 * @param {string} [customClass] - Additional CSS classes for the root.
 */
export default class UlxSelectButton extends Component {
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

	get rootClasses() {
		const {
			size = "s-size",
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
		this.isDisabled && parts.push("disabled");
		this.isInvalid && parts.push("invalid");
		stretch && parts.push("stretch");
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get groupId() {
		return this.args.id ?? `ulx-selectbutton-${guidFor(this)}`;
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
		if (a === b) return true;
		if (a == null || b == null) return false;
		if (typeof a === "object" && typeof b === "object") {
			return JSON.stringify(a) === JSON.stringify(b);
		}
		return String(a) === String(b);
	}

	@action
	getButtonClasses(option, index) {
		const parts = [this.buttonClass];
		const selected = this.isOptionSelected(option);
		const optionDisabled = this.isOptionDisabled(option);
		const total = this.optionsList.length;

		if (index === 0) parts.push("first");
		else if (index === total - 1) parts.push("last");
		else parts.push("middle");

		selected && parts.push("selected");
		optionDisabled && parts.push("disabled");

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
		<div
			id={{this.groupId}}
			class={{this.rootClasses}}
			role="group"
			aria-label={{@ariaLabel}}
			...attributes
		>
			{{#each this.optionsList as |option index|}}
				<button
					type="button"
					class={{this.getButtonClasses option index}}
					role="button"
					aria-pressed={{this.isOptionSelected option}}
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
	</template>
}
