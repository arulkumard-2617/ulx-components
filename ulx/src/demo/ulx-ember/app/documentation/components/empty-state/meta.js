// ==========================================================================
// EmptyState Component Metadata
// ==========================================================================

export default {
  category: 'Elements',
  subCategory: 'Misc',
  menuItem: 'EmptyState',
  routeBase: '/components/empty-state',
  icon: 'pi pi-compass',

  header: 'EmptyState',
  subHeader: 'EmptyState displays an icon, title, optional subtitle, and optional actions when there is no data to show.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxEmptyState } from 'ulx-components'",

  accessibility: {
    description: 'EmptyState uses an aria-label on the root for screen readers and relates title to subtitle via aria-describedby.',
    example: '<UlxEmptyState @headerText="msg.empty.state.title" @subHeaderText="msg.empty.state.subtitle" />',
  },
};
