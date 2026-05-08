import Component from "@glimmer/component";
import { action } from "@ember/object";
import { t } from "../../utils/i18n";
import { buildInputGroupClass } from "../../utils/input-util";
import flatpickrModifier from "../../modifiers/flatpickr";
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
 * @param {boolean} [showPopupHeader=true] - When true, injects title + hour-format hint into the flatpickr popup (time-only mode)
 * @param {boolean} [showHourFormatTag=false] - When true, shows the hour-format tag (e.g. 24H/12H) in the popup header
 * @param {string} [popupTitle] - Overrides default popup title (otherwise i18n `lbl.timepicker.placeholder`)
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
 * @param {object} [flatpickrOptions] - Extra flatpickr config merged last (`onReady` is chained with header injection)
 * @param {function} [onFocus] - Forwarded to the inner input
 * @param {function} [onBlur] - Forwarded to the inner input
 */
export default class UlxTimePicker extends Component {
	get useWrap() {
		const { showIcon = false, showClearButton = false } = this.args;
		return showIcon || showClearButton;
	}

	get popupTitleText() {
		const { popupTitle } = this.args;
		return popupTitle ?? t("lbl.timepicker.placeholder");
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
			flatpickrOptions = {}
		} = this.args;

		const { onReady: userOnReady, ...flatpickrRest } = flatpickrOptions;

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
			...flatpickrRest,
			onReady: (selectedDates, dateStr, fpInst) => {
				userOnReady?.(selectedDates, dateStr, fpInst);
				this.injectTimePickerHeader(fpInst);
			}
		};

		if (this.useWrap) {
			o.wrap = true;
		}

		return o;
	}

	get syncValue() {
		return this.args.value ?? null;
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

	@action
	injectTimePickerHeader(fpInst) {
		const { showPopupHeader = true, showHourFormatTag = false } = this.args;

		if (!showPopupHeader || !fpInst?.calendarContainer) {
			return;
		}

		const cfg = fpInst.config;
		if (!cfg?.enableTime || !cfg?.noCalendar) {
			return;
		}

		const container = fpInst.calendarContainer;
		if (container.querySelector(".time-picker-header")) {
			return;
		}

		const tagText = cfg.time_24hr ? t("lbl.timepicker.format24") : t("lbl.timepicker.format12");

		const header = document.createElement("div");
		header.className = "time-picker-header";

		const title = document.createElement("div");
		title.className = "time-picker-field-label";
		title.textContent = this.popupTitleText;

		header.appendChild(title);

		if (showHourFormatTag) {
			const hourFormatRow = document.createElement("div");
			hourFormatRow.className = "hour-format";

			const tag = document.createElement("span");
			tag.className = "hour-format-tag";
			tag.textContent = tagText;

			hourFormatRow.appendChild(tag);
			header.appendChild(hourFormatRow);
		}

		container.insertBefore(header, container.firstChild);
	}

	get placeholderText() {
		const { placeholder } = this.args;
		return placeholder ?? t("lbl.timepicker.placeholder");
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
				}}
				...attributes
			/>
		{{/if}}
	</template>
}
