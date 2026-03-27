// ==========================================================================
// ACCORDION COMPONENT METADATA
// ==========================================================================
// Single source of truth for Accordion component documentation

export default {
  // Navigation metadata
  category: 'Collections',
  subCategory: 'Panel',
  menuItem: 'Accordion',
  routeBase: '/components/accordion',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'Accordion',
  subHeader: 'Accordion groups a collection of contents in tabs.',

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
  importMsg: "import { UlxAccordion } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: "Accordion component description for accessibility.",
    example: "<UlxAccordion @model={{this.tabs}} />"
  }
};
