import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { getComponentClass } from '../../../utils/component-config.js';
import UlxIcon from '../ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxCheckboxItem;
class UlxCheckboxItem extends Component {
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-checkbox-item";
  }
  get isIndeterminate() {
    return !!this.args.indeterminate;
  }
  get isChecked() {
    return !!this.args.checked;
  }
  get baseClass() {
    return getComponentClass("checkbox");
  }
  get resolvedSize() {
    return this.args.size ?? "m-size";
  }
  get resolvedVariant() {
    return this.args.filled ? "filled" : "outlined";
  }
  get wrapperClass() {
    const {
      invalid = false,
      disabled = false,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    parts.push(this.resolvedSize);
    parts.push(this.resolvedVariant);
    // States
    invalid && parts.push("invalid");
    disabled && parts.push("disabled");
    // Visual state
    // For indeterminate, apply both "indeterminate" and "checked"
    // so styles targeting either state class are active.
    this.isIndeterminate && parts.push("indeterminate", "checked");
    !this.isIndeterminate && this.isChecked && parts.push("checked");
    // Custom classes
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get isUncheckedWithIcon() {
    return !this.isChecked && !this.isIndeterminate && this.args.uncheckIconName;
  }
  get checkboxIconClass() {
    const {
      disabled = false
    } = this.args;
    const parts = ["check-icon"];
    disabled && parts.push("disabled");
    this.isIndeterminate && parts.push("indeterminate");
    this.isUncheckedWithIcon && parts.push("unchecked");
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get checkboxIconName() {
    if (this.isChecked && !this.isIndeterminate) return "tick-thick-icon";
    if (this.isUncheckedWithIcon) return this.args.uncheckIconName;
    return undefined;
  }
  get ariaChecked() {
    return this.isIndeterminate ? "mixed" : undefined;
  }
  get hasItemLabelText() {
    const {
      itemLabel
    } = this.args;
    return typeof itemLabel === "string" && itemLabel.length > 0;
  }
  get itemLabelClass() {
    const {
      disabled = false
    } = this.args;
    const parts = ["checkbox-label"];
    disabled && parts.push("disabled");
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get checkboxIconSize() {
    return this.args.iconSize;
  }
}
_UlxCheckboxItem = UlxCheckboxItem;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.wrapperClass}} data-qa={{this.rootDataQa}}>\n\t\t\t<input id={{@id}} class=\"checkbox-input\" aria-invalid={{if @invalid \"true\" \"false\"}} aria-describedby={{@ariaDescribedBy}} aria-errormessage={{@ariaErrorMessage}} aria-checked={{this.ariaChecked}} type=\"checkbox\" checked={{@checked}} name={{@name}} value={{@value}} disabled={{@disabled}} required={{@required}} aria-required={{@required}} {{on \"change\" @onChange}} ...attributes />\n\n\t\t\t<div class=\"checkbox-box\">\n\t\t\t\t{{#if this.checkboxIconName}}\n\t\t\t\t\t<UlxIcon @type=\"font\" @iconName={{this.checkboxIconName}} @customClass={{this.checkboxIconClass}} @size={{this.checkboxIconSize}} @componentClass=\"bs-icons1\" />\n\t\t\t\t{{else if this.isIndeterminate}}\n\t\t\t\t\t<UlxIcon @customClass={{this.checkboxIconClass}} @size={{this.checkboxIconSize}}>\n\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" focusable=\"false\">\n\t\t\t\t\t\t\t<line x1=\"6\" y1=\"12\" x2=\"18\" y2=\"12\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\" />\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</UlxIcon>\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\n\t\t\t{{#unless @hideLabel}}\n\t\t\t\t{{#if (has-block \"itemLabel\")}}\n\t\t\t\t\t<label for={{@id}} class={{this.itemLabelClass}}>\n\t\t\t\t\t\t{{yield to=\"itemLabel\"}}\n\t\t\t\t\t\t{{#if @showRequiredStar}}\n\t\t\t\t\t\t\t<span class=\"fg-red\" aria-hidden=\"true\">*</span>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</label>\n\t\t\t\t{{else if this.hasItemLabelText}}\n\t\t\t\t\t<label for={{@id}} class={{this.itemLabelClass}}>\n\t\t\t\t\t\t{{@itemLabel}}\n\t\t\t\t\t\t{{#if @showRequiredStar}}\n\t\t\t\t\t\t\t<span class=\"fg-red\" aria-hidden=\"true\">*</span>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</label>\n\t\t\t\t{{/if}}\n\t\t\t{{/unless}}\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    on,
    UlxIcon
  })
}), _UlxCheckboxItem);

export { UlxCheckboxItem as default };
//# sourceMappingURL=checkbox-item.js.map
