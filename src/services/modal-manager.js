import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { t } from '../utils/i18n';

/**
 * Imperative confirmation modal API. Mount {@link UlxConfirmationModal} once at the app root,
 * then call `openModal()` from any component or route. Only one confirmation is shown at a time;
 * a new `openModal()` replaces any open confirmation.
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
	 * @param {boolean} [options.hideHeader=false] - When true, hide the modal header
	 * @param {boolean} [options.showCloseButton] - Show header close button (defaults to false when hideHeader)
	 * @param {string} [options.footerAlign='end'] - Footer alignment: "start", "center", "end", "space-between"
	 * @param {boolean} [options.closeOnBackdrop=false] - Close when backdrop is clicked
	 * @param {string} [options.contentClassName] - Extra class for content area (dialog-content)
	 * @param {string} [options.headerClassName] - Extra class for header (dialog-header)
	 * @param {string} [options.footerClassName] - Extra class for footer (dialog-footer)
	 * @param {string} [options.customClass] - Deprecated alias for contentClassName
	 */
	openModal({
		title,
		iconName,
		iconType = 'font',
		iconComponentClass = 'bs-icons1',
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
		confirmVariant = 'primary',
		onConfirm,
		onCancel,
		size = 's-size',
		hideHeader = false,
		showCloseButton,
		footerAlign = 'end',
		closeOnBackdrop = false,
		contentClassName,
		headerClassName,
		footerClassName,
		customClass
	} = {}) {
		const dismiss = () => {
			this.confirmationProps = null;
			onCancel?.();
		};

		const handleConfirm = () => {
			const resp = onConfirm?.();

			if (resp?.then) {
				resp.then(() => {
					this.confirmationProps = null;
				});
			} else if (resp) {
				this.confirmationProps = null;
			}

			return resp;
		};

		this.confirmationProps = {
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
			confirmLabel: confirmLabel ?? t('label.confirm'),
			cancelLabel: cancelLabel ?? t('label.cancel'),
			confirmVariant,
			onConfirm: handleConfirm,
			onCancel: dismiss,
			onHide: dismiss,
			size,
			hideHeader,
			showCloseButton: showCloseButton ?? !hideHeader,
			footerAlign,
			closeOnBackdrop,
			contentClassName: contentClassName ?? customClass,
			headerClassName,
			footerClassName
		};
	}

	/** Force-dismiss the open confirmation modal without invoking onCancel. */
	close() {
		this.confirmationProps = null;
	}
}
