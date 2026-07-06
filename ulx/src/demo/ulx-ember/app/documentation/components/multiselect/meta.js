// ==========================================================================
// MULTISELECT COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Elements',
  subCategory: 'Form',
  menuItem: 'MultiSelect',
  routeBase: '/components/multiselect',
  icon: 'bs-icons1 sp-compass-icon',

  header: 'MultiSelect',
  subHeader:
    'MultiSelect is a form component for selecting multiple values from a list of options.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxMultiSelect } from 'ulx-components'",

  accessibility: {
    description:
      'MultiSelect uses combobox and listbox roles with aria-multiselectable, keyboard navigation and ARIA attributes.',
    example:
      '<UlxMultiSelect @options={{options}} @value={{this.selected}} @onChange={{this.onChange}} />',
  },
};
