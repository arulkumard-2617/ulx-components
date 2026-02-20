// ==========================================================================
// STEPS BUILDER SCHEMA
// ==========================================================================
// Default builder schema for Steps.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'Steps',
  importLine: "import { Steps } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<Steps />',
};
