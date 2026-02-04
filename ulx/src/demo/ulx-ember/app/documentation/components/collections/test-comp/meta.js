// ==========================================================================
// TESTCOMP COMPONENT METADATA
// ==========================================================================
// Single source of truth for TestComp component documentation

export default {
  // Navigation metadata
  category: 'Collections',
  subCategory: 'Menu',
  menuItem: 'test-comp',
  routeBase: '/components/collections/test-comp',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'test-comp',
  subHeader: 'test-comp is a component for user interaction.',

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
  importMsg: "import { TestComp } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: 'TestComp component description for accessibility.',
    example: '<TestComp />',
  },
};
