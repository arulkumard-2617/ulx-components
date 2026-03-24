import { b as _initializerDefineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { getComponentClass } from '../../../utils/component-config.js';
import { t } from '../../../utils/i18n.js';
import UlxAvatar from '../ulx-avatar/index.js';
import UlxPopup from '../../modules/ulx-popup/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _UlxAvatarGroup;
let UlxAvatarGroup = (_class = (_UlxAvatarGroup = class UlxAvatarGroup extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "isOverflowPopupVisible", _descriptor, this);
    _initializerDefineProperty(this, "overflowTarget", _descriptor2, this);
  }
  get baseClass() {
    const {
      componentClass
    } = this.args;
    return componentClass ?? getComponentClass("avatar-group");
  }
  get rootDataQa() {
    const {
      dataQa
    } = this.args;
    return dataQa ?? "ulx-avatar-group";
  }
  get groupRole() {
    const {
      groupAriaLabel
    } = this.args;
    return typeof groupAriaLabel === "string" && groupAriaLabel.length > 0 ? "group" : undefined;
  }
  get groupAriaLabelResolved() {
    const {
      groupAriaLabel
    } = this.args;
    return typeof groupAriaLabel === "string" && groupAriaLabel.length > 0 ? groupAriaLabel : undefined;
  }
  get rootClasses() {
    const {
      stacked = false,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    // Stacked layout
    stacked && parts.push("stacked");
    // Custom classes
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get items() {
    return Array.isArray(this.args.items) ? this.args.items : [];
  }
  get visibleItems() {
    const {
      maxVisible,
      size,
      shape
    } = this.args;
    let items = this.items;
    if (maxVisible && items.length > maxVisible) {
      items = items.slice(0, maxVisible);
    }
    return items.map((item, index) => ({
      ...item,
      size: item.size ?? size,
      shape: item.shape ?? shape,
      _ulxRowKey: item.id ?? item.key ?? `ulx-avatar-group-${index}`
    }));
  }
  get overflowItems() {
    const {
      maxVisible,
      size,
      shape
    } = this.args;
    const items = this.items;
    if (!maxVisible || items.length <= maxVisible) {
      return [];
    }
    const overflowSlice = items.slice(maxVisible);
    return overflowSlice.map((item, index) => ({
      ...item,
      size: item.size ?? size,
      shape: item.shape ?? shape,
      _ulxRowKey: item.id ?? item.key ?? `ulx-avatar-group-overflow-${maxVisible + index}`
    }));
  }
  get overflowCount() {
    const {
      maxVisible
    } = this.args;
    if (maxVisible && this.items.length > maxVisible) {
      return this.items.length - maxVisible;
    }
    return 0;
  }
  get hasOverflow() {
    return this.overflowCount > 0;
  }
  get overflowLabel() {
    return `+${this.overflowCount}`;
  }
  handleOverflowClick(event) {
    this.overflowTarget = event?.currentTarget ?? null;
    this.isOverflowPopupVisible = true;
  }
  handleOverflowPopupHide() {
    this.isOverflowPopupVisible = false;
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} role={{this.groupRole}} aria-label={{this.groupAriaLabelResolved}} data-qa={{this.rootDataQa}} ...attributes>\n\t\t\t{{#if (has-block)}}\n\t\t\t\t{{yield}}\n\t\t\t{{else}}\n\t\t\t\t{{#each this.visibleItems key=\"_ulxRowKey\" as |item|}}\n\t\t\t\t\t<UlxAvatar @type={{item.type}} @label={{item.label}} @image={{item.image}} @imageAlt={{item.imageAlt}} @iconName={{item.iconName}} @iconType={{item.iconType}} @iconComponentClass={{item.iconComponentClass}} @iconAriaLabel={{item.iconAriaLabel}} @variant={{item.variant}} @size={{item.size}} @shape={{item.shape}} @ariaLabel={{item.ariaLabel}} @disabled={{item.disabled}} @clickable={{item.clickable}} @customClass={{item.customClass}} />\n\t\t\t\t{{/each}}\n\n\t\t\t\t{{#if this.hasOverflow}}\n\t\t\t\t\t<button type=\"button\" data-qa=\"ulx-avatar-group-overflow\" aria-label={{t \"msg.more.members\" count=this.overflowCount}} {{on \"click\" this.handleOverflowClick}}>\n\t\t\t\t\t\t<UlxAvatar @type=\"text\" @label={{this.overflowLabel}} @size={{@size}} @shape={{@shape}} @variant=\"grey\" />\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<UlxPopup @visible={{this.isOverflowPopupVisible}} @target={{this.overflowTarget}} @size={{@popupSize}} @position=\"position-bottom-right\" @ariaLabel={{t \"msg.more.members\" count=this.overflowCount}} @dismissable={{true}} @closable={{true}} @onHide={{this.handleOverflowPopupHide}}>\n\t\t\t\t\t\t{{#each this.overflowItems key=\"_ulxRowKey\" as |item|}}\n\t\t\t\t\t\t\t<UlxAvatar @type={{item.type}} @label={{item.label}} @image={{item.image}} @imageAlt={{item.imageAlt}} @iconName={{item.iconName}} @iconType={{item.iconType}} @iconComponentClass={{item.iconComponentClass}} @iconAriaLabel={{item.iconAriaLabel}} @variant={{item.variant}} @size={{item.size}} @shape={{item.shape}} @ariaLabel={{item.ariaLabel}} @disabled={{item.disabled}} @clickable={{item.clickable}} @customClass={{item.customClass}} />\n\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t</UlxPopup>\n\t\t\t\t{{/if}}\n\t\t\t{{/if}}\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    UlxAvatar,
    t,
    on,
    UlxPopup
  })
}), _UlxAvatarGroup), _UlxAvatarGroup), _descriptor = _applyDecoratedDescriptor(_class.prototype, "isOverflowPopupVisible", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "overflowTarget", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, "handleOverflowClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleOverflowClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleOverflowPopupHide", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleOverflowPopupHide"), _class.prototype), _class);

export { UlxAvatarGroup as default };
//# sourceMappingURL=index.js.map
