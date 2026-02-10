// ==========================================================================
// CHECKBOX COMPONENT METADATA
// ==========================================================================
// Single source of truth for Checkbox component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Form',
  menuItem: 'checkbox',
  routeBase: '/components/elements/checkbox',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'checkbox',
  subHeader: 'checkbox is a component for user interaction.',

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
  importMsg: "import { Checkbox } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: 'Checkbox component description for accessibility.',
    example: '<Checkbox />',
  },
};
