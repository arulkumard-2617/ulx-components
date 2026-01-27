import { NAMESPACE } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

const ButtonContent = setComponentTemplate(precompileTemplate("\n    {{#if @hasIconLeftBlock}}\n        {{yield to=\"iconLeft\"}}\n    {{else if @iconLeft}}\n        <span class=\"icon left\">{{@iconLeft}}</span>\n    {{/if}}\n    {{#if @label}}\n        <span class=\"button-label\">{{@label}}</span>\n    {{/if}}\n    {{#if @isLoading}}\n        <i class=\"{{NAMESPACE}}-button-loading-icon left\"><span class=\"spinner\"></span></i>\n    {{/if}}\n    {{#if @hasIconRightBlock}}\n        {{yield to=\"iconRight\"}}\n    {{else if @iconRight}}\n        <span class=\"icon right\">{{@iconRight}}</span>\n    {{/if}}\n", {
  strictMode: true,
  scope: () => ({
    NAMESPACE
  })
}), templateOnly());

export { ButtonContent as default };
//# sourceMappingURL=_content.js.map
