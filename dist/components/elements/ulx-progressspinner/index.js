import Component from '@glimmer/component';
import { getComponentClass } from '../../../utils/component-config.js';
import { t } from '../../../utils/i18n.js';
import UlxIcon from '../ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxProgressSpinner;
class UlxProgressSpinner extends Component {
  get baseClass() {
    return this.args.componentClass ?? getComponentClass("progressspinner");
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-progressspinner";
  }
  get ariaLabelText() {
    return this.args.ariaLabel ?? t("lbl.loading");
  }
  get sizeClass() {
    return this.args.size ?? "s-size";
  }
  get iconSize() {
    return this.args.iconSize ?? this.sizeClass;
  }
  get spinnerClasses() {
    const {
      customClass
    } = this.args;
    const parts = [this.baseClass];
    parts.push(this.sizeClass);
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get spinnerStyle() {
    const color = this.args.color;
    if (!color) return undefined;
    const v = this.baseClass;
    return `--${v}-color: ${color}; --${v}-color1: ${color}; --${v}-color2: ${color}; --${v}-color3: ${color}; --${v}-color4: ${color}`;
  }
}
_UlxProgressSpinner = UlxProgressSpinner;
setComponentTemplate(precompileTemplate("\n\t\t<span class={{this.spinnerClasses}} role=\"progressbar\" aria-label={{this.ariaLabelText}} style={{this.spinnerStyle}} data-qa={{this.rootDataQa}} ...attributes>\n\t\t\t{{#if (has-block \"icon\")}}\n\t\t\t\t<UlxIcon @componentClass=\"bs-icons1\" @size={{this.iconSize}} aria-hidden=\"true\">\n\t\t\t\t\t{{yield to=\"icon\"}}\n\t\t\t\t</UlxIcon>\n\t\t\t{{else if @iconName}}\n\t\t\t\t<UlxIcon @componentClass=\"bs-icons1\" @iconName={{@iconName}} @type={{@iconType}} @size={{this.iconSize}} aria-hidden=\"true\" />\n\t\t\t{{else}}\n\t\t\t\t<UlxIcon @componentClass=\"bs-icons1\" @size={{this.iconSize}} aria-hidden=\"true\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" class=\"progressspinner-svg\" focusable=\"false\">\n\t\t\t\t\t\t<circle cx=\"12\" cy=\"12\" r=\"10\" opacity=\"0.25\" />\n\t\t\t\t\t\t<circle cx=\"12\" cy=\"12\" r=\"10\" stroke-dasharray=\"38 25\">\n\t\t\t\t\t\t\t<animateTransform attributeName=\"transform\" type=\"rotate\" dur=\"1s\" repeatCount=\"indefinite\" from=\"0 12 12\" to=\"360 12 12\" />\n\t\t\t\t\t\t</circle>\n\t\t\t\t\t</svg>\n\t\t\t\t</UlxIcon>\n\t\t\t{{/if}}\n\t\t</span>\n\t", {
  strictMode: true,
  scope: () => ({
    UlxIcon
  })
}), _UlxProgressSpinner);

export { UlxProgressSpinner as default };
//# sourceMappingURL=index.js.map
