import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { getComponentClass, NAMESPACE } from '../../../utils/component-config.js';
import { t } from '../../../utils/i18n.js';
import { resolveKey, buildToggleId, isInvalidState, invokeCheckedChange } from '../../../utils/input-util.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _UlxToggle;
let UlxToggle = (_class = (_UlxToggle = class UlxToggle extends Component {
  get baseClass() {
    return getComponentClass("inputswitch");
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-toggle";
  }
  get key() {
    return resolveKey(this, this.args.key);
  }
  get toggleId() {
    return buildToggleId(NAMESPACE, this.args.inputId, this.key);
  }
  get isInvalid() {
    return isInvalidState(this.args.invalid, this.args.error);
  }
  get rootClasses() {
    const {
      size = "m-size",
      variant = "primary",
      disabled = false,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    parts.push(size);
    parts.push(variant);
    this.isInvalid && parts.push("invalid");
    disabled && parts.push("disabled");
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get sliderClasses() {
    const {
      checked = false
    } = this.args;
    const parts = ["inputswitch-slider"];
    checked && parts.push("checked");
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get inputClasses() {
    const {
      disabled = false
    } = this.args;
    const parts = ["inputswitch-input"];
    disabled && parts.push("disabled");
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  handleChange(event) {
    invokeCheckedChange(this.args, event);
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} data-qa={{this.rootDataQa}}>\n\t\t\t<input type=\"checkbox\" id={{this.toggleId}} class={{this.inputClasses}} checked={{@checked}} disabled={{@disabled}} aria-invalid={{if this.isInvalid \"true\" \"false\"}} aria-checked={{if @checked \"true\" \"false\"}} role=\"switch\" data-qa=\"ulx-toggle-input\" {{on \"change\" this.handleChange}} ...attributes />\n\t\t\t<div class={{this.sliderClasses}} aria-hidden=\"true\" data-qa=\"ulx-toggle-slider\">\n\t\t\t\t{{#if @checked}}\n\t\t\t\t\t<span class=\"on-lbl\">{{t \"lbl.toggle.on\"}}</span>\n\t\t\t\t{{else}}\n\t\t\t\t\t<span class=\"off-lbl\">{{t \"lbl.toggle.off\"}}</span>\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    on,
    t
  })
}), _UlxToggle), _UlxToggle), _applyDecoratedDescriptor(_class.prototype, "handleChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleChange"), _class.prototype), _class);

export { UlxToggle as default };
//# sourceMappingURL=index.js.map
