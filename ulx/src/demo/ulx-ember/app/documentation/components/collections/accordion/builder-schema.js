// ==========================================================================
// ACCORDION BUILDER SCHEMA
// ==========================================================================
// Default builder schema for Accordion.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'UlxAccordion',
  importLine: "import { UlxAccordion } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<UlxAccordion @model={{this.tabs}} />',
};
