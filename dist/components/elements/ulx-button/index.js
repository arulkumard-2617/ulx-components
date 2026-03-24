import { b as _initializerDefineProperty, _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { on } from '@ember/modifier';
import { registerDestructor } from '@ember/destroyable';
import { modifier } from 'ember-modifier';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _descriptor3, _UlxButton;
const RIPPLE_SIZE = 80;
const RIPPLE_DURATION_MS = 200;
/**
 * Button element component. Supports multiple variants, sizes, styles (text, outlined, raised, rounded),
 * loading state, link rendering, and external content slots via named blocks.
 *
 * ## Variants
 * - primary (default)
 * - secondary
 * - success
 * - info
 * - warning
 * - help
 * - danger
 *
 * ## Styles
 * - Standard (default)
 * - Text - use @text={{true}}
 * - Outlined - use @outlined={{true}}
 * - Raised - use @raised={{true}} for shadow
 * - Rounded - use @rounded={{true}} for circular corners
 *
 * ## Sizes
 * Pass size class from parent (e.g. xs-size, s-size, m-size, l-size, xl-size). Default m-size.
 *
 * ## Content Blocks
 * - <:prefix> Render content before the main label/default content
 * - <:default> Render main button content
 * - <:suffix> Render content after the main label/default content
 *
 * This component no longer renders icon/loading/badge internals directly.
 * Those should be passed from the outside through named blocks.
 *
 * ## WCAG
 * - Use semantic <button> element with proper type attribute
 * - Support disabled state with aria-disabled
 * - Loading state sets aria-busy for assistive technologies
 * - Icon-only buttons should have aria-label passed via ...attributes
 * - When @href is provided, renders as <a>; otherwise renders as <button> (WCAG).
 *
 * @class UlxButton
 * @param {string} [label] - Button label text
 * @param {boolean} [disabled=false] - Disables the button
 * @param {string} [href] - When set, renders as <a href="{{href}}">; otherwise <button>
 * @param {'primary'|'secondary'|'success'|'info'|'warning'|'help'|'danger'} [variant='primary'] - Button variant/type
 * @param {boolean} [raised=false] - Adds shadow for elevation
 * @param {boolean} [rounded=false] - Circular border radius
 * @param {boolean} [text=false] - Text variant (transparent background)
 * @param {boolean} [outlined=false] - Outlined variant (transparent background with border)
 * @param {string} [size] - Button size class from parent (e.g. xs-size, s-size, m-size, l-size, xl-size). Omit for m-size.
 * @param {boolean} [fluid=false] - Full width button
 * @param {string} [customClass] - Additional CSS classes
 * @param {string} [dataQa] - Optional root data-qa override. Defaults to "ulx-button".
 * @param {'button'|'submit'|'reset'} [type='button'] - Button type attribute
 * @param {boolean} [loading=false] - When true, button shows loading spinner and is disabled. Use for always-on loading state.
 * @param {function} [onClick] - Click handler; may return a Promise to show loading until it settles
 * @param {Modifier} [elementRef] - Optional modifier (or element-ref callback) applied to the root element for parent ref capture (e.g. dropdown target)
 */
let UlxButton = (_class = (_UlxButton = class UlxButton extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "promiseLoading", _descriptor, this);
    _initializerDefineProperty(this, "inkStyle", _descriptor2, this);
    _initializerDefineProperty(this, "inkActive", _descriptor3, this);
    _defineProperty(this, "_rippleTimeout", null);
    _defineProperty(this, "_destructor", registerDestructor(this, () => {
      clearTimeout(this._rippleTimeout);
    }));
    _defineProperty(this, "noOpElementRef", modifier(() => () => {}));
  }
  get elementRefModifier() {
    return this.args.elementRef ?? this.args.dropdownTargetRef ?? this.noOpElementRef;
  }
  get baseClass() {
    return getComponentClass("button");
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-button";
  }
  get isLink() {
    return !!this.args.href;
  }
  get effectiveLoading() {
    return !!this.args.loading || this.promiseLoading;
  }
  get buttonClasses() {
    const {
      variant = "primary",
      text,
      href,
      outlined,
      raised,
      rounded,
      size,
      fluid,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    parts.push(variant);
    text && parts.push("text-button");
    href && text && parts.push("link");
    outlined && parts.push("outlined");
    raised && parts.push("raised");
    rounded && parts.push("rounded");
    parts.push(size || "m-size");
    fluid && parts.push("fluid");
    this.effectiveLoading && parts.push("loading");
    this.isDisabled && parts.push("disabled");
    customClass && parts.push(customClass);
    return parts.filter(Boolean).join(" ");
  }
  get buttonType() {
    return this.args.type || "button";
  }
  get isDisabled() {
    const {
      disabled
    } = this.args;
    return disabled || this.effectiveLoading;
  }
  /**
  * Handles click interactions for the button/link component.
  */
  handleClick(event) {
    const {
      onClick,
      href
    } = this.args;
    if (this.isDisabled || this.effectiveLoading) {
      event.preventDefault();
      return;
    }
    if (href && typeof onClick === "function") {
      event.preventDefault();
    }
    if (typeof onClick === "function") {
      const result = onClick(event);
      const promise = result && typeof result.then === "function" ? result : null;
      if (promise) {
        this.promiseLoading = true;
        promise.finally(() => {
          this.promiseLoading = false;
        });
      }
    }
  }
  handleKeyDown(event) {
    if (!this.isLink || this.isDisabled) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.handleClickWithRipple(event);
    }
  }
  get labelClass() {
    return "button-label";
  }
  get inkClass() {
    return `${this.baseClass}-ink`;
  }
  get inkActiveClass() {
    return `${this.baseClass}-ink-active`;
  }
  get inkSpanClasses() {
    return this.inkActive ? `${this.inkClass} ${this.inkActiveClass}` : this.inkClass;
  }
  handleRipple(event) {
    if (this.isDisabled) return;
    const el = event?.currentTarget;
    if (!el || typeof el.getBoundingClientRect !== "function") return;
    const rect = el.getBoundingClientRect();
    const x = typeof event.clientX === "number" ? event.clientX : rect.left + rect.width / 2;
    const y = typeof event.clientY === "number" ? event.clientY : rect.top + rect.height / 2;
    const half = RIPPLE_SIZE / 2;
    const top = y - rect.top - half;
    const left = x - rect.left - half;
    this.inkStyle = `height:${RIPPLE_SIZE}px;width:${RIPPLE_SIZE}px;top:${top}px;left:${left}px;`;
    this.inkActive = true;
    clearTimeout(this._rippleTimeout);
    this._rippleTimeout = setTimeout(() => {
      this.inkActive = false;
    }, RIPPLE_DURATION_MS);
  }
  handleClickWithRipple(event) {
    this.handleRipple(event);
    this.handleClick(event);
  }
}, setComponentTemplate(precompileTemplate("\n\t\t{{#if this.isLink}}\n\t\t\t<a data-qa={{this.rootDataQa}} href={{@href}} class=\"{{this.buttonClasses}} {{@class}}\" aria-disabled={{if this.isDisabled \"true\"}} tabindex={{if this.isDisabled \"-1\"}} aria-busy={{if this.effectiveLoading \"true\"}} {{this.elementRefModifier}} {{on \"click\" this.handleClickWithRipple}} {{on \"keydown\" this.handleKeyDown}} ...attributes>\n\t\t\t\t{{#if (has-block \"prefix\")}}\n\t\t\t\t\t{{yield to=\"prefix\"}}\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#if (has-block \"default\")}}\n\t\t\t\t\t{{yield to=\"default\"}}\n\t\t\t\t{{else}}\n\t\t\t\t\t{{#if @label}}\n\t\t\t\t\t\t<span class={{this.labelClass}}>{{@label}}</span>\n\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{yield}}\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#if (has-block \"suffix\")}}\n\t\t\t\t\t{{yield to=\"suffix\"}}\n\t\t\t\t{{/if}}\n\n\t\t\t\t<span role=\"presentation\" aria-hidden=\"true\" class={{this.inkSpanClasses}} style={{this.inkStyle}}></span>\n\t\t\t</a>\n\t\t{{else}}\n\t\t\t<button data-qa={{this.rootDataQa}} class=\"{{this.buttonClasses}} {{@class}}\" type={{this.buttonType}} disabled={{this.isDisabled}} aria-busy={{if this.effectiveLoading \"true\"}} {{this.elementRefModifier}} {{on \"click\" this.handleClickWithRipple}} {{on \"keydown\" this.handleKeyDown}} ...attributes>\n\t\t\t\t{{#if (has-block \"prefix\")}}\n\t\t\t\t\t{{yield to=\"prefix\"}}\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#if (has-block \"default\")}}\n\t\t\t\t\t{{yield to=\"default\"}}\n\t\t\t\t{{else}}\n\t\t\t\t\t{{#if @label}}\n\t\t\t\t\t\t<span class={{this.labelClass}}>{{@label}}</span>\n\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{yield}}\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#if (has-block \"suffix\")}}\n\t\t\t\t\t{{yield to=\"suffix\"}}\n\t\t\t\t{{/if}}\n\n\t\t\t\t<span role=\"presentation\" aria-hidden=\"true\" class={{this.inkSpanClasses}} style={{this.inkStyle}}></span>\n\t\t\t</button>\n\t\t{{/if}}\n\t", {
  strictMode: true,
  scope: () => ({
    on
  })
}), _UlxButton), _UlxButton), _descriptor = _applyDecoratedDescriptor(_class.prototype, "promiseLoading", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "inkStyle", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "inkActive", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "handleClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeyDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeyDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleRipple", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleRipple"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleClickWithRipple", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleClickWithRipple"), _class.prototype), _class);

export { UlxButton as default };
//# sourceMappingURL=index.js.map
