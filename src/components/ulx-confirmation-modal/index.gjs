import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import UlxModal from "../ulx-modal/index.gjs";

/**
 * Global confirmation modal driven by {@link ModalService}.
 * Mount once in the application template (e.g. `application.hbs`).
 * Each {@link ModalService#openModal} call stacks another dialog.
 *
 * ```gjs
 * <UlxConfirmationModal />
 * ```
 *
 * ```javascript
 * @service modalManager;
 *
 * this.modalManager.openModal({
 *   title: 'Delete item?',
 *   message: 'This cannot be undone.',
 *   confirmLabel: 'Delete',
 *   confirmVariant: 'danger',
 *   onConfirm: () => this.deleteItem(),
 * });
 * ```
 *
 * @class UlxConfirmationModal
 */
export default class UlxConfirmationModal extends Component {
	@service modalManager;

	get confirmationStack() {
		return this.modalManager.confirmationStack;
	}

	<template>
		{{#each this.confirmationStack key="id" as |modal|}}
			<UlxModal
				@visible={{modal.visible}}
				@title={{modal.title}}
				@size={{modal.size}}
				@width={{modal.width}}
				@closeOnBackdrop={{modal.closeOnBackdrop}}
				@contentClassName={{modal.customClass}}
				@onHide={{modal.onHide}}
				@onCancel={{modal.onCancel}}
				@onDone={{modal.onConfirm}}
				@doneButtonLabel={{modal.confirmLabel}}
				@cancelButtonLabel={{modal.cancelLabel}}
				@doneButtonVariant={{modal.confirmVariant}}
				@autoCloseOnDone={{false}}
				@autoCloseOnCancel={{false}}
				@closeOnEscape={{true}}
				@showCloseButton={{true}}
				@scrollable={{true}}
				@maskQa="ulx-confirmation-modal-mask"
			>
				{{#if modal.htmlMessage}}
					{{{modal.htmlMessage}}}
				{{else if modal.template}}
					{{component modal.template templateArgs=modal.templateArgs}}
				{{else}}
					<p>{{modal.message}}</p>
				{{/if}}
			</UlxModal>
		{{/each}}
	</template>
}
