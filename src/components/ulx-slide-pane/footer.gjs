import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import UlxButton from "../ulx-button/index.gjs";
import { t } from "../../utils/i18n";

/**
 * Slide pane footer subcomponent.
 * Displays action buttons (typically Cancel and Confirm/Done).
 * Can be customized using the :footer named block on UlxSlidePane.
 *
 * @class UlxSlidePaneFooter
 * @param {boolean} [hideFooter=false] - Hide the footer entirely
 * @param {boolean} [hideCancelButton=false] - Hide the cancel button
 * @param {boolean} [hideDoneButton=false] - Hide the done/confirm button
 * @param {boolean} [showBackButton=false] - Show the back button (for nested slide panes)
 * @param {string} [cancelLabel="Cancel"] - Label for cancel button
 * @param {string} [doneLabel="Confirm"] - Label for done/confirm button
 * @param {string} [backLabel="Back"] - Label for back button
 * @param {string} [submittingLabel] - Label for done button during submission (defaults to doneLabel)
 * @param {Function} [onCancel] - Callback when cancel button is clicked
 * @param {Function} [onDone] - Callback when done button is clicked
 * @param {Function} [onBack] - Callback when back button is clicked (nested slide panes)
 * @param {boolean} [submitting=false] - Disable both buttons during async operation
 * @param {boolean} [doneButtonDisabled=false] - Disable done button
 * @param {boolean} [cancelButtonDisabled=false] - Disable cancel button
 * @param {string} [alignment="end"] - Footer alignment: "start", "center", "end", "space-between"
 * @param {string} [footerClassName] - Extra class for the footer root (applied next to slidepane-footer)
 */
export default class UlxSlidePaneFooter extends Component {
	get cancelLabel() {
		return this.args.cancelLabel || t("lbl.cancel");
	}

	get doneLabel() {
		const { submitting, submittingLabel, doneLabel } = this.args;
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
		const { footerClassName } = this.args;
		const parts = ["slidepane-footer"];
		footerClassName && parts.push(footerClassName);
		return parts.filter(Boolean).join(" ");
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

	@action
	handleBack(event) {
		event.preventDefault();
		this.args.onBack?.();
	}

	<template>
		{{#unless @hideFooter}}
			<div class={{this.footerClasses}} ...attributes>
				{{#if (has-block)}}
					{{yield}}
				{{else}}
					{{#if this.showBackButton}}
						<UlxButton @label={{this.backLabel}} @variant="basic" {{on "click" this.handleBack}} />
					{{/if}}

					{{#unless this.hideCancelButton}}
						<UlxButton
							@label={{this.cancelLabel}}
							@variant="basic"
							@disabled={{this.cancelButtonDisabled}}
							{{on "click" this.handleCancel}}
						/>
					{{/unless}}

					{{#unless this.hideDoneButton}}
						<UlxButton
							@label={{this.doneLabel}}
							@variant="primary"
							@disabled={{this.doneButtonDisabled}}
							{{on "click" this.handleDone}}
						/>
					{{/unless}}
				{{/if}}
			</div>
		{{/unless}}
	</template>
}
