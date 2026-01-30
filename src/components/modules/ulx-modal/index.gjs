import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../../utils/component-config";
import UlxModalHeader from "./header.gjs";
import UlxModalBody from "./body.gjs";
import UlxModalFooter from "./footer.gjs";

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
 * @param {string} [animationType="fade"] - Animation type: "fade", "zoom", "slide"
 * @param {string} [variant] - Visual variant: "elevated", "flat"
 * @param {boolean} [draggable=false] - Enable dragging dialog by header
 * @param {boolean} [resizable=false] - Enable resizing dialog
 * @param {boolean} [blockScroll=true] - Block body scroll when modal is visible
 * @param {boolean} [keepInViewport=true] - Keep dialog within viewport bounds
 * @param {boolean} [maximizable=false] - Show maximize/minimize button
 * @param {boolean} [maximized=false] - Display dialog in maximized state
 * @param {Object} [breakpoints] - Responsive width breakpoints, e.g. {"960px": "75vw", "640px": "90vw"}
 * @param {string} [maskClassName] - Additional CSS class for mask/backdrop
 * @param {string} [contentClassName] - Additional CSS class for content area
 * @param {string} [headerClassName] - Additional CSS class for header
 * @param {Function} [onHide] - Callback when modal is hidden/closed
 * @param {Function} [onCancel] - Callback when cancel action is triggered
 * @param {Function} [onDone] - Callback when primary action is triggered
 * @param {Function} [onShow] - Callback when modal is shown
 * @param {Function} [onMaskClick] - Callback when mask/backdrop is clicked
 * @param {Function} [onMaximize] - Callback when maximize state changes
 * @param {string} [cancelButtonLabel="Cancel"] - Label for default cancel button
 * @param {string} [doneButtonLabel="Confirm"] - Label for default done button
 * @param {boolean} [showDefaultFooter=false] - Show default footer buttons when no :footer block provided
 * @param {number} [zIndexBase=1000] - Base z-index for modal stacking
 */
export default class UlxModal extends Component {
	@tracked destinationElement = null;
	@tracked previousActiveElement = null;
	@tracked isAnimating = false;
	@tracked isMaximized = false;
	@tracked isDragging = false;
	@tracked isResizing = false;
	@tracked transitionState = ""; // For CSS transition states: enter, enter-active, enter-done, exit, exit-active, exit-done

	constructor(owner, args) {
		super(owner, args);
		// Create destination element in body for portal rendering
		if (typeof document !== "undefined") {
			this.destinationElement = document.body;
		}
		// Initialize maximized state from args
		this.isMaximized = this.args.maximized || false;
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
		
		// Custom class
		if (this.args.contentClassName) {
			parts.push(this.args.contentClassName);
		}
		
		// Add transition state classes
		if (this.transitionState) {
			parts.push(this.transitionState);
		}

		return parts.filter(Boolean).join(" ");
	}

	get maskClasses() {
		const parts = ["dialog-mask", "modal"];
		
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
		
		// Handle z-index for stacking
		const zIndexBase = this.args.zIndexBase || 1000;
		const modalCount = this.getModalCount();
		const zIndex = zIndexBase + modalCount * 10;
		styles.push(`z-index: ${zIndex}`);
		
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

	getModalCount() {
		if (typeof document === "undefined") return 0;
		return document.querySelectorAll(".dialog-mask.modal.visible").length;
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
			this.args.onCancel();
		}
		// Close modal after cancel action
		this.handleClose();
	}

	@action
	handleDone() {
		if (this.args.onDone) {
			this.args.onDone();
		}
		// Auto-close after done action
		this.handleClose();
	}

	@action
	handleMaximize() {
		this.isMaximized = !this.isMaximized;
		if (this.args.onMaximize) {
			this.args.onMaximize({ maximized: this.isMaximized });
		}
	}

	// Keyboard support modifier
	keyboardSupport = modifier((element) => {
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
					this.handleTabKey(event, element);
					break;
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
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

	// Transition management modifier - handles CSS transition states
	transitionManagement = modifier((element) => {
		let enterTimeout, enterActiveTimeout, exitTimeout, exitActiveTimeout;

		if (this.args.visible) {
			// Enter transition sequence
			this.transitionState = "enter";
			
			enterTimeout = setTimeout(() => {
				this.transitionState = "enter-active";
				
				enterActiveTimeout = setTimeout(() => {
					this.transitionState = "enter-done";
				}, 200); // Match CSS transition duration
			}, 10);
		} else if (this.transitionState) {
			// Exit transition sequence
			this.transitionState = "exit";
			
			exitTimeout = setTimeout(() => {
				this.transitionState = "exit-active";
				
				exitActiveTimeout = setTimeout(() => {
					this.transitionState = "exit-done";
				}, 200); // Match CSS transition duration
			}, 10);
		}

		return () => {
			// Cleanup timeouts
			if (enterTimeout) clearTimeout(enterTimeout);
			if (enterActiveTimeout) clearTimeout(enterActiveTimeout);
			if (exitTimeout) clearTimeout(exitTimeout);
			if (exitActiveTimeout) clearTimeout(exitActiveTimeout);
		};
	});

	// Focus management and scroll blocking modifier
	focusManagement = modifier((element) => {
		if (this.args.visible) {
			// Store previous active element
			this.previousActiveElement = document.activeElement;
			
			// Block body scroll if enabled
			if (this.blockScroll && typeof document !== "undefined") {
				document.body.style.overflow = "hidden";
			}
			
			// Focus the modal
			setTimeout(() => {
				const firstFocusable = element.querySelector(
					'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
				);
				if (firstFocusable) {
					firstFocusable.focus();
				} else {
					element.focus();
				}
			}, 100);

			// Call onShow callback
			if (this.args.onShow) {
				this.args.onShow();
			}
		}

		return () => {
			// Restore body scroll
			if (this.blockScroll && typeof document !== "undefined") {
				document.body.style.overflow = "";
			}
			
			// Restore focus when modal closes
			if (this.previousActiveElement && !this.args.visible) {
				this.previousActiveElement.focus();
			}
		};
	});

	<template>
		{{#if this.destinationElement}}
			{{#in-element this.destinationElement insertBefore=null}}
				{{#if @visible}}
					<div
						class={{this.maskClasses}}
						{{this.keyboardSupport}}
						{{on "click" this.handleBackdropClick}}
						role="presentation"
					>
						<div
							class={{this.modalClasses}}
							style={{this.modalStyle}}
							role="dialog"
							aria-modal="true"
							aria-labelledby="modal-title"
							tabindex="-1"
							{{this.transitionManagement}}
							{{this.focusManagement}}
							...attributes
						>
							{{#if (has-block "head")}}
								{{yield to="head"}}
							{{else}}
								<UlxModalHeader
									@title={{@title}}
									@showCloseButton={{this.showCloseButton}}
									@showMaximizeButton={{this.maximizable}}
									@onClose={{this.handleClose}}
									@onMaximize={{this.handleMaximize}}
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
									@onCancel={{this.handleCancel}}
									@onDone={{this.handleDone}}
								/>
							{{/if}}
						</div>
					</div>
				{{/if}}
			{{/in-element}}
		{{/if}}
	</template>
}
