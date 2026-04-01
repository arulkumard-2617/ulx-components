// ==========================================================================
// OPTIONSEGMENT BUILDER SCHEMA
// ==========================================================================
// Default builder schema for OptionSegment.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'OptionSegment',
  importLine: "import { OptionSegment } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<OptionSegment />',
};
