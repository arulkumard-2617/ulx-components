import Component from "@glimmer/component";
import { action } from "@ember/object";
import { t } from "../../../utils/i18n";
import tHelper from "../../../helpers/t";
import { buildInputGroupClass } from "../../../utils/input-util";
import flatpickrModifier from "../../../modifiers/flatpickr";
import UlxInput from "../../ulx-input/index.gjs";
import UlxIconButton from "../../ulx-icon-button/index.gjs";

/**
 * Single- or multi-date field using flatpickr (popup or inline).
 *
 * @class UlxDatePicker
 * @param {Date|string|null} [value] - Selected date (single) or use `values` shape via value for multiple
 * @param {function} [onChange] - `(selectedDates: Date[], dateStr: string) => void`
 * @param {'single'|'multiple'} [mode='single']
 * @param {boolean} [showIcon=false]
 * @param {boolean} [showClearButton=false]
 * @param {boolean} [readOnlyInput]
 * @param {object} [flatpickrOptions] - Extra flatpickr config merged last (hooks, plugins, etc.)
 * @param {function} [onFocus] - Forwarded to the inner input
 * @param {function} [onBlur] - Forwarded to the inner input
 */
export default class UlxDatePicker extends Component {
	get mode() {
		return this.args.mode ?? "single";
	}

	get useWrap() {
		const { showIcon = false, showClearButton = false } = this.args;
		return showIcon || showClearButton;
	}

	get fpOptions() {
		const {
			dateFormat = "Y-m-d",
			minDate,
			maxDate,
			disable,
			enable,
			altInput,
			altFormat,
			inline,
			weekNumbers,
			enableTime,
			noCalendar,
			minTime,
			maxTime,
			time_24hr,
			conjunction,
			allowInput,
			parseDate,
			formatDate,
			defaultDate,
			clickOpens,
			flatpickrOptions = {}
		} = this.args;

		const o = {
			mode: this.mode,
			dateFormat,
			minDate,
			maxDate,
			disable,
			enable,
			altInput,
			altFormat,
			inline,
			weekNumbers,
			enableTime,
			noCalendar,
			minTime,
			maxTime,
			time_24hr,
			conjunction,
			allowInput,
			parseDate,
			formatDate,
			defaultDate,
			clickOpens,
			...flatpickrOptions
		};

		if (this.useWrap) {
			o.wrap = true;
		}

		return o;
	}

	get syncValue() {
		const { value } = this.args;
		if (this.mode === "multiple") {
			return Array.isArray(value) ? value : [];
		}
		return value ?? null;
	}

	get wrapRootClass() {
		const { size = "m-size", filled, disabled, invalid, customClass } = this.args;

		const parts = [
			"flatpickr",
			buildInputGroupClass({
				size,
				filled: Boolean(filled),
				disabled,
				invalid: Boolean(invalid)
			})
		];

		customClass && parts.push(customClass);

		return parts.filter(Boolean).join(" ");
	}

	@action
	handleDatesChange(selectedDates, dateStr) {
		this.args.onChange?.(selectedDates, dateStr);
	}

	get placeholderText() {
		const { placeholder } = this.args;
		return placeholder ?? t("lbl.datepicker.placeholder");
	}

	<template>
		{{#if this.useWrap}}
			<div
				class={{this.wrapRootClass}}
				{{flatpickrModifier
					options=this.fpOptions
					values=this.syncValue
					onDatesChange=this.handleDatesChange
					disabled=@disabled
					readOnlyInput=@readOnlyInput
				}}
			>
				<UlxInput
					data-input
					@omitDomValue={{true}}
					@id={{@id}}
					@key={{@key}}
					@field={{@field}}
					@size={{@size}}
					@disabled={{@disabled}}
					@readonly={{@readonly}}
					@invalid={{@invalid}}
					@filled={{@filled}}
					@placeholder={{this.placeholderText}}
					@customClass={{@customClass}}
					@ariaDescribedBy={{@ariaDescribedBy}}
					@ariaErrorMessage={{@ariaErrorMessage}}
					@onFocus={{@onFocus}}
					@onBlur={{@onBlur}}
					...attributes
				/>
				{{#if @showIcon}}
					<span class="inputgroup-addon button-addon contents">
						<UlxIconButton
							data-toggle
							@type="button"
							@variant="white"
							@iconLeft="calendar-icon02"
							aria-label={{tHelper "lbl.datepicker.toggle"}}
						/>
					</span>
				{{/if}}
				{{#if @showClearButton}}
					<span class="inputgroup-addon button-addon contents">
						<UlxIconButton
							data-clear
							@type="button"
							@variant="white"
							@iconLeft="close-icon-01"
							aria-label={{tHelper "lbl.datepicker.clear"}}
						/>
					</span>
				{{/if}}
			</div>
		{{else}}
			<UlxInput
				@omitDomValue={{true}}
				@id={{@id}}
				@key={{@key}}
				@field={{@field}}
				@size={{@size}}
				@disabled={{@disabled}}
				@readonly={{@readonly}}
				@invalid={{@invalid}}
				@filled={{@filled}}
				@placeholder={{this.placeholderText}}
				@customClass={{@customClass}}
				@ariaDescribedBy={{@ariaDescribedBy}}
				@ariaErrorMessage={{@ariaErrorMessage}}
				@onFocus={{@onFocus}}
				@onBlur={{@onBlur}}
				{{flatpickrModifier
					options=this.fpOptions
					values=this.syncValue
					onDatesChange=this.handleDatesChange
					disabled=@disabled
					readOnlyInput=@readOnlyInput
				}}
				...attributes
			/>
		{{/if}}
	</template>
}
