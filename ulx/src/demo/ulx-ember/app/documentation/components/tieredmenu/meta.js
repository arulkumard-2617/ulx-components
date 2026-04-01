// ==========================================================================
// TIEREDMENU COMPONENT METADATA
// ==========================================================================
// Single source of truth for Tieredmenu component documentation

export default {
  // Navigation metadata
  category: 'Modules',
  subCategory: 'Menu',
  menuItem: 'Tieredmenu',
  routeBase: '/components/tieredmenu',
  icon: 'bs-icons1 hamburger-icon',

  // Page metadata
  header: 'Tieredmenu',
  subHeader: 'Tieredmenu displays submenus in nested overlays.',

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
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough',
    },
  ],

  // Import message for the component
  importMsg: "import { UlxTieredmenu } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description:
      'Tieredmenu component with keyboard navigation and ARIA support.',
    example: '<UlxTieredmenu @model={{items}} />',
  },
};
