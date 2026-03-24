import Component from '@glimmer/component';
import { buildInputGroupClass } from '../../../utils/input-util.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxInputGroup;
class UlxInputGroup extends Component {
  get rootClass() {
    const {
      size = "m-size",
      filled,
      disabled,
      invalid
    } = this.args;
    return buildInputGroupClass({
      size,
      filled,
      invalid,
      disabled
    });
  }
  get startAddonSpanClass() {
    const {
      startAddonClass
    } = this.args;
    const parts = ["inputgroup-addon"];
    startAddonClass && parts.push(startAddonClass);
    startAddonClass || parts.push("contents");
    return parts.join(" ");
  }
  get endAddonSpanClass() {
    const {
      endAddonClass
    } = this.args;
    const parts = ["inputgroup-addon"];
    endAddonClass && parts.push(endAddonClass);
    endAddonClass || parts.push("contents");
    return parts.join(" ");
  }
}
_UlxInputGroup = UlxInputGroup;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClass}}>\n\n\t\t\t{{#if (has-block \"start\")}}\n\t\t\t\t<span class={{this.startAddonSpanClass}}>\n\t\t\t\t\t{{yield to=\"start\"}}\n\t\t\t\t</span>\n\t\t\t{{/if}}\n\n\t\t\t{{yield to=\"input\"}}\n\n\t\t\t{{#if (has-block \"end\")}}\n\t\t\t\t<span class={{this.endAddonSpanClass}}>\n\t\t\t\t\t{{yield to=\"end\"}}\n\t\t\t\t</span>\n\t\t\t{{/if}}\n\n\t\t</div>\n\t", {
  strictMode: true
}), _UlxInputGroup);

export { UlxInputGroup as default };
//# sourceMappingURL=index.js.map
