const DEFAULT_FOCUSABLE_SELECTOR =
	'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function getFocusableElements(rootElement, selector = DEFAULT_FOCUSABLE_SELECTOR) {
	if (!rootElement) return [];
	return Array.from(rootElement.querySelectorAll(selector)).filter((element) => {
		if (element.getAttribute('aria-hidden') === 'true') return false;
		if (element.tabIndex < 0) return false;
		return element.offsetParent !== null;
	});
}

export function focusInCollection(elements, { forward = true, currentTarget = null } = {}) {
	if (!elements?.length) return;
	if (!currentTarget) {
		(forward ? elements[0] : elements[elements.length - 1]).focus();
		return;
	}
	const currentIndex = elements.indexOf(currentTarget);
	if (currentIndex < 0) {
		(forward ? elements[0] : elements[elements.length - 1]).focus();
		return;
	}
	const nextIndex = forward
		? (currentIndex + 1) % elements.length
		: (currentIndex - 1 + elements.length) % elements.length;
	elements[nextIndex].focus();
}

/**
 * Next/previous focusable in document tab order relative to an anchor (e.g. menu trigger), excluding a subtree such as an open overlay.
 */
export function getAdjacentFocusableInDocument(
	anchorElement,
	{ backward = false, excludeContaining = null } = {}
) {
	if (!anchorElement || typeof document === 'undefined') return null;

	let focusables = getFocusableElements(document.body);
	if (excludeContaining) {
		focusables = focusables.filter((el) => !excludeContaining.contains(el));
	}

	const anchorFocusables = getFocusableElements(anchorElement);
	const focusAnchor =
		anchorFocusables.length > 0
			? backward
				? anchorFocusables[0]
				: anchorFocusables[anchorFocusables.length - 1]
			: anchorElement;

	const anchorIndex = focusables.indexOf(focusAnchor);
	if (anchorIndex < 0) return null;

	const targetIndex = backward ? anchorIndex - 1 : anchorIndex + 1;
	return focusables[targetIndex] ?? null;
}
