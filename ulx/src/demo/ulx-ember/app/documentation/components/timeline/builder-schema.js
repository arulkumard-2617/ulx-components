// ==========================================================================
// TIMELINE BUILDER SCHEMA
// ==========================================================================
// Default builder schema for timeline.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'UlxTimeline',
  importLine: "import { UlxTimeline } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<UlxTimeline />',
};
