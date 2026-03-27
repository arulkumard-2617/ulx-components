// ==========================================================================
// PAGINATOR COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Modules',
  subCategory: 'Data',
  menuItem: 'Paginator',
  routeBase: '/components/paginator',
  icon: 'bs-icons1 list-icon',

  header: 'Paginator',
  subHeader:
    'Paginator displays content in paged format with first/prev/next/last and page links. Uses UlxButton and UlxDropdown.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxPaginator } from 'ulx-components'",

  accessibility: {
    description:
      'Paginator with ARIA labels for first/prev/next/last and page buttons, keyboard operable, and rows-per-page dropdown.',
    example:
      '<UlxPaginator @totalRecords={{120}} @rows={{10}} @first={{this.first}} @onPageChange={{this.onPageChange}} />',
  },
};
