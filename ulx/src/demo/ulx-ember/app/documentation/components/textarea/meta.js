// ==========================================================================
// TEXTAREA COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Form',
  subCategory: 'Elements',
  menuItem: 'Textarea',
  routeBase: '/components/textarea',
  icon: 'bs-icons1 sp-compass-icon',

  header: 'Textarea',
  subHeader: 'Textarea is an extension to standard input element with multi-line support.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxTextarea } from 'ulx-components'",

  accessibility: {
    description:
      'Textarea component description for accessibility.',
    example: '<UlxTextarea />',
  },
};
