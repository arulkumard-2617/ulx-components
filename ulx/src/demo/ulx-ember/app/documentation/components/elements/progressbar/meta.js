// ==========================================================================
// Progress Bar Component Metadata
// ==========================================================================

export default {
  category: 'Elements',
  subCategory: 'Misc',
  menuItem: 'Progress Bar',
  routeBase: '/components/elements/progressbar',
  icon: 'bs-icons1 report-icon-01',

  header: 'Progress Bar',
  subHeader:
    'Progress Bar indicates progress (0–100%) or an indeterminate loading state. Uses uls-v2 progress-bar.less.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Builder', route: '/builder', id: 'builder' },
  ],

  importMsg: "import { UlxProgressBar } from 'ulx-components';",

  accessibility: {
    description:
      'Determinate: role="progressbar" with aria-valuenow, aria-valuemin, aria-valuemax. Indeterminate: aria-valuetext="Loading".',
    example: '<UlxProgressBar @value={{50}} aria-label="Upload progress" />',
  },
};
