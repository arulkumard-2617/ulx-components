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

	/** Default stack base when no `zIndexBase` is set on a registered overlay. */
	DEFAULT_Z_INDEX_BASE = 2100;

	/** Increment between stacked overlays (modal, slide pane, popup, etc.). */
	STACK_STEP = 10;

	/**
	 * Get the z-index for a specific modal based on its position in the stack
	 * @param {Object} modalInstance - The modal component instance
	 * @returns {number} The calculated z-index
	 */
	getZIndex(modalInstance) {
		const baseZIndex = modalInstance?.args?.zIndexBase || this.DEFAULT_Z_INDEX_BASE;
		const index = this.modals.indexOf(modalInstance);
		return index === -1 ? baseZIndex : baseZIndex + index * this.STACK_STEP;
	}

	/**
	 * Z-index for body-portaled overlays (popup, dropdown panel, toast, etc.).
	 * Registered instances use their stack position; unregistered overlays sit one step above `topModal`.
	 * @param {Object} [modalInstance] - Overlay instance when it registers with the stack (e.g. popup, tieredmenu).
	 * @returns {number}
	 */
	getZIndexAboveMask(modalInstance) {
		const zIndex = modalInstance
			? this.getZIndex(modalInstance)
			: this.topModal
				? this.getZIndex(this.topModal) + this.STACK_STEP
				: this.DEFAULT_Z_INDEX_BASE;

		return Math.max(zIndex, this.MASK_Z_INDEX + 1);
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
