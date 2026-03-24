import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import UlxButton from '../ulx-button/index.js';
import UlxIcon from '../ulx-icon/index.js';
import UlxProgressSpinner from '../ulx-progressspinner/index.js';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _IconButtonAffixGraphic, _class, _UlxIconButton;
class IconButtonAffixGraphic extends Component {
  get loadingWrapperClass() {
    const {
      side = "left"
    } = this.args;
    return `${getComponentClass("button")}-loading-icon ${side}`;
  }
}
/**
 * Icon button wrapper built on top of UlxButton.
 * Icon/spinner content is passed into UlxButton via its prefix/suffix slots only.
 * Callers use `@iconLeft` or `@iconRight` (icon name) and optional `<:icon>`; prefix/suffix blocks are not supported.
 *
 * @class UlxIconButton
 * @param {string} [label] - Button label text
 * @param {string} [iconLeft] - Icon name; renders in the prefix (left of label)
 * @param {string} [iconRight] - Icon name; renders in the suffix (right of label). If both are set, `iconRight` wins.
 * @param {string} [iconComponentClass] - UlxIcon base class (e.g. "bs-icons1")
 * @param {string} [iconSize] - Icon size class (e.g. s13, s16, s18)
 * @param {boolean} [loading=false] - Shows explicit spinner state
 * @param {string} [size] - Button size class from parent
 * @param {string} [customClass] - Additional CSS classes for root button
 */
_IconButtonAffixGraphic = IconButtonAffixGraphic;
setComponentTemplate(precompileTemplate("\n\t\t{{#if @affix.isLoading}}\n\t\t\t<span class={{this.loadingWrapperClass}} aria-hidden=\"true\">\n\t\t\t\t<UlxProgressSpinner @size={{@affix.buttonSize}} @color=\"white\" aria-hidden=\"true\" />\n\t\t\t</span>\n\t\t{{else if @hasCustomIcon}}\n\t\t\t{{yield}}\n\t\t{{else}}\n\t\t\t<UlxIcon @iconName={{@affix.icon}} @type=\"font\" @componentClass={{@affix.iconComponentClass}} @size={{@affix.iconSize}} @customClass={{@affix.iconClass}} aria-hidden=\"true\" />\n\t\t{{/if}}\n\t", {
  strictMode: true,
  scope: () => ({
    UlxProgressSpinner,
    UlxIcon
  })
}), _IconButtonAffixGraphic);
let UlxIconButton = (_class = (_UlxIconButton = class UlxIconButton extends Component {
  get iconPosition() {
    const {
      iconRight
    } = this.args;
    return iconRight ? "right" : "left";
  }
  get resolvedIconName() {
    const {
      iconLeft,
      iconRight
    } = this.args;
    return iconRight ?? iconLeft;
  }
  get isLoading() {
    return !!this.args.loading;
  }
  get hasIconContent() {
    const {
      iconLeft,
      iconRight
    } = this.args;
    return this.isLoading || !!(iconLeft || iconRight);
  }
  get showIconLeft() {
    return this.hasIconContent && this.iconPosition === "left";
  }
  get showIconRight() {
    return this.hasIconContent && this.iconPosition === "right";
  }
  get buttonSize() {
    return this.args.size || "m-size";
  }
  get isIconOnly() {
    return !this.args.label;
  }
  get iconClass() {
    const parts = ["icon"];
    !this.isIconOnly && parts.push(this.iconPosition);
    return parts.join(" ");
  }
  get buttonCustomClass() {
    const {
      customClass
    } = this.args;
    const parts = [];
    this.isIconOnly && parts.push("icon-only");
    customClass && parts.push(customClass);
    return parts.filter(Boolean).join(" ") || undefined;
  }
  get affixGraphicProps() {
    const {
      iconComponentClass,
      iconSize
    } = this.args;
    return {
      isLoading: this.isLoading,
      buttonSize: this.buttonSize,
      icon: this.resolvedIconName,
      iconComponentClass,
      iconSize,
      iconClass: this.iconClass
    };
  }
  shouldShowPrefixAffix(hasIconBlock) {
    return this.showIconLeft || !!hasIconBlock && this.iconPosition === "left";
  }
  shouldShowSuffixAffix(hasIconBlock) {
    return this.showIconRight || !!hasIconBlock && this.iconPosition === "right";
  }
}, setComponentTemplate(precompileTemplate("\n\t\t{{#let (has-block \"icon\") as |hasIconBlock|}}\n\t\t\t<UlxButton @label={{@label}} @href={{@href}} @variant={{@variant}} @raised={{@raised}} @rounded={{@rounded}} @text={{@text}} @outlined={{@outlined}} @size={{@size}} @fluid={{@fluid}} @disabled={{@disabled}} @dataQa={{@dataQa}} @type={{@type}} @loading={{@loading}} @onClick={{@onClick}} @elementRef={{@elementRef}} @dropdownTargetRef={{@dropdownTargetRef}} @class={{@class}} @customClass={{this.buttonCustomClass}} ...attributes>\n\t\t\t\t<:prefix>\n\t\t\t\t\t{{#if (this.shouldShowPrefixAffix hasIconBlock)}}\n\t\t\t\t\t\t<IconButtonAffixGraphic @affix={{this.affixGraphicProps}} @hasCustomIcon={{hasIconBlock}} @side=\"left\">\n\t\t\t\t\t\t\t{{yield to=\"icon\"}}\n\t\t\t\t\t\t</IconButtonAffixGraphic>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</:prefix>\n\n\t\t\t\t<:suffix>\n\t\t\t\t\t{{#if (this.shouldShowSuffixAffix hasIconBlock)}}\n\t\t\t\t\t\t<IconButtonAffixGraphic @affix={{this.affixGraphicProps}} @hasCustomIcon={{hasIconBlock}} @side=\"right\">\n\t\t\t\t\t\t\t{{yield to=\"icon\"}}\n\t\t\t\t\t\t</IconButtonAffixGraphic>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</:suffix>\n\t\t\t</UlxButton>\n\t\t{{/let}}\n\t", {
  strictMode: true,
  scope: () => ({
    UlxButton,
    IconButtonAffixGraphic
  })
}), _UlxIconButton), _UlxIconButton), _applyDecoratedDescriptor(_class.prototype, "shouldShowPrefixAffix", [action], Object.getOwnPropertyDescriptor(_class.prototype, "shouldShowPrefixAffix"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "shouldShowSuffixAffix", [action], Object.getOwnPropertyDescriptor(_class.prototype, "shouldShowSuffixAffix"), _class.prototype), _class);

export { UlxIconButton as default };
//# sourceMappingURL=index.js.map
