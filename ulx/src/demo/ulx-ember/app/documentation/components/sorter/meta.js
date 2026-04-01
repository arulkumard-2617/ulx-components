export default {
	category: "Modules",
	subCategory: "Data",
	menuItem: "Sorter",
	routeBase: "/components/modules/sorter",
	icon: "pi pi-sort-alt",
	header: "Sorter",
	subHeader: "Sorter enables drag and drop reordering with SortableJS.",
	tabs: [
		{ name: "Features", route: "/features", id: "features" },
		{ name: "Theming", route: "/theming", id: "theming" },
		{ name: "Builder", route: "/builder", id: "builder" },
		{ name: "Pass Through", route: "/passthrough", id: "passthrough" }
	],
	importMsg: "import { UlxSorter } from 'ulx-components'",
	accessibility: {
		description: "Sorter provides listbox semantics for sortable items.",
		example: "<UlxSorter />"
	}
};
