import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import UlxButton from '../../elements/ulx-button/index.js';
import UlxIconButton from '../../elements/ulx-icon-button/index.js';
import { joinClassNames } from '../../../utils/class-names.js';
import { t } from '../../../utils/i18n.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _UlxPopupFooter;
let UlxPopupFooter = (_class = (_UlxPopupFooter = class UlxPopupFooter extends Component {
  get footerWrapperClass() {
    return joinClassNames("popup-footer", this.args.footerClassName);
  }
  get tertiaryLabel() {
    return this.args.tertiaryButtonLabel ?? this.args.tertiaryLabel;
  }
  get cancelLabel() {
    return this.args.cancelLabel || t("lbl.cancel");
  }
  get doneLabel() {
    return this.args.doneLabel || t("lbl.confirm");
  }
  get showTertiaryButton() {
    return !(this.args.hideTertiaryButton ?? true) && this.tertiaryLabel;
  }
  get tertiaryIconLeft() {
    const {
      tertiaryButtonIcon,
      tertiaryIconPos = "left"
    } = this.args;
    return tertiaryIconPos === "right" ? undefined : tertiaryButtonIcon;
  }
  get tertiaryIconRight() {
    const {
      tertiaryButtonIcon,
      tertiaryIconPos = "left"
    } = this.args;
    return tertiaryIconPos === "right" ? tertiaryButtonIcon : undefined;
  }
  get hideCancelButton() {
    return this.args.hideCancelButton ?? false;
  }
  get hideDoneButton() {
    return this.args.hideDoneButton ?? false;
  }
  handleTertiary(event) {
    event?.preventDefault();
    this.args.onTertiary?.();
  }
  handleCancel(event) {
    event?.preventDefault();
    this.args.onCancel?.();
  }
  handleDone(event) {
    event?.preventDefault();
    this.args.onDone?.();
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.footerWrapperClass}} data-qa={{@dataQa}}>\n\t\t\t{{#if this.showTertiaryButton}}\n\t\t\t\t<UlxIconButton @label={{this.tertiaryLabel}} @iconLeft={{this.tertiaryIconLeft}} @iconRight={{this.tertiaryIconRight}} @variant=\"link\" {{on \"click\" this.handleTertiary}} />\n\t\t\t{{/if}}\n\t\t\t{{#unless this.hideCancelButton}}\n\t\t\t\t<UlxButton @label={{this.cancelLabel}} @variant=\"outlined\" {{on \"click\" this.handleCancel}} />\n\t\t\t{{/unless}}\n\t\t\t{{#unless this.hideDoneButton}}\n\t\t\t\t<UlxButton @label={{this.doneLabel}} @variant=\"primary\" {{on \"click\" this.handleDone}} />\n\t\t\t{{/unless}}\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    UlxIconButton,
    on,
    UlxButton
  })
}), _UlxPopupFooter), _UlxPopupFooter), _applyDecoratedDescriptor(_class.prototype, "handleTertiary", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleTertiary"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleCancel", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleCancel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleDone", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleDone"), _class.prototype), _class);

export { UlxPopupFooter as default };
//# sourceMappingURL=footer.js.map
