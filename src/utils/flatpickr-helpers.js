/**
 * Normalize parent-provided value(s) into Date instances for flatpickr.setDate.
 *
 * @param {unknown} value - Date, ISO string, timestamp, or array for multiple/range
 * @param {'single'|'multiple'|'range'} mode
 * @returns {Date[]}
 */
export function normalizeSelectedDates(value, mode) {
	if (value === undefined || value === null || value === '') {
		return [];
	}

	if (mode === 'multiple') {
		if (!Array.isArray(value)) return [];
		return value
			.map((v) => coerceToDate(v))
			.filter((d) => d && !Number.isNaN(d.getTime()));
	}

	if (mode === 'range') {
		if (!Array.isArray(value) || value.length === 0) return [];
		const start = coerceToDate(value[0]);
		if (!start || Number.isNaN(start.getTime())) return [];
		if (value.length === 1) return [start];
		const end = coerceToDate(value[1]);
		if (!end || Number.isNaN(end.getTime())) return [start];
		return [start, end];
	}

	const d = coerceToDate(Array.isArray(value) ? value[0] : value);
	return d && !Number.isNaN(d.getTime()) ? [d] : [];
}

function coerceToDate(v) {
	if (v instanceof Date) return v;
	if (typeof v === 'number') return new Date(v);
	if (typeof v === 'string') return new Date(v);
	return null;
}

/**
 * @param {Date[]} a
 * @param {Date[]} b
 * @param {'single'|'multiple'|'range'} mode
 */
export function selectedDatesEqual(a, b, mode) {
	if (!a?.length && !b?.length) return true;
	if (!a?.length || !b?.length) return false;
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (a[i].getTime() !== b[i].getTime()) return false;
	}
	return true;
}
