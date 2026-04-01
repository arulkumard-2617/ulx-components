// ==========================================================================
// TIMELINE COMPONENT METADATA
// ==========================================================================
// Single source of truth for Timeline component documentation

export default {
  // Navigation metadata
  category: 'Collections',
  subCategory: 'Panel',
  menuItem: 'Timeline',
  routeBase: '/components/timeline',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'Timeline',
  subHeader: 'Timeline visualizes a series of chained events.',

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
  importMsg: "import { UlxTimeline } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: "Timeline renders a semantic ordered list of events and does not include interactive elements by default.",
    example: "<UlxTimeline @model={{this.events}} />"
  }
};
