import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxPopupHeader;
class UlxPopupHeader extends Component {}
_UlxPopupHeader = UlxPopupHeader;
setComponentTemplate(precompileTemplate("\n\t\t{{#if (has-block)}}\n\t\t\t{{yield}}\n\t\t{{else}}\n\t\t\t<h6 class=\"popup-title\" id=\"popup-title\">{{@title}}</h6>\n\t\t{{/if}}\n\t", {
  strictMode: true
}), _UlxPopupHeader);

export { UlxPopupHeader as default };
//# sourceMappingURL=header.js.map
