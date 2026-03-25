import { _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { modifier } from 'ember-modifier';
import { getComponentClass } from '../../../utils/component-config.js';
import { joinClassNames } from '../../../utils/class-names.js';
import { resolveRootDataQa, buildDataQa } from '../../../utils/data-qa.js';
import UlxIcon from '../../elements/ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _UlxMessage;
const ENTER_DONE_CLASS = "enter-done";
/**
 * Inline message with optional icon and variant styling.
 * Live region: `role="alert"`, `aria-live="polite"`, `aria-atomic="true"`.
 *
 * @class UlxMessage
 * @param {string} [text] - Shown when no block is passed; ignored when a block is provided.
 * @param {'info'|'success'|'warn'|'error'} [variant='info'] - Visual variant (demos: "Variant", not "Severity").
 * @param {string} [icon] - Renders `UlxIcon` when set; icon wrapper is `aria-hidden`.
 * @param {string} [iconSize] - Passed to `UlxIcon` when `icon` is set.
 * @param {string} [size="m-size"] - Size token (e.g. xs-size … xl-size).
 * @param {string} [customClass] - Extra classes on the root.
 * @param {string} [id] - Root id (via `...attributes`).
 * @param {string} [dataQa] - Root `data-qa` override (default `ulx-message`).
 */
let UlxMessage = (_class = (_UlxMessage = class UlxMessage extends Component {
  constructor(...args) {
    super(...args);
    /** Next frame: adds `enter-done` so theme LESS can match `.ulx-message[role="alert"].enter-done`. */
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
    return joinClassNames(this.baseClass, variant, size, customClass);
  }
  get iconClass() {
    return `${this.baseClass}-icon`;
  }
  /** Must stay `message-text` to match theme `.ulx-message .message-text` selectors. */
  get textClass() {
    return "message-text";
  }
  get showIcon() {
    return !!this.args.icon;
  }
  get rootDataQa() {
    return resolveRootDataQa(this.args.dataQa, "message");
  }
  /** `data-qa` suffix for internal parts (`icon`, `text`). */
  getDataQa(part) {
    return buildDataQa(this.rootDataQa, part);
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} data-qa={{this.rootDataQa}} role=\"alert\" aria-live=\"polite\" aria-atomic=\"true\" {{this.addEnterDoneAfterRender}} ...attributes>\n\t\t\t{{#if this.showIcon}}\n\t\t\t\t<span class={{this.iconClass}} data-qa={{this.getDataQa \"icon\"}} aria-hidden=\"true\">\n\t\t\t\t\t<UlxIcon @componentClass=\"bs-icons1\" @type=\"font\" @iconName={{@icon}} @size={{@iconSize}} />\n\t\t\t\t</span>\n\t\t\t{{/if}}\n\t\t\t{{#if (has-block)}}\n\t\t\t\t{{yield}}\n\t\t\t{{else}}\n\t\t\t\t{{#if @text}}\n\t\t\t\t\t<span class={{this.textClass}} data-qa={{this.getDataQa \"text\"}}>{{@text}}</span>\n\t\t\t\t{{/if}}\n\t\t\t{{/if}}\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    UlxIcon
  })
}), _UlxMessage), _UlxMessage), _applyDecoratedDescriptor(_class.prototype, "getDataQa", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getDataQa"), _class.prototype), _class);

export { UlxMessage as default };
//# sourceMappingURL=index.js.map
