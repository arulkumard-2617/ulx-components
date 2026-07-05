export default {
	category: 'Form',
	subCategory: 'Modules',
	menuItem: 'DateRangePicker',
	routeBase: '/components/date-range-picker',
	icon: 'bs-icons1 calendar-icon',
	header: 'DateRangePicker',
	subHeader: 'Date range selection with flatpickr (<code>mode: "range"</code>) and ULX input styling.',
	tabs: [
		{ name: 'Features', route: '/features', id: 'features' },
		{ name: 'Theming', route: '/theming', id: 'theming' },
		{ name: 'Pass Through', route: '/passthrough', id: 'passthrough' }
	],
	importMsg: "import { UlxDateRangePicker } from 'ulx-components'",
	accessibility: {
		description: 'Range picker with flatpickr; combine with labels and aria attributes for forms.',
		example: '<UlxDateRangePicker />'
	}
};
