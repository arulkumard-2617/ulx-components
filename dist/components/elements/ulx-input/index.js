import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { NAMESPACE } from '../../../utils/component-config.js';
import { normalizeRules, resolveKey, buildInputId, isRulesRequired, getConstraintValue, getRuleValue, isInvalidState, buildInputClass, getKeyFilterPattern, isSpecialKey } from '../../../utils/input-util.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _UlxInput;
let UlxInput = (_class = (_UlxInput = class UlxInput extends Component {
  // Rules
  get rules() {
    const {
      rules: rulesArg
    } = this.args;
    return normalizeRules(rulesArg ?? this.fieldContext?.rules);
  }
  get fieldContext() {
    const {
      field
    } = this.args;
    return field && typeof field === "object" ? field : null;
  }
  get key() {
    const {
      key: keyArg
    } = this.args;
    return resolveKey(this, keyArg ?? this.fieldContext?.key);
  }
  get inputId() {
    return buildInputId(NAMESPACE, this.args.id, this.key);
  }
  get isRequired() {
    return isRulesRequired(this.rules);
  }
  get minLength() {
    return getConstraintValue(this.rules, "minLength");
  }
  get maxLength() {
    return getConstraintValue(this.rules, "maxLength");
  }
  get min() {
    return getRuleValue(this.rules, "min");
  }
  get max() {
    return getRuleValue(this.rules, "max");
  }
  get isInvalid() {
    const {
      invalid,
      error: errorArg
    } = this.args;
    const error = errorArg ?? this.fieldContext?.error;
    return isInvalidState(invalid, error);
  }
  // Classes
  get inputClass() {
    const {
      size = "m-size",
      disabled,
      readonly,
      customClass
    } = this.args;
    const parts = [buildInputClass({
      isTextarea: false,
      size,
      invalid: this.isInvalid,
      disabled,
      readonly
    })];
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  // Type
  get inputType() {
    return this.args.type ?? "text";
  }
  // ARIA
  get ariaDescribedBy() {
    const {
      ariaDescribedBy
    } = this.args;
    return ariaDescribedBy ?? this.fieldContext?.describedBy;
  }
  get ariaErrorMessage() {
    const {
      ariaErrorMessage
    } = this.args;
    return ariaErrorMessage ?? this.fieldContext?.errorId;
  }
  // Key filter
  get keyFilterPattern() {
    return getKeyFilterPattern(this.args.keyfilter);
  }
  // Actions
  handleKeydown(event) {
    this.args.onKeydown?.(event);
    if (this.keyFilterPattern && !isSpecialKey(event)) {
      const key = event.key;
      const currentValue = event.target.value;
      const selectionStart = event.target.selectionStart;
      const selectionEnd = event.target.selectionEnd;
      let newValue;
      if (selectionStart === selectionEnd) {
        newValue = currentValue.slice(0, selectionStart) + key + currentValue.slice(selectionStart);
      } else {
        newValue = currentValue.slice(0, selectionStart) + key + currentValue.slice(selectionEnd);
      }
      if (!this.keyFilterPattern.test(newValue)) {
        event.preventDefault();
        return false;
      }
    }
  }
  handleInput(event) {
    this.args.onInput?.(event);
  }
  handleChange(event) {
    this.args.onChange?.(event);
  }
  handleFocus(event) {
    this.args.onFocus?.(event);
  }
  handleBlur(event) {
    this.args.onBlur?.(event);
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<input id={{this.inputId}} type={{this.inputType}} class={{this.inputClass}} value={{@value}} placeholder={{@placeholder}} disabled={{@disabled}} readonly={{@readonly}} min={{this.min}} max={{this.max}} minlength={{this.minLength}} maxlength={{this.maxLength}} required={{this.isRequired}} aria-required={{this.isRequired}} aria-invalid=\"{{this.isInvalid}}\" aria-describedby=\"{{this.ariaDescribedBy}}\" aria-errormessage={{this.ariaErrorMessage}} {{on \"keydown\" this.handleKeydown}} {{on \"input\" this.handleInput}} {{on \"change\" this.handleChange}} {{on \"focus\" this.handleFocus}} {{on \"blur\" this.handleBlur}} ...attributes />\n\t", {
  strictMode: true,
  scope: () => ({
    on
  })
}), _UlxInput), _UlxInput), _applyDecoratedDescriptor(_class.prototype, "handleKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleInput", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleInput"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleBlur", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleBlur"), _class.prototype), _class);

export { UlxInput as default };
//# sourceMappingURL=index.js.map
