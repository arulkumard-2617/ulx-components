// ==========================================================================
// TAG BUILDER SCHEMA
// ==========================================================================
// Default builder schema for tag.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'Tag',
  importLine: "import { Tag } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<Tag />',
};
