import Component from '@glimmer/component';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxIcon;
class UlxIcon extends Component {
  get baseClass() {
    return this.args.componentClass ?? getComponentClass("icon");
  }
  get iconClasses() {
    const {
      iconName,
      type,
      size,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    if (iconName && type === "font") parts.push(iconName);
    if (size) parts.push(size);
    if (customClass) parts.push(customClass);
    return parts.filter(Boolean).join(" ");
  }
  get useFontIcon() {
    return this.args.type === "font";
  }
  get hasAriaLabel() {
    return typeof this.args.ariaLabel === "string" && this.args.ariaLabel.length > 0;
  }
}
_UlxIcon = UlxIcon;
setComponentTemplate(precompileTemplate("\n\t\t{{#if (has-block \"icon\")}}\n\t\t\t<span class={{this.iconClasses}} aria-hidden={{if this.hasAriaLabel \"false\" \"true\"}} role={{if this.hasAriaLabel \"img\"}} aria-label={{@ariaLabel}} ...attributes>\n\t\t\t\t{{yield to=\"icon\"}}\n\t\t\t</span>\n\t\t{{else if this.useFontIcon}}\n\t\t\t<i class={{this.iconClasses}} aria-hidden={{if this.hasAriaLabel \"false\" \"true\"}} role={{if this.hasAriaLabel \"img\"}} aria-label={{@ariaLabel}} ...attributes></i>\n\t\t{{else}}\n\t\t\t<svg class={{this.iconClasses}} aria-hidden={{if this.hasAriaLabel \"false\" \"true\"}} role={{if this.hasAriaLabel \"img\"}} aria-label={{@ariaLabel}} focusable=\"false\" ...attributes xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t<use href=\"#{{@iconName}}\"></use>\n\t\t\t</svg>\n\t\t{{/if}}\n\t", {
  strictMode: true
}), _UlxIcon);

export { UlxIcon as default };
//# sourceMappingURL=index.js.map
