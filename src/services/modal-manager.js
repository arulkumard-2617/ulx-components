import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { t } from "../utils/i18n";

/**
 * Imperative confirmation modal API. Mount {@link UlxConfirmationModal} once at the app root,
 * then call `openModal()` from any component or route.
 *
 * @class ModalService
 * @extends Service
 */
export default class ModalService extends Service {
	@tracked confirmationProps = null;

	/**
	 * Opens a confirmation modal with the given options.
	 *
	 * @param {Object} options
	 * @param {string} [options.title] - Modal title
	 * @param {string} [options.message] - Plain text body
	 * @param {string} [options.htmlMessage] - Raw HTML body (takes precedence over message)
	 * @param {import('@glimmer/component').default} [options.template] - Glimmer component class for custom body
	 * @param {Object} [options.templateArgs] - Args passed to the template component
	 * @param {string} [options.confirmLabel] - Confirm button label (defaults to i18n confirm)
	 * @param {string} [options.cancelLabel] - Cancel button label (defaults to i18n cancel)
	 * @param {'primary'|'danger'} [options.confirmVariant='primary'] - Confirm button variant
	 * @param {Function} [options.onConfirm] - Called on confirm; may return a Promise
	 * @param {Function} [options.onCancel] - Called on dismiss
	 * @param {string} [options.size='s-size'] - Modal size
	 * @param {string} [options.width='480px'] - Modal width
	 * @param {boolean} [options.closeOnBackdrop=false] - Close when backdrop is clicked
	 * @param {string} [options.customClass] - Extra class on dialog content
	 */
	openModal({
		title,
		message,
		htmlMessage,
		template,
		templateArgs,
		confirmLabel,
		cancelLabel,
		confirmVariant = "primary",
		onConfirm,
		onCancel,
		size = "s-size",
		width = "480px",
		closeOnBackdrop = false,
		customClass
	} = {}) {
		const dismiss = () => {
			this.confirmationProps = null;
			onCancel?.();
		};

		const handleConfirm = () => {
			const resp = onConfirm?.();

			if (resp) {
				if (resp.then) {
					resp.then(() => {
						this.confirmationProps = null;
					});
				} else {
					this.confirmationProps = null;
				}
			}

			return resp;
		};

		this.confirmationProps = {
			visible: true,
			title,
			message,
			htmlMessage,
			template,
			templateArgs,
			confirmLabel: confirmLabel ?? t("label.confirm"),
			cancelLabel: cancelLabel ?? t("label.cancel"),
			confirmVariant,
			onConfirm: handleConfirm,
			onCancel: dismiss,
			onHide: dismiss,
			size,
			width,
			closeOnBackdrop,
			customClass
		};
	}

	/** Force-dismiss the open confirmation modal without invoking onCancel. */
	close() {
		this.confirmationProps = null;
	}
}
