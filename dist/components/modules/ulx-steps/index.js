import { _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { hash, fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { getComponentClass } from '../../../utils/component-config.js';
import UlxIcon from '../../elements/ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _UlxSteps;
let UlxSteps = (_class = (_UlxSteps = class UlxSteps extends Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "listElement", null);
    _defineProperty(this, "setListRef", modifier(element => {
      this.listElement = element;
      return () => {
        this.listElement = null;
      };
    }));
  }
  get baseClass() {
    return getComponentClass("steps");
  }
  get model() {
    return this.args.model ?? [];
  }
  get activeIndex() {
    const raw = this.args.activeIndex ?? 0;
    return Number(raw);
  }
  get readOnly() {
    const {
      readOnly = true
    } = this.args;
    return Boolean(readOnly);
  }
  get ariaLabel() {
    return this.args.ariaLabel;
  }
  get ariaLabelledBy() {
    return this.args.ariaLabelledBy;
  }
  get listTabIndex() {
    return this.readOnly ? undefined : "0";
  }
  get rootClasses() {
    const {
      customClass
    } = this.args;
    const parts = [this.baseClass];
    this.readOnly && parts.push("read-only");
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  getStepId(index) {
    return `ulx-steps-step-${index}`;
  }
  getItemHref(item) {
    return item?.url ?? "#";
  }
  getStepNumber(index) {
    return index + 1;
  }
  isStepDisabled(item, index) {
    const itemDisabled = Boolean(item?.disabled);
    return itemDisabled || this.readOnly && index !== this.activeIndex;
  }
  isStepActive(index) {
    return this.activeIndex === Number(index);
  }
  isStepCompleted(index) {
    return Number(index) < this.activeIndex;
  }
  getStepClasses(item, index) {
    const parts = ["steps-item"];
    this.isStepCompleted(index) && parts.push("completed");
    if (this.isStepActive(index)) {
      parts.push("active");
      parts.push("current-step");
    }
    this.isStepDisabled(item, index) && parts.push("disabled");
    return parts.filter(Boolean).join(" ");
  }
  setFocusToMenuitem(focusableItem) {
    if (!focusableItem) return;
    setTimeout(() => focusableItem.focus({
      preventScroll: true
    }), 0);
  }
  findNextItem(target) {
    const next = target?.parentElement?.nextElementSibling;
    return next ? next.children?.[0] : null;
  }
  findPrevItem(target) {
    const prev = target?.parentElement?.previousElementSibling;
    return prev ? prev.children?.[0] : null;
  }
  findFirstItem() {
    const firstLi = this.listElement?.querySelector?.("li");
    return firstLi ? firstLi.children?.[0] : null;
  }
  findLastItem() {
    const items = this.listElement?.querySelectorAll?.("li");
    const lastLi = items?.length ? items[items.length - 1] : null;
    return lastLi ? lastLi.children?.[0] : null;
  }
  setFocusToFirstItem() {
    const firstItem = this.findFirstItem();
    if (firstItem) {
      firstItem.focus({
        preventScroll: true
      });
    }
  }
  handleListFocus() {
    if (!this.readOnly) {
      this.setFocusToFirstItem();
    }
  }
  itemClick(item, index, originalEvent) {
    if (this.readOnly || item?.disabled) {
      originalEvent?.preventDefault?.();
      return;
    }
    const event = {
      originalEvent,
      index,
      item
    };
    this.args.onSelect?.(event);
    item?.command?.(event);
    if (!item?.url) {
      originalEvent?.preventDefault?.();
      originalEvent?.stopPropagation?.();
    }
  }
  onItemKeyDown(originalEvent, item, index) {
    if (this.readOnly) return;
    switch (originalEvent.code) {
      case "ArrowRight":
        {
          const nextItem = this.findNextItem(originalEvent.target);
          nextItem && this.setFocusToMenuitem(nextItem);
          originalEvent.preventDefault();
          break;
        }
      case "ArrowLeft":
        {
          const prevItem = this.findPrevItem(originalEvent.target);
          prevItem && this.setFocusToMenuitem(prevItem);
          originalEvent.preventDefault();
          break;
        }
      case "Home":
        {
          const firstItem = this.findFirstItem();
          firstItem && this.setFocusToMenuitem(firstItem);
          originalEvent.preventDefault();
          break;
        }
      case "End":
        {
          const lastItem = this.findLastItem();
          lastItem && this.setFocusToMenuitem(lastItem);
          originalEvent.preventDefault();
          break;
        }
      case "Tab":
        break;
      case "Enter":
      case "NumpadEnter":
      case "Space":
        this.itemClick(item, index, originalEvent);
        originalEvent.preventDefault();
        break;
    }
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<nav class={{this.rootClasses}} aria-label={{this.ariaLabel}} aria-labelledby={{this.ariaLabelledBy}} data-active-index={{this.activeIndex}} ...attributes>\n\t\t\t<ol class=\"steps-list\" tabindex={{this.listTabIndex}} {{this.setListRef}} {{on \"focus\" this.handleListFocus}}>\n\t\t\t\t{{#each this.model as |item index|}}\n\t\t\t\t\t<li class={{this.getStepClasses item index}}>\n\t\t\t\t\t\t<a id={{this.getStepId index}} class=\"steps-link\" href={{this.getItemHref item}} target={{item.target}} aria-current={{if (this.isStepActive index) \"step\"}} aria-disabled={{if (this.isStepDisabled item index) \"true\"}} {{on \"keydown\" (fn this.onItemKeyDown item index)}} {{on \"click\" (fn this.itemClick item index)}}>\n\t\t\t\t\t\t\t{{#if (has-block \"item\")}}\n\t\t\t\t\t\t\t\t{{yield item index (hash active=(this.isStepActive index) completed=(this.isStepCompleted index) disabled=(this.isStepDisabled item index) readOnly=this.readOnly) to=\"item\"}}\n\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t<span class=\"steps-number\">{{this.getStepNumber index}}</span>\n\t\t\t\t\t\t\t\t{{#if item.icon}}\n\t\t\t\t\t\t\t\t\t<span class=\"steps-icon\">\n\t\t\t\t\t\t\t\t\t\t<UlxIcon @type=\"font\" @iconName={{item.icon}} />\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{#if item.label}}\n\t\t\t\t\t\t\t\t\t<span class=\"steps-title\">{{item.label}}</span>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t{{/each}}\n\t\t\t</ol>\n\t\t</nav>\n\t", {
  strictMode: true,
  scope: () => ({
    on,
    fn,
    hash,
    UlxIcon
  })
}), _UlxSteps), _UlxSteps), _applyDecoratedDescriptor(_class.prototype, "getStepId", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getStepId"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getItemHref", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getItemHref"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getStepNumber", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getStepNumber"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isStepDisabled", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isStepDisabled"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isStepActive", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isStepActive"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isStepCompleted", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isStepCompleted"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getStepClasses", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getStepClasses"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setFocusToMenuitem", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setFocusToMenuitem"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "findNextItem", [action], Object.getOwnPropertyDescriptor(_class.prototype, "findNextItem"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "findPrevItem", [action], Object.getOwnPropertyDescriptor(_class.prototype, "findPrevItem"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setFocusToFirstItem", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setFocusToFirstItem"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleListFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleListFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "itemClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "itemClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onItemKeyDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onItemKeyDown"), _class.prototype), _class);

export { UlxSteps as default };
//# sourceMappingURL=index.js.map
