import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import UlxButton from "../../elements/ulx-button/index.gjs";

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
		return this.args.cancelLabel || "Cancel";
	}

	get doneLabel() {
		const { submitting, submittingLabel, doneLabel } = this.args;
		if (submitting && submittingLabel) {
			return submittingLabel;
		}
		return doneLabel || "Confirm";
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
		return this.args.backLabel || "Back";
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
		const parts = ["slidepane-footer"];
		this.args.footerClassName && parts.push(this.args.footerClassName);
		return parts.filter(Boolean).join(" ");
	}

	@action
	handleCancel(event) {
		event.preventDefault();
		if (this.args.onCancel) {
			this.args.onCancel();
		}
	}

	@action
	handleDone(event) {
		event.preventDefault();
		if (this.args.onDone) {
			this.args.onDone();
		}
	}

	@action
	handleKeyDown(callback) {
		return (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				callback(event);
			}
		};
	}

	@action
	handleBack(event) {
		event.preventDefault();
		if (this.args.onBack) {
			this.args.onBack();
		}
	}

	<template>
		{{#unless @hideFooter}}
			<div class={{this.footerClasses}} ...attributes>
				{{#if (has-block)}}
					{{yield}}
				{{else}}
					<div class="footer-left-actions">
						{{#if this.showBackButton}}
							<UlxButton
								@label={{this.backLabel}}
								@variant="basic"
								{{on "click" this.handleBack}}
								{{on "keydown" (this.handleKeyDown this.handleBack)}}
							/>
						{{/if}}
					</div>

					<div class="footer-right-actions">
						{{#unless this.hideCancelButton}}
							<UlxButton
								@label={{this.cancelLabel}}
								@variant="secondary"
								@disabled={{this.cancelButtonDisabled}}
								{{on "click" this.handleCancel}}
								{{on "keydown" (this.handleKeyDown this.handleCancel)}}
							/>
						{{/unless}}

						{{#unless this.hideDoneButton}}
							<UlxButton
								@label={{this.doneLabel}}
								@variant="primary"
								@disabled={{this.doneButtonDisabled}}
								{{on "click" this.handleDone}}
								{{on "keydown" (this.handleKeyDown this.handleDone)}}
							/>
						{{/unless}}
					</div>
				{{/if}}
			</div>
		{{/unless}}
	</template>
}
