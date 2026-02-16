// ==========================================================================
// DOCUMENTATION NAVIGATION ITEMS
// ==========================================================================
// Simplified navigation structure for Ember docs.
// Utilities children are built from ULS utill.schema.json; run
// node scripts/build-utility-nav-from-schema.js to refresh.

import utilityNavFromSchema from 'ulx-ember/data/utility-nav-from-schema';

export const DocNavItems = [
  {
    menuTitle: 'Getting Started',
    icon: 'bs-icons1 home-icon-01 s18',
    to: '/walkthrough',
    route: 'walkthrough',
  },
  {
    menuTitle: 'Foundation',
    icon: 'bs-icons1 design-icon s18',
    children: [
      {
        menuItem: 'Typography',
        to: '/foundation/typography',
        route: 'foundation.typography',
      },
      {
        menuItem: 'Colors',
        to: '/foundation/colors',
        route: 'foundation.colors',
      },
    ],
  },
  {
    menuTitle: 'Utilities',
    icon: 'bs-icons1 settings-icon-01 s18',
    children: utilityNavFromSchema,
  },
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
            menuItem: 'tag',
            to: '/components/elements/tag',
            route: 'components.elements.tag',
          },
          {
            menuItem: 'Badge',
            to: '/components/elements/badge',
            route: 'components.elements.badge',
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
            menuItem: 'OptionSegment',
            to: '/components/collections/option-segment',
            route: 'components.collections.option-segment',
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
        ],
      },
    ],
  },
];
