import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import UlxButton from "../../ulx-button";

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
 * @param {string} [cancelLabel="Cancel"] - Label for cancel button
 * @param {string} [doneLabel="Confirm"] - Label for done/confirm button
 * @param {string} [submittingLabel] - Label for done button during submission (defaults to doneLabel)
 * @param {Function} [onCancel] - Callback when cancel button is clicked
 * @param {Function} [onDone] - Callback when done button is clicked
 * @param {boolean} [showCancelButton=true] - Show cancel button
 * @param {boolean} [showDoneButton=true] - Show done button
 * @param {boolean} [submitting=false] - Disable both buttons during async operation
 * @param {boolean} [doneButtonDisabled=false] - Disable done button
 * @param {boolean} [cancelButtonDisabled=false] - Disable cancel button
 * @param {string} [alignment="end"] - Footer alignment: "start", "center", "end", "space-between"
 */
export default class UlxModalFooter extends Component {

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

	get showCancelButton() {
		return this.args.showCancelButton ?? true;
	}

	get showDoneButton() {
		return this.args.showDoneButton ?? true;
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
		const parts = ["dialog-footer"];
		return parts.join(" ");
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
			// Enter or Space triggers the action
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				callback(event);
			}
		};
	}

	<template>
		<div
			class={{this.footerClasses}}
			style={{this.footerStyle}}
			...attributes
		>
			{{#if (has-block)}}
				{{yield}}
			{{else}}
				{{#if this.showCancelButton}}
					<UlxButton
						@label={{this.cancelLabel}}
						@variant="secondary"
						@disabled={{this.cancelButtonDisabled}}
						{{on "click" this.handleCancel}}
						{{on "keydown" (this.handleKeyDown this.handleCancel)}}
					/>
				{{/if}}

				{{#if this.showDoneButton}}
					<UlxButton
						@label={{this.doneLabel}}
						@variant="primary"
						@disabled={{this.doneButtonDisabled}}
						{{on "click" this.handleDone}}
						{{on "keydown" (this.handleKeyDown this.handleDone)}}
					/>
				{{/if}}
			{{/if}}
		</div>
	</template>
}
