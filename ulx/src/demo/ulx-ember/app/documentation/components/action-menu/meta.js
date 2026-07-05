// ==========================================================================
// ACTIONMENU COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Elements',
  subCategory: 'Button',
  menuItem: 'ActionMenu',
  routeBase: '/components/action-menu',
  icon: 'bs-icons1 checkbox-icon',

  header: 'ActionMenu',
  subHeader:
    'ActionMenu combines a trigger button with a popup TieredMenu for contextual actions.',

  tabs: [
    {
      name: 'Features',
      route: '/features',
      id: 'features'
    },
    {
      name: 'Theming',
      route: '/theming',
      id: 'theming'
    },
    {
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough'
    }
  ],

  importMsg: "import { UlxActionMenu } from 'ulx-components'",

  accessibility: {
    description:
      'ActionMenu exposes a trigger with aria-expanded and aria-controls; menu items follow menu keyboard patterns.',
    example:
      '<UlxActionMenu @label="Actions" @items={{items}} @onItemSelect={{this.onSelect}} />'
  }
};
