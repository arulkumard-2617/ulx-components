// ==========================================================================
// ACTIONMENU BUILDER SCHEMA
// ==========================================================================

export default {
  componentName: 'ActionMenu',
  importLine: "import { UlxActionMenu } from 'ulx-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () =>
    '<UlxActionMenu @label="Actions" @items={{items}} @onItemSelect={{onSelect}} />',
};
