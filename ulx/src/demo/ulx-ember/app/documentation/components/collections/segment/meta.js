// ==========================================================================
// SEGMENT COMPONENT METADATA
// ==========================================================================
// Single source of truth for Segment component documentation

export default {
  // Navigation metadata
  category: 'Collections',
  subCategory: 'Panel',
  menuItem: 'Segment',
  routeBase: '/components/collections/segment',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'Segment',
  subHeader: 'Segment is a component for user interaction.',

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
  importMsg: "import { Segment } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: "Segment component description for accessibility.",
    example: "<Segment />"
  }
};
