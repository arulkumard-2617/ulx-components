// ==========================================================================
// PANELMENU COMPONENT METADATA
// ==========================================================================

export default {
  // Navigation metadata
  category: 'Modules',
  subCategory: 'Menu',
  menuItem: 'PanelMenu',
  routeBase: '/components/panel-menu',
  icon: 'bs-icons1 hamburger-icon',

  // Page metadata
  header: 'PanelMenu',
  subHeader: 'PanelMenu is a hybrid of accordion-tree components.',

  // Tab configuration
  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxPanelmenu } from 'ulx-components'",

  accessibility: {
    description: 'PanelMenu uses a tree role for the root list with nested groups and keyboard navigation.',
    example: '<UlxPanelmenu @model={{items}} />',
  },
};

