import Component from '@glimmer/component';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxButtonGroup;
class UlxButtonGroup extends Component {
  get baseClass() {
    return getComponentClass("button-groups");
  }
  get groupClasses() {
    const {
      orientation,
      size,
      fluid,
      severity,
      outlined,
      text,
      raised,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    parts.push(orientation || "horizontal");
    parts.push(size || "m-size");
    if (fluid) parts.push("fluid");
    if (severity) parts.push(severity);
    if (outlined) parts.push("outlined");
    if (text) parts.push("text");
    if (raised) parts.push("raised");
    if (customClass) parts.push(customClass);
    return parts.filter(Boolean).join(" ");
  }
}
_UlxButtonGroup = UlxButtonGroup;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.groupClasses}} ...attributes>\n\t\t\t{{yield}}\n\t\t</div>\n\t", {
  strictMode: true
}), _UlxButtonGroup);

export { UlxButtonGroup as default };
//# sourceMappingURL=index.js.map
