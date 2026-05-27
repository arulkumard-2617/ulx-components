// ==========================================================================
// ACTION BUTTONS BUILDER SCHEMA
// ==========================================================================

export default {
  componentName: 'ActionButtons',
  importLine: "import { UlxActionButtons } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () =>
    '<UlxActionButtons @actionButtons={{actionButtons}} @variant="primary" />'
};
