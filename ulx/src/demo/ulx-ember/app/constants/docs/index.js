// ==========================================================================
// DOCUMENTATION NAVIGATION ITEMS
// ==========================================================================
// Simplified navigation structure for Ember docs.

import utilNavSchema from 'ulx-ember/data/util-nav-schema';

export const DocNavItems = [
  {
    menuTitle: 'Getting Started',
    icon: 'bs-icons1 home-icon-01 s18',
    to: '/walkthrough',
    route: 'walkthrough',
  },
  ...utilNavSchema,
  {
    menuTitle: 'Components',
    icon: 'bs-icons1 image-left-right-icon s18',
    children: [
      // 1. FORM
      {
        category: 'Form',
        items: [
          {
            menuItem: 'Input',
            to: '/components/elements/input',
            route: 'components.elements.input',
          },
          {
            menuItem: 'IconInput',
            to: '/components/elements/ulx-icon-input',
            route: 'components.elements.ulx-icon-input',
          },
          {
            menuItem: 'InputGroup',
            to: '/components/elements/input-group',
            route: 'components.elements.input-group',
          },
          {
            menuItem: 'Checkbox',
            to: '/components/elements/checkbox',
            route: 'components.elements.checkbox',
          },
          {
            menuItem: 'Radio',
            to: '/components/elements/radio',
            route: 'components.elements.radio',
          },
          {
            menuItem: 'TristateCheckbox',
            to: '/components/elements/tristate-checkbox',
            route: 'components.elements.tristate-checkbox',
          },
          {
            menuItem: 'Toggle',
            to: '/components/elements/toggle',
            route: 'components.elements.toggle',
          },
          {
            menuItem: 'Dropdown',
            to: '/components/elements/dropdown',
            route: 'components.elements.dropdown',
          },
          {
            menuItem: 'MultiSelect',
            to: '/components/collections/multiselect',
            route: 'components.collections.multiselect',
          },
          {
            menuItem: 'Slider',
            to: '/components/elements/slider',
            route: 'components.elements.slider',
          },
          {
            menuItem: 'Password',
            to: '/components/elements/password',
            route: 'components.elements.password',
          },
          {
            menuItem: 'Form',
            to: '/components/collections/form',
            route: 'components.collections.form',
          },
        ],
      },

      // 2. BUTTON
      {
        category: 'Button',
        items: [
          {
            menuItem: 'Button',
            to: '/components/elements/button',
            route: 'components.elements.button',
          },
          {
            menuItem: 'SelectButton',
            to: '/components/elements/select-button',
            route: 'components.elements.select-button',
          },
          {
            menuItem: 'SplitButton',
            to: '/components/collections/split-button',
            route: 'components.collections.split-button',
          },
        ],
      },

      // 3. DATA
      {
        category: 'Data',
        items: [
          {
            menuItem: 'DataView',
            to: '/components/modules/data-view',
            route: 'components.modules.data-view',
          },
          {
            menuItem: 'Paginator',
            to: '/components/modules/paginator',
            route: 'components.modules.paginator',
          },
          {
            menuItem: 'Table',
            to: '/components/modules/table',
            route: 'components.modules.table',
          },
        ],
      },

      // 4. PANEL
      {
        category: 'Panel',
        items: [
          {
            menuItem: 'Accordion',
            to: '/components/collections/accordion',
            route: 'components.collections.accordion',
          },
          {
            menuItem: 'Card',
            to: '/components/collections/card',
            route: 'components.collections.card',
          },
          {
            menuItem: 'Timeline',
            to: '/components/collections/timeline',
            route: 'components.collections.timeline',
          },
          {
            menuItem: 'Toolbar',
            to: '/components/collections/toolbar',
            route: 'components.collections.toolbar',
          },
          {
            menuItem: 'Segment',
            to: '/components/collections/segment',
            route: 'components.collections.segment',
          },
          {
            menuItem: 'OptionSegment',
            to: '/components/collections/option-segment',
            route: 'components.collections.option-segment',
          },
        ],
      },

      // 5. OVERLAY
      {
        category: 'Overlay',
        items: [
          {
            menuItem: 'Modal',
            to: '/components/modules/modal',
            route: 'components.modules.modal',
          },
          {
            menuItem: 'Popup',
            to: '/components/modules/popup',
            route: 'components.modules.popup',
          },
          {
            menuItem: 'Tooltip',
            to: '/components/modules/tooltip',
            route: 'components.modules.tooltip',
          },
          {
            menuItem: 'Slidepane',
            to: '/components/modules/slidepane',
            route: 'components.modules.slidepane',
          },
        ],
      },

      // 6. MENU ✅ (UPDATED)
      {
        category: 'Menu',
        items: [
          {
            menuItem: 'TabMenu',
            to: '/components/collections/tab-menu',
            route: 'components.collections.tab-menu',
          },
          {
            menuItem: 'TieredMenu',
            to: '/components/modules/tieredmenu',
            route: 'components.modules.tieredmenu',
          },
          {
            menuItem: 'PanelMenu',
            to: '/components/modules/panel-menu',
            route: 'components.modules.panel-menu',
          }, // ✅ NEW
          {
            menuItem: 'Steps',
            to: '/components/modules/steps',
            route: 'components.modules.steps',
          },
        ],
      },

      // 7. MESSAGES
      {
        category: 'Messages',
        items: [
          {
            menuItem: 'Message',
            to: '/components/collections/message',
            route: 'components.collections.message',
          },
          {
            menuItem: 'MessageBanner',
            to: '/components/collections/messages',
            route: 'components.collections.messages',
          },
          {
            menuItem: 'Toast',
            to: '/components/modules/toast',
            route: 'components.modules.toast',
          },
        ],
      },

      // 8. MISC
      {
        category: 'Misc',
        items: [
          {
            menuItem: 'Icon',
            to: '/components/elements/icon',
            route: 'components.elements.icon',
          },
          {
            menuItem: 'Divider',
            to: '/components/elements/divider',
            route: 'components.elements.divider',
          },
          {
            menuItem: 'Tag',
            to: '/components/elements/tag',
            route: 'components.elements.tag',
          },
          {
            menuItem: 'Badge',
            to: '/components/elements/badge',
            route: 'components.elements.badge',
          },
          {
            menuItem: 'Chip',
            to: '/components/elements/chip',
            route: 'components.elements.chip',
          },
          {
            menuItem: 'Avatar',
            to: '/components/elements/avatar',
            route: 'components.elements.avatar',
          },
          {
            menuItem: 'ProgressBar',
            to: '/components/elements/progressbar',
            route: 'components.elements.progressbar',
          },
          {
            menuItem: 'ProgressSpinner',
            to: '/components/elements/progressspinner',
            route: 'components.elements.progressspinner',
          },
          {
            menuItem: 'Skeleton',
            to: '/components/elements/skeleton',
            route: 'components.elements.skeleton',
          },
          {
            menuItem: 'EmptyState',
            to: '/components/elements/empty-state',
            route: 'components.elements.empty-state',
          },
          {
            menuItem: 'Rating',
            to: '/components/elements/rating',
            route: 'components.elements.rating',
          },
        ],
      },
    ],
  },
];
