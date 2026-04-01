// ==========================================================================
// MESSAGES COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Collections',
  subCategory: 'Notifications',
  menuItem: 'Message banner',
  routeBase: '/components/messages',
  icon: 'pi pi-compass',

  header: 'Message banner',
  subHeader:
    'Single-message banner with variant, closable, and optional one-time dismiss (localStorage).',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Builder', route: '/builder', id: 'builder' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxBannerMessage } from 'ulx-components'",
};
