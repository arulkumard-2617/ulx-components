import Component from '@glimmer/component';
import { getComponentClass } from '../../../utils/component-config.js';
import { joinClassNames } from '../../../utils/class-names.js';
import { resolveRootDataQa } from '../../../utils/data-qa.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxButtonGroup;
class UlxButtonGroup extends Component {
  get baseClass() {
    return getComponentClass("button-groups");
  }
  /** Root classes: base + orientation + size + optional variant flags (`fluid`, `severity`, etc.). */
  get groupClasses() {
    const {
      orientation = "horizontal",
      size = "m-size",
      fluid = false,
      outlined = false,
      text = false,
      raised = false,
      severity,
      customClass
    } = this.args;
    const parts = [this.baseClass, orientation, size];
    fluid && parts.push("fluid");
    severity && parts.push(severity);
    outlined && parts.push("outlined");
    text && parts.push("text");
    raised && parts.push("raised");
    customClass && parts.push(customClass);
    return joinClassNames(...parts);
  }
  get rootDataQa() {
    return resolveRootDataQa(this.args.dataQa, "button-group");
  }
}
_UlxButtonGroup = UlxButtonGroup;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.groupClasses}} data-qa={{this.rootDataQa}} ...attributes>\n\t\t\t{{yield}}\n\t\t</div>\n\t", {
  strictMode: true
}), _UlxButtonGroup);

export { UlxButtonGroup as default };
//# sourceMappingURL=index.js.map
