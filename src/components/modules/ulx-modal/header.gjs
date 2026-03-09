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
 * @param {string} [iconComponentClass="bs-icons1"] - Icon component class for header icon buttons
 * @param {string} [iconVariant] - UlxButton variant for header icon buttons
 * @param {string} [iconSize="s18"] - Icon size for header icon buttons
 * @param {string} [maximizeIconName="expand-icon"] - Icon name for maximize button (when not maximized)
 * @param {string} [minimizeIconName="collapse-icon-01"] - Icon name for minimize/restore button (when maximized)
 * @param {string} [headerClassName] - Extra class for the header root (applied next to dialog-header)
 */
export default class UlxModalHeader extends Component {
	get headerRootClasses() {
		const parts = ["dialog-header"];
		this.args.headerClassName && parts.push(this.args.headerClassName);
		return parts.filter(Boolean).join(" ");
	}

	get showCloseButton() {
		return this.args.showCloseButton ?? true;
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
		// Enter or Space triggers the close action
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			this.handleClose(event);
		}
	}

	<template>
		<div class={{this.headerRootClasses}} ...attributes>
			{{#if (has-block)}}
				{{yield}}
			{{else}}
				<h4 class="dialog-title" id="modal-title">
					{{@title}}
				</h4>
			{{/if}}

			<div class="dialog-header-icons">
				{{#if this.showMaximizeButton}}
					<UlxButton
						@icon={{this.currentMaximizeIconName}}
						@iconComponentClass={{this.iconComponentClass}}
						@variant={{this.iconVariant}}
						@text={{true}}
						@iconSize={{this.iconSize}}
						@customClass="dialog-maximizable-button"
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
						aria-label="Close"
						{{on "click" this.handleClose}}
						{{on "keydown" this.handleKeyDown}}
					/>
				{{/if}}
			</div>
		</div>
	</template>
}
