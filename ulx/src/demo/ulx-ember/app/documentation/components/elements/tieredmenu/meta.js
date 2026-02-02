// ==========================================================================
// TIEREDMENU COMPONENT METADATA
// ==========================================================================
// Single source of truth for Tieredmenu component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Menu',
  menuItem: 'Tieredmenu',
  routeBase: '/components/elements/tieredmenu',
  icon: 'pi pi-bars',
  
  // Page metadata
  header: 'Tieredmenu',
  subHeader: 'Tieredmenu displays submenus in nested overlays.',
  
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
  importMsg: "import { UlsTieredmenu } from 'uls-components'",
  
  // Accessibility information
  accessibility: {
    description: "Tieredmenu component with keyboard navigation and ARIA support.",
    example: "<UlsTieredmenu @model={{items}} />"
  }
};
