// ==========================================================================
// SLIDEPANE BUILDER SCHEMA
// ==========================================================================
// Default builder schema for slidepane.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'Slidepane',
  importLine: "import { Slidepane } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<Slidepane />',
};
