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
 * @param {string} [iconComponentClass="bs-icons1"] - Icon component class for header icon buttons
 * @param {string} [iconVariant] - UlxButton variant for header icon buttons
 * @param {string} [iconSize="s18"] - Icon size for header icon buttons
 * @param {string} [maximizeIconName="expand-icon"] - Icon name for maximize button (when not maximized)
 * @param {string} [minimizeIconName="collapse-icon-01"] - Icon name for restore button (when maximized)
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

	get iconComponentClass() {
		return this.args.iconComponentClass ?? "bs-icons1";
	}

	get iconVariant() {
		return this.args.iconVariant ?? "secondary";
	}

	get iconSize() {
		return this.args.iconSize ?? "s18";
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
				<h5 class="slidepane-title h5" id="slidepane-title">
					{{@title}}
				</h5>
			{{/if}}

			<div class="slidepane-header-icons">
				{{#if this.showMaximizeButton}}
					<UlxButton
						@icon={{this.currentMaximizeIconName}}
						@iconComponentClass={{this.iconComponentClass}}
						@variant={{this.iconVariant}}
						@text={{true}}
						@iconSize={{this.iconSize}}
						@customClass="slidepane-maximizable-button"
						aria-label={{this.maximizeButtonAriaLabel}}
						{{on "click" this.handleMaximize}}
					/>
				{{/if}}
				{{#if this.showCloseButton}}
					<UlxButton
						@icon={{this.closeIconName}}
						@iconComponentClass={{this.iconComponentClass}}
						@variant={{this.iconVariant}}
						@iconSize={{this.iconSize}}
						@text={{true}}
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
