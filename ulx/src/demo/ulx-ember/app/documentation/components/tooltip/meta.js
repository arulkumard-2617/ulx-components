// ==========================================================================
// TOOLTIP COMPONENT METADATA
// ==========================================================================
// Single source of truth for Tooltip component documentation

export default {
  // Navigation metadata
  category: 'Modules',
  subCategory: 'Overlay',
  menuItem: 'Tooltip',
  routeBase: '/components/tooltip',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'Tooltip',
  subHeader: 'Tooltip is a component for user interaction.',

  // Tab configuration
  tabs: [
    {
      name: 'Features',
      route: '/features',
      id: 'features'
    },
    {
      name: 'Theming',
      route: '/theming',
      id: 'theming'
    },
    {
      name: 'Builder',
      route: '/builder',
      id: 'builder'
    },
    {
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough'
    }
  ],

  // Import message for the component
  importMsg: "import { Tooltip } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: "Tooltip component description for accessibility.",
    example: "<Tooltip />"
  }
};
