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
 * @param {string} [cancelLabel="Cancel"] - Label for cancel button
 * @param {string} [doneLabel="Confirm"] - Label for done/confirm button
 * @param {string} [submittingLabel] - Label for done button during submission (defaults to doneLabel)
 * @param {Function} [onCancel] - Callback when cancel button is clicked
 * @param {Function} [onDone] - Callback when done button is clicked
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

	get footerStyle() {
		const alignment = this.args.alignment || "end";
		const alignmentMap = {
			start: "flex-start",
			center: "center",
			end: "flex-end",
			"space-between": "space-between"
		};
		return `justify-content: ${alignmentMap[alignment] || alignmentMap.end}`;
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

	<template>
		{{#unless @hideFooter}}
			<div class={{this.footerClasses}} style={{this.footerStyle}} ...attributes>
				{{#if (has-block)}}
					{{yield}}
				{{else}}
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
				{{/if}}
			</div>
		{{/unless}}
	</template>
}
