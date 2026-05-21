import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import UlxModal from "../ulx-modal/index.gjs";

/**
 * Global confirmation modal driven by {@link ModalService}.
 * Mount once in the application template (e.g. `application.hbs`).
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

	get props() {
		return this.modalManager.confirmationProps;
	}

	<template>
		{{#if this.props}}
			<UlxModal
				@visible={{this.props.visible}}
				@title={{this.props.title}}
				@size={{this.props.size}}
				@width={{this.props.width}}
				@closeOnBackdrop={{this.props.closeOnBackdrop}}
				@contentClassName={{this.props.customClass}}
				@onHide={{this.props.onHide}}
				@onCancel={{this.props.onCancel}}
				@onDone={{this.props.onConfirm}}
				@doneButtonLabel={{this.props.confirmLabel}}
				@cancelButtonLabel={{this.props.cancelLabel}}
				@doneButtonVariant={{this.props.confirmVariant}}
				@autoCloseOnDone={{false}}
				@autoCloseOnCancel={{false}}
				@closeOnEscape={{true}}
				@showCloseButton={{true}}
				@scrollable={{true}}
				@maskQa="ulx-confirmation-modal-mask"
			>
				{{#if this.props.htmlMessage}}
					{{{this.props.htmlMessage}}}
				{{else if this.props.template}}
					<this.props.template @templateArgs={{this.props.templateArgs}} />
				{{else}}
					<p>{{this.props.message}}</p>
				{{/if}}
			</UlxModal>
		{{/if}}
	</template>
}
