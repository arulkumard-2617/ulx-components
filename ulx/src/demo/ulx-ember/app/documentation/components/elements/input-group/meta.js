// ==========================================================================
// INPUTGROUP COMPONENT METADATA
// ==========================================================================
// Single source of truth for InputGroup component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Form',
  menuItem: 'InputGroup',
  routeBase: '/components/elements/input-group',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'InputGroup',
  subHeader: 'InputGroup is a component for user interaction.',

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
  importMsg: "import { InputGroup } from 'uls-components'",

  // Accessibility information
  accessibility: {
    description: "InputGroup component description for accessibility.",
    example: "<InputGroup />"
  }
};
