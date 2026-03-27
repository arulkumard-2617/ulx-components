// ==========================================================================
// BADGE BUILDER SCHEMA
// ==========================================================================
// Default builder schema for Badge.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'Badge',
  importLine: "import { Badge } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<Badge />',
};
