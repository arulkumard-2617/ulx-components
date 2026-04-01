// ==========================================================================
// BADGE COMPONENT METADATA
// ==========================================================================
// Single source of truth for Badge component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Misc',
  menuItem: 'Badge',
  routeBase: '/components/badge',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'Badge',
  subHeader: 'Badge is a component for user interaction.',

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
  importMsg: "import { Badge } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: 'Badge component description for accessibility.',
    example: '<Badge />',
  },
};
