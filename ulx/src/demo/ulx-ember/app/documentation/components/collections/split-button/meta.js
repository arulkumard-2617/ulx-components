// ==========================================================================
// SPLIT BUTTON COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Collections',
  subCategory: 'Button',
  menuItem: 'SplitButton',
  routeBase: '/components/collections/split-button',
  icon: 'bs-icons1 checkbox-icon',

  header: 'SplitButton',
  subHeader:
    'SplitButton groups a default action button with a dropdown of additional options.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxSplitButton } from 'ulx-components'",

  accessibility: {
    description:
      'SplitButton with main button and dropdown; dropdown has aria-haspopup="menu", aria-expanded, aria-controls.',
    example:
      '<UlxSplitButton @label="Save" @model={{items}} @onClick={{save}} />',
  },
};
