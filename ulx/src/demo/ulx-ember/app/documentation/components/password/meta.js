// ==========================================================================
// Password Component Metadata
// ==========================================================================

export default {
  category: 'Elements',
  subCategory: 'Form',
  menuItem: 'Password',
  routeBase: '/components/password',
  icon: 'pi pi-lock',

  header: 'Password',
  subHeader: 'Password displays strength indicator for password fields.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Builder', route: '/builder', id: 'builder' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxPassword } from 'ulx-components'",

  accessibility: {
    description:
      'Password toggle icon uses role="switch" with aria-label and aria-checked. Strength panel uses aria-hidden for screen reader support.',
    example:
      '<UlxPassword @value={{this.value}} @onInput={{this.handleInput}} @toggleMask={{true}} />',
  },
};
