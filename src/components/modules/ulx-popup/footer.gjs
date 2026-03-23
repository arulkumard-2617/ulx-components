import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import UlxButton from "../../elements/ulx-button/index.gjs";
import UlxIconButton from "../../elements/ulx-icon-button/index.gjs";
import { t } from "../../../utils/i18n";

/**
 * Popup footer subcomponent for default footer when no <:footer> block is passed.
 * Supports three actions: tertiary (left, e.g. Reset), secondary Cancel, primary Done.
 *
 * @class UlxPopupFooter
 * @param {boolean} [hideTertiaryButton=true] - Hide the tertiary (left) button. Set false and pass tertiaryButtonLabel/onTertiary to show.
 * @param {boolean} [hideCancelButton=false] - Hide the cancel button
 * @param {boolean} [hideDoneButton=false] - Hide the done/confirm button
 * @param {string} [tertiaryButtonLabel] - Label for tertiary button (e.g. "Reset"). When set, button is shown unless hideTertiaryButton is true.
 * @param {string} [tertiaryButtonIcon] - Icon name for tertiary button (passed to UlxButton @icon).
 * @param {'left'|'right'} [tertiaryIconPos='left'] - Icon position for tertiary button.
 * @param {string} [cancelLabel] - Cancel label (defaults to i18n cancel)
 * @param {string} [doneLabel] - Done/confirm label (defaults to i18n confirm)
 * @param {Function} [onTertiary] - Callback when tertiary button is clicked
 * @param {Function} [onCancel] - Callback when cancel button is clicked
 * @param {Function} [onDone] - Callback when done button is clicked
 * @param {string} [footerClassName] - Extra class for the footer wrapper (passed from UlxPopup when using default footer).
 */
export default class UlxPopupFooter extends Component {
	get footerWrapperClass() {
		const parts = ["popup-footer"];
		this.args.footerClassName && parts.push(this.args.footerClassName);
		return parts.filter(Boolean).join(" ");
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

	get hideCancelButton() {
		return this.args.hideCancelButton ?? false;
	}

	get hideDoneButton() {
		return this.args.hideDoneButton ?? false;
	}

	@action
	handleTertiary(event) {
		event?.preventDefault();
		this.args.onTertiary?.();
	}

	@action
	handleCancel(event) {
		event?.preventDefault();
		this.args.onCancel?.();
	}

	@action
	handleDone(event) {
		event?.preventDefault();
		this.args.onDone?.();
	}

	<template>
		<div class={{this.footerWrapperClass}}>
			{{#if this.showTertiaryButton}}
				<UlxIconButton
					@label={{this.tertiaryLabel}}
					@icon={{this.args.tertiaryButtonIcon}}
					@iconPos={{this.args.tertiaryIconPos}}
					@variant="link"
					{{on "click" this.handleTertiary}}
				/>
			{{/if}}
			{{#unless this.hideCancelButton}}
				<UlxButton
					@label={{this.cancelLabel}}
					@variant="outlined"
					{{on "click" this.handleCancel}}
				/>
			{{/unless}}
			{{#unless this.hideDoneButton}}
				<UlxButton @label={{this.doneLabel}} @variant="primary" {{on "click" this.handleDone}} />
			{{/unless}}
		</div>
	</template>
}
