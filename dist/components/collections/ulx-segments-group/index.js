import Component from '@glimmer/component';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxSegmentsGroup;
class UlxSegmentsGroup extends Component {
  get baseClass() {
    return getComponentClass("segments");
  }
  get rootClasses() {
    const {
      horizontal = false,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    // Horizontal layout
    horizontal && parts.push("horizontal");
    // Custom class
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get role() {
    return this.args.role ?? "group";
  }
  get ariaLabel() {
    return this.args.ariaLabel;
  }
  get ariaLabelledBy() {
    return this.args.ariaLabelledBy;
  }
  get ariaDescribedBy() {
    return this.args.ariaDescribedBy;
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-segments-group";
  }
}
_UlxSegmentsGroup = UlxSegmentsGroup;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} data-qa={{this.rootDataQa}} role={{this.role}} aria-label={{this.ariaLabel}} aria-labelledby={{this.ariaLabelledBy}} aria-describedby={{this.ariaDescribedBy}} ...attributes>\n\t\t\t{{yield}}\n\t\t</div>\n\t", {
  strictMode: true
}), _UlxSegmentsGroup);

export { UlxSegmentsGroup as default };
//# sourceMappingURL=index.js.map
