// ==========================================================================
// RATING COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Elements',
  subCategory: 'Form',
  menuItem: 'Rating',
  routeBase: '/components/elements/rating',
  icon: 'pi pi-compass',

  header: 'Rating',
  subHeader: 'Rating is a star-based selection input.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Builder', route: '/builder', id: 'builder' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxRating } from 'ulx-components'",

  accessibility: {
    description: 'Rating uses role="radiogroup" with aria-label; each star is role="radio" with aria-checked. Use ariaLabel for a custom name. Keyboard: Tab to focus, Left/Right to change value, Space to set.',
    example: '<UlxRating @value={{this.value}} @onChange={{this.handleChange}} />',
  },
};
