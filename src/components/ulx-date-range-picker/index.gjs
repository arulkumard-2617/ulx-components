import Component from "@glimmer/component";
import { action } from "@ember/object";
import { t } from "../../utils/i18n";
import { buildInputGroupClass } from "../../utils/input-util";
import { getComponentClass } from "../../utils/component-config";
import flatpickrModifier from "../../modifiers/flatpickr";
import UlxInput from "../ulx-input/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";

/**
 * Date range field using flatpickr (`mode: "range"`).
 *
 * Timezones: flatpickr works in local wall time. For a fixed zone or UTC, use `@parseDate` and
 * `@formatDate` to convert at the boundary, or pass a plugin via `@flatpickrOptions`.
 *
 * @class UlxDateRangePicker
 * @param {Array<Date|string|null|undefined>} [value] - Tuple `[start, end]` when complete
 * @param {function} [onChange] - `(selectedDates: Date[], dateStr: string) => void`
 * @param {boolean} [showIcon=false]
 * @param {boolean} [showClearButton=false]
 * @param {boolean} [readOnlyInput]
 * @param {boolean} [readonly] - HTML `readonly` on the inner input; when true, wrapped input groups use filled styling.
 * @param {boolean} [enableTime]
 * @param {boolean} [noCalendar]
 * @param {string} [minTime]
 * @param {string} [maxTime]
 * @param {boolean} [time_24hr]
 * @param {string|object} [locale] - Flatpickr locale key or imported locale object
 * @param {number} [minuteIncrement=5] - Minute step when `enableTime` is true
 * @param {number} [hourIncrement=1] - Hour step when `enableTime` is true
 * @param {string} [position='auto'] - Popup position (`auto`, `above`, `below`, etc.)
 * @param {function|function[]} [onDayCreate] - Per-day hook merged with built-in a11y styling
 * @param {object} [flatpickrOptions] - Extra flatpickr config merged last
 * @param {function} [onFocus] - Forwarded to the inner input
 * @param {function} [onBlur] - Forwarded to the inner input
 */
export default class UlxDateRangePicker extends Component {
	get useWrap() {
		const { showIcon = false, showClearButton = false } = this.args;
		return showIcon || showClearButton;
	}

	get fpOptions() {
		const {
			dateFormat = "Y-m-d",
			locale,
			minuteIncrement,
			hourIncrement,
			position,
			onDayCreate,
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
			mode: "range",
			dateFormat,
			locale,
			minuteIncrement,
			hourIncrement,
			position,
			onDayCreate,
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
		return Array.isArray(value) ? value : [];
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
		this.args.onChange?.(selectedDates, dateStr);
	}

	get placeholderText() {
		const { placeholder } = this.args;
		return placeholder ?? t("lbl.daterangepicker.placeholder");
	}

	get flatpickrCalendarSurfaceClass() {
		return getComponentClass("calendar");
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
					calendarSurfaceClass=this.flatpickrCalendarSurfaceClass
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
							@iconLeft="calendar-icon02"
							aria-label={{t "lbl.datepicker.toggle"}}
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
					calendarSurfaceClass=this.flatpickrCalendarSurfaceClass
				}}
				...attributes
			/>
		{{/if}}
	</template>
}
