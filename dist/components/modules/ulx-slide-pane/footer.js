import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import UlxButton from '../../elements/ulx-button/index.js';
import { t } from '../../../utils/i18n.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _UlxSlidePaneFooter;
let UlxSlidePaneFooter = (_class = (_UlxSlidePaneFooter = class UlxSlidePaneFooter extends Component {
  get cancelLabel() {
    return this.args.cancelLabel || t("lbl.cancel");
  }
  get doneLabel() {
    const {
      submitting,
      submittingLabel,
      doneLabel
    } = this.args;
    if (submitting && submittingLabel) {
      return submittingLabel;
    }
    return doneLabel || t("lbl.confirm");
  }
  get hideCancelButton() {
    return this.args.hideCancelButton ?? false;
  }
  get hideDoneButton() {
    return this.args.hideDoneButton ?? false;
  }
  get showBackButton() {
    return this.args.showBackButton === true && typeof this.args.onBack === "function";
  }
  get backLabel() {
    return this.args.backLabel || t("lbl.back");
  }
  get submitting() {
    return this.args.submitting ?? false;
  }
  get doneButtonDisabled() {
    return this.submitting || (this.args.doneButtonDisabled ?? false);
  }
  get cancelButtonDisabled() {
    return this.submitting || (this.args.cancelButtonDisabled ?? false);
  }
  get footerClasses() {
    const {
      footerClassName
    } = this.args;
    const parts = ["slidepane-footer"];
    footerClassName && parts.push(footerClassName);
    return parts.filter(Boolean).join(" ");
  }
  handleCancel(event) {
    event.preventDefault();
    this.args.onCancel?.();
  }
  handleDone(event) {
    event.preventDefault();
    this.args.onDone?.();
  }
  handleBack(event) {
    event.preventDefault();
    this.args.onBack?.();
  }
}, setComponentTemplate(precompileTemplate("\n\t\t{{#unless @hideFooter}}\n\t\t\t<div class={{this.footerClasses}} ...attributes>\n\t\t\t\t{{#if (has-block)}}\n\t\t\t\t\t{{yield}}\n\t\t\t\t{{else}}\n\t\t\t\t\t<div class=\"footer-left-actions\">\n\t\t\t\t\t\t{{#if this.showBackButton}}\n\t\t\t\t\t\t\t<UlxButton @label={{this.backLabel}} @variant=\"basic\" {{on \"click\" this.handleBack}} />\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"footer-right-actions\">\n\t\t\t\t\t\t{{#unless this.hideCancelButton}}\n\t\t\t\t\t\t\t<UlxButton @label={{this.cancelLabel}} @variant=\"secondary\" @disabled={{this.cancelButtonDisabled}} {{on \"click\" this.handleCancel}} />\n\t\t\t\t\t\t{{/unless}}\n\n\t\t\t\t\t\t{{#unless this.hideDoneButton}}\n\t\t\t\t\t\t\t<UlxButton @label={{this.doneLabel}} @variant=\"primary\" @disabled={{this.doneButtonDisabled}} {{on \"click\" this.handleDone}} />\n\t\t\t\t\t\t{{/unless}}\n\t\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\t\t{{/unless}}\n\t", {
  strictMode: true,
  scope: () => ({
    UlxButton,
    on
  })
}), _UlxSlidePaneFooter), _UlxSlidePaneFooter), _applyDecoratedDescriptor(_class.prototype, "handleCancel", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleCancel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleDone", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleDone"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleBack", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleBack"), _class.prototype), _class);

export { UlxSlidePaneFooter as default };
//# sourceMappingURL=footer.js.map
