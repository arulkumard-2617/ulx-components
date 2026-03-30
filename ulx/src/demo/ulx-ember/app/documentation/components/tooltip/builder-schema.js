// ==========================================================================
// TOOLTIP BUILDER SCHEMA
// ==========================================================================
// Default builder schema for Tooltip.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'Tooltip',
  importLine: "import { Tooltip } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<Tooltip />',
};
