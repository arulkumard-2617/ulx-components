import { modifier } from 'ember-modifier';
import Sortable from 'sortablejs';

export default modifier((element, [options]) => {
	const instance = Sortable.create(element, options ?? {});
	return () => {
		instance.destroy();
	};
});
