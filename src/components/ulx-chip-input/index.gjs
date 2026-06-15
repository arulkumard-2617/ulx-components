import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { fn } from "@ember/helper";
import { NAMESPACE, getComponentClass } from "../../utils/component-config";
import { t } from "../../utils/i18n";
import {
	buildInputId,
	isInvalidState,
	isRulesRequired,
	normalizeRules,
	resolveKey
} from "../../utils/input-util";
import UlxIcon from "../ulx-icon/index.gjs";

/**
 * Chip-based tag entry input. Users type a value and press Enter (or a custom
 * separator key) to add it as a chip. Chips can be removed individually.
 *
 * ## WCAG
 * - With `UlxField`, pass `@field={{field}}` so the inner input gets `id`, `aria-describedby`,
 *   `aria-errormessage`, and `aria-invalid` from the field yield hash.
 * - Standalone usage falls back to `@inputAriaLabel` on the inner text field.
 * - Each remove button has an accessible label announcing which chip is removed.
 * - Keyboard: Enter/separator adds chip; Backspace on empty field removes the last chip.
 * - Blur commits pending text so external submit actions include the typed value.
 *
 * @class UlxChipInput
 * @param {object} [field] - Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.
 * @param {string} [key] - Stable key or id; overrides `field.key` when set.
 * @param {string} [id] - Explicit id for the inner text field; overrides derived id when set.
 * @param {string} [ariaDescribedBy] - Overrides `field.describedBy`.
 * @param {string} [ariaErrorMessage] - Overrides `field.errorId`.
 * @param {string[]} [chips=[]] - Controlled list of current chip values.
 * @param {Function} [onChipsChange] - Called with the updated chips array when chips are added or removed.
 * @param {string} [placeholder] - Placeholder text for the text field.
 * @param {string|string[]} [separator=["Enter", ","]] - Key(s) that commit the typed value as a chip.
 *   Accepts a single key string (e.g. `","`) or an array of keys (e.g. `["Enter", ","]`).
 *   `"Enter"` is committed on `keydown`; single printable characters (e.g. `","`) are committed
 *   on `input` so the separator character itself is never included in the chip label.
 * @param {boolean} [allowDuplicates=false] - When false, duplicate values are silently ignored.
 * @param {number} [max] - Maximum number of chips allowed. Adding beyond this is ignored.
 * @param {boolean} [disabled=false] - Disables the entire control.
 * @param {boolean} [invalid=false] - Applies invalid visual state.
 * @param {string} [error] - Error message; combined with `@invalid` and `field.error` for invalid state.
 * @param {object} [rules] - Rule metadata from `UlxField` or caller (`required`, etc.).
 * @param {string} [size="m-size"] - Size class applied to the root wrapper.
 * @param {string} [customClass] - Extra CSS classes for the root wrapper.
 * @param {string} [inputAriaLabel] - aria-label for the inner text field when not used with `UlxField`.
 * @param {string} [ariaLabel] - Accessible name for the root group when used standalone.
 * @param {string} [dataQa] - Optional root data-qa attribute.
 */
export default class UlxChipInput extends Component {
	@tracked inputValue = "";

	get baseClass() {
		return getComponentClass("chip-input");
	}

	get fieldContext() {
		const { field } = this.args;
		return field && typeof field === "object" ? field : null;
	}

	get rules() {
		const { rules: rulesArg } = this.args;
		return normalizeRules(rulesArg ?? this.fieldContext?.rules);
	}

	get key() {
		const { key: keyArg } = this.args;
		return resolveKey(this, keyArg ?? this.fieldContext?.key);
	}

	get inputId() {
		return buildInputId(NAMESPACE, this.args.id, this.key);
	}

	get isRequired() {
		return isRulesRequired(this.rules);
	}

	get isInvalid() {
		const { invalid, error: errorArg } = this.args;
		const error = errorArg ?? this.fieldContext?.error;
		return isInvalidState(invalid, error);
	}

	get ariaDescribedBy() {
		const { ariaDescribedBy } = this.args;
		return ariaDescribedBy ?? this.fieldContext?.describedBy;
	}

	get ariaErrorMessage() {
		const { ariaErrorMessage } = this.args;
		return ariaErrorMessage ?? this.fieldContext?.errorId;
	}

	get usesFieldLabel() {
		return Boolean(this.fieldContext?.key);
	}

	get inputAccessibleName() {
		if (this.usesFieldLabel) {
			return undefined;
		}

		return this.args.inputAriaLabel ?? t("lbl.a11y.chipInput.addChip");
	}

	get rootClasses() {
		const { size = "m-size", disabled = false, customClass } = this.args;

		const parts = [this.baseClass];
		size && parts.push(size);
		disabled && parts.push("disabled");
		this.isInvalid && parts.push("invalid");
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get chips() {
		return this.args.chips ?? [];
	}

	get isDisabled() {
		return this.args.disabled ?? false;
	}

	get inputPlaceholder() {
		return this.isDisabled ? undefined : this.args.placeholder;
	}

	get isAtMax() {
		const { max } = this.args;
		return typeof max === "number" && this.chips.length >= max;
	}

	get removeIconName() {
		return "bs-icons1 close-icon-01";
	}

	get separatorKeys() {
		const { separator = ["Enter", ","] } = this.args;
		const keys = Array.isArray(separator) ? separator : [separator];
		return keys;
	}

	get charSeparators() {
		return this.separatorKeys.filter((k) => k !== "Enter" && k.length === 1);
	}

	@action
	removeButtonAriaLabel(chip) {
		return t("lbl.a11y.chipInput.remove", { chip });
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

	@action
	handleKeydown(event) {
		const isEnterSeparator =
			this.separatorKeys.includes(event.key) && !this.charSeparators.includes(event.key);

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

		const escaped = this.charSeparators
			.map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
			.join("");
		const parts = raw.split(new RegExp(`[${escaped}]`));

		const toCommit = parts.slice(0, -1);
		const remainder = parts[parts.length - 1] ?? "";

		toCommit.forEach((part) => this.addChip(part));

		this.inputValue = remainder;
		event.target.value = remainder;
	}

	@action
	handleBlur() {
		const added = this.addChip(this.inputValue);
		added && (this.inputValue = "");
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
							aria-label={{this.removeButtonAriaLabel chip}}
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
					id={{this.inputId}}
					class="chip-input-field"
					value={{this.inputValue}}
					placeholder={{this.inputPlaceholder}}
					disabled={{this.isDisabled}}
					required={{this.isRequired}}
					aria-required={{this.isRequired}}
					aria-invalid="{{this.isInvalid}}"
					aria-describedby={{this.ariaDescribedBy}}
					aria-errormessage={{this.ariaErrorMessage}}
					aria-label={{this.inputAccessibleName}}
					data-qa="chip-input-field"
					{{on "keydown" this.handleKeydown}}
					{{on "input" this.handleInput}}
					{{on "blur" this.handleBlur}}
				/>
			{{/unless}}
		</div>
	</template>
}
