// ==========================================================================
// ProgressSpinner Component Metadata
// ==========================================================================

export default {
  category: 'Elements',
  subCategory: 'Misc',
  menuItem: 'ProgressSpinner',
  routeBase: '/components/progressspinner',
  icon: 'bs-icons1 progress-icon',

  header: 'ProgressSpinner',
  subHeader:
    'ProgressSpinner is a process status indicator that displays an infinite circular spinner.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Builder', route: '/builder', id: 'builder' },
  ],

  importMsg: "import { UlxProgressSpinner } from 'ulx-components';",

  accessibility: {
    description:
      'Use role="progressbar" (indeterminate). Pass aria-label when the spinner is the main loading indicator.',
    example: '<UlxProgressSpinner @ariaLabel="Loading" />',
  },
};
