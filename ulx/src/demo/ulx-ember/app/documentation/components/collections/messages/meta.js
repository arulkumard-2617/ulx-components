// ==========================================================================
// MESSAGES COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Collections',
  subCategory: 'Notifications',
  menuItem: 'Message banner',
  routeBase: '/components/collections/messages',
  icon: 'pi pi-compass',

  header: 'Message banner',
  subHeader:
    'Container for a list of messages with variant, closable, and optional auto-close.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Builder', route: '/builder', id: 'builder' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxBannerMessage } from 'ulx-components'",
};
