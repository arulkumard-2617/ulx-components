// ==========================================================================
// ICON BUTTON COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Collections',
  subCategory: 'Button',
  menuItem: 'IconButton',
  routeBase: '/components/icon-button',
  icon: 'bs-icons1 checkbox-icon',

  header: 'IconButton',
  subHeader:
    'IconButton wraps UlxButton for icon placement with @iconLeft or @iconRight and an optional @label.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxIconButton } from 'ulx-components'",

  accessibility: {
    description:
      'Icon-only buttons require aria-label. Labeled buttons use the label for the accessible name.',
    example:
      '<UlxIconButton @iconLeft="search-icon" @iconComponentClass="bs-icons1" aria-label="Search" />',
  },
};
