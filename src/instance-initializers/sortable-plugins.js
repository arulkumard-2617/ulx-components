import Sortable, { MultiDrag, Swap } from 'sortablejs';

const SORTABLE_PLUGINS_MOUNTED_KEY = '__ulxSortablePluginsMounted__';

function mountSortablePluginsOnce() {
	if (Sortable[SORTABLE_PLUGINS_MOUNTED_KEY]) {
		return;
	}

	try {
		Sortable.mount(new MultiDrag(), new Swap());
		Sortable[SORTABLE_PLUGINS_MOUNTED_KEY] = true;
	} catch (error) {
		if (
			error &&
			typeof error.message === 'string' &&
			error.message.includes('Cannot mount plugin') &&
			error.message.includes('more than once')
		) {
			Sortable[SORTABLE_PLUGINS_MOUNTED_KEY] = true;
			return;
		}

		throw error;
	}
}

export function initialize() {
	mountSortablePluginsOnce();
}

export default {
	name: 'sortable-plugins',
	initialize
};
