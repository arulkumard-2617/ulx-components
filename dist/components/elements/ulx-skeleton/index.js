import Component from '@glimmer/component';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxSkeleton;
class UlxSkeleton extends Component {
  get baseClass() {
    const {
      componentClass
    } = this.args;
    return componentClass ?? getComponentClass("skeleton");
  }
  get rootClasses() {
    const {
      shape = "rectangle",
      animation = "wave",
      customClass
    } = this.args;
    const parts = [this.baseClass];
    shape === "circle" && parts.push("circle");
    animation === "wave" && parts.push("wave");
    animation === "none" && parts.push("no-animation");
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get rootDataQa() {
    return this.args.dataQa ?? this.baseClass;
  }
  get inlineStyle() {
    const {
      size,
      width = "100%",
      height = "1rem",
      borderRadius
    } = this.args;
    const w = size ?? width;
    const h = size ?? height;
    const styleParts = [`width: ${w}`, `height: ${h}`];
    borderRadius && styleParts.push(`border-radius: ${borderRadius}`);
    return styleParts.join("; ");
  }
}
_UlxSkeleton = UlxSkeleton;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} style={{this.inlineStyle}} aria-hidden=\"true\" data-qa={{this.rootDataQa}} ...attributes></div>\n\t", {
  strictMode: true
}), _UlxSkeleton);

export { UlxSkeleton as default };
//# sourceMappingURL=index.js.map
