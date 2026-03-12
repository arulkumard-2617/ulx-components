import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

/**
 * ModalStackService manages z-index stacking for modal components.
 * Ensures modals are properly layered based on the order they are opened.
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
		this.modals = this.modals.filter(m => m !== modalInstance);
	}

	/**
	 * Get the z-index for a specific modal based on its position in the stack
	 * @param {Object} modalInstance - The modal component instance
	 * @returns {number} The calculated z-index
	 */
	getZIndex(modalInstance) {
		const baseZIndex = modalInstance?.args?.zIndexBase || 1000;
		const index = this.modals.indexOf(modalInstance);
		return index === -1 ? baseZIndex : baseZIndex + (index * 10);
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
