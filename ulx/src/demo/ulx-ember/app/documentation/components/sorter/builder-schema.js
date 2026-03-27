// ==========================================================================
// SORTER BUILDER SCHEMA
// ==========================================================================
// Default builder schema for Sorter.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'Sorter',
  importLine: "import { UlxSorter, UlxSorterItem } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<UlxSorter><UlxSorterItem @model={{item}}>...</UlxSorterItem></UlxSorter>',
};
