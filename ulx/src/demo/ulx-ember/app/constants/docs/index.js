// ==========================================================================
// DOCUMENTATION NAVIGATION ITEMS
// ==========================================================================
// Simplified navigation structure for Ember docs
// TODO: Can be enhanced to auto-generate from component registry

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
    children: [
      {
        menuItem: 'Border',
        to: '/utilities/border',
        route: 'utilities.border',
      },
      {
        menuItem: 'Clear',
        to: '/utilities/clear',
        route: 'utilities.clear',
      },
      {
        menuItem: 'Color',
        to: '/utilities/color',
        route: 'utilities.color',
      },
      {
        menuItem: 'Cursor',
        to: '/utilities/cursor',
        route: 'utilities.cursor',
      },
      {
        menuItem: 'Display',
        to: '/utilities/display',
        route: 'utilities.display',
      },
      {
        menuItem: 'Filter',
        to: '/utilities/filter',
        route: 'utilities.filter',
      },
      {
        menuItem: 'Flex',
        to: '/utilities/flex',
        route: 'utilities.flex',
      },
      {
        menuItem: 'Float',
        to: '/utilities/float',
        route: 'utilities.float',
      },
      {
        menuItem: 'Gap',
        to: '/utilities/gap',
        route: 'utilities.gap',
      },
      {
        menuItem: 'Grid',
        to: '/utilities/grid',
        route: 'utilities.grid',
      },
      {
        menuItem: 'Hover',
        to: '/utilities/hover',
        route: 'utilities.hover',
      },
      {
        menuItem: 'Line Clamp',
        to: '/utilities/line-clamp',
        route: 'utilities.line-clamp',
      },
      {
        menuItem: 'Object Fit',
        to: '/utilities/object-fit',
        route: 'utilities.object-fit',
      },
      {
        menuItem: 'Opacity',
        to: '/utilities/opacity',
        route: 'utilities.opacity',
      },
      {
        menuItem: 'Overflow',
        to: '/utilities/overflow',
        route: 'utilities.overflow',
      },
      {
        menuItem: 'Pointer Events',
        to: '/utilities/pointer-events',
        route: 'utilities.pointer-events',
      },
      {
        menuItem: 'Position',
        to: '/utilities/position',
        route: 'utilities.position',
      },
      {
        menuItem: 'Shadow',
        to: '/utilities/shadow',
        route: 'utilities.shadow',
      },
      {
        menuItem: 'Size',
        to: '/utilities/size',
        route: 'utilities.size',
      },
      {
        menuItem: 'Space',
        to: '/utilities/space',
        route: 'utilities.space',
      },
      {
        menuItem: 'Text Align',
        to: '/utilities/text-align',
        route: 'utilities.text-align',
      },
      {
        menuItem: 'Text Decoration',
        to: '/utilities/text-decoration',
        route: 'utilities.text-decoration',
      },
      {
        menuItem: 'Text Transform',
        to: '/utilities/text-transform',
        route: 'utilities.text-transform',
      },
      {
        menuItem: 'User Select',
        to: '/utilities/user-select',
        route: 'utilities.user-select',
      },
      {
        menuItem: 'Vertical Align',
        to: '/utilities/vertical-align',
        route: 'utilities.vertical-align',
      },
      {
        menuItem: 'Visibility',
        to: '/utilities/visibility',
        route: 'utilities.visibility',
      },
      {
        menuItem: 'White Space',
        to: '/utilities/white-space',
        route: 'utilities.white-space',
      },
      {
        menuItem: 'Word Break',
        to: '/utilities/word-break',
        route: 'utilities.word-break',
      },
      {
        menuItem: 'Z-Index',
        to: '/utilities/z-index',
        route: 'utilities.z-index',
      },
    ],
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
          {
            menuItem: 'Dropdown',
            to: '/components/elements/dropdown',
            route: 'components.elements.dropdown',
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
            menuItem: 'Chip',
            to: '/components/elements/chip',
            route: 'components.elements.chip',
          },
          {
            menuItem: 'Divider',
            to: '/components/elements/divider',
            route: 'components.elements.divider'
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
          {
            menuItem: 'Accordion',
            to: '/components/collections/accordion',
            route: 'components.collections.accordion'
          }
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
          {
            menuItem: 'MultiSelect',
            to: '/components/collections/multiselect',
            route: 'components.collections.multiselect',
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
            route: 'components.modules.steps'
          }
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
            route: 'components.modules.tooltip'
          },
          {
            menuItem: 'slidepane',
            to: '/components/modules/slidepane',
            route: 'components.modules.slidepane'
          }
        ]
      }
    ]
  }
];
