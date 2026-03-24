import { b as _initializerDefineProperty, _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { inject } from '@ember/service';
import { modifier } from 'ember-modifier';
import { on } from '@ember/modifier';
import { getComponentClass } from '../../../utils/component-config.js';
import overlayDismiss from '../../../modifiers/overlay-dismiss.js';
import { applyBodyAbsoluteFromViewport, getOverlayZIndexAboveMask } from '../../../utils/overlay-helpers.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _descriptor3, _UlxTooltip;
const GAP = 8;
/** When the trigger sits inside a floating overlay, stack above modals/slidepanes. */
const TOOLTIP_STACKING_ANCESTOR_SELECTOR = ".ulx-dialog, .ulx-slidepane, .ulx-popup, .ulx-tieredmenu, .dropdown-panel, .ulx-multiselect-panel, .ulx-datatable-filter-overlay-wrapper";
const DEFAULT_POSITION = "bottom";
const NATIVELY_FOCUSABLE = /^(BUTTON|INPUT|SELECT|TEXTAREA|A|SUMMARY)$/;
/** True if the element can receive focus (native controls or tabindex >= 0). */
function isFocusable(el) {
  if (!el || typeof el.tabIndex !== "number") return false;
  if (el.tabIndex >= 0) return true;
  const tag = el.tagName;
  if (NATIVELY_FOCUSABLE.test(tag)) {
    if (tag === "A") return el.hasAttribute("href");
    return !el.disabled;
  }
  return false;
}
/** Adds tabindex="0" so focus/both modes can open the tooltip from the keyboard. */
function ensureFocusableForTooltip(element) {
  if (element.hasAttribute("tabindex")) return false;
  if (isFocusable(element)) return false;
  element.setAttribute("tabindex", "0");
  return true;
}
/**
 * Tooltip module component. Wraps a trigger element and shows a tooltip on hover or focus.
 * Uses design-system tooltip classes. Renders the tooltip in `appendTo` (default `document.body`).
 *
 * ## WCAG
 * - Trigger receives aria-describedby when tooltip is visible, pointing to the tooltip id.
 * - Tooltip has role="tooltip" and a stable id.
 * - Escape closes the tooltip when @closeOnEscape is true.
 * - For event "focus" or "both", non-focusable triggers (e.g. div, icon) get tabindex="0" automatically for WCAG.
 *
 * @class UlxTooltip
 * @param {string} [content] - Tooltip text. Ignored when using <:content> block.
 * @param {string} [position='bottom'] - Position: 'top' | 'right' | 'bottom' | 'left'
 * @param {string} [event='both'] - When to show: 'hover' | 'focus' | 'both'. Default 'both' for WCAG (tooltip on keyboard focus).
 * @param {number} [showDelay=0] - Delay in ms before showing
 * @param {number} [hideDelay=0] - Delay in ms before hiding
 * @param {boolean} [closeOnEscape=false] - When true, Escape key closes the tooltip
 * @param {boolean} [disabled=false] - When true, tooltip never shows
 * @param {boolean} [showOnDisabled=false] - When true, show tooltip even when trigger is disabled (wraps trigger)
 * @param {boolean} [autoHide=true] - When true, tooltip hides when pointer leaves trigger. When false, tooltip is interactive (can hover over it)
 * @param {string} [customClass] - Additional CSS class on the tooltip root
 * @param {HTMLElement|string} [appendTo] - Where to mount the tooltip (default document.body)
 * @param {number} [zIndex] - Overlay z-index. Defaults above the topmost modal/slidepane when one is open.
 * @param {Function} [onShow] - Callback when tooltip is shown
 * @param {Function} [onHide] - Callback when tooltip is hidden
 * @param {Function} [onBeforeShow] - Callback before show; return false to prevent show
 * @param {Function} [onBeforeHide] - Callback before hide; return false to prevent hide
 * @block default - Trigger element. Apply the yielded modifier to your element (e.g. as |attach| then <button {{attach}}>). Tooltip is rendered in appendTo (body by default), not wrapping the trigger.
 * @block trigger - Optional. Use with <:content>; apply the yielded modifier to the trigger element (e.g. as |attach| then {{attach}}).
 * @block content - Optional rich tooltip content. When present, @content is ignored.
 */
let UlxTooltip = (_class = (_UlxTooltip = class UlxTooltip extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "modalStack", _descriptor, this);
    _initializerDefineProperty(this, "visible", _descriptor2, this);
    _initializerDefineProperty(this, "positionState", _descriptor3, this);
    _defineProperty(this, "triggerElement", null);
    _defineProperty(this, "tooltipElement", null);
    _defineProperty(this, "_showTimeout", null);
    _defineProperty(this, "_hideTimeout", null);
    /** When `autoHide` is false, moving onto the tooltip sets this false so trigger `mouseleave` does not hide prematurely. */
    _defineProperty(this, "_allowHide", true);
    _defineProperty(this, "attach", modifier(element => {
      this.triggerElement = element;
      const mode = this.eventMode;
      const addedTabindex = mode === "both" || mode === "focus" ? ensureFocusableForTooltip(element) : false;
      const show = e => this.show(e);
      const hide = e => this.hide(e);
      element.addEventListener("mouseenter", show);
      element.addEventListener("mouseleave", hide);
      element.addEventListener("focusin", show);
      element.addEventListener("focusout", hide);
      return () => {
        element.removeEventListener("mouseenter", show);
        element.removeEventListener("mouseleave", hide);
        element.removeEventListener("focusin", show);
        element.removeEventListener("focusout", hide);
        if (addedTabindex) element.removeAttribute("tabindex");
        if (this.triggerElement === element) {
          this._clearTimeouts();
          this._setTriggerAriaDescribedBy(null);
          this.triggerElement = null;
        }
      };
    }));
    _defineProperty(this, "positionTooltip", modifier((element, [visible, trigger, position]) => {
      this.tooltipElement = element;
      if (!visible || !trigger) return;
      const run = () => {
        const rect = trigger.getBoundingClientRect();
        const tooltipRect = element.getBoundingClientRect();
        const w = tooltipRect.width || element.offsetWidth || 1;
        const h = tooltipRect.height || element.offsetHeight || 1;
        let top = 0;
        let left = 0;
        switch (position) {
          case "top":
            top = rect.top - h - GAP;
            left = rect.left + (rect.width - w) / 2;
            break;
          case "bottom":
            top = rect.bottom + GAP;
            left = rect.left + (rect.width - w) / 2;
            break;
          case "left":
            top = rect.top + (rect.height - h) / 2;
            left = rect.left - w - GAP;
            break;
          case "right":
            top = rect.top + (rect.height - h) / 2;
            left = rect.right + GAP;
            break;
          default:
            // Unknown @position values align with the "right" branch (legacy behavior).
            top = rect.top + (rect.height - h) / 2;
            left = rect.right + GAP;
        }
        applyBodyAbsoluteFromViewport(element, top, left);
        element.style.zIndex = String(this.tooltipZIndex);
      };
      // Wait one frame so layout has tooltip dimensions; then wire aria-describedby while visible.
      requestAnimationFrame(() => {
        run();
        this._setTriggerAriaDescribedBy(this.tooltipId);
      });
      return () => {
        if (this.tooltipElement === element) this.tooltipElement = null;
      };
    }));
  }
  get tooltipId() {
    return `ulx-tooltip-${guidFor(this)}`;
  }
  get baseClass() {
    return getComponentClass("tooltip");
  }
  get rootClasses() {
    const {
      autoHide = true,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    parts.push(`position-${this.positionState}`);
    !autoHide && parts.push("interactive");
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get appendTarget() {
    if (typeof document === "undefined") return null;
    const to = this.args.appendTo;
    if (to === undefined || to === null) return document.body;
    if (typeof to === "string") return document.querySelector(to) ?? document.body;
    return to ?? document.body;
  }
  get tooltipPosition() {
    return this.args.position ?? DEFAULT_POSITION;
  }
  get eventMode() {
    return this.args.event ?? "both";
  }
  get shouldCloseOnEscape() {
    return this.visible && this.args.closeOnEscape;
  }
  get shouldRenderTooltip() {
    return this.visible && this.appendTarget;
  }
  get tooltipZIndex() {
    const {
      zIndex
    } = this.args;
    if (typeof zIndex === "number") {
      return zIndex;
    }
    const ownerOverlay = this.triggerElement?.closest(TOOLTIP_STACKING_ANCESTOR_SELECTOR);
    if (ownerOverlay || this.modalStack?.topModal) {
      return getOverlayZIndexAboveMask(this.modalStack);
    }
    return 1090;
  }
  _shouldShowForEvent(eventType) {
    const mode = this.eventMode;
    if (mode === "hover") return eventType === "mouseenter";
    if (mode === "focus") return eventType === "focus" || eventType === "focusin";
    return eventType === "mouseenter" || eventType === "focus" || eventType === "focusin";
  }
  _shouldHideForEvent(eventType) {
    const mode = this.eventMode;
    if (mode === "hover") return eventType === "mouseleave";
    if (mode === "focus") return eventType === "blur" || eventType === "focusout";
    return eventType === "mouseleave" || eventType === "blur" || eventType === "focusout";
  }
  show(event) {
    if (event?.type && !this._shouldShowForEvent(event.type)) return;
    const {
      disabled = false,
      showOnDisabled = false
    } = this.args;
    const target = event?.currentTarget;
    if (target && this._isTriggerDisabled(target) && !showOnDisabled) return;
    if (disabled) return;
    const onBeforeShow = this.args.onBeforeShow;
    if (typeof onBeforeShow === "function") {
      if (onBeforeShow({
        originalEvent: event,
        target
      }) === false) return;
    }
    this.triggerElement = target ?? this.triggerElement;
    const showDelay = this.args.showDelay ?? 0;
    this._clearTimeouts();
    if (showDelay > 0) {
      this._showTimeout = setTimeout(() => {
        this._showTimeout = null;
        this._doShow(event);
      }, showDelay);
    } else {
      this._doShow(event);
    }
  }
  _doShow(event) {
    this.positionState = this.args.position ?? DEFAULT_POSITION;
    this.visible = true;
    this._allowHide = true;
    this.args.onShow?.({
      originalEvent: event,
      target: this.triggerElement
    });
  }
  hide(event) {
    if (event?.type && !this._shouldHideForEvent(event.type)) return;
    if (this.args.autoHide === false && event?.type === "mouseleave" && event?.currentTarget === this.triggerElement) {
      return;
    }
    this._clearTimeouts();
    const onBeforeHide = this.args.onBeforeHide;
    if (typeof onBeforeHide === "function") {
      if (onBeforeHide({
        originalEvent: event,
        target: this.triggerElement
      }) === false) return;
    }
    const hideDelay = this.args.hideDelay ?? 0;
    if (hideDelay > 0 && this.visible) {
      this._hideTimeout = setTimeout(() => {
        this._hideTimeout = null;
        if (this.args.autoHide !== false || this._allowHide) {
          this._doHide(event);
        }
      }, hideDelay);
    } else if (this.visible && (this.args.autoHide !== false || this._allowHide)) {
      this._doHide(event);
    }
  }
  _doHide(event) {
    const target = this.triggerElement;
    this._setTriggerAriaDescribedBy(null);
    this.visible = false;
    this.triggerElement = null;
    this.args.onHide?.({
      originalEvent: event,
      target
    });
  }
  _isTriggerDisabled(element) {
    if (!element) return false;
    return element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
  }
  _clearTimeouts() {
    if (this._showTimeout) clearTimeout(this._showTimeout);
    if (this._hideTimeout) clearTimeout(this._hideTimeout);
    this._showTimeout = null;
    this._hideTimeout = null;
  }
  _setTriggerAriaDescribedBy(id) {
    const el = this.triggerElement;
    if (!el) return;
    if (id) {
      el.setAttribute("aria-describedby", id);
    } else {
      el.removeAttribute("aria-describedby");
    }
  }
  tooltipMouseEnter() {
    if (this.args.autoHide === false) {
      this._allowHide = false;
    }
  }
  tooltipMouseLeave(event) {
    if (this.args.autoHide === false) {
      this._allowHide = true;
      this.hide(event);
    }
  }
  dismissTooltipFromOverlay(event) {
    this._doHide(event);
  }
}, setComponentTemplate(precompileTemplate("\n\t\t{{#if (has-block \"trigger\")}}\n\t\t\t{{yield this.attach to=\"trigger\"}}\n\t\t{{else}}\n\t\t\t{{yield this.attach}}\n\t\t{{/if}}\n\n\t\t{{#if this.shouldRenderTooltip}}\n\t\t\t{{#in-element this.appendTarget insertBefore=null}}\n\t\t\t\t<div id={{this.tooltipId}} role=\"tooltip\" class={{this.rootClasses}} aria-hidden=\"false\" {{this.positionTooltip this.visible this.triggerElement this.tooltipPosition}} {{overlayDismiss this.shouldCloseOnEscape whenClick=false closeOnClickOutside=false onClose=this.dismissTooltipFromOverlay escapeEventMode=\"tooltip\" escapeUseCapture=false strictEscapeKey=true}} {{on \"mouseenter\" this.tooltipMouseEnter}} {{on \"mouseleave\" this.tooltipMouseLeave}}>\n\t\t\t\t\t<div class=\"tooltip-arrow\" aria-hidden=\"true\"></div>\n\t\t\t\t\t<div class=\"tooltip-text\">\n\t\t\t\t\t\t{{#if (has-block \"content\")}}\n\t\t\t\t\t\t\t{{yield to=\"content\"}}\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t{{@content}}\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t{{/in-element}}\n\t\t{{/if}}\n\t", {
  strictMode: true,
  scope: () => ({
    overlayDismiss,
    on
  })
}), _UlxTooltip), _UlxTooltip), _descriptor = _applyDecoratedDescriptor(_class.prototype, "modalStack", [inject], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "visible", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "positionState", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "bottom";
  }
}), _applyDecoratedDescriptor(_class.prototype, "show", [action], Object.getOwnPropertyDescriptor(_class.prototype, "show"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hide", [action], Object.getOwnPropertyDescriptor(_class.prototype, "hide"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "tooltipMouseEnter", [action], Object.getOwnPropertyDescriptor(_class.prototype, "tooltipMouseEnter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "tooltipMouseLeave", [action], Object.getOwnPropertyDescriptor(_class.prototype, "tooltipMouseLeave"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "dismissTooltipFromOverlay", [action], Object.getOwnPropertyDescriptor(_class.prototype, "dismissTooltipFromOverlay"), _class.prototype), _class);

export { UlxTooltip as default };
//# sourceMappingURL=index.js.map
