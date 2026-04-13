/**
 * UlxTable utilities — client-side sort, filter, paginate, state persistence, and helpers.
 */

// ─── Column helpers ──────────────────────────────────────────────────────────

/**
 * Returns true for special (non-data) columns: selection, expander, rowReorder, rowEditor.
 * Use instead of repeating the guard check across table sub-components.
 */
export function isSpecialColumn(col) {
	return !!(col.selectionMode || col.expander || col.rowReorder || col.rowEditor);
}

// ─── Field value ─────────────────────────────────────────────────────────────

/**
 * Reads a potentially dot-notated field path from an object.
 * e.g. getFieldValue(row, 'address.city')
 */
export function getFieldValue(row, field) {
	if (!field || row == null) return undefined;
	const parts = String(field).split('.');
	let val = row;
	for (const part of parts) {
		if (val == null) return undefined;
		val = val[part];
	}
	return val;
}

// ─── Sort ─────────────────────────────────────────────────────────────────────

export function compareValues(a, b) {
	if (a == null && b == null) return 0;
	if (a == null) return -1;
	if (b == null) return 1;
	if (typeof a === 'string' && typeof b === 'string') {
		return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
	}
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
}

/**
 * Single-field client-side sort.
 * @param {Array} items
 * @param {string} sortField
 * @param {1|-1} sortOrder  1 = asc, -1 = desc
 * @returns {Array} new sorted array
 */
export function sortItems(items, sortField, sortOrder = 1) {
	if (!items || !sortField) return items ?? [];
	return [...items].sort((a, b) => {
		const va = getFieldValue(a, sortField);
		const vb = getFieldValue(b, sortField);
		return compareValues(va, vb) * sortOrder;
	});
}

/**
 * Multi-column client-side sort.
 * @param {Array} items
 * @param {Array<{field: string, order: 1|-1}>} multiSortMeta
 * @returns {Array} new sorted array
 */
export function multiSortItems(items, multiSortMeta) {
	if (!items) return [];
	if (!multiSortMeta || !multiSortMeta.length) return items;
	return [...items].sort((a, b) => {
		for (const { field, order = 1 } of multiSortMeta) {
			const va = getFieldValue(a, field);
			const vb = getFieldValue(b, field);
			const cmp = compareValues(va, vb) * order;
			if (cmp !== 0) return cmp;
		}
		return 0;
	});
}

// ─── Filter ───────────────────────────────────────────────────────────────────

const MATCH_MODES = {
	contains: (val, filter) =>
		String(val ?? '')
			.toLowerCase()
			.includes(String(filter ?? '').toLowerCase()),
	notContains: (val, filter) =>
		!String(val ?? '')
			.toLowerCase()
			.includes(String(filter ?? '').toLowerCase()),
	startsWith: (val, filter) =>
		String(val ?? '')
			.toLowerCase()
			.startsWith(String(filter ?? '').toLowerCase()),
	endsWith: (val, filter) =>
		String(val ?? '')
			.toLowerCase()
			.endsWith(String(filter ?? '').toLowerCase()),
	equals: (val, filter) => String(val ?? '').toLowerCase() === String(filter ?? '').toLowerCase(),
	notEquals: (val, filter) =>
		String(val ?? '').toLowerCase() !== String(filter ?? '').toLowerCase(),
	in: (val, filter) => Array.isArray(filter) && filter.includes(val),
	notIn: (val, filter) => Array.isArray(filter) && !filter.includes(val),
	lt: (val, filter) => Number(val) < Number(filter),
	lte: (val, filter) => Number(val) <= Number(filter),
	gt: (val, filter) => Number(val) > Number(filter),
	gte: (val, filter) => Number(val) >= Number(filter),
	between: (val, filter) =>
		Array.isArray(filter) && Number(val) >= Number(filter[0]) && Number(val) <= Number(filter[1]),
	dateIs: (val, filter) => new Date(val).toDateString() === new Date(filter).toDateString(),
	dateIsNot: (val, filter) => new Date(val).toDateString() !== new Date(filter).toDateString(),
	dateBefore: (val, filter) => new Date(val) < new Date(filter),
	dateAfter: (val, filter) => new Date(val) > new Date(filter)
};

function matchesConstraint(cellValue, constraint) {
	const { value, matchMode = 'contains' } = constraint;
	if (value == null || value === '' || (Array.isArray(value) && value.length === 0)) return true;
	const fn = MATCH_MODES[matchMode];
	return fn ? fn(cellValue, value) : true;
}

/**
 * Client-side filter.
 * @param {Array} items
 * @param {Object} filters  key = field or 'global'; value = { value, matchMode } or { operator, constraints: [] }
 * @param {string[]} [globalFilterFields]
 * @returns {Array}
 */
export function filterItems(items, filters, globalFilterFields) {
	if (!items) return [];
	if (!filters || !Object.keys(filters).length) return items;

	return items.filter((row) => {
		for (const [key, filterMeta] of Object.entries(filters)) {
			if (key === 'global') {
				const globalValue = filterMeta?.value;
				if (!globalValue) continue;
				const matchMode = filterMeta?.matchMode ?? 'contains';
				const fields = globalFilterFields ?? [];
				const matched = fields.some((f) => {
					const cellValue = getFieldValue(row, f);
					return matchesConstraint(cellValue, { value: globalValue, matchMode });
				});
				if (!matched) return false;
				continue;
			}

			if (!filterMeta) continue;

			// Advanced: { operator, constraints }
			if (filterMeta.constraints) {
				const { operator = 'and', constraints } = filterMeta;
				const valid = constraints.filter((c) => c.value != null && c.value !== '');
				if (!valid.length) continue;
				const cellValue = getFieldValue(row, key);
				const results = valid.map((c) => matchesConstraint(cellValue, c));
				const pass = operator === 'or' ? results.some(Boolean) : results.every(Boolean);
				if (!pass) return false;
			} else {
				// Simple: { value, matchMode }
				const v = filterMeta.value;
				if (v == null || v === '' || (Array.isArray(v) && v.length === 0)) continue;
				const cellValue = getFieldValue(row, key);
				if (!matchesConstraint(cellValue, filterMeta)) return false;
			}
		}
		return true;
	});
}

// ─── Pagination ───────────────────────────────────────────────────────────────

/**
 * Slice items for a single page.
 */
export function paginateItems(items, first, rows) {
	if (!items) return [];
	if (!rows || rows <= 0) return items;
	return items.slice(first, first + rows);
}

/**
 * Runs the table processing pipeline in fixed order:
 * filter -> sort -> paginate.
 */
export function processAndPaginateData({
	rawData,
	lazy = false,
	filters = {},
	globalFilterFields = [],
	sortMode = 'single',
	sortField = null,
	sortOrder = 1,
	multiSortMeta = [],
	paginator = false,
	first = 0,
	rows = 10
}) {
	if (lazy) {
		return {
			processedData: rawData ?? [],
			pagedData: rawData ?? []
		};
	}

	let processedData = rawData ?? [];
	if (Object.keys(filters).length > 0) {
		processedData = filterItems(processedData, filters, globalFilterFields);
	}

	if (sortMode === 'multiple') {
		if (multiSortMeta?.length) {
			processedData = multiSortItems(processedData, multiSortMeta);
		}
	} else if (sortField) {
		processedData = sortItems(processedData, sortField, sortOrder);
	}

	const pagedData = paginator ? paginateItems(processedData, first, rows) : processedData;
	return { processedData, pagedData };
}

export function resolveGlobalFilterFields(allColumns = [], globalFilterFields) {
	if (Array.isArray(globalFilterFields) && globalFilterFields.length > 0) {
		return globalFilterFields;
	}
	return allColumns
		.filter((column) => column.field && !isSpecialColumn(column))
		.map((column) => column.filterField ?? column.field);
}

// ─── State persistence ────────────────────────────────────────────────────────

export function saveTableState(key, storage = 'session', state) {
	if (!key) return;
	try {
		const store = storage === 'local' ? localStorage : sessionStorage;
		store.setItem(key, JSON.stringify(state));
	} catch {
		// noop
	}
}

export function loadTableState(key, storage = 'session') {
	if (!key) return null;
	try {
		const store = storage === 'local' ? localStorage : sessionStorage;
		const raw = store.getItem(key);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}

export function resolvePersistenceStorage(stateStorage, moduleName, stateKey) {
	if (stateStorage) return stateStorage;
	return moduleName && !stateKey ? 'local' : 'session';
}

export function saveColumnWidths(key, widths) {
	if (!key) return;
	try {
		sessionStorage.setItem(`${key}_widths`, JSON.stringify(widths));
	} catch {
		// noop
	}
}

export function loadColumnWidths(key) {
	if (!key) return null;
	try {
		const raw = sessionStorage.getItem(`${key}_widths`);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}

// ─── CSV export ───────────────────────────────────────────────────────────────

/**
 * Export visible data as CSV.
 * @param {Array} columns  column defs (needs field + header)
 * @param {Array} data  rows
 * @param {string} filename
 */
export function exportCSV(columns, data, filename = 'export.csv') {
	const exportCols = columns.filter((c) => c.field && !isSpecialColumn(c));
	const headers = exportCols.map((c) => JSON.stringify(String(c.header ?? c.field ?? '')));
	const rows = data.map((row) =>
		exportCols.map((c) => JSON.stringify(String(getFieldValue(row, c.field) ?? ''))).join(',')
	);
	const csv = [headers.join(','), ...rows].join('\n');
	const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.setAttribute('href', url);
	link.setAttribute('download', filename);
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}

// ─── Sort string parser ───────────────────────────────────────────────────────

/**
 * Parses a "field:asc" / "field:desc" sort string into { field, order }.
 * Returns { field: null, order: 1 } for empty/invalid input.
 */
export function parseSortBy(sortByStr) {
	if (!sortByStr || typeof sortByStr !== 'string') return { field: null, order: 1 };
	const [field, dir] = sortByStr.split(':');
	return { field: field || null, order: dir === 'desc' ? -1 : 1 };
}

/**
 * Formats sort state to "field:asc|desc".
 * Returns empty string when field is missing.
 */
export function formatSortBy(field, order = 1) {
	if (!field) return '';
	return `${field}:${order === -1 ? 'desc' : 'asc'}`;
}

/**
 * Computes the next single-sort state for a clicked field.
 */
export function getNextSingleSortState({
	currentField,
	currentOrder = 1,
	nextField,
	removableSort = false
}) {
	if (currentField !== nextField) {
		return { sortField: nextField, sortOrder: 1, cleared: false };
	}

	if (currentOrder === 1) {
		return { sortField: nextField, sortOrder: -1, cleared: false };
	}

	if (removableSort) {
		return { sortField: null, sortOrder: 1, cleared: true };
	}

	return { sortField: nextField, sortOrder: 1, cleared: false };
}

/**
 * Computes the next multi-sort meta list for a clicked field.
 */
export function getNextMultiSortMeta(multiSortMeta = [], field, removableSort = false) {
	const next = [...multiSortMeta];
	const idx = next.findIndex((meta) => meta.field === field);

	if (idx === -1) {
		next.push({ field, order: 1 });
		return next;
	}

	if (next[idx].order === 1) {
		next[idx] = { field, order: -1 };
		return next;
	}

	if (removableSort) {
		next.splice(idx, 1);
		return next;
	}

	next[idx] = { field, order: 1 };
	return next;
}

/**
 * Builds "in" filter metadata from checkbox selections.
 * Returns null when selections are empty.
 */
export function buildInFilterMeta(values) {
	if (!Array.isArray(values) || values.length === 0) return null;
	return { value: values, matchMode: 'in' };
}

/**
 * Applies one selection group into a filters object.
 */
export function applySelectionToFilters(filters, field, values) {
	const updated = { ...filters };
	const meta = buildInFilterMeta(values);
	if (meta) updated[field] = meta;
	else delete updated[field];
	return updated;
}

/**
 * Applies multiple selection groups into a filters object.
 */
export function applySelectionMapToFilters(filters, selections = {}) {
	let updated = { ...filters };
	for (const [field, values] of Object.entries(selections)) {
		updated = applySelectionToFilters(updated, field, values);
	}
	return updated;
}

/**
 * Computes visible columns from optional persisted field set.
 */
export function resolveVisibleColumns(allColumns = [], visibleFields = null) {
	if (!visibleFields) return allColumns;
	return allColumns.filter((column) => {
		if (isSpecialColumn(column)) return true;
		if (column.manageable === false) return true;
		return visibleFields.has(column.field);
	});
}

/**
 * Applies persisted order to a visible-column list.
 */
export function resolveOrderedColumns(visibleColumns = [], persistedOrder = null) {
	if (!persistedOrder) return visibleColumns;
	const orderedFields = persistedOrder.map((column) => column?.field).filter(Boolean);
	const fieldIndex = new Map(orderedFields.map((field, index) => [field, index]));
	return [...visibleColumns].sort((a, b) => {
		const ia = fieldIndex.get(a.field);
		const ib = fieldIndex.get(b.field);
		if (ia == null && ib == null) return 0;
		if (ia == null) return 1;
		if (ib == null) return -1;
		return ia - ib;
	});
}

/**
 * Rehydrates persisted column order against current column set.
 */
export function rehydrateColumnOrder(allColumns = [], persistedFields = []) {
	if (!Array.isArray(persistedFields)) return null;
	const columnMap = new Map(
		allColumns.filter((column) => column?.field).map((column) => [column.field, column])
	);
	return persistedFields.map((field) => columnMap.get(field)).filter(Boolean);
}

// ─── Row reorder ──────────────────────────────────────────────────────────────

/**
 * Move an item from fromIndex to toIndex in an array.
 */
export function reorderArray(arr, fromIndex, toIndex) {
	const result = [...arr];
	const [removed] = result.splice(fromIndex, 1);
	result.splice(toIndex, 0, removed);
	return result;
}
