// ==========================================================================
// TAG COMPONENT METADATA
// ==========================================================================
// Single source of truth for Tag component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Misc',
  menuItem: 'tag',
  routeBase: '/components/elements/tag',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'tag',
  subHeader: 'tag is a component for user interaction.',

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
  importMsg: "import { Tag } from 'uls-components'",

  // Accessibility information
  accessibility: {
    description: "Tag component description for accessibility.",
    example: "<Tag />"
  }
};
