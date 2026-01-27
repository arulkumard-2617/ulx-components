import Component from '@glimmer/component';
import { action } from '@ember/object';
import { NAMESPACE } from '../../../utils/component-config.js';
import { on } from '@ember/modifier';
import ButtonContent from './_content.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

function _applyDecoratedDescriptor(i, e, r, n, l) {
  var a = {};
  return Object.keys(n).forEach(function (i) {
    a[i] = n[i];
  }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = true), a = r.slice().reverse().reduce(function (r, n) {
    return n(i, e, r) || r;
  }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a;
}

var _class, _UlsButton;
let UlsButton = (_class = (_UlsButton = class UlsButton extends Component {
  // Label
  get label() {
    return this.args.label;
  }
  // Icon args
  get iconLeft() {
    return this.args.iconLeft;
  }
  get iconRight() {
    return this.args.iconRight;
  }
  get hasIconLeft() {
    return !!this.iconLeft;
  }
  get hasIconRight() {
    return !!this.iconRight;
  }
  // Disabled state
  get isDisabled() {
    return this.args.disabled ?? false;
  }
  // Loading state
  get isLoading() {
    return this.args.loading ?? false;
  }
  // Combined disabled state (disabled OR loading)
  get isButtonDisabled() {
    return this.isDisabled || this.isLoading;
  }
  // Size
  get size() {
    return this.args.size || 's-size';
  }
  // Variant
  get variant() {
    return this.args.variant || 'default';
  }
  // Type
  get type() {
    return this.args.type ?? 'button';
  }
  // Determine if should render as button or link
  get isButton() {
    return !this.args.href || this.isButtonDisabled;
  }
  get href() {
    return this.args.href;
  }
  get target() {
    return this.args.target;
  }
  // Build button classes
  get buttonClasses() {
    const baseClass = `${NAMESPACE}-button`;
    const classes = [baseClass];
    // Add variant and size
    classes.push(this.variant);
    classes.push(this.size);
    // Add state classes
    if (this.isButtonDisabled) classes.push('disabled');
    if (this.isLoading) classes.push('loading');
    // Add icon classes (props only - blocks handled in template)
    if (this.hasIconLeft) classes.push('has-icon-left');
    if (this.hasIconRight) classes.push('has-icon-right');
    // Add custom classes
    if (this.args.customClasses) classes.push(this.args.customClasses);
    if (this.args.class) classes.push(this.args.class);
    return classes.join(' ');
  }
  // Click handler
  handleClick(event) {
    // Prevent action if disabled or loading
    if (this.isButtonDisabled) {
      event.preventDefault();
      return;
    }
    // Call the onClick handler if provided
    if (this.args.onClick) {
      this.args.onClick(event);
    }
  }
}, setComponentTemplate(precompileTemplate("\n        {{#if this.isButton}}\n            <button class=\"{{this.buttonClasses}}\" type={{this.type}} disabled={{this.isButtonDisabled}} {{on \"click\" this.handleClick}} ...attributes>\n                <ButtonContent @iconLeft={{this.iconLeft}} @label={{this.label}} @iconRight={{this.iconRight}} @isLoading={{this.isLoading}} @hasIconLeftBlock={{has-block \"iconLeft\"}} @hasIconRightBlock={{has-block \"iconRight\"}} />\n            </button>\n        {{else}}\n            <a href={{this.href}} target={{this.target}} class=\"{{this.buttonClasses}}\" ...attributes>\n                <ButtonContent @iconLeft={{this.iconLeft}} @label={{this.label}} @iconRight={{this.iconRight}} @isLoading={{this.isLoading}} @hasIconLeftBlock={{has-block \"iconLeft\"}} @hasIconRightBlock={{has-block \"iconRight\"}} />\n            </a>\n        {{/if}}\n    ", {
  strictMode: true,
  scope: () => ({
    on,
    ButtonContent
  })
}), _UlsButton), _UlsButton), _applyDecoratedDescriptor(_class.prototype, "handleClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleClick"), _class.prototype), _class);

export { UlsButton as default };
//# sourceMappingURL=index.js.map
