// ==========================================================================
// PANELMENU BUILDER SCHEMA
// ==========================================================================
// Default builder schema for PanelMenu.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'PanelMenu',
  importLine: "import { PanelMenu } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<PanelMenu />',
};
