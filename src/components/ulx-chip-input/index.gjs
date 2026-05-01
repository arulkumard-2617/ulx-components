import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { fn } from "@ember/helper";
import { getComponentClass } from "../../utils/component-config";
import UlxIcon from "../ulx-icon/index.gjs";

/**
 * Chip-based tag entry input. Users type a value and press Enter (or a custom
 * separator key) to add it as a chip. Chips can be removed individually.
 *
 * ## WCAG
 * - The inner text field has `aria-label` describing the entry purpose.
 * - Each remove button has an accessible label announcing which chip is removed.
 * - Keyboard: Enter/separator adds chip; Backspace on empty field removes the last chip.
 *
 * @class UlxChipInput
 * @param {string[]} [chips=[]] - Controlled list of current chip values.
 * @param {Function} [onChipsChange] - Called with the updated chips array when chips are added or removed.
 * @param {string} [placeholder] - Placeholder text for the text field.
 * @param {string} [separator="Enter"] - Key that commits the typed value as a chip (e.g. "Enter", ",").
 * @param {boolean} [allowDuplicates=false] - When false, duplicate values are silently ignored.
 * @param {number} [max] - Maximum number of chips allowed. Adding beyond this is ignored.
 * @param {boolean} [disabled=false] - Disables the entire control.
 * @param {boolean} [invalid=false] - Applies invalid visual state.
 * @param {string} [size="m-size"] - Size class applied to the root wrapper.
 * @param {string} [customClass] - Extra CSS classes for the root wrapper.
 * @param {string} [inputAriaLabel] - aria-label for the hidden text field.
 */
export default class UlxChipInput extends Component {
	@tracked inputValue = "";

	get baseClass() {
		return getComponentClass("chip-input");
	}

	get rootClasses() {
		const {
			size = "m-size",
			disabled = false,
			invalid = false,
			customClass,
		} = this.args;

		const parts = [this.baseClass];
		size && parts.push(size);
		disabled && parts.push("disabled");
		invalid && parts.push("invalid");
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get chips() {
		return this.args.chips ?? [];
	}

	get isDisabled() {
		return this.args.disabled ?? false;
	}

	get isAtMax() {
		const { max } = this.args;
		return typeof max === "number" && this.chips.length >= max;
	}

	get removeIconName() {
		return "bs-icons1 close-icon-01";
	}

	get inputAriaLabel() {
		return this.args.inputAriaLabel ?? "Add chip";
	}

	@action
	addChip(value) {
		const trimmed = value.trim();
		if (!trimmed || this.isDisabled || this.isAtMax) {
			return;
		}
		const { allowDuplicates = false } = this.args;
		if (!allowDuplicates && this.chips.includes(trimmed)) {
			return;
		}
		this.args.onChipsChange?.([...this.chips, trimmed]);
	}

	@action
	removeChip(index, event) {
		event.stopPropagation();
		const next = this.chips.filter((_, i) => i !== index);
		this.args.onChipsChange?.(next);
	}

	@action
	handleKeydown(event) {
		const { separator = "Enter" } = this.args;
		const isSeparatorKey =
			event.key === separator ||
			(separator === "," && event.key === ",");

		if (isSeparatorKey) {
			event.preventDefault();
			this.addChip(this.inputValue);
			this.inputValue = "";
			return;
		}

		if (event.key === "Backspace" && !this.inputValue && this.chips.length > 0) {
			event.preventDefault();
			const next = this.chips.slice(0, -1);
			this.args.onChipsChange?.(next);
		}
	}

	@action
	handleInput(event) {
		this.inputValue = event.target.value;

		const { separator = "Enter" } = this.args;
		if (separator !== "Enter" && event.target.value.endsWith(separator)) {
			const trimmed = event.target.value.slice(0, -1);
			this.addChip(trimmed);
			this.inputValue = "";
			event.target.value = "";
		}
	}

	@action
	handleWrapperClick(event) {
		const input = event.currentTarget.querySelector(".chip-input-field");
		input?.focus();
	}

	<template>
		<div
			class={{this.rootClasses}}
			role="group"
			aria-label={{@ariaLabel}}
			{{on "click" this.handleWrapperClick}}
		>
			{{#each this.chips as |chip index|}}
				<span class="chip-input-token" data-qa="chip-input-token">
					<span class="chip-input-token-label" title={{chip}}>{{chip}}</span>
					{{#unless this.isDisabled}}
						<button
							type="button"
							class="chip-input-remove-btn"
							aria-label="Remove {{chip}}"
							data-qa="chip-input-remove"
							{{on "click" (fn this.removeChip index)}}
						>
							<UlxIcon
								@iconName={{this.removeIconName}}
								@type="font"
								@size="s14"
								aria-hidden="true"
							/>
						</button>
					{{/unless}}
				</span>
			{{/each}}

			{{#unless this.isAtMax}}
				<input
					type="text"
					class="chip-input-field"
					value={{this.inputValue}}
					placeholder={{@placeholder}}
					disabled={{this.isDisabled}}
					aria-label={{this.inputAriaLabel}}
					data-qa="chip-input-field"
					{{on "keydown" this.handleKeydown}}
					{{on "input" this.handleInput}}
				/>
			{{/unless}}
		</div>
	</template>
}
