// ==========================================================================
// FIELDSET COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Collections',
  subCategory: 'Form',
  menuItem: 'Fieldset',
  routeBase: '/components/fieldset',
  icon: 'bs-icons1 sp-compass-icon',

  header: 'Fieldset',
  subHeader:
    'UlxFieldSet groups related fields in a semantic fieldset with legend, optional description, grid or stack layout, and optional actions.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    {
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough'
    }
  ],

  importMsg: "import { UlxFieldSet } from 'ulx-components'",

  accessibility: {
    description:
      'Use a visible legend or associate the group with surrounding headings via aria-labelledby on the fieldset when the legend is visually hidden.',
    example: '<UlxFieldSet @legend="Section title">...</UlxFieldSet>'
  }
};
