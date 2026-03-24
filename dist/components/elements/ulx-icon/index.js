import Component from '@glimmer/component';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxIcon;
class UlxIcon extends Component {
  get baseClass() {
    return getComponentClass("icon");
  }
  get rootDataQa() {
    const {
      dataQa
    } = this.args;
    return dataQa ?? "ulx-icon";
  }
  get resolvedAriaLabel() {
    const {
      ariaLabel
    } = this.args;
    return typeof ariaLabel === "string" ? ariaLabel.trim() : "";
  }
  get iconClasses() {
    const {
      iconName,
      type = "svg",
      size,
      customClass,
      componentClass = "bs-icons1"
    } = this.args;
    const parts = [];
    componentClass && parts.push(componentClass);
    iconName && type === "font" && parts.push(iconName);
    size && parts.push(size);
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get useFontIcon() {
    const {
      type = "svg"
    } = this.args;
    return type === "font";
  }
  get hasAriaLabel() {
    return this.resolvedAriaLabel.length > 0;
  }
  get symbolHref() {
    const {
      iconName
    } = this.args;
    return iconName ? `#${iconName}` : null;
  }
}
_UlxIcon = UlxIcon;
setComponentTemplate(precompileTemplate("\n\t\t{{#if (has-block)}}\n\t\t\t<span class={{this.iconClasses}} data-qa={{this.rootDataQa}} aria-hidden={{if this.hasAriaLabel \"false\" \"true\"}} role={{if this.hasAriaLabel \"img\"}} aria-label={{this.resolvedAriaLabel}} ...attributes>\n\t\t\t\t{{yield}}\n\t\t\t</span>\n\t\t{{else if this.useFontIcon}}\n\t\t\t<i class={{this.iconClasses}} data-qa={{this.rootDataQa}} aria-hidden={{if this.hasAriaLabel \"false\" \"true\"}} role={{if this.hasAriaLabel \"img\"}} aria-label={{this.resolvedAriaLabel}} ...attributes></i>\n\t\t{{else}}\n\t\t\t<svg class={{this.iconClasses}} data-qa={{this.rootDataQa}} aria-hidden={{if this.hasAriaLabel \"false\" \"true\"}} role={{if this.hasAriaLabel \"img\"}} aria-label={{this.resolvedAriaLabel}} focusable=\"false\" ...attributes xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t{{#if this.symbolHref}}\n\t\t\t\t\t<use href={{this.symbolHref}}></use>\n\t\t\t\t{{/if}}\n\t\t\t</svg>\n\t\t{{/if}}\n\t", {
  strictMode: true
}), _UlxIcon);

export { UlxIcon as default };
//# sourceMappingURL=index.js.map
