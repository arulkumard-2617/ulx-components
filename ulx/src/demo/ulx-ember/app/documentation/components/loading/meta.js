// ==========================================================================
// Loading Component Metadata
// ==========================================================================

export default {
  category: 'Elements',
  subCategory: 'Misc',
  menuItem: 'Loading',
  routeBase: '/components/loading',
  icon: 'bs-icons1 progress-icon s18',

  header: 'Loading',
  subHeader:
    'Loading overlays a page or container while content is fetching, using ULS loading modes and a dot spinner indicator.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Params', route: '/params', id: 'params' },
    { name: 'Architecture', route: '/architecture', id: 'architecture' }
  ],

  importMsg: "import { UlxLoading } from 'ulx-components';",

  accessibility: {
    description:
      'Loading uses role="status" with aria-live="polite" and an accessible name from @ariaLabel or the loading label.',
    example: '<UlxLoading @mode="cover" @ariaLabel="Loading" />'
  }
};
