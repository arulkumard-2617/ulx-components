// ==========================================================================
// POPUP COMPONENT METADATA
// ==========================================================================
// Single source of truth for Popup component documentation

export default {
  // Navigation metadata
  category: 'Modules',
  subCategory: 'Overlay',
  menuItem: 'Popup',
  routeBase: '/components/modules/popup',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'Popup',
  subHeader: 'Popup is a component for user interaction.',

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
  importMsg: "import { Popup } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: "Popup component description for accessibility.",
    example: "<Popup />"
  }
};
