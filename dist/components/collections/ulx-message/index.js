import { _ as _defineProperty } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { modifier } from 'ember-modifier';
import { getComponentClass } from '../../../utils/component-config.js';
import UlxIcon from '../../elements/ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxMessage;
const ENTER_DONE_CLASS = "enter-done";
/**
 * Inline message element: single-line message with optional icon and variant styling.
 * Uses role="alert", aria-live="polite", aria-atomic="true" for accessibility.
 *
 * @class UlxMessage
 * @param {string} [text] - Message text (ignored when using default or template block).
 * @param {'info'|'success'|'warn'|'error'} [variant='info'] - Visual variant (demo: use "Variant" not "Severity").
 * @param {string} [icon] - Icon name/class; icon is shown only when this is passed.
 * @param {string} [iconSize] - Optional icon size (e.g. s18). No default; only applied when provided.
 * @param {string} [size="m-size"] - Size class (e.g. xs-size, s-size, m-size, l-size, xl-size).
 * @param {string} [customClass] - Extra CSS classes for the root.
 * @param {string} [id] - Id for the root element.
 */
class UlxMessage extends Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "addEnterDoneAfterRender", modifier(element => {
      const rafId = requestAnimationFrame(() => {
        element.classList.add(ENTER_DONE_CLASS);
      });
      return () => cancelAnimationFrame(rafId);
    }));
  }
  get baseClass() {
    return getComponentClass("message");
  }
  get rootClasses() {
    const {
      variant = "info",
      size = "m-size",
      customClass
    } = this.args;
    const parts = [this.baseClass];
    variant && parts.push(`${variant}`);
    size && parts.push(size);
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get iconClass() {
    return `${this.baseClass}-icon`;
  }
  get textClass() {
    return "message-text";
  }
  get showIcon() {
    return !!this.args.icon;
  }
}
_UlxMessage = UlxMessage;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} role=\"alert\" aria-live=\"polite\" aria-atomic=\"true\" {{this.addEnterDoneAfterRender}} ...attributes>\n\t\t\t{{#if this.showIcon}}\n\t\t\t\t<span class={{this.iconClass}} aria-hidden=\"true\">\n\t\t\t\t\t<UlxIcon @componentClass=\"bs-icons1\" @type=\"font\" @iconName={{@icon}} @size={{@iconSize}} />\n\t\t\t\t</span>\n\t\t\t{{/if}}\n\t\t\t{{#if (has-block)}}\n\t\t\t\t{{yield}}\n\t\t\t{{else}}\n\t\t\t\t{{#if @text}}\n\t\t\t\t\t<span class={{this.textClass}}>{{@text}}</span>\n\t\t\t\t{{/if}}\n\t\t\t{{/if}}\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    UlxIcon
  })
}), _UlxMessage);

export { UlxMessage as default };
//# sourceMappingURL=index.js.map
