// ==========================================================================
// SLIDEPANE COMPONENT METADATA
// ==========================================================================
// Single source of truth for Slidepane component documentation

export default {
  // Navigation metadata
  category: 'Modules',
  subCategory: 'Overlay',
  menuItem: 'Slidepane',
  routeBase: '/components/slidepane',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'Slidepane',
  subHeader:
    'Edge drawer for filters, detail panels, and side workflows — UlxSlidePane with focus trap and footer actions.',

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
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough'
    }
  ],

  // Import message for the component
  importMsg: "import { UlxSlidePane } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: "Slidepane component description for accessibility.",
    example: "<Slidepane />"
  }
};
