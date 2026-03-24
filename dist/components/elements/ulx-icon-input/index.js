import Component from '@glimmer/component';
import { buildIconFieldClass, getInputIconClass } from '../../../utils/input-util.js';
import UlxIcon from '../ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxIconInput;
class UlxIconInput extends Component {
  get iconPosition() {
    const {
      iconLeft,
      iconRight
    } = this.args;
    const rightActive = iconRight === true || typeof iconRight === "string" && iconRight.length > 0;
    const leftActive = iconLeft === true || typeof iconLeft === "string" && iconLeft.length > 0;
    if (rightActive) return "right";
    if (leftActive) return "left";
    return "left";
  }
  get resolvedIconName() {
    const {
      iconLeft,
      iconRight
    } = this.args;
    if (typeof iconRight === "string" && iconRight.length > 0) return iconRight;
    if (typeof iconLeft === "string" && iconLeft.length > 0) return iconLeft;
    return undefined;
  }
  get hasPresetIcon() {
    const n = this.resolvedIconName;
    return typeof n === "string" && n.length > 0;
  }
  get iconInputClass() {
    const {
      size = "m-size",
      disabled,
      iconFieldClass
    } = this.args;
    return buildIconFieldClass({
      iconPosition: this.iconPosition,
      size,
      disabled,
      iconFieldClass
    });
  }
  get inputIconClass() {
    return getInputIconClass();
  }
}
_UlxIconInput = UlxIconInput;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.iconInputClass}}>\n\n\t\t\t{{!-- Icon --}}\n\t\t\t<span class={{this.inputIconClass}} aria-hidden={{if @iconAriaLabel \"false\" \"true\"}}>\n\t\t\t\t{{#if (has-block \"icon\")}}\n\t\t\t\t\t{{yield to=\"icon\"}}\n\n\t\t\t\t{{else if this.hasPresetIcon}}\n\t\t\t\t\t<UlxIcon @iconName={{this.resolvedIconName}} @type={{@iconType}} @ariaLabel={{@iconAriaLabel}} @size={{@iconSize}} @customClass={{@iconClass}} />\n\t\t\t\t{{/if}}\n\t\t\t</span>\n\n\t\t\t{{!-- Control (Input goes here) --}}\n\t\t\t{{#if (has-block \"input\")}}\n\t\t\t\t{{yield to=\"input\"}}\n\t\t\t{{else}}\n\t\t\t\t{{yield}}\n\t\t\t{{/if}}\n\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    UlxIcon
  })
}), _UlxIconInput);

export { UlxIconInput as default };
//# sourceMappingURL=index.js.map
