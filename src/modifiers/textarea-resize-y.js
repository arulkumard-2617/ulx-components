import { modifier } from 'ember-modifier';

function syncTextareaHeight(element) {
	element.style.height = 'auto';
	element.style.height = `${element.scrollHeight}px`;
}

/**
 * Grows a textarea on the Y axis to fit its content (min-height from size classes is preserved).
 */
export default modifier(function textareaResizeY(element, [_value], { enabled = true }) {
	if (!enabled || !(element instanceof HTMLTextAreaElement)) {
		return;
	}

	const resize = () => syncTextareaHeight(element);

	resize();
	element.addEventListener('input', resize);

	return () => {
		element.removeEventListener('input', resize);
		element.style.height = '';
	};
});
