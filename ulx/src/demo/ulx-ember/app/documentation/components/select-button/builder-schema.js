// ==========================================================================
// SELECTBUTTON BUILDER SCHEMA
// ==========================================================================
// Default builder schema for SelectButton.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'SelectButton',
  importLine: "import { UlxSelectButton } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () =>
    '<UlxSelectButton @options={{options}} @value={{value}} @onChange={{onChange}} />',
};
