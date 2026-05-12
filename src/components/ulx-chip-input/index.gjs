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
 * @param {string|string[]} [separator=["Enter", ","]] - Key(s) that commit the typed value as a chip.
 *   Accepts a single key string (e.g. `","`) or an array of keys (e.g. `["Enter", ","]`).
 *   `"Enter"` is committed on `keydown`; single printable characters (e.g. `","`) are committed
 *   on `input` so the separator character itself is never included in the chip label. * @param {boolean} [allowDuplicates=false] - When false, duplicate values are silently ignored.
 * @param {number} [max] - Maximum number of chips allowed. Adding beyond this is ignored.
 * @param {boolean} [disabled=false] - Disables the entire control.
 * @param {boolean} [invalid=false] - Applies invalid visual state.
 * @param {string} [size="m-size"] - Size class applied to the root wrapper.
 * @param {string} [customClass] - Extra CSS classes for the root wrapper.
 * @param {string} [inputAriaLabel] - aria-label for the inner text field.
 * @param {string} [dataQa] - Optional root data-qa attribute.
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

	get separatorKeys() {
		const { separator = ["Enter", ","] } = this.args;
		const keys = Array.isArray(separator) ? separator : [separator];
		return keys;
	}

	@action
	addChip(value) {
		const trimmed = value.trim();
		if (!trimmed || this.isDisabled || this.isAtMax) {
			return false;
		}
		const { allowDuplicates = false } = this.args;
		if (!allowDuplicates && this.chips.includes(trimmed)) {
			return false;
		}
		this.args.onChipsChange?.([...this.chips, trimmed]);
		return true;
	}

	@action
	removeChip(index, event) {
		event.stopPropagation();
		const next = this.chips.filter((_, i) => i !== index);
		this.args.onChipsChange?.(next);
	}

	get charSeparators() {
		return this.separatorKeys.filter((k) => k !== "Enter" && k.length === 1);
	}

	@action
	handleKeydown(event) {
		// Enter (and any other non-printable separator keys) — commit on keydown
		// because the `input` event won't fire for Enter
		const isEnterSeparator =
			this.separatorKeys.includes(event.key) &&
			!this.charSeparators.includes(event.key);

		if (isEnterSeparator) {
			event.preventDefault();
			const added = this.addChip(this.inputValue);
			added && (this.inputValue = "");
			return;
		}

		if (event.key === "Backspace" && !this.inputValue && this.chips.length > 0) {
			event.preventDefault();
			this.args.onChipsChange?.(this.chips.slice(0, -1));
		}
	}

	@action
	handleInput(event) {
		const raw = event.target.value;

		if (this.charSeparators.length === 0) {
			this.inputValue = raw;
			return;
		}

		// Build a regex that splits on any char separator
		const escaped = this.charSeparators
			.map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
			.join("");
		const parts = raw.split(new RegExp(`[${escaped}]`));

		// All parts except the last get committed as chips
		const toCommit = parts.slice(0, -1);
		const remainder = parts[parts.length - 1] ?? "";

		toCommit.forEach((part) => this.addChip(part));

		this.inputValue = remainder;
		event.target.value = remainder;
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
			data-qa={{@dataQa}}
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
