import Component from '@glimmer/component';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxBadge;
class UlxBadge extends Component {
  get baseClass() {
    const {
      componentClass
    } = this.args;
    return componentClass ?? getComponentClass("badge");
  }
  get rootClasses() {
    const {
      variant = "primary",
      size = "s-size",
      type,
      disabled = false,
      clickable = false,
      interactive = false,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    // Variant
    parts.push(variant);
    // Size
    parts.push(size);
    // Type (circle, dot, or default square)
    type === "dot" && parts.push("dot");
    type === "circle" && parts.push("circle");
    // States
    disabled && parts.push("disabled");
    clickable && parts.push("clickable");
    interactive && parts.push("interactive");
    // Custom classes
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get isDot() {
    return this.args.type === "dot";
  }
  get hasAriaLabel() {
    return typeof this.args.ariaLabel === "string" && this.args.ariaLabel.length > 0;
  }
  get ariaHidden() {
    if (this.isDot && !this.hasAriaLabel) {
      return "true";
    }
    return this.hasAriaLabel ? "false" : "true";
  }
  get role() {
    return this.hasAriaLabel ? "status" : undefined;
  }
  get tabindex() {
    // Interactive badges should be focusable
    if (this.args.clickable || this.args.interactive) {
      return this.args.disabled ? "-1" : "0";
    }
    return undefined;
  }
}
_UlxBadge = UlxBadge;
setComponentTemplate(precompileTemplate("\n\t\t<span data-qa=\"ulx-badge\" class={{this.rootClasses}} aria-hidden={{this.ariaHidden}} role={{this.role}} aria-label={{@ariaLabel}} aria-disabled={{if @disabled \"true\"}} tabindex={{this.tabindex}} ...attributes>\n\t\t\t{{#unless this.isDot}}\n\t\t\t\t{{#if @value}}\n\t\t\t\t\t{{@value}}\n\t\t\t\t{{else}}\n\t\t\t\t\t{{yield}}\n\t\t\t\t{{/if}}\n\t\t\t{{/unless}}\n\t\t</span>\n\t", {
  strictMode: true
}), _UlxBadge);

export { UlxBadge as default };
//# sourceMappingURL=index.js.map
