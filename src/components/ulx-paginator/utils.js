export const DEFAULT_TEMPLATE =
	'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown';

export const DEFAULT_PAGE_REPORT = '({currentPage} of {totalPages})';

/** Tokens used in the `@template` layout string (order is controlled by that string). */
export const TEMPLATE_KEY = {
	CURRENT_PAGE_REPORT: 'CurrentPageReport',
	FIRST_PAGE_LINK: 'FirstPageLink',
	LAST_PAGE_LINK: 'LastPageLink',
	NEXT_PAGE_LINK: 'NextPageLink',
	PAGE_LINKS: 'PageLinks',
	PREV_PAGE_LINK: 'PrevPageLink',
	ROWS_PER_PAGE_DROPDOWN: 'RowsPerPageDropdown'
};

/**
 * @param {unknown} raw
 * @param {string} [defaultTemplate]
 * @returns {string[]}
 */
export function parseTemplateKeys(raw, defaultTemplate = DEFAULT_TEMPLATE) {
	const base = raw ?? defaultTemplate;
	return typeof base === 'string' ? base.trim().split(/\s+/).filter(Boolean) : [];
}

/**
 * @param {number} totalPages
 * @param {number} pageLinkSize
 * @param {number} page
 * @returns {[number, number]}
 */
export function computePageLinkBoundaries(totalPages, pageLinkSize, page) {
	const visiblePages = Math.min(pageLinkSize, totalPages);
	let start = Math.max(0, Math.ceil(page - visiblePages / 2));
	let end = Math.min(totalPages - 1, start + visiblePages - 1);
	const delta = pageLinkSize - (end - start + 1);
	start = Math.max(0, start - delta);
	return [start, end];
}

/**
 * @param {number} start
 * @param {number} end
 * @returns {number[]}
 */
export function pageLinksFromBoundaries(start, end) {
	const links = [];
	for (let i = start; i <= end; i++) {
		links.push(i + 1);
	}
	return links;
}

/**
 * @param {number[] | undefined} opts
 * @returns {{ label: string; value: number }[]}
 */
export function mapRowsPerPageOptions(opts) {
	return opts?.length ? opts.map((opt) => ({ label: String(opt), value: opt })) : [];
}

/**
 * @param {string} template
 * @param {Record<string, string | number>} tokens
 */
export function interpolatePageReport(template, tokens) {
	return template.replace(/\{(\w+)\}/g, (_, key) => tokens[key] ?? '');
}

/**
 * @param {number} rows
 * @param {number} first
 */
export function computePageFromFirst(rows, first) {
	return rows > 0 ? Math.floor(first / rows) : 0;
}

/**
 * @param {number} totalRecords
 * @param {number} rows
 */
export function computeTotalPages(totalRecords, rows) {
	return rows > 0 ? Math.ceil(totalRecords / rows) : 0;
}
