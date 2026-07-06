import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import UlxButton from "../ulx-button/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import { joinClassNames } from "../../utils/class-names";
import { t } from "../../utils/i18n";

/**
 * Popup footer subcomponent for default footer when no <:footer> block is passed.
 * Supports three actions: tertiary (left, e.g. Reset), secondary Cancel, primary Done.
 *
 * @class UlxPopupFooter
 * @param {boolean} [hideTertiaryButton=true] - Hide the tertiary (left) button. Set false and pass tertiaryButtonLabel/onTertiary to show.
 * @param {boolean} [hideCancelButton=false] - Hide the cancel button
 * @param {boolean} [hideDoneButton=false] - Hide the done/confirm button
 * @param {string} [tertiaryButtonLabel] - Label for tertiary button (e.g. "Reset"). When set, button is shown unless hideTertiaryButton is true.
 * @param {string} [tertiaryButtonIcon] - Icon name for tertiary button (UlxIconButton via @iconLeft / @iconRight from @tertiaryIconPos).
 * @param {'left'|'right'} [tertiaryIconPos='left'] - Icon position for tertiary button.
 * @param {string} [cancelLabel] - Cancel label (defaults to i18n cancel)
 * @param {string} [doneLabel] - Done/confirm label (defaults to i18n confirm)
 * @param {Function} [onTertiary] - Callback when tertiary button is clicked
 * @param {Function} [onCancel] - Callback when cancel button is clicked
 * @param {Function} [onDone] - Callback when done button is clicked
 * @param {string} [footerClassName] - Extra class for the footer wrapper (passed from UlxPopup when using default footer).
 * @param {string} [dataQa] - Optional data-qa for the footer wrapper (e.g. from UlxPopup automation hooks).
 */
export default class UlxPopupFooter extends Component {
	get footerWrapperClass() {
		return joinClassNames("popup-footer", this.args.footerClassName);
	}

	get tertiaryLabel() {
		return this.args.tertiaryButtonLabel ?? this.args.tertiaryLabel;
	}

	get cancelLabel() {
		return this.args.cancelLabel || t("label.cancel");
	}

	get doneLabel() {
		return this.args.doneLabel || t("label.confirm");
	}

	get showTertiaryButton() {
		return !(this.args.hideTertiaryButton ?? true) && this.tertiaryLabel;
	}

	get tertiaryIconLeft() {
		const { tertiaryButtonIcon, tertiaryIconPos = "left" } = this.args;
		return tertiaryIconPos === "right" ? undefined : tertiaryButtonIcon;
	}

	get tertiaryIconRight() {
		const { tertiaryButtonIcon, tertiaryIconPos = "left" } = this.args;
		return tertiaryIconPos === "right" ? tertiaryButtonIcon : undefined;
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
		<div class={{this.footerWrapperClass}} data-qa={{@dataQa}}>
			{{#if this.showTertiaryButton}}
				<UlxIconButton
					@label={{this.tertiaryLabel}}
					@iconLeft={{this.tertiaryIconLeft}}
					@iconRight={{this.tertiaryIconRight}}
					@variant="link"
					{{on "click" this.handleTertiary}}
				/>
			{{/if}}
			{{#unless this.hideCancelButton}}
				<UlxButton
					@label={{this.cancelLabel}}
					@variant="basic"
					{{on "click" this.handleCancel}}
				/>
			{{/unless}}
			{{#unless this.hideDoneButton}}
				<UlxButton @label={{this.doneLabel}} @variant="primary" {{on "click" this.handleDone}} />
			{{/unless}}
		</div>
	</template>
}
