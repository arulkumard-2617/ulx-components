import { b as _initializerDefineProperty, _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';
import { on } from '@ember/modifier';
import { schedule } from '@ember/runloop';
import { modifier } from 'ember-modifier';
import { getComponentClass } from '../../../utils/component-config.js';
import { joinClassNames } from '../../../utils/class-names.js';
import overlayLifecycle from '../../../modifiers/overlay-lifecycle.js';
import { getDestinationElement, handleAsyncAction, buildOverlayLifecycleOptions, handleTabKey, shouldShowOverlay } from '../../../utils/overlay-helpers.js';
import UlxModalHeader from './header.js';
import UlxModalBody from './body.js';
import UlxModalFooter from './footer.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _UlxModal;
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
 * @param {string} [doneButtonLabel] - Confirm label (defaults to i18n confirm)
 * @param {string} [submittingLabel] - Label for done button during submission (defaults to doneButtonLabel)
 * @param {boolean} [hideFooter=false] - When true, hide default footer (when no :footer block)
 * @param {boolean} [hideHeader=false] - When true, hide the header
 * @param {number} [zIndexBase=1000] - Base z-index for modal stacking
 * @param {string} [dataQa] - Optional root `data-qa` on the mask (defaults to `ulx-modal`).
 */
let UlxModal = (_class = (_UlxModal = class UlxModal extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "modalStack", _descriptor, this);
    _initializerDefineProperty(this, "isMaximized", _descriptor2, this);
    _initializerDefineProperty(this, "isDragging", _descriptor3, this);
    _initializerDefineProperty(this, "isSubmitting", _descriptor4, this);
    _initializerDefineProperty(this, "transitionState", _descriptor5, this);
    _initializerDefineProperty(this, "shouldRender", _descriptor6, this);
    /** Read/written by `overlayLifecycle` (visibility edges and focus return). */
    _defineProperty(this, "previousVisible", false);
    /** Read/written by `overlayLifecycle` when saving/restoring document focus. */
    _defineProperty(this, "previousActiveElement", null);
    // Drag modifier: position fixed + left/top during drag; exclude header icons; optionally keep in viewport
    _defineProperty(this, "dragModifier", modifier(element => {
      if (!this.draggable) return;
      let lastPageX = 0;
      let lastPageY = 0;
      const handleMouseDown = e => {
        if (e.target.closest(".dialog-header-icons") || e.target.closest("button")) return;
        if (!e.target.closest(".dialog-header")) return;
        lastPageX = e.pageX;
        lastPageY = e.pageY;
        this.isDragging = true;
        document.body.style.userSelect = "none";
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      };
      const handleMouseMove = e => {
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
    }));
    /** Register with modal stack for z-index and top-overlay behavior while the dialog node is mounted. */
    _defineProperty(this, "modalStackManagement", modifier(() => {
      const {
        visible,
        maximized
      } = this.args;
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
    }));
  }
  get destinationElement() {
    return getDestinationElement();
  }
  get baseClass() {
    return getComponentClass("dialog");
  }
  get modalClasses() {
    const {
      size = "m-size",
      variant
    } = this.args;
    const position = this.args.position ?? DEFAULT_MODAL_POSITION;
    return joinClassNames(this.baseClass, !this.isMaximized && size, !this.isMaximized && `position-${position}`, variant, this.isMaximized && "maximized", this.draggable && "draggable",
    // Transition state on the dialog so backdrop shows first, then modal animates
    this.transitionState);
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
    const {
      visible,
      animationType
    } = this.args;
    return joinClassNames("dialog-mask", this.overlay && "modal overlay", visible && "visible", animationType && `animation-${animationType}`, this.args.maskClassName);
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-modal";
  }
  get modalStyle() {
    const {
      visible,
      width,
      breakpoints
    } = this.args;
    const styles = [];
    !this.isMaximized && width && styles.push(`width: ${width}`);
    if (breakpoints && !this.isMaximized) {
      Object.entries(breakpoints).forEach(([breakpoint, bpWidth]) => {
        styles.push(`--dialog-width-${breakpoint}: ${bpWidth}`);
      });
    }
    if (visible) {
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
  handleBackdropClick(event) {
    this.args.onMaskClick?.(event);
    if (this.closeOnBackdrop && event.target.classList.contains("dialog-mask")) {
      this.handleClose();
    }
  }
  handleClose() {
    this.args.onHide?.();
  }
  _invokeAsyncFooterAction(action, autoCloseArgKey, autoCloseDefault) {
    handleAsyncAction(action, {
      setSubmitting: value => {
        this.isSubmitting = value;
      },
      onSuccess: () => {
        const shouldClose = this.args[autoCloseArgKey] ?? autoCloseDefault;
        if (shouldClose) this.handleClose();
      },
      onError: error => {
        this.args.onError?.(error);
      }
    });
  }
  handleCancel() {
    this._invokeAsyncFooterAction(this.args.onCancel, "autoCloseOnCancel", false);
  }
  handleDone() {
    this._invokeAsyncFooterAction(this.args.onDone, "autoCloseOnDone", true);
  }
  handleMaximize() {
    this.isMaximized = !this.isMaximized;
    this.args.onMaximize?.({
      maximized: this.isMaximized
    });
  }
  get overlayLifecycleOptions() {
    return buildOverlayLifecycleOptions(this);
  }
  // Focus trap implementation
  handleTabKey(event, dialogElement) {
    handleTabKey(event, dialogElement);
  }
  get shouldRenderModal() {
    return shouldShowOverlay(this.args.visible, this.shouldRender, v => {
      this.shouldRender = v;
    });
  }
}, setComponentTemplate(precompileTemplate("\n\t\t{{#if this.destinationElement}}\n\t\t\t{{#in-element this.destinationElement insertBefore=null}}\n\t\t\t\t{{#if this.shouldRenderModal}}\n\t\t\t\t\t<div class={{this.maskClasses}} data-qa={{this.rootDataQa}} {{overlayLifecycle this this.overlayLifecycleOptions}} {{on \"click\" this.handleBackdropClick}} role=\"presentation\">\n\t\t\t\t\t\t<div class={{this.modalClasses}} data-qa=\"ulx-modal-dialog\" style={{this.modalStyle}} role=\"dialog\" aria-modal={{this.overlay}} aria-labelledby={{unless @hideHeader \"modal-title\"}} tabindex=\"-1\" {{this.modalStackManagement}} {{this.dragModifier}} ...attributes>\n\t\t\t\t\t\t\t{{#if (has-block \"head\")}}\n\t\t\t\t\t\t\t\t<div class={{this.headerWrapperClasses}} data-qa=\"ulx-modal-header\">\n\t\t\t\t\t\t\t\t\t{{yield to=\"head\"}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t{{#unless @hideHeader}}\n\t\t\t\t\t\t\t\t\t<UlxModalHeader @title={{@title}} @showCloseButton={{this.showCloseButton}} @showMaximizeButton={{this.maximizable}} @isMaximized={{this.isMaximized}} @onClose={{this.handleClose}} @onMaximize={{this.handleMaximize}} @closeIconName={{@closeIconName}} @iconComponentClass={{@iconComponentClass}} @iconVariant={{@iconVariant}} @iconSize={{@iconSize}} @maximizeIconName={{@maximizeIconName}} @minimizeIconName={{@minimizeIconName}} @headerClassName={{@headerClassName}} />\n\t\t\t\t\t\t\t\t{{/unless}}\n\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t{{#if (has-block \"body\")}}\n\t\t\t\t\t\t\t\t<div class={{this.bodyContentClasses}} data-qa=\"ulx-modal-body\" style={{this.bodyContentStyle}}>\n\t\t\t\t\t\t\t\t\t{{yield to=\"body\"}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t<UlxModalBody @scrollable={{this.scrollable}} @contentClassName={{@contentClassName}}>\n\t\t\t\t\t\t\t\t\t{{yield}}\n\t\t\t\t\t\t\t\t</UlxModalBody>\n\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t{{#if (has-block \"footer\")}}\n\t\t\t\t\t\t\t\t<div class={{this.footerWrapperClasses}} data-qa=\"ulx-modal-footer\" style=\"justify-content: flex-end;\">\n\t\t\t\t\t\t\t\t\t{{yield to=\"footer\"}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t{{#unless @hideFooter}}\n\t\t\t\t\t\t\t\t\t<UlxModalFooter @hideFooter={{@hideFooter}} @hideCancelButton={{@hideCancelButton}} @hideDoneButton={{@hideDoneButton}} @cancelLabel={{@cancelButtonLabel}} @doneLabel={{@doneButtonLabel}} @submittingLabel={{@submittingLabel}} @submitting={{this.isSubmitting}} @onCancel={{this.handleCancel}} @onDone={{this.handleDone}} @footerClassName={{@footerClassName}} />\n\t\t\t\t\t\t\t\t{{/unless}}\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\t\t\t{{/in-element}}\n\t\t{{/if}}\n\t", {
  strictMode: true,
  scope: () => ({
    overlayLifecycle,
    on,
    UlxModalHeader,
    UlxModalBody,
    UlxModalFooter
  })
}), _UlxModal), _UlxModal), _descriptor = _applyDecoratedDescriptor(_class.prototype, "modalStack", [inject], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isMaximized", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "isDragging", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "isSubmitting", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "transitionState", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "shouldRender", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "handleBackdropClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleBackdropClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleClose", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleClose"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleCancel", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleCancel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleDone", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleDone"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMaximize", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleMaximize"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTabKey", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleTabKey"), _class.prototype), _class);

export { UlxModal as default };
//# sourceMappingURL=index.js.map
