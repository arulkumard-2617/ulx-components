// ==========================================================================
// SLIDEPANE COMPONENT METADATA
// ==========================================================================
// Single source of truth for Slidepane component documentation

export default {
  // Navigation metadata
  category: 'Modules',
  subCategory: 'Overlay',
  menuItem: 'Slidepane',
  routeBase: '/components/slidepane',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'Slidepane',
  subHeader: 'slidepane is a component for user interaction.',

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
  importMsg: "import { Slidepane } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: "Slidepane component description for accessibility.",
    example: "<Slidepane />"
  }
};
