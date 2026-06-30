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

/**
 * Resolves flatpickr `appendTo` for popup calendars.
 *
 * @param {'body'|'self'|HTMLElement|Function|string|undefined|null} appendTo
 * @param {HTMLElement} hostElement - Flatpickr host (input or wrap container)
 * @returns {HTMLElement|null}
 */
export function resolveFlatpickrAppendTo(appendTo, hostElement) {
	if (typeof document === "undefined") {
		return null;
	}

	if (appendTo == null || appendTo === "body") {
		return document.body;
	}

	if (appendTo === "self") {
		return hostElement;
	}

	if (typeof appendTo === "function") {
		try {
			const resolved = appendTo(hostElement);
			return resolveFlatpickrAppendTo(resolved, hostElement);
		} catch {
			return document.body;
		}
	}

	if (typeof HTMLElement !== "undefined" && appendTo instanceof HTMLElement) {
		return appendTo;
	}

	if (typeof appendTo === "string") {
		const selector = appendTo.trim();
		if (!selector.length) {
			return document.body;
		}

		return hostElement.closest?.(selector) ?? document.querySelector(selector) ?? document.body;
	}

	return document.body;
}

/**
 * @param {HTMLElement} element
 * @returns {boolean}
 */
function isScrollableElement(element) {
	if (!element || typeof window === "undefined") {
		return false;
	}

	const style = window.getComputedStyle(element);
	const overflowY = style.overflowY;
	const overflowX = style.overflowX;
	const scrollableOverflow = (value) =>
		value === "auto" || value === "scroll" || value === "overlay";

	return (
		(scrollableOverflow(overflowY) && element.scrollHeight > element.clientHeight) ||
		(scrollableOverflow(overflowX) && element.scrollWidth > element.clientWidth)
	);
}

/**
 * @param {HTMLElement} hostElement
 * @returns {HTMLElement|Window|null}
 */
export function findNearestScrollableParent(hostElement) {
	if (!hostElement || typeof window === "undefined") {
		return typeof window !== "undefined" ? window : null;
	}

	let node = hostElement.parentElement;
	while (node && node !== document.body && node !== document.documentElement) {
		if (isScrollableElement(node)) {
			return node;
		}
		node = node.parentElement;
	}

	return window;
}

/**
 * Scrollable element to mount the calendar in for natural scroll pinning (no scroll jitter).
 *
 * @param {'window'|HTMLElement|Function|string|undefined|null} scrollContext
 * @param {HTMLElement} hostElement
 * @returns {HTMLElement|null}
 */
export function resolveFlatpickrScrollPinContainer(scrollContext, hostElement) {
	if (typeof document === "undefined") {
		return null;
	}

	if (scrollContext != null && scrollContext !== "" && scrollContext !== "window") {
		if (typeof scrollContext === "string") {
			const selector = scrollContext.trim();
			if (!selector.length) {
				return null;
			}
			return hostElement.closest?.(selector) ?? document.querySelector(selector);
		}

		if (typeof scrollContext === "function") {
			try {
				const resolved = scrollContext(hostElement);
				if (typeof HTMLElement !== "undefined" && resolved instanceof HTMLElement) {
					return resolved;
				}
			} catch {
				return null;
			}
		}

		if (typeof HTMLElement !== "undefined" && scrollContext instanceof HTMLElement) {
			return scrollContext;
		}

		return null;
	}

	const editorScrollParent = hostElement.closest?.(".editor-sc-parent");
	if (editorScrollParent) {
		return editorScrollParent;
	}

	const nearestScrollableParent = findNearestScrollableParent(hostElement);
	return typeof HTMLElement !== "undefined" && nearestScrollableParent instanceof HTMLElement
		? nearestScrollableParent
		: null;
}

/**
 * @param {HTMLElement|null} appendTarget
 * @returns {boolean}
 */
export function usesFlatpickrScrollPin(appendTarget) {
	return Boolean(appendTarget && appendTarget !== document.body);
}

/**
 * @param {HTMLElement} appendTarget
 * @param {HTMLElement} hostElement
 * @param {'body'|HTMLElement|undefined|null} appendTo
 * @param {'window'|HTMLElement|Function|string|undefined|null} scrollContext
 * @returns {{ resolvedAppendTo: HTMLElement; scrollPinned: boolean }}
 */
export function resolveFlatpickrLayout(appendTo, scrollContext, hostElement) {
	const explicitAppendTo = appendTo != null && appendTo !== "" && appendTo !== "body";
	let resolvedAppendTo = resolveFlatpickrAppendTo(appendTo, hostElement);
	let scrollPinned = usesFlatpickrScrollPin(resolvedAppendTo);

	if (!explicitAppendTo) {
		const pinContainer = resolveFlatpickrScrollPinContainer(scrollContext, hostElement);
		if (pinContainer) {
			resolvedAppendTo = pinContainer;
			scrollPinned = true;
		}
	}

	return { resolvedAppendTo, scrollPinned };
}

/**
 * @param {HTMLElement} element
 * @param {string} className
 * @param {boolean} active
 */
function togglePickerClass(element, className, active) {
	element?.classList.toggle(className, Boolean(active));
}

/**
 * Flatpickr sums child `offsetHeight` values, which omits the calendar shell padding/border
 * applied by ULX styles and causes the popup to overlap the input when opening above.
 *
 * @param {HTMLElement|null|undefined} calendarContainer
 * @returns {number}
 */
export function resolveFlatpickrCalendarHeight(calendarContainer) {
	if (!calendarContainer) {
		return 0;
	}

	const measuredHeight = calendarContainer.offsetHeight;
	if (measuredHeight > 0) {
		return measuredHeight;
	}

	return Array.from(calendarContainer.children).reduce(
		(acc, child) => acc + child.offsetHeight,
		0
	);
}

/**
 * @param {unknown} positionPreference
 * @returns {{ vertical: string; horizontal: string|null }}
 */
function parseFlatpickrPositionPreference(positionPreference) {
	const configPos = String(positionPreference ?? "auto").trim().split(/\s+/);
	return {
		vertical: configPos[0] ?? "auto",
		horizontal: configPos.length > 1 ? configPos[1] : null
	};
}

/**
 * @param {string} configPosVertical
 * @param {DOMRect} inputBounds
 * @param {number} calendarHeight
 * @returns {boolean}
 */
function shouldShowFlatpickrCalendarOnTop(configPosVertical, inputBounds, calendarHeight) {
	const distanceFromBottom = window.innerHeight - inputBounds.bottom;

	return (
		configPosVertical === "above" ||
		(configPosVertical !== "below" &&
			distanceFromBottom < calendarHeight &&
			inputBounds.top > calendarHeight)
	);
}

/**
 * @param {HTMLElement} calendarContainer
 * @param {boolean} showOnTop
 * @param {boolean} isCenter
 * @param {boolean} isRight
 * @param {boolean} rightMost
 */
function applyFlatpickrArrowClasses(calendarContainer, showOnTop, isCenter, isRight, rightMost) {
	togglePickerClass(calendarContainer, "arrowTop", !showOnTop);
	togglePickerClass(calendarContainer, "arrowBottom", showOnTop);
	togglePickerClass(calendarContainer, "arrowLeft", !isCenter && !isRight);
	togglePickerClass(calendarContainer, "arrowCenter", isCenter);
	togglePickerClass(calendarContainer, "arrowRight", isRight);
	togglePickerClass(calendarContainer, "rightMost", rightMost);
	togglePickerClass(calendarContainer, "centerMost", false);
}

/**
 * Positions the popup relative to `document.body` using flatpickr's coordinate model,
 * with corrected calendar height for ULX-styled surfaces.
 *
 * @param {unknown} [positionPreference='auto']
 * @returns {(fpInstance: import('flatpickr').Instance, customPositionElement?: HTMLElement) => void}
 */
export function createFlatpickrBodyPosition(positionPreference = "auto") {
	return function bodyPositionCalendar(fpInstance, customPositionElement) {
		const calendarContainer = fpInstance?.calendarContainer;
		if (!calendarContainer || fpInstance.config.inline || fpInstance.config.static) {
			return;
		}

		const positionElement = customPositionElement || fpInstance._positionElement;
		if (!positionElement) {
			return;
		}

		const inputBounds = positionElement.getBoundingClientRect();
		const calendarHeight = resolveFlatpickrCalendarHeight(calendarContainer);
		const calendarWidth = calendarContainer.offsetWidth;
		const { vertical: configPosVertical, horizontal: configPosHorizontal } =
			parseFlatpickrPositionPreference(positionPreference);
		const showOnTop = shouldShowFlatpickrCalendarOnTop(
			configPosVertical,
			inputBounds,
			calendarHeight
		);
		const verticalOffset = !showOnTop
			? positionElement.offsetHeight + 2
			: -calendarHeight - 2;
		let top = window.pageYOffset + inputBounds.top + verticalOffset;
		let left = window.pageXOffset + inputBounds.left;
		let isCenter = false;
		let isRight = false;

		if (configPosHorizontal === "center") {
			left -= (calendarWidth - inputBounds.width) / 2;
			isCenter = true;
		} else if (configPosHorizontal === "right") {
			left -= calendarWidth - inputBounds.width;
			isRight = true;
		}

		const right =
			window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right),
			rightMost = left + calendarWidth > window.document.body.offsetWidth,
			centerMost = right + calendarWidth > window.document.body.offsetWidth;

		applyFlatpickrArrowClasses(calendarContainer, showOnTop, isCenter, isRight, rightMost);

		calendarContainer.style.top = `${top}px`;

		if (!rightMost) {
			calendarContainer.style.left = `${left}px`;
			calendarContainer.style.right = "auto";
		} else if (!centerMost) {
			calendarContainer.style.left = "auto";
			calendarContainer.style.right = `${right}px`;
		} else {
			const bodyWidth = window.document.body.offsetWidth;
			const centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
			togglePickerClass(calendarContainer, "rightMost", false);
			togglePickerClass(calendarContainer, "centerMost", true);
			calendarContainer.style.left = `${centerLeft}px`;
			calendarContainer.style.right = "auto";
		}
	};
}

/**
 * Positions the popup relative to a scroll container so it moves with scroll (no scroll listeners).
 *
 * @param {HTMLElement} appendTarget
 * @param {unknown} [positionPreference='auto']
 * @returns {(fpInstance: import('flatpickr').Instance, customPositionElement?: HTMLElement) => void}
 */
export function createFlatpickrScrollPinnedPosition(appendTarget, positionPreference = "auto") {
	return function scrollPinnedPositionCalendar(fpInstance, customPositionElement) {
		const calendarContainer = fpInstance?.calendarContainer;
		if (!calendarContainer || fpInstance.config.inline || fpInstance.config.static) {
			return;
		}

		const positionElement = customPositionElement || fpInstance._positionElement;
		if (!positionElement) {
			return;
		}

		const inputBounds = positionElement.getBoundingClientRect();
		const containerBounds = appendTarget.getBoundingClientRect();
		const calendarHeight = resolveFlatpickrCalendarHeight(calendarContainer);
		const calendarWidth = calendarContainer.offsetWidth;
		const { vertical: configPosVertical, horizontal: configPosHorizontal } =
			parseFlatpickrPositionPreference(positionPreference);
		const showOnTop = shouldShowFlatpickrCalendarOnTop(
			configPosVertical,
			inputBounds,
			calendarHeight
		);
		const verticalOffset = !showOnTop
			? positionElement.offsetHeight + 2
			: -calendarHeight - 2;

		let top = inputBounds.top - containerBounds.top + appendTarget.scrollTop + verticalOffset;
		let left = inputBounds.left - containerBounds.left + appendTarget.scrollLeft;
		let isCenter = false;
		let isRight = false;

		if (configPosHorizontal === "center") {
			left -= (calendarWidth - inputBounds.width) / 2;
			isCenter = true;
		} else if (configPosHorizontal === "right") {
			left -= calendarWidth - inputBounds.width;
			isRight = true;
		}

		const rightMost = left + calendarWidth > appendTarget.clientWidth;
		if (rightMost) {
			left = Math.max(0, appendTarget.clientWidth - calendarWidth);
		}

		applyFlatpickrArrowClasses(calendarContainer, showOnTop, isCenter, isRight, rightMost);

		calendarContainer.style.position = "absolute";
		calendarContainer.style.top = `${top}px`;
		calendarContainer.style.left = `${left}px`;
		calendarContainer.style.right = "auto";
		calendarContainer.style.bottom = "auto";
	};
}

/**
 * Scroll targets whose `scroll` events should trigger flatpickr reposition while open.
 * Only used when the calendar is portaled to `document.body` (not scroll-pinned).
 *
 * @param {'window'|HTMLElement|Function|string|undefined|null} scrollContext
 * @param {HTMLElement} hostElement
 * @returns {Array<HTMLElement|Window>}
 */
export function resolveFlatpickrScrollTargets(scrollContext, hostElement) {
	/** @type {Array<HTMLElement|Window>} */
	const targets = [];

	const addTarget = (target) => {
		if (!target || targets.includes(target)) {
			return;
		}
		targets.push(target);
	};

	if (scrollContext != null && scrollContext !== "") {
		if (scrollContext === "window" && typeof window !== "undefined") {
			addTarget(window);
		} else if (typeof scrollContext === "string") {
			const selector = scrollContext.trim();
			const fromHost = selector.length ? hostElement.closest?.(selector) : null;
			const resolved =
				fromHost ??
				(typeof document !== "undefined" ? document.querySelector(selector) : null);
			addTarget(resolved);
			if (typeof window !== "undefined") {
				addTarget(window);
			}
		} else if (typeof scrollContext === "function") {
			try {
				return resolveFlatpickrScrollTargets(scrollContext(hostElement), hostElement);
			} catch {
				return resolveFlatpickrScrollTargets(undefined, hostElement);
			}
		} else if (typeof HTMLElement !== "undefined" && scrollContext instanceof HTMLElement) {
			addTarget(scrollContext);
			if (typeof window !== "undefined") {
				addTarget(window);
			}
		}
		return targets;
	}

	const pinContainer = resolveFlatpickrScrollPinContainer(scrollContext, hostElement);
	if (pinContainer) {
		addTarget(pinContainer);
	} else {
		addTarget(findNearestScrollableParent(hostElement));
	}

	return targets;
}

/**
 * @param {(...args: unknown[]) => void} fn
 * @param {number} waitMs
 * @returns {(...args: unknown[]) => void}
 */
export function debounceFlatpickr(fn, waitMs) {
	/** @type {ReturnType<typeof setTimeout>|undefined} */
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn(...args), waitMs);
	};
}

/**
 * Ensures a non-body append container can anchor an absolutely positioned calendar.
 *
 * @param {HTMLElement|null} appendTarget
 * @returns {(() => void)|null}
 */
export function ensureFlatpickrAppendContainerPosition(appendTarget) {
	if (
		typeof document === "undefined" ||
		typeof window === "undefined" ||
		!appendTarget ||
		appendTarget === document.body
	) {
		return null;
	}

	const computedPosition = window.getComputedStyle(appendTarget).position;
	if (computedPosition !== "static") {
		return null;
	}

	const previousPosition = appendTarget.style.position;
	appendTarget.style.position = "relative";

	return () => {
		appendTarget.style.position = previousPosition;
	};
}