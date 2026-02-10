// ==========================================================================
// DIALOG COMPONENT METADATA
// ==========================================================================
// Single source of truth for Dialog component documentation

export default {
  // Navigation metadata
  category: 'Modules',
  subCategory: 'Overlay',
  menuItem: 'dialog',
  routeBase: '/components/modules/dialog',
  icon: 'bs-icons1 sp-compass-icon',

  // Page metadata
  header: 'dialog',
  subHeader: 'dialog is a component for user interaction.',

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
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough',
    },
  ],

  // Import message for the component
  importMsg: "import { UlxModal } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: "Dialog component description for accessibility.",
    example: "<UlxModal />"
  }
};
