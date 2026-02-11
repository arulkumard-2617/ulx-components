// ==========================================================================
// TRISTATECHECKBOX COMPONENT METADATA
// ==========================================================================
// Single source of truth for TristateCheckbox component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Form',
  menuItem: 'TristateCheckbox',
  routeBase: '/components/elements/tristate-checkbox',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'TristateCheckbox',
  subHeader: 'TristateCheckbox is a component for user interaction.',

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
  importMsg: "import { TristateCheckbox } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: "TristateCheckbox component description for accessibility.",
    example: "<TristateCheckbox />"
  }
};
