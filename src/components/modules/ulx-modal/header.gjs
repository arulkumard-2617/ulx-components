import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import UlxIcon from "../../elements/ulx-icon/index.gjs";

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
 * @param {Function} [onMaximize] - Callback when maximize button is clicked
 * @param {string} [closeIconName="times"] - Icon name for close button
 */
export default class UlxModalHeader extends Component {

	get showCloseButton() {
		return this.args.showCloseButton ?? true;
	}

	get showMaximizeButton() {
		return this.args.showMaximizeButton ?? false;
	}

	get closeIconName() {
		return this.args.closeIconName || "times";
	}

	get maximizeIconName() {
		return this.args.maximizeIconName || "expand";
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
					<button
						type="button"
						class="dialog-maximizable-button"
						aria-label="Maximize"
						{{on "click" this.handleMaximize}}
					>
						<UlxIcon
							@iconName={{this.maximizeIconName}}
							@ariaLabel="Maximize"
							@customClass="dialog-maximizable-icon"
						/>
					</button>
				{{/if}}

				{{#if this.showCloseButton}}
					<button
						type="button"
						class="dialog-close-button"
						aria-label="Close"
						{{on "click" this.handleClose}}
						{{on "keydown" this.handleKeyDown}}
					>
						<UlxIcon
							@iconName={{this.closeIconName}}
							@ariaLabel="Close"
							@customClass="dialog-close-icon"
						/>
					</button>
				{{/if}}
			</div>
		</div>
	</template>
}
