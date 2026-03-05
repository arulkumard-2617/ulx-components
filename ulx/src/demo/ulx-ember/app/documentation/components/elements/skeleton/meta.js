// ==========================================================================
// Skeleton Component Metadata
// ==========================================================================

export default {
  category: 'Elements',
  subCategory: 'Misc',
  menuItem: 'Skeleton',
  routeBase: '/components/elements/skeleton',
  icon: 'bs-icons1 image-left-right-icon s18',

  header: 'Skeleton',
  subHeader:
    'Skeleton is a placeholder component to indicate content loading states.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Params', route: '/params', id: 'params' },
    { name: 'Architecture', route: '/architecture', id: 'architecture' },
  ],

  importMsg: "import { UlxSkeleton } from 'ulx-components'",

  accessibility: {
    description:
      'Skeleton uses aria-hidden="true" so screen readers ignore it. When grouping multiple skeletons, use aria-busy on the container element.',
    example:
      '<UlxSkeleton @width="100%" @height="1rem" />',
  },
};
