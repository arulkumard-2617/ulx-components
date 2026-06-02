// ==========================================================================
// DOCUMENTATION NAVIGATION ITEMS
// ==========================================================================
// Simplified navigation structure for Ember docs.

import utilNavSchema from 'ulx-ember/data/util-nav-schema';

export const DocNavItems = [
  {
    menuTitle: 'Getting Started',
    icon: 'bs-icons1 home-icon-01 s18',
    to: '/getting-started/overview',
    route: 'getting-started.overview',
    children: [
      {
        menuItem: 'Overview',
        route: 'getting-started.overview'
      },
      {
        menuItem: 'Quick Start',
        route: 'getting-started.quick-start'
      },
      {
        menuItem: 'Styles and Theming',
        route: 'getting-started.styles-and-theming'
      },
      {
        menuItem: 'Common mistakes',
        route: 'getting-started.common-mistakes'
      },
      {
        menuItem: 'Docs Walkthrough',
        route: 'getting-started.docs-walkthrough'
      }
    ]
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
            to: '/components/input',
            route: 'components.input'
          },
          {
            menuItem: 'ChipInput',
            to: '/components/chip-input',
            route: 'components.chip-input'
          },
          {
            menuItem: 'Textarea',
            to: '/components/textarea',
            route: 'components.textarea'
          },
          {
            menuItem: 'RichTextEditor',
            to: '/components/rich-text-editor',
            route: 'components.rich-text-editor'
          },
          {
            menuItem: 'IconInput',
            to: '/components/ulx-icon-input',
            route: 'components.ulx-icon-input'
          },
          {
            menuItem: 'InputGroup',
            to: '/components/input-group',
            route: 'components.input-group'
          },
          {
            menuItem: 'Checkbox',
            to: '/components/checkbox',
            route: 'components.checkbox'
          },
          {
            menuItem: 'Radio',
            to: '/components/radio',
            route: 'components.radio'
          },
          {
            menuItem: 'TristateCheckbox',
            to: '/components/tristate-checkbox',
            route: 'components.tristate-checkbox'
          },
          {
            menuItem: 'Toggle',
            to: '/components/toggle',
            route: 'components.toggle'
          },
          {
            menuItem: 'Dropdown',
            to: '/components/dropdown',
            route: 'components.dropdown'
          },
          {
            menuItem: 'MultiSelect',
            to: '/components/multiselect',
            route: 'components.multiselect'
          },
          {
            menuItem: 'Slider',
            to: '/components/slider',
            route: 'components.slider'
          },
          {
            menuItem: 'Password',
            to: '/components/password',
            route: 'components.password'
          },
          {
            menuItem: 'Fieldset',
            to: '/components/fieldset',
            route: 'components.fieldset'
          },
          {
            menuItem: 'DatePicker',
            to: '/components/date-picker',
            route: 'components.date-picker'
          },
          {
            menuItem: 'DateRangePicker',
            to: '/components/date-range-picker',
            route: 'components.date-range-picker'
          },
          {
            menuItem: 'TimePicker',
            to: '/components/time-picker',
            route: 'components.time-picker'
          },
          {
            menuItem: 'Form',
            to: '/components/form',
            route: 'components.form'
          }
        ]
      },

      // 2. BUTTON
      {
        category: 'Button',
        items: [
          {
            menuItem: 'Button',
            to: '/components/button',
            route: 'components.button'
          },
          {
            menuItem: 'SelectButton',
            to: '/components/select-button',
            route: 'components.select-button'
          },
          {
            menuItem: 'SplitButton',
            to: '/components/split-button',
            route: 'components.split-button'
          },
          {
            menuItem: 'ActionMenu',
            to: '/components/action-menu',
            route: 'components.action-menu'
          },
          {
            menuItem: 'ActionButtons',
            to: '/components/action-buttons',
            route: 'components.action-buttons'
          }
        ]
      },

      // 3. DATA
      {
        category: 'Data',
        items: [
          {
            menuItem: 'DataView',
            to: '/components/data-view',
            route: 'components.data-view'
          },
          {
            menuItem: 'Sorter',
            to: '/components/sorter',
            route: 'components.sorter'
          },
          {
            menuItem: 'Paginator',
            to: '/components/paginator',
            route: 'components.paginator'
          },
          {
            menuItem: 'Table',
            to: '/components/table',
            route: 'components.table'
          }
        ]
      },

      // 4. PANEL
      {
        category: 'Panel',
        items: [
          {
            menuItem: 'Accordion',
            to: '/components/accordion',
            route: 'components.accordion'
          },
          {
            menuItem: 'Card',
            to: '/components/card',
            route: 'components.card'
          },
          {
            menuItem: 'Timeline',
            to: '/components/timeline',
            route: 'components.timeline'
          },
          {
            menuItem: 'Toolbar',
            to: '/components/toolbar',
            route: 'components.toolbar'
          },
          {
            menuItem: 'Segment',
            to: '/components/segment',
            route: 'components.segment'
          },
          {
            menuItem: 'OptionSegment',
            to: '/components/option-segment',
            route: 'components.option-segment'
          }
        ]
      },

      // 5. OVERLAY
      {
        category: 'Overlay',
        items: [
          {
            menuItem: 'Modal',
            to: '/components/modal',
            route: 'components.modal'
          },
          {
            menuItem: 'Popup',
            to: '/components/popup',
            route: 'components.popup'
          },
          {
            menuItem: 'Tooltip',
            to: '/components/tooltip',
            route: 'components.tooltip'
          },
          {
            menuItem: 'Slidepane',
            to: '/components/slidepane',
            route: 'components.slidepane'
          }
        ]
      },

      // 6. MENU ✅ (UPDATED)
      {
        category: 'Menu',
        items: [
          {
            menuItem: 'TabMenu',
            to: '/components/tab-menu',
            route: 'components.tab-menu'
          },
          {
            menuItem: 'TieredMenu',
            to: '/components/tieredmenu',
            route: 'components.tieredmenu'
          },
          {
            menuItem: 'PanelMenu',
            to: '/components/panel-menu',
            route: 'components.panel-menu'
          }, // ✅ NEW
          {
            menuItem: 'Steps',
            to: '/components/steps',
            route: 'components.steps'
          }
        ]
      },

      // 7. MESSAGES
      {
        category: 'Messages',
        items: [
          {
            menuItem: 'Message',
            to: '/components/message',
            route: 'components.message'
          },
          {
            menuItem: 'MessageBanner',
            to: '/components/messages',
            route: 'components.messages'
          },
          {
            menuItem: 'Toast',
            to: '/components/toast',
            route: 'components.toast'
          }
        ]
      },

      // 8. MISC
      {
        category: 'Misc',
        items: [
          {
            menuItem: 'Icon',
            to: '/components/icon',
            route: 'components.icon'
          },
          {
            menuItem: 'Divider',
            to: '/components/divider',
            route: 'components.divider'
          },
          {
            menuItem: 'Tag',
            to: '/components/tag',
            route: 'components.tag'
          },
          {
            menuItem: 'Badge',
            to: '/components/badge',
            route: 'components.badge'
          },
          {
            menuItem: 'Chip',
            to: '/components/chip',
            route: 'components.chip'
          },
          {
            menuItem: 'Avatar',
            to: '/components/avatar',
            route: 'components.avatar'
          },
          {
            menuItem: 'Image',
            to: '/components/ulx-image',
            route: 'components.ulx-image'
          },
          {
            menuItem: 'ProgressBar',
            to: '/components/progressbar',
            route: 'components.progressbar'
          },
          {
            menuItem: 'ProgressSpinner',
            to: '/components/progressspinner',
            route: 'components.progressspinner'
          },
          {
            menuItem: 'Skeleton',
            to: '/components/skeleton',
            route: 'components.skeleton'
          },
          {
            menuItem: 'EmptyState',
            to: '/components/empty-state',
            route: 'components.empty-state'
          },
          {
            menuItem: 'Rating',
            to: '/components/rating',
            route: 'components.rating'
          }
        ]
      }
    ]
  }
];
