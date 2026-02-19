/**
 * Utility functions for overlay components (modal, slide-pane).
 */

/**
 * Handles async action (onDone/onCancel) with promise support.
 * If the action returns a Promise, waits for it before optionally closing.
 * 
 * @param {Function} action - The action callback (onDone or onCancel)
 * @param {Object} options - Configuration options
 * @param {Function} options.setSubmitting - Setter for submitting state
 * @param {Function} options.onSuccess - Callback when promise resolves
 * @param {Function} options.onError - Callback when promise rejects
 * @param {Function} options.onFinally - Callback in finally block
 * @returns {void}
 */
export function handleAsyncAction(action, options = {}) {
	if (!action) return;

	const {
		setSubmitting,
		onSuccess,
		onError,
		onFinally
	} = options;

	const result = action();

	if (result && typeof result.then === "function") {
		setSubmitting && setSubmitting(true);
		result
			.then(() => {
				if (onSuccess) {
					onSuccess();
				}
			})
			.catch((error) => {
				if (onError) {
					onError(error);
				}
			})
			.finally(() => {
				setSubmitting && setSubmitting(false);
				if (onFinally) {
					onFinally();
				}
			});
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
	const focusableElements = overlayElement.querySelectorAll(
		'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
	);
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
