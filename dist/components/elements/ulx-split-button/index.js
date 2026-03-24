import { b as _initializerDefineProperty, _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { getComponentClass } from '../../../utils/component-config.js';
import overlayDismiss from '../../../modifiers/overlay-dismiss.js';
import { t } from '../../../utils/i18n.js';
import UlxIconButton from '../ulx-icon-button/index.js';
import UlxTieredmenu from '../../modules/ulx-tieredmenu/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _UlxSplitButton;
let UlxSplitButton = (_class = (_UlxSplitButton = class UlxSplitButton extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "menuVisible", _descriptor, this);
    _initializerDefineProperty(this, "dropdownTarget", _descriptor2, this);
    _defineProperty(this, "dropdownTargetRef", modifier(element => {
      this.dropdownTarget = element;
      return () => {
        if (this.dropdownTarget === element) {
          this.dropdownTarget = null;
        }
      };
    }));
  }
  get splitButtonRootClass() {
    return getComponentClass("splitbutton");
  }
  get buttonSize() {
    return this.args.size || "m-size";
  }
  get variantValue() {
    return this.args.variant || this.args.severity || "primary";
  }
  get menuId() {
    return this.args.id ? `${this.args.id}_overlay` : undefined;
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-splitbutton";
  }
  get defaultButtonDataQa() {
    return `${this.rootDataQa}-default`;
  }
  get dividerDataQa() {
    return `${this.rootDataQa}-divider`;
  }
  get dropdownButtonDataQa() {
    return `${this.rootDataQa}-dropdown`;
  }
  get menuDataQa() {
    return `${this.rootDataQa}-menu`;
  }
  get isDisabled() {
    return this.args.disabled;
  }
  get menuItems() {
    return this.args.model ?? [];
  }
  get dropdownIconName() {
    return this.args.dropdownIcon ?? "down-arrow-icon";
  }
  get dropdownIconComponentClass() {
    return this.args.iconComponentClass ?? "bs-icons1";
  }
  get dropdownIconSize() {
    return this.args.dropdownIconSize ?? "s18";
  }
  get menuCustomClassName() {
    return this.args.menuCustomClass;
  }
  get rootClasses() {
    const {
      raised = false,
      rounded = false,
      text = false,
      outlined = false,
      loading = false,
      disabled = false
    } = this.args;
    const parts = [this.splitButtonRootClass];
    parts.push(this.variantValue);
    parts.push(this.buttonSize);
    raised && parts.push("raised");
    rounded && parts.push("rounded");
    text && parts.push("text-button");
    outlined && parts.push("outlined");
    disabled && parts.push("disabled");
    loading && parts.push("loading");
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  handleDefaultClick(event) {
    if (this.isDisabled) {
      event.preventDefault();
      return;
    }
    const {
      onClick
    } = this.args;
    if (typeof onClick === "function") return onClick(event);
  }
  handleDropdownClick(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.isDisabled) return;
    this.menuVisible = !this.menuVisible;
    if (this.menuVisible && typeof this.args.onShow === "function") this.args.onShow();
    if (!this.menuVisible && typeof this.args.onHide === "function") this.args.onHide();
  }
  handleMenuKeydown(event) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      this.menuVisible ? this.hideMenu() : this.showMenu(event);
    }
  }
  showMenu(event) {
    this.menuVisible = true;
    if (typeof this.args.onShow === "function") this.args.onShow();
  }
  hideMenu() {
    this.menuVisible = false;
    if (typeof this.args.onHide === "function") this.args.onHide();
    this.dropdownTarget?.focus({
      preventScroll: true
    });
  }
  handleItemSelect() {
    this.hideMenu();
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} data-qa={{this.rootDataQa}} {{overlayDismiss this.menuVisible onClose=this.hideMenu dismissVariant=\"rootOnly\" deferClick=true deferEscape=false escapeEventMode=\"minimal\" escapeUseCapture=false strictEscapeKey=true}} ...attributes>\n\t\t\t{{#if (has-block \"icon\")}}\n\t\t\t\t{{#if (has-block \"default\")}}\n\t\t\t\t\t<UlxIconButton @dataQa={{this.defaultButtonDataQa}} @iconComponentClass={{@iconComponentClass}} @iconSize={{@iconSize}} @disabled={{this.isDisabled}} @variant={{this.variantValue}} @raised={{@raised}} @rounded={{@rounded}} @text={{@text}} @outlined={{@outlined}} @size={{this.buttonSize}} @customClass=\"split-button\" @onClick={{this.handleDefaultClick}}>\n\t\t\t\t\t\t<:icon>{{yield to=\"icon\"}}</:icon>\n\t\t\t\t\t\t<:default>{{yield}}</:default>\n\t\t\t\t\t</UlxIconButton>\n\t\t\t\t{{else}}\n\t\t\t\t\t<UlxIconButton @dataQa={{this.defaultButtonDataQa}} @label={{@label}} @iconComponentClass={{@iconComponentClass}} @iconSize={{@iconSize}} @disabled={{this.isDisabled}} @variant={{this.variantValue}} @raised={{@raised}} @rounded={{@rounded}} @text={{@text}} @outlined={{@outlined}} @size={{this.buttonSize}} @customClass=\"split-button\" @onClick={{this.handleDefaultClick}}>\n\t\t\t\t\t\t<:icon>{{yield to=\"icon\"}}</:icon>\n\t\t\t\t\t</UlxIconButton>\n\t\t\t\t{{/if}}\n\t\t\t{{else}}\n\t\t\t\t{{#if (has-block \"default\")}}\n\t\t\t\t\t<UlxIconButton @dataQa={{this.defaultButtonDataQa}} @iconLeft={{@icon}} @iconComponentClass={{@iconComponentClass}} @iconSize={{@iconSize}} @disabled={{this.isDisabled}} @variant={{this.variantValue}} @raised={{@raised}} @rounded={{@rounded}} @text={{@text}} @outlined={{@outlined}} @size={{this.buttonSize}} @customClass=\"split-button\" @onClick={{this.handleDefaultClick}}>\n\t\t\t\t\t\t{{yield}}\n\t\t\t\t\t</UlxIconButton>\n\t\t\t\t{{else}}\n\t\t\t\t\t<UlxIconButton @dataQa={{this.defaultButtonDataQa}} @label={{@label}} @iconLeft={{@icon}} @iconComponentClass={{@iconComponentClass}} @iconSize={{@iconSize}} @disabled={{this.isDisabled}} @variant={{this.variantValue}} @raised={{@raised}} @rounded={{@rounded}} @text={{@text}} @outlined={{@outlined}} @size={{this.buttonSize}} @customClass=\"split-button\" @onClick={{this.handleDefaultClick}} />\n\t\t\t\t{{/if}}\n\t\t\t{{/if}}\n\n\t\t\t<span class=\"splitbutton-divider\" aria-hidden=\"true\" data-qa={{this.dividerDataQa}}></span>\n\n\t\t\t<UlxIconButton @dataQa={{this.dropdownButtonDataQa}} @iconLeft={{this.dropdownIconName}} @iconComponentClass={{this.dropdownIconComponentClass}} @iconSize={{this.dropdownIconSize}} @disabled={{this.isDisabled}} @variant={{this.variantValue}} @raised={{@raised}} @rounded={{@rounded}} @text={{@text}} @outlined={{@outlined}} @size={{this.buttonSize}} @dropdownTargetRef={{this.dropdownTargetRef}} @onClick={{this.handleDropdownClick}} aria-label={{t \"lbl.more.options\"}} aria-haspopup=\"menu\" aria-expanded={{this.menuVisible}} aria-controls={{this.menuId}} {{on \"keydown\" this.handleMenuKeydown}} />\n\n\t\t\t<div class=\"absolute tpfull lt0 z-1000 mt-2\n\t\t\t\t\t{{if this.menuVisible \"visible transition fade in\" \"hidden\"}}\" data-qa={{this.menuDataQa}}>\n\t\t\t\t<UlxTieredmenu id={{this.menuId}} @model={{this.menuItems}} @popup={{true}} @visible={{this.menuVisible}} @target={{this.dropdownTarget}} @customClass={{this.menuCustomClassName}} @onHide={{this.hideMenu}} @onItemSelect={{this.handleItemSelect}} />\n\t\t\t</div>\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    overlayDismiss,
    UlxIconButton,
    t,
    on,
    UlxTieredmenu
  })
}), _UlxSplitButton), _UlxSplitButton), _descriptor = _applyDecoratedDescriptor(_class.prototype, "menuVisible", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "dropdownTarget", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, "handleDefaultClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleDefaultClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleDropdownClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleDropdownClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMenuKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleMenuKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showMenu", [action], Object.getOwnPropertyDescriptor(_class.prototype, "showMenu"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hideMenu", [action], Object.getOwnPropertyDescriptor(_class.prototype, "hideMenu"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleItemSelect", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemSelect"), _class.prototype), _class);

export { UlxSplitButton as default };
//# sourceMappingURL=index.js.map
