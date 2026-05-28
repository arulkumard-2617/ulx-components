import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { t } from "../utils/i18n";

function nextConfirmationId() {
	if (typeof crypto !== "undefined" && crypto.randomUUID) {
		return crypto.randomUUID();
	}
	return `confirmation-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/**
 * Imperative confirmation modal API. Mount {@link UlxConfirmationModal} once at the app root,
 * then call `openModal()` from any component or route. Each call stacks a new dialog.
 *
 * @class ModalService
 * @extends Service
 */
export default class ModalService extends Service {
	@tracked confirmationStack = [];

	/**
	 * Opens a confirmation modal with the given options.
	 *
	 * @param {Object} options
	 * @param {string} [options.title] - Modal title
	 * @param {string} [options.iconName] - Icon name (passed to UlxIcon) displayed above the body
	 * @param {'svg'|'font'} [options.iconType='font'] - Icon type for iconName
	 * @param {string} [options.iconComponentClass='bs-icons1'] - Icon component class passed to UlxIcon
	 * @param {string} [options.iconSize] - Optional icon size class (e.g. "s48")
	 * @param {string} [options.iconAriaLabel] - Optional accessible name. When set, the icon is meaningful (not aria-hidden)
	 * @param {string} [options.iconHtml] - Raw HTML/SVG icon markup displayed above the body (takes precedence over iconName)
	 * @param {import('@glimmer/component').default} [options.iconTemplate] - Glimmer component class for a custom icon/illustration
	 * @param {Object} [options.iconTemplateArgs] - Args passed to the iconTemplate component
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
	 * @param {boolean} [options.closeOnConfirm=true] - When false, Done runs onConfirm but keeps this dialog open (for chained confirms)
	 * @param {string} [options.customClass] - Extra class on dialog content
	 */
	openModal({
		title,
		iconName,
		iconType = "font",
		iconComponentClass = "bs-icons1",
		iconSize,
		iconAriaLabel,
		iconHtml,
		iconTemplate,
		iconTemplateArgs,
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
		closeOnConfirm = true,
		customClass
	} = {}) {
		const id = nextConfirmationId();

		const dismiss = () => {
			this.removeById(id);
			onCancel?.();
		};

		const handleConfirm = () => {
			const resp = onConfirm?.();

			if (!closeOnConfirm) {
				return resp;
			}

			if (resp?.then) {
				resp.then(() => {
					this.removeById(id);
				});
			} else if (resp) {
				this.removeById(id);
			}

			return resp;
		};

		this.confirmationStack = [
			...this.confirmationStack,
			{
				id,
				visible: true,
				title,
				iconName,
				iconType,
				iconComponentClass,
				iconSize,
				iconAriaLabel,
				iconHtml,
				iconTemplate,
				iconTemplateArgs,
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
			}
		];
	}

	removeById(id) {
		this.confirmationStack = this.confirmationStack.filter((m) => m.id !== id);
	}

	/** Force-dismiss all open confirmation modals without invoking onCancel. */
	close() {
		this.confirmationStack = [];
	}

	/** Force-dismiss the topmost confirmation modal without invoking onCancel. */
	closeTop() {
		if (this.confirmationStack.length === 0) {
			return;
		}
		this.confirmationStack = this.confirmationStack.slice(0, -1);
	}
}
