import { applyBodyAbsoluteFromViewport } from './overlay-helpers';

function isBrowserWindow(value) {
	return typeof window !== 'undefined' && value === window;
}

function isElement(value) {
	return typeof HTMLElement !== 'undefined' && value instanceof HTMLElement;
}

function resolveTarget(value, options = {}) {
	const {
		defaultValue = null,
		allowWindow = false,
		allowSelf = false,
		emptyStringValue = defaultValue
	} = options;

	if (value === undefined || value === null) return defaultValue;
	if (allowSelf && value === 'self') return null;
	if (value === 'body') return typeof document !== 'undefined' ? document.body : null;
	if (allowWindow && value === 'window') return typeof window !== 'undefined' ? window : null;
	if (typeof value === 'function') {
		try {
			const resolved = value();
			return resolveTarget(resolved, options);
		} catch {
			return defaultValue;
		}
	}
	if (typeof value === 'string') {
		const selector = value.trim();
		if (!selector.length) return emptyStringValue;
		if (typeof document === 'undefined') return defaultValue;
		return document.querySelector(selector) ?? defaultValue;
	}
	if (allowWindow && isBrowserWindow(value)) return value;
	return isElement(value) ? value : defaultValue;
}

export function resolveOverlayContext(value) {
	return resolveTarget(value, {
		defaultValue: null,
		allowSelf: true,
		emptyStringValue: null
	});
}

export function resolveOverlayBoundary(value) {
	return resolveTarget(value, {
		defaultValue: typeof window !== 'undefined' ? window : null,
		allowWindow: true
	});
}

export function resolveOverlayScrollContext(value) {
	return resolveTarget(value, {
		defaultValue: typeof window !== 'undefined' ? window : null,
		allowWindow: true
	});
}

/**
 * Resolves one or more scroll targets for overlay reposition listeners.
 * Accepts a single scroll context value, an array of values, or a function returning either.
 *
 * @param {'window'|HTMLElement|Function|string|Array<unknown>|undefined|null} value
 * @returns {Array<HTMLElement|Window>}
 */
export function resolveOverlayScrollTargets(value) {
	/** @type {Array<HTMLElement|Window>} */
	const targets = [];

	const addTarget = (target) => {
		if (target && !targets.includes(target)) {
			targets.push(target);
		}
	};

	const resolveOne = (item) => {
		if (item === undefined || item === null) {
			return;
		}

		if (Array.isArray(item)) {
			item.forEach(resolveOne);
			return;
		}

		if (typeof item === 'function') {
			try {
				resolveOne(item());
			} catch {
				/* ignore resolver failures */
			}
			return;
		}

		if (isBrowserWindow(item) || isElement(item)) {
			addTarget(item);
			return;
		}

		addTarget(resolveOverlayScrollContext(item));
	};

	resolveOne(value);

	if (!targets.length && typeof window !== 'undefined') {
		targets.push(window);
	}

	return targets;
}

export function buildOverlayCoordinateApi(contextElement, positioningElement = null) {
	const isBody = typeof document !== 'undefined' && contextElement === document.body;
	const isSelf = !contextElement;
	const selfOffsetParent = isSelf ? (positioningElement?.offsetParent ?? null) : null;
	const containerElement = !isSelf && !isBody ? contextElement : selfOffsetParent;
	const containerRect = containerElement?.getBoundingClientRect?.() ?? null;
	const usesDocumentCoordinates =
		isBody ||
		(isSelf &&
			(!containerElement ||
				containerElement === document.body ||
				containerElement === document.documentElement));

	const toOverlayPoint = (left, top) => {
		if (usesDocumentCoordinates || !containerElement || !containerRect) return { left, top };
		return {
			left: left - containerRect.left + containerElement.scrollLeft,
			top: top - containerRect.top + containerElement.scrollTop
		};
	};

	const fromViewportRect = (rect) => {
		const topLeft = toOverlayPoint(rect.left, rect.top);
		const bottomRight = toOverlayPoint(rect.right, rect.bottom);
		return {
			top: topLeft.top,
			left: topLeft.left,
			right: bottomRight.left,
			bottom: bottomRight.top,
			width: rect.width,
			height: rect.height
		};
	};

	const applyPosition = (element, top, left) => {
		if (!element) return;
		if (usesDocumentCoordinates) {
			applyBodyAbsoluteFromViewport(element, top, left);
			return;
		}
		element.style.position = 'absolute';
		element.style.top = `${top}px`;
		element.style.left = `${left}px`;
		element.style.right = 'auto';
		element.style.bottom = 'auto';
		element.style.margin = '0';
	};

	return {
		isBody,
		isSelf,
		containerElement,
		usesDocumentCoordinates,
		toOverlayPoint,
		fromViewportRect,
		applyPosition
	};
}

export function getBoundaryRectInOverlaySpace(boundaryTarget, coordinateApi) {
	if (!coordinateApi) return null;
	if (isBrowserWindow(boundaryTarget) || !boundaryTarget) {
		return coordinateApi.fromViewportRect({
			top: 0,
			left: 0,
			right: typeof window !== 'undefined' ? window.innerWidth : 0,
			bottom: typeof window !== 'undefined' ? window.innerHeight : 0,
			width: typeof window !== 'undefined' ? window.innerWidth : 0,
			height: typeof window !== 'undefined' ? window.innerHeight : 0
		});
	}
	if (!isElement(boundaryTarget)) return null;
	return coordinateApi.fromViewportRect(boundaryTarget.getBoundingClientRect());
}

/**
 * Resolves scrollable content size for custom scroll wrappers that may under-report
 * scrollHeight/scrollWidth on the scroll element itself.
 *
 * @param {HTMLElement} scrollElement
 * @returns {{ scrollHeight: number, scrollWidth: number }}
 */
function getScrollContentExtent(scrollElement) {
	let scrollHeight = scrollElement.scrollHeight;
	let scrollWidth = scrollElement.scrollWidth;

	for (const child of scrollElement.children) {
		if (!isElement(child)) continue;

		scrollHeight = Math.max(scrollHeight, child.scrollHeight, child.offsetHeight);
		scrollWidth = Math.max(scrollWidth, child.scrollWidth, child.offsetWidth);
	}

	return { scrollHeight, scrollWidth };
}

/**
 * Placement space around a target within a scroll container.
 *
 * Visible space is relative to the scrollport viewport. Scrollable space is relative
 * to the full scroll content using scrollTop/scrollLeft and content extent:
 * - scrollableSpaceBelow  = scrollHeight - targetBottomInContent
 * - scrollableSpaceAbove  = targetTopInContent
 * - scrollableSpaceRight  = scrollWidth - targetRightInContent
 * - scrollableSpaceLeft   = targetLeftInContent
 *
 * @param {HTMLElement|Window|null|undefined} boundaryTarget
 * @param {HTMLElement|null|undefined} targetElement
 * @returns {{
 *   visibleSpaceBelow: number,
 *   visibleSpaceAbove: number,
 *   visibleSpaceLeft: number,
 *   visibleSpaceRight: number,
 *   scrollableSpaceBelow: number,
 *   scrollableSpaceAbove: number,
 *   scrollableSpaceLeft: number,
 *   scrollableSpaceRight: number
 * } | null}
 */
export function getOverlayPlacementSpace(boundaryTarget, targetElement) {
	if (!isElement(boundaryTarget) || !isElement(targetElement) || isBrowserWindow(boundaryTarget)) {
		return null;
	}

	const scrollElement = boundaryTarget;
	const scrollRect = scrollElement.getBoundingClientRect();
	const targetRect = targetElement.getBoundingClientRect();
	const { scrollHeight, scrollWidth } = getScrollContentExtent(scrollElement);

	const targetTopInContent = targetRect.top - scrollRect.top + scrollElement.scrollTop;
	const targetBottomInContent = targetTopInContent + targetRect.height;
	const targetLeftInContent = targetRect.left - scrollRect.left + scrollElement.scrollLeft;
	const targetRightInContent = targetLeftInContent + targetRect.width;

	return {
		visibleSpaceBelow: scrollRect.bottom - targetRect.bottom,
		visibleSpaceAbove: targetRect.top - scrollRect.top,
		visibleSpaceRight: scrollRect.right - targetRect.right,
		visibleSpaceLeft: targetRect.left - scrollRect.left,
		scrollableSpaceBelow: scrollHeight - targetBottomInContent,
		scrollableSpaceAbove: targetTopInContent,
		scrollableSpaceRight: scrollWidth - targetRightInContent,
		scrollableSpaceLeft: targetLeftInContent
	};
}

export function clampOverlayValue(value, min, max) {
	if (!Number.isFinite(value)) return min;
	if (!Number.isFinite(min) || !Number.isFinite(max)) return value;
	if (max < min) return min;
	return Math.min(Math.max(value, min), max);
}
