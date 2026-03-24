import Component from '@glimmer/component';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxForm;
class UlxForm extends Component {
  get baseClass() {
    return getComponentClass("form");
  }
  get rootClasses() {
    const {
      cols,
      size,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    cols === 2 && parts.push("cols-2");
    cols === 3 && parts.push("cols-3");
    (size === "m-size" || size === "l-size" || size === "xl-size") && parts.push(size);
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
}
_UlxForm = UlxForm;
setComponentTemplate(precompileTemplate("\n\t\t<form class={{this.rootClasses}} ...attributes>\n\t\t\t{{yield}}\n\t\t</form>\n\t", {
  strictMode: true
}), _UlxForm);

export { UlxForm as default };
//# sourceMappingURL=index.js.map
