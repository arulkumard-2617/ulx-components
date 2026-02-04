// ==========================================================================
// TABMENU BUILDER SCHEMA
// ==========================================================================
// Default builder schema for TabMenu.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'TabMenu',
  importLine: "import { TabMenu } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<TabMenu />',
};
