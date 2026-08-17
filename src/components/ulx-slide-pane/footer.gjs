import Component from "@glimmer/component";
import { action } from "@ember/object";
import UlxButton from "../ulx-button/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import { t } from "../../utils/i18n";

/**
 * Slide pane footer subcomponent.
 * Displays action buttons (typically Cancel and Confirm/Done).
 * Done and Cancel buttons automatically show loading state when their callbacks return Promises.
 * Can be customized using the :footer named block on UlxSlidePane.
 *
 * @class UlxSlidePaneFooter
 * @param {boolean} [hideFooter=false] - Hide the footer entirely
 * @param {boolean} [hideCancelButton=false] - Hide the cancel button
 * @param {boolean} [hideDoneButton=false] - Hide the done/confirm button
 * @param {boolean} [showBackButton=false] - Show the back button (for nested slide panes)
 * @param {string} [cancelLabel="Cancel"] - Label for cancel button
 * @param {string} [doneLabel="Confirm"] - Label for done/confirm button
 * @param {string} [submittingLabel] - Label for done button during submission (defaults to doneLabel)
 * @param {string} [backLabel="Back"] - Label for back button
 * @param {Function} [onCancel] - Callback when cancel button is clicked; may return a Promise
 * @param {Function} [onDone] - Callback when done button is clicked; may return a Promise
 * @param {Function} [onBack] - Callback when back button is clicked (nested slide panes)
 * @param {boolean} [doneButtonDisabled=false] - Disable done button
 * @param {boolean} [cancelButtonDisabled=false] - Disable cancel button
 * @param {string} [cancelButtonDataQa="cancel-button"] - data-qa for cancel button
 * @param {string} [doneButtonDataQa="done-button"] - data-qa for done button
 * @param {string} [backButtonDataQa="back-button"] - data-qa for back button
 * @param {string} [alignment="end"] - Footer alignment: "start", "center", "end", "space-between"
 * @param {string} [footerClassName] - Extra class for the footer root (applied next to slidepane-footer)
 */
export default class UlxSlidePaneFooter extends Component {
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

	get showBackButton() {
		return this.args.showBackButton === true && typeof this.args.onBack === "function";
	}

	get backLabel() {
		return this.args.backLabel || t("label.back");
	}

	get cancelButtonDataQa() {
		return this.args.cancelButtonDataQa ?? "cancel-button";
	}

	get doneButtonDataQa() {
		return this.args.doneButtonDataQa ?? "done-button";
	}

	get backButtonDataQa() {
		return this.args.backButtonDataQa ?? "back-button";
	}

	get footerClasses() {
		const { footerClassName } = this.args;
		const parts = ["slidepane-footer"];
		footerClassName && parts.push(footerClassName);
		return parts.filter(Boolean).join(" ");
	}

	@action
	handleCancel() {
		return this.args.onCancel?.();
	}

	@action
	handleDone() {
		return this.args.onDone?.();
	}

	@action
	handleBack() {
		return this.args.onBack?.();
	}

	<template>
		{{#unless @hideFooter}}
			<div class={{this.footerClasses}} ...attributes>
				{{#if (has-block)}}
					{{yield}}
				{{else}}
					{{#if this.showBackButton}}
						<UlxButton
							@label={{this.backLabel}}
							@variant="basic"
							@dataQa={{this.backButtonDataQa}}
							@onClick={{this.handleBack}}
						/>
					{{/if}}

					{{#unless this.hideCancelButton}}
						<UlxButton
							@label={{this.cancelLabel}}
							@variant="basic"
							@disabled={{@cancelButtonDisabled}}
							@dataQa={{this.cancelButtonDataQa}}
							@onClick={{this.handleCancel}}
						/>
					{{/unless}}

					{{#unless this.hideDoneButton}}
						<UlxButton
							@label={{this.doneLabel}}
							@submittingLabel={{@submittingLabel}}
							@variant="primary"
							@disabled={{@doneButtonDisabled}}
							@dataQa={{this.doneButtonDataQa}}
							@onClick={{this.handleDone}}
						/>
					{{/unless}}
				{{/if}}
			</div>
		{{/unless}}
	</template>
}
