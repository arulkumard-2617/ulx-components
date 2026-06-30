import Component from "@glimmer/component";
import { action } from "@ember/object";
import UlxButton from "../ulx-button/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import { joinClassNames } from "../../utils/class-names";
import { t } from "../../utils/i18n";
import { getFooterAlignmentClasses } from "./footer-alignment.js";

/**
 * Modal footer subcomponent.
 * Displays action buttons (typically Cancel and Confirm/Done).
 * Done and Cancel buttons automatically show loading state when their callbacks return Promises.
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
 * @param {Function} [onCancel] - Callback when cancel button is clicked; may return a Promise
 * @param {Function} [onDone] - Callback when done button is clicked; may return a Promise
 * @param {boolean} [doneButtonDisabled=false] - Disable done button
 * @param {boolean} [cancelButtonDisabled=false] - Disable cancel button
 * @param {string} [cancelButtonCustomClass] - Extra class on the cancel button
 * @param {'primary'|'secondary'|'success'|'info'|'warning'|'help-button'|'danger'|'white'} [doneButtonVariant='primary'] - Done/confirm button variant
 * @param {string} [alignment="end"] - Footer alignment: "start", "center", "end", "space-between"
 * @param {string} [footerClassName] - Extra class for the footer root (applied next to dialog-footer)
 */
export default class UlxModalFooter extends Component {
	get cancelLabel() {
		return this.args.cancelLabel || t("label.cancel");
	}

	get doneLabel() {
		return this.args.doneLabel || t("label.confirm");
	}

	get hideCancelButton() {
		return this.args.hideCancelButton ?? false;
	}

	get hideDoneButton() {
		return this.args.hideDoneButton ?? false;
	}

	get doneButtonVariant() {
		return this.args.doneButtonVariant ?? "primary";
	}

	get footerClasses() {
		return joinClassNames("dialog-footer", this.args.footerClassName);
	}

	get footerAlignmentClasses() {
		return getFooterAlignmentClasses(this.args.alignment);
	}

	@action
	handleCancel() {
		return this.args.onCancel?.();
	}

	@action
	handleDone() {
		return this.args.onDone?.();
	}

	<template>
		{{#unless @hideFooter}}
			<div class={{this.footerClasses}} data-qa="ulx-modal-footer" ...attributes>
				<div class={{this.footerAlignmentClasses}}>
					{{#unless this.hideCancelButton}}
						<UlxButton
							@label={{this.cancelLabel}}
							@variant="basic"
							@customClass={{@cancelButtonCustomClass}}
							@disabled={{@cancelButtonDisabled}}
							data-qa="ulx-modal-cancel"
							@onClick={{this.handleCancel}}
						/>
					{{/unless}}

					{{#unless this.hideDoneButton}}
						<UlxIconButton
							@label={{this.doneLabel}}
							@submittingLabel={{@submittingLabel}}
							@variant={{this.doneButtonVariant}}
							@disabled={{@doneButtonDisabled}}
							@dataQa="ulx-modal-done"
							@onClick={{this.handleDone}}
						/>
					{{/unless}}
				</div>
			</div>
		{{/unless}}
	</template>
}
