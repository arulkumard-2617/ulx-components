// ==========================================================================
// TOOLBAR COMPONENT METADATA
// ==========================================================================
// Single source of truth for Toolbar component documentation

export default {
  // Navigation metadata
  category: 'Collections',
  subCategory: 'Panel',
  menuItem: 'Toolbar',
  routeBase: '/components/toolbar',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'Toolbar',
  subHeader:
    'Toolbar arranges grouped actions with start, center, and end content areas.',

  // Tab configuration
  tabs: [
    {
      name: 'Features',
      route: '/features',
      id: 'features',
    },
    {
      name: 'Theming',
      route: '/theming',
      id: 'theming',
    },
    {
      name: 'Builder',
      route: '/builder',
      id: 'builder',
    },
    {
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough',
    },
  ],

  // Import message for the component
  importMsg: "import { UlxToolbar } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description:
      'Toolbar uses role="toolbar" and relies on aria-label or aria-labelledby to describe the grouped actions. Icon-only buttons should provide accessible names via aria-label.',
    example:
      '<UlxToolbar aria-label="Text editor toolbar"> ... </UlxToolbar>',
  },
};

