import { _ as _defineProperty, a as _applyDecoratedDescriptor, b as _initializerDefineProperty } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { modifier } from 'ember-modifier';
import { guidFor } from '@ember/object/internals';
import { getComponentClass } from '../../../utils/component-config.js';
import UlxIcon from '../../elements/ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _UlxAccordion;
const ENTER_TIMEOUT_MS = 1000;
const EXIT_TIMEOUT_MS = 450;
/**
 * Accordion collection component. Groups content in expandable tabs.
 * Matches ULS markup/classes from accordion.less.
 *
 * @class UlxAccordion
 * @param {Array<Object>} [model=[]] - Tabs. Each item: { header (string), disabled? (boolean), content? (string) }
 * @param {number|number[]|null} [activeIndex=null] - Controlled open index (single) or array (multiple)
 * @param {boolean} [multiple=false] - Allow multiple tabs open
 * @param {Function} [onTabOpen] - Called when a tab opens: ({ originalEvent, index }) => void
 * @param {Function} [onTabClose] - Called when a tab closes: ({ originalEvent, index }) => void
 * @param {Function} [onTabChange] - Called when open state changes: ({ originalEvent, index }) => void; index is number or number[]
 * @param {string} [size='s-size'] - Size: xs-size, s-size, m-size, l-size, xl-size
 * @param {string} [variant] - Visual: filled, elevated, flat
 * @param {string} [spacing] - compact, spacious
 * @param {string} [rounded] - rounded, square
 * @param {string} [customClass] - Extra CSS classes
 * @param {string} [expandIconName='down-stroke-icon-new'] - Font icon when tab is collapsed
 * @param {string} [collapseIconName='down-stroke-icon-new'] - Font icon when tab is expanded
 * @param {'left'|'right'} [toggleIconPosition='left'] - Position of the expand/collapse icon.
 * @param {string} [ariaLabel] - Accessible label for accordion
 *
 * @block content - Optional. Yields (item, index, meta) for tab body; meta: { active, disabled }
 */
let UlxAccordion = (_class = (_UlxAccordion = class UlxAccordion extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "_activeIndex", _descriptor, this);
    _initializerDefineProperty(this, "_contentTransition", _descriptor2, this);
    _defineProperty(this, "_prevSelectedMap", null);
    _defineProperty(this, "accordionContentTransition", modifier((element, [index, selected]) => {
      const map = this._prevSelectedMap ?? (this._prevSelectedMap = new Map());
      const prev = map.get(index);
      let enterActiveTimer = null;
      let exitActiveTimer = null;
      let doneTimer = null;
      let rafId = null;
      // Initial render does not animate (appear=false).
      if (prev === undefined) {
        map.set(index, selected);
        return () => {};
      }
      if (selected && prev !== true) {
        map.set(index, selected);
        rafId = requestAnimationFrame(() => {
          rafId = null;
          this._contentTransition = {
            ...this._contentTransition,
            [index]: "enter-active"
          };
          enterActiveTimer = setTimeout(() => {
            this._contentTransition = {
              ...this._contentTransition,
              [index]: "enter-done"
            };
          }, ENTER_TIMEOUT_MS);
        });
        return () => {
          rafId && cancelAnimationFrame(rafId);
          enterActiveTimer && clearTimeout(enterActiveTimer);
        };
      }
      if (!selected && prev === true) {
        map.set(index, selected);
        rafId = requestAnimationFrame(() => {
          rafId = null;
          this._contentTransition = {
            ...this._contentTransition,
            [index]: "exit-active"
          };
          exitActiveTimer = setTimeout(() => {
            // Exit done is momentary before unmounting.
            this._contentTransition = {
              ...this._contentTransition,
              [index]: "exit-done"
            };
            doneTimer = setTimeout(() => {
              // Clear phase so content can unmount when !selected
              this._contentTransition = {
                ...this._contentTransition,
                [index]: null
              };
            }, 0);
          }, EXIT_TIMEOUT_MS);
        });
        return () => {
          rafId && cancelAnimationFrame(rafId);
          exitActiveTimer && clearTimeout(exitActiveTimer);
          doneTimer && clearTimeout(doneTimer);
        };
      }
      map.set(index, selected);
      return () => {};
    }));
    _defineProperty(this, "rootElement", null);
    _defineProperty(this, "setRootRef", modifier(element => {
      this.rootElement = element;
      return () => {
        this.rootElement = null;
      };
    }));
  }
  get baseClass() {
    return getComponentClass("accordion");
  }
  get model() {
    return this.args.model ?? [];
  }
  get multiple() {
    return Boolean(this.args.multiple);
  }
  get rootId() {
    return this.args.id ?? `ulx-accordion-${guidFor(this)}`;
  }
  get activeIndexState() {
    const raw = this.args.activeIndex ?? this._activeIndex;
    if (raw === undefined || raw === null) return this.multiple ? [] : null;
    if (this.multiple && !Array.isArray(raw)) return [Number(raw)];
    return raw;
  }
  get isControlled() {
    return this.args.activeIndex !== undefined && this.args.activeIndex !== null;
  }
  get expandIconName() {
    return this.args.expandIconName ?? "down-stroke-icon-new";
  }
  get collapseIconName() {
    return this.args.collapseIconName ?? "down-stroke-icon-new";
  }
  get toggleIconPosition() {
    return this.args.toggleIconPosition ?? "left";
  }
  get isToggleIconRight() {
    return this.toggleIconPosition === "right";
  }
  get headerActionClasses() {
    const parts = ["accordion-header-action"];
    this.isToggleIconRight && parts.push("toggle-icon-right");
    return parts.filter(Boolean).join(" ");
  }
  get rootClasses() {
    const {
      size = "s-size",
      variant,
      spacing,
      rounded,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    parts.push(size);
    this.multiple && parts.push("multiple");
    !this.multiple && parts.push("single");
    variant && parts.push(variant);
    spacing && parts.push(spacing);
    rounded && parts.push(rounded);
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  isTabSelected(index) {
    const state = this.activeIndexState;
    if (this.multiple && Array.isArray(state)) return state.includes(Number(index));
    return state === Number(index);
  }
  getHeaderId(index) {
    return `${this.rootId}_header_${index}`;
  }
  getContentId(index) {
    return `${this.rootId}_content_${index}`;
  }
  getTabClasses(item, index) {
    const parts = [`${this.baseClass}-tab`];
    index === 0 && parts.push("first");
    index === this.model.length - 1 && parts.push("last");
    item?.disabled && parts.push("disabled");
    return parts.filter(Boolean).join(" ");
  }
  getHeaderClasses(item, index) {
    const parts = ["accordion-header"];
    this.isTabSelected(index) && parts.push("active");
    item?.disabled && parts.push("disabled");
    return parts.filter(Boolean).join(" ");
  }
  getHeaderIconSize(item) {
    return item?.iconSize ?? "s18";
  }
  getContentTransitionState(index) {
    return this._contentTransition[index] ?? null;
  }
  getPrevSelected(index) {
    return this._prevSelectedMap?.get(index);
  }
  isExiting(index) {
    const phase = this.getContentTransitionState(index);
    return phase === "exit" || phase === "exit-active" || phase === "exit-done";
  }
  shouldRenderToggleableContent(index) {
    const selected = this.isTabSelected(index);
    const phase = this.getContentTransitionState(index);
    const prev = this.getPrevSelected(index);
    // Keep content in DOM if selected OR currently exiting OR just transitioned from selected->collapsed (unmountOnExit behavior).
    return selected || phase === "exit" || phase === "exit-active" || phase === "exit-done" || prev === true && !selected;
  }
  getToggleableContentClasses(index) {
    const selected = this.isTabSelected(index);
    const phase = this.getContentTransitionState(index);
    const prev = this.getPrevSelected(index);
    const parts = ["accordion-toggleable-content"];
    const isInitiallyExpanded = prev === undefined && selected && !phase;
    isInitiallyExpanded && parts.push("initially-expanded");
    // Ensure the first render after a state change uses correct phase: opening mounts with "enter", closing keeps mounted with "exit".
    const effectivePhase = phase ?? (selected && prev === false ? "enter" : null) ?? (!selected && prev === true ? "exit" : null);
    // CSS transition phases: enter-active includes both "enter" and "enter-active"; exit-active includes both "exit" and "exit-active".
    if (effectivePhase === "enter") parts.push("enter");
    if (effectivePhase === "enter-active") parts.push("enter", "enter-active");
    if (effectivePhase === "enter-done") parts.push("enter-done");
    if (effectivePhase === "exit") parts.push("exit");
    if (effectivePhase === "exit-active") parts.push("exit", "exit-active");
    if (effectivePhase === "exit-done") parts.push("exit-done");
    // Legacy fallback for non-transition cases (kept minimal).
    !effectivePhase && selected && parts.push("expanded");
    return parts.filter(Boolean).join(" ");
  }
  changeActiveIndex(item, index, originalEvent) {
    if (item?.disabled) {
      originalEvent?.preventDefault?.();
      return;
    }
    const selected = this.isTabSelected(index);
    if (selected) {
      this.args.onTabClose?.({
        originalEvent,
        index
      });
    } else {
      this.args.onTabOpen?.({
        originalEvent,
        index
      });
    }
    let newIndex;
    if (this.multiple) {
      const current = Array.isArray(this.activeIndexState) ? [...this.activeIndexState] : [];
      newIndex = selected ? current.filter(i => i !== Number(index)) : [...current, Number(index)].sort((a, b) => a - b);
    } else {
      newIndex = selected ? null : Number(index);
    }
    this.args.onTabChange?.({
      originalEvent,
      index: newIndex
    });
    if (!this.isControlled) {
      this._activeIndex = newIndex;
    }
    originalEvent?.preventDefault?.();
    originalEvent?.stopPropagation?.();
  }
  onHeaderKeyDown(item, index, originalEvent) {
    switch (originalEvent.code) {
      case "ArrowDown":
        {
          const next = this.findNextHeader(index);
          next != null && this.focusHeader(next);
          originalEvent.preventDefault();
          break;
        }
      case "ArrowUp":
        {
          const prev = this.findPrevHeader(index);
          prev != null && this.focusHeader(prev);
          originalEvent.preventDefault();
          break;
        }
      case "Home":
        {
          this.focusHeader(0);
          originalEvent.preventDefault();
          break;
        }
      case "End":
        {
          this.focusHeader(this.model.length - 1);
          originalEvent.preventDefault();
          break;
        }
      case "Enter":
      case "NumpadEnter":
      case "Space":
        this.changeActiveIndex(item, index, originalEvent);
        originalEvent.preventDefault();
        break;
    }
  }
  findNextHeader(fromIndex) {
    for (let i = fromIndex + 1; i < this.model.length; i++) {
      if (!this.model[i]?.disabled) return i;
    }
    return null;
  }
  findPrevHeader(fromIndex) {
    for (let i = fromIndex - 1; i >= 0; i--) {
      if (!this.model[i]?.disabled) return i;
    }
    return null;
  }
  focusHeader(index) {
    const id = this.getHeaderId(index);
    const el = this.rootElement?.querySelector?.(`#${id}`);
    el?.focus?.();
  }
  getContentMeta(item, index) {
    return {
      active: this.isTabSelected(index),
      disabled: Boolean(item?.disabled)
    };
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div id={{this.rootId}} class={{this.rootClasses}} role=\"region\" aria-label={{@ariaLabel}} data-qa=\"ulx-accordion\" {{this.setRootRef}} ...attributes>\n\t\t\t{{#each this.model as |item index|}}\n\t\t\t\t<div class={{this.getTabClasses item index}}>\n\t\t\t\t\t<div class={{this.getHeaderClasses item index}}>\n\t\t\t\t\t\t<a id={{this.getHeaderId index}} href=\"#{{this.getContentId index}}\" class={{this.headerActionClasses}} role=\"button\" tabindex={{if item.disabled \"-1\" \"0\"}} aria-expanded={{this.isTabSelected index}} aria-controls={{this.getContentId index}} aria-disabled={{if item.disabled \"true\" \"false\"}} data-qa=\"ulx-accordion-trigger\" {{on \"click\" (fn this.changeActiveIndex item index)}} {{on \"keydown\" (fn this.onHeaderKeyDown item index)}}>\n\t\t\t\t\t\t\t{{#unless this.isToggleIconRight}}\n\t\t\t\t\t\t\t\t<span class=\"accordion-header-icon\n\t\t\t\t\t\t\t\t\t\t{{if (this.isTabSelected index) \"expanded\" \"collapsed\"}}\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t\t<UlxIcon @type=\"font\" @size=\"s18\" @iconName={{if (this.isTabSelected index) this.collapseIconName this.expandIconName}} @componentClass=\"bs-icons1\" />\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t{{/unless}}\n\t\t\t\t\t\t\t{{#if item.iconName}}\n\t\t\t\t\t\t\t\t<span class=\"{{this.baseClass}}-header-indicator\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t\t<UlxIcon @type=\"font\" @iconName={{item.iconName}} @componentClass=\"bs-icons1\" @size={{this.getHeaderIconSize item}} />\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t<span class=\"accordion-header-title\">{{item.header}}</span>\n\t\t\t\t\t\t\t{{#if this.isToggleIconRight}}\n\t\t\t\t\t\t\t\t<span class=\"accordion-header-icon right\n\t\t\t\t\t\t\t\t\t\t{{if (this.isTabSelected index) \"expanded\" \"collapsed\"}}\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t\t<UlxIcon @type=\"font\" @size=\"s18\" @iconName={{if (this.isTabSelected index) this.collapseIconName this.expandIconName}} @componentClass=\"bs-icons1\" />\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t{{#if (this.shouldRenderToggleableContent index)}}\n\t\t\t\t\t\t<div id={{this.getContentId index}} class={{this.getToggleableContentClasses index}} role=\"region\" aria-labelledby={{this.getHeaderId index}} data-qa=\"ulx-accordion-content\" {{this.accordionContentTransition index (this.isTabSelected index)}}>\n\t\t\t\t\t\t\t<div class=\"accordion-content\">\n\t\t\t\t\t\t\t\t{{#if (has-block \"content\")}}\n\t\t\t\t\t\t\t\t\t{{yield item index (this.getContentMeta item index) to=\"content\"}}\n\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t{{item.content}}\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</div>\n\t\t\t{{/each}}\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    on,
    fn,
    UlxIcon
  })
}), _UlxAccordion), _UlxAccordion), _descriptor = _applyDecoratedDescriptor(_class.prototype, "_activeIndex", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_contentTransition", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {};
  }
}), _applyDecoratedDescriptor(_class.prototype, "isTabSelected", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isTabSelected"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getHeaderId", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getHeaderId"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getContentId", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getContentId"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getTabClasses", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getTabClasses"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getHeaderClasses", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getHeaderClasses"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getHeaderIconSize", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getHeaderIconSize"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "shouldRenderToggleableContent", [action], Object.getOwnPropertyDescriptor(_class.prototype, "shouldRenderToggleableContent"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getToggleableContentClasses", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getToggleableContentClasses"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeActiveIndex", [action], Object.getOwnPropertyDescriptor(_class.prototype, "changeActiveIndex"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onHeaderKeyDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onHeaderKeyDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "focusHeader", [action], Object.getOwnPropertyDescriptor(_class.prototype, "focusHeader"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getContentMeta", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getContentMeta"), _class.prototype), _class);

export { UlxAccordion as default };
//# sourceMappingURL=index.js.map
