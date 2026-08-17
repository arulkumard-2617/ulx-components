// ==========================================================================
// CARD COMPONENT METADATA (Collections / Panel)
// ==========================================================================

export default {
  category: 'Collections',
  subCategory: 'Panel',
  menuItem: 'Card',
  routeBase: '/components/card',
  icon: 'bs-icons1 image-left-right-icon s18',

  header: 'Card',
  subHeader: 'Card is a flexible container with header, body, and footer content.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxCard } from 'ulx-components'",

  accessibility: {
    description:
      'Card does not enforce a specific ARIA role. For landmark usage, pass role=\"region\" and aria-label to the root element.',
    example: '<UlxCard @title=\"Card\" role=\"region\" aria-label=\"Card\" />',
  },
};

