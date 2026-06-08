import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import UlxButton from "../ulx-button/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import { joinClassNames } from "../../utils/class-names";
import { t } from "../../utils/i18n";

const FOOTER_ALIGNMENT_TO_JUSTIFY = {
	start: "flex-start",
	center: "center",
	end: "flex-end",
	"space-between": "space-between"
};

/**
 * Modal footer subcomponent.
 * Displays action buttons (typically Cancel and Confirm/Done). The default Done
 * control uses `UlxIconButton` so async loading shows the affix spinner.
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
		const { submitting, submittingLabel, doneLabel } = this.args;
		if (submitting && submittingLabel) {
			return submittingLabel;
		}
		return doneLabel || t("label.confirm");
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

	get doneButtonVariant() {
		return this.args.doneButtonVariant ?? "primary";
	}

	get footerClasses() {
		return joinClassNames("dialog-footer", this.args.footerClassName);
	}

	get footerStyle() {
		const { alignment = "end" } = this.args;
		return `justify-content: ${FOOTER_ALIGNMENT_TO_JUSTIFY[alignment] ?? FOOTER_ALIGNMENT_TO_JUSTIFY.end}`;
	}

	@action
	handleCancel(event) {
		event.preventDefault();
		this.args.onCancel?.();
	}

	@action
	handleDone(event) {
		event.preventDefault();
		this.args.onDone?.();
	}

	<template>
		{{#unless @hideFooter}}
			<div
				class={{this.footerClasses}}
				data-qa="ulx-modal-footer"
				style={{this.footerStyle}}
				...attributes
			>
				{{#unless this.hideCancelButton}}
					<UlxButton
						@label={{this.cancelLabel}}
						@variant="basic"
						@customClass={{@cancelButtonCustomClass}}
						@disabled={{this.cancelButtonDisabled}}
						data-qa="ulx-modal-cancel"
						{{on "click" this.handleCancel}}
					/>
				{{/unless}}

				{{#unless this.hideDoneButton}}
					<UlxIconButton
						@label={{this.doneLabel}}
						@variant={{this.doneButtonVariant}}
						@loading={{this.submitting}}
						@disabled={{this.doneButtonDisabled}}
						@dataQa="ulx-modal-done"
						@onClick={{this.handleDone}}
					/>
				{{/unless}}
			</div>
		{{/unless}}
	</template>
}
