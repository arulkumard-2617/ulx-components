import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { on } from "@ember/modifier";
import { schedule } from "@ember/runloop";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../../utils/component-config";
import UlxModalHeader from "./header.gjs";
import UlxModalBody from "./body.gjs";
import UlxModalFooter from "./footer.gjs";

const TRANSITION_DURATION = 150; // Match CSS transition duration (150ms)

/**
 * Modal component for displaying content in an overlay dialog.
 * Renders to document.body using portal ({{in-element}}).
 * Supports custom named blocks or default header/body/footer.
 *
 * ## Usage
 * ```gjs
 * <UlxModal
 *   @visible={{this.showModal}}
 *   @title="Confirm Action"
 *   @onHide={{this.handleClose}}
 *   @onDone={{this.handleDone}}
 *   @width="500px"
 *   @position="center"
 *   @closeOnBackdrop={{true}}
 *   @scrollable={{true}}
 *   @draggable={{true}}
 *   @resizable={{true}}
 *   @blockScroll={{true}}
 *   @keepInViewport={{true}}
 *   @maximizable={{true}}
 * >
 *   <:head>Custom header content</:head>
 *   <:body>Custom body content</:body>
 *   <:footer>Custom footer buttons</:footer>
 *   With @headless={{true}}: <UlxModal @headless={{true}} as |hide|>Custom content</UlxModal>
 * </UlxModal>
 * ```
 *
 * ## WCAG Compliance
 * - Modal traps focus within dialog
 * - Escape key closes modal
 * - Tab/Shift+Tab cycles through focusable elements
 * - Backdrop click closes modal (when @closeOnBackdrop=true)
 * - Focus returns to trigger element on close
 *
 * @class UlxModal
 * @param {boolean} visible - Controls modal visibility
 * @param {string} [title] - Modal title (used when no :head block provided)
 * @param {string} [width] - Modal width (CSS value, e.g. "500px", "50%")
 * @param {string} [position="center"] - Modal position: "center", "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left", "bottom-right"
 * @param {string} [size="m-size"] - Modal size: "xs-size", "s-size", "m-size", "l-size", "xl-size"
 * @param {boolean} [scrollable=true] - Enable scrollable content area
 * @param {boolean} [closeOnBackdrop=false] - Close modal when backdrop is clicked
 * @param {boolean} [closeOnEscape=true] - Close modal when Escape key is pressed
 * @param {boolean} [showCloseButton=true] - Show close button in header
 * @param {string} [closeIconName="close-icon-01"] - Icon name for close button
 * @param {string} [closeIconComponentClass="bs-icons1"] - Icon component class for close button
 * @param {string} [closeButtonVariant="text"] - UlxButton variant for close button
 * @param {string} [closeIconSize="s18"] - Icon size for close button
 * @param {boolean} [closeButtonText=true] - UlxButton text style for close button
 * @param {string} [maximizeIconName="expand-icon"] - Icon name for maximize button (when not maximized)
 * @param {string} [minimizeIconName="collapse-icon-01"] - Icon name for minimize/restore button (when maximized)
 * @param {string} [maximizeIconComponentClass="bs-icons1"] - Icon component class for maximize button
 * @param {string} [maximizeButtonVariant="text"] - UlxButton variant for maximize button
 * @param {string} [maximizeIconSize] - Icon size for maximize button
 * @param {boolean} [maximizeButtonText=true] - UlxButton text style for maximize button
 * @param {string} [animationType="fade"] - Animation type: "fade", "zoom", "slide"
 * @param {string} [variant] - Visual variant: "elevated", "flat"
 * @param {boolean} [draggable=false] - Enable dragging dialog by header
 * @param {boolean} [resizable=false] - Enable resizing dialog
 * @param {boolean} [modal=true] - When false, no overlay/backdrop; dialog is non-blocking (uses dialog-mask:not(.modal) from uls-v2)
 * @param {boolean} [blockScroll=true] - Block body scroll when modal is visible
 * @param {boolean} [keepInViewport=true] - Keep dialog within viewport bounds
 * @param {boolean} [maximizable=false] - Show maximize/minimize button
 * @param {boolean} [maximized=false] - Display dialog in maximized state
 * @param {Object} [breakpoints] - Responsive width breakpoints, e.g. {"960px": "75vw", "640px": "90vw"}
 * @param {string} [maskClassName] - Additional CSS class for mask/backdrop
 * @param {string} [contentClassName] - Additional CSS class for content area
 * @param {string} [headerClassName] - Additional CSS class for header
 * @param {Function} [onHide] - Callback when modal is hidden/closed (close button, escape key, backdrop click)
 * @param {Function} [onCancel] - Callback when cancel button is clicked
 * @param {Function} [onDone] - Callback when done/confirm button is clicked. If returns a Promise, modal waits for completion before auto-closing
 * @param {Function} [onShow] - Callback when modal is shown
 * @param {Function} [onMaskClick] - Callback when mask/backdrop is clicked
 * @param {Function} [onMaximize] - Callback when maximize state changes
 * @param {Function} [onError] - Callback when onDone/onCancel promise rejects (receives error as argument)
 * @param {boolean} [autoCloseOnDone=true] - Auto-close modal after onDone promise resolves successfully
 * @param {boolean} [autoCloseOnCancel=false] - Auto-close modal after onCancel completes
 * @param {string} [cancelButtonLabel="Cancel"] - Label for default cancel button
 * @param {string} [doneButtonLabel="Confirm"] - Label for default done button
 * @param {string} [submittingLabel] - Label for done button during submission (defaults to doneButtonLabel)
 * @param {boolean} [showDefaultFooter=false] - Show default footer buttons when no :footer block provided
 * @param {boolean} [headless=false] - When true, render only the default block (fully custom content). Yield hide callback as block param. Use: <UlxModal @headless={{true}} as |hide|>...</UlxModal>
 * @param {number} [zIndexBase=1000] - Base z-index for modal stacking
 */
export default class UlxModal extends Component {
	@service modalStack;

	@tracked destinationElement = null;
	@tracked isMaximized = false;
	@tracked isDragging = false;
	@tracked isSubmitting = false;
	@tracked transitionState = ""; // "", "enter", "enter-active", "enter-done", "exit-active", "exit-done"
	@tracked shouldRender = false; // Controls whether modal is in DOM (for exit animations)
	previousVisible = false; // Track previous visibility state

	constructor(owner, args) {
		super(owner, args);
		// Create destination element in body for portal rendering
		if (typeof document !== "undefined") {
			this.destinationElement = document.body;
		}
		// Initialize maximized state from args
		this.isMaximized = this.args.maximized || false;
		// Initialize shouldRender based on initial visibility
		this.shouldRender = this.args.visible || false;
		this.previousVisible = this.args.visible || false;
	}

	get baseClass() {
		return getComponentClass("dialog");
	}

	get modalClasses() {
		const parts = [this.baseClass];

		// Size variant (not applied when maximized)
		if (!this.isMaximized) {
			const size = this.args.size || "m-size";
			parts.push(size);
		}

		// Position variant (not applied when maximized)
		if (!this.isMaximized) {
			const position = this.args.position || "center";
			parts.push(`position-${position}`);
		}

		// Visual variant
		if (this.args.variant) {
			parts.push(this.args.variant);
		}

		// Maximized state
		if (this.isMaximized) {
			parts.push("maximized");
		}

		// Draggable
		if (this.draggable) {
			parts.push("draggable");
		}

		// Transition state classes
		if (this.transitionState) {
			parts.push(this.transitionState);
		}

		// Custom class
		if (this.args.contentClassName) {
			parts.push(this.args.contentClassName);
		}

		return parts.filter(Boolean).join(" ");
	}

	get maskClasses() {
		const parts = ["dialog-mask"];
		this.modal && parts.push("modal");

		if (this.args.visible) {
			parts.push("visible");
		}

		if (this.args.animationType) {
			parts.push(`animation-${this.args.animationType}`);
		}

		// Custom mask class
		if (this.args.maskClassName) {
			parts.push(this.args.maskClassName);
		}

		return parts.filter(Boolean).join(" ");
	}

	get modalStyle() {
		const styles = [];

		// Don't apply width when maximized
		if (this.args.width && !this.isMaximized) {
			styles.push(`width: ${this.args.width}`);
		}

		// Apply responsive breakpoints
		if (this.args.breakpoints && !this.isMaximized) {
			// Note: Breakpoints would be better handled via CSS media queries
			// This is a simplified approach for demonstration
			Object.entries(this.args.breakpoints).forEach(([breakpoint, width]) => {
				// Add CSS custom properties for breakpoint handling
				styles.push(`--dialog-width-${breakpoint}: ${width}`);
			});
		}

		// Handle z-index for stacking using modal-stack service
		if (this.args.visible) {
			const zIndex = this.modalStack.getZIndex(this);
			styles.push(`z-index: ${zIndex}`);
		}

		return styles.join("; ");
	}

	get closeOnBackdrop() {
		return this.args.closeOnBackdrop ?? false;
	}

	get closeOnEscape() {
		return this.args.closeOnEscape ?? true;
	}

	get scrollable() {
		return this.args.scrollable ?? true;
	}

	get showCloseButton() {
		return this.args.showCloseButton ?? true;
	}

	get modal() {
		return this.args.modal ?? true;
	}

	get blockScroll() {
		return this.args.blockScroll ?? true;
	}

	get draggable() {
		return this.args.draggable ?? false;
	}

	get resizable() {
		return this.args.resizable ?? false;
	}

	get maximizable() {
		return this.args.maximizable ?? false;
	}

	get keepInViewport() {
		return this.args.keepInViewport ?? true;
	}


	@action
	handleBackdropClick(event) {
		// Call onMaskClick callback if provided
		if (this.args.onMaskClick) {
			this.args.onMaskClick(event);
		}

		// Only close if clicking directly on the mask (not on dialog content)
		if (this.closeOnBackdrop && event.target.classList.contains("dialog-mask")) {
			this.handleClose();
		}
	}

	@action
	handleClose() {
		if (this.args.onHide) {
			this.args.onHide();
		}
	}

	@action
	handleCancel() {
		if (this.args.onCancel) {
			const result = this.args.onCancel();

			// If callback returns a promise, handle async behavior
			if (result && typeof result.then === "function") {
				this.isSubmitting = true;
				result
					.then(() => {
						// Auto-close on cancel if explicitly enabled
						const autoCloseOnCancel = this.args.autoCloseOnCancel ?? false;
						if (autoCloseOnCancel) {
							this.handleClose();
						}
					})
					.catch((error) => {
						// Stay open on error
						if (this.args.onError) {
							this.args.onError(error);
						}
					})
					.finally(() => {
						this.isSubmitting = false;
					});
			}
		}
	}

	@action
	handleDone() {
		if (this.args.onDone) {
			const result = this.args.onDone();

			// If callback returns a promise, handle async behavior
			if (result && typeof result.then === "function") {
				this.isSubmitting = true;
				result
					.then(() => {
						// Auto-close on success (default behavior)
						const autoCloseOnDone = this.args.autoCloseOnDone ?? true;
						if (autoCloseOnDone) {
							this.handleClose();
						}
					})
					.catch((error) => {
						// Stay open on error - allows parent to show error message
						if (this.args.onError) {
							this.args.onError(error);
						}
					})
					.finally(() => {
						this.isSubmitting = false;
					});
			}
		}
	}

	@action
	handleMaximize() {
		this.isMaximized = !this.isMaximized;
		if (this.args.onMaximize) {
			this.args.onMaximize({ maximized: this.isMaximized });
		}
	}

	// Main modal lifecycle modifier - handles visibility transitions, keyboard, and focus
	modalLifecycle = modifier((maskElement) => {
		let enterTimer = null;
		let enterActiveTimer = null;
		let exitTimer = null;
		let unmountTimer = null;
		let previousActiveElement = null;

		// Get the dialog element (child of mask)
		const dialogElement = maskElement.querySelector('[role="dialog"]');

		// Detect visibility change for transitions
		const currentVisible = this.args.visible;
		const wasVisible = this.previousVisible;

		if (currentVisible && !wasVisible) {
			// Opening: visible changed from false to true
			this.shouldRender = true;
			this.transitionState = "enter";
			
			enterTimer = setTimeout(() => {
				this.transitionState = "enter-active";
				
				enterActiveTimer = setTimeout(() => {
					this.transitionState = "enter-done";
				}, TRANSITION_DURATION);
			}, 0);

			// Focus management on open
			previousActiveElement = document.activeElement;
			
			// Block body scroll if enabled
			if (this.blockScroll && typeof document !== "undefined") {
				document.body.style.overflow = "hidden";
			}
			
			// Focus the modal
			setTimeout(() => {
				if (dialogElement) {
					const firstFocusable = dialogElement.querySelector(
						'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
					);
					if (firstFocusable) {
						firstFocusable.focus();
					} else {
						dialogElement.focus();
					}
				}
			}, 100);

			// Call onShow callback
			if (this.args.onShow) {
				this.args.onShow();
			}
		} else if (!currentVisible && wasVisible) {
			// Closing: visible changed from true to false
			this.transitionState = "exit-active";
			
			exitTimer = setTimeout(() => {
				this.transitionState = "exit-done";
			}, TRANSITION_DURATION);

			unmountTimer = setTimeout(() => {
				this.shouldRender = false;
				this.transitionState = "";
			}, TRANSITION_DURATION + 50);
		} else if (currentVisible) {
			// Ensure modal is rendered if visible
			this.shouldRender = true;
		}

		// Update previous state
		this.previousVisible = currentVisible;

		// Keyboard event handler
		const handleKeyDown = (event) => {
			if (!this.args.visible) return;

			switch (event.key) {
				case "Escape":
					if (this.closeOnEscape) {
						event.preventDefault();
						this.handleClose();
					}
					break;
				case "Tab":
					if (dialogElement) {
						this.handleTabKey(event, dialogElement);
					}
					break;
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			// Cleanup timers
			if (enterTimer) clearTimeout(enterTimer);
			if (enterActiveTimer) clearTimeout(enterActiveTimer);
			if (exitTimer) clearTimeout(exitTimer);
			if (unmountTimer) clearTimeout(unmountTimer);

			// Remove keyboard listener
			document.removeEventListener("keydown", handleKeyDown);

			// Restore body scroll
			if (this.blockScroll && typeof document !== "undefined") {
				document.body.style.overflow = "";
			}
			
			// Restore focus when modal closes
			if (previousActiveElement && !this.args.visible) {
				previousActiveElement.focus();
			}
		};
	});

	// Drag modifier: position fixed + left/top during drag; exclude header icons; optionally keep in viewport
	dragModifier = modifier((element) => {
		if (!this.draggable) return;

		let lastPageX = 0;
		let lastPageY = 0;

		const handleMouseDown = (e) => {
			if (e.target.closest(".dialog-header-icons") || e.target.closest("button")) return;
			if (!e.target.closest(".dialog-header")) return;

			lastPageX = e.pageX;
			lastPageY = e.pageY;
			this.isDragging = true;
			document.body.style.userSelect = "none";
			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);
		};

		const handleMouseMove = (e) => {
			const rect = element.getBoundingClientRect();
			const deltaX = e.pageX - lastPageX;
			const deltaY = e.pageY - lastPageY;
			const leftPos = rect.left + deltaX;
			const topPos = rect.top + deltaY;
			const width = rect.width;
			const height = rect.height;
			const computedStyle = getComputedStyle(element);
			const leftMargin = parseFloat(computedStyle.marginLeft) || 0;
			const topMargin = parseFloat(computedStyle.marginTop) || 0;
			const viewportWidth = document.documentElement.clientWidth;
			const viewportHeight = document.documentElement.clientHeight;

			element.style.position = "fixed";

			if (this.keepInViewport) {
				if (leftPos >= 0 && leftPos + width <= viewportWidth) {
					lastPageX = e.pageX;
					element.style.left = `${leftPos - leftMargin}px`;
				}
				if (topPos >= 0 && (deltaY < 0 || topPos + height <= viewportHeight)) {
					lastPageY = e.pageY;
					element.style.top = `${topPos - topMargin}px`;
				}
			} else {
				lastPageX = e.pageX;
				lastPageY = e.pageY;
				element.style.left = `${leftPos - leftMargin}px`;
				element.style.top = `${topPos - topMargin}px`;
			}
		};

		const handleMouseUp = () => {
			this.isDragging = false;
			document.body.style.userSelect = "";
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};

		element.addEventListener("mousedown", handleMouseDown);

		return () => {
			element.removeEventListener("mousedown", handleMouseDown);
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
			document.body.style.userSelect = "";
			element.style.position = "";
			element.style.left = "";
			element.style.top = "";
		};
	});

	// Focus trap implementation
	@action
	handleTabKey(event, dialogElement) {
		const focusableElements = dialogElement.querySelectorAll(
			'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
		);
		const focusableArray = Array.from(focusableElements);
		const firstFocusable = focusableArray[0];
		const lastFocusable = focusableArray[focusableArray.length - 1];

		if (event.shiftKey) {
			// Shift + Tab
			if (document.activeElement === firstFocusable) {
				event.preventDefault();
				lastFocusable?.focus();
			}
		} else {
			// Tab
			if (document.activeElement === lastFocusable) {
				event.preventDefault();
				firstFocusable?.focus();
			}
		}
	}

	// Check if modal should be rendered - handles initial render when @visible is true
	get shouldRenderModal() {
		// If visible is true and shouldRender hasn't been set yet, render immediately
		if (this.args.visible && !this.shouldRender) {
			// Use schedule to avoid updating tracked property during render
			schedule("afterRender", () => {
				this.shouldRender = true;
			});
			return true;
		}
		return this.shouldRender;
	}

	// Modal stack registration modifier - manages z-index stacking.
	// Defer registration/unregistration to avoid updating service state during the same
	// render that reads it (modalStyle getter uses getZIndex), which triggers Ember's assertion.
	modalStackManagement = modifier(() => {
		if (this.args.visible) {
			schedule("actions", () => {
				this.modalStack.registerModal(this);
			});
		}

		return () => {
			schedule("actions", () => {
				this.modalStack.unregisterModal(this);
			});
		};
	});

	<template>
		{{#if this.destinationElement}}
			{{#in-element this.destinationElement insertBefore=null}}
				{{#if this.shouldRenderModal}}
					<div
						class={{this.maskClasses}}
						{{this.modalLifecycle}}
						{{on "click" this.handleBackdropClick}}
						role="presentation"
					>
						<div
							class="{{this.modalClasses}}{{if @headless " headless" ""}}"
							style={{this.modalStyle}}
							role="dialog"
							aria-modal={{this.modal}}
							aria-labelledby={{unless @headless "modal-title"}}
							tabindex="-1"
							{{this.modalStackManagement}}
							{{this.dragModifier}}
							...attributes
						>
							{{#if @headless}}
								<UlxModalBody
									@scrollable={{this.scrollable}}
									class={{@contentClassName}}
								>
									{{yield this.handleClose}}
								</UlxModalBody>
							{{else}}
								{{#if (has-block "head")}}
									{{yield to="head"}}
								{{else}}
									<UlxModalHeader
										@title={{@title}}
										@showCloseButton={{this.showCloseButton}}
										@showMaximizeButton={{this.maximizable}}
										@isMaximized={{this.isMaximized}}
										@onClose={{this.handleClose}}
										@onMaximize={{this.handleMaximize}}
										@closeIconName={{@closeIconName}}
										@closeIconComponentClass={{@closeIconComponentClass}}
										@closeButtonVariant={{@closeButtonVariant}}
										@closeIconSize={{@closeIconSize}}
										@closeButtonText={{@closeButtonText}}
										@maximizeIconName={{@maximizeIconName}}
										@minimizeIconName={{@minimizeIconName}}
										@maximizeIconComponentClass={{@maximizeIconComponentClass}}
										@maximizeButtonVariant={{@maximizeButtonVariant}}
										@maximizeIconSize={{@maximizeIconSize}}
										@maximizeButtonText={{@maximizeButtonText}}
										class={{@headerClassName}}
									/>
								{{/if}}

								{{#if (has-block "body")}}
									{{yield to="body"}}
								{{else}}
									<UlxModalBody
										@scrollable={{this.scrollable}}
										class={{@contentClassName}}
									>
										{{yield}}
									</UlxModalBody>
								{{/if}}

							{{#if (has-block "footer")}}
								{{yield to="footer"}}
							{{else if @showDefaultFooter}}
								<UlxModalFooter
									@cancelLabel={{@cancelButtonLabel}}
									@doneLabel={{@doneButtonLabel}}
									@submittingLabel={{@submittingLabel}}
									@submitting={{this.isSubmitting}}
									@onCancel={{this.handleCancel}}
									@onDone={{this.handleDone}}
								/>
							{{/if}}
							{{/if}}
						</div>
					</div>
				{{/if}}
			{{/in-element}}
		{{/if}}
	</template>
}
