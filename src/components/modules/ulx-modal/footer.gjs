import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";

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
 * @param {Function} [onCancel] - Callback when cancel button is clicked
 * @param {Function} [onDone] - Callback when done button is clicked
 * @param {boolean} [showCancelButton=true] - Show cancel button
 * @param {boolean} [showDoneButton=true] - Show done button
 * @param {boolean} [doneButtonDisabled=false] - Disable done button
 * @param {string} [alignment="end"] - Footer alignment: "start", "center", "end", "space-between"
 */
export default class UlxModalFooter extends Component {

	get cancelLabel() {
		return this.args.cancelLabel || "Cancel";
	}

	get doneLabel() {
		return this.args.doneLabel || "Confirm";
	}

	get showCancelButton() {
		return this.args.showCancelButton ?? true;
	}

	get showDoneButton() {
		return this.args.showDoneButton ?? true;
	}

	get doneButtonDisabled() {
		return this.args.doneButtonDisabled ?? false;
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
					<button
						type="button"
						class="uls-button uls-button-secondary"
						{{this.on "click" this.handleCancel}}
						{{this.on "keydown" (this.handleKeyDown this.handleCancel)}}
					>
						{{this.cancelLabel}}
					</button>
				{{/if}}

				{{#if this.showDoneButton}}
					<button
						type="button"
						class="uls-button uls-button-primary"
						disabled={{this.doneButtonDisabled}}
						{{on "click" this.handleDone}}
						{{on "keydown" (this.handleKeyDown this.handleDone)}}
					>
						{{this.doneLabel}}
					</button>
				{{/if}}
			{{/if}}
		</div>
	</template>
}
