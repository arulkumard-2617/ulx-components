export default {
	category: 'Form',
	subCategory: 'Modules',
	menuItem: 'TimePicker',
	routeBase: '/components/time-picker',
	icon: 'bs-icons1 time-icon',
	header: 'TimePicker',
	subHeader:
		'Time-only selection with flatpickr (<code>enableTime</code> + <code>noCalendar</code>) and ULX input styling.',
	tabs: [
		{ name: 'Features', route: '/features', id: 'features' },
		{ name: 'Theming', route: '/theming', id: 'theming' },
		{ name: 'Builder', route: '/builder', id: 'builder' },
		{ name: 'Pass Through', route: '/passthrough', id: 'passthrough' }
	],
	importMsg: "import { UlxTimePicker } from 'ulx-components'",
	accessibility: {
		description: 'Time spinner from flatpickr; pair with labels and aria attributes.',
		example: '<UlxTimePicker />'
	}
};
