// ==========================================================================
// MODAL COMPONENT METADATA
// ==========================================================================
// Single source of truth for Modal component documentation

export default {
  // Navigation metadata
  category: 'Modules',
  subCategory: 'Overlay',
  menuItem: 'Modal',
  routeBase: '/components/modules/modal',
  icon: 'bs-icons1 chat-square-text-icon',

  // Page metadata
  header: 'Modal',
  subHeader:
    'Modal displays content in a modal overlay with configurable positions and behaviors.',

  // Tab configuration
  tabs: [
    {
      name: 'Features',
      route: '/features',
      id: 'features',
    },
    {
      name: 'Theming',
      route: '/theming',
      id: 'theming',
    },
    {
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough',
    },
  ],

  // Import message for the component
  importMsg: "import { UlxModal } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description:
      'Modal component with proper ARIA roles, keyboard navigation, and accessible close controls.',
    example:
      '<UlxModal @visible={{this.isVisible}} @onHide={{this.handleHide}} @header="Modal Title" />',
  },
};
