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
 * Single- or multi-date field using flatpickr (popup or inline).
 *
 * Timezones: flatpickr works in local wall time. For a fixed zone or UTC, use `@parseDate` and
 * `@formatDate` to convert at the boundary, or pass a plugin via `@flatpickrOptions`.
 *
 * @class UlxDatePicker
 * @param {Date|string|null} [value] - Selected date (single) or use `values` shape via value for multiple
 * @param {function} [onChange] - `(selectedDates: Date[], dateStr: string) => void`
 * @param {'single'|'multiple'} [mode='single']
 * @param {boolean} [showIcon=false]
 * @param {string} [triggerIcon='calendar-icon02'] - Icon name for the trigger button (only used when `showIcon` is true)
 * @param {boolean} [showClearButton=false]
 * @param {boolean} [readOnlyInput]
 * @param {boolean} [readonly] - HTML `readonly` on the inner input; when true, wrapped input groups use filled styling.
 * @param {string|object} [locale] - Flatpickr locale key or imported locale object (e.g. from `flatpickr/dist/l10n/...`)
 * @param {number} [minuteIncrement=5] - Minute step when `enableTime` is true
 * @param {number} [hourIncrement=1] - Hour step when `enableTime` is true
 * @param {string} [position='auto'] - Popup position (`auto`, `above`, `below`, `top`, `bottom`, `auto left`, etc.)
 * @param {function|function[]} [onDayCreate] - Per-day hook merged with built-in a11y styling
 * @param {object} [flatpickrOptions] - Extra flatpickr config merged last (hooks, plugins, etc.)
 * @param {'body'|'self'|HTMLElement|Function|string} [appendTo='body'] - Calendar mount target (prefer `body`; `self` misaligns because flatpickr uses document coordinates).
 * @param {'window'|HTMLElement|Function|string} [scrollContext] - Scroll container to pin the popup inside (default: nearest `.editor-sc-parent` or scrollable ancestor).
 * @param {function} [onFocus] - Forwarded to the inner input
 * @param {function} [onBlur] - Forwarded to the inner input
 *
 * Popup mode: Tab focuses the input without opening the calendar; use a pointer click, Enter when typing is disabled, ArrowDown when typing is enabled (`allowInput`), or the calendar trigger button when shown.
 * @param {string} [timezone] - IANA zone; converts `@value` / bounds to wall calendar dates for flatpickr
 * @param {string|number} [preserveTime] - Internal time (e.g. `HHmm`) combined with selected day on change when `@timezone` is set
 * @param {string} [preserveTimeFormat='HHmm'] - Parse format for `@preserveTime`
 */
export default class UlxDatePicker extends Component {
	get mode() {
		return this.args.mode ?? "single";
	}

	/**
	 * Flatpickr expects `above`/`below`. Consumers commonly pass `top`/`bottom`
	 * (and sometimes with alignment like `top left` / `top-left`), so normalize
	 * those synonyms to keep popup positioning + arrow classes consistent.
	 *
	 * @param {unknown} position
	 * @returns {unknown}
	 */
	normalizePosition(position) {
		if (typeof position !== "string") {
			return position;
		}

		// Normalize separators so `top-left` behaves like `top left`.
		const normalized = position.trim().replace(/-/g, " ");

		// Replace only whole words to avoid touching values like `auto`/`left`.
		return normalized
			.replace(/\btop\b/g, "above")
			.replace(/\bbottom\b/g, "below")
			.replace(/\s+/g, " ")
			.trim();
	}

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
			appendTo,
			flatpickrOptions = {}
		} = this.args;

		const { appendTo: flatpickrAppendTo, ...flatpickrOptionsRest } = flatpickrOptions;
		const normalizedPosition = this.normalizePosition(position);

		const o = {
			mode: this.mode,
			dateFormat: resolveFlatpickrDateFormat(dateFormat),
			locale,
			minuteIncrement,
			hourIncrement,
			position: normalizedPosition,
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
			appendTo: flatpickrAppendTo ?? appendTo ?? "body"
		};

		if (this.useWrap) {
			o.wrap = true;
		}

		return o;
	}

	get syncValue() {
		const { value, timezone } = this.args;
		if (this.mode === "multiple") {
			if (timezone) {
				const source = Array.isArray(value) ? value : [];
				return source
					.map((entry) => coercePickerWallDate(entry, timezone))
					.filter((entry) => entry != null);
			}
			return Array.isArray(value) ? value : [];
		}
		if (timezone) {
			return coercePickerWallDate(value, timezone);
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
		const { timezone, preserveTime, preserveTimeFormat = "HHmm", onChange } = this.args;
		if (!onChange) {
			return;
		}

		const selectedWallDate = selectedDates?.[0];
		if (
			timezone &&
			preserveTime != null &&
			preserveTime !== "" &&
			selectedWallDate
		) {
			const zoned = zonedDateFromPickerDay(
				selectedWallDate,
				preserveTime,
				timezone,
				preserveTimeFormat
			);
			onChange([zoned.toDate()], dateStr);
			return;
		}

		onChange(selectedDates, dateStr);
	}

	get triggerIcon() {
		return this.args.triggerIcon ?? "calendar-icon02";
	}

	get placeholderText() {
		const { placeholder } = this.args;
		return placeholder ?? t("lbl.datepicker.placeholder");
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
					scrollContext=@scrollContext
					suppressOpenOnFocus=true
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
					<span class="inputgroup-addon icon-addon">
						<UlxIconButton
							data-toggle
							@type="button"
							@variant="white"
							@iconLeft={{this.triggerIcon}}
							aria-label={{t "lbl.datepicker.toggle"}}
						/>
					</span>
				{{/if}}
				{{#if @showClearButton}}
					<span class="inputgroup-addon icon-addon">
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
					scrollContext=@scrollContext
					suppressOpenOnFocus=true
					calendarSurfaceClass=this.flatpickrCalendarSurfaceClass
				}}
				...attributes
			/>
		{{/if}}
	</template>
}
