/**
 * Utility functions for overlay components (modal, slide-pane).
 */

import { schedule } from '@ember/runloop';

export const FOCUSABLE_SELECTOR =
	'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const PENDING_RETURN_FOCUS_TIMEOUT_MS = 1000;
let pendingOverlayReturnFocusElement = null;
let pendingOverlayReturnFocusTimestamp = 0;

/**
 * True when a closable toast is present (Escape should close toast before blocking overlays).
 *
 * @returns {boolean}
 */
export function hasClosableToastInDom() {
	if (typeof document === 'undefined') return false;
	return document.querySelector('.toast-message.closable:not(.toast-exit)') !== null;
}

/**
 * @param {string} key - KeyboardEvent.key
 * @returns {boolean}
 */
export function isEscapeKey(key) {
	return key === 'Escape' || key === 'Esc';
}

/**
 * Whether the component is the top registered modal in the stack (or no stack).
 *
 * @param {{ modalStack?: { topModal?: unknown } }} componentInstance
 * @returns {boolean}
 */
export function isTopModalInstance(componentInstance) {
	const modalStack = componentInstance?.modalStack;
	if (!modalStack) return true;
	return modalStack.topModal === componentInstance;
}

/**
 * Resolves initial focus target inside a modal/slide-pane overlay.
 *
 * @param {HTMLElement} maskElement
 * @param {string} overlaySelector
 * @param {string} [initialFocusSelector]
 * @returns {{ overlayElement: HTMLElement; focusTarget: HTMLElement } | null}
 */
export function resolveOverlayInitialFocus(maskElement, overlaySelector, initialFocusSelector) {
	const overlayElement = maskElement.querySelector(overlaySelector);
	if (!overlayElement) return null;

	let firstFocusable = null;
	if (initialFocusSelector) {
		const focusContainer = overlayElement.querySelector(initialFocusSelector);
		if (focusContainer) {
			firstFocusable = focusContainer.querySelector(FOCUSABLE_SELECTOR);
		}
	}
	if (!firstFocusable) {
		firstFocusable = overlayElement.querySelector(FOCUSABLE_SELECTOR);
	}
	const focusTarget = firstFocusable ?? overlayElement;
	return { overlayElement, focusTarget };
}

/**
 * Sets a short-lived focus target that the next opening overlay should restore to on close.
 *
 * @param {HTMLElement | null | undefined} element
 * @returns {void}
 */
export function setPendingOverlayReturnFocusElement(element) {
	pendingOverlayReturnFocusElement = element ?? null;
	pendingOverlayReturnFocusTimestamp = Date.now();
}

/**
 * Returns and clears the pending overlay return-focus target, if it is still valid.
 *
 * @returns {HTMLElement | null}
 */
export function consumePendingOverlayReturnFocusElement() {
	const element = pendingOverlayReturnFocusElement;
	const timestamp = pendingOverlayReturnFocusTimestamp;
	pendingOverlayReturnFocusElement = null;
	pendingOverlayReturnFocusTimestamp = 0;

	if (!element || !element.isConnected) {
		return null;
	}

	return Date.now() - timestamp <= PENDING_RETURN_FOCUS_TIMEOUT_MS ? element : null;
}

/**
 * Schedules moving focus into the overlay (same delay as overlay-lifecycle).
 *
 * @param {HTMLElement} maskElement
 * @param {string} overlaySelector
 * @param {string} [initialFocusSelector]
 * @param {number} delayMs
 * @returns {void}
 */
export function scheduleOverlayInitialFocus(
	maskElement,
	overlaySelector,
	initialFocusSelector,
	delayMs
) {
	setTimeout(() => {
		const resolved = resolveOverlayInitialFocus(maskElement, overlaySelector, initialFocusSelector);
		if (!resolved) return;
		resolved.focusTarget.focus();
	}, delayMs);
}

/**
 * Outside root and optional portaled panel (dropdown / multiselect).
 *
 * @param {HTMLElement} rootElement
 * @param {Event} event
 * @param {HTMLElement | null | undefined} panelElement
 * @returns {boolean}
 */
export function isPointerOutsideRootAndPanel(rootElement, event, panelElement) {
	const target = event.target;
	const insideRoot = rootElement?.contains(target);
	const insidePanel = panelElement?.contains(target);
	return !insideRoot && !insidePanel;
}

/**
 * Popup / tieredmenu popup: outside overlay root and outside anchor target.
 *
 * @param {HTMLElement | null | undefined} rootElement
 * @param {HTMLElement | null | undefined} anchorElement
 * @param {Event} event
 * @returns {boolean}
 */
export function isPointerOutsideAnchoredOverlay(rootElement, anchorElement, event) {
	const target = event.target;
	const outsideRoot = rootElement && !rootElement.contains(target);
	const outsideAnchor =
		anchorElement && !(anchorElement === target || anchorElement.contains(target));
	return Boolean(outsideRoot && outsideAnchor);
}

/**
 * @param {HTMLElement | null | undefined} containerElement
 * @param {Event} event
 * @returns {boolean}
 */
export function isPointerOutsideElement(containerElement, event) {
	return Boolean(containerElement && !containerElement.contains(event.target));
}

/**
 * Handles Tab key focus trapping within an overlay element.
 *
 * @param {KeyboardEvent} event - The keyboard event
 * @param {HTMLElement} overlayElement - The overlay container element
 * @returns {void}
 */
export function handleTabKey(event, overlayElement) {
	const focusableElements = overlayElement.querySelectorAll(FOCUSABLE_SELECTOR);
	const focusableArray = Array.from(focusableElements);
	const firstFocusable = focusableArray[0];
	const lastFocusable = focusableArray[focusableArray.length - 1];

	if (event.shiftKey) {
		if (document.activeElement === firstFocusable) {
			event.preventDefault();
			lastFocusable?.focus();
		}
	} else {
		if (document.activeElement === lastFocusable) {
			event.preventDefault();
			firstFocusable?.focus();
		}
	}
}

/**
 * Returns document.body in browser for portal rendering; null in SSR.
 * @returns {HTMLBodyElement | null}
 */
export function getDestinationElement() {
	return typeof document !== 'undefined' ? document.body : null;
}

/**
 * Document scroll offsets for converting viewport (getBoundingClientRect) coords to document space.
 *
 * @returns {{ scrollX: number; scrollY: number }}
 */
export function getDocumentScrollOffsets() {
	if (typeof window === 'undefined') {
		return { scrollX: 0, scrollY: 0 };
	}
	const docEl = typeof document !== 'undefined' ? document.documentElement : null;
	const scrollX = window.pageXOffset ?? window.scrollX ?? docEl?.scrollLeft ?? 0 ?? 0;
	const scrollY = window.pageYOffset ?? window.scrollY ?? docEl?.scrollTop ?? 0 ?? 0;
	return { scrollX, scrollY };
}

/**
 * Positions a portaled overlay from viewport coordinates plus document scroll,
 * so the panel stays aligned with the page when the root is absolutely positioned under body.
 *
 * @param {HTMLElement | null | undefined} containerElement
 * @param {number} topViewport - viewport Y (same space as getBoundingClientRect)
 * @param {number} leftViewport - viewport X
 * @returns {void}
 */
export function applyBodyAbsoluteFromViewport(containerElement, topViewport, leftViewport) {
	if (!containerElement || typeof window === 'undefined') {
		return;
	}

	const { scrollX, scrollY } = getDocumentScrollOffsets();

	containerElement.style.position = 'absolute';
	containerElement.style.top = `${topViewport + scrollY}px`;
	containerElement.style.left = `${leftViewport + scrollX}px`;
	containerElement.style.right = 'auto';
	containerElement.style.bottom = 'auto';
	containerElement.style.margin = '0';
}

/** Default z-index for overlays when no modal stack service is available. */
const DEFAULT_OVERLAY_Z_INDEX = 2100;

/**
 * Stack z-index for body-portaled overlays (popup, dropdown panel, toast, etc.).
 * Uses the same +10 stack as modals and slide panes via `ModalStackService`.
 *
 * @param {Object} [modalStack] - Modal stack service (optional)
 * @param {Object} [instance] - Registered overlay instance (popup, tieredmenu); when omitted, one step above `topModal` (dropdown, toast).
 * @returns {number}
 */
export function getOverlayZIndexAboveMask(modalStack, instance) {
	return modalStack?.getZIndexAboveMask?.(instance) ?? DEFAULT_OVERLAY_Z_INDEX;
}

/**
 * Computes whether the overlay block should be shown and schedules shouldRender when visible.
 * Use in a getter: get shouldRenderOverlay() { return shouldShowOverlay(this.args.visible, this.shouldRender, (v) => { this.shouldRender = v; }); }
 *
 * @param {boolean} visible - Current visibility from args
 * @param {boolean} shouldRender - Current shouldRender state
 * @param {Function} setShouldRender - Setter for shouldRender
 * @returns {boolean}
 */
export function shouldShowOverlay(visible, shouldRender, setShouldRender) {
	if (visible && !shouldRender) {
		schedule('afterRender', () => {
			setShouldRender(true);
		});
		return true;
	}
	return shouldRender;
}

/**
 * Builds the options object for the overlay-lifecycle modifier.
 * Shared by modal and slide-pane; pass component and overrides for component-specific values.
 *
 * @param {Object} component - Component instance with: handleClose, closeOnEscape, blockScroll, handleTabKey, transitionState, shouldRender, previousVisible, args.visible, previousActiveElement
 * @param {Object} [overrides] - Optional overrides: onShow, overlaySelector, initialFocusSelector
 * @returns {Object}
 */
export function buildOverlayLifecycleOptions(component, overrides = {}) {
	const {
		onShow: onShowOverride,
		overlaySelector = '[tabindex="-1"]',
		initialFocusSelector,
		onBeforeOpen,
		onAfterOpen,
		onBeforeClose,
		onAfterClose,
		canHandleEscape,
		canHandleTab
	} = overrides;

	return {
		onShow: onShowOverride ?? (() => component.args.onShow && component.args.onShow()),
		onHide: component.handleClose,
		onEscape: component.handleClose,
		closeOnEscape: component.closeOnEscape,
		blockScroll: component.blockScroll,
		overlaySelector,
		...(initialFocusSelector && { initialFocusSelector }),
		...(onBeforeOpen && { onBeforeOpen }),
		...(onAfterOpen && { onAfterOpen }),
		...(onBeforeClose && { onBeforeClose }),
		...(onAfterClose && { onAfterClose }),
		...(canHandleEscape && { canHandleEscape }),
		...(canHandleTab && { canHandleTab }),
		handleTabKey: component.handleTabKey,
		getTransitionState: () => component.transitionState,
		setTransitionState: (value) => {
			component.transitionState = value;
		},
		getShouldRender: () => component.shouldRender,
		setShouldRender: (value) => {
			component.shouldRender = value;
		},
		getPreviousVisible: () => component.previousVisible,
		setPreviousVisible: (value) => {
			component.previousVisible = value;
		},
		getVisible: () => component.args.visible,
		getPreviousActiveElement: () => component.previousActiveElement,
		setPreviousActiveElement: (value) => {
			component.previousActiveElement = value;
		}
	};
}
