// ==========================================================================
// TABMENU COMPONENT METADATA
// ==========================================================================
// Single source of truth for TabMenu component documentation

export default {
  // Navigation metadata
  category: 'Collections',
  subCategory: 'Menu',
  menuItem: 'TabMenu',
  routeBase: '/components/collections/tab-menu',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'TabMenu',
  subHeader: 'TabMenu is a component for user interaction.',

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
  importMsg: "import { TabMenu } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: "TabMenu component description for accessibility.",
    example: "<TabMenu />"
  }
};
