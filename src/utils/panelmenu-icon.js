/**
 * Parse panel menu icon strings (font stack + name, optional size token).
 * e.g. "bs-icons1 add-icon-01 s20"
 *
 * @param {string} [icon]
 * @returns {{ base: string|null, name: string|null, size: string|null }}
 */
export function iconParts(icon) {
	if (!icon || typeof icon !== 'string') {
		return { base: null, name: null, size: null };
	}
	const parts = icon.trim().split(/\s+/);
	if (parts.length === 0) {
		return { base: null, name: null, size: null };
	}

	const sizeToken = parts[parts.length - 1];
	const hasSize =
		/^s\d+$/.test(sizeToken) ||
		/^m\d+$/.test(sizeToken) ||
		/^l\d+$/.test(sizeToken) ||
		/-size$/.test(sizeToken);

	const base = parts.length > 1 ? parts[0] : null;
	const nameIndex = hasSize ? parts.length - 2 : parts.length - 1;
	const name = nameIndex >= 0 ? parts[nameIndex] : null;
	const size = hasSize ? sizeToken : null;

	return { base, name, size };
}
