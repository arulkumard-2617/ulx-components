import { modifier } from 'ember-modifier';

/**
 * Appends the element to a destination (default document.body) when `when` is truthy,
 * and removes it on teardown or when `when` becomes falsy. Use for overlays that must
 * render in body (or a custom container) to escape stacking contexts.
 *
 * @param {HTMLElement} element - The element to move
 * @param {[boolean, Node?]} params - [when, destination]. When truthy, append to destination ?? document.body. When falsy, remove from destination if present.
 * @returns {Function|void} Cleanup function
 */
export default modifier((element, [when, destination]) => {
	const container = when ? (destination ?? (typeof document !== 'undefined' ? document.body : null)) : null;

	if (!when) {
		if (container && element.parentNode === container) {
			container.removeChild(element);
		}
		return;
	}

	if (container && element.parentNode !== container) {
		container.appendChild(element);
	}

	return () => {
		if (container && element.parentNode === container) {
			container.removeChild(element);
		}
	};
});
