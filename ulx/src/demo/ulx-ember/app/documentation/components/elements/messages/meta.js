// ==========================================================================
// MESSAGES COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Elements',
  subCategory: 'Misc',
  menuItem: 'messages',
  routeBase: '/components/elements/messages',
  icon: 'pi pi-compass',

  header: 'messages',
  subHeader: 'Container for a list of messages with variant, closable, and optional auto-close.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Builder', route: '/builder', id: 'builder' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxBannerMessage } from 'ulx-components'",

  accessibility: {
    description: 'Messages use role="alert", aria-live="assertive", aria-atomic="true" per message.',
    example: '<UlxBannerMessage @messages={{this.messages}} @onRemove={{this.removeMessage}} />',
  },
};
