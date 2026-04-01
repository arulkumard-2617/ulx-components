// ==========================================================================
// INPUTGROUP COMPONENT METADATA
// ==========================================================================
// Single source of truth for InputGroup component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Form',
  menuItem: 'InputGroup',
  routeBase: '/components/input-group',
  icon: 'bs-icons1 sp-compass-icon',

  // Page metadata
  header: 'InputGroup',
  subHeader: 'InputGroup is a component for user interaction.',

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
  importMsg: "import { InputGroup } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: 'InputGroup component description for accessibility.',
    example: '<InputGroup />',
  },
};
