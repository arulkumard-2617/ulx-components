// ==========================================================================
// RADIO BUILDER SCHEMA
// ==========================================================================
// Default builder schema for radio.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'Radio',
  importLine: "import { Radio } from 'uls-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<Radio />',
};
