// ==========================================================================
// ACTION BUTTONS COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Collections',
  subCategory: 'Button',
  menuItem: 'ActionButtons',
  routeBase: '/components/action-buttons',
  icon: 'bs-icons1 checkbox-icon',

  header: 'ActionButtons',
  subHeader:
    'ActionButtons renders a primary button or split button from a list of action descriptors.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' }
  ],

  importMsg: "import { UlxActionButtons } from 'ulx-components'",

  accessibility: {
    description:
      'Single-action mode uses a native button; split mode exposes a main button and dropdown with menu keyboard patterns from the underlying split button.',
    example:
      '<UlxActionButtons @actionButtons={{actionButtons}} @variant="primary" />'
  }
};
