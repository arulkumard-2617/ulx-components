// ==========================================================================
// DROPDOWN COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Elements',
  subCategory: 'Form',
  menuItem: 'Dropdown',
  routeBase: '/components/dropdown',
  icon: 'bs-icons1 sp-compass-icon',

  header: 'Dropdown',
  subHeader: 'Dropdown is a form component for selecting a value from a list of options.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Builder', route: '/builder', id: 'builder' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg:
    "import { UlxDropdown, UlxField } from 'ulx-components'",

  accessibility: {
    description: 'Dropdown uses combobox and listbox roles with keyboard navigation and ARIA attributes.',
    example: '<UlxDropdown @options={{options}} @onChange={{this.onChange}} />',
  },
};
