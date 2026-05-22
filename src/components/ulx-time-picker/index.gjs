import Component from "@glimmer/component";
import { action } from "@ember/object";
import { t } from "../../utils/i18n";
import { buildInputGroupClass } from "../../utils/input-util";
import { getComponentClass } from "../../utils/component-config";
import flatpickrModifier from "../../modifiers/flatpickr";
import {
	hourStringToPickerTimeDate,
	pickerTimeDateToInternalTime
} from "../../utils/picker-datetime";
import UlxInput from "../ulx-input/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";

/**
 * Time-only field using flatpickr (`enableTime` + `noCalendar`).
 *
 * @class UlxTimePicker
 * @param {Date|string|null} [value]
 * @param {function} [onChange] - `(selectedDates: Date[], dateStr: string) => void`
 * @param {'12'|'24'} [hourFormat='24'] - Default for flatpickr `time_24hr` when `time_24hr` is omitted
 * @param {boolean} [time_24hr] - When set, overrides `hourFormat` for flatpickr 24h mode
 * @param {Date|string} [minDate]
 * @param {Date|string} [maxDate]
 * @param {Array} [disable]
 * @param {Array} [enable]
 * @param {boolean} [altInput]
 * @param {string} [altFormat]
 * @param {boolean} [inline]
 * @param {boolean} [weekNumbers]
 * @param {string} [conjunction]
 * @param {boolean} [enableTime=true]
 * @param {boolean} [noCalendar=true]
 * @param {boolean} [showIcon=false]
 * @param {boolean} [showClearButton=false]
 * @param {boolean} [readOnlyInput]
 * @param {boolean} [readonly] - HTML `readonly` on the inner input; when true, wrapped input groups use filled styling.
 * @param {object} [flatpickrOptions] - Extra flatpickr config merged last
 * @param {'body'|'self'|HTMLElement|Function|string} [appendTo='body'] - Calendar mount target (prefer `body`; `self` misaligns because flatpickr uses document coordinates).
 * @param {'window'|HTMLElement|Function|string} [scrollContext] - Scroll container to pin the popup inside (default: nearest `.editor-sc-parent` or scrollable ancestor).
 * @param {function} [onFocus] - Forwarded to the inner input
 * @param {function} [onBlur] - Forwarded to the inner input
 * @param {string|number} [internalTimeValue] - Model time string (e.g. `HHmm`) shown in the picker
 * @param {string} [internalTimeFormat='HHmm'] - Parse/emit format for `@internalTimeValue`
 * @param {boolean} [emitInternalTime=false] - When true, `onChange` receives internal time string in `selectedDates[0]`
 */
export default class UlxTimePicker extends Component {
	get useWrap() {
		const { showIcon = false, showClearButton = false } = this.args;
		return showIcon || showClearButton;
	}

	get fpOptions() {
		const {
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
			defaultDate,
			allowInput,
			parseDate,
			formatDate,
			enableSeconds,
			clickOpens,
			hourFormat = "24",
			appendTo,
			flatpickrOptions = {}
		} = this.args;

		const { appendTo: flatpickrAppendTo, ...flatpickrOptionsRest } = flatpickrOptions;

		const o = {
			mode: "single",
			dateFormat: dateFormat ?? (hourFormat === "12" ? "h:i K" : "H:i"),
			minDate,
			maxDate,
			disable,
			enable,
			altInput,
			altFormat,
			inline,
			weekNumbers,
			enableTime: enableTime ?? true,
			noCalendar: noCalendar ?? true,
			minTime,
			maxTime,
			time_24hr: time_24hr ?? hourFormat === "24",
			conjunction,
			allowInput,
			parseDate,
			formatDate,
			defaultDate,
			clickOpens,
			enableSeconds,
			...flatpickrOptionsRest,
			appendTo: flatpickrAppendTo ?? appendTo ?? "body"
		};

		if (this.useWrap) {
			o.wrap = true;
		}

		return o;
	}

	get syncValue() {
		const { value, internalTimeValue, internalTimeFormat = "HHmm" } = this.args;
		if (internalTimeValue != null && internalTimeValue !== "") {
			return hourStringToPickerTimeDate(internalTimeValue, internalTimeFormat);
		}
		return value ?? null;
	}

	get wrapRootClass() {
		const { size = "m-size", readonly, disabled, invalid, customClass } = this.args;

		const parts = [
			"flatpickr",
			buildInputGroupClass({
				size,
				filled: Boolean(readonly),
				disabled,
				invalid: Boolean(invalid)
			})
		];

		customClass && parts.push(customClass);

		return parts.filter(Boolean).join(" ");
	}

	@action
	handleDatesChange(selectedDates, dateStr) {
		const { emitInternalTime, internalTimeFormat = "HHmm", onChange } = this.args;
		if (!onChange) {
			return;
		}

		const selectedTime = selectedDates?.[0];
		if (emitInternalTime && selectedTime) {
			onChange(
				[pickerTimeDateToInternalTime(selectedTime, internalTimeFormat)],
				dateStr
			);
			return;
		}

		onChange(selectedDates, dateStr);
	}

	get placeholderText() {
		const { placeholder } = this.args;
		return placeholder ?? t("lbl.timepicker.placeholder");
	}

	get flatpickrTimePickerSurfaceClass() {
		return getComponentClass("timepicker");
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
					scrollContext=@scrollContext
					calendarSurfaceClass=this.flatpickrTimePickerSurfaceClass
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
					@placeholder={{this.placeholderText}}
					@customClass={{@customClass}}
					@ariaDescribedBy={{@ariaDescribedBy}}
					@ariaErrorMessage={{@ariaErrorMessage}}
					@onFocus={{@onFocus}}
					@onBlur={{@onBlur}}
					...attributes
				/>
				{{#if @showIcon}}
					<span class="inputgroup-addon button-addon">
						<UlxIconButton
							data-toggle
							@type="button"
							@variant="white"
							@iconSize="s18"
							@customClass="timepicker-action"
							@iconLeft="time-icon"
							aria-label={{t "lbl.timepicker.toggle"}}
						/>
					</span>
				{{/if}}
				{{#if @showClearButton}}
					<span class="inputgroup-addon button-addon">
						<UlxIconButton
							data-clear
							@type="button"
							@variant="white"
							@iconLeft="close-icon-01"
							@customClass="timepicker-action"
							aria-label={{t "lbl.datepicker.clear"}}
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
					scrollContext=@scrollContext
					calendarSurfaceClass=this.flatpickrTimePickerSurfaceClass
				}}
				...attributes
			/>
		{{/if}}
	</template>
}
