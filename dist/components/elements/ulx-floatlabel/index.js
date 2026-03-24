import { b as _initializerDefineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { hash } from '@ember/helper';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _UlxFloatLabel;
let UlxFloatLabel = (_class = (_UlxFloatLabel = class UlxFloatLabel extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "isFocused", _descriptor, this);
  }
  // ---------- Computed State ----------
  get baseClass() {
    return this.args.componentClass ?? getComponentClass("floatlabel");
  }
  get hasValue() {
    const value = this.args.value;
    return value !== undefined && value !== null && value !== "";
  }
  get isActive() {
    return this.isFocused || this.hasValue;
  }
  get rootClasses() {
    return [this.baseClass, this.args.size || "m-size", this.isActive && "active", this.args.disabled && "disabled", this.args.invalid && "invalid", this.args.customClass].filter(Boolean).join(" ");
  }
  // ---------- Actions ----------
  handleFocus(event) {
    this.isFocused = true;
    this.args.onFocus?.(event);
  }
  handleBlur(event) {
    this.isFocused = false;
    this.args.onBlur?.(event);
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}}>\n\n\t\t\t{{!-- Control Slot --}}\n\t\t\t{{yield (hash onFocus=this.handleFocus onBlur=this.handleBlur)}}\n\n\t\t\t{{!-- Label --}}\n\t\t\t<label class=\"floatlabel-label\">\n\t\t\t\t{{#if (has-block \"label\")}}\n\t\t\t\t\t{{yield to=\"label\"}}\n\t\t\t\t{{else}}\n\t\t\t\t\t{{@label}}\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#if @required}}\n\t\t\t\t\t<span class=\"required\">*</span>\n\t\t\t\t{{/if}}\n\t\t\t</label>\n\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    hash
  })
}), _UlxFloatLabel), _UlxFloatLabel), _descriptor = _applyDecoratedDescriptor(_class.prototype, "isFocused", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "handleFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleBlur", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleBlur"), _class.prototype), _class);

export { UlxFloatLabel as default };
//# sourceMappingURL=index.js.map
