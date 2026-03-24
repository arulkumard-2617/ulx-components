import { b as _initializerDefineProperty, _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { htmlSafe } from '@ember/template';
import appendToBody from '../../../modifiers/append-to-body.js';
import { applyBodyAbsoluteFromViewport } from '../../../utils/overlay-helpers.js';
import { getComponentClass, NAMESPACE } from '../../../utils/component-config.js';
import { resolveKey, buildInputId, normalizeRules, isRulesRequired, getConstraintValue, isInvalidState, buildInputClass, buildAriaDescribedBy } from '../../../utils/input-util.js';
import { t } from '../../../utils/i18n.js';
import UlxIconButton from '../ulx-icon-button/index.js';
import UlxIconInput from '../ulx-icon-input/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _UlxPassword;
const DEFAULT_MEDIUM_REGEX = "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).";
const DEFAULT_STRONG_REGEX = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";
let UlxPassword = (_class = (_UlxPassword = class UlxPassword extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "unmasked", _descriptor, this);
    _initializerDefineProperty(this, "focused", _descriptor2, this);
    _defineProperty(this, "triggerElement", null);
    // --------------------------
    // Modifiers
    // --------------------------
    _defineProperty(this, "triggerRef", modifier(element => {
      this.triggerElement = element;
      return () => {
        if (this.triggerElement === element) this.triggerElement = null;
      };
    }));
    _defineProperty(this, "positionPanel", modifier((element, [when]) => {
      if (!when || !this.triggerElement) return;
      const position = () => {
        const inputEl = this.triggerElement.querySelector("input") || this.triggerElement;
        const rect = inputEl.getBoundingClientRect();
        const panelHeight = element.offsetHeight || 80;
        const viewportHeight = window.innerHeight;
        let top = rect.bottom + 4;
        let left = rect.left;
        let transformOrigin = "center top";
        // flip
        if (rect.bottom + panelHeight > viewportHeight) {
          const topPos = rect.top - panelHeight - 4;
          if (topPos >= 0) {
            top = topPos;
            transformOrigin = "center bottom";
          } else {
            top = viewportHeight - panelHeight - 10;
          }
        }
        if (top < 0) top = 10;
        applyBodyAbsoluteFromViewport(element, top, left);
        element.style.top = `${top + window.scrollY}px`;
        element.style.left = `${left + window.scrollX}px`;
        element.style.right = "auto";
        element.style.bottom = "auto";
        element.style.width = `${rect.width}px`;
        element.style.minWidth = `${rect.width}px`;
        element.style.maxWidth = `${rect.width}px`;
        element.style.zIndex = "1001";
        element.style.transformOrigin = transformOrigin;
      };
      position();
      const onScroll = () => position();
      const onResize = () => position();
      window.addEventListener("scroll", onScroll, true);
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("scroll", onScroll, true);
        window.removeEventListener("resize", onResize);
      };
    }));
  }
  // --------------------------
  // Base
  // --------------------------
  get baseClass() {
    return getComponentClass("password");
  }
  get key() {
    return resolveKey(this, this.args.key);
  }
  get inputId() {
    return buildInputId(NAMESPACE, this.args.id, this.key);
  }
  // --------------------------
  // Rules
  // --------------------------
  get rules() {
    return normalizeRules(this.args.rules);
  }
  get isRequired() {
    return isRulesRequired(this.rules);
  }
  get minLength() {
    return getConstraintValue(this.rules, "minLength");
  }
  get maxLength() {
    return getConstraintValue(this.rules, "maxLength");
  }
  get isInvalid() {
    const {
      invalid,
      error
    } = this.args;
    return isInvalidState(invalid, error);
  }
  // --------------------------
  // State
  // --------------------------
  get value() {
    return this.args.value ?? "";
  }
  get inputType() {
    return this.unmasked ? "text" : "password";
  }
  get hasToggleMask() {
    return this.args.toggleMask ?? false;
  }
  // --------------------------
  // Strength
  // --------------------------
  get mediumRegex() {
    if (!this._medium) {
      this._medium = new RegExp(this.args.mediumRegex ?? DEFAULT_MEDIUM_REGEX);
    }
    return this._medium;
  }
  get strongRegex() {
    if (!this._strong) {
      this._strong = new RegExp(this.args.strongRegex ?? DEFAULT_STRONG_REGEX);
    }
    return this._strong;
  }
  get strengthLevel() {
    const value = this.value;
    if (!value) return 0;
    if (this.strongRegex.test(value)) return 3;
    if (this.mediumRegex.test(value)) return 2;
    return 1;
  }
  get strengthName() {
    switch (this.strengthLevel) {
      case 1:
        return "weak";
      case 2:
        return "medium";
      case 3:
        return "strong";
      default:
        return "";
    }
  }
  get strengthLabel() {
    const {
      promptLabel,
      weakLabel,
      mediumLabel,
      strongLabel
    } = this.args;
    switch (this.strengthLevel) {
      case 1:
        return weakLabel ?? t("lbl.password.weak");
      case 2:
        return mediumLabel ?? t("lbl.password.medium");
      case 3:
        return strongLabel ?? t("lbl.password.strong");
      default:
        return promptLabel ?? t("lbl.password.prompt");
    }
  }
  get strengthWidthStyle() {
    switch (this.strengthLevel) {
      case 1:
        return htmlSafe("width: 33.33%");
      case 2:
        return htmlSafe("width: 66.66%");
      case 3:
        return htmlSafe("width: 100%");
      default:
        return htmlSafe("width: 0%");
    }
  }
  get showPanel() {
    return this.focused && this.args.feedback !== false;
  }
  // --------------------------
  // Classes
  // --------------------------
  get rootClass() {
    const parts = [this.baseClass];
    if (this.args.customClass) parts.push(this.args.customClass);
    return parts.join(" ");
  }
  get inputClass() {
    const {
      size = "m-size",
      filled,
      disabled,
      readonly,
      value
    } = this.args;
    return buildInputClass({
      isTextarea: false,
      size,
      filled,
      invalid: this.isInvalid,
      disabled,
      readonly,
      floatLabel: false,
      value
    });
  }
  get panelClass() {
    return `${getComponentClass("password-panel")} enter-done`;
  }
  get meterClass() {
    return [getComponentClass("password-meter"), this.strengthName].filter(Boolean).join(" ");
  }
  get strengthBarClass() {
    return [getComponentClass("password-strength"), this.strengthName].filter(Boolean).join(" ");
  }
  get infoClass() {
    return getComponentClass("password-info");
  }
  // --------------------------
  // Accessibility
  // --------------------------
  get ariaDescribedBy() {
    return buildAriaDescribedBy(this.inputId, {
      helpText: this.args.helpText,
      error: this.args.error
    });
  }
  get ariaErrorMessage() {
    return this.args.error ? `${this.inputId}-error` : undefined;
  }
  get toggleIconName() {
    return this.unmasked ? "hide-icon" : "view-icon";
  }
  get toggleAriaLabel() {
    return this.unmasked ? t("lbl.password.hide") : t("lbl.password.show");
  }
  // --------------------------
  // Actions
  // --------------------------
  toggleMask() {
    if (this.args.disabled) return;
    this.unmasked = !this.unmasked;
  }
  handleInput(e) {
    this.args.onInput?.(e);
  }
  handleFocus(e) {
    this.focused = true;
    this.args.onFocus?.(e);
  }
  handleBlur(e) {
    requestAnimationFrame(() => {
      this.focused = false;
    });
    this.args.onBlur?.(e);
  }
  // --------------------------
  // Template
  // --------------------------
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClass}} {{this.triggerRef}}>\n\n\t\t\t<UlxIconInput @iconRight={{true}} @disabled={{@disabled}}>\n\n\t\t\t\t<:input>\n\t\t\t\t\t<input id={{this.inputId}} type={{this.inputType}} class={{this.inputClass}} value={{this.value}} placeholder={{@placeholder}} disabled={{@disabled}} readonly={{@readonly}} minlength={{this.minLength}} maxlength={{this.maxLength}} required={{this.isRequired}} aria-invalid={{if this.isInvalid \"true\" \"false\"}} aria-describedby={{this.ariaDescribedBy}} aria-errormessage={{this.ariaErrorMessage}} {{on \"input\" this.handleInput}} {{on \"focus\" this.handleFocus}} {{on \"blur\" this.handleBlur}} />\n\t\t\t\t</:input>\n\n\t\t\t\t<:icon>\n\t\t\t\t\t{{#if this.hasToggleMask}}\n\t\t\t\t\t\t<UlxIconButton @iconLeft={{this.toggleIconName}} @iconSize=\"s18\" @text={{true}} @disabled={{@disabled}} @onClick={{this.toggleMask}} aria-label={{this.toggleAriaLabel}} aria-pressed={{if this.unmasked \"true\" \"false\"}} />\n\t\t\t\t\t{{/if}}\n\t\t\t\t</:icon>\n\n\t\t\t</UlxIconInput>\n\n\t\t\t{{#if this.showPanel}}\n\t\t\t\t<div class={{this.panelClass}} aria-hidden=\"false\" {{appendToBody this.showPanel}} {{this.positionPanel this.showPanel}}>\n\n\t\t\t\t\t{{!-- HEADER SLOT --}}\n\t\t\t\t\t{{#if (has-block \"panel-header\")}}\n\t\t\t\t\t\t<div class=\"ulx-password-header\">\n\t\t\t\t\t\t\t{{yield to=\"panel-header\"}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t{{!-- DEFAULT METER --}}\n\t\t\t\t\t<div class={{this.meterClass}}>\n\t\t\t\t\t\t<div class={{this.strengthBarClass}} style={{this.strengthWidthStyle}}></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class={{this.infoClass}}>\n\t\t\t\t\t\t{{this.strengthLabel}}\n\t\t\t\t\t</div>\n\n\t\t\t\t\t{{!-- FOOTER SLOT --}}\n\t\t\t\t\t{{#if (has-block \"panel-footer\")}}\n\t\t\t\t\t\t<div class=\"ulx-password-footer\">\n\t\t\t\t\t\t\t{{yield to=\"panel-footer\"}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/if}}\n\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    UlxIconInput,
    on,
    UlxIconButton,
    appendToBody
  })
}), _UlxPassword), _UlxPassword), _descriptor = _applyDecoratedDescriptor(_class.prototype, "unmasked", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "focused", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "toggleMask", [action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleMask"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleInput", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleInput"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleBlur", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleBlur"), _class.prototype), _class);

export { UlxPassword as default };
//# sourceMappingURL=index.js.map
