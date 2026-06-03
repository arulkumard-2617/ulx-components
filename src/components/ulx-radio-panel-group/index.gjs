import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import { NAMESPACE, getComponentClass } from "../../utils/component-config";
import { joinClassNames } from "../../utils/class-names";
import { isInvalidState, normalizeRules, resolveKey } from "../../utils/input-util";
import UlxRadioItem from "../ulx-radio/radio-item.gjs";

function buildRadioPanelGroupId(namespace, idArg, key) {
	if (typeof idArg === "string" && idArg.length) return idArg;
	if (typeof key === "string" && key.length) return key;
	return `${namespace}-radio-panel-group-${key}`;
}

function valueEquals(left, right) {
	if (left === right) return true;
	if (left == null || right == null) return false;
	if (typeof left === "object" && typeof right === "object") {
		return JSON.stringify(left) === JSON.stringify(right);
	}
	return false;
}

/**
 * Radio group that renders expandable content below the selected option.
 *
 * Use this when each radio choice may reveal a nested form, explanation, or settings panel.
 * The component owns one native radio group and yields the selected item below its row.
 *
 * @class UlxRadioPanelGroup
 * @param {object} [field] - Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`).
 * @param {string} [id] - Stable ID base for the group and radio inputs.
 * @param {string} [key] - Stable key when `@id` is omitted.
 * @param {Array<object>} [items] - Radio items: `{ label, value, checked, disabled, customClass, id }`.
 * @param {unknown} [value] - Selected value. When omitted, each item's `checked` flag is used.
 * @param {Function} [onChange] - `(value, item, event) => void` when a radio is selected.
 * @param {Function} [onItemChange] - `(item, checked, event) => void` when a radio changes.
 * @param {boolean} [disabled=false] - Disable all radios.
 * @param {boolean} [invalid=false] - Invalid state.
 * @param {boolean} [filled=false] - Filled radio styling.
 * @param {string} [size="m-size"] - Radio size.
 * @param {object} [rules] - Validation rules, e.g. `{ required: true }`.
 * @param {string} [error] - Field error message.
 * @param {string} [customClass] - Extra classes for the group root.
 * @param {string} [groupClass] - Extra classes for the group root.
 * @param {string} [rowClass] - Extra classes for each radio row wrapper.
 * @param {string} [panelClass] - Extra classes for the selected row panel.
 * @param {string} [ariaDescribedBy] - Override `aria-describedby`.
 * @param {string} [ariaErrorMessage] - Override `aria-errormessage`.
 * @param {string} [dataQa] - Root data-qa override. Defaults to `ulx-radio-panel-group`.
 * @yield {Block} default - Selected item content. Receives the selected item.
 */
export default class UlxRadioPanelGroup extends Component {
	get fieldContext() {
		const { field } = this.args;
		return field && typeof field === "object" ? field : null;
	}

	get key() {
		const { key: keyArg } = this.args;
		return resolveKey(this, keyArg ?? this.fieldContext?.key);
	}

	get groupId() {
		return buildRadioPanelGroupId(NAMESPACE, this.args.id, this.key);
	}

	get rules() {
		return normalizeRules(this.args.rules ?? this.fieldContext?.rules);
	}

	get items() {
		return Array.isArray(this.args.items) ? this.args.items : [];
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
		return error ? `${this.groupId}-error` : undefined;
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-radio-panel-group";
	}

	get groupClass() {
		const { customClass, groupClass } = this.args;
		return joinClassNames(getComponentClass("radio-panel-group"), customClass, groupClass);
	}

	get rowClass() {
		return joinClassNames("radio-panel-row", this.args.rowClass);
	}

	get panelClass() {
		return joinClassNames("radio-panel-content", this.args.panelClass);
	}

	get itemEntries() {
		const hasControlledValue = Object.prototype.hasOwnProperty.call(this.args, "value");
		return this.items.map((item, index) => {
			const id =
				typeof item?.id === "string" && item.id.length > 0
					? item.id
					: `${this.groupId}-item-${index}`;
			const checked = hasControlledValue ? valueEquals(item?.value, this.args.value) : !!item?.checked;
			return { item, id, checked };
		});
	}

	@action
	handleItemChange(item, event) {
		const checked = event.target.checked;
		if (!checked) return;
		this.args.onChange?.(item.value, item, event);
		this.args.onItemChange?.(item, checked, event);
	}

	@action
	handleGroupKeyDown(event) {
		const key = event.key;
		const isPrev = key === "ArrowLeft" || key === "ArrowUp";
		const isNext = key === "ArrowRight" || key === "ArrowDown";
		const isHome = key === "Home";
		const isEnd = key === "End";
		if (!isPrev && !isNext && !isHome && !isEnd) return;

		const root = event.currentTarget;
		if (!(root instanceof HTMLElement)) return;

		const enabledRadios = Array.from(root.querySelectorAll('input[type="radio"]')).filter(
			(element) => element instanceof HTMLInputElement && !element.disabled
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
			const checked = enabledRadios.find((radioInput) => radioInput.checked);
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
		if (!nextRadio.checked) nextRadio.click();
	}

	<template>
		<div
			...attributes
			id={{this.groupId}}
			class={{this.groupClass}}
			role="radiogroup"
			data-qa={{this.rootDataQa}}
			aria-describedby={{this.ariaDescribedBy}}
			aria-invalid={{if this.isInvalid "true" "false"}}
			aria-required={{if this.isRequired "true" "false"}}
			{{on "keydown" this.handleGroupKeyDown}}
		>
			{{#each this.itemEntries key="id" as |entry|}}
				<div class={{this.rowClass}}>
					<UlxRadioItem
						@id={{entry.id}}
						@checked={{entry.checked}}
						@disabled={{if @disabled true entry.item.disabled}}
						@invalid={{this.isInvalid}}
						@filled={{@filled}}
						@size={{@size}}
						@customClass={{entry.item.customClass}}
						@itemLabel={{entry.item.label}}
						@ariaDescribedBy={{this.ariaDescribedBy}}
						@ariaErrorMessage={{this.ariaErrorMessage}}
						@name={{this.groupId}}
						@value={{entry.item.value}}
						@onChange={{fn this.handleItemChange entry.item}}
					/>

					{{#if entry.checked}}
						<div class={{this.panelClass}}>
							{{yield entry.item}}
						</div>
					{{/if}}
				</div>
			{{/each}}
		</div>
	</template>
}
