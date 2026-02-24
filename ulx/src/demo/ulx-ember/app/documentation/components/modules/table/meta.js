export default {
  category: 'Modules',
  subCategory: 'Data',
  menuItem: 'Table',
  routeBase: '/components/modules/table',
  icon: 'bs-icons1 table-icon',

  header: 'Table',
  subHeader:
    'UlxTable is a full-featured data table with sorting, filtering, pagination, selection, row expansion, cell/row editing, column resize, frozen columns, and more — matching PrimeReact DataTable feature parity.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming',  route: '/theming',  id: 'theming'  },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxTable } from 'ulx-components'",

  accessibility: {
    description:
      'UlxTable uses <table role="grid">, with aria-sort on sortable headers, aria-selected on selected rows, aria-expanded on expandable rows. Selection checkboxes/radios have aria-label. Loading overlay has aria-live.',
    example:
      '<UlxTable @value={{this.data}} @columns={{this.columns}} @dataKey="id" @selectionMode="checkbox" @selection={{this.selected}} @onSelectionChange={{this.onSelect}} />',
  },
};
