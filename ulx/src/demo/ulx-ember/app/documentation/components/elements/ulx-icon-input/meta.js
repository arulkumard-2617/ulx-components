// ==========================================================================
// ULXICONINPUT COMPONENT METADATA
// ==========================================================================
// Single source of truth for UlxIconInput component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Form',
  menuItem: 'IconInput',
  routeBase: '/components/elements/ulx-icon-input',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'IconInput',
  subHeader: 'IconInput is a component for user interaction.',

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
  importMsg: "import { UlxIconInput } from 'uls-components'",

  // Accessibility information
  accessibility: {
    description: "UlxIconInput component description for accessibility.",
    example: "<UlxIconInput />"
  }
};
