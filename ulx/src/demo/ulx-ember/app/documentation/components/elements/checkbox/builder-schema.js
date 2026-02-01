// ==========================================================================
// CHECKBOX BUILDER SCHEMA
// ==========================================================================
// Default builder schema for checkbox.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'Checkbox',
  importLine: "import { Checkbox } from 'uls-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<Checkbox />',
};
