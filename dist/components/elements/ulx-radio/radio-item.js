import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxRadioItem;
class UlxRadioItem extends Component {
  get isChecked() {
    return !!this.args.checked;
  }
  get resolvedSize() {
    return this.args.size ?? "m-size";
  }
  get resolvedVariant() {
    return this.args.filled ? "filled" : "outlined";
  }
  get baseClass() {
    return getComponentClass("radiobutton");
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-radio-item";
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
    this.isChecked && parts.push("checked");
    // Custom classes
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get inputClass() {
    // `radio.less` uses unprefixed inner class hooks.
    return "radiobutton-input";
  }
  get boxClass() {
    const {
      disabled = false
    } = this.args;
    const parts = ["radiobutton-box"];
    disabled && parts.push("disabled");
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get iconClass() {
    // NOTE: `radio.less` includes styles that key off both the parent
    // `.checked` and the icon's own `.checked` class (variant-dependent).
    const {
      disabled = false
    } = this.args;
    const parts = ["radiobutton-icon"];
    this.isChecked && parts.push("checked");
    disabled && parts.push("disabled");
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get hasItemLabelText() {
    const v = this.args.itemLabel;
    return typeof v === "string" && v.length > 0;
  }
  get itemLabelClass() {
    const {
      disabled = false
    } = this.args;
    const parts = ["radiobutton-label"];
    disabled && parts.push("disabled");
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
}
_UlxRadioItem = UlxRadioItem;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.wrapperClass}} data-qa={{this.rootDataQa}}>\n\t\t\t<input id={{@id}} class={{this.inputClass}} aria-invalid={{if @invalid \"true\" \"false\"}} aria-describedby={{@ariaDescribedBy}} aria-errormessage={{@ariaErrorMessage}} type=\"radio\" checked={{@checked}} name={{@name}} value={{@value}} disabled={{@disabled}} required={{@required}} aria-required={{@required}} data-qa=\"ulx-radio-item-input\" {{on \"change\" @onChange}} ...attributes />\n\n\t\t\t<div class={{this.boxClass}} data-qa=\"ulx-radio-item-box\">\n\t\t\t\t<div class={{this.iconClass}}></div>\n\t\t\t</div>\n\n\t\t\t{{#if (has-block \"itemLabel\")}}\n\t\t\t\t<label for={{@id}} class={{this.itemLabelClass}} data-qa=\"ulx-radio-item-label\">\n\t\t\t\t\t{{yield to=\"itemLabel\"}}\n\t\t\t\t\t{{#if @showRequiredStar}}\n\t\t\t\t\t\t<span class=\"fg-red\" aria-hidden=\"true\">*</span>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</label>\n\t\t\t{{else if this.hasItemLabelText}}\n\t\t\t\t<label for={{@id}} class={{this.itemLabelClass}} data-qa=\"ulx-radio-item-label\">\n\t\t\t\t\t{{@itemLabel}}\n\t\t\t\t\t{{#if @showRequiredStar}}\n\t\t\t\t\t\t<span class=\"fg-red\" aria-hidden=\"true\">*</span>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</label>\n\t\t\t{{/if}}\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    on
  })
}), _UlxRadioItem);

export { UlxRadioItem as default };
//# sourceMappingURL=radio-item.js.map
