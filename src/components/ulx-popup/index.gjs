import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { guidFor } from "@ember/object/internals";
import { inject as service } from "@ember/service";
import { and, not } from "ember-truth-helpers";
import { modifier } from "ember-modifier";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../utils/component-config";
import { joinClassNames } from "../../utils/class-names";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";
import overlayDismiss from "../../modifiers/overlay-dismiss";
import overlayPortal from "../../modifiers/overlay-portal";
import {
	applyBodyAbsoluteFromViewport,
	getOverlayZIndexAboveMask,
	isEscapeKey
} from "../../utils/overlay-helpers";
import {
	buildOverlayCoordinateApi,
	clampOverlayValue,
	getBoundaryRectInOverlaySpace,
	resolveOverlayBoundary,
	resolveOverlayContext,
	resolveOverlayScrollContext
} from "../../utils/overlay-context";
import UlxPopupHeader from "./header.gjs";
import UlxPopupFooter from "./footer.gjs";
import { t } from "../../utils/i18n";

/** Aligns with LESS transition duration; fallback covers missing `transitionend`. */
const POPUP_TRANSITION_MS = 200;
const POPUP_TRANSITION_FALLBACK_MS = POPUP_TRANSITION_MS + 100;
const POPUP_FOCUSABLE_SELECTOR =
	'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/** When a bottom variant flips above the target, map root class to the matching top variant. */
const POPUP_BOTTOM_TO_TOP_POSITION_CLASS = {
	"position-bottom": "position-top",
	"position-bottom-left": "position-top-left",
	"position-bottom-right": "position-top-right",
	"position-bottom-center": "position-top-center"
};

/** Bottom placement keys; same as `POPUP_BOTTOM_TO_TOP_POSITION_CLASS` (auto-flip targets). */
const POPUP_BOTTOM_POSITIONS = new Set(Object.keys(POPUP_BOTTOM_TO_TOP_POSITION_CLASS));

/**
 * Viewport-space top/left for each `position-*` class; invalid keys fall back to bottom.
 *
 * @param {string} basePosition
 * @param {DOMRect} targetRect
 * @param {number} popupWidth
 * @param {number} popupHeight
 * @param {number} verticalGap
 * @param {number} horizontalGap
 * @returns {{ top: number; left: number; placedAbove: boolean }}
 */
function computePopupPlacement(
	basePosition,
	targetRect,
	popupWidth,
	popupHeight,
	verticalGap,
	horizontalGap
) {
	const { top: tt, bottom: tb, left: tl, right: tr, width: tw, height: th } = targetRect;
	const topSnap = tt - popupHeight - verticalGap;

	const layouts = {
		"position-top": () => ({ top: topSnap, left: tl, placedAbove: true }),
		"position-top-left": () => ({ top: topSnap, left: tl, placedAbove: true }),
		"position-top-right": () => ({ top: topSnap, left: tr - popupWidth, placedAbove: true }),
		"position-top-center": () => ({
			top: topSnap,
			left: tl + (tw - popupWidth) / 2,
			placedAbove: true
		}),
		"position-left": () => ({
			top: tt + (th - popupHeight) / 2,
			left: tl - popupWidth - horizontalGap,
			placedAbove: false
		}),
		"position-right": () => ({
			top: tt + (th - popupHeight) / 2,
			left: tr + horizontalGap,
			placedAbove: false
		}),
		"position-bottom-left": () => ({
			top: tb + verticalGap,
			left: tl,
			placedAbove: false
		}),
		"position-bottom-right": () => ({
			top: tb + verticalGap,
			left: tr - popupWidth,
			placedAbove: false
		}),
		"position-bottom-center": () => ({
			top: tb + verticalGap,
			left: tl + (tw - popupWidth) / 2,
			placedAbove: false
		}),
		"position-bottom": () => ({ top: tb + verticalGap, left: tl, placedAbove: false })
	};

	return (layouts[basePosition] ?? layouts["position-bottom"])();
}

const POPUP_ENTER_ANIMATION_STATES = new Set(["enter", "enter-active", "enter-done"]);
const POPUP_EXIT_ANIMATION_STATES = new Set(["exit", "exit-active", "exit-done"]);

/**
 * Popup module component for displaying lightweight, non-modal overlays anchored to a target element.
 * Uses existing classes from uls-v2 popup.less. Visibility is fully argument-driven via @visible.
 *
 * ## Position
 * - position-bottom (default), position-top, position-left, position-right
 * - position-top-left, position-top-right, position-bottom-left, position-bottom-right
 * - position-top-center, position-bottom-center
 *
 * ## Size
 * - xs-size, s-size, m-size (default), l-size, xl-size
 *
 * ## Variant
 * - elevated, flat, outlined
 *
 * ## Close behavior
 * - **@dismissable** (default true): when true, clicking outside or resizing the window requests close.
 * - **@closable** (default false): when true, shows the close button on the popup chrome.
 * - **@closeOnEscape** (default true): when false, the root Escape handler does not request close.
 * - Parent controls `@visible`; this component never mutates it. It calls `@onHide` when it finishes exit.
 *
 * ## WCAG
 * - Root element uses `role="dialog"` with `aria-modal="false"` and `aria-hidden` reflecting visibility.
 * - With default header (`@title` and no `<:head>`), the title `<h6>` gets a stable unique `id` and the dialog sets `aria-labelledby` to it (unless `@ariaLabel` is set).
 * - Use `@ariaLabel` or pass `aria-label` / `aria-labelledby` via `...attributes` to provide an accessible name when not using the default title pattern.
 * - Focus is moved into the popup on open (first focusable element, or the popup container as fallback).
 * - Escape closes the popup by default (unless @closeOnEscape is false) and returns focus to the trigger.
 *
 * @class UlxPopup
 * @param {boolean} [visible=false] - Controls visibility of the popup.
 * @param {HTMLElement|Event} [target] - Target element or event for popup positioning.
 * @param {'self'|'body'|HTMLElement|Function|string} [context='body'] - Where to render the popup overlay.
 * @param {'self'|'body'|HTMLElement|Function|string} [renderContainer] - Backward-compatible alias for `@context`.
 * @param {'self'|'body'|HTMLElement|Function|string} [appendTo] - Backward-compatible alias for `@context`.
 * @param {'window'|HTMLElement|Function|string} [boundary='window'] - Boundary used for flip/clamp calculations.
 * @param {'window'|HTMLElement|Function|string} [scrollContext='window'] - Scroll target that repositions the popup while open.
 * @param {string} [position='position-bottom'] - Positioning class for pointer and offset.
 * @param {string} [size='m-size'] - Size class: xs-size | s-size | m-size | l-size | xl-size.
 * @param {string} [variant] - Visual variant: elevated | flat | outlined.
 * @param {number} [zIndex] - Overlay z-index override.
 * @param {boolean} [dismissable=true] - When true, clicking outside or resizing closes the popup.
 * @param {boolean} [closable=false] - When true, shows a close button in the popup.
 * @param {boolean} [closeOnEscape=true] - When true (default), Escape closes the popup.
 * @param {string} [customClass] - Additional CSS classes applied to the root element.
 * @param {string} [ariaLabel] - Accessible label for the popup; maps to `aria-label` on root.
 * @param {function} [onShow] - Callback invoked when popup is shown (parent should set @visible).
 * @param {function} [onHide] - Callback invoked after exit animation completes and popup is fully hidden.
 * @param {function} [registerRef] - Callback invoked with the component instance when the popup is mounted (for calling show/hide/toggle), and with null on teardown.
 * @param {string} [dataQa] - Override root data-qa attribute.
 * @param {string} [headerClassName] - Extra class for the header wrapper (when header is shown).
 * @param {string} [footerClassName] - Extra class for the footer wrapper (when footer is shown).
 * Default header/footer (same usage as UlxModal): when <:head> / <:footer> are not passed, use these args.
 * @param {string} [title] - Default header title. When set and no <:head> block, shows default header with this title.
 * @param {string} [cancelButtonLabel] - Default footer cancel label (falls back to i18n cancel).
 * @param {string} [doneButtonLabel] - Default footer confirm label (falls back to i18n confirm).
 * @param {Function} [onCancel] - Callback when default footer cancel button is clicked.
 * @param {Function} [onDone] - Callback when default footer done button is clicked.
 * @param {boolean} [hideFooter=false] - When true, hide default footer (when no <:footer> block).
 * @param {boolean} [hideTertiaryButton=true] - In default footer, hide the tertiary (left) button. Set false with tertiaryButtonLabel to show.
 * @param {string} [tertiaryButtonLabel] - Default footer tertiary button label (e.g. "Reset"). Shown when hideTertiaryButton is false.
 * @param {string} [tertiaryButtonIcon] - Icon name for default footer tertiary button (passed to UlxButton @icon).
 * @param {'left'|'right'} [tertiaryIconPos='left'] - Icon position for tertiary button.
 * @param {Function} [onTertiary] - Callback when default footer tertiary button is clicked.
 * @param {boolean} [hideCancelButton=false] - In default footer, hide the cancel button.
 * @param {boolean} [hideDoneButton=false] - In default footer, hide the done button.
 *
 * ## Named blocks (passable, like UlxModal)
 * - **<:head>** – Custom header content. When omitted and @title is set, default header with title is shown.
 * - **<:body>** – Custom body content. When provided, replaces default content.
 * - **<:footer>** – Custom footer content. When omitted and @hideFooter is false, default footer (Cancel/Done) is shown.
 * - **default** – Popup body when <:body> is not used.
 *
 * ## Usage (default header/footer, like UlxModal Basic)
 * ```gjs
 * <UlxPopup
 *   @visible={{this.showPopup}}
 *   @target={{this.triggerElement}}
 *   @title="Basic Popup"
 *   @onHide={{this.closePopup}}
 *   @cancelButtonLabel="Cancel"
 *   @doneButtonLabel="Confirm"
 *   @onDone={{this.handleConfirm}}
 *   @onCancel={{this.closePopup}}
 * >
 *   Body content here (or use <:body> for custom body)
 * </UlxPopup>
 * ```
 *
 * ## Usage (custom head/footer blocks)
 * ```gjs
 * <UlxPopup @visible={{this.showPopup}} @target={{this.triggerElement}} @onHide={{this.closePopup}}>
 *   <:head>Custom header</:head>
 *   <:footer>Custom footer buttons</:footer>
 * </UlxPopup>
 * ```
 */
export default class UlxPopup extends Component {
	@service modalStack;

	/** `enter` | `enter-active` | `enter-done` | `exit` | `exit-active` | `exit-done` | null */
	@tracked animationState = null;
	@tracked containerElement = null;
	/** After auto-flip, overrides `@position` so the pointer/arrow CSS matches real placement. */
	@tracked currentPositionClass = null;
	/**
	 * Not @tracked: internal anchor only; tracking it would mutate tracked state during the same
	 * render pass that reads it.
	 */
	targetElement = null;
	/** Previous `watchVisibility` `isVisible`; used to detect false→true / true→false edges. */
	_previousVisible = false;

	get baseClass() {
		return getComponentClass("popup");
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "popup");
	}

	/** Stable id for the default title heading; pairs with `aria-labelledby` on the dialog root. */
	get defaultTitleHeadingId() {
		return `ulx-popup-title-${guidFor(this)}`;
	}

	@action
	getDataQa(part) {
		return buildDataQa(this.rootDataQa, part);
	}

	get isVisible() {
		return this.args.visible === true;
	}

	get isDismissable() {
		return this.args.dismissable !== false;
	}

	get isClosable() {
		/* Popup close button is opt-in; Escape still follows @closeOnEscape + overlay-dismiss. */
		return this.args.closable === true;
	}

	get shouldRender() {
		if (this.isVisible) return true;
		if (this.animationState?.startsWith("exit")) return true;
		/* Keep mounted briefly after @visible=false so exit transition can start. */
		return !this.isVisible && POPUP_ENTER_ANIMATION_STATES.has(this.animationState);
	}

	get rootClasses() {
		const { position = "position-bottom", size = "m-size", variant, customClass } = this.args;

		const parts = [this.baseClass];

		const effectivePosition = this.currentPositionClass ?? position;

		effectivePosition && parts.push(effectivePosition);
		size && parts.push(size);
		variant && parts.push(variant);
		!this.isClosable && parts.push("no-close");
		/* `visible` only during enter-* so the first paint sees transition initial state. */
		POPUP_ENTER_ANIMATION_STATES.has(this.animationState) && parts.push("visible");

		this.animationState && parts.push(this.animationState);
		customClass && parts.push(customClass);

		return joinClassNames(...parts);
	}

	get headerClasses() {
		return joinClassNames("popup-header", this.args.headerClassName);
	}

	get bodyClasses() {
		return joinClassNames("popup-body", this.args.bodyClassName);
	}

	get footerClasses() {
		return joinClassNames("popup-footer", this.args.footerClassName);
	}

	get overlayDismissClickActive() {
		return this.isVisible && this.isDismissable;
	}

	get overlayDismissEscapeActive() {
		return this.isVisible && this.args.closeOnEscape !== false;
	}

	get resolvedContext() {
		return resolveOverlayContext(
			this.args.context ?? this.args.renderContainer ?? this.args.appendTo ?? "body"
		);
	}

	get resolvedBoundary() {
		return resolveOverlayBoundary(this.args.boundary ?? "window");
	}

	get resolvedScrollContext() {
		return resolveOverlayScrollContext(this.args.scrollContext ?? "window");
	}

	get shouldPortalOverlay() {
		return this.resolvedContext != null;
	}

	@action
	setTarget(elementOrEvent) {
		if (elementOrEvent instanceof HTMLElement) {
			this.targetElement = elementOrEvent;
		} else if (elementOrEvent?.currentTarget) {
			this.targetElement = elementOrEvent.currentTarget;
		} else if (this.args.target) {
			this.targetElement = this.args.target;
		}
	}

	@action
	show(event) {
		if (event) {
			this.setTarget(event);
		}
		this.args.onShow?.(event);
	}

	@action
	hide() {
		if (!this.isVisible) return;
		this._handleHideInternal();
	}

	@action
	toggle(event) {
		if (this.isVisible) {
			this.hide();
		} else {
			this.show(event);
		}
	}

	@action
	handleCloseClick(event) {
		if (!this.isClosable) return;
		event?.preventDefault();
		this._handleHideInternal();
	}

	@action
	handleRootKeyDown(event) {
		if (this.args.closeOnEscape === false) return;
		if (this.modalStack?.topModal && this.modalStack.topModal !== this) return;

		if (isEscapeKey(event.key) || event.code === "Escape") {
			event.preventDefault();
			event.stopPropagation();
			/* Prevents parent menus/dialogs from handling the same key in this dispatch. */
			event.stopImmediatePropagation();
			this._handleHideInternal();
		}
	}

	@action
	_handleHideInternal() {
		if (!this.containerElement) {
			this.animationState = null;
			this.args.onHide?.();
			return;
		}

		if (POPUP_EXIT_ANIMATION_STATES.has(this.animationState)) {
			return;
		}

		// exit → exit-active (next rAF) drives CSS; complete on transitionend or timeout.
		this.animationState = "exit";

		let transitionCompleted = false;
		let transitionEndTimeout = null;

		const completeExitAnimation = () => {
			if (!transitionCompleted && this.animationState === "exit-active") {
				transitionCompleted = true;
				this.animationState = "exit-done";
				this.modalStack?.unregisterModal(this);
				this._clearZIndex();
				if (this.targetElement && typeof this.targetElement.focus === "function") {
					this.targetElement.focus();
				}
				this.args.onHide?.();
				setTimeout(() => {
					this.animationState = null;
				}, 50);
				this.containerElement?.removeEventListener("transitionend", handleTransitionEnd);
				if (transitionEndTimeout) {
					clearTimeout(transitionEndTimeout);
					transitionEndTimeout = null;
				}
			}
		};

		const handleTransitionEnd = (event) => {
			if (event.target !== this.containerElement) return;
			if (event.propertyName === "opacity" || event.propertyName === "transform") {
				completeExitAnimation();
			}
		};

		this.containerElement.addEventListener("transitionend", handleTransitionEnd);

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (this.animationState === "exit") {
					this.animationState = "exit-active";
					transitionEndTimeout = setTimeout(() => {
						completeExitAnimation();
					}, POPUP_TRANSITION_FALLBACK_MS);
				}
			});
		});
	}

	@action
	_handleShowInternal() {
		if (!this.containerElement) {
			this.animationState = "enter-done";
			return;
		}

		if (POPUP_ENTER_ANIMATION_STATES.has(this.animationState)) {
			return;
		}

		if (!this.targetElement && this.args.target) {
			this.targetElement = this.args.target;
		}

		this.animationState = "enter";
		this.modalStack?.registerModal(this);

		this._alignOverlay();
		this._setZIndex();

		let transitionCompleted = false;
		let transitionEndTimeout = null;

		const completeEnterAnimation = () => {
			if (!transitionCompleted && this.animationState === "enter-active") {
				transitionCompleted = true;
				this.animationState = "enter-done";
				this.containerElement?.removeEventListener("transitionend", handleTransitionEnd);
				if (transitionEndTimeout) {
					clearTimeout(transitionEndTimeout);
					transitionEndTimeout = null;
				}
			}
		};

		const handleTransitionEnd = (event) => {
			if (event.target !== this.containerElement) return;
			if (event.propertyName === "opacity" || event.propertyName === "transform") {
				completeEnterAnimation();
			}
		};

		this.containerElement.addEventListener("transitionend", handleTransitionEnd);

		// Two frames between `enter` and `enter-active` so the first paint picks up the initial state.
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (this.animationState === "enter") {
					this.animationState = "enter-active";
					transitionEndTimeout = setTimeout(() => {
						completeEnterAnimation();
					}, POPUP_TRANSITION_FALLBACK_MS);
				}
			});
		});
	}

	@action
	_alignOverlay() {
		if (!this.containerElement || !this.targetElement) return;

		const container = this.containerElement;
		const target = this.targetElement;
		const resolvedContext = this.resolvedContext;
		const coordinateApi = buildOverlayCoordinateApi(resolvedContext, container);
		const targetRect = coordinateApi.fromViewportRect(target.getBoundingClientRect());
		const boundaryRect = getBoundaryRectInOverlaySpace(this.resolvedBoundary, coordinateApi);
		const containerRect = container.getBoundingClientRect();
		const popupWidth = containerRect.width || container.offsetWidth || 200;
		const popupHeight = containerRect.height || container.offsetHeight || 100;

		// Gaps between target element and popup
		const verticalGap = 8;
		const horizontalGap = 8;
		const viewportPadding = 10;

		const basePosition = this.args.position ?? "position-bottom";

		let {
			top,
			left,
			placedAbove: initialPlacedAbove
		} = computePopupPlacement(
			basePosition,
			targetRect,
			popupWidth,
			popupHeight,
			verticalGap,
			horizontalGap
		);
		let placedAbove = initialPlacedAbove;

		// Automatic vertical flip only for "bottom" variants when there is not
		// enough space below but there is space above.
		const fallbackBoundary = boundaryRect ?? {
			top: 0,
			left: 0,
			right: targetRect.left + popupWidth + viewportPadding,
			bottom: targetRect.bottom + popupHeight + viewportPadding
		};
		const boundaryTop = fallbackBoundary.top;
		const boundaryBottom = fallbackBoundary.bottom;
		const boundaryLeft = fallbackBoundary.left;
		const boundaryRight = fallbackBoundary.right;
		const isBottomVariant = POPUP_BOTTOM_POSITIONS.has(basePosition);

		if (
			isBottomVariant &&
			top + popupHeight > boundaryBottom - viewportPadding &&
			targetRect.top - popupHeight - verticalGap >= boundaryTop + viewportPadding
		) {
			top = targetRect.top - popupHeight - verticalGap;
			placedAbove = true;
		}

		const minLeft = boundaryLeft + viewportPadding;
		const maxLeft = boundaryRight - popupWidth - viewportPadding;
		let minTop = boundaryTop + viewportPadding;
		let maxTop = boundaryBottom - popupHeight - viewportPadding;

		const targetOutTop = targetRect.bottom < boundaryTop + viewportPadding;
		const targetOutBottom = targetRect.top > boundaryBottom - viewportPadding;

		targetOutTop && (minTop = Math.min(minTop, top));
		targetOutBottom && (maxTop = Math.max(maxTop, top));

		// When rendering in document coordinates, allow the popup to move above the viewport
		// instead of sticking to the boundary once the trigger scrolls out of view.
		if (coordinateApi.usesDocumentCoordinates) {
			minTop = Math.min(minTop, -popupHeight);
		}

		left = clampOverlayValue(left, minLeft, Math.max(minLeft, maxLeft));
		top = clampOverlayValue(top, minTop, Math.max(minTop, maxTop));

		if (coordinateApi.usesDocumentCoordinates) {
			applyBodyAbsoluteFromViewport(container, top, left);
		} else {
			coordinateApi.applyPosition(container, top, left);
		}

		/* Remap bottom-* → top-* only when we auto-flipped; explicit top/left/right stay unchanged. */
		this.currentPositionClass = this._getPositionClassForPlacement(basePosition, placedAbove);
	}

	_getPositionClassForPlacement(originalPosition, placedAbove) {
		if (!placedAbove) {
			return originalPosition;
		}

		/* Unknown or non-bottom positions: keep caller’s class (e.g. position-top with placedAbove). */
		return POPUP_BOTTOM_TO_TOP_POSITION_CLASS[originalPosition] ?? originalPosition;
	}

	@action
	_setZIndex() {
		if (!this.containerElement) return;
		const resolvedContext = this.resolvedContext;
		const zIndex =
			typeof this.args.zIndex === "number"
				? this.args.zIndex
				: resolvedContext === document.body
					? getOverlayZIndexAboveMask(this.modalStack, this)
					: 1;
		this.containerElement.style.setProperty("z-index", String(zIndex), "important");
	}

	@action
	_clearZIndex() {
		if (this.containerElement) this.containerElement.style.zIndex = "";
	}

	/** Captures the root element, syncs `@target` if needed, and wires `registerRef`. */
	registerPopup = modifier((element) => {
		this.containerElement = element;

		if (this.args.target && !this.targetElement) {
			this.targetElement = this.args.target;
		}

		this.args.registerRef?.(this);

		return () => {
			this.modalStack?.unregisterModal(this);
			this.containerElement = null;
			this.args.registerRef?.(null);
		};
	});

	isPortalReadyForMeasurement(element) {
		const resolvedContext = this.resolvedContext;
		if (!resolvedContext) return true;
		return element?.parentNode === resolvedContext;
	}

	/**
	 * Parent owns `@visible`; reacts to edges and drives enter/exit (see `shouldRender`).
	 * `animationState` is a positional dep so this re-runs as the transition advances.
	 */
	watchVisibility = modifier((element, [isVisible, targetElement, _animationState]) => {
		const previousVisible = this._previousVisible;
		const isTransitioningToVisible = !previousVisible && isVisible;
		const isTransitioningToHidden = previousVisible && !isVisible;

		if (targetElement && targetElement !== this.targetElement) {
			this.targetElement = targetElement;
		}

		if (isVisible) {
			const shouldShow =
				isTransitioningToVisible && !POPUP_ENTER_ANIMATION_STATES.has(this.animationState);

			if (shouldShow) {
				// `overlayPortal` can lag one tick; measure only once the root is mounted in its final context.
				const checkAndShow = () => {
					if (this.isPortalReadyForMeasurement(element)) {
						if (!POPUP_ENTER_ANIMATION_STATES.has(this.animationState)) {
							requestAnimationFrame(() => {
								this._handleShowInternal();
							});
						}
					} else {
						requestAnimationFrame(checkAndShow);
					}
				};
				checkAndShow();
			}
		} else {
			// If still in enter-* when `@visible` flips false, we must still run exit.
			const isPopupShown = POPUP_ENTER_ANIMATION_STATES.has(this.animationState);
			const wasVisible = isTransitioningToHidden || isPopupShown;

			if (
				wasVisible &&
				(this.animationState !== null || isTransitioningToHidden) &&
				!this.animationState?.startsWith("exit")
			) {
				requestAnimationFrame(() => {
					if (this.containerElement && !this.animationState?.startsWith("exit")) {
						this._handleHideInternal();
					}
				});
			}
		}

		if (
			isVisible &&
			this.animationState === "enter-done" &&
			this.targetElement &&
			this.containerElement
		) {
			this._alignOverlay();
		}

		this._previousVisible = isVisible;
	});

	/** After open, focus first focusable inside the dialog (or the root as fallback). */
	focusFirstOnVisible = modifier((element, [isVisible, animationState]) => {
		if (!isVisible || animationState !== "enter-done") return;

		const firstFocusable = element.querySelector(POPUP_FOCUSABLE_SELECTOR);

		if (firstFocusable) {
			setTimeout(() => firstFocusable.focus(), 0);
		} else {
			setTimeout(() => element.focus(), 0);
		}
	});

	repositionOnScroll = modifier((_, [isVisible, animationState]) => {
		if (!isVisible || animationState !== "enter-done") return;

		const scrollTarget = this.resolvedScrollContext;
		const handleScroll = () => {
			if (this.isVisible && this.animationState === "enter-done") {
				this._alignOverlay();
			}
		};

		scrollTarget?.addEventListener?.("scroll", handleScroll);

		return () => {
			scrollTarget?.removeEventListener?.("scroll", handleScroll);
		};
	});

	/** While open, wrap Tab / Shift+Tab between first and last focusable. */
	focusTrap = modifier((element, [isVisible, animationState]) => {
		if (!isVisible || animationState !== "enter-done") return;

		const getFocusables = () => {
			const nodes = element.querySelectorAll(POPUP_FOCUSABLE_SELECTOR);
			return Array.from(nodes).filter(
				(el) =>
					el.offsetParent !== null &&
					el.disabled !== true &&
					el.getAttribute("aria-disabled") !== "true"
			);
		};

		const handleKeyDown = (e) => {
			if (e.key !== "Tab") return;
			const focusables = getFocusables();
			if (focusables.length === 0) return;
			const first = focusables[0];
			const last = focusables[focusables.length - 1];
			if (e.shiftKey) {
				if (document.activeElement === first) {
					e.preventDefault();
					last.focus();
				}
			} else {
				if (document.activeElement === last) {
					e.preventDefault();
					first.focus();
				}
			}
		};

		element.addEventListener("keydown", handleKeyDown);
		return () => element.removeEventListener("keydown", handleKeyDown);
	});

	/** When dismissable, window resize requests close (same idea as outside click). */
	handleResize = modifier((_, [isVisible]) => {
		if (!this.isDismissable) {
			return;
		}

		const handle = () => {
			if (this.modalStack?.topModal && this.modalStack.topModal !== this) return;
			if (isVisible && this.isVisible && this.isDismissable) {
				this._handleHideInternal();
			}
		};

		window.addEventListener("resize", handle);

		return () => {
			window.removeEventListener("resize", handle);
		};
	});

	<template>
		{{#if this.shouldRender}}
			<div
				class={{this.rootClasses}}
				data-qa={{this.rootDataQa}}
				role="dialog"
				aria-modal="false"
				aria-hidden={{if this.isVisible "false" "true"}}
				aria-labelledby={{if
					(and (not (has-block "head")) @title (not @ariaLabel))
					this.defaultTitleHeadingId
				}}
				aria-label={{if @ariaLabel @ariaLabel}}
				tabindex="-1"
				{{overlayPortal this.shouldPortalOverlay this.resolvedContext}}
				{{this.registerPopup}}
				{{this.watchVisibility this.isVisible this.args.target this.animationState}}
				{{this.focusFirstOnVisible this.isVisible this.animationState}}
				{{this.focusTrap this.isVisible this.animationState}}
				{{this.repositionOnScroll this.isVisible this.animationState}}
				{{overlayDismiss
					this.isVisible
					whenClick=this.overlayDismissClickActive
					whenEscape=this.overlayDismissEscapeActive
					onClose=this._handleHideInternal
					dismissVariant="anchored"
					target=this.targetElement
					useTopModalGuard=true
					componentForStack=this
				}}
				{{this.handleResize this.isVisible}}
				{{on "keydown" this.handleRootKeyDown}}
				...attributes
			>
				<div class="popup-content" data-qa={{this.getDataQa "content"}}>
					{{#if (has-block "head")}}
						<div class={{this.headerClasses}} data-qa={{this.getDataQa "header"}}>
							{{yield to="head"}}
						</div>
					{{else if @title}}
						<div class={{this.headerClasses}} data-qa={{this.getDataQa "header"}}>
							<UlxPopupHeader @title={{@title}} @titleId={{this.defaultTitleHeadingId}} />
						</div>
					{{/if}}

					{{#if (has-block "body")}}
						<div class={{this.bodyClasses}} data-qa={{this.getDataQa "body"}}>
							{{yield to="body"}}
						</div>
					{{else}}
						<div class={{this.bodyClasses}} data-qa={{this.getDataQa "body"}}>
							{{yield}}
						</div>
					{{/if}}

					{{#if (has-block "footer")}}
						<div class={{this.footerClasses}} data-qa={{this.getDataQa "footer"}}>
							{{yield to="footer"}}
						</div>
					{{else}}
						{{#unless @hideFooter}}
							<UlxPopupFooter
								@dataQa={{this.getDataQa "footer"}}
								@footerClassName={{@footerClassName}}
								@tertiaryButtonLabel={{@tertiaryButtonLabel}}
								@tertiaryButtonIcon={{@tertiaryButtonIcon}}
								@tertiaryIconPos={{@tertiaryIconPos}}
								@onTertiary={{@onTertiary}}
								@hideTertiaryButton={{@hideTertiaryButton}}
								@cancelLabel={{@cancelButtonLabel}}
								@doneLabel={{@doneButtonLabel}}
								@onCancel={{@onCancel}}
								@onDone={{@onDone}}
								@hideCancelButton={{@hideCancelButton}}
								@hideDoneButton={{@hideDoneButton}}
							/>
						{{/unless}}
					{{/if}}
				</div>
				{{#if this.isClosable}}
					<button
						type="button"
						class="popup-close-button"
						data-qa={{this.getDataQa "close"}}
						aria-label={{t "lbl.close"}}
						{{on "click" this.handleCloseClick}}
					>
						<span class="popup-close-icon" aria-hidden="true"></span>
					</button>
				{{/if}}
			</div>
		{{/if}}
	</template>
}
