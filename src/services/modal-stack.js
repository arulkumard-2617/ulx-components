import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

/**
 * ModalStackService manages z-index stacking for modal components.
 * Ensures modals are properly layered based on the order they are opened.
 *
 * Body scroll locking for blocking overlays (`blockScroll`) is handled by
 * `overlay-lifecycle` (reference counting), not here.
 *
 * @class ModalStackService
 * @extends Service
 */
export default class ModalStackService extends Service {
	@tracked modals = [];

	/**
	 * Register a modal instance and get its z-index
	 * @param {Object} modalInstance - The modal component instance
	 * @returns {number} The calculated z-index for this modal
	 */
	registerModal(modalInstance) {
		if (!this.modals.includes(modalInstance)) {
			this.modals = [...this.modals, modalInstance];
		}
		return this.getZIndex(modalInstance);
	}

	/**
	 * Unregister a modal instance when it closes
	 * @param {Object} modalInstance - The modal component instance to remove
	 */
	unregisterModal(modalInstance) {
		this.modals = this.modals.filter((m) => m !== modalInstance);
	}

	/**
	 * Z-index used by the design system for .dialog-mask (must be above this for overlays to show on top of modals).
	 * @type {number}
	 */
	MASK_Z_INDEX = 2000;

	/**
	 * Get the z-index for a specific modal based on its position in the stack
	 * @param {Object} modalInstance - The modal component instance
	 * @returns {number} The calculated z-index
	 */
	getZIndex(modalInstance) {
		const baseZIndex = modalInstance?.args?.zIndexBase || 1000;
		const index = this.modals.indexOf(modalInstance);
		return index === -1 ? baseZIndex : baseZIndex + index * 10;
	}

	/**
	 * Get a z-index guaranteed to be above the dialog mask (e.g. for toast, popup, dropdown panel).
	 * Use for overlays that are rendered in document.body and must appear on top of open modals/slide panes.
	 * @param {Object} [modalInstance] - Optional modal instance; if provided, returns getZIndex(instance) + offset above mask. If omitted, uses topModal.
	 * @returns {number}
	 */
	getZIndexAboveMask(modalInstance) {
		const instance = modalInstance ?? this.topModal;
		const base = instance ? this.getZIndex(instance) : 1000;
		return Math.max(base + 1001, this.MASK_Z_INDEX + 1);
	}

	/**
	 * Get the total number of registered modals
	 * @returns {number} Number of currently registered modals
	 */
	get modalCount() {
		return this.modals.length;
	}

	/**
	 * Check if any modals are currently registered
	 * @returns {boolean} True if any modals are registered
	 */
	get hasModals() {
		return this.modals.length > 0;
	}

	/**
	 * Get the topmost modal in the stack
	 * @returns {Object|null} The topmost modal instance or null if none exist
	 */
	get topModal() {
		return this.modals[this.modals.length - 1] || null;
	}

	/**
	 * Clear all registered modals (useful for testing/cleanup)
	 */
	clear() {
		this.modals = [];
	}
}
