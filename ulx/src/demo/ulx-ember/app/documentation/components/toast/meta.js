// ==========================================================================
// TOAST COMPONENT METADATA
// ==========================================================================
// Single source of truth for Toast component documentation

export default {
  // Navigation metadata
  category: 'Modules',
  subCategory: 'Message',
  menuItem: 'Toast',
  routeBase: '/components/toast',
  icon: 'bs-icons1 bell-ringing-icon',

  // Page metadata
  header: 'Toast',
  subHeader:
    'Toast displays overlay notifications with different types and positions.',

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
  importMsg: "import { UlxToast } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description:
      'Toast component with role="region", role="alert" on messages, and accessible close buttons.',
    example:
      '<UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />',
  },
};
