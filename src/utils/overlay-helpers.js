/**
 * Utility functions for overlay components (modal, slide-pane).
 */

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
