import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import { NAMESPACE, getComponentClass } from "../../../utils/component-config";
import {
	buildAriaDescribedBy,
	buildFieldClass,
	isInvalidState,
	normalizeRules,
	resolveKey
} from "../../../utils/input-util";
import UlxRadioItem from "./radio-item.gjs";

function buildRadioId(namespace, idArg, key) {
	return idArg ?? `${namespace}-radio-${key}`;
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
 * @param {string} [id] - Unique ID base for the radio(s). Auto-generated if not provided.
 * @param {string} [key] - Stable key used for auto-generated IDs (when `@id` is not provided).
 *
 * @param {Array<object>} [items] - Optional list of radio items. When provided, the component renders a group.
 *   Each item supports: `{ label, value, checked, disabled, customClass, id }`
 * @param {Function} [onItemChange] - When `@items` is provided: (item, checked, event) => void.
 *
 * @param {boolean} [checked] - Whether the radio is checked (controlled) (single mode).
 * @param {string} [value] - Value attribute for form submissions (single mode).
 *
 * @param {string} [label] - Field label rendered above the radio/group (UlxInput pattern).
 * @param {string} [labelRight] - Right-side meta text shown in the field label (e.g. "10 / 20").
 * @param {string} [itemLabel] - Single radio label rendered next to the radio (single mode).
 *
 * @param {object} [rules] - Rules object for constraints (old component pattern): { required: true }
 * @param {string} [helpText] - Help text displayed below the field.
 * @param {string} [error] - Error message displayed below the field. Sets invalid state.
 *
 * @param {boolean} [disabled=false] - Whether the radio is disabled (single mode) or disables all items (group mode).
 * @param {boolean} [invalid=false] - Whether the field is in invalid state.
 * @param {boolean} [filled=false] - Whether to use filled variant styling.
 * @param {string} [size] - Size variant: "xs-size", "s-size", "m-size", "l-size", "xl-size".
 *
 * @param {string} [fieldClass] - Extra classes for the field wrapper (appended to base `field`).
 * @param {string} [groupClass] - Extra classes for the items wrapper (appended to base `ulx-radio-group`).
 * @param {string} [customClass] - Extra classes for the radio wrapper (single mode or per-item).
 * @param {string} [ariaDescribedBy] - Override `aria-describedby` for the group/inputs.
 * @param {string} [ariaErrorMessage] - Override `aria-errormessage` for the inputs.
 *
 * @param {Function} [onChange] - Callback fired on change event (single/bare): (event) => void.
 * @param {Function} [onCheckedChange] - Callback fired with next checked value (single/bare): (checked, event) => void.
 */
export default class UlxRadio extends Component {
	get rules() {
		return normalizeRules(this.args.rules);
	}

	get key() {
		return resolveKey(this, this.args.key);
	}

	get radioId() {
		return buildRadioId(NAMESPACE, this.args.id, this.key);
	}

	get labelId() {
		return `${this.radioId}-label`;
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
				typeof id === "string" && id.length > 0 ? id : `${this.radioId}-item-${index}`;
			return { item, id: resolvedId };
		});
	}

	get labelForId() {
		return this.hasItems ? this.itemEntries[0]?.id : this.radioId;
	}

	get isRequired() {
		return !!this.rules.required;
	}

	get isInvalid() {
		return isInvalidState(this.args.invalid, this.args.error);
	}

	get fieldClass() {
		return buildFieldClass(this.args.fieldClass);
	}

	get ariaDescribedBy() {
		if (this.args.ariaDescribedBy) return this.args.ariaDescribedBy;
		return buildAriaDescribedBy(this.radioId, {
			helpText: this.args.helpText,
			error: this.args.error
		});
	}

	get ariaErrorMessage() {
		if (this.args.ariaErrorMessage) return this.args.ariaErrorMessage;
		return this.args.error ? `${this.radioId}-error` : undefined;
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
		<div class={{this.fieldClass}}>
			{{! Field label (UlxInput pattern) }}
			{{#if (has-block "label")}}
				<label id={{this.labelId}} for={{this.labelForId}}>
					<span class="label-text">
						{{yield to="label"}}
						{{#if this.isRequired}}
							<span class="fg-red" aria-hidden="true">*</span>
						{{/if}}
					</span>
					{{#if @labelRight}}
						<span class="label-right">{{@labelRight}}</span>
					{{/if}}
				</label>
			{{else if @label}}
				<label id={{this.labelId}} for={{this.labelForId}}>
					<span class="label-text">
						{{@label}}
						{{#if this.isRequired}}
							<span class="fg-red" aria-hidden="true">*</span>
						{{/if}}
					</span>
					{{#if @labelRight}}
						<span class="label-right">{{@labelRight}}</span>
					{{/if}}
				</label>
			{{/if}}

			{{#if this.hasItems}}
				<div
					...attributes
					class={{this.groupClass}}
					role="radiogroup"
					aria-labelledby={{if (has-block "label") this.labelId (if @label this.labelId)}}
					aria-describedby={{this.ariaDescribedBy}}
					aria-invalid={{if this.isInvalid "true" "false"}}
					aria-required={{if this.isRequired "true" "false"}}
					{{on "keydown" this.handleGroupKeyDown}}
				>
					{{#each this.itemEntries key="@index" as |entry|}}
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
						@id={{this.radioId}}
						@checked={{@checked}}
						@disabled={{@disabled}}
						@invalid={{this.isInvalid}}
						@filled={{@filled}}
						@size={{@size}}
						@customClass={{@customClass}}
						@required={{this.isRequired}}
						@showRequiredStar={{if (has-block "label") false (if @label false this.isRequired)}}
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
						@id={{this.radioId}}
						@checked={{@checked}}
						@disabled={{@disabled}}
						@invalid={{this.isInvalid}}
						@filled={{@filled}}
						@size={{@size}}
						@customClass={{@customClass}}
						@itemLabel={{@itemLabel}}
						@required={{this.isRequired}}
						@showRequiredStar={{if (has-block "label") false (if @label false this.isRequired)}}
						@ariaDescribedBy={{this.ariaDescribedBy}}
						@ariaErrorMessage={{this.ariaErrorMessage}}
						@name={{this.groupName}}
						@value={{@value}}
						@onChange={{this.handleChange}}
					/>
				{{/if}}
			{{/if}}

			{{#if @helpText}}
				<div id="{{this.radioId}}-help" class="help-text">{{@helpText}}</div>
			{{/if}}

			{{#if @error}}
				<div id="{{this.radioId}}-error" class="error-message" role="alert" aria-atomic="true">
					{{@error}}
				</div>
			{{/if}}
		</div>
	</template>
}
