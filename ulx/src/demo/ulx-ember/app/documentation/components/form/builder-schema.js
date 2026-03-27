// ==========================================================================
// FORM BUILDER SCHEMA
// ==========================================================================
// Default builder schema for Form.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'Form',
  importLine: "import { Form } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<Form />',
};
