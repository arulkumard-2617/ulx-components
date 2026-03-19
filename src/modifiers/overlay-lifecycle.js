import { modifier } from 'ember-modifier';
import { FOCUSABLE_SELECTOR } from '../utils/overlay-helpers';

const TRANSITION_DURATION = 220;
// Delay focus to allow enter transition to start and DOM to fully settle
const FOCUS_DELAY_MS = 100;

function hasClosableToastInDom() {
	if (typeof document === 'undefined') return false;
	return document.querySelector('.toast-message.closable:not(.toast-exit)') !== null;
}

/**
 * Shared overlay lifecycle modifier for modal and slide-pane components.
 * Handles visibility transitions, focus management, and keyboard events.
 *
 * @param {HTMLElement} maskElement - The mask/backdrop element
 * @param {Array} [params] - Array with [componentInstance, options]
 * @param {Object} options - Configuration options
 * @param {Function} options.onShow - Callback when overlay opens
 * @param {Function} options.onHide - Callback when overlay closes
 * @param {Function} options.onEscape - Callback when Escape is pressed
 * @param {boolean} options.closeOnEscape - Whether Escape closes overlay
 * @param {boolean} options.blockScroll - When true, set body overflow hidden while open; restored after exit animation completes
 * @param {string} options.overlaySelector - CSS selector for the focusable overlay element (e.g., '[tabindex="-1"]')
 * @param {string} [options.initialFocusSelector] - Optional selector for a container (within overlay) whose first focusable receives initial focus (WCAG: focus main content first)
 * @param {Function} options.handleTabKey - Function to handle Tab key trapping
 * @param {Function} options.getTransitionState - Getter for transition state
 * @param {Function} options.setTransitionState - Setter for transition state
 * @param {Function} options.getShouldRender - Getter for shouldRender
 * @param {Function} options.setShouldRender - Setter for shouldRender
 * @param {Function} options.getPreviousVisible - Getter for previous visible state
 * @param {Function} options.setPreviousVisible - Setter for previous visible state
 * @param {Function} options.getVisible - Getter for current visible state
 * @param {Function} options.getPreviousActiveElement - Getter for element to restore focus to on close
 * @param {Function} options.setPreviousActiveElement - Setter for element to restore focus to on close
 * @returns {Function} Cleanup function
 */
export default modifier((maskElement, [componentInstance, options]) => {
	const {
		onShow,
		onHide,
		onEscape,
		closeOnEscape = true,
		blockScroll = true,
		overlaySelector = '[tabindex="-1"]',
		initialFocusSelector,
		handleTabKey,
		getTransitionState,
		setTransitionState,
		getShouldRender,
		setShouldRender,
		getPreviousVisible,
		setPreviousVisible,
		getVisible,
		getPreviousActiveElement,
		setPreviousActiveElement
	} = options || {};

	let enterTimer = null;
	let enterActiveTimer = null;
	let exitTimer = null;
	let unmountTimer = null;

	const currentVisible = getVisible ? getVisible() : componentInstance.args.visible;
	const wasVisible = getPreviousVisible ? getPreviousVisible() : false;

	if (currentVisible && !wasVisible) {
		setShouldRender && setShouldRender(true);
		setTransitionState && setTransitionState('enter');

		enterTimer = setTimeout(() => {
			requestAnimationFrame(() => {
				setTransitionState && setTransitionState('enter-active');

				enterActiveTimer = setTimeout(() => {
					setTransitionState && setTransitionState('enter-done');
				}, TRANSITION_DURATION);
			});
		}, 0);

		setPreviousActiveElement && setPreviousActiveElement(document.activeElement);

		if (blockScroll && typeof document !== 'undefined') {
			document.body.style.overflow = 'hidden';
		}

		setTimeout(() => {
			const overlayElement = maskElement.querySelector(overlaySelector);
			if (overlayElement) {
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
				if (firstFocusable) {
					firstFocusable.focus();
				} else {
					overlayElement.focus();
				}
			}
		}, FOCUS_DELAY_MS);

		if (onShow) {
			onShow();
		}
	} else if (!currentVisible && wasVisible) {
		setTransitionState && setTransitionState('exit-active');

		exitTimer = setTimeout(() => {
			setTransitionState && setTransitionState('exit-done');
		}, TRANSITION_DURATION);

		unmountTimer = setTimeout(() => {
			setShouldRender && setShouldRender(false);
			setTransitionState && setTransitionState('');
			// Restore body overflow after modal is closed (next tick), not in the same callback
			if (blockScroll && typeof document !== 'undefined') {
				setTimeout(() => {
					document.body.style.overflow = '';
				}, 0);
			}
		}, TRANSITION_DURATION + 50);

		// Restore focus when overlay closes (after animation completes)
		const previousActiveElement = getPreviousActiveElement && getPreviousActiveElement();
		if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
			setTimeout(() => {
				try {
					previousActiveElement.focus();
				} finally {
					setPreviousActiveElement && setPreviousActiveElement(null);
				}
			}, TRANSITION_DURATION + 50);
		}
	} else if (currentVisible) {
		setShouldRender && setShouldRender(true);
	}

	setPreviousVisible && setPreviousVisible(currentVisible);

	const handleKeyDown = (event) => {
		const visible = getVisible ? getVisible() : componentInstance.args.visible;
		if (!visible) return;

		switch (event.key) {
			case 'Escape':
				if (closeOnEscape) {
					// Toasts must take Escape priority over blocking overlays.
					// If a closable toast is active, let toast handler close it first.
					if (hasClosableToastInDom()) return;

					// Only handle Escape if this is the topmost modal in the stack
					const modalStack = componentInstance.modalStack;
					const isTopModal = modalStack && modalStack.topModal === componentInstance;

					if (isTopModal || !modalStack) {
						event.preventDefault();
						if (onEscape) {
							onEscape();
						} else if (onHide) {
							onHide();
						}
					}
				}
				break;
			case 'Tab':
				if (handleTabKey) {
					const modalStack = componentInstance.modalStack;
					const isTopModal = modalStack && modalStack.topModal === componentInstance;
					if (modalStack && !isTopModal) break;

					const overlayElement = maskElement.querySelector(overlaySelector);
					overlayElement && handleTabKey(event, overlayElement);
				}
				break;
		}
	};

	document.addEventListener('keydown', handleKeyDown);

	return () => {
		if (enterTimer != null) clearTimeout(enterTimer);
		if (enterActiveTimer) clearTimeout(enterActiveTimer);
		if (exitTimer) clearTimeout(exitTimer);
		if (unmountTimer) clearTimeout(unmountTimer);

		if (blockScroll && typeof document !== 'undefined') {
			document.body.style.overflow = '';
		}

		document.removeEventListener('keydown', handleKeyDown);
	};
});
