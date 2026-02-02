// ==========================================================================
// RADIO COMPONENT METADATA
// ==========================================================================
// Single source of truth for Radio component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Form',
  menuItem: 'radio',
  routeBase: '/components/elements/radio',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'radio',
  subHeader: 'radio is a component for user interaction.',

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
  importMsg: "import { Radio } from 'uls-components'",

  // Accessibility information
  accessibility: {
    description: "Radio component description for accessibility.",
    example: "<Radio />"
  }
};
