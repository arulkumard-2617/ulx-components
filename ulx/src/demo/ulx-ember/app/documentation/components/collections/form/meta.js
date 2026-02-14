// ==========================================================================
// FORM COMPONENT METADATA
// ==========================================================================
// Single source of truth for Form component documentation

export default {
  // Navigation metadata
  category: 'Collections',
  subCategory: 'Form',
  menuItem: 'Form',
  routeBase: '/components/collections/form',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'Form',
  subHeader: 'Form is a component for user interaction.',

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
  importMsg: "import { Form } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: "Form component description for accessibility.",
    example: "<Form />"
  }
};
