import { b as _initializerDefineProperty, _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { getComponentClass } from '../../../utils/component-config.js';
import { joinClassNames } from '../../../utils/class-names.js';
import { resolveRootDataQa, buildDataQa } from '../../../utils/data-qa.js';
import { t } from '../../../utils/i18n.js';
import appendToBody from '../../../modifiers/append-to-body.js';
import { getDestinationElement, getOverlayZIndexAboveMask, isEscapeKey } from '../../../utils/overlay-helpers.js';
import UlxIcon from '../../elements/ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _UlxToast;
const DEFAULT_LIFE_MS = 2000;
/** Exit animation duration in ms (must match toast.less toast-slide-out). */
const EXIT_ANIMATION_MS = 300;
/** Variant-to-icon map when a message has showIcon: true. Keys: info, success, warn, warning, error, secondary, contrast. */
const VARIANT_ICONS = {
  info: "info-icon",
  success: "success-stroke-icon",
  warn: "alert-icon-01",
  warning: "alert-icon-01",
  error: "sp-danger-icon",
  secondary: "info-icon",
  contrast: "info-icon"
};
/** CSS class segment for `toast-message` (warning shares `warn` styles). */
const MESSAGE_VARIANT_CLASS = {
  warning: "warn"
};
/**
 * Toast module component for displaying overlay messages.
 * Uses existing classes from uls-v2 toast.less. Argument-driven: receives
 * @messages and @onClose; does not own state.
 *
 * ## Position
 * - top-left, top-center, top-right, center, bottom-left, bottom-center, bottom-right
 *
 * ## Variant (per message)
 * - info (default), success, warn, error, secondary, contrast
 *
 * ## Type (per message)
 * - elevated, flat, outlined
 *
 * ## Stacked variant
 * - Pass @stacked={{true}} to display messages in a stacked layout
 *
 * ## Auto-close and manual close (parent-controlled)
 * - **@autoClose** (default true): when false, messages do not auto-close; only manual close (button or ESC) applies. Per-message: set message.autoClose=true or message.life to opt in to auto-close for that message.
 * - **@closable** (default true): when false, close buttons are hidden and ESC does not close; parent must remove messages via @onClose or by updating @messages. Per-message message.closable can still override when @closable is true.
 * - **@life**: when auto-close is enabled, default duration in ms; overridable per message via message.life.
 * - Per-message: message.sticky or message.autoClose=false disables auto-close for that message when @autoClose is true.
 *
 * ## Keyboard support
 * - Press ESC key to close the first (oldest) closable toast (only when @closable is not false).
 *
 * ## WCAG
 * - role="region" and aria-label on container; role="alert" on messages for live announcements.
 * - Close button has aria-label and keyboard support.
 *
 * @class UlxToast
 * @param {Array<{ id: string, variant?: string, summary?: string, detail?: string, closable?: boolean, sticky?: boolean, autoClose?: boolean, life?: number, showIcon?: boolean, type?: string }>} [messages=[]] - List of message objects to display. Set message.showIcon to true to show a variant icon; default is no icon.
 * @param {'top-left'|'top-center'|'top-right'|'center'|'bottom-left'|'bottom-center'|'bottom-right'} [position='top-center'] - Position of the toast container
 * @param {function} [onClose] - Callback when a message is closed; receives the message object
 * @param {boolean} [autoClose=true] - When false, no message auto-closes unless the message has autoClose:true or life set
 * @param {boolean} [closable=true] - When false, close buttons are hidden and ESC does not close toasts
 * @param {number} [life=2000] - Default auto-close delay in ms when auto-close is enabled; can be overridden per message via message.life
 * @param {boolean} [stacked=false] - When true, displays messages in a stacked layout
 * @param {string} [iconSize='s24'] - Size class for the variant message icon (UlxIcon); close control stays `s18`
 * @param {string} [closeIconName='close-icon-01'] - Icon name for the close button
 * @param {Object} [variantIcons] - Override icon names per variant. Keys: info, success, warn, warning, error, secondary, contrast. Merged with defaults.
 * @param {string} [iconComponentClass='bs-icons1'] - Component class for the message icon (UlxIcon)
 * @param {string} [dataQa] - Override root data-qa attribute
 * @block content - Optional. Yields the message object; when provided, replaces default summary/detail with custom content.
 */
let UlxToast = (_class = (_UlxToast = class UlxToast extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "modalStack", _descriptor, this);
    /** Message ids currently playing the exit animation (toast-exit class). */
    _initializerDefineProperty(this, "exitingIds", _descriptor2, this);
    /** Map to store auto-close timeouts keyed by message id. */
    _defineProperty(this, "_closeTimeouts", new Map());
    /** Bound handler for document keydown events. */
    _defineProperty(this, "_boundDocumentKeyHandler", null);
  }
  get iconSize() {
    return this.args.iconSize ?? "s24";
  }
  get closeIconName() {
    return this.args.closeIconName ?? "close-icon-01";
  }
  get severityIconMap() {
    const overrides = this.args.variantIcons ?? {};
    return {
      ...VARIANT_ICONS,
      ...overrides
    };
  }
  get iconComponentClass() {
    return this.args.iconComponentClass ?? "bs-icons1";
  }
  get rootDataQa() {
    return resolveRootDataQa(this.args.dataQa, "toast");
  }
  getDataQa(part) {
    return buildDataQa(this.rootDataQa, part);
  }
  get containerClasses() {
    const position = this.args.position || "top-center";
    const parts = [getComponentClass("toast"), position];
    this.args.stacked && parts.push("stacked");
    return joinClassNames(...parts);
  }
  /** Portal parent for `appendToBody` (e.g. demo app toast mount). */
  get destinationElement() {
    return getDestinationElement();
  }
  /** Stacks above modal mask when a stack service is present. */
  get toastZIndex() {
    return getOverlayZIndexAboveMask(this.modalStack);
  }
  get toastContainerStyle() {
    return `z-index: ${this.toastZIndex}`;
  }
  /**
  * Drives side effects from `@messages`: auto-close timers and document Escape listener.
  * (Invoked on every read so the list and timeouts stay in sync with the parent.)
  */
  get messages() {
    const list = this.args.messages ?? [];
    this._scheduleCloseTimers(list);
    this._manageDocumentKeyListener(list);
    return list;
  }
  /** Registers capture-phase `keydown` while any message exists; removes when the list is empty. */
  _manageDocumentKeyListener(messages) {
    const hasMessages = messages.length > 0;
    if (hasMessages && !this._boundDocumentKeyHandler) {
      this._boundDocumentKeyHandler = this._handleDocumentKeyDown.bind(this);
      /* Capture: Escape is handled before bubble listeners on modals/overlays. */
      document.addEventListener("keydown", this._boundDocumentKeyHandler, true);
    } else if (!hasMessages && this._boundDocumentKeyHandler) {
      document.removeEventListener("keydown", this._boundDocumentKeyHandler, true);
      this._boundDocumentKeyHandler = null;
    }
  }
  /**
  * Document Escape: close the first message in array order that is closable and not exiting.
  * No-op when `@closable={{false}}`.
  */
  _handleDocumentKeyDown(event) {
    if (!isEscapeKey(event.key) || this.args.closable === false) return;
    const messages = this.args.messages ?? [];
    for (const message of messages) {
      if (message?.id && message.closable !== false && !this.exitingIds.has(message.id)) {
        this.startExitThenClose(message);
        event.preventDefault();
        event.stopPropagation();
        /* Same-tick Escape: do not let modals/menus handle after us. */
        event.stopImmediatePropagation();
        break;
      }
    }
  }
  /**
  * Global `@autoClose={{false}}` disables timers unless a message opts in (`autoClose` or positive `life`).
  * When global auto-close is on, `sticky` or per-message `autoClose={{false}}` disables that row.
  */
  _shouldAutoClose(message) {
    const componentAutoClose = this.args.autoClose !== false;
    if (!componentAutoClose) {
      return message.autoClose === true || typeof message.life === "number" && message.life > 0;
    }
    if (message.sticky) return false;
    if (message.autoClose === false) return false;
    return true;
  }
  /** Duration for the timer: positive `message.life`, else `@life`, else `DEFAULT_LIFE_MS`. */
  _getMessageLife(message) {
    if (typeof message.life === "number" && message.life > 0) {
      return message.life;
    }
    return this.args.life ?? DEFAULT_LIFE_MS;
  }
  /**
  * Clears timers for removed ids, then schedules one timeout per new eligible message.
  * Skips ids that already have a pending timer.
  */
  _scheduleCloseTimers(list) {
    const currentIds = new Set(list.map(m => m?.id).filter(Boolean));
    for (const [id, timerId] of this._closeTimeouts) {
      if (!currentIds.has(id)) {
        clearTimeout(timerId);
        this._closeTimeouts.delete(id);
      }
    }
    for (const message of list) {
      if (!message?.id) continue;
      if (!this._shouldAutoClose(message)) continue;
      if (this._closeTimeouts.has(message.id)) continue;
      const life = this._getMessageLife(message);
      const timerId = setTimeout(() => {
        this.startExitThenClose(message);
        this._closeTimeouts.delete(message.id);
      }, life);
      this._closeTimeouts.set(message.id, timerId);
    }
  }
  /**
  * Row classes: variant (`warning`→`warn` CSS), optional `type`, `closable`, `without-icon` when
  * no variant icon, `toast-sticky`, `toast-exit` while id is in `exitingIds` (or `message.exit`).
  */
  getMessageClasses(message) {
    const rawVariant = message.variant || "info";
    const variant = MESSAGE_VARIANT_CLASS[rawVariant] ?? rawVariant;
    const parts = ["toast-message", variant];
    message.type && parts.push(message.type);
    this.args.closable !== false && message.closable !== false && parts.push("closable");
    message.showIcon !== true && parts.push("without-icon");
    message.sticky && parts.push("toast-sticky");
    (message.exit || message?.id && this.exitingIds.has(message.id)) && parts.push("toast-exit");
    return joinClassNames(...parts);
  }
  /** Icon glyph from `severityIconMap` (merged defaults + `@variantIcons`); falls back to `info`. */
  getIconName(message) {
    const severity = message.variant || "info";
    const map = this.severityIconMap;
    return map[severity] ?? map.info;
  }
  /** Variant icon is off unless `message.showIcon === true`. */
  showMessageIcon(message) {
    return message.showIcon === true;
  }
  /** Close control hidden when `@closable={{false}}`; else respects per-message `closable`. */
  showMessageClose(message) {
    if (this.args.closable === false) return false;
    return message.closable !== false;
  }
  /**
  * Adds id to `exitingIds` (applies `toast-exit`), clears any auto-close timer, then after
  * `EXIT_ANIMATION_MS` calls `onClose` and drops the id from `exitingIds`.
  */
  startExitThenClose(message) {
    if (!message?.id) return;
    if (this.exitingIds.has(message.id)) return;
    if (this._closeTimeouts.has(message.id)) {
      clearTimeout(this._closeTimeouts.get(message.id));
      this._closeTimeouts.delete(message.id);
    }
    this.exitingIds = new Set([...this.exitingIds, message.id]);
    setTimeout(() => {
      this.args.onClose?.(message);
      this.exitingIds = new Set([...this.exitingIds].filter(id => id !== message.id));
    }, EXIT_ANIMATION_MS);
  }
  /** Imperative / click path into the same exit+`onClose` flow as auto-close and Escape. */
  closeMessage(message) {
    this.startExitThenClose(message);
  }
  /** Close icon: Enter / Space activate like click (for keyboard users). */
  handleCloseKeyDown(message, event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.startExitThenClose(message);
    }
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.containerClasses}} data-qa={{this.rootDataQa}} role=\"region\" aria-label={{t \"lbl.notification\"}} style={{this.toastContainerStyle}} {{appendToBody this.destinationElement this.destinationElement}} ...attributes>\n\t\t\t{{#each this.messages key=\"id\" as |message|}}\n\t\t\t\t<div class={{this.getMessageClasses message}} data-qa={{this.getDataQa \"message\"}} role=\"alert\" aria-live=\"polite\">\n\t\t\t\t\t<div class=\"toast-content\" data-qa={{this.getDataQa \"content\"}}>\n\t\t\t\t\t\t{{#if (this.showMessageIcon message)}}\n\t\t\t\t\t\t\t<span class=\"toast-icon\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t<UlxIcon @iconName={{this.getIconName message}} @type=\"font\" @size={{this.iconSize}} @componentClass={{this.iconComponentClass}} aria-hidden=\"true\" />\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t<div class=\"toast-text\" data-qa={{this.getDataQa \"text\"}}>\n\t\t\t\t\t\t\t{{#if (has-block \"content\")}}\n\t\t\t\t\t\t\t\t{{yield message to=\"content\"}}\n\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t{{#if message.summary}}\n\t\t\t\t\t\t\t\t\t<span class=\"toast-summary\">{{message.summary}}</span>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{#if message.detail}}\n\t\t\t\t\t\t\t\t\t<span class=\"toast-detail\">{{message.detail}}</span>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{#if (this.showMessageClose message)}}\n\t\t\t\t\t\t\t<UlxIcon @iconName={{this.closeIconName}} @type=\"font\" @size=\"s18\" @componentClass=\"bs-icons1\" @customClass=\"pointer\" role=\"button\" tabindex=\"0\" aria-label={{t \"lbl.close.notification\"}} data-qa={{this.getDataQa \"close\"}} {{on \"click\" (fn this.closeMessage message)}} {{on \"keydown\" (fn this.handleCloseKeyDown message)}} />\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t{{/each}}\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    t,
    appendToBody,
    UlxIcon,
    on,
    fn
  })
}), _UlxToast), _UlxToast), _descriptor = _applyDecoratedDescriptor(_class.prototype, "modalStack", [inject], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "getDataQa", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getDataQa"), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "exitingIds", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return new Set();
  }
}), _applyDecoratedDescriptor(_class.prototype, "getMessageClasses", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getMessageClasses"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getIconName", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getIconName"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showMessageIcon", [action], Object.getOwnPropertyDescriptor(_class.prototype, "showMessageIcon"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showMessageClose", [action], Object.getOwnPropertyDescriptor(_class.prototype, "showMessageClose"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeMessage", [action], Object.getOwnPropertyDescriptor(_class.prototype, "closeMessage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleCloseKeyDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleCloseKeyDown"), _class.prototype), _class);
/*
* UlxToast – possible usages
* ==========================
*
* 1. Minimal (position + messages + onClose)
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} />
*
* 2. Position
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @position="top-left" />
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @position="top-center" />
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @position="top-right" />
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @position="center" />
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @position="bottom-left" />
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @position="bottom-center" />
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @position="bottom-right" />
*
* 3. Stacked layout
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @stacked={{true}} />
*
* 4. Auto-close and life
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @autoClose={{false}} />
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @life={{5000}} />
*
* 5. Closable
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @closable={{false}} />
*
* 6. Icon options
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @iconSize="s16" />
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @closeIconName="my-close-icon" />
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @iconComponentClass="my-icon-font" />
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @variantIcons={{hash error="custom-error-icon" success="custom-success-icon"}} />
*
* 7. Message object shape (per message)
*    { id, variant?, summary?, detail?, closable?, sticky?, autoClose?, life?, showIcon?, type? }
*    variant: "info" | "success" | "warn" | "warning" | "error" | "secondary" | "contrast"
*    showIcon: when true, shows variant icon; default is no icon
*    type: "elevated" | "flat" | "outlined"
*
* 8. Custom content block (replaces default summary/detail)
*    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}}>
*      <:content as |message|>
*        <strong>{{message.summary}}</strong>
*        <p>{{message.detail}}</p>
*      </:content>
*    </UlxToast>
*
* 9. Full example with multiple options
*    <UlxToast
*      @messages={{this.messages}}
*      @onClose={{this.handleClose}}
*      @position="bottom-right"
*      @stacked={{true}}
*      @autoClose={{true}}
*      @life={{3000}}
*      @closable={{true}}
*      @iconSize="s18"
*      @closeIconName="close-icon-01"
*      @iconComponentClass="bs-icons1"
*      @variantIcons={{this.customVariantIcons}}
*    />
*/

export { UlxToast as default };
//# sourceMappingURL=index.js.map
