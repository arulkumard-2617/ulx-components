import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import UlxButton from '../../elements/ulx-button/index.js';
import { joinClassNames } from '../../../utils/class-names.js';
import { t } from '../../../utils/i18n.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _UlxModalFooter;
const FOOTER_ALIGNMENT_TO_JUSTIFY = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  "space-between": "space-between"
};
/**
 * Modal footer subcomponent.
 * Displays action buttons (typically Cancel and Confirm/Done).
 * Can be customized using the :footer named block on UlxModal.
 *
 * ## Usage
 * ```gjs
 * <UlxModalFooter
 *   @cancelLabel="Cancel"
 *   @doneLabel="Confirm"
 *   @onCancel={{this.handleCancel}}
 *   @onDone={{this.handleDone}}
 * />
 * ```
 *
 * ## Keyboard Support
 * - Enter/Space on buttons triggers the respective action
 * - Actions automatically close the modal
 *
 * @class UlxModalFooter
 * @param {boolean} [hideFooter=false] - Hide the footer entirely
 * @param {boolean} [hideCancelButton=false] - Hide the cancel button
 * @param {boolean} [hideDoneButton=false] - Hide the done/confirm button
 * @param {string} [cancelLabel] - Cancel label (defaults to i18n cancel)
 * @param {string} [doneLabel] - Done/confirm label (defaults to i18n confirm)
 * @param {string} [submittingLabel] - Label for done button during submission (defaults to doneLabel)
 * @param {Function} [onCancel] - Callback when cancel button is clicked
 * @param {Function} [onDone] - Callback when done button is clicked
 * @param {boolean} [submitting=false] - Disable both buttons during async operation
 * @param {boolean} [doneButtonDisabled=false] - Disable done button
 * @param {boolean} [cancelButtonDisabled=false] - Disable cancel button
 * @param {string} [alignment="end"] - Footer alignment: "start", "center", "end", "space-between"
 * @param {string} [footerClassName] - Extra class for the footer root (applied next to dialog-footer)
 */
let UlxModalFooter = (_class = (_UlxModalFooter = class UlxModalFooter extends Component {
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
    return joinClassNames("dialog-footer", this.args.footerClassName);
  }
  get footerStyle() {
    const alignment = this.args.alignment || "end";
    return `justify-content: ${FOOTER_ALIGNMENT_TO_JUSTIFY[alignment] ?? FOOTER_ALIGNMENT_TO_JUSTIFY.end}`;
  }
  handleCancel(event) {
    event.preventDefault();
    this.args.onCancel?.();
  }
  handleDone(event) {
    event.preventDefault();
    this.args.onDone?.();
  }
}, setComponentTemplate(precompileTemplate("\n\t\t{{#unless @hideFooter}}\n\t\t\t<div class={{this.footerClasses}} data-qa=\"ulx-modal-footer\" style={{this.footerStyle}} ...attributes>\n\t\t\t\t{{#if (has-block)}}\n\t\t\t\t\t{{yield}}\n\t\t\t\t{{else}}\n\t\t\t\t\t{{#unless this.hideCancelButton}}\n\t\t\t\t\t\t<UlxButton @label={{this.cancelLabel}} @variant=\"secondary\" @disabled={{this.cancelButtonDisabled}} data-qa=\"ulx-modal-cancel\" {{on \"click\" this.handleCancel}} />\n\t\t\t\t\t{{/unless}}\n\n\t\t\t\t\t{{#unless this.hideDoneButton}}\n\t\t\t\t\t\t<UlxButton @label={{this.doneLabel}} @variant=\"primary\" @disabled={{this.doneButtonDisabled}} data-qa=\"ulx-modal-done\" {{on \"click\" this.handleDone}} />\n\t\t\t\t\t{{/unless}}\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\t\t{{/unless}}\n\t", {
  strictMode: true,
  scope: () => ({
    UlxButton,
    on
  })
}), _UlxModalFooter), _UlxModalFooter), _applyDecoratedDescriptor(_class.prototype, "handleCancel", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleCancel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleDone", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleDone"), _class.prototype), _class);

export { UlxModalFooter as default };
//# sourceMappingURL=footer.js.map
