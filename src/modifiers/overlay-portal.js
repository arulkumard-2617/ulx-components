import { modifier } from 'ember-modifier';

export default modifier((element, [when, destination]) => {
	if (!when || !destination) return;

	let restoreContainerPosition = null;
	const isElementDestination =
		typeof HTMLElement !== 'undefined' && destination instanceof HTMLElement;

	if (isElementDestination) {
		const computed = window.getComputedStyle(destination);
		if (destination !== document.body && computed.position === 'static') {
			const previousPosition = destination.style.position;
			destination.style.position = 'relative';
			restoreContainerPosition = () => {
				destination.style.position = previousPosition;
			};
		}
	}

	if (element.parentNode !== destination) {
		destination.appendChild(element);
	}

	return () => {
		restoreContainerPosition?.();
		if (element.parentNode === destination) {
			destination.removeChild(element);
		}
	};
});
