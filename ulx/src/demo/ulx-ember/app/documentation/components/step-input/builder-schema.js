// ==========================================================================
// STEP INPUT BUILDER SCHEMA
// ==========================================================================

export default {
  componentName: 'UlxStepInput',
  importLine: "import { UlxStepInput } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<UlxStepInput @value={{this.value}} @onChange={{this.handleChange}} />'
};
