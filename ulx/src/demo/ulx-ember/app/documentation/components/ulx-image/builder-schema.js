// ==========================================================================
// ULXIMAGE BUILDER SCHEMA
// ==========================================================================
// Default builder schema for Image.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'UlxImage',
  importLine: "import { UlxImage } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<UlxImage />',
};
