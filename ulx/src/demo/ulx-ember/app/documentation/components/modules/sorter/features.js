import RichText from "../../../../components/common/doc-main/rich-text";
import {
	BasicDemo,
	SharedlistsDemo,
	CloningDemo,
	DisablesortingDemo,
	HandleDemo,
	FilterDemo,
	GridDemo,
	NestedDemo,
	MultidragDemo,
	SwapDemo,
	ImportSource,
	BasicSource,
	SharedlistsSource,
	CloningSource,
	DisablesortingSource,
	HandleSource,
	FilterSource,
	GridSource,
	NestedSource,
	MultidragSource,
	SwapSource
} from "./imports";

function feature(id, sectionNav, content, component, source) {
	return {
		id,
		sectionNav,
		sectionDesc: {
			component: RichText,
			props: { as: "span", content }
		},
		demo: {
			component,
			props: {
				source,
				snippetName: id,
				language: "handlebars"
			}
		}
	};
}

export const SorterFeatureItems = [
	feature(
		"import",
		"Import",
		"The <code>import</code> property is used to import the <code>UlxSorter</code> component.",
		null,
		ImportSource
	),
	feature("basic", "Simple list", "Basic sortable list.", BasicDemo, BasicSource),
	feature(
		"shared-lists",
		"Shared lists",
		"Drag and drop between two lists using a shared group.",
		SharedlistsDemo,
		SharedlistsSource
	),
	feature("cloning", "Cloning", "Clone items between lists.", CloningDemo, CloningSource),
	feature(
		"disabling-sorting",
		"Disabling sorting",
		"Disable sorting on one side while still allowing drag to another list.",
		DisablesortingDemo,
		DisablesortingSource
	),
	feature("handle", "Handles", "Drag by handle selector.", HandleDemo, HandleSource),
	feature("filter", "Filter", "Filtered items are not draggable.", FilterDemo, FilterSource),
	feature("grid", "Grid", "Sortable grid variation.", GridDemo, GridSource),
	feature("nested-sortables", "Nested sortables", "Nested sortable lists.", NestedDemo, NestedSource),
	feature(
		"multidrag",
		"MultiDrag",
		"Select and drag multiple items using the MultiDrag plugin.",
		MultidragDemo,
		MultidragSource
	),
	feature("swap", "Swap", "Swap item behavior using Swap plugin.", SwapDemo, SwapSource)
];

export default function SorterFeatures() {
	return SorterFeatureItems;
}
