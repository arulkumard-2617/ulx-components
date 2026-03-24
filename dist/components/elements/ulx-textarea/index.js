import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { NAMESPACE } from '../../../utils/component-config.js';
import { normalizeRules, resolveKey, buildInputId, isRulesRequired, getConstraintValue, isInvalidState, buildInputClass, getKeyFilterPattern, isSpecialKey } from '../../../utils/input-util.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _UlxTextarea;
let UlxTextarea = (_class = (_UlxTextarea = class UlxTextarea extends Component {
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
  get textareaId() {
    return buildInputId(NAMESPACE, this.args.id, this.key);
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-textarea";
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
  get isInvalid() {
    const {
      invalid,
      error: errorArg
    } = this.args;
    const error = errorArg ?? this.fieldContext?.error;
    return isInvalidState(invalid, error);
  }
  get textareaClass() {
    const {
      size,
      filled,
      disabled,
      readonly,
      value,
      customClass
    } = this.args;
    const parts = [buildInputClass({
      isTextarea: true,
      size,
      filled,
      invalid: this.isInvalid,
      disabled,
      readonly,
      value
    })];
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
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
  get keyFilterPattern() {
    return getKeyFilterPattern(this.args.keyfilter);
  }
  handleKeydown(event) {
    if (this.args.onKeydown) {
      this.args.onKeydown(event);
    }
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
      if (!matchesKeyFilter(this.keyFilterPattern, newValue)) {
        event.preventDefault();
        return false;
      }
    }
  }
  handleInput(event) {
    this.args.onInput?.(event);
  }
  handleChange(event) {
    if (this.args.onChange) {
      this.args.onChange(event);
    }
  }
  handleFocus(event) {
    this.args.onFocus?.(event);
  }
  handleBlur(event) {
    this.args.onBlur?.(event);
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<textarea id={{this.textareaId}} class={{this.textareaClass}} value={{@value}} placeholder={{@placeholder}} disabled={{@disabled}} readonly={{@readonly}} minlength={{this.minLength}} maxlength={{this.maxLength}} required={{this.isRequired}} aria-required={{this.isRequired}} aria-invalid={{if this.isInvalid \"true\" \"false\"}} aria-describedby={{this.ariaDescribedBy}} aria-errormessage={{this.ariaErrorMessage}} data-qa={{this.rootDataQa}} {{on \"keydown\" this.handleKeydown}} {{on \"input\" this.handleInput}} {{on \"change\" this.handleChange}} {{on \"focus\" this.handleFocus}} {{on \"blur\" this.handleBlur}} ...attributes></textarea>\n\t", {
  strictMode: true,
  scope: () => ({
    on
  })
}), _UlxTextarea), _UlxTextarea), _applyDecoratedDescriptor(_class.prototype, "handleKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleInput", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleInput"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleBlur", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleBlur"), _class.prototype), _class);

export { UlxTextarea as default };
//# sourceMappingURL=index.js.map
