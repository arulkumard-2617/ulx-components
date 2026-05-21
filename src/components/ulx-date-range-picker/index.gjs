import Component from "@glimmer/component";
import { action } from "@ember/object";
import { t } from "../../utils/i18n";
import { buildInputGroupClass } from "../../utils/input-util";
import { getComponentClass } from "../../utils/component-config";
import flatpickrModifier from "../../modifiers/flatpickr";
import {
	resolveFlatpickrDateFormat,
	coercePickerWallDate,
	buildPickerSyncDates,
	zonedDateFromPickerDay
} from "../../utils/picker-datetime";
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
 * @param {boolean} [showStartDateOnly=false] - When true, the input displays only the selected range start date.
 * @param {boolean} [showEndDateOnly=false] - When true, the input displays only the selected range end date. Do not set both with true.
 * @param {boolean} [allowSelectRange=true] - When false, keeps range calendar UI but only one date may be chosen per open (use with `@showStartDateOnly` / `@showEndDateOnly` for split pickers).
 * @param {boolean} [oneClickClose=false] - When true with `@allowSelectRange`, closes after the first date click.
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
 * @param {'body'|'self'|HTMLElement|Function|string} [appendTo='body'] - Calendar mount target (prefer `body`; `self` misaligns because flatpickr uses document coordinates).
 * @param {'window'|HTMLElement|Function|string} [scrollContext] - Scroll container to pin the popup inside (default: nearest `.editor-sc-parent` or scrollable ancestor).
 * @param {function} [onFocus] - Forwarded to the inner input
 * @param {function} [onBlur] - Forwarded to the inner input
 * @param {string} [timezone] - IANA zone; converts `@value` / bounds to wall calendar dates for flatpickr
 * @param {{ start: Date|import('moment').Moment, end: Date|import('moment').Moment }|Array} [range] - Full event range for calendar highlighting when `@value` is a single bound (split start/end fields)
 * @param {string|number} [preserveTime] - Internal time combined with the selected range day on change when `@timezone` is set
 * @param {string} [preserveTimeFormat='HHmm'] - Parse format for `@preserveTime`
 */
export default class UlxDateRangePicker extends Component {
	get useWrap() {
		const { showIcon = false, showClearButton = false } = this.args;
		return showIcon || showClearButton;
	}

	get allowSelectRange() {
		return this.args.allowSelectRange !== false;
	}

	get boundRangeValue() {
		const { value } = this.args;
		return Array.isArray(value) ? value : [];
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
			oneClickClose = false,
			appendTo,
			flatpickrOptions = {}
		} = this.args;

		const {
			onChange: flatpickrOnChange,
			mode: flatpickrModeOverride,
			appendTo: flatpickrAppendTo,
			...flatpickrOptionsRest
		} = flatpickrOptions;

		const o = {
			dateFormat: resolveFlatpickrDateFormat(dateFormat),
			locale,
			minuteIncrement,
			hourIncrement,
			position,
			onDayCreate,
			minDate: coercePickerWallDate(minDate, this.args.timezone),
			maxDate: coercePickerWallDate(maxDate, this.args.timezone),
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
			...flatpickrOptionsRest,
			appendTo: flatpickrAppendTo ?? appendTo ?? "body",
			mode: flatpickrModeOverride ?? "range",
			onChange: (selectedDates, dateStr, instance) => {
				flatpickrOnChange?.(selectedDates, dateStr, instance);

				const selectedCount = selectedDates?.length ?? 0;
				if (!selectedCount || !instance) {
					return;
				}

				if (!this.allowSelectRange) {
					const normalizedRange = this.normalizeOutgoingRange(selectedDates);

					if (normalizedRange?.length) {
						instance.setDate(normalizedRange, false);
					}

					instance.close();
					return;
				}

				if (oneClickClose && instance.close) {
					instance.close();
				}
			}
		};

		if (this.useWrap) {
			o.wrap = true;
		}

		return o;
	}

	get syncValue() {
		return this.boundRangeValue;
	}

	@action
	formatDisplayValue(selectedDates, pickerInstance) {
		const displayFormat = pickerInstance.config.altInput
			? pickerInstance.config.altFormat
			: pickerInstance.config.dateFormat;

		if (this.args.showStartDateOnly === true) {
			const startDate = selectedDates?.[0];

			if (!startDate) {
				return "";
			}
			return pickerInstance.formatDate(startDate, displayFormat);
		}

		if (this.args.showEndDateOnly === true) {
			const endDate = selectedDates?.[1];
			if (!endDate) {
				return "";
			}
			return pickerInstance.formatDate(endDate, displayFormat);
		}

		return null;
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

	normalizeOutgoingRange(selectedDates) {
		if (this.allowSelectRange) {
			return selectedDates;
		}

		const rangeValue = this.boundRangeValue;
		const selectedCount = selectedDates?.length ?? 0;

		if (!selectedCount) {
			return selectedDates;
		}

		if (this.args.showStartDateOnly === true) {
			const nextStartDate = selectedDates[0];
			return [nextStartDate, rangeValue[1] ?? nextStartDate];
		}

		if (this.args.showEndDateOnly === true) {
			const nextEndDate =
				selectedCount >= 2 ? selectedDates[1] : selectedDates[0];
			return [rangeValue[0] ?? nextEndDate, nextEndDate];
		}

		return selectedDates;
	}

	@action
	handleDatesChange(selectedDates, dateStr) {
		this.args.onChange?.(this.normalizeOutgoingRange(selectedDates), dateStr);
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
					formatDisplayValue=this.formatDisplayValue
					disabled=@disabled
					readOnlyInput=@readOnlyInput
					scrollContext=@scrollContext
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
					formatDisplayValue=this.formatDisplayValue
					disabled=@disabled
					readOnlyInput=@readOnlyInput
					scrollContext=@scrollContext
					calendarSurfaceClass=this.flatpickrCalendarSurfaceClass
				}}
				...attributes
			/>
		{{/if}}
	</template>
}
