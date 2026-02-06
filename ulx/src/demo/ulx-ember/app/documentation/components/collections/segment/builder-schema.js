// ==========================================================================
// SEGMENT BUILDER SCHEMA
// ==========================================================================
// Default builder schema for Segment.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'Segment',
  importLine: "import { Segment } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<Segment />',
};
