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
    menuTitle: 'Elements',
    icon: 'bs-icons1 image-left-right-icon s18',
    children: [
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
            menuItem: 'checkbox',
            to: '/components/elements/checkbox',
            route: 'components.elements.checkbox',
          },
          {
            menuItem: 'radio',
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
            menuItem: 'Rating',
            to: '/components/elements/rating',
            route: 'components.elements.rating',
          },
        ],
      },
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
        ],
      },
      {
        category: 'Icons',
        items: [
          {
            menuItem: 'Icon',
            to: '/components/elements/icon',
            route: 'components.elements.icon',
          },
        ],
      },
      {
        category: 'Misc',
        items: [
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
            menuItem: 'Progress Bar',
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
        ],
      },
    ],
  },
  {
    menuTitle: 'Collections',
    icon: 'bs-icons1 list-view-icon s18',
    children: [
      {
        category: 'Menu',
        items: [
          {
            menuItem: 'TabMenu',
            to: '/components/collections/tab-menu',
            route: 'components.collections.tab-menu',
          },
        ],
      },
      {
        category: 'Panel',
        items: [
          {
            menuItem: 'Segment',
            to: '/components/collections/segment',
            route: 'components.collections.segment',
          },
          {
            menuItem: 'Toolbar',
            to: '/components/collections/toolbar',
            route: 'components.collections.toolbar',
          },
          {
            menuItem: 'OptionSegment',
            to: '/components/collections/option-segment',
            route: 'components.collections.option-segment',
          },
          {
            menuItem: 'Accordion',
            to: '/components/collections/accordion',
            route: 'components.collections.accordion',
          },
          {
            menuItem: 'Timeline',
            to: '/components/collections/timeline',
            route: 'components.collections.timeline',
          },
          {
            menuItem: 'Card',
            to: '/components/collections/card',
            route: 'components.collections.card',
          },
        ],
      },
      {
        category: 'Button',
        items: [
          {
            menuItem: 'SplitButton',
            to: '/components/collections/split-button',
            route: 'components.collections.split-button',
          },
        ],
      },
      {
        category: 'Form',
        items: [
          {
            menuItem: 'Form',
            to: '/components/collections/form',
            route: 'components.collections.form',
          },
        ],
      },
      {
        category: 'Notifications',
        items: [
          {
            menuItem: 'Message',
            to: '/components/collections/message',
            route: 'components.collections.message',
          },
          {
            menuItem: 'Messages',
            to: '/components/collections/messages',
            route: 'components.collections.messages',
          },
        ],
      },
    ],
  },
  {
    menuTitle: 'Modules',
    icon: 'bs-icons1 bulk-code-icon s18',
    children: [
      {
        category: 'Menu',
        items: [
          {
            menuItem: 'TieredMenu',
            to: '/components/modules/tieredmenu',
            route: 'components.modules.tieredmenu',
          },
          {
            menuItem: 'Steps',
            to: '/components/modules/steps',
            route: 'components.modules.steps',
          },
        ],
      },
      {
        category: 'Message',
        items: [
          {
            menuItem: 'Toast',
            to: '/components/modules/toast',
            route: 'components.modules.toast',
          },
        ],
      },
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
    ],
  },
];
