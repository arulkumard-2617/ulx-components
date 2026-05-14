import { modifier } from 'ember-modifier';
import {
	consumePendingOverlayReturnFocusElement,
	hasClosableToastInDom,
	isTopModalInstance,
	scheduleOverlayInitialFocus
} from '../utils/overlay-helpers';

const TRANSITION_DURATION = 300;
const FOCUS_DELAY_MS = 100;

let bodyScrollLockCount = 0;
/** @type {string} */
let savedBodyOverflow = '';

/**
 * Ref-counted body scroll lock for nested modals/slide-panes (module scope: only used by this modifier).
 *
 * @param {boolean} blockScroll
 * @returns {() => void} Call once to release
 */
function acquireBodyScrollLock(blockScroll) {
	if (!blockScroll || typeof document === 'undefined') {
		return () => {};
	}

	bodyScrollLockCount++;
	if (bodyScrollLockCount === 1) {
		savedBodyOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
	}

	let released = false;
	return () => {
		if (released || typeof document === 'undefined') {
			return;
		}
		released = true;
		if (bodyScrollLockCount > 0) {
			bodyScrollLockCount--;
		}
		if (bodyScrollLockCount === 0) {
			document.body.style.overflow = savedBodyOverflow ?? '';
			savedBodyOverflow = '';
		}
	};
}

/**
 * Shared overlay lifecycle modifier for modal and slide-pane components.
 * Handles visibility transitions, focus management, and keyboard events.
 *
 * When `blockScroll` is true, body scroll is locked via ref-counted `acquireBodyScrollLock`.
 * Do not set `document.body.style.overflow` elsewhere for these overlays. Z-order / `topModal`:
 * `ModalStackService`.
 *
 * @param {HTMLElement} maskElement - The mask/backdrop element
 * @param {Array} [params] - Array with [componentInstance, options]
 * @param {Object} options - Configuration options
 * @param {Function} [options.onBeforeOpen] - Optional hook before open side effects
 * @param {Function} [options.onAfterOpen] - Optional hook after onShow
 * @param {Function} [options.onBeforeClose] - Optional hook when exit transition starts
 * @param {Function} [options.onAfterClose] - Optional hook after unmount scheduling (exit branch)
 * @param {Function} [options.canHandleEscape] - Optional (ctx) => boolean; default uses top-modal guard
 * @param {Function} [options.canHandleTab] - Optional (ctx) => boolean; default uses top-modal guard
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
		setTransitionState,
		setShouldRender,
		getPreviousVisible,
		setPreviousVisible,
		getVisible,
		getPreviousActiveElement,
		setPreviousActiveElement,
		onBeforeOpen,
		onAfterOpen,
		onBeforeClose,
		onAfterClose,
		canHandleEscape,
		canHandleTab
	} = options || {};

	let enterTimer = null;
	let enterActiveTimer = null;
	let exitTimer = null;
	let unmountTimer = null;
	/** @type {null | (() => void)} */
	let releaseBodyScroll = null;

	const currentVisible = getVisible ? getVisible() : componentInstance.args.visible;
	const wasVisible = getPreviousVisible ? getPreviousVisible() : false;

	const baseHookCtx = { componentInstance, maskElement, currentVisible, wasVisible };

	if (currentVisible && !wasVisible) {
		onBeforeOpen?.(baseHookCtx);

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

		setPreviousActiveElement &&
			setPreviousActiveElement(consumePendingOverlayReturnFocusElement() ?? document.activeElement);

		releaseBodyScroll = acquireBodyScrollLock(blockScroll);

		scheduleOverlayInitialFocus(maskElement, overlaySelector, initialFocusSelector, FOCUS_DELAY_MS);

		if (onShow) {
			onShow();
		}

		onAfterOpen?.(baseHookCtx);
	} else if (!currentVisible && wasVisible) {
		onBeforeClose?.({ ...baseHookCtx, phase: 'exit' });

		setTransitionState && setTransitionState('exit-active');

		exitTimer = setTimeout(() => {
			setTransitionState && setTransitionState('exit-done');
		}, TRANSITION_DURATION);

		unmountTimer = setTimeout(() => {
			setShouldRender && setShouldRender(false);
			setTransitionState && setTransitionState('');
			onAfterClose?.({ ...baseHookCtx, phase: 'unmount-scheduled' });
		}, TRANSITION_DURATION + 50);

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
		// Options object is often a new reference each render; modifier teardown runs cleanup
		// (which releases scroll lock) before this branch. Re-acquire while still visible.
		blockScroll && (releaseBodyScroll = acquireBodyScrollLock(blockScroll));
	}

	setPreviousVisible && setPreviousVisible(currentVisible);

	const handleKeyDown = (event) => {
		const visible = getVisible ? getVisible() : componentInstance.args.visible;
		if (!visible) return;

		const keyCtx = { ...baseHookCtx, event, visible };

		switch (event.key) {
			case 'Escape':
				if (closeOnEscape) {
					if (hasClosableToastInDom()) return;

					if (typeof canHandleEscape === 'function') {
						if (!canHandleEscape(keyCtx)) return;
					} else if (!isTopModalInstance(componentInstance)) {
						return;
					}

					event.preventDefault();
					event.stopPropagation();
					if (onEscape) {
						onEscape();
					} else if (onHide) {
						onHide();
					}
				}
				break;

			case 'Tab':
				if (handleTabKey) {
					if (typeof canHandleTab === 'function') {
						if (!canHandleTab(keyCtx)) break;
					} else {
						const modalStack = componentInstance.modalStack;
						const isTopModal = modalStack && modalStack.topModal === componentInstance;
						if (modalStack && !isTopModal) break;
					}

					const overlayElement = maskElement.querySelector(overlaySelector);
					overlayElement && handleTabKey(event, overlayElement);
				}
				break;
			default:
				break;
		}
	};

	document.addEventListener('keydown', handleKeyDown);

	return () => {
		if (enterTimer != null) clearTimeout(enterTimer);
		if (enterActiveTimer) clearTimeout(enterActiveTimer);
		if (exitTimer) clearTimeout(exitTimer);
		if (unmountTimer) clearTimeout(unmountTimer);

		releaseBodyScroll?.();
		releaseBodyScroll = null;

		document.removeEventListener('keydown', handleKeyDown);
	};
});
