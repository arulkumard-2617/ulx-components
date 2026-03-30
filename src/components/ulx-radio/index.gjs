import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import { NAMESPACE, getComponentClass } from "../../utils/component-config";
import { isInvalidState, normalizeRules, resolveKey } from "../../utils/input-util";
import UlxRadioItem from "./radio-item.gjs";

function buildRadioId(namespace, idArg, key) {
	if (typeof idArg === "string" && idArg.length) return idArg;
	if (typeof key === "string" && key.length) return key;
	return `${namespace}-radio-${key}`;
}

/**
 * Radio component with support for:
 * - single radio
 * - radio items list via `@items`
 * - validation/help/error text (field-level)
 *
 * ## WCAG
 * - Proper label association via `id` and `for` attributes
 * - Group semantics via `role="radiogroup"` (items mode)
 * - Help/error associated via `aria-describedby`
 * - Required fields marked with `aria-required` (radiogroup) and optional visual `*`
 * - Invalid state communicated via `aria-invalid`
 *
 * @class UlxRadio
 * @param {object} [field] - Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.
 * @param {string} [id] - Unique ID base for the radio(s). Auto-generated if not provided.
 * @param {string} [key] - When `@id` is omitted, used as the input id (e.g. `@key={{field.key}}` with `UlxField`); otherwise stable key for auto-generated ids. Overrides `field.key` when set.
 *
 * @param {Array<object>} [items] - Optional list of radio items. When provided, the component renders a group.
 *   Each item supports: `{ label, value, checked, disabled, customClass, id }`. Pass string `id` when the list can reorder; otherwise ids use the item index (stable when toggling selection).
 * @param {Function} [onItemChange] - When `@items` is provided: (item, checked, event) => void.
 *
 * @param {boolean} [checked] - Whether the radio is checked (controlled) (single mode).
 * @param {string} [value] - Value attribute for form submissions (single mode).
 *
 * @param {string} [itemLabel] - Single radio label rendered next to the radio (single mode).
 *
 * @param {object} [rules] - Rules object for constraints (old component pattern): { required: true }
 * @param {string} [error] - Error message string for invalid-state calculation.
 *
 * @param {boolean} [disabled=false] - Whether the radio is disabled (single mode) or disables all items (group mode).
 * @param {boolean} [invalid=false] - Whether the field is in invalid state.
 * @param {boolean} [filled=false] - Whether to use filled variant styling.
 * @param {string} [size="m-size"] - Size variant: s-size, m-size, l-size.
 *
 * @param {string} [groupClass] - Extra classes for the items wrapper (appended to base `ulx-radio-group`).
 * @param {string} [customClass] - Extra classes for the radio wrapper (single mode or per-item).
 * @param {string} [ariaDescribedBy] - Override `aria-describedby` for the group/inputs.
 * @param {string} [ariaErrorMessage] - Override `aria-errormessage` for the inputs.
 *
 * @param {Function} [onChange] - Callback fired on change event (single/bare): (event) => void.
 * @param {Function} [onCheckedChange] - Callback fired with next checked value (single/bare): (checked, event) => void.
 * @param {string} [dataQa] - Override for root element data-qa (default: "ulx-radio").
 */
export default class UlxRadio extends Component {
	get rules() {
		const { rules: rulesArg } = this.args;
		return normalizeRules(rulesArg ?? this.fieldContext?.rules);
	}

	get fieldContext() {
		const { field } = this.args;
		return field && typeof field === "object" ? field : null;
	}

	get key() {
		const { key: keyArg } = this.args;
		return resolveKey(this, keyArg ?? this.fieldContext?.key);
	}

	get radioId() {
		return buildRadioId(NAMESPACE, this.args.id, this.key);
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-radio";
	}

	get items() {
		return Array.isArray(this.args.items) ? this.args.items : [];
	}

	get hasItems() {
		return this.items.length > 0;
	}

	get itemEntries() {
		// Pre-compute IDs so templates don't need indexing helpers.
		return this.items.map((item, index) => {
			const id = item?.id;
			const resolvedId =
				typeof id === "string" && id.length > 0 ? id : `${this.radioId}-item-${id}`;
			return { item, id: resolvedId };
		});
	}

	get isRequired() {
		return !!this.rules.required;
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
		const { ariaErrorMessage, error: errorArg } = this.args;
		if (ariaErrorMessage) return ariaErrorMessage;
		if (this.fieldContext?.errorId) return this.fieldContext.errorId;
		const error = errorArg ?? this.fieldContext?.error;
		return error ? `${this.radioId}-error` : undefined;
	}

	get groupName() {
		// Native radios are mutually exclusive only if they share the same `name`.
		// We keep this internal (not a public @arg) and generate a stable name.
		return this.radioId;
	}

	get groupClass() {
		const { groupClass } = this.args;

		const parts = [getComponentClass("radio-group")];
		groupClass && parts.push(groupClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	@action
	handleChange(event) {
		if (this.args.onChange) {
			this.args.onChange(event);
		}
		if (this.args.onCheckedChange) {
			this.args.onCheckedChange(event.target.checked, event);
		}
	}

	@action
	handleItemChange(item, event) {
		if (!this.args.onItemChange) return;
		this.args.onItemChange(item, event.target.checked, event);
	}

	@action
	handleGroupKeyDown(event) {
		// Ensure robust keyboard navigation even if CSS/custom wrappers interfere with
		// the browser's built-in radio-group arrow-key behavior.
		const key = event.key;
		const isPrev = key === "ArrowLeft" || key === "ArrowUp";
		const isNext = key === "ArrowRight" || key === "ArrowDown";
		const isHome = key === "Home";
		const isEnd = key === "End";
		if (!isPrev && !isNext && !isHome && !isEnd) return;

		const root = event.currentTarget;
		if (!(root instanceof HTMLElement)) return;

		const enabledRadios = Array.from(root.querySelectorAll('input[type="radio"]')).filter(
			(el) => el instanceof HTMLInputElement && !el.disabled
		);
		if (enabledRadios.length === 0) return;

		const active =
			event.target instanceof HTMLInputElement
				? event.target
				: document.activeElement instanceof HTMLInputElement
					? document.activeElement
					: null;

		let index = active ? enabledRadios.indexOf(active) : -1;
		if (index === -1) {
			const checked = enabledRadios.find((r) => r.checked);
			index = checked ? enabledRadios.indexOf(checked) : 0;
		}

		let nextIndex = index;
		if (isHome) nextIndex = 0;
		else if (isEnd) nextIndex = enabledRadios.length - 1;
		else if (isPrev) nextIndex = (index - 1 + enabledRadios.length) % enabledRadios.length;
		else if (isNext) nextIndex = (index + 1) % enabledRadios.length;

		const nextRadio = enabledRadios[nextIndex];
		if (!nextRadio || nextRadio === active) return;

		event.preventDefault();
		nextRadio.focus();
		// Align with WAI-ARIA radio-group behavior: Arrow keys move focus AND selection.
		if (!nextRadio.checked) nextRadio.click();
	}

	<template>
		{{#if this.hasItems}}
			<div
				...attributes
				class={{this.groupClass}}
				role="radiogroup"
				data-qa={{this.rootDataQa}}
				aria-describedby={{this.ariaDescribedBy}}
				aria-invalid={{if this.isInvalid "true" "false"}}
				aria-required={{if this.isRequired "true" "false"}}
				{{on "keydown" this.handleGroupKeyDown}}
			>
				{{#each this.itemEntries key="id" as |entry|}}
					<UlxRadioItem
						@id={{entry.id}}
						@checked={{entry.item.checked}}
						@disabled={{if @disabled true entry.item.disabled}}
						@invalid={{this.isInvalid}}
						@filled={{@filled}}
						@size={{@size}}
						@customClass={{entry.item.customClass}}
						@itemLabel={{entry.item.label}}
						@ariaDescribedBy={{this.ariaDescribedBy}}
						@ariaErrorMessage={{this.ariaErrorMessage}}
						@name={{this.groupName}}
						@value={{entry.item.value}}
						@onChange={{fn this.handleItemChange entry.item}}
					/>
				{{/each}}
			</div>
		{{else}}
			{{! NOTE: Named blocks (e.g. <:itemLabel>) must be direct children of a component invocation. }}
			{{#if (has-block "itemLabel")}}
				<UlxRadioItem
					...attributes
					@dataQa={{this.rootDataQa}}
					@id={{this.radioId}}
					@checked={{@checked}}
					@disabled={{@disabled}}
					@invalid={{this.isInvalid}}
					@filled={{@filled}}
					@size={{@size}}
					@customClass={{@customClass}}
					@required={{this.isRequired}}
					@ariaDescribedBy={{this.ariaDescribedBy}}
					@ariaErrorMessage={{this.ariaErrorMessage}}
					@name={{this.groupName}}
					@value={{@value}}
					@onChange={{this.handleChange}}
				>
					<:itemLabel>
						{{yield to="itemLabel"}}
					</:itemLabel>
				</UlxRadioItem>
			{{else}}
				<UlxRadioItem
					...attributes
					@dataQa={{this.rootDataQa}}
					@id={{this.radioId}}
					@checked={{@checked}}
					@disabled={{@disabled}}
					@invalid={{this.isInvalid}}
					@filled={{@filled}}
					@size={{@size}}
					@customClass={{@customClass}}
					@itemLabel={{@itemLabel}}
					@required={{this.isRequired}}
					@ariaDescribedBy={{this.ariaDescribedBy}}
					@ariaErrorMessage={{this.ariaErrorMessage}}
					@name={{this.groupName}}
					@value={{@value}}
					@onChange={{this.handleChange}}
				/>
			{{/if}}
		{{/if}}
	</template>
}
