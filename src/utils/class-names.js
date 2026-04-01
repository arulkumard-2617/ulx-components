/**
 * Join CSS class tokens: drop falsy values, dedupe, single space.
 * @param {...(string|undefined|null|false)} parts
 * @returns {string}
 */
export function joinClassNames(...parts) {
	return [...new Set(parts.filter(Boolean))].join(' ');
}
