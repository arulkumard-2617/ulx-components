import Component from '@glimmer/component';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlsIcon;
class UlsIcon extends Component {
  get iconClass() {
    return getComponentClass("icon");
  }
}
_UlsIcon = UlsIcon;
setComponentTemplate(precompileTemplate("\n\t\t<span class={{this.iconClass}} ...attributes>asdadasd</span>\n\t", {
  strictMode: true
}), _UlsIcon);

export { UlsIcon as default };
//# sourceMappingURL=index.js.map
