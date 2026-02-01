import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { NAMESPACE, getComponentClass } from "../../../utils/component-config";
import {
	buildAriaDescribedBy,
	buildFieldClass,
	isInvalidState,
	normalizeRules,
	resolveKey
} from "../../../utils/input-util";
import UlxIcon from "../ulx-icon/index.gjs";

function buildCheckboxId(namespace, idArg, key) {
	return idArg ?? `${namespace}-checkbox-${key}`;
}

/**
 * Checkbox component with support for:
 * - single checkbox
 * - checkbox items list via `@items`
 * - indeterminate visual state (single checkbox or per-item)
 * - validation/help/error text (field-level)
 *
 * ## WCAG
 * - Proper label association via `id` and `for` attributes
 * - Help/error associated via `aria-describedby`
 * - Required fields marked with `aria-required` (single checkbox)
 * - Invalid state communicated via `aria-invalid`
 * - Indeterminate state communicated via `aria-checked="mixed"`
 *
 * @class UlxCheckbox
 * @param {string} [id] - Unique ID for the checkbox input. Auto-generated if not provided.
 * @param {string} [key] - Stable key used for auto-generated IDs (when `@id` is not provided).
 *
 * @param {Array<object>} [items] - Optional list of checkbox items. When provided, the component renders a group.
 *   Each item supports: `{ label, checked, indeterminate, disabled, customClass, id }`
 * @param {Function} [onItemChange] - When `@items` is provided: (item, checked, event) => void.
 *
 * @param {boolean} [checked] - Whether the checkbox is checked (controlled) (single mode).
 * @param {boolean} [indeterminate=false] - Whether the checkbox is in indeterminate state (single mode).
 * @param {string} [name] - Name attribute for form submissions (single mode).
 * @param {string} [value] - Value attribute for form submissions (single mode).
 *
 * @param {string} [label] - Field label rendered above the checkbox/group (UlxInput pattern).
 * @param {string} [labelRight] - Right-side meta text shown in the field label (e.g. "10 / 20").
 * @param {string} [itemLabel] - Single checkbox label rendered next to the checkbox (single mode).
 *
 * @param {object} [rules] - Rules object for constraints (old component pattern): { required: true }
 * @param {string} [helpText] - Help text displayed below the field.
 * @param {string} [error] - Error message displayed below the field. Sets invalid state.
 *
 * @param {boolean} [disabled=false] - Whether the checkbox is disabled (single mode) or disables all items (group mode).
 * @param {boolean} [invalid=false] - Whether the field is in invalid state.
 * @param {boolean} [filled=false] - Whether to use filled variant styling.
 * @param {string} [size] - Size variant: "xs-size", "s-size", "m-size", "l-size", "xl-size".
 *
 * @param {string} [fieldClass] - Extra classes for the field wrapper (appended to base `field`).
 * @param {string} [groupClass] - Extra classes for the items wrapper (appended to base `ulx-checkbox-group`).
 * @param {string} [customClass] - Extra classes for the checkbox wrapper (single mode or per-item).
 *
 * @param {boolean} [bare=false] - Internal: render only the checkbox item wrapper (no field label/help/error).
 * @param {string} [ariaDescribedBy] - Override `aria-describedby` for the checkbox input (used by group rendering).
 * @param {string} [ariaErrorMessage] - Override `aria-errormessage` for the checkbox input (used by group rendering).
 *
 * @param {Function} [onChange] - Callback fired on change event (single/bare): (event) => void.
 * @param {Function} [onCheckedChange] - Callback fired with next checked value (single/bare): (checked, event) => void.
 */
export default class UlxCheckbox extends Component {
	get rules() {
		return normalizeRules(this.args.rules);
	}

	get key() {
		return resolveKey(this, this.args.key);
	}

	get checkboxId() {
		return buildCheckboxId(NAMESPACE, this.args.id, this.key);
	}

	get items() {
		return Array.isArray(this.args.items) ? this.args.items : [];
	}

	get hasItems() {
		return this.items.length > 0;
	}

	get itemIds() {
		return this.items.map((item, index) => {
			const id = item?.id;
			return typeof id === "string" && id.length > 0 ? id : `${this.checkboxId}-item-${index}`;
		});
	}

	get labelForId() {
		return this.hasItems ? this.itemIds[0] : this.checkboxId;
	}

	get isRequired() {
		return !!this.rules.required;
	}

	get isInvalid() {
		return isInvalidState(this.args.invalid, this.args.error);
	}

	get isIndeterminate() {
		return !!this.args.indeterminate;
	}

	get isChecked() {
		return !!this.args.checked;
	}

	get fieldClass() {
		return buildFieldClass(this.args.fieldClass);
	}

	get resolvedSize() {
		return this.args.size ?? "s-size";
	}

	get resolvedVariant() {
		return this.args.filled ? "filled" : "outlined";
	}

	get checkboxWrapperClass() {
		const parts = [getComponentClass("checkbox"), this.resolvedSize, this.resolvedVariant];

		if (this.isInvalid) parts.push("invalid");
		if (this.args.disabled) parts.push("disabled");

		// Visual state
		if (this.isIndeterminate) {
			parts.push("indeterminate");
		} else if (this.isChecked) {
			parts.push("checked");
		}

		if (this.args.customClass) parts.push(this.args.customClass);

		return parts.filter(Boolean).join(" ");
	}

	get checkboxIconClass() {
		const parts = ["checkbox-icon"];
		if (this.args.disabled) parts.push("disabled");
		if (this.isIndeterminate) parts.push("indeterminate");
		return parts.filter(Boolean).join(" ");
	}

	get checkboxIconName() {
		// Render the tick icon only for checked state.
		// Indeterminate state uses the existing ULS `.checkbox-icon.indeterminate::after` dash styling.
		return this.isChecked && !this.isIndeterminate ? "ls-tick-icon" : undefined;
	}

	get itemLabelText() {
		return this.args.itemLabel;
	}

	get hasItemLabelText() {
		return typeof this.itemLabelText === "string" && this.itemLabelText.length > 0;
	}

	get itemLabelClass() {
		const parts = ["checkbox-label"];
		if (this.args.disabled) parts.push("disabled");
		return parts.filter(Boolean).join(" ");
	}

	get ariaDescribedBy() {
		if (this.args.ariaDescribedBy) return this.args.ariaDescribedBy;
		return buildAriaDescribedBy(this.checkboxId, {
			helpText: this.args.helpText,
			error: this.args.error
		});
	}

	get ariaErrorMessage() {
		if (this.args.ariaErrorMessage) return this.args.ariaErrorMessage;
		return this.args.error ? `${this.checkboxId}-error` : undefined;
	}

	get ariaChecked() {
		return this.isIndeterminate ? "mixed" : undefined;
	}

	get groupClass() {
		const parts = [getComponentClass("checkbox-group")];
		if (this.args.groupClass) parts.push(this.args.groupClass);
		return parts.filter(Boolean).join(" ");
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
	handleItemChange(event) {
		if (!this.args.onItemChange) return;
		const indexRaw = event?.target?.dataset?.index;
		const index = typeof indexRaw === "string" ? Number(indexRaw) : NaN;
		if (!Number.isFinite(index)) return;

		const item = this.items[index];
		if (!item) return;
		this.args.onItemChange(item, event.target.checked, event);
	}

	<template>
		{{#if this.hasItems}}
			{{#unless @bare}}
				<div class={{this.fieldClass}}>
					{{! Field label (UlxInput pattern) }}
					{{#if (has-block "label")}}
						<label for={{this.labelForId}}>
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
						<label for={{this.labelForId}}>
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

					<div class={{this.groupClass}}>
						{{#each this.items key="@index" as |item index|}}
							<UlxCheckbox
								@bare={{true}}
								@id={{this.itemIds.index}}
								@checked={{item.checked}}
								@indeterminate={{item.indeterminate}}
								@disabled={{if @disabled true item.disabled}}
								@invalid={{this.isInvalid}}
								@filled={{@filled}}
								@size={{@size}}
								@customClass={{item.customClass}}
								@itemLabel={{item.label}}
								@ariaDescribedBy={{this.ariaDescribedBy}}
								@ariaErrorMessage={{this.ariaErrorMessage}}
								@onChange={{this.handleItemChange}}
								data-index={{index}}
							/>
						{{/each}}
					</div>

					{{#if @helpText}}
						<div id="{{this.checkboxId}}-help" class="help-text">{{@helpText}}</div>
					{{/if}}

					{{#if @error}}
						<div
							id="{{this.checkboxId}}-error"
							class="error-message"
							role="alert"
							aria-atomic="true"
						>{{@error}}</div>
					{{/if}}
				</div>
			{{/unless}}
		{{else}}
			{{#if @bare}}
				<div class={{this.checkboxWrapperClass}}>
					<input
						id={{this.checkboxId}}
						class="checkbox-input"
						aria-invalid={{if this.isInvalid "true" "false"}}
						aria-describedby={{this.ariaDescribedBy}}
						aria-errormessage={{this.ariaErrorMessage}}
						aria-checked={{this.ariaChecked}}
						type="checkbox"
						checked={{@checked}}
						name={{@name}}
						value={{@value}}
						disabled={{@disabled}}
						{{on "change" this.handleChange}}
						...attributes
					/>
					<div class="checkbox-box">
						{{#if @checked}}
							<UlxIcon
								@type="font"
								@iconName={{this.checkboxIconName}}
								@customClass={{this.checkboxIconClass}}
							>
								<:icon>
									<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z"
											fill="currentColor"
										></path>
									</svg>
								</:icon>
							</UlxIcon>
						{{/if}}
					</div>

					{{#if (has-block "itemLabel")}}
						<label for={{this.checkboxId}} class={{this.itemLabelClass}}>
							{{yield to="itemLabel"}}
						</label>
					{{else if this.hasItemLabelText}}
						<label for={{this.checkboxId}} class={{this.itemLabelClass}}>
							{{this.itemLabelText}}
						</label>
					{{/if}}
				</div>
			{{else}}
				<div class={{this.fieldClass}}>
					{{! Field label (UlxInput pattern) }}
					{{#if (has-block "label")}}
						<label for={{this.labelForId}}>
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
						<label for={{this.labelForId}}>
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

					<div class={{this.checkboxWrapperClass}}>
						<input
							id={{this.checkboxId}}
							class="checkbox-input"
							aria-invalid={{if this.isInvalid "true" "false"}}
							aria-describedby={{this.ariaDescribedBy}}
							aria-errormessage={{this.ariaErrorMessage}}
							aria-checked={{this.ariaChecked}}
							type="checkbox"
							checked={{@checked}}
							name={{@name}}
							value={{@value}}
							disabled={{@disabled}}
							required={{this.isRequired}}
							aria-required={{this.isRequired}}
							{{on "change" this.handleChange}}
							...attributes
						/>
						<div class="checkbox-box">
							{{#if @checked}}
								<UlxIcon
									@type="font"
									@iconName={{this.checkboxIconName}}
									@customClass={{this.checkboxIconClass}}
								>
									<:icon>
										<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z"
												fill="currentColor"
											></path>
										</svg>
									</:icon>
								</UlxIcon>
							{{/if}}
						</div>

						{{#if (has-block "itemLabel")}}
							<label for={{this.checkboxId}} class={{this.itemLabelClass}}>
								{{yield to="itemLabel"}}
								{{#if this.isRequired}}
									{{#unless (has-block "label")}}
										{{#unless @label}}
											<span class="fg-red" aria-hidden="true">*</span>
										{{/unless}}
									{{/unless}}
								{{/if}}
							</label>
						{{else if this.hasItemLabelText}}
							<label for={{this.checkboxId}} class={{this.itemLabelClass}}>
								{{this.itemLabelText}}
								{{#if this.isRequired}}
									{{#unless (has-block "label")}}
										{{#unless @label}}
											<span class="fg-red" aria-hidden="true">*</span>
										{{/unless}}
									{{/unless}}
								{{/if}}
							</label>
						{{/if}}
					</div>

					{{#if @helpText}}
						<div id="{{this.checkboxId}}-help" class="help-text">{{@helpText}}</div>
					{{/if}}

					{{#if @error}}
						<div
							id="{{this.checkboxId}}-error"
							class="error-message"
							role="alert"
							aria-atomic="true"
						>{{@error}}</div>
					{{/if}}
				</div>
			{{/if}}
		{{/if}}
	</template>
}
