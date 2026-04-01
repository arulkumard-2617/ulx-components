// ==========================================================================
// TRISTATECHECKBOX BUILDER SCHEMA
// ==========================================================================
// Default builder schema for TristateCheckbox.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'TristateCheckbox',
  importLine: "import { TristateCheckbox } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<TristateCheckbox />',
};
