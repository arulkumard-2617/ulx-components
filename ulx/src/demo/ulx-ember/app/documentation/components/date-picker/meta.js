export default {
	category: 'Form',
	subCategory: 'Modules',
	menuItem: 'DatePicker',
	routeBase: '/components/date-picker',
	icon: 'bs-icons1 calendar-icon',
	header: 'DatePicker',
	subHeader:
		'Date and date-time fields powered by flatpickr, with ULX input styling. Examples follow flatpickr.js.org.',
	tabs: [
		{ name: 'Features', route: '/features', id: 'features' },
		{ name: 'Theming', route: '/theming', id: 'theming' },
		{ name: 'Pass Through', route: '/passthrough', id: 'passthrough' }
	],
	importMsg: "import { UlxDatePicker } from 'ulx-components'",
	accessibility: {
		description:
			'Uses flatpickr with ULX input semantics; pass aria-label via ...attributes or UlxField as needed.',
		example: '<UlxDatePicker />'
	}
};
