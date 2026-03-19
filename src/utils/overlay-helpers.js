/**
 * Utility functions for overlay components (modal, slide-pane).
 */

import { schedule } from "@ember/runloop";

export const FOCUSABLE_SELECTOR =
	'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Handles async action (onDone/onCancel) with promise support.
 * If the action returns a Promise, waits for it before optionally closing.
 * For sync actions, onSuccess and onFinally are called immediately.
 *
 * @param {Function} action - The action callback (onDone or onCancel)
 * @param {Object} options - Configuration options
 * @param {Function} options.setSubmitting - Setter for submitting state
 * @param {Function} options.onSuccess - Callback when action resolves (sync or async)
 * @param {Function} options.onError - Callback when promise rejects
 * @param {Function} options.onFinally - Callback after action completes
 * @returns {void}
 */
export function handleAsyncAction(action, options = {}) {
	if (!action) return;

	const { setSubmitting, onSuccess, onError, onFinally } = options;
	const result = action();

	if (result && typeof result.then === "function") {
		setSubmitting && setSubmitting(true);
		result
			.then(() => {
				onSuccess && onSuccess();
			})
			.catch((error) => {
				onError && onError(error);
			})
			.finally(() => {
				setSubmitting && setSubmitting(false);
				onFinally && onFinally();
			});
	} else {
		onSuccess && onSuccess();
		onFinally && onFinally();
	}
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
	return typeof document !== "undefined" ? document.body : null;
}

/** Default z-index for overlays when no modal stack or no top modal. */
const DEFAULT_OVERLAY_Z_INDEX = 2100;

/**
 * Returns a z-index guaranteed to be above the dialog mask, for use by overlays
 * (toast, popup, dropdown panel, etc.) that render in body. Centralizes the fallback.
 *
 * @param {Object} [modalStack] - Modal stack service (optional)
 * @param {Object} [instance] - Optional overlay instance; when provided, used for stacking order (e.g. popup, tieredmenu). When omitted, uses topModal (e.g. toast, dropdown panel).
 * @returns {number}
 */
export function getOverlayZIndexAboveMask(modalStack, instance) {
	//for popup and dropdown the instance will be passed
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
		schedule("afterRender", () => {
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
		initialFocusSelector
	} = overrides;

	return {
		onShow: onShowOverride ?? (() => component.args.onShow && component.args.onShow()),
		onHide: component.handleClose,
		onEscape: component.handleClose,
		closeOnEscape: component.closeOnEscape,
		blockScroll: component.blockScroll,
		overlaySelector,
		...(initialFocusSelector && { initialFocusSelector }),
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
