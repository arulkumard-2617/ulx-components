// ==========================================================================
// ULXIMAGE COMPONENT METADATA
// ==========================================================================
// Single source of truth for UlxImage component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Misc',
  menuItem: 'Image',
  routeBase: '/components/elements/ulx-image',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'Image',
  subHeader: 'Image is a component for user interaction.',

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
  importMsg: "import { UlxImage } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: 'UlxImage component description for accessibility.',
    example: '<UlxImage />',
  },
};
