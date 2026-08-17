// ==========================================================================
// BUTTON COMPONENT METADATA
// ==========================================================================
// Single source of truth for Button component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Button',
  menuItem: 'Button',
  routeBase: '/components/button',
  icon: 'bs-icons1 checkbox-icon',

  // Page metadata
  header: 'Button',
  subHeader:
    'Primary action control — labels, variants, icons, loading, and link mode for forms and dialogs.',

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
  ],

  // Import message for the component
  importMsg: "import { UlxButton } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description:
      'Button component with full keyboard support and ARIA attributes.',
    example: '<UlxButton @label="Click me" />',
  },
};
