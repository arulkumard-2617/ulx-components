// ==========================================================================
// INPUT COMPONENT METADATA
// ==========================================================================
// Single source of truth for Input component documentation

export default {
  // Navigation metadata
  category: 'Form',
  subCategory: 'Elements',
  menuItem: 'Input',
  routeBase: '/components/input',
  icon: 'bs-icons1 sp-compass-icon',

  // Page metadata
  header: 'Input',
  subHeader: 'Input is a component for user interaction.',

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
  importMsg: "import { UlxInput } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: 'Input component description for accessibility.',
    example: '<Input />',
  },
};
