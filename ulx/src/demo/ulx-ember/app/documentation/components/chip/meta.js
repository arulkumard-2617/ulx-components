// ==========================================================================
// CHIP COMPONENT METADATA
// ==========================================================================
// Single source of truth for Chip component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Misc',
  menuItem: 'Chip',
  routeBase: '/components/chip',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'Chip',
  subHeader: 'Chip is a component for displaying a compact label with optional icon, image, and remove action.',

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
  importMsg: "import { UlxChip } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: 'Chip component description for accessibility.',
    example: '<UlxChip />',
  },
};
