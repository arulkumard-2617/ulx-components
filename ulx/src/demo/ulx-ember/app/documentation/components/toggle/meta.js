// ==========================================================================
// TOGGLE COMPONENT METADATA
// ==========================================================================
// Single source of truth for Toggle (InputSwitch) component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Form',
  menuItem: 'toggle',
  routeBase: '/components/toggle',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'toggle',
  subHeader: 'toggle is a component for on/off selection.',

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
  importMsg: "import { UlxToggle } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: 'Toggle component uses a hidden checkbox with role="switch" for semantics and keyboard (Space toggles). Use inputId with <label for=""> or aria-label / aria-labelledby.',
    example: '<UlxToggle />',
  },
};
