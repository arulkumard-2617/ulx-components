import Sortable, { MultiDrag, Swap } from 'sortablejs';

export function initialize() {
	Sortable.mount(new MultiDrag(), new Swap());
}

export default {
	name: 'sortable-plugins',
	initialize
};
