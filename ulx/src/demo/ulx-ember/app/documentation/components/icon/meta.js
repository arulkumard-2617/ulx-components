// ==========================================================================
// ICON COMPONENT METADATA
// ==========================================================================
// Single source of truth for Icon component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Icons',
  menuItem: 'Icon',
  routeBase: '/components/icon',
  icon: 'bs-icons1 sp-compass-icon',

  // Page metadata
  header: 'Icon',
  subHeader: 'Icon is a component for user interaction.',

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
  ],

  // Import message for the component
  importMsg: "import { Icon } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: 'Icon component description for accessibility.',
    example: '<Icon />',
  },
};
