import * as momentNamespace from 'moment';

/**
 * Resolves moment from the host bundle (CJS/ESM interop differs between Rollup and Webpack).
 *
 * @returns {typeof import('moment').default}
 */
function resolveMoment() {
	if (typeof momentNamespace === 'function') {
		return momentNamespace;
	}

	const candidate = momentNamespace.default ?? momentNamespace;

	if (typeof candidate === 'function') {
		return candidate;
	}

	if (candidate && typeof candidate.default === 'function') {
		return candidate.default;
	}

	throw new Error(
		'ulx-components picker-datetime requires moment (install moment in the host app)'
	);
}

const moment = resolveMoment();

const MOMENT_DATE_FORMAT_TOKENS = /YYYY|DD|MMM/;

/**
 * Converts a moment display pattern to flatpickr `dateFormat` tokens.
 *
 * @param {string} momentPattern - e.g. `MMM DD, YYYY`
 * @returns {string}
 */
export function momentPatternToFlatpickrFormat(momentPattern) {
	if (!momentPattern || typeof momentPattern !== 'string') {
		return '';
	}

	return momentPattern.replace('YYYY', 'Y').replace('DD', 'd').replace('MMM', 'M');
}

/**
 * Accepts Moment or flatpickr date format strings; returns flatpickr tokens.
 *
 * @param {string} [dateFormat]
 * @param {string} [fallback='Y-m-d']
 * @returns {string}
 */
export function resolveFlatpickrDateFormat(dateFormat, fallback = 'Y-m-d') {
	if (!dateFormat || typeof dateFormat !== 'string') {
		return fallback;
	}

	if (MOMENT_DATE_FORMAT_TOKENS.test(dateFormat)) {
		return momentPatternToFlatpickrFormat(dateFormat) || fallback;
	}

	return dateFormat;
}

/**
 * Calendar-only local `Date` (year/month/day) for flatpickr, from an instant in `timezone`.
 *
 * @param {Date|import('moment').Moment|unknown} dateValue
 * @param {string} [timezone]
 * @returns {Date|null}
 */
export function wallCalendarDateInZone(dateValue, timezone) {
	if (!dateValue) {
		return null;
	}

	const wallDate =
		timezone && moment(dateValue).tz ? moment(dateValue).tz(timezone) : moment(dateValue);

	return new Date(wallDate.year(), wallDate.month(), wallDate.date());
}

/**
 * Normalizes a bound for flatpickr (`minDate` / `maxDate` / single `value`).
 *
 * @param {unknown} dateValue
 * @param {string} [timezone]
 * @returns {Date|undefined|null}
 */
export function coercePickerWallDate(dateValue, timezone) {
	if (dateValue === undefined || dateValue === null) {
		return dateValue ?? null;
	}

	if (timezone) {
		return wallCalendarDateInZone(dateValue, timezone);
	}

	if (dateValue instanceof Date) {
		return dateValue;
	}

	const coerced = new Date(dateValue);
	return Number.isNaN(coerced.getTime()) ? null : coerced;
}

/**
 * Normalizes a range bound from `{ start, end }` or `[start, end]`.
 *
 * @param {unknown} range
 * @returns {{ start: unknown, end: unknown } | null}
 */
export function normalizePickerRange(range) {
	if (range == null) {
		return null;
	}

	if (Array.isArray(range)) {
		if (range.length === 0) {
			return null;
		}
		return { start: range[0], end: range[1] ?? range[0] };
	}

	if (typeof range === 'object') {
		const { start, end } = range;
		if (start == null && end == null) {
			return null;
		}
		return { start: start ?? end, end: end ?? start };
	}

	return null;
}

/**
 * Builds flatpickr `values` for single or range pickers when `@timezone` is set.
 *
 * @param {Date|import('moment').Moment|unknown|Array<unknown>} value
 * @param {string} [timezone]
 * @param {{ range?: unknown }} [options]
 * @returns {Date[]}
 */
export function buildPickerSyncDates(value, timezone, options = {}) {
	const { range } = options;
	const normalizedRange = normalizePickerRange(range);

	if (normalizedRange) {
		const startWall = timezone
			? wallCalendarDateInZone(normalizedRange.start, timezone)
			: coercePickerWallDate(normalizedRange.start);
		const endWall = timezone
			? wallCalendarDateInZone(normalizedRange.end, timezone)
			: coercePickerWallDate(normalizedRange.end);

		if (startWall && endWall) {
			return [startWall, endWall];
		}
		if (startWall) {
			return [startWall];
		}
		if (endWall) {
			return [endWall];
		}
		return [];
	}

	if (Array.isArray(value)) {
		return value
			.map((entry) =>
				timezone ? wallCalendarDateInZone(entry, timezone) : coercePickerWallDate(entry)
			)
			.filter((entry) => entry != null);
	}

	const wall = timezone ? wallCalendarDateInZone(value, timezone) : coercePickerWallDate(value);
	return wall ? [wall] : [];
}

/**
 * Combines a flatpickr-selected calendar day with an existing time string in `timezone`.
 * Mirrors `commons/utils/date` `setTzTimeToDate`.
 *
 * @param {Date} selectedDate - Calendar day from flatpickr / date UI
 * @param {string|unknown} existingTime - Internal time string (default parse `HHmm`)
 * @param {string} timezone - IANA zone id
 * @param {string} [timeParseFormat='HHmm']
 * @returns {import('moment').Moment}
 */
export function zonedDateFromPickerDay(
	selectedDate,
	existingTime,
	timezone,
	timeParseFormat = 'HHmm'
) {
	const selectedMoment = moment.tz(
		moment(selectedDate).format('YYYY-MM-DD'),
		'YYYY-MM-DD',
		timezone
	);

	const timeMoment = moment.tz(existingTime, timeParseFormat, timezone);
	const tzDate = moment.tz(selectedMoment, timezone);

	tzDate.hour(timeMoment.hour());
	tzDate.minute(timeMoment.minute());

	return tzDate;
}

/**
 * Internal hour string → `Date` for `UlxTimePicker` / flatpickr time-only.
 *
 * @param {string|number|unknown} timeValue
 * @param {string} [timeParseFormat='HHmm']
 * @returns {Date|null}
 */
export function hourStringToPickerTimeDate(timeValue, timeParseFormat = 'HHmm') {
	if (timeValue === undefined || timeValue === null || timeValue === '') {
		return null;
	}

	const normalizedTimeValue = `${timeValue}`.padStart(4, '0');
	const timeMoment = moment(normalizedTimeValue, timeParseFormat);

	return new Date(1970, 0, 1, timeMoment.hour(), timeMoment.minute());
}

/**
 * Flatpickr wall time → internal hour string.
 *
 * @param {Date} dateValue
 * @param {string} [timeFormat='HHmm']
 * @returns {string}
 */
export function pickerTimeDateToInternalTime(dateValue, timeFormat = 'HHmm') {
	return moment(dateValue).format(timeFormat);
}
