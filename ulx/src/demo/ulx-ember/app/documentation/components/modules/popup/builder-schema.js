// ==========================================================================
// POPUP BUILDER SCHEMA
// ==========================================================================
// Default builder schema for Popup.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'Popup',
  importLine: "import { Popup } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<Popup />',
};
