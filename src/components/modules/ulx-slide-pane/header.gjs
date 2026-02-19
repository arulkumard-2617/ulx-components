import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import UlxButton from "../../elements/ulx-button/index.gjs";

/**
 * Slide pane header subcomponent.
 * Displays title and optional close/maximize buttons.
 * Can be customized using the :head named block on UlxSlidePane.
 *
 * @class UlxSlidePaneHeader
 * @param {string} [title] - Header title text
 * @param {boolean} [showCloseButton=true] - Show close button
 * @param {boolean} [showBackButton=false] - Show Back button (e.g. for nested panes)
 * @param {Function} [onBack] - Callback when Back button is clicked
 * @param {string} [backButtonLabel="Back"] - Accessible label for Back button (aria-label)
 * @param {string} [backIconName="left-arrow-icon"] - Icon name for Back button
 * @param {string} [backIconComponentClass="bs-icons1"] - Icon component class for Back button
 * @param {string} [backButtonVariant="text"] - UlxButton variant for Back button
 * @param {string} [backIconSize="s18"] - Icon size for Back button
 * @param {boolean} [showMaximizeButton=false] - Show maximize/restore button
 * @param {boolean} [isMaximized=false] - Whether pane is maximized (affects icon and aria-label)
 * @param {Function} [onClose] - Callback when close button is clicked
 * @param {Function} [onMaximize] - Callback when maximize button is clicked
 * @param {string} [closeIconName="close-icon-01"] - Icon name for close button
 * @param {string} [closeIconComponentClass="bs-icons1"] - Icon component class for close button
 * @param {string} [closeButtonVariant="text"] - UlxButton variant for close button
 * @param {string} [closeIconSize="s18"] - Icon size for close button
 * @param {boolean} [closeButtonText=true] - UlxButton text style for close button
 * @param {string} [maximizeIconName="expand-icon"] - Icon name for maximize button (when not maximized)
 * @param {string} [minimizeIconName="collapse-icon-01"] - Icon name for restore button (when maximized)
 * @param {string} [maximizeIconComponentClass="bs-icons1"] - Icon component class for maximize button
 * @param {string} [maximizeButtonVariant="text"] - UlxButton variant for maximize button
 * @param {string} [maximizeIconSize="s18"] - Icon size for maximize button
 * @param {boolean} [maximizeButtonText=true] - UlxButton text style for maximize button
 * @param {string} [headerClassName] - Extra class for the header root (applied next to slidepane-header)
 */
export default class UlxSlidePaneHeader extends Component {
	get headerRootClasses() {
		const parts = ["slidepane-header"];
		this.args.headerClassName && parts.push(this.args.headerClassName);
		return parts.filter(Boolean).join(" ");
	}

	get showCloseButton() {
		return this.args.showCloseButton ?? true;
	}

	get showBackButton() {
		return this.args.showBackButton === true && this.args.onBack != null;
	}

	get backButtonLabel() {
		return this.args.backButtonLabel ?? "Back";
	}

	get backIconName() {
		return this.args.backIconName ?? "left-arrow-icon";
	}

	get backIconComponentClass() {
		return this.args.backIconComponentClass ?? "bs-icons1";
	}

	get backButtonVariant() {
		return this.args.backButtonVariant ?? "text";
	}

	get backIconSize() {
		return this.args.backIconSize ?? "s18";
	}

	get showMaximizeButton() {
		return this.args.showMaximizeButton ?? false;
	}

	get closeIconName() {
		return this.args.closeIconName || "close-icon-01";
	}

	get closeIconComponentClass() {
		return this.args.closeIconComponentClass ?? "bs-icons1";
	}

	get closeButtonVariant() {
		return this.args.closeButtonVariant ?? "text";
	}

	get closeIconSize() {
		return this.args.closeIconSize ?? "s18";
	}

	get closeButtonText() {
		return this.args.closeButtonText ?? true;
	}

	get maximizeIconName() {
		return this.args.maximizeIconName || "expand-icon";
	}

	get minimizeIconName() {
		return this.args.minimizeIconName || "collapse-icon-01";
	}

	get currentMaximizeIconName() {
		return this.args.isMaximized ? this.minimizeIconName : this.maximizeIconName;
	}

	get maximizeButtonAriaLabel() {
		return this.args.isMaximized ? "Restore" : "Maximize";
	}

	get maximizeIconComponentClass() {
		return this.args.maximizeIconComponentClass ?? "bs-icons1";
	}

	get maximizeButtonVariant() {
		return this.args.maximizeButtonVariant ?? "text";
	}

	get maximizeIconSize() {
		return this.args.maximizeIconSize ?? "s18";
	}

	get maximizeButtonText() {
		return this.args.maximizeButtonText ?? true;
	}

	@action
	handleClose(event) {
		event.preventDefault();
		event.stopPropagation();
		if (this.args.onClose) {
			this.args.onClose();
		}
	}

	@action
	handleMaximize(event) {
		event.preventDefault();
		event.stopPropagation();
		if (this.args.onMaximize) {
			this.args.onMaximize();
		}
	}

	@action
	handleKeyDown(event) {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			this.handleClose(event);
		}
	}

	@action
	handleBack(event) {
		event.preventDefault();
		event.stopPropagation();
		if (this.args.onBack) {
			this.args.onBack();
		}
	}

	@action
	handleBackKeyDown(event) {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			this.handleBack(event);
		}
	}

	<template>
		<div class={{this.headerRootClasses}} ...attributes>
			{{#if (has-block)}}
				{{yield}}
			{{else}}
				{{#if this.showBackButton}}
					<UlxButton
						@icon={{this.backIconName}}
						@iconComponentClass={{this.backIconComponentClass}}
						@variant={{this.backButtonVariant}}
						@iconSize={{this.backIconSize}}
						@text={{true}}
						@customClass="slidepane-back-button"
						aria-label={{this.backButtonLabel}}
						{{on "click" this.handleBack}}
						{{on "keydown" this.handleBackKeyDown}}
					/>
				{{/if}}
				<h2 class="slidepane-title" id="slidepane-title">
					{{@title}}
				</h2>
			{{/if}}

			<div class="slidepane-header-icons">
				{{#if this.showMaximizeButton}}
					<UlxButton
						@icon={{this.currentMaximizeIconName}}
						@iconComponentClass={{this.maximizeIconComponentClass}}
						@variant={{this.maximizeButtonVariant}}
						@iconSize={{this.maximizeIconSize}}
						@text={{this.maximizeButtonText}}
						@customClass="slidepane-maximizable-button"
						aria-label={{this.maximizeButtonAriaLabel}}
						{{on "click" this.handleMaximize}}
					/>
				{{/if}}
				{{#if this.showCloseButton}}
					<UlxButton
						@icon={{this.closeIconName}}
						@iconComponentClass={{this.closeIconComponentClass}}
						@variant={{this.closeButtonVariant}}
						@iconSize={{this.closeIconSize}}
						@text={{this.closeButtonText}}
						@customClass="slidepane-close-button"
						aria-label="Close"
						{{on "click" this.handleClose}}
						{{on "keydown" this.handleKeyDown}}
					/>
				{{/if}}
			</div>
		</div>
	</template>
}
