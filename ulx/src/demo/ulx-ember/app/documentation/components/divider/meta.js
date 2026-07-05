// ==========================================================================
// DIVIDER COMPONENT METADATA
// ==========================================================================

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Misc',
  menuItem: 'Divider',
  routeBase: '/components/divider',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'Divider',
  subHeader: 'Divider is used to separate contents.',

  // Tab configuration
  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  // Import message for the component
  importMsg: "import { UlxDivider } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: 'Divider uses a separator role with aria-orientation set to either horizontal or vertical.',
    example: '<UlxDivider />',
  },
};

