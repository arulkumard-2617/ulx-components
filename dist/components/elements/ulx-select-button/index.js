import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { getComponentClass } from '../../../utils/component-config.js';
import { isInvalidState, areOptionValuesEqual } from '../../../utils/input-util.js';
import UlxIcon from '../ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _UlxSelectButton;
let UlxSelectButton = (_class = (_UlxSelectButton = class UlxSelectButton extends Component {
  get baseClass() {
    return getComponentClass("selectbutton");
  }
  get buttonClass() {
    return getComponentClass("selectbutton-button");
  }
  get labelClass() {
    return getComponentClass("selectbutton-label");
  }
  get iconClass() {
    return getComponentClass("selectbutton-icon");
  }
  get rootDataQa() {
    return this.args.dataQa ?? this.baseClass;
  }
  get optionsList() {
    return Array.isArray(this.args.options) ? this.args.options : [];
  }
  get optionLabelKey() {
    return this.args.optionLabel ?? "label";
  }
  get optionValueKey() {
    return this.args.optionValue ?? "value";
  }
  get isMultiple() {
    return !!this.args.multiple;
  }
  get isDisabled() {
    return !!this.args.disabled;
  }
  get isInvalid() {
    return isInvalidState(this.args.invalid, this.args.error);
  }
  get rootClasses() {
    const {
      size = "m-size",
      variant = "primary",
      styleVariant,
      stretch = false,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    parts.push(size);
    parts.push(variant);
    styleVariant && parts.push(styleVariant);
    this.isMultiple && parts.push("multiple");
    this.isDisabled && parts.push("disabled");
    this.isInvalid && parts.push("invalid");
    stretch && parts.push("stretch");
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get groupId() {
    return this.args.id ?? `${this.baseClass}-${guidFor(this)}`;
  }
  getResolved(option, key) {
    if (option == null) return undefined;
    const propertyPath = key ?? this.optionLabelKey;
    const pathSegments = propertyPath.split(".");
    let currentValue = option;
    for (const segment of pathSegments) {
      currentValue = currentValue?.[segment];
    }
    return currentValue;
  }
  getOptionLabel(option) {
    if (option == null) return "";
    if (typeof option === "object" && option !== null) {
      const label = this.getResolved(option, this.optionLabelKey);
      return label != null ? String(label) : "";
    }
    return String(option);
  }
  getOptionValue(option) {
    if (option == null) return undefined;
    if (typeof option === "object" && option !== null) {
      const val = this.getResolved(option, this.optionValueKey);
      return val !== undefined ? val : option;
    }
    return option;
  }
  isOptionDisabled(option) {
    if (option == null) return true;
    const {
      optionDisabled
    } = this.args;
    if (typeof optionDisabled === "function") return optionDisabled(option);
    if (typeof optionDisabled === "string") return !!this.getResolved(option, optionDisabled);
    return !!option?.disabled;
  }
  isOptionSelected(option) {
    const optVal = this.getOptionValue(option);
    const value = this.args.value;
    if (this.isMultiple && Array.isArray(value)) {
      return value.some(v => this.valuesEqual(v, optVal));
    }
    return this.valuesEqual(value, optVal);
  }
  valuesEqual(a, b) {
    return areOptionValuesEqual(a, b);
  }
  getButtonClasses(option, index) {
    const parts = [this.buttonClass];
    const selected = this.isOptionSelected(option);
    const optionDisabled = this.isOptionDisabled(option);
    const total = this.optionsList.length;
    if (index === 0) parts.push("first");else if (index === total - 1) parts.push("last");else parts.push("middle");
    selected && parts.push("selected");
    optionDisabled && parts.push("disabled");
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  handleOptionClick(option, event) {
    if (this.isDisabled) {
      event.preventDefault();
      return;
    }
    if (this.isOptionDisabled(option)) {
      event.preventDefault();
      return;
    }
    const optVal = this.getOptionValue(option);
    const currentValue = this.args.value;
    let nextValue;
    if (this.isMultiple) {
      const arr = Array.isArray(currentValue) ? [...currentValue] : [];
      const idx = arr.findIndex(v => this.valuesEqual(v, optVal));
      if (idx >= 0) {
        arr.splice(idx, 1);
      } else {
        arr.push(optVal);
      }
      nextValue = arr;
    } else {
      nextValue = this.isOptionSelected(option) ? currentValue : optVal;
    }
    if (typeof this.args.onChange === "function") {
      this.args.onChange(nextValue, event);
    }
  }
  isButtonDisabled(option) {
    return this.isDisabled || this.isOptionDisabled(option);
  }
  getOptionIconComponentClass(option) {
    return option?.iconComponentClass ?? "bs-icons1";
  }
  handleKeyDown(option, event) {
    if (event.key !== " " && event.key !== "Enter") return;
    event.preventDefault();
    this.handleOptionClick(option, event);
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div id={{this.groupId}} class={{this.rootClasses}} role=\"group\" aria-label={{@ariaLabel}} data-qa={{this.rootDataQa}} ...attributes>\n\t\t\t{{#each this.optionsList as |option index|}}\n\t\t\t\t<button type=\"button\" class={{this.getButtonClasses option index}} role=\"button\" aria-pressed=\"{{this.isOptionSelected option}}\" aria-label={{this.getOptionLabel option}} disabled={{this.isButtonDisabled option}} tabindex={{if (this.isButtonDisabled option) \"-1\" \"0\"}} {{on \"click\" (fn this.handleOptionClick option)}} {{on \"keydown\" (fn this.handleKeyDown option)}}>\n\t\t\t\t\t{{#if (has-block \"item\")}}\n\t\t\t\t\t\t{{yield option to=\"item\"}}\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t{{#if option.icon}}\n\t\t\t\t\t\t\t<span class=\"{{this.iconClass}}\n\t\t\t\t\t\t\t\t\t{{if (this.isOptionSelected option) \"selected\"}}\n\t\t\t\t\t\t\t\t\t{{if (this.isOptionDisabled option) \"disabled\"}}\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t<UlxIcon @iconName={{option.icon}} @type=\"font\" @componentClass={{this.getOptionIconComponentClass option}} aria-hidden=\"true\" />\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t<span class=\"{{this.labelClass}}\n\t\t\t\t\t\t\t\t{{if (this.isOptionSelected option) \"selected\"}}\n\t\t\t\t\t\t\t\t{{if (this.isOptionDisabled option) \"disabled\"}}\">\n\t\t\t\t\t\t\t{{this.getOptionLabel option}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</button>\n\t\t\t{{/each}}\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    on,
    fn,
    UlxIcon
  })
}), _UlxSelectButton), _UlxSelectButton), _applyDecoratedDescriptor(_class.prototype, "getResolved", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getResolved"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getOptionLabel", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getOptionLabel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getOptionValue", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getOptionValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isOptionDisabled", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isOptionDisabled"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isOptionSelected", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isOptionSelected"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getButtonClasses", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getButtonClasses"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleOptionClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleOptionClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isButtonDisabled", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isButtonDisabled"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getOptionIconComponentClass", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getOptionIconComponentClass"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeyDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeyDown"), _class.prototype), _class);

export { UlxSelectButton as default };
//# sourceMappingURL=index.js.map
