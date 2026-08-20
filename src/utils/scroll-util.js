/**
 * Scroll helpers for overlay content areas (slide pane, modal, etc.).
 */

/**
 * Scroll an element to a position. No-op for missing or detached nodes.
 *
 * @param {HTMLElement | null | undefined} element
 * @param {{ top?: number, left?: number, behavior?: ScrollBehavior }} [options]
 * @returns {void}
 */
export function scrollElementTo(element, { top = 0, left = 0, behavior = "auto" } = {}) {
	if (!element || typeof element.scrollTo !== "function" || !element.isConnected) {
		return;
	}

	element.scrollTo({ top, left, behavior });
}

/**
 * Scroll an element to the top (and start of inline axis).
 *
 * @param {HTMLElement | null | undefined} element
 * @param {ScrollBehavior} [behavior="auto"]
 * @returns {void}
 */
export function scrollElementToTop(element, behavior = "auto") {
	scrollElementTo(element, { top: 0, left: 0, behavior });
}

/**
 * Nearest scrollable ancestor (overflow auto/scroll/overlay), or the document scroller.
 *
 * @param {HTMLElement | null | undefined} element
 * @returns {HTMLElement | Element | null}
 */
export function getScrollParent(element) {
	if (!element || typeof window === "undefined") {
		return null;
	}

	let node = element.parentElement;
	while (node && node !== document.body) {
		const { overflowY, overflow } = window.getComputedStyle(node);
		const canScrollY =
			/(auto|scroll|overlay)/.test(overflowY) || /(auto|scroll|overlay)/.test(overflow);

		if (canScrollY && node.scrollHeight > node.clientHeight) {
			return node;
		}

		node = node.parentElement;
	}

	return document.scrollingElement ?? document.documentElement;
}
