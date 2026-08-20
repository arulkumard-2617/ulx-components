import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { or } from "ember-truth-helpers";
import UlxModal from "../ulx-modal/index.gjs";
import UlxIcon from "../ulx-icon/index.gjs";

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
				@hideHeader={{this.props.hideHeader}}
				@showCloseButton={{this.props.showCloseButton}}
				@hideCancelButton={{this.props.hideCancelButton}}
				@footerAlign={{this.props.footerAlign}}
				@closeOnBackdrop={{this.props.closeOnBackdrop}}
				@contentClassName={{this.props.contentClassName}}
				@headerClassName={{this.props.headerClassName}}
				@footerClassName={{this.props.footerClassName}}
				@onHide={{this.props.onHide}}
				@onCancel={{this.props.onCancel}}
				@onDone={{this.props.onConfirm}}
				@doneButtonLabel={{this.props.confirmLabel}}
				@cancelButtonLabel={{this.props.cancelLabel}}
				@doneButtonVariant={{this.props.confirmVariant}}
				@autoCloseOnDone={{false}}
				@autoCloseOnCancel={{false}}
				@closeOnEscape={{true}}
				@scrollable={{true}}
				@maskQa="ulx-confirmation-modal-mask"
			>
				{{#if (or this.props.iconTemplate this.props.iconHtml this.props.iconName)}}
					<div class="flex flex-col items-center text-center gap-4">
						{{#if this.props.iconTemplate}}
							{{component this.props.iconTemplate templateArgs=this.props.iconTemplateArgs}}
						{{else if this.props.iconHtml}}
							{{{this.props.iconHtml}}}
						{{else}}
							<UlxIcon
								@iconName={{this.props.iconName}}
								@type={{this.props.iconType}}
								@componentClass={{this.props.iconComponentClass}}
								@size={{this.props.iconSize}}
								@ariaLabel={{this.props.iconAriaLabel}}
							/>
						{{/if}}

						{{#if this.props.htmlMessage}}
							{{{this.props.htmlMessage}}}
						{{else if this.props.template}}
							{{component this.props.template templateArgs=this.props.templateArgs}}
						{{else}}
							<p class="mb-0">{{this.props.message}}</p>
						{{/if}}
					</div>
				{{else}}
					{{#if this.props.htmlMessage}}
						{{{this.props.htmlMessage}}}
					{{else if this.props.template}}
						{{component this.props.template templateArgs=this.props.templateArgs}}
					{{else}}
						<p>{{this.props.message}}</p>
					{{/if}}
				{{/if}}
			</UlxModal>
		{{/if}}
	</template>
}
