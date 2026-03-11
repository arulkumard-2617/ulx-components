import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { on } from "@ember/modifier";
import { schedule } from "@ember/runloop";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../../utils/component-config";
import { handleAsyncAction, handleTabKey } from "../../../utils/overlay-helpers";
import overlayLifecycle from "../../../modifiers/overlay-lifecycle";
import UlxSlidePaneHeader from "./header.gjs";
import UlxSlidePaneBody from "./body.gjs";
import UlxSlidePaneFooter from "./footer.gjs";

/**
 * Slide pane (drawer) component that displays content in an overlay from the left or right edge.
 * Uses shared overlay lifecycle modifier and utilities for focus management, transitions, and async close.
 * Styled via uls-v2 slidepane.less (class ulx-slidepane and position variants).
 *
 * ## Usage
 * ```gjs
 * <UlxSlidePane
 *   @visible={{this.paneOpen}}
 *   @onHide={{this.closePane}}
 *   @title="Filters"
 *   @position="right"
 *   @onDone={{this.applyFilters}}
 * >
 *   <:body>Pane content</:body>
 * </UlxSlidePane>
 * ```
 *
 * ## WCAG Compliance
 * - Focus trapped within pane when open; focus returns to trigger on close
 * - Escape closes pane; Tab/Shift+Tab cycles focusable elements
 * - role="complementary" with aria-modal for overlay semantics
 * - Trigger should use aria-controls (id of pane) and aria-expanded for screen readers
 *
 * @class UlxSlidePane
 * @param {boolean} visible - Controls pane visibility
 * @param {string} [position="right"] - Position: "left", "right", "top", "bottom"
 * @param {string} [title] - Pane title (used when no :head block)
 * @param {string} [width] - CSS width (e.g. "400px"); overridden by size when set
 * @param {string} [size="m-size"] - Preset size: "s-size", "m-size", "l-size"
 * @param {boolean} [closeOnBackdrop=true] - Close when backdrop is clicked
 * @param {boolean} [closeOnEscape=true] - Close on Escape key
 * @param {boolean} [showCloseButton=true] - Show close button in header
 * @param {Function} [onBack] - Callback when header Back is clicked (e.g. for nested panes). When set, Back control is shown in default header.
 * @param {string} [backButtonLabel="Back"] - Accessible label for Back button (aria-label)
 * @param {boolean} [showBackInHeader=true] - When onBack is set, show Back in default header (ignored when :head block is used)
 * @param {string} [backIconName="left-arrow-icon"] - Icon name for Back button
 * @param {string} [backButtonVariant="text"] - UlxButton variant for Back button
 * @param {string} [backIconSize="s18"] - Icon size for Back button
 * @param {string} [backIconComponentClass="bs-icons1"] - Icon component class for Back button
 * @param {boolean} [overlay=true] - When false, mask does not block pointer events (clicks pass through to content behind)
 * @param {boolean} [blockScroll=true] - Block body scroll when open
 * @param {boolean} [scrollable=true] - Scrollable content area
 * @param {Function} [onHide] - Callback when pane closes
 * @param {Function} [onShow] - Callback when pane opens
 * @param {Function} [onDone] - Primary action; if it returns a Promise, pane waits before closing
 * @param {Function} [onCancel] - Cancel action; if returns Promise, optional wait before close
 * @param {Function} [onError] - Callback when onDone/onCancel promise rejects
 * @param {boolean} [autoCloseOnDone=true] - Close pane after onDone promise resolves
 * @param {boolean} [autoCloseOnCancel=false] - Close pane after onCancel completes
 * @param {string} [cancelButtonLabel="Cancel"] - Default cancel button label
 * @param {string} [doneButtonLabel="Confirm"] - Default done button label
 * @param {string} [submittingLabel] - Done button label during async submit
 * @param {boolean} [hideFooter=false] - When true, hide default footer (when no :footer block)
 * @param {boolean} [hideHeader=false] - When true, hide the header
 * @param {string} [maskClassName] - Extra class for mask/backdrop
 * @param {string} [contentClassName] - Extra class for content area (slidepane-content)
 * @param {string} [headerClassName] - Extra class for header (slidepane-header)
 * @param {string} [footerClassName] - Extra class for footer (slidepane-footer)
 * @param {number} [zIndexBase=1000] - Base z-index for stacking
 * @param {boolean} [maximizable=false] - Show maximize/restore button in header
 * @param {boolean} [maximized=false] - Display pane in maximized state (full width)
 * @param {Function} [onMaximize] - Callback when maximize state changes; receives { maximized }
 * @param {string} [closeIconName="close-icon-01"] - Icon name for close button
 * @param {string} [iconComponentClass="bs-icons1"] - Icon component class for header icon buttons
 * @param {string} [iconVariant="text"] - UlxButton variant for header icon buttons
 * @param {string} [iconSize="s18"] - Icon size for header icon buttons
 * @param {string} [maximizeIconName="expand-icon"] - Icon for maximize button (when not maximized)
 * @param {string} [minimizeIconName="collapse-icon-01"] - Icon for restore button (when maximized)
 */
export default class UlxSlidePane extends Component {
	@service modalStack;

	@tracked destinationElement = null;
	@tracked isSubmitting = false;
	@tracked transitionState = "";
	@tracked shouldRender = false;
	@tracked isMaximized = false;
	previousVisible = false;
	previousActiveElement = null;

	constructor(owner, args) {
		super(owner, args);
		if (typeof document !== "undefined") {
			this.destinationElement = document.body;
		}
		this.shouldRender = this.args.visible || false;
		this.previousVisible = this.args.visible || false;
		this.isMaximized = this.args.maximized ?? false;
	}

	get baseClass() {
		return getComponentClass("slidepane");
	}

	get position() {
		const { position = "right" } = this.args;
		return position;
	}

	get slidePaneClasses() {
		const parts = [this.baseClass];

		const positionMap = {
			left: "docked-left",
			right: "docked-right",
			top: "docked-top",
			bottom: "docked-bottom"
		};

		const dockedClass = positionMap[this.position] || "docked-right";
		parts.push(dockedClass);

		if (!this.isMaximized) {
			const size = this.args.size || "m-size";
			parts.push(size);
		}

		if (this.transitionState) {
			parts.push(this.transitionState);
		}

		if (this.isMaximized) {
			parts.push("full-screen");
		}

		return parts.filter(Boolean).join(" ");
	}

	get overlay() {
		return this.args.overlay ?? true;
	}

	get maskClasses() {
		const parts = ["slidepane-mask"];

		if (this.overlay) {
			parts.push("overlay");
		}

		if (this.args.visible) {
			parts.push("visible");
		}

		if (this.transitionState) {
			parts.push(this.transitionState);
		}

		this.args.maskClassName && parts.push(this.args.maskClassName);

		return parts.filter(Boolean).join(" ");
	}

	get slidePaneStyle() {
		const styles = [];

		if (this.args.visible) {
			const zIndex = this.modalStack.getZIndex(this);
			styles.push(`z-index: ${zIndex}`);
		}

		if (!this.isMaximized && this.args.width && !this.args.size) {
			styles.push(`inline-size: ${this.args.width}`);
		}

		return styles.join("; ");
	}

	get closeOnBackdrop() {
		return this.args.closeOnBackdrop ?? true;
	}

	get closeOnEscape() {
		return this.args.closeOnEscape ?? true;
	}

	get scrollable() {
		return this.args.scrollable ?? true;
	}

	get bodyContentStyle() {
		return this.scrollable ? "overflow-y: auto" : "overflow-y: hidden";
	}

	get bodyContentClasses() {
		const parts = ["slidepane-content"];
		this.args.contentClassName && parts.push(this.args.contentClassName);
		return parts.filter(Boolean).join(" ");
	}

	get headerWrapperClasses() {
		const parts = ["slidepane-header"];
		this.args.headerClassName && parts.push(this.args.headerClassName);
		return parts.filter(Boolean).join(" ");
	}

	get footerWrapperClasses() {
		const parts = ["slidepane-footer"];
		this.args.footerClassName && parts.push(this.args.footerClassName);
		return parts.filter(Boolean).join(" ");
	}

	get showCloseButton() {
		return this.args.showCloseButton ?? true;
	}

	get showBackInHeader() {
		return this.args.onBack != null && (this.args.showBackInHeader ?? true);
	}

	@action
	handleBack() {
		if (this.args.onBack) {
			this.args.onBack();
		}
	}

	get blockScroll() {
		return this.args.blockScroll ?? true;
	}

	get maximizable() {
		return this.args.maximizable ?? false;
	}

	@action
	handleMaximize() {
		this.isMaximized = !this.isMaximized;
		if (this.args.onMaximize) {
			this.args.onMaximize({ maximized: this.isMaximized });
		}
	}

	@action
	handleBackdropClick(event) {
		if (this.args.onMaskClick) {
			this.args.onMaskClick(event);
		}

		if (this.closeOnBackdrop && event.target.classList.contains("slidepane-mask")) {
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
				if (autoCloseOnCancel) {
					this.handleClose();
				}
			},
			onError: (error) => {
				if (this.args.onError) {
					this.args.onError(error);
				}
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
				if (autoCloseOnDone) {
					this.handleClose();
				}
			},
			onError: (error) => {
				if (this.args.onError) {
					this.args.onError(error);
				}
			}
		});
	}

	@action
	handleTabKey(event, overlayElement) {
		handleTabKey(event, overlayElement);
	}

	get shouldRenderPane() {
		if (this.args.visible && !this.shouldRender) {
			schedule("afterRender", () => {
				this.shouldRender = true;
			});
			return true;
		}
		return this.shouldRender;
	}

	overlayStackManagement = modifier(() => {
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

	get overlayLifecycleOptions() {
		return {
			onShow: () => {
				if (this.args.onShow) {
					this.args.onShow();
				}
			},
			onHide: this.handleClose,
			onEscape: this.handleClose,
			closeOnEscape: this.closeOnEscape,
			blockScroll: this.blockScroll,
			role: '[tabindex="-1"]',
			initialFocusSelector: ".slidepane-content",
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

	<template>
		{{#if this.destinationElement}}
			{{#in-element this.destinationElement insertBefore=null}}
				{{#if this.shouldRenderPane}}
					<div
						class={{this.maskClasses}}
						{{overlayLifecycle this this.overlayLifecycleOptions}}
						{{on "click" this.handleBackdropClick}}
						role="presentation"
					>
						<div
							class={{this.slidePaneClasses}}
							style={{this.slidePaneStyle}}
							role="complementary"
							aria-modal="true"
							aria-labelledby={{unless @hideHeader "slidepane-title"}}
							tabindex="-1"
							{{this.overlayStackManagement}}
							...attributes
						>
							{{#if (has-block "head")}}
								<div class={{this.headerWrapperClasses}}>
									{{yield to="head"}}
								</div>
							{{else unless @hideHeader}}
									<UlxSlidePaneHeader
										@title={{@title}}
										@showCloseButton={{this.showCloseButton}}
										@showBackButton={{this.showBackInHeader}}
										@onBack={{this.handleBack}}
										@backButtonLabel={{@backButtonLabel}}
										@backIconName={{@backIconName}}
										@backButtonVariant={{@backButtonVariant}}
										@backIconSize={{@backIconSize}}
										@backIconComponentClass={{@backIconComponentClass}}
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
							{{/if}}

							{{#if (has-block "body")}}
								<div class={{this.bodyContentClasses}} style={{this.bodyContentStyle}}>
									{{yield to="body"}}
								</div>
							{{else}}
								<UlxSlidePaneBody
									@scrollable={{this.scrollable}}
									@contentClassName={{@contentClassName}}
								>
									{{yield}}
								</UlxSlidePaneBody>
							{{/if}}

							{{#if (has-block "footer")}}
								<div class={{this.footerWrapperClasses}} style="justify-content: flex-end;">
									{{yield to="footer"}}
								</div>
							{{else unless @hideFooter}}
									<UlxSlidePaneFooter
										@hideFooter={{@hideFooter}}
										@hideCancelButton={{@hideCancelButton}}
										@hideDoneButton={{@hideDoneButton}}
										@showBackButton={{this.showBackInHeader}}
										@cancelLabel={{@cancelButtonLabel}}
										@doneLabel={{@doneButtonLabel}}
										@submittingLabel={{@submittingLabel}}
										@submitting={{this.isSubmitting}}
										@onCancel={{this.handleCancel}}
										@onDone={{this.handleDone}}
										@onBack={{this.handleBack}}
										@footerClassName={{@footerClassName}}
									/>
							{{/if}}
						</div>
					</div>
				{{/if}}
			{{/in-element}}
		{{/if}}
	</template>
}
