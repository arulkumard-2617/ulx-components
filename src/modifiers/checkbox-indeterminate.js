import { modifier } from 'ember-modifier';

/**
 * Syncs the native `indeterminate` IDL property on checkbox inputs for assistive tech.
 */
export default modifier((element, [indeterminate]) => {
	if (element instanceof HTMLInputElement && element.type === 'checkbox') {
		element.indeterminate = !!indeterminate;
	}
});
