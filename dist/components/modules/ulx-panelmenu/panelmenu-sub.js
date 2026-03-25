import { b as _initializerDefineProperty, _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { fn } from '@ember/helper';
import { joinClassNames } from '../../../utils/class-names.js';
import { iconParts } from '../../../utils/panelmenu-icon.js';
import { appendTransitionPhaseClasses } from '../../../utils/panelmenu-transition.js';
import UlxIcon from '../../elements/ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _UlxPanelmenuSub;
const ENTER_TIMEOUT_MS = 200;
const EXIT_TIMEOUT_MS = 200;
function itemKey(item, fallbackKey) {
  return item?.key ?? fallbackKey;
}
/**
 * Internal recursive sub-menu renderer for `UlxPanelmenu`.
 *
 * @private
 */
let UlxPanelmenuSub = (_class = (_UlxPanelmenuSub = class UlxPanelmenuSub extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "_transitionByKey", _descriptor, this);
    _initializerDefineProperty(this, "focusedKey", _descriptor2, this);
    _defineProperty(this, "_prevExpandedMap", null);
    _defineProperty(this, "toggleableContentTransition", modifier((element, [key, expanded]) => {
      const map = this._prevExpandedMap ?? (this._prevExpandedMap = new Map());
      const prev = map.get(key);
      let rafId = null;
      let activeTimer = null;
      let doneTimer = null;
      const clearInlineCollapseStyles = () => {
        element.style.height = "";
        element.style.transition = "";
      };
      // No "appear" animation on first render.
      if (prev === undefined) {
        map.set(key, expanded);
        return () => {};
      }
      if (expanded && prev !== true) {
        map.set(key, expanded);
        // Ensure layout height animates (prevents "jump" when unmounting).
        element.style.height = "0px";
        rafId = requestAnimationFrame(() => {
          rafId = null;
          const targetHeight = element.scrollHeight;
          element.style.transition = `height ${ENTER_TIMEOUT_MS}ms ease, transform ${ENTER_TIMEOUT_MS}ms ease, opacity ${ENTER_TIMEOUT_MS}ms ease`;
          element.style.height = `${targetHeight}px`;
          this._transitionByKey = {
            ...this._transitionByKey,
            [key]: "enter-active"
          };
          activeTimer = setTimeout(() => {
            this._transitionByKey = {
              ...this._transitionByKey,
              [key]: "enter-done"
            };
            clearInlineCollapseStyles();
          }, ENTER_TIMEOUT_MS);
        });
        return () => {
          rafId && cancelAnimationFrame(rafId);
          activeTimer && clearTimeout(activeTimer);
          doneTimer && clearTimeout(doneTimer);
          clearInlineCollapseStyles();
        };
      }
      if (!expanded && prev === true) {
        map.set(key, expanded);
        // Lock current height so we can animate to 0 while exiting.
        element.style.height = `${element.scrollHeight}px`;
        rafId = requestAnimationFrame(() => {
          rafId = null;
          element.style.transition = `height ${EXIT_TIMEOUT_MS}ms ease, transform ${EXIT_TIMEOUT_MS}ms ease, opacity ${EXIT_TIMEOUT_MS}ms ease`;
          element.style.height = "0px";
          this._transitionByKey = {
            ...this._transitionByKey,
            [key]: "exit-active"
          };
          activeTimer = setTimeout(() => {
            this._transitionByKey = {
              ...this._transitionByKey,
              [key]: "exit-done"
            };
            // Unmount on exit after the final state is applied.
            doneTimer = setTimeout(() => {
              this._transitionByKey = {
                ...this._transitionByKey,
                [key]: null
              };
            }, 0);
            clearInlineCollapseStyles();
          }, EXIT_TIMEOUT_MS);
        });
        return () => {
          rafId && cancelAnimationFrame(rafId);
          activeTimer && clearTimeout(activeTimer);
          doneTimer && clearTimeout(doneTimer);
          clearInlineCollapseStyles();
        };
      }
      map.set(key, expanded);
      clearInlineCollapseStyles();
      return () => {};
    }));
  }
  get toggleIconSize() {
    const {
      toggleIconSize = "s20"
    } = this.args;
    return toggleIconSize;
  }
  get itemIconSize() {
    const {
      itemIconSize = "s20"
    } = this.args;
    return itemIconSize;
  }
  resolveIconSize(meta, fallback) {
    return meta?.size ?? fallback ?? null;
  }
  get level() {
    return this.args.level ?? 0;
  }
  get nextLevel() {
    return this.level + 1;
  }
  get ariaLevel() {
    return this.level + 1;
  }
  get items() {
    return this.args.items ?? [];
  }
  get listRole() {
    return this.level === 0 ? "tree" : "group";
  }
  get listClass() {
    return this.level === 0 ? "panelmenu-root-list" : "panelmenu-submenu-list";
  }
  isItemVisible(item) {
    return item?.visible !== false;
  }
  isItemDisabled(item) {
    return Boolean(item?.disabled);
  }
  isItemSeparator(item) {
    return Boolean(item?.separator);
  }
  hasChildren(item) {
    return Array.isArray(item?.items) && item.items.length > 0;
  }
  getKeyFor(item, index) {
    const parentKey = this.args.parentKey ?? "";
    const fallback = parentKey ? `${parentKey}_${index}` : `${index}`;
    return itemKey(item, fallback);
  }
  isExpanded(item, index) {
    const key = this.getKeyFor(item, index);
    return Boolean(this.args.expandedKeys?.[key]);
  }
  onItemClick(item, index, originalEvent) {
    if (this.isItemDisabled(item)) {
      originalEvent?.preventDefault?.();
      return;
    }
    const key = this.getKeyFor(item, index);
    const expanded = this.isExpanded(item, index);
    // Ensure first-time expansion animates: the content element mounts only after we toggle,
    // so we need a baseline prev state before the modifier runs.
    const prevMap = this._prevExpandedMap ?? (this._prevExpandedMap = new Map());
    !prevMap.has(key) && prevMap.set(key, expanded);
    if (typeof item?.command === "function") {
      item.command({
        originalEvent,
        item
      });
    }
    // Only toggle when children exist (matches PanelMenuSub behavior).
    this.hasChildren(item) && this.args.onToggle?.({
      item,
      key,
      expanded: !expanded,
      parentKey: this.args.parentKey ?? ""
    });
    if (!item?.url) {
      originalEvent?.preventDefault?.();
      originalEvent?.stopPropagation?.();
    }
  }
  onItemKeyDown(item, index, originalEvent) {
    switch (originalEvent.code) {
      case "Enter":
      case "NumpadEnter":
      case "Space":
        this.onItemClick(item, index, originalEvent);
        originalEvent.preventDefault();
        break;
    }
  }
  getItemClasses(item, index) {
    const key = this.getKeyFor(item, index);
    return joinClassNames("panelmenu-item", this.isExpanded(item, index) && "active", this.focusedKey === key && "focused", this.isItemDisabled(item) && "disabled");
  }
  getItemContentClasses(item, index) {
    return joinClassNames("panelmenu-item-content", this.isExpanded(item, index) && "active");
  }
  getToggleableContentClasses(item, index) {
    const active = this.isExpanded(item, index);
    const key = this.getKeyFor(item, index);
    const phaseRaw = this._transitionByKey[key] ?? null;
    const prev = this._prevExpandedMap?.get(key);
    // If the expanded state flipped, ignore the previous stable phase so the correct
    // initial class ("enter"/"exit") can apply on the first render.
    const phase = active && typeof phaseRaw === "string" && phaseRaw.startsWith("exit") ? null : !active && typeof phaseRaw === "string" && phaseRaw.startsWith("enter") ? null : phaseRaw;
    const parts = ["panelmenu-toggleable-content"];
    !active && parts.push("panelmenu-toggleable-content-collapsed");
    const effectivePhase = phase ?? (active && prev === false ? "enter" : null) ?? (!active && prev === true ? "exit" : null);
    appendTransitionPhaseClasses(parts, effectivePhase);
    return joinClassNames(...parts);
  }
  shouldRenderSubmenu(item, index) {
    const key = this.getKeyFor(item, index);
    const expanded = this.isExpanded(item, index);
    const phase = this._transitionByKey[key] ?? null;
    const prev = this._prevExpandedMap?.get(key);
    return expanded || phase === "exit" || phase === "exit-active" || phase === "exit-done" || prev === true && !expanded;
  }
  get expandIconName() {
    return this.args.expandIconName ?? "right-arrow-icon";
  }
  get collapseIconName() {
    return this.args.collapseIconName ?? "down-arrow-icon";
  }
  getItemIconMeta(item) {
    return iconParts(item?.icon);
  }
  onLinkFocus(item, index) {
    this.focusedKey = this.getKeyFor(item, index);
  }
  onLinkBlur(item, index) {
    const key = this.getKeyFor(item, index);
    this.focusedKey === key && (this.focusedKey = null);
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<ul class={{this.listClass}} role={{this.listRole}} ...attributes>\n\t\t\t{{#each this.items as |item index|}}\n\t\t\t\t{{#if (this.isItemVisible item)}}\n\t\t\t\t\t{{#if (this.isItemSeparator item)}}\n\t\t\t\t\t\t<li class=\"panelmenu-separator\" role=\"separator\"></li>\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t<li id=\"{{@panelId}}_{{this.getKeyFor item index}}\" class={{this.getItemClasses item index}} role=\"treeitem\" aria-label={{item.label}} aria-disabled={{if item.disabled \"true\" \"false\"}} aria-expanded={{if (this.hasChildren item) (if (this.isExpanded item index) \"true\" \"false\")}} aria-level={{this.ariaLevel}}>\n\t\t\t\t\t\t\t<div class={{this.getItemContentClasses item index}}>\n\t\t\t\t\t\t\t\t<a href={{if item.url item.url \"#\"}} class=\"panelmenu-item-link\" tabindex={{if item.disabled \"-1\" \"0\"}} {{on \"click\" (fn this.onItemClick item index)}} {{on \"keydown\" (fn this.onItemKeyDown item index)}} {{on \"focus\" (fn this.onLinkFocus item index)}} {{on \"blur\" (fn this.onLinkBlur item index)}}>\n\t\t\t\t\t\t\t\t\t{{#if item.template}}\n\t\t\t\t\t\t\t\t\t\t{{component item.template item=item active=(this.isExpanded item index) hasChildren=(this.hasChildren item) onClick=(fn this.onItemClick item index)}}\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t{{#if (this.hasChildren item)}}\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"panelmenu-submenu-icon\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @type=\"font\" @iconName={{if (this.isExpanded item index) this.collapseIconName this.expandIconName}} @componentClass=\"bs-icons1\" @size={{this.toggleIconSize}} />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t\t{{#if item.icon}}\n\t\t\t\t\t\t\t\t\t\t\t{{#let (this.getItemIconMeta item) as |meta|}}\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"panelmenu-item-icon\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @type=\"font\" @iconName={{meta.name}} @componentClass={{meta.base}} @size={{this.resolveIconSize meta this.itemIconSize}} />\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t{{/let}}\n\t\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t\t<span class=\"panelmenu-item-text\">{{item.label}}</span>\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t{{#if (this.hasChildren item)}}\n\t\t\t\t\t\t\t\t{{#if (this.shouldRenderSubmenu item index)}}\n\t\t\t\t\t\t\t\t\t<div class={{this.getToggleableContentClasses item index}} {{this.toggleableContentTransition (this.getKeyFor item index) (this.isExpanded item index)}}>\n\t\t\t\t\t\t\t\t\t\t<UlxPanelmenuSub @panelId={{@panelId}} @items={{item.items}} @level={{this.nextLevel}} @parentKey={{this.getKeyFor item index}} @expandedKeys={{@expandedKeys}} @onToggle={{@onToggle}} @expandIconName={{@expandIconName}} @collapseIconName={{@collapseIconName}} @toggleIconSize={{this.toggleIconSize}} @itemIconSize={{this.itemIconSize}} />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</li>\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/if}}\n\t\t\t{{/each}}\n\t\t</ul>\n\t", {
  strictMode: true,
  scope: () => ({
    on,
    fn,
    UlxIcon,
    UlxPanelmenuSub: _UlxPanelmenuSub
  })
}), _UlxPanelmenuSub), _UlxPanelmenuSub), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_transitionByKey", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {};
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "focusedKey", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, "resolveIconSize", [action], Object.getOwnPropertyDescriptor(_class.prototype, "resolveIconSize"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isItemVisible", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isItemVisible"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isItemDisabled", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isItemDisabled"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isItemSeparator", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isItemSeparator"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hasChildren", [action], Object.getOwnPropertyDescriptor(_class.prototype, "hasChildren"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getKeyFor", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getKeyFor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isExpanded", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isExpanded"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onItemClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onItemClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onItemKeyDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onItemKeyDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getItemClasses", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getItemClasses"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getItemContentClasses", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getItemContentClasses"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getToggleableContentClasses", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getToggleableContentClasses"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "shouldRenderSubmenu", [action], Object.getOwnPropertyDescriptor(_class.prototype, "shouldRenderSubmenu"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getItemIconMeta", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getItemIconMeta"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onLinkFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onLinkFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onLinkBlur", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onLinkBlur"), _class.prototype), _class);

export { UlxPanelmenuSub as default };
//# sourceMappingURL=panelmenu-sub.js.map
