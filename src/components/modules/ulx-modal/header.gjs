import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import UlxButton from "../../elements/ulx-button/index.gjs";

/**
 * Modal header subcomponent.
 * Displays title and optional close button.
 * Can be customized using the :head named block on UlxModal.
 *
 * ## Usage
 * ```gjs
 * <UlxModalHeader
 *   @title="Confirm Action"
 *   @showCloseButton={{true}}
 *   @onClose={{this.handleClose}}
 * />
 * ```
 *
 * @class UlxModalHeader
 * @param {string} [title] - Header title text
 * @param {boolean} [showCloseButton=true] - Show close button
 * @param {Function} [onClose] - Callback when close button is clicked
 * @param {boolean} [showMaximizeButton=false] - Show maximize/restore button
 * @param {boolean} [isMaximized=false] - Whether modal is in maximized state (affects icon and aria-label)
 * @param {Function} [onMaximize] - Callback when maximize button is clicked
 * @param {string} [closeIconName="close-icon-01"] - Icon name for close button
 * @param {string} [closeIconComponentClass="bs-icons1"] - Icon component class for close button
 * @param {string} [closeButtonVariant="text"] - UlxButton variant for close button
 * @param {string} [closeIconSize="s18"] - Icon size for close button
 * @param {boolean} [closeButtonText=true] - UlxButton text style for close button
 * @param {string} [maximizeIconName="expand-icon"] - Icon name for maximize button (when not maximized)
 * @param {string} [minimizeIconName="collapse-icon-01"] - Icon name for minimize/restore button (when maximized)
 * @param {string} [maximizeIconComponentClass="bs-icons1"] - Icon component class for maximize button
 * @param {string} [maximizeButtonVariant="text"] - UlxButton variant for maximize button
 * @param {string} [maximizeIconSize="s18"] - Icon size for maximize button
 * @param {boolean} [maximizeButtonText=true] - UlxButton text style for maximize button
 */
export default class UlxModalHeader extends Component {
	get showCloseButton() {
		return this.args.showCloseButton ?? true;
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
		// Enter or Space triggers the close action
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			this.handleClose(event);
		}
	}

	<template>
		<div class="dialog-header" ...attributes>
			{{#if (has-block)}}
				{{yield}}
			{{else}}
				<h2 class="dialog-title" id="modal-title">
					{{@title}}
				</h2>
			{{/if}}

			<div class="dialog-header-icons">
				{{#if this.showMaximizeButton}}
					<UlxButton
						@icon={{this.currentMaximizeIconName}}
						@iconComponentClass={{this.maximizeIconComponentClass}}
						@variant={{this.maximizeButtonVariant}}
						@iconSize={{this.maximizeIconSize}}
						@text={{this.maximizeButtonText}}
						@customClass="dialog-maximizable-button"
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
						aria-label="Close"
						{{on "click" this.handleClose}}
						{{on "keydown" this.handleKeyDown}}
					/>
				{{/if}}
			</div>
		</div>
	</template>
}
