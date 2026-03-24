import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { modifier } from "ember-modifier";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../../utils/component-config";
import { buildDataQa, resolveRootDataQa } from "../../../utils/data-qa";
import appendToBody from "../../../modifiers/append-to-body";
import overlayDismiss from "../../../modifiers/overlay-dismiss";
import {
	applyBodyAbsoluteFromViewport,
	getOverlayZIndexAboveMask
} from "../../../utils/overlay-helpers";
import UlxPopupHeader from "./header.gjs";
import UlxPopupFooter from "./footer.gjs";
import { t } from "../../../utils/i18n";

/** Aligns with LESS transition duration; fallback covers missing `transitionend`. */
const POPUP_TRANSITION_MS = 200;
const POPUP_TRANSITION_FALLBACK_MS = POPUP_TRANSITION_MS + 100;
const POPUP_FOCUSABLE_SELECTOR =
	'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/** Bottom variants that may auto-flip to a top-* class when there is no room below. */
const POPUP_BOTTOM_POSITIONS = new Set([
	"position-bottom",
	"position-bottom-left",
	"position-bottom-right",
	"position-bottom-center"
]);

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
 * - Use `@ariaLabel` or pass `aria-label` / `aria-labelledby` via `...attributes` to provide an accessible name.
 * - Focus is moved into the popup on open (first focusable element, or the popup container as fallback).
 * - Escape closes the popup by default (unless @closeOnEscape is false) and returns focus to the trigger.
 *
 * @class UlxPopup
 * @param {boolean} [visible=false] - Controls visibility of the popup.
 * @param {HTMLElement|Event} [target] - Target element or event for popup positioning.
 * @param {string} [position='position-bottom'] - Positioning class for pointer and offset.
 * @param {string} [size='m-size'] - Size class: xs-size | s-size | m-size | l-size | xl-size.
 * @param {string} [variant] - Visual variant: elevated | flat | outlined.
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

	@tracked animationState = null; // 'enter', 'enter-active', 'enter-done', 'exit', 'exit-active', 'exit-done', null
	@tracked containerElement = null;
	@tracked currentPositionClass = null;
	// targetElement is an internal reference only; it is intentionally not tracked
	// to avoid mutating tracked state during the same computation that reads it.
	targetElement = null;

	/** Compared each `watchVisibility` run to detect `@visible` false→true / true→false edges. */
	_previousVisible = false;

	get baseClass() {
		return getComponentClass("popup");
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "popup");
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
		// Close icon and ESC should be opt-in; default is no close affordance.
		return this.args.closable === true;
	}

	get shouldRender() {
		if (this.isVisible) return true;
		if (this.animationState?.startsWith("exit")) return true;
		// Stay in DOM briefly after `@visible` becomes false so exit transition can start.
		return !this.isVisible && POPUP_ENTER_ANIMATION_STATES.has(this.animationState);
	}

	get rootClasses() {
		const { position = "position-bottom", size = "m-size", variant, customClass } = this.args;

		const parts = [this.baseClass];

		const effectivePosition = this.currentPositionClass ?? position;

		effectivePosition && parts.push(effectivePosition);
		size && parts.push(size);
		variant && parts.push(variant);

		if (!this.isClosable) {
			parts.push("no-close");
		}

		// Only add visible once enter animation has started to avoid showing
		// the popup fully before transition classes are applied.
		POPUP_ENTER_ANIMATION_STATES.has(this.animationState) && parts.push("visible");

		this.animationState && parts.push(this.animationState);
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	buildSectionClass(base, extraClass) {
		const parts = [base];
		extraClass && parts.push(extraClass);
		return parts.filter(Boolean).join(" ");
	}

	get headerClasses() {
		return this.buildSectionClass("popup-header", this.args.headerClassName);
	}

	get bodyClasses() {
		return this.buildSectionClass("popup-body", this.args.bodyClassName);
	}

	get footerClasses() {
		return this.buildSectionClass("popup-footer", this.args.footerClassName);
	}

	get ariaLabel() {
		return this.args.ariaLabel;
	}

	get overlayDismissClickActive() {
		return this.isVisible && this.isDismissable;
	}

	get overlayDismissEscapeActive() {
		return this.isVisible && this.args.closeOnEscape !== false;
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

		if (event.key === "Escape" || event.key === "Esc" || event.code === "Escape") {
			event.preventDefault();
			event.stopPropagation();
			// Avoid parent menus/dialogs also handling the same Escape in one dispatch.
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

		const targetRect = target.getBoundingClientRect();
		const containerRect = container.getBoundingClientRect();
		const popupWidth = containerRect.width || container.offsetWidth || 200;
		const popupHeight = containerRect.height || container.offsetHeight || 100;

		// Gaps between target element and popup
		const verticalGap = 8;
		const horizontalGap = 8;

		const basePosition = this.args.position ?? "position-bottom";

		// Base coordinates in viewport space (before scroll offsets)
		let top;
		let left;
		let placedAbove = false;

		// Initial placement based on requested position
		switch (basePosition) {
			case "position-top":
				top = targetRect.top - popupHeight - verticalGap;
				left = targetRect.left;
				placedAbove = true;
				break;
			case "position-top-left":
				top = targetRect.top - popupHeight - verticalGap;
				left = targetRect.left;
				placedAbove = true;
				break;
			case "position-top-right":
				top = targetRect.top - popupHeight - verticalGap;
				left = targetRect.right - popupWidth;
				placedAbove = true;
				break;
			case "position-top-center":
				top = targetRect.top - popupHeight - verticalGap;
				left = targetRect.left + (targetRect.width - popupWidth) / 2;
				placedAbove = true;
				break;
			case "position-left":
				top = targetRect.top + (targetRect.height - popupHeight) / 2;
				left = targetRect.left - popupWidth - horizontalGap;
				break;
			case "position-right":
				top = targetRect.top + (targetRect.height - popupHeight) / 2;
				left = targetRect.right + horizontalGap;
				break;
			case "position-bottom-left":
				top = targetRect.bottom + verticalGap;
				left = targetRect.left;
				break;
			case "position-bottom-right":
				top = targetRect.bottom + verticalGap;
				left = targetRect.right - popupWidth;
				break;
			case "position-bottom-center":
				top = targetRect.bottom + verticalGap;
				left = targetRect.left + (targetRect.width - popupWidth) / 2;
				break;
			case "position-bottom":
			default:
				top = targetRect.bottom + verticalGap;
				left = targetRect.left;
				break;
		}

		// Automatic vertical flip only for "bottom" variants when there is not
		// enough space below but there is space above.
		const viewportHeight = window.innerHeight;
		const isBottomVariant = POPUP_BOTTOM_POSITIONS.has(basePosition);

		if (
			isBottomVariant &&
			top + popupHeight > viewportHeight - 10 &&
			targetRect.top - popupHeight - verticalGap >= 10
		) {
			top = targetRect.top - popupHeight - verticalGap;
			placedAbove = true;
		}

		applyBodyAbsoluteFromViewport(container, top, left);

		// Update position class when we have flipped vertically so that the
		// pointer arrow direction matches the actual placement.
		const originalPosition = this.args.position ?? "position-bottom";
		this.currentPositionClass = this._getPositionClassForPlacement(originalPosition, placedAbove);
	}

	_getPositionClassForPlacement(originalPosition, placedAbove) {
		// Only remap when we have automatically flipped a bottom variant; for
		// explicit top/left/right positions keep the original class.
		if (
			!placedAbove ||
			(originalPosition !== "position-bottom" &&
				originalPosition !== "position-bottom-left" &&
				originalPosition !== "position-bottom-right" &&
				originalPosition !== "position-bottom-center")
		) {
			return originalPosition;
		}

		switch (originalPosition) {
			case "position-bottom":
				return "position-top";
			case "position-bottom-left":
				return "position-top-left";
			case "position-bottom-right":
				return "position-top-right";
			case "position-bottom-center":
				return "position-top-center";
			default:
				return originalPosition;
		}
	}

	@action
	_setZIndex() {
		if (!this.containerElement) return;
		this.containerElement.style.zIndex = String(getOverlayZIndexAboveMask(this.modalStack, this));
	}

	@action
	_clearZIndex() {
		if (this.containerElement) this.containerElement.style.zIndex = "";
	}

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

	/** Parent owns `@visible`; we react to edges and run show/hide animations (see `shouldRender`). */
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
				// `appendToBody` can lag one tick; measure only once the root is under `document.body`.
				const checkAndShow = () => {
					if (element.parentNode === document.body) {
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

	focusFirstOnVisible = modifier((element, [isVisible, animationState]) => {
		if (!isVisible || animationState !== "enter-done") return;

		const firstFocusable = element.querySelector(POPUP_FOCUSABLE_SELECTOR);

		if (firstFocusable) {
			setTimeout(() => firstFocusable.focus(), 0);
		} else {
			setTimeout(() => element.focus(), 0);
		}
	});

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
				aria-label={{if this.ariaLabel this.ariaLabel}}
				tabindex="-1"
				{{appendToBody this.shouldRender}}
				{{this.registerPopup}}
				{{this.watchVisibility this.isVisible this.args.target this.animationState}}
				{{this.focusFirstOnVisible this.isVisible this.animationState}}
				{{this.focusTrap this.isVisible this.animationState}}
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
							<UlxPopupHeader @title={{@title}} />
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
