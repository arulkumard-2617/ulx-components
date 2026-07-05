// ==========================================================================
// MESSAGE COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Collections',
  subCategory: 'Notifications',
  menuItem: 'message',
  routeBase: '/components/message',
  icon: 'pi pi-compass',

  header: 'message',
  subHeader: 'Inline message with variant and optional icon.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxMessage } from 'ulx-components'",

  accessibility: {
    description: 'Message component supports role="alert", aria-live="polite", aria-atomic="true".',
    example: '<UlxMessage @text="Info" @variant="info" />',
  },
};
