import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { on } from "@ember/modifier";
import { schedule } from "@ember/runloop";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../utils/component-config";
import { joinClassNames } from "../../utils/class-names";
import overlayLifecycle from "../../modifiers/overlay-lifecycle";
import {
	handleAsyncAction,
	handleTabKey,
	getDestinationElement,
	shouldShowOverlay,
	buildOverlayLifecycleOptions
} from "../../utils/overlay-helpers";
import UlxModalHeader from "./header.gjs";
import UlxModalBody from "./body.gjs";
import UlxModalFooter from "./footer.gjs";

const DEFAULT_MODAL_POSITION = "center";

const BODY_OVERFLOW_STYLE = {
	true: "overflow-y: auto",
	false: "overflow-y: hidden"
};

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
 * @param {boolean} [overlay=true] - When false, no overlay/backdrop; dialog is non-blocking (non-modal mask styling)
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
 * @param {string} [cancelButtonLabel] - Cancel label (defaults to i18n cancel)
 * @param {string} [cancelButtonCustomClass] - Extra class on the default footer cancel button
 * @param {boolean} [doneButtonDisabled=false] - Disable the default footer done/confirm button
 * @param {string} [doneButtonLabel] - Confirm label (defaults to i18n confirm)
 * @param {string} [submittingLabel] - Label for done button during submission (defaults to doneButtonLabel)
 * @param {boolean} [hideFooter=false] - When true, hide default footer (when no :footer block)
 * @param {boolean} [hideHeader=false] - When true, hide the header
 * @param {number} [zIndexBase=1000] - Base z-index for modal stacking
 * @param {string} [maskQa] - Optional root `data-qa` on the mask (defaults to `ulx-modal-mask`).
 */
export default class UlxModal extends Component {
	@service modalStack;

	@tracked isMaximized = false;
	@tracked isDragging = false;
	@tracked dragPlacement = null;
	@tracked isSubmitting = false;
	@tracked transitionState = "";
	@tracked shouldRender = false;
	/** Read/written by `overlayLifecycle` (visibility edges and focus return). */
	previousVisible = false;
	/** Read/written by `overlayLifecycle` when saving/restoring document focus. */
	previousActiveElement = null;

	get destinationElement() {
		return getDestinationElement();
	}

	get baseClass() {
		return getComponentClass("dialog");
	}

	get modalClasses() {
		const { size = "m-size", variant } = this.args;
		const position = this.args.position ?? DEFAULT_MODAL_POSITION;
		return joinClassNames(
			this.baseClass,
			!this.isMaximized && size,
			!this.isMaximized && `position-${position}`,
			variant,
			this.isMaximized && "maximized",
			this.draggable && "draggable",
			// Transition state on the dialog so backdrop shows first, then modal animates
			this.transitionState
		);
	}

	get headerWrapperClasses() {
		return joinClassNames("dialog-header", this.args.headerClassName);
	}

	get bodyContentClasses() {
		return joinClassNames("dialog-content", this.args.contentClassName);
	}

	get bodyContentStyle() {
		return BODY_OVERFLOW_STYLE[this.scrollable];
	}

	get footerWrapperClasses() {
		return joinClassNames("dialog-footer", this.args.footerClassName);
	}

	get maskClasses() {
		const { visible, animationType } = this.args;
		return joinClassNames(
			"dialog-mask",
			this.overlay && "modal overlay",
			visible && "visible",
			animationType && `animation-${animationType}`,
			this.args.maskClassName
		);
	}

	get maskDataQa() {
		return this.args.maskQa ?? "ulx-modal-mask";
	}

	get stackZIndexCss() {
		const { visible } = this.args;
		if (!visible) {
			return "";
		}
		const zIndex = this.modalStack.getZIndex(this);
		return `z-index: ${zIndex}`;
	}

	get maskStyle() {
		return this.stackZIndexCss;
	}

	get modalStyle() {
		const { width, breakpoints } = this.args;
		const styles = [];

		!this.isMaximized && width && styles.push(`width: ${width}`);

		if (breakpoints && !this.isMaximized) {
			Object.entries(breakpoints).forEach(([breakpoint, bpWidth]) => {
				styles.push(`--dialog-width-${breakpoint}: ${bpWidth}`);
			});
		}

		if (this.draggable && this.dragPlacement && !this.isMaximized) {
			styles.push("position: fixed");
			styles.push(`left: ${this.dragPlacement.left}px`);
			styles.push(`top: ${this.dragPlacement.top}px`);
			styles.push("margin: 0");
		}

		const zIndexCss = this.stackZIndexCss;
		zIndexCss && styles.push(zIndexCss);

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
		this.args.onMaskClick?.(event);

		if (this.closeOnBackdrop && event.target.classList.contains("dialog-mask")) {
			this.handleClose();
		}
	}

	@action
	handleClose() {
		this.args.onHide?.();
	}

	_invokeAsyncFooterAction(action, autoCloseArgKey, autoCloseDefault) {
		handleAsyncAction(action, {
			setSubmitting: (value) => {
				this.isSubmitting = value;
			},
			onSuccess: () => {
				const shouldClose = this.args[autoCloseArgKey] ?? autoCloseDefault;
				if (shouldClose) this.handleClose();
			},
			onError: (error) => {
				this.args.onError?.(error);
			}
		});
	}

	@action
	handleCancel() {
		this._invokeAsyncFooterAction(this.args.onCancel, "autoCloseOnCancel", false);
	}

	@action
	handleDone() {
		this._invokeAsyncFooterAction(this.args.onDone, "autoCloseOnDone", true);
	}

	@action
	handleMaximize() {
		this.isMaximized = !this.isMaximized;
		if (this.isMaximized) {
			this.dragPlacement = null;
		}
		this.args.onMaximize?.({ maximized: this.isMaximized });
	}

	get overlayLifecycleOptions() {
		return buildOverlayLifecycleOptions(this);
	}

	// Drag: anchor fixed+left+top on mousedown (flex-centered dialog jumps to 0,0 otherwise); persist dragPlacement for close transition and reopen.
	dragModifier = modifier((element) => {
		if (!this.draggable) return;

		let lastPageX = 0;
		let lastPageY = 0;

		const handleMouseDown = (e) => {
			if (this.isMaximized) return;
			if (e.target.closest(".dialog-header-icons") || e.target.closest("button")) return;
			if (!e.target.closest(".dialog-header")) return;

			const rect = element.getBoundingClientRect();
			element.style.position = "fixed";
			element.style.left = `${rect.left}px`;
			element.style.top = `${rect.top}px`;
			element.style.margin = "0";
			this.dragPlacement = { left: rect.left, top: rect.top };

			lastPageX = e.pageX;
			lastPageY = e.pageY;
			this.isDragging = true;
			document.body.style.userSelect = "none";
			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);
		};

		const handleMouseMove = (e) => {
			if (!this.isDragging || !this.dragPlacement) return;

			const deltaX = e.pageX - lastPageX;
			const deltaY = e.pageY - lastPageY;
			let newLeft = this.dragPlacement.left + deltaX;
			let newTop = this.dragPlacement.top + deltaY;

			const rect = element.getBoundingClientRect();
			const width = rect.width;
			const height = rect.height;
			const viewportWidth = document.documentElement.clientWidth;
			const viewportHeight = document.documentElement.clientHeight;

			if (this.keepInViewport) {
				const maxLeft = Math.max(0, viewportWidth - width);
				const maxTop = Math.max(0, viewportHeight - height);
				newLeft = Math.min(Math.max(0, newLeft), maxLeft);
				newTop = Math.min(Math.max(0, newTop), maxTop);
			}

			lastPageX = e.pageX;
			lastPageY = e.pageY;
			this.dragPlacement = { left: newLeft, top: newTop };
		};

		const handleMouseUp = () => {
			if (!this.isDragging) return;
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
		};
	});

	// Focus trap implementation
	@action
	handleTabKey(event, dialogElement) {
		handleTabKey(event, dialogElement);
	}

	get shouldRenderModal() {
		return shouldShowOverlay(this.args.visible, this.shouldRender, (v) => {
			this.shouldRender = v;
		});
	}

	/** Register with modal stack for z-index and top-overlay behavior while the dialog node is mounted. */
	modalStackManagement = modifier(() => {
		const { visible, maximized } = this.args;

		if (this.isMaximized !== (maximized ?? false)) {
			this.isMaximized = maximized ?? false;
			if (this.isMaximized) {
				this.dragPlacement = null;
			}
		}

		if (visible) {
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
						data-qa={{this.maskDataQa}}
						style={{this.maskStyle}}
						{{overlayLifecycle this this.overlayLifecycleOptions}}
						{{on "click" this.handleBackdropClick}}
						role="presentation"
					>
						<div
							class={{this.modalClasses}}
							data-qa="ulx-modal-dialog"
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
								<div class={{this.headerWrapperClasses}} data-qa="ulx-modal-header">
									{{yield to="head"}}
								</div>
							{{else}}
								{{#unless @hideHeader}}
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
								{{/unless}}
							{{/if}}

							{{#if (has-block "body")}}
								<div
									class={{this.bodyContentClasses}}
									data-qa="ulx-modal-body"
									style={{this.bodyContentStyle}}
								>
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
								<div
									class={{this.footerWrapperClasses}}
									data-qa="ulx-modal-footer"
									style="justify-content: flex-end;"
								>
									{{yield to="footer"}}
								</div>
							{{else}}
								{{#unless @hideFooter}}
									<UlxModalFooter
										@hideFooter={{@hideFooter}}
										@hideCancelButton={{@hideCancelButton}}
										@hideDoneButton={{@hideDoneButton}}
										@cancelLabel={{@cancelButtonLabel}}
										@cancelButtonCustomClass={{@cancelButtonCustomClass}}
										@doneLabel={{@doneButtonLabel}}
										@doneButtonDisabled={{@doneButtonDisabled}}
										@submittingLabel={{@submittingLabel}}
										@submitting={{this.isSubmitting}}
										@onCancel={{this.handleCancel}}
										@onDone={{this.handleDone}}
										@footerClassName={{@footerClassName}}
									/>
								{{/unless}}
							{{/if}}
						</div>
					</div>
				{{/if}}
			{{/in-element}}
		{{/if}}
	</template>
}
