import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import UlxIcon from '../ulx-icon/index.js';
import tooltip from '../../../modifiers/tooltip.js';
import { or } from 'ember-truth-helpers';
import { buildFieldClass, normalizeRules, isRulesRequired, getConstraintValue } from '../../../utils/input-util.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxField;
class UlxField extends Component {
  get fieldClass() {
    return buildFieldClass(this.args.fieldClass);
  }
  get fieldId() {
    return this.args.fieldId ?? `ulx-field-${guidFor(this)}`;
  }
  // Rules
  get rules() {
    return normalizeRules(this.args.rules);
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
  get hasMeta() {
    return this.minLength != null || this.maxLength != null;
  }
  get metaText() {
    const parts = [];
    if (this.minLength != null) parts.push(this.minLength);
    if (this.maxLength != null) parts.push(this.maxLength);
    return parts.join(" / ");
  }
  // ARIA
  get describedBy() {
    const {
      helpText,
      error
    } = this.args;
    const id = this.fieldId;
    if (!id) return;
    const ids = [];
    helpText && ids.push(`${id}-help`);
    error && ids.push(`${id}-error`);
    return ids.length ? ids.join(" ") : undefined;
  }
  get errorId() {
    const {
      error
    } = this.args;
    const id = this.fieldId;
    return error && id ? `${id}-error` : undefined;
  }
  get hasHelpText() {
    return !!(this.args.helpText && this.fieldId);
  }
  get hasError() {
    return !!(this.args.error && this.fieldId);
  }
  get controlYieldHash() {
    const {
      rules,
      error
    } = this.args;
    return {
      key: this.fieldId,
      describedBy: this.describedBy,
      errorId: this.errorId,
      rules,
      error
    };
  }
}
_UlxField = UlxField;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.fieldClass}}>\n\n\t\t\t{{!-- LABEL (safe render) --}}\n\t\t\t{{#if (or (has-block \"label\") @label)}}\n\t\t\t\t<label for={{this.fieldId}}>\n\t\t\t\t\t<span class=\"label-text\">\n\n\t\t\t\t\t\t{{#if (has-block \"label\")}}\n\t\t\t\t\t\t\t{{yield to=\"label\"}}\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t{{@label}}\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if this.isRequired}}\n\t\t\t\t\t\t\t<span class=\"fg-red\" aria-hidden=\"true\">*</span>\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if @tooltipMessage}}\n\t\t\t\t\t\t\t<UlxIcon {{tooltip @tooltipMessage position=\"bottom\"}} @type=\"font\" @iconName=\"info-icon\" @size=\"s14\" />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t</span>\n\n\t\t\t\t\t{{#if this.hasMeta}}\n\t\t\t\t\t\t<span class=\"label-right\">{{this.metaText}}</span>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</label>\n\t\t\t{{/if}}\n\n\t\t\t{{yield this.controlYieldHash}}\n\n\t\t\t{{!-- HELP --}}\n\t\t\t{{#if (has-block \"helptext\")}}\n\t\t\t\t{{yield to=\"helptext\"}}\n\t\t\t{{else if this.hasHelpText}}\n\t\t\t\t<div id=\"{{this.fieldId}}-help\" class=\"help-text\">\n\t\t\t\t\t{{@helpText}}\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t{{!-- ERROR --}}\n\t\t\t{{#if (has-block \"error\")}}\n\t\t\t\t{{yield to=\"error\"}}\n\t\t\t{{else if this.hasError}}\n\t\t\t\t<div id=\"{{this.fieldId}}-error\" class=\"error-message fg-red\" role=\"alert\" aria-atomic=\"true\">\n\t\t\t\t\t*{{@error}}\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t{{!-- SUPPORTING --}}\n\t\t\t{{#if (has-block \"assistive\")}}\n\t\t\t\t{{yield to=\"assistive\"}}\n\t\t\t{{/if}}\n\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    or,
    UlxIcon,
    tooltip
  })
}), _UlxField);

export { UlxField as default };
//# sourceMappingURL=index.js.map
