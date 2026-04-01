// ==========================================================================
// CHIP BUILDER SCHEMA
// ==========================================================================
// Default builder schema for chip.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: 'UlxChip',
  importLine: "import { UlxChip } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<UlxChip />',
};
