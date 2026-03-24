import Component from '@glimmer/component';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxToolbar;
class UlxToolbar extends Component {
  get baseClass() {
    return getComponentClass("toolbar");
  }
  get rootDataQa() {
    return this.args.dataQa ?? getComponentClass("toolbar");
  }
  get startDataQa() {
    return `${this.rootDataQa}-start`;
  }
  get centerDataQa() {
    return `${this.rootDataQa}-center`;
  }
  get endDataQa() {
    return `${this.rootDataQa}-end`;
  }
  get rootClasses() {
    const {
      customClass
    } = this.args;
    const parts = [this.baseClass];
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
}
_UlxToolbar = UlxToolbar;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} role=\"toolbar\" data-qa={{this.rootDataQa}} ...attributes>\n\t\t\t<div class=\"toolbar-start\" data-qa={{this.startDataQa}}>\n\t\t\t\t{{#if (has-block \"start\")}}\n\t\t\t\t\t{{yield to=\"start\"}}\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\n\t\t\t<div class=\"toolbar-center\" data-qa={{this.centerDataQa}}>\n\t\t\t\t{{#if (has-block \"center\")}}\n\t\t\t\t\t{{yield to=\"center\"}}\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\n\t\t\t<div class=\"toolbar-end\" data-qa={{this.endDataQa}}>\n\t\t\t\t{{#if (has-block \"end\")}}\n\t\t\t\t\t{{yield to=\"end\"}}\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\t\t</div>\n\t", {
  strictMode: true
}), _UlxToolbar);

export { UlxToolbar as default };
//# sourceMappingURL=index.js.map
