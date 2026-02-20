import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { on } from "@ember/modifier";
import { schedule } from "@ember/runloop";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../../utils/component-config";
import overlayLifecycle from "../../../modifiers/overlay-lifecycle";
import { handleAsyncAction, handleTabKey } from "../../../utils/overlay-helpers";
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
 * @param {string} [closeIconName="close-icon-01"] - Icon name for close button
 * @param {string} [iconComponentClass="bs-icons1"] - Icon component class for header icon buttons
 * @param {string} [iconVariant="text"] - UlxButton variant for header icon buttons
 * @param {string} [iconSize="s18"] - Icon size for header icon buttons
 * @param {string} [maximizeIconName="expand-icon"] - Icon name for maximize button (when not maximized)
 * @param {string} [minimizeIconName="collapse-icon-01"] - Icon name for minimize/restore button (when maximized)
 * @param {string} [animationType="fade"] - Animation type: "fade", "zoom", "slide"
 * @param {string} [variant] - Visual variant: "elevated", "flat"
 * @param {boolean} [draggable=false] - Enable dragging dialog by header
 * @param {boolean} [resizable=false] - Enable resizing dialog
 * @param {boolean} [overlay=true] - When false, no overlay/backdrop; dialog is non-blocking (uses dialog-mask:not(.modal) from uls-v2)
 * @param {boolean} [blockScroll=true] - Block body scroll when modal is visible
 * @param {boolean} [keepInViewport=true] - Keep dialog within viewport bounds
 * @param {boolean} [maximizable=false] - Show maximize/minimize button
 * @param {boolean} [maximized=false] - Display dialog in maximized state
 * @param {Object} [breakpoints] - Responsive width breakpoints, e.g. {"960px": "75vw", "640px": "90vw"}
 * @param {string} [maskClassName] - Additional CSS class for mask/backdrop
 * @param {string} [contentClassName] - Extra class for content area (dialog-content)
 * @param {string} [headerClassName] - Extra class for header (dialog-header)
 * @param {string} [footerClassName] - Extra class for footer (dialog-footer)
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
 * @param {boolean} [hideFooter=false] - When true, hide default footer (when no :footer block)
 * @param {boolean} [hideHeader=false] - When true, hide the header
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
	previousActiveElement = null;

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

		return parts.filter(Boolean).join(" ");
	}

	get headerWrapperClasses() {
		const parts = ["dialog-header"];
		this.args.headerClassName && parts.push(this.args.headerClassName);
		return parts.filter(Boolean).join(" ");
	}

	get bodyContentClasses() {
		const parts = ["dialog-content"];
		this.args.contentClassName && parts.push(this.args.contentClassName);
		return parts.filter(Boolean).join(" ");
	}

	get bodyContentStyle() {
		return this.scrollable ? "overflow-y: auto" : "overflow-y: hidden";
	}

	get footerWrapperClasses() {
		const parts = ["dialog-footer"];
		this.args.footerClassName && parts.push(this.args.footerClassName);
		return parts.filter(Boolean).join(" ");
	}

	get maskClasses() {
		const parts = ["dialog-mask"];
		this.overlay && parts.push("modal overlay");

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

	get overlay() {
		return this.args.overlay ?? true;
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
		handleAsyncAction(this.args.onCancel, {
			setSubmitting: (value) => {
				this.isSubmitting = value;
			},
			onSuccess: () => {
				const autoCloseOnCancel = this.args.autoCloseOnCancel ?? false;
				autoCloseOnCancel && this.handleClose();
			},
			onError: (error) => {
				this.args.onError && this.args.onError(error);
			}
		});
	}

	@action
	handleDone() {
		handleAsyncAction(this.args.onDone, {
			setSubmitting: (value) => {
				this.isSubmitting = value;
			},
			onSuccess: () => {
				const autoCloseOnDone = this.args.autoCloseOnDone ?? true;
				autoCloseOnDone && this.handleClose();
			},
			onError: (error) => {
				this.args.onError && this.args.onError(error);
			}
		});
	}

	@action
	handleMaximize() {
		this.isMaximized = !this.isMaximized;
		if (this.args.onMaximize) {
			this.args.onMaximize({ maximized: this.isMaximized });
		}
	}

	get overlayLifecycleOptions() {
		return {
			onShow: () => {
				this.args.onShow && this.args.onShow();
			},
			onHide: this.handleClose,
			onEscape: this.handleClose,
			closeOnEscape: this.closeOnEscape,
			blockScroll: this.blockScroll,
			role: '[tabindex="-1"]',
			handleTabKey: this.handleTabKey,
			getTransitionState: () => this.transitionState,
			setTransitionState: (value) => {
				this.transitionState = value;
			},
			getShouldRender: () => this.shouldRender,
			setShouldRender: (value) => {
				this.shouldRender = value;
			},
			getPreviousVisible: () => this.previousVisible,
			setPreviousVisible: (value) => {
				this.previousVisible = value;
			},
			getVisible: () => this.args.visible,
			getPreviousActiveElement: () => this.previousActiveElement,
			setPreviousActiveElement: (value) => {
				this.previousActiveElement = value;
			}
		};
	}

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
		handleTabKey(event, dialogElement);
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
						{{overlayLifecycle this this.overlayLifecycleOptions}}
						{{on "click" this.handleBackdropClick}}
						role="presentation"
					>
						<div
							class={{this.modalClasses}}
							style={{this.modalStyle}}
							role="dialog"
							aria-modal={{this.overlay}}
							aria-labelledby={{unless @hideHeader "modal-title"}}
							tabindex="-1"
							{{this.modalStackManagement}}
							{{this.dragModifier}}
							...attributes
						>
							{{#if (has-block "head")}}
								<div class={{this.headerWrapperClasses}}>
									{{yield to="head"}}
								</div>
							{{else}}{{#unless @hideHeader}}
									<UlxModalHeader
										@title={{@title}}
										@showCloseButton={{this.showCloseButton}}
										@showMaximizeButton={{this.maximizable}}
										@isMaximized={{this.isMaximized}}
										@onClose={{this.handleClose}}
										@onMaximize={{this.handleMaximize}}
										@closeIconName={{@closeIconName}}
										@iconComponentClass={{@iconComponentClass}}
										@iconVariant={{@iconVariant}}
										@iconSize={{@iconSize}}
										@maximizeIconName={{@maximizeIconName}}
										@minimizeIconName={{@minimizeIconName}}
										@headerClassName={{@headerClassName}}
									/>
								{{/unless}}{{/if}}

							{{#if (has-block "body")}}
								<div class={{this.bodyContentClasses}} style={{this.bodyContentStyle}}>
									{{yield to="body"}}
								</div>
							{{else}}
								<UlxModalBody
									@scrollable={{this.scrollable}}
									@contentClassName={{@contentClassName}}
								>
									{{yield}}
								</UlxModalBody>
							{{/if}}

							{{#if (has-block "footer")}}
								<div class={{this.footerWrapperClasses}} style="justify-content: flex-end;">
									{{yield to="footer"}}
								</div>
							{{else}}{{#unless @hideFooter}}
									<UlxModalFooter
										@hideFooter={{@hideFooter}}
										@hideCancelButton={{@hideCancelButton}}
										@hideDoneButton={{@hideDoneButton}}
										@cancelLabel={{@cancelButtonLabel}}
										@doneLabel={{@doneButtonLabel}}
										@submittingLabel={{@submittingLabel}}
										@submitting={{this.isSubmitting}}
										@onCancel={{this.handleCancel}}
										@onDone={{this.handleDone}}
										@footerClassName={{@footerClassName}}
									/>
								{{/unless}}{{/if}}
						</div>
					</div>
				{{/if}}
			{{/in-element}}
		{{/if}}
	</template>
}
