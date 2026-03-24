import Component from '@glimmer/component';
import UlxButton from '../ulx-button/index.js';
import UlxBadge from '../ulx-badge/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxBadgeButton;
class UlxBadgeButton extends Component {
  get showBadge() {
    return this.args.badge !== undefined && this.args.badge !== null;
  }
  get badgeType() {
    return this.args.badgeType ?? "circle";
  }
}
_UlxBadgeButton = UlxBadgeButton;
setComponentTemplate(precompileTemplate("\n\t\t<UlxButton @label={{@label}} @href={{@href}} @variant={{@variant}} @raised={{@raised}} @rounded={{@rounded}} @text={{@text}} @outlined={{@outlined}} @size={{@size}} @fluid={{@fluid}} @disabled={{@disabled}} @dataQa={{@dataQa}} @type={{@type}} @loading={{@loading}} @onClick={{@onClick}} @elementRef={{@elementRef}} @dropdownTargetRef={{@dropdownTargetRef}} @class={{@class}} @customClass={{@customClass}} ...attributes>\n\n\t\t\t<:suffix>\n\t\t\t\t{{#if this.showBadge}}\n\t\t\t\t\t<UlxBadge @value={{@badge}} @variant={{@badgeVariant}} @size={{@badgeSize}} @type={{this.badgeType}} @customClass={{@badgeCustomClass}} />\n\t\t\t\t{{/if}}\n\t\t\t</:suffix>\n\t\t</UlxButton>\n\t", {
  strictMode: true,
  scope: () => ({
    UlxButton,
    UlxBadge
  })
}), _UlxBadgeButton);

export { UlxBadgeButton as default };
//# sourceMappingURL=index.js.map
