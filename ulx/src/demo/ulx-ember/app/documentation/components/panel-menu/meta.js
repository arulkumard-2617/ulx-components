// ==========================================================================
// PANELMENU COMPONENT METADATA
// ==========================================================================
// Single source of truth for PanelMenu component documentation

export default {
  // Navigation metadata
  category: 'Modules',
  subCategory: 'Menu',
  menuItem: 'PanelMenu',
  routeBase: '/components/panel-menu',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'PanelMenu',
  subHeader: 'PanelMenu is a component for user interaction.',

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
  importMsg: "import { PanelMenu } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: "PanelMenu component description for accessibility.",
    example: "<PanelMenu />"
  }
};
