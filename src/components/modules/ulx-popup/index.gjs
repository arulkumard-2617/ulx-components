import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { modifier } from "ember-modifier";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../../utils/component-config";
import UlxPopupHeader from "./header.gjs";
import UlxPopupFooter from "./footer.gjs";

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
 * - **@closable** (default true): when false, close button and Escape key do not close the popup.
 * - **@closeOnEscape** (default true): when true and @closable is not false, Escape closes the popup.
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
 * @param {string} [headerClassName] - Extra class for the header wrapper (when header is shown).
 * @param {string} [footerClassName] - Extra class for the footer wrapper (when footer is shown).
 * Default header/footer (same usage as UlxModal): when <:head> / <:footer> are not passed, use these args.
 * @param {string} [title] - Default header title. When set and no <:head> block, shows default header with this title.
 * @param {string} [cancelButtonLabel="Cancel"] - Default footer cancel button label.
 * @param {string} [doneButtonLabel="Confirm"] - Default footer done/confirm button label.
 * @param {Function} [onCancel] - Callback when default footer cancel button is clicked.
 * @param {Function} [onDone] - Callback when default footer done button is clicked.
 * @param {boolean} [hideFooter=false] - When true, hide default footer (when no <:footer> block).
 * @param {boolean} [hideTertiaryButton=true] - In default footer, hide the tertiary (left) button. Set false with tertiaryButtonLabel to show.
 * @param {string} [tertiaryButtonLabel] - Default footer tertiary button label (e.g. "Reset"). Shown when hideTertiaryButton is false.
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
	@tracked animationState = null; // 'enter', 'enter-active', 'enter-done', 'exit', 'exit-active', 'exit-done', null
	@tracked containerElement = null;
	@tracked currentPositionClass = null;
	// targetElement is an internal reference only; it is intentionally not tracked
	// to avoid mutating tracked state during the same computation that reads it.
	targetElement = null;

	_previousVisible = false;

	get baseClass() {
		return getComponentClass("popup");
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
		// Render while visible or while exit animation is playing
		if (this.isVisible) {
			return true;
		}
		if (this.animationState?.startsWith("exit")) {
			return true;
		}
		if (
			!this.isVisible &&
			(this.animationState === "enter-done" ||
				this.animationState === "enter-active" ||
				this.animationState === "enter")
		) {
			return true;
		}
		return false;
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
		if (
			this.animationState === "enter" ||
			this.animationState === "enter-active" ||
			this.animationState === "enter-done"
		) {
			parts.push("visible");
		}

		this.animationState && parts.push(this.animationState);
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get headerClasses() {
		const { headerClassName } = this.args;
		const parts = ["popup-header"];
		headerClassName && parts.push(headerClassName);
		return parts.filter(Boolean).join(" ");
	}

	get bodyClasses() {
		const { bodyClassName } = this.args;
		const parts = ["popup-body"];
		bodyClassName && parts.push(bodyClassName);
		return parts.filter(Boolean).join(" ");
	}

	get footerClasses() {
		const { footerClassName } = this.args;
		const parts = ["popup-footer"];
		footerClassName && parts.push(footerClassName);
		return parts.filter(Boolean).join(" ");
	}

	get ariaLabel() {
		return this.args.ariaLabel;
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
	hide(event) {
		if (!this.isVisible) return;
		this._handleHideInternal();
	}

	@action
	toggle(event) {
		if (this.isVisible) {
			this.hide(event);
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

		if (event.key === "Escape" || event.key === "Esc") {
			event.preventDefault();
			event.stopPropagation();
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

		if (
			this.animationState === "exit" ||
			this.animationState === "exit-active" ||
			this.animationState === "exit-done"
		) {
			return;
		}

		this.animationState = "exit";

		let transitionCompleted = false;
		const transitionDuration = 200;
		let transitionEndTimeout = null;

		const completeExitAnimation = () => {
			if (!transitionCompleted && this.animationState === "exit-active") {
				transitionCompleted = true;
				this.animationState = "exit-done";
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
					}, transitionDuration + 100);
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

		if (
			this.animationState === "enter" ||
			this.animationState === "enter-active" ||
			this.animationState === "enter-done"
		) {
			return;
		}

		if (!this.targetElement && this.args.target) {
			this.targetElement = this.args.target;
		}

		this.animationState = "enter";

		this._alignOverlay();
		this._setZIndex();

		let transitionCompleted = false;
		const transitionDuration = 200;
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

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (this.animationState === "enter") {
					this.animationState = "enter-active";
					transitionEndTimeout = setTimeout(() => {
						completeEnterAnimation();
					}, transitionDuration + 100);
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

		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

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
		const isBottomVariant =
			basePosition === "position-bottom" ||
			basePosition === "position-bottom-left" ||
			basePosition === "position-bottom-right" ||
			basePosition === "position-bottom-center";

		if (
			isBottomVariant &&
			top + popupHeight > viewportHeight - 10 &&
			targetRect.top - popupHeight - verticalGap >= 10
		) {
			top = targetRect.top - popupHeight - verticalGap;
			placedAbove = true;
		}

		// Convert viewport coordinates to document coordinates so that the popup
		// moves together with the target when the page scrolls.
		const scrollX = window.pageXOffset ?? window.scrollX ?? 0;
		const scrollY = window.pageYOffset ?? window.scrollY ?? 0;

		container.style.position = "absolute";
		container.style.top = `${top + scrollY}px`;
		container.style.left = `${left + scrollX}px`;
		container.style.right = "auto";
		container.style.bottom = "auto";
		container.style.margin = "0";

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
		const baseZIndex = 1100;
		this.containerElement.style.zIndex = String(baseZIndex);
	}

	@action
	_clearZIndex() {
		if (this.containerElement) {
			this.containerElement.style.zIndex = "";
		}
	}

	appendToBody = modifier((element, [shouldRender]) => {
		if (!shouldRender) {
			if (element.parentNode === document.body) {
				document.body.removeChild(element);
			}
			return;
		}

		if (element.parentNode !== document.body) {
			document.body.appendChild(element);
		}

		return () => {
			if (element.parentNode === document.body) {
				document.body.removeChild(element);
			}
		};
	});

	registerPopup = modifier((element) => {
		this.containerElement = element;

		if (this.args.target && !this.targetElement) {
			this.targetElement = this.args.target;
		}

		this.args.registerRef?.(this);

		return () => {
			this.containerElement = null;
			this.args.registerRef?.(null);
		};
	});

	watchVisibility = modifier((element, [isVisible, targetElement]) => {
		const previousVisible = this._previousVisible;
		const isTransitioningToVisible = !previousVisible && isVisible;
		const isTransitioningToHidden = previousVisible && !isVisible;

		if (targetElement && targetElement !== this.targetElement) {
			this.targetElement = targetElement;
		}

		if (isVisible) {
			const shouldShow =
				isTransitioningToVisible &&
				this.animationState !== "enter" &&
				this.animationState !== "enter-active" &&
				this.animationState !== "enter-done";

			if (shouldShow) {
				const checkAndShow = () => {
					if (element.parentNode === document.body) {
						if (
							this.animationState !== "enter" &&
							this.animationState !== "enter-active" &&
							this.animationState !== "enter-done"
						) {
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
			this._previousVisible = isVisible;
		} else if (!isVisible) {
			const isPopupShown =
				this.animationState === "enter-done" ||
				this.animationState === "enter-active" ||
				this.animationState === "enter";
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
			this._previousVisible = isVisible;
		} else {
			this._previousVisible = isVisible;
		}

		if (
			isVisible &&
			this.animationState === "enter-done" &&
			this.targetElement &&
			this.containerElement
		) {
			this._alignOverlay();
		}
	});

	focusFirstOnVisible = modifier((element, [isVisible, animationState]) => {
		if (!isVisible || animationState !== "enter-done") return;

		const focusableSelector =
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
		const firstFocusable = element.querySelector(focusableSelector);

		if (firstFocusable) {
			setTimeout(() => firstFocusable.focus(), 0);
		} else {
			setTimeout(() => element.focus(), 0);
		}
	});

	get _focusableSelector() {
		return 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
	}

	focusTrap = modifier((element, [isVisible, animationState]) => {
		if (!isVisible || animationState !== "enter-done") return;

		const getFocusables = () => {
			const nodes = element.querySelectorAll(this._focusableSelector);
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

	closeOnClickOutside = modifier((element, [isVisible]) => {
		if (!this.isDismissable) {
			return;
		}

		const handleClick = (event) => {
			if (!isVisible) return;

			const isOutsideContainer = element && !element.contains(event.target);
			const isOutsideTarget =
				this.targetElement &&
				!(this.targetElement === event.target || this.targetElement.contains(event.target));

			if (isOutsideContainer && isOutsideTarget && this.isVisible && this.isDismissable) {
				this._handleHideInternal();
			}
		};

		document.addEventListener("click", handleClick, true);

		return () => {
			document.removeEventListener("click", handleClick, true);
		};
	});

	handleResize = modifier((_, [isVisible]) => {
		if (!this.isDismissable) {
			return;
		}

		const handle = () => {
			if (isVisible && this.isVisible && this.isDismissable) {
				this._handleHideInternal();
			}
		};

		window.addEventListener("resize", handle);

		return () => {
			window.removeEventListener("resize", handle);
		};
	});

	escapeListener = modifier((_, [isVisible]) => {
		if (this.args.closeOnEscape === false) {
			return;
		}

		const handleKeyDown = (event) => {
			if (!isVisible || !this.isVisible) return;
			if (event.key === "Escape" || event.key === "Esc") {
				event.preventDefault();
				event.stopPropagation();
				this._handleHideInternal();
			}
		};

		document.addEventListener("keydown", handleKeyDown, true);

		return () => {
			document.removeEventListener("keydown", handleKeyDown, true);
		};
	});

	<template>
		{{#if this.shouldRender}}
			<div
				class={{this.rootClasses}}
				role="dialog"
				aria-modal="false"
				aria-hidden={{if this.isVisible "false" "true"}}
				aria-label={{if this.ariaLabel this.ariaLabel}}
				tabindex="-1"
				{{this.appendToBody this.shouldRender}}
				{{this.registerPopup}}
				{{this.watchVisibility this.isVisible this.args.target}}
				{{this.focusFirstOnVisible this.isVisible this.animationState}}
				{{this.focusTrap this.isVisible this.animationState}}
				{{this.closeOnClickOutside this.isVisible}}
				{{this.handleResize this.isVisible}}
				{{this.escapeListener this.isVisible}}
				{{on "keydown" this.handleRootKeyDown}}
				...attributes
			>
				<div class="popup-content">
					{{#if (has-block "head")}}
						<div class={{this.headerClasses}}>
							{{yield to="head"}}
						</div>
					{{else if @title}}
						<div class={{this.headerClasses}}>
							<UlxPopupHeader @title={{@title}} />
						</div>
					{{/if}}

					{{#if (has-block "body")}}
						<div class={{this.bodyClasses}}>
							{{yield to="body"}}
						</div>
					{{else}}
						<div class={{this.bodyClasses}}>
							{{yield}}
						</div>
					{{/if}}

					{{#if (has-block "footer")}}
						<div class={{this.footerClasses}}>
							{{yield to="footer"}}
						</div>
					{{else}}{{#unless @hideFooter}}
							<UlxPopupFooter
								@footerClassName={{@footerClassName}}
								@tertiaryButtonLabel={{@tertiaryButtonLabel}}
								@onTertiary={{@onTertiary}}
								@hideTertiaryButton={{@hideTertiaryButton}}
								@cancelLabel={{@cancelButtonLabel}}
								@doneLabel={{@doneButtonLabel}}
								@onCancel={{@onCancel}}
								@onDone={{@onDone}}
								@hideCancelButton={{@hideCancelButton}}
								@hideDoneButton={{@hideDoneButton}}
							/>
						{{/unless}}{{/if}}
				</div>
				{{#if this.isClosable}}
					<button
						type="button"
						class="popup-close-button"
						aria-label="Close"
						{{on "click" this.handleCloseClick}}
					>
						<span class="popup-close-icon" aria-hidden="true"></span>
					</button>
				{{/if}}
			</div>
		{{/if}}
	</template>
}
