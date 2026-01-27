// ==========================================================================
// BUTTON COMPONENT METADATA
// ==========================================================================
// Single source of truth for Button component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Button',
  menuItem: 'Button',
  routeBase: '/components/elements/button',
  icon: 'pi pi-compass',
  
  // Page metadata
  header: 'Button',
  subHeader: 'Button is a component for user interaction.',
  
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
  importMsg: "import { Button } from 'uls-components'",
  
  // Accessibility information
  accessibility: {
    description: "Button component description for accessibility.",
    example: "<Button />"
  }
};
