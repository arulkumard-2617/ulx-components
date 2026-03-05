// ==========================================================================
// DataView Component Metadata
// ==========================================================================

export default {
  category: 'Elements',
  subCategory: 'Misc',
  menuItem: 'DataView',
  routeBase: '/components/elements/data-view',
  icon: 'pi pi-th-large',

  header: 'DataView',
  subHeader:
    'DataView displays data in list or grid layout with optional pagination and sorting.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Params', route: '/params', id: 'params' },
    { name: 'Architecture', route: '/architecture', id: 'architecture' },
  ],

  importMsg: "import { UlxDataView } from 'ulx-components'",

  accessibility: {
    description:
      'DataView uses role="region" with aria-label for the list/grid. Ensure item content has accessible names when interactive.',
    example:
      '<UlxDataView @value={{this.items}} aria-label={{t "aria.dataview.region"}}><:item as |item|>...</:item></UlxDataView>',
  },
};
