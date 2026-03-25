import Component from '@glimmer/component';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxSegment;
class UlxSegment extends Component {
  get baseClass() {
    return getComponentClass("segment");
  }
  get rootClasses() {
    const {
      type,
      variant,
      borderColor,
      borderSide,
      attached,
      disabled = false,
      loading = false,
      inline = false,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    type && parts.push(type);
    variant && parts.push(variant);
    if (borderColor && borderSide) {
      parts.push(`border-${borderSide}-${borderColor}`);
    }
    if (attached) {
      parts.push("attached");
      attached !== "attached" && parts.push(attached);
    }
    disabled && parts.push("disabled");
    loading && parts.push("loading");
    if (type === "placeholder" && inline) {
      parts.push("inline");
    }
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get role() {
    return this.args.role ?? (this.args.type === "basic" ? undefined : "region");
  }
  get ariaLabel() {
    return this.args.ariaLabel;
  }
  get ariaLabelledBy() {
    return this.args.ariaLabelledBy;
  }
  get ariaDescribedBy() {
    return this.args.ariaDescribedBy;
  }
  get isDisabled() {
    return this.args.disabled === true;
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-segment";
  }
  get headerDataQa() {
    return `${this.rootDataQa}-header`;
  }
  get contentDataQa() {
    return `${this.rootDataQa}-content`;
  }
}
_UlxSegment = UlxSegment;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} data-qa={{this.rootDataQa}} role={{this.role}} aria-label={{this.ariaLabel}} aria-labelledby={{this.ariaLabelledBy}} aria-describedby={{this.ariaDescribedBy}} aria-disabled=\"{{this.isDisabled}}\" ...attributes>\n\t\t\t{{#if (has-block \"header\")}}\n\t\t\t\t<div class=\"segment-header\" data-qa={{this.headerDataQa}}>\n\t\t\t\t\t{{yield to=\"header\"}}\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t{{#if (has-block \"default\")}}\n\t\t\t\t<div class=\"segment-content\" data-qa={{this.contentDataQa}}>\n\t\t\t\t\t{{yield}}\n\t\t\t\t</div>\n\t\t\t{{else}}\n\t\t\t\t{{yield}}\n\t\t\t{{/if}}\n\t\t</div>\n\t", {
  strictMode: true
}), _UlxSegment);

export { UlxSegment as default };
//# sourceMappingURL=index.js.map
