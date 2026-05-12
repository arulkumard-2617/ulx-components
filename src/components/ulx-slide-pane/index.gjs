import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { on } from "@ember/modifier";
import { schedule } from "@ember/runloop";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../utils/component-config";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";
import {
	handleAsyncAction,
	handleTabKey,
	getDestinationElement,
	shouldShowOverlay,
	buildOverlayLifecycleOptions
} from "../../utils/overlay-helpers";
import overlayLifecycle from "../../modifiers/overlay-lifecycle";
import UlxSlidePaneHeader from "./header.gjs";
import UlxSlidePaneBody from "./body.gjs";
import UlxSlidePaneFooter from "./footer.gjs";

const DEFAULT_POSITION = "right";

const SLIDEPANE_DOCKED_CLASS_BY_POSITION = {
	left: "docked-left",
	right: "docked-right",
	top: "docked-top",
	bottom: "docked-bottom"
};

/**
 * Slide pane (drawer) component that displays content in an overlay from the left or right edge.
 * Uses shared overlay lifecycle modifier and utilities for focus management, transitions, and async close.
 * Styled with design-system slidepane classes (`ulx-slidepane` and docked position variants).
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
 * @param {string} [size="l-size"] - Preset size: "s-size", "m-size", "l-size"
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
 * @param {boolean} [doneButtonDisabled=false] - Disable default footer Done button (e.g. conditional submit)
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
 * @param {string} [dataQa] - Override root data-qa attribute
 * @param {string} [cancelButtonDataQa] - data-qa for default footer cancel button
 * @param {string} [doneButtonDataQa] - data-qa for default footer done button
 * @param {string} [backButtonDataQa] - data-qa for default footer back button
 */
export default class UlxSlidePane extends Component {
	@service modalStack;

	@tracked isSubmitting = false;
	@tracked transitionState = "";
	@tracked shouldRender = false;
	@tracked isMaximized = false;
	/** Read/written by `overlayLifecycle` (focus return and open/close edge tracking). */
	previousVisible = false;
	/** Read/written by `overlayLifecycle` when saving/restoring document focus. */
	previousActiveElement = null;

	get destinationElement() {
		return getDestinationElement();
	}

	get baseClass() {
		return getComponentClass("slidepane");
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "slidepane");
	}

	@action
	getDataQa(part) {
		return buildDataQa(this.rootDataQa, part);
	}

	get position() {
		return this.args.position ?? DEFAULT_POSITION;
	}

	buildSectionClass(base, extraClass) {
		const parts = [base];
		extraClass && parts.push(extraClass);
		return parts.filter(Boolean).join(" ");
	}

	get slidePaneClasses() {
		const { size = "l-size" } = this.args;
		const parts = [this.baseClass];

		const dockedClass =
			SLIDEPANE_DOCKED_CLASS_BY_POSITION[this.position] ??
			SLIDEPANE_DOCKED_CLASS_BY_POSITION[DEFAULT_POSITION];
		parts.push(dockedClass);

		!this.isMaximized && parts.push(size);
		this.transitionState && parts.push(this.transitionState);
		this.isMaximized && parts.push("full-screen");

		return parts.filter(Boolean).join(" ");
	}

	get overlay() {
		return this.args.overlay ?? true;
	}

	get maskClasses() {
		const { maskClassName, visible } = this.args;
		const parts = ["slidepane-mask"];

		this.overlay && parts.push("overlay");
		visible && parts.push("visible");
		maskClassName && parts.push(maskClassName);

		return parts.filter(Boolean).join(" ");
	}

	get slidePaneZIndex() {
		return this.args.visible ? this.modalStack.getZIndex(this) : null;
	}

	get maskStyle() {
		const zIndex = this.slidePaneZIndex;
		return zIndex != null ? `z-index: ${zIndex}` : "";
	}

	get slidePaneStyle() {
		const zIndex = this.slidePaneZIndex;
		return zIndex != null ? `z-index: ${zIndex}` : "";
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

	get bodyContentStyle() {
		return this.scrollable ? "overflow-y: auto" : "overflow-y: hidden";
	}

	get bodyContentClasses() {
		return this.buildSectionClass("slidepane-content", this.args.contentClassName);
	}

	get headerWrapperClasses() {
		return this.buildSectionClass("slidepane-header", this.args.headerClassName);
	}

	get footerWrapperClasses() {
		return this.buildSectionClass("slidepane-footer", this.args.footerClassName);
	}

	get showCloseButton() {
		return this.args.showCloseButton ?? true;
	}

	get showBackInHeader() {
		return this.args.onBack != null && (this.args.showBackInHeader ?? true);
	}

	@action
	handleBack() {
		this.args.onBack?.();
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
		this.args.onMaximize?.({ maximized: this.isMaximized });
	}

	@action
	handleBackdropClick(event) {
		this.args.onMaskClick?.(event);

		if (this.closeOnBackdrop && event.target.classList.contains("slidepane-mask")) {
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
	handleTabKey(event, overlayElement) {
		handleTabKey(event, overlayElement);
	}

	get shouldRenderSlidePane() {
		return shouldShowOverlay(this.args.visible, this.shouldRender, (v) => {
			this.shouldRender = v;
		});
	}

	/** Register with modal stack for z-index and top-overlay behavior while the pane element is mounted. */
	overlayStackManagement = modifier(() => {
		const { visible, maximized } = this.args;

		if (this.isMaximized !== (maximized ?? false)) {
			this.isMaximized = maximized ?? false;
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

	get overlayLifecycleOptions() {
		return buildOverlayLifecycleOptions(this, {
			initialFocusSelector: ".slidepane-content"
		});
	}

	<template>
		{{#if this.destinationElement}}
			{{#in-element this.destinationElement insertBefore=null}}
				{{#if this.shouldRenderSlidePane}}
					<div
						class={{this.maskClasses}}
						data-qa={{this.getDataQa "mask"}}
						style={{this.maskStyle}}
						{{overlayLifecycle this this.overlayLifecycleOptions}}
						{{on "click" this.handleBackdropClick}}
						role="presentation"
					>
						<div
							class={{this.slidePaneClasses}}
							data-qa={{this.rootDataQa}}
							style={{this.slidePaneStyle}}
							role="complementary"
							aria-modal="true"
							aria-labelledby={{unless @hideHeader "slidepane-title"}}
							tabindex="-1"
							{{this.overlayStackManagement}}
							...attributes
						>
							{{#if (has-block "head")}}
								<div class={{this.headerWrapperClasses}} data-qa={{this.getDataQa "header"}}>
									{{yield to="head"}}
								</div>
							{{else}}
								{{#unless @hideHeader}}
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
								{{/unless}}
							{{/if}}

							{{#if (has-block "body")}}
								<div
									class={{this.bodyContentClasses}}
									data-qa={{this.getDataQa "body"}}
									style={{this.bodyContentStyle}}
								>
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
								<div
									class={{this.footerWrapperClasses}}
									data-qa={{this.getDataQa "footer"}}
									style="justify-content: flex-end;"
								>
									{{yield to="footer"}}
								</div>
							{{else}}
								{{#unless @hideFooter}}
									<UlxSlidePaneFooter
										@hideFooter={{@hideFooter}}
										@hideCancelButton={{@hideCancelButton}}
										@hideDoneButton={{@hideDoneButton}}
										@showBackButton={{this.showBackInHeader}}
										@cancelLabel={{@cancelButtonLabel}}
										@doneLabel={{@doneButtonLabel}}
										@cancelButtonDataQa={{@cancelButtonDataQa}}
										@doneButtonDataQa={{@doneButtonDataQa}}
										@backButtonDataQa={{@backButtonDataQa}}
										@submittingLabel={{@submittingLabel}}
										@submitting={{this.isSubmitting}}
										@doneButtonDisabled={{@doneButtonDisabled}}
										@onCancel={{this.handleCancel}}
										@onDone={{this.handleDone}}
										@onBack={{this.handleBack}}
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
