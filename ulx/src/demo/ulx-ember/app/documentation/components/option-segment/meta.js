// ==========================================================================
// OPTIONSEGMENT COMPONENT METADATA
// ==========================================================================
// Single source of truth for OptionSegment component documentation

export default {
  // Navigation metadata
  category: 'Collections',
  subCategory: 'Panel',
  menuItem: 'OptionSegment',
  routeBase: '/components/option-segment',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'OptionSegment',
  subHeader: 'OptionSegment is a component for user interaction.',

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
  importMsg: "import { OptionSegment } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: "OptionSegment component description for accessibility.",
    example: "<OptionSegment />"
  }
};
