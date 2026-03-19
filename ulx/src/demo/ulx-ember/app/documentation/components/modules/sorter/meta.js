// ==========================================================================
// SORTER COMPONENT METADATA
// ==========================================================================
// Single source of truth for Sorter component documentation

export default {
  // Navigation metadata
  category: 'Modules',
  subCategory: 'Data',
  menuItem: 'Sorter',
  routeBase: '/components/Modules/sorter',
  icon: 'pi pi-bars',

  // Page metadata
  header: 'Sorter',
  subHeader: 'Sorter is a drag-and-drop reorder list built on ember-sortable.',

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
  importMsg: "import { UlxSorter, UlxSorterItem } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: "Sorter component description for accessibility.",
    example: "<UlxSorter><UlxSorterItem @model={{item}}>...</UlxSorterItem></UlxSorter>"
  }
};
