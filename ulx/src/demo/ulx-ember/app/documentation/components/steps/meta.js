// ==========================================================================
// STEPS COMPONENT METADATA
// ==========================================================================
// Single source of truth for Steps component documentation

export default {
  // Navigation metadata
  category: 'Modules',
  subCategory: 'Menu',
  menuItem: 'Steps',
  routeBase: '/components/steps',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'Steps',
  subHeader: 'Steps is a component for user interaction.',

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
  importMsg: "import { Steps } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: "Steps component description for accessibility.",
    example: "<Steps />"
  }
};
