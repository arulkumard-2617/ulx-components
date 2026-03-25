import { b as _initializerDefineProperty, _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { modifier } from 'ember-modifier';
import { LinkTo } from '@ember/routing';
import { getComponentClass } from '../../../utils/component-config.js';
import { resolveRootDataQa, buildDataQa } from '../../../utils/data-qa.js';
import UlxIcon from '../../elements/ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _descriptor3, _UlxTabmenu;
let UlxTabmenu = (_class = (_UlxTabmenu = class UlxTabmenu extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "_internalActiveIndex", _descriptor, this);
    _initializerDefineProperty(this, "inkbarElement", _descriptor2, this);
    _initializerDefineProperty(this, "inkbarStyle", _descriptor3, this);
    _defineProperty(this, "inkbarModifier", modifier(function (element) {
      this.inkbarElement = element;
      // Update immediately
      this.updateInkbarPosition();
      // Update on next frame to ensure DOM is ready
      const self = this;
      requestAnimationFrame(function () {
        self.updateInkbarPosition();
      });
      // Update on resize
      const resizeObserver = new ResizeObserver(function () {
        self.updateInkbarPosition();
      });
      const navElement = element.closest(".tabmenu-nav");
      if (navElement) {
        resizeObserver.observe(navElement);
      }
      return function () {
        resizeObserver.disconnect();
        self.inkbarElement = null;
      };
    }.bind(this)));
  }
  get baseClass() {
    return getComponentClass("tabmenu");
  }
  get rootClasses() {
    const {
      variant,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    variant && parts.push(variant);
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get model() {
    return this.args.model ?? [];
  }
  get activeIndex() {
    return this.args.activeIndex ?? this._internalActiveIndex ?? 0;
  }
  get isControlled() {
    return this.args.activeIndex != null;
  }
  get ariaLabel() {
    return this.args.ariaLabel;
  }
  get ariaLabelledBy() {
    return this.args.ariaLabelledBy;
  }
  get role() {
    return "menubar";
  }
  get baseId() {
    return this.args.tabId ?? "ulx-tabmenu";
  }
  get rootDataQa() {
    return resolveRootDataQa(this.args.dataQa, "tabmenu");
  }
  getDataQa(part) {
    return buildDataQa(this.rootDataQa, part);
  }
  get inkbarStyleString() {
    return `left: ${this.inkbarStyle.left}; width: ${this.inkbarStyle.width};`;
  }
  getItemId(index) {
    return `${this.baseId}-item-${index}`;
  }
  getItemClasses(index) {
    const model = this.args.model ?? [];
    if (!Array.isArray(model)) return "";
    const item = model[index];
    if (!item) return "";
    const parts = ["tabmenu-item"];
    this.activeIndex === index && parts.push("active");
    item.disabled && parts.push("disabled");
    return parts.join(" ");
  }
  getTabIndex(index) {
    const model = this.args.model ?? [];
    if (!Array.isArray(model)) return "0";
    const item = model[index];
    if (item?.disabled) {
      return "-1";
    }
    return "0";
  }
  getLinkClasses(index) {
    const model = this.args.model ?? [];
    if (!Array.isArray(model)) return "";
    const item = model[index];
    if (!item) return "";
    const parts = ["tabmenu-link"];
    item.disabled && parts.push("disabled");
    return parts.join(" ");
  }
  getLinkToModels(item) {
    // Return models only if it's a valid array, otherwise return undefined
    // LinkTo will ignore undefined arguments
    if (item?.models && Array.isArray(item.models)) {
      return item.models;
    }
    return undefined;
  }
  getLinkToQuery(item) {
    // Return query only if it's a valid object, otherwise return undefined
    // LinkTo will ignore undefined arguments
    if (item?.query && typeof item.query === "object" && !Array.isArray(item.query)) {
      return item.query;
    }
    return undefined;
  }
  handleItemClick(item, index, event) {
    if (item.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (!this.isControlled) {
      this._internalActiveIndex = index;
    }
    if (item.command) {
      item.command(event, item);
    }
    if (this.args.onTabChange) {
      this.args.onTabChange({
        index,
        originalEvent: event
      });
    }
    // Update inkbar position after tab change
    requestAnimationFrame(function () {
      this.updateInkbarPosition();
    }.bind(this));
  }
  handleKeydown(item, index, event) {
    if (item.disabled) {
      return;
    }
    let newIndex = index;
    switch (event.key) {
      case "Enter":
      case " ":
        {
          event.preventDefault();
          this.handleItemClick(item, index, event);
          break;
        }
      case "ArrowRight":
        {
          event.preventDefault();
          newIndex = this.getNextEnabledIndex(index);
          if (newIndex !== index) {
            this.focusTab(newIndex, event);
          }
          break;
        }
      case "ArrowLeft":
        {
          event.preventDefault();
          newIndex = this.getPreviousEnabledIndex(index);
          if (newIndex !== index) {
            this.focusTab(newIndex, event);
          }
          break;
        }
      case "Home":
        {
          event.preventDefault();
          newIndex = this.getFirstEnabledIndex();
          if (newIndex !== -1) {
            this.focusTab(newIndex, event);
          }
          break;
        }
      case "End":
        {
          event.preventDefault();
          newIndex = this.getLastEnabledIndex();
          if (newIndex !== -1) {
            this.focusTab(newIndex, event);
          }
          break;
        }
    }
  }
  getNextEnabledIndex(currentIndex) {
    for (let i = currentIndex + 1; i < this.model.length; i++) {
      if (!this.model[i]?.disabled) {
        return i;
      }
    }
    return currentIndex;
  }
  getPreviousEnabledIndex(currentIndex) {
    for (let i = currentIndex - 1; i >= 0; i--) {
      if (!this.model[i]?.disabled) {
        return i;
      }
    }
    return currentIndex;
  }
  getFirstEnabledIndex() {
    for (let i = 0; i < this.model.length; i++) {
      if (!this.model[i]?.disabled) {
        return i;
      }
    }
    return -1;
  }
  getLastEnabledIndex() {
    for (let i = this.model.length - 1; i >= 0; i--) {
      if (!this.model[i]?.disabled) {
        return i;
      }
    }
    return -1;
  }
  focusTab(index, event) {
    const currentElement = event?.currentTarget;
    if (!currentElement) {
      return;
    }
    const navElement = currentElement.closest(".tabmenu-nav");
    if (!navElement) {
      return;
    }
    const target = navElement.querySelector(`#${this.getItemId(index)}`);
    if (target) {
      target.focus();
    }
  }
  handleFocus() {
    requestAnimationFrame(() => this.updateInkbarPosition());
  }
  handleBlur() {
    requestAnimationFrame(() => this.updateInkbarPosition());
  }
  updateInkbarPosition() {
    if (!this.inkbarElement) return;
    const navElement = this.inkbarElement.closest(".tabmenu-nav");
    if (!navElement) return;
    // Find the active, enabled tab item similar to PrimeReact:
    // prefer `.tabmenu-item.active` and fall back to the first non-disabled item.
    const items = Array.from(navElement.children).filter(function (el) {
      return el.classList?.contains("tabmenu-item");
    });
    let activeItemElement = items.find(function (el) {
      return el.classList.contains("active") && !el.classList.contains("disabled");
    }) ?? items.find(function (el) {
      return !el.classList.contains("disabled");
    });
    if (!activeItemElement) {
      this.inkbarStyle = {
        left: "0px",
        width: "0px"
      };
      return;
    }
    const navRect = navElement.getBoundingClientRect();
    const itemRect = activeItemElement.getBoundingClientRect();
    const left = itemRect.left - navRect.left;
    const width = itemRect.width;
    this.inkbarStyle = {
      left: `${left}px`,
      width: `${width}px`
    };
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} data-qa={{this.rootDataQa}}>\n\t\t\t<ul class=\"tabmenu-nav\" data-qa={{this.getDataQa \"nav\"}} role={{this.role}} aria-label={{this.ariaLabel}} aria-labelledby={{this.ariaLabelledBy}} ...attributes>\n\t\t\t\t{{#each this.model as |item index|}}\n\t\t\t\t\t<li class={{this.getItemClasses index}} data-qa={{this.getDataQa \"item\"}} role=\"presentation\">\n\t\t\t\t\t\t{{#if item.route}}\n\t\t\t\t\t\t\t{{#if item.disabled}}\n\t\t\t\t\t\t\t\t{{!-- Disabled LinkTo - render as span --}}\n\t\t\t\t\t\t\t\t<span id={{this.getItemId index}} class={{this.getLinkClasses index}} role=\"menuitem\" aria-label={{item.label}} aria-disabled=\"true\" tabindex=\"-1\">\n\t\t\t\t\t\t\t\t\t{{#if (has-block \"item\")}}\n\t\t\t\t\t\t\t\t\t\t{{yield item to=\"item\"}}\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t{{#if item.icon}}\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabmenu-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @iconName={{item.icon}} @type={{item.iconType}} @componentClass={{item.iconComponentClass}} @size={{item.iconSize}} />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t{{#if item.label}}\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabmenu-label\">{{item.label}}</span>\n\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t{{!-- LinkTo with Ember route - use single LinkTo with conditional arguments --}}\n\t\t\t\t\t\t\t\t{{#let (this.getLinkToModels item) (this.getLinkToQuery item) as |models query|}}\n\t\t\t\t\t\t\t\t\t{{#if models}}\n\t\t\t\t\t\t\t\t\t\t{{#if query}}\n\t\t\t\t\t\t\t\t\t\t\t{{!-- Both models and query --}}\n\t\t\t\t\t\t\t\t\t\t\t<LinkTo @route={{item.route}} @models={{models}} @query={{query}} id={{this.getItemId index}} class={{this.getLinkClasses index}} role=\"menuitem\" aria-label={{item.label}} tabindex={{this.getTabIndex index}} {{on \"click\" (fn this.handleItemClick item index)}} {{on \"keydown\" (fn this.handleKeydown item index)}}>\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if (has-block \"item\")}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{yield item to=\"item\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{#if item.icon}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabmenu-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @iconName={{item.icon}} @type={{item.iconType}} @componentClass={{item.iconComponentClass}} @size={{item.iconSize}} />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{#if item.label}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabmenu-label\">{{item.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t</LinkTo>\n\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t{{!-- Models only --}}\n\t\t\t\t\t\t\t\t\t\t\t<LinkTo @route={{item.route}} @models={{models}} id={{this.getItemId index}} class={{this.getLinkClasses index}} role=\"menuitem\" aria-label={{item.label}} tabindex={{this.getTabIndex index}} {{on \"click\" (fn this.handleItemClick item index)}} {{on \"keydown\" (fn this.handleKeydown item index)}}>\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if (has-block \"item\")}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{yield item to=\"item\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{#if item.icon}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabmenu-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @iconName={{item.icon}} @type={{item.iconType}} @componentClass={{item.iconComponentClass}} @size={{item.iconSize}} />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{#if item.label}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabmenu-label\">{{item.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t</LinkTo>\n\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t{{else if query}}\n\t\t\t\t\t\t\t\t\t\t{{!-- Query only --}}\n\t\t\t\t\t\t\t\t\t\t<LinkTo @route={{item.route}} @query={{query}} id={{this.getItemId index}} class={{this.getLinkClasses index}} role=\"menuitem\" aria-label={{item.label}} tabindex={{this.getTabIndex index}} {{on \"click\" (fn this.handleItemClick item index)}} {{on \"keydown\" (fn this.handleKeydown item index)}} {{on \"focus\" (fn this.handleFocus index)}} {{on \"blur\" this.handleBlur}}>\n\t\t\t\t\t\t\t\t\t\t\t{{#if (has-block \"item\")}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{yield item to=\"item\"}}\n\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if item.icon}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabmenu-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @iconName={{item.icon}} @type={{item.iconType}} @componentClass={{item.iconComponentClass}} @size={{item.iconSize}} />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if item.label}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabmenu-label\">{{item.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t</LinkTo>\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t{{!-- Route only --}}\n\t\t\t\t\t\t\t\t\t\t<LinkTo @route={{item.route}} id={{this.getItemId index}} class={{this.getLinkClasses index}} role=\"menuitem\" aria-label={{item.label}} tabindex={{this.getTabIndex index}} {{on \"click\" (fn this.handleItemClick item index)}} {{on \"keydown\" (fn this.handleKeydown item index)}} {{on \"focus\" (fn this.handleFocus index)}} {{on \"blur\" this.handleBlur}}>\n\t\t\t\t\t\t\t\t\t\t\t{{#if (has-block \"item\")}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{yield item to=\"item\"}}\n\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if item.icon}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabmenu-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @iconName={{item.icon}} @type={{item.iconType}} @componentClass={{item.iconComponentClass}} @size={{item.iconSize}} />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if item.label}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabmenu-label\">{{item.label}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t</LinkTo>\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{/let}}\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t{{else if item.url}}\n\t\t\t\t\t\t\t{{!-- Link with URL --}}\n\t\t\t\t\t\t\t<a id={{this.getItemId index}} class={{this.getLinkClasses index}} href={{item.url}} target={{item.target}} role=\"menuitem\" aria-label={{item.label}} aria-disabled={{if item.disabled \"true\"}} tabindex={{this.getTabIndex index}} {{on \"click\" (fn this.handleItemClick item index)}} {{on \"keydown\" (fn this.handleKeydown item index)}} {{on \"focus\" (fn this.handleFocus index)}} {{on \"blur\" this.handleBlur}}>\n\t\t\t\t\t\t\t\t{{#if (has-block \"item\")}}\n\t\t\t\t\t\t\t\t\t{{yield item to=\"item\"}}\n\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t{{#if item.icon}}\n\t\t\t\t\t\t\t\t\t\t<span class=\"tabmenu-icon\">\n\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @iconName={{item.icon}} @type={{item.iconType}} @componentClass={{item.iconComponentClass}} @size={{item.iconSize}} />\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t{{#if item.label}}\n\t\t\t\t\t\t\t\t\t\t<span class=\"tabmenu-label\">{{item.label}}</span>\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t{{!-- Button without URL or route --}}\n\t\t\t\t\t\t\t<button type=\"button\" id={{this.getItemId index}} class={{this.getLinkClasses index}} role=\"menuitem\" aria-label={{item.label}} aria-disabled={{if item.disabled \"true\"}} disabled={{item.disabled}} tabindex={{this.getTabIndex index}} {{on \"click\" (fn this.handleItemClick item index)}} {{on \"keydown\" (fn this.handleKeydown item index)}} {{on \"focus\" (fn this.handleFocus index)}} {{on \"blur\" this.handleBlur}}>\n\t\t\t\t\t\t\t\t{{#if (has-block \"item\")}}\n\t\t\t\t\t\t\t\t\t{{yield item to=\"item\"}}\n\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t{{#if item.icon}}\n\t\t\t\t\t\t\t\t\t\t<span class=\"tabmenu-icon\">\n\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @iconName={{item.icon}} @type={{item.iconType}} @componentClass={{item.iconComponentClass}} @size={{item.iconSize}} />\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t{{#if item.label}}\n\t\t\t\t\t\t\t\t\t\t<span class=\"tabmenu-label\">{{item.label}}</span>\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</li>\n\t\t\t\t{{/each}}\n\t\t\t\t<span class=\"tabmenu-inkbar\" data-qa={{this.getDataQa \"inkbar\"}} role=\"presentation\" aria-hidden=\"true\" style={{this.inkbarStyleString}} {{this.inkbarModifier}}></span>\n\t\t\t</ul>\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    UlxIcon,
    LinkTo,
    on,
    fn
  })
}), _UlxTabmenu), _UlxTabmenu), _applyDecoratedDescriptor(_class.prototype, "getDataQa", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getDataQa"), _class.prototype), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_internalActiveIndex", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "inkbarElement", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "inkbarStyle", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {
      left: "0px",
      width: "0px"
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, "getItemId", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getItemId"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getItemClasses", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getItemClasses"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getTabIndex", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getTabIndex"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getLinkClasses", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getLinkClasses"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getLinkToModels", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getLinkToModels"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getLinkToQuery", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getLinkToQuery"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleItemClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "focusTab", [action], Object.getOwnPropertyDescriptor(_class.prototype, "focusTab"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleBlur", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleBlur"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateInkbarPosition", [action], Object.getOwnPropertyDescriptor(_class.prototype, "updateInkbarPosition"), _class.prototype), _class);

export { UlxTabmenu as default };
//# sourceMappingURL=index.js.map
