import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { getComponentClass } from '../../../utils/component-config.js';
import { t } from '../../../utils/i18n.js';
import UlxIcon from '../ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _UlxChip;
let UlxChip = (_class = (_UlxChip = class UlxChip extends Component {
  get baseClass() {
    return this.args.componentClass ?? getComponentClass("chip");
  }
  get rootClasses() {
    const {
      image,
      size = "m-size",
      customClass
    } = this.args;
    const parts = [this.baseClass];
    image && parts.push("with-image");
    size && parts.push(size);
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get removeIconName() {
    return this.args.removeIcon ?? "bs-icons1 close-icon-01";
  }
  get imageAltText() {
    return this.args.imageAlt ?? t("lbl.image");
  }
  get removeValue() {
    const {
      label,
      image,
      icon
    } = this.args;
    return label ?? image ?? icon ?? "";
  }
  get removeButtonAriaLabel() {
    return t("lbl.remove");
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-chip";
  }
  handleRemove(event) {
    event.stopPropagation();
    const value = this.removeValue;
    this.args.onRemove?.(event, value);
  }
  handleRemoveKeydown(event) {
    if (event.code === "Backspace") {
      event.preventDefault();
      this.handleRemove(event);
    }
  }
  handleImageError(event) {
    this.args.onImageError?.(event);
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} data-qa={{this.rootDataQa}} aria-label={{@label}} ...attributes>\n\t\t\t{{#if (has-block)}}\n\t\t\t\t{{yield}}\n\t\t\t{{else}}\n\t\t\t\t{{#if @image}}\n\t\t\t\t\t<img data-qa=\"ulx-chip-image\" class=\"chip-image\" src={{@image}} alt={{this.imageAltText}} {{on \"error\" this.handleImageError}} />\n\t\t\t\t{{/if}}\n\t\t\t\t{{#if (has-block \"icon\")}}\n\t\t\t\t\t<span class=\"chip-icon\" data-qa=\"ulx-chip-icon\">\n\t\t\t\t\t\t{{yield to=\"icon\"}}\n\t\t\t\t\t</span>\n\t\t\t\t{{else if @icon}}\n\t\t\t\t\t<span class=\"chip-icon\" data-qa=\"ulx-chip-icon\">\n\t\t\t\t\t\t<UlxIcon @iconName={{@icon}} @size=\"s18\" @type=\"font\" aria-hidden=\"true\" />\n\t\t\t\t\t</span>\n\t\t\t\t{{/if}}\n\t\t\t\t{{#if @label}}\n\t\t\t\t\t<span class=\"chip-label\" data-qa=\"ulx-chip-label\">{{@label}}</span>\n\t\t\t\t{{/if}}\n\t\t\t\t{{#if @removable}}\n\t\t\t\t\t<button type=\"button\" class=\"chip-remove-icon\" data-qa=\"ulx-chip-remove\" aria-label={{this.removeButtonAriaLabel}} {{on \"click\" this.handleRemove}} {{on \"keydown\" this.handleRemoveKeydown}}>\n\t\t\t\t\t\t<UlxIcon @iconName={{this.removeIconName}} @type=\"font\" @size=\"s18\" aria-hidden=\"true\" />\n\t\t\t\t\t</button>\n\t\t\t\t{{/if}}\n\t\t\t{{/if}}\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    on,
    UlxIcon
  })
}), _UlxChip), _UlxChip), _applyDecoratedDescriptor(_class.prototype, "handleRemove", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleRemove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleRemoveKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleRemoveKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleImageError", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleImageError"), _class.prototype), _class);

export { UlxChip as default };
//# sourceMappingURL=index.js.map
