// ==========================================================================
// DOCUMENTATION NAVIGATION ITEMS
// ==========================================================================
// Simplified navigation structure for Ember docs
// TODO: Can be enhanced to auto-generate from component registry

export const DocNavItems = [
  {
    menuTitle: 'Getting Started',
    icon: 'pi pi-home',
    to: '/walkthrough',
    route: 'walkthrough'
  },
  {
    menuTitle: 'Foundation',
    icon: 'pi pi-palette',
    children: [
      {
        menuItem: 'Typography',
        to: '/foundation/typography',
        route: 'foundation.typography'
      },
      {
        menuItem: 'Colors',
        to: '/foundation/colors',
        route: 'foundation.colors'
      }
    ]
  },
  {
    menuTitle: 'Utilities',
    icon: 'pi pi-sliders-h',
    children: [
      {
        menuItem: 'Border',
        to: '/utilities/border',
        route: 'utilities.border'
      },
      {
        menuItem: 'Clear',
        to: '/utilities/clear',
        route: 'utilities.clear'
      },
      {
        menuItem: 'Color',
        to: '/utilities/color',
        route: 'utilities.color'
      },
      {
        menuItem: 'Cursor',
        to: '/utilities/cursor',
        route: 'utilities.cursor'
      },
      {
        menuItem: 'Display',
        to: '/utilities/display',
        route: 'utilities.display'
      },
      {
        menuItem: 'Filter',
        to: '/utilities/filter',
        route: 'utilities.filter'
      },
      {
        menuItem: 'Flex',
        to: '/utilities/flex',
        route: 'utilities.flex'
      },
      {
        menuItem: 'Float',
        to: '/utilities/float',
        route: 'utilities.float'
      },
      {
        menuItem: 'Gap',
        to: '/utilities/gap',
        route: 'utilities.gap'
      },
      {
        menuItem: 'Grid',
        to: '/utilities/grid',
        route: 'utilities.grid'
      },
      {
        menuItem: 'Hover',
        to: '/utilities/hover',
        route: 'utilities.hover'
      },
      {
        menuItem: 'Line Clamp',
        to: '/utilities/line-clamp',
        route: 'utilities.line-clamp'
      },
      {
        menuItem: 'Object Fit',
        to: '/utilities/object-fit',
        route: 'utilities.object-fit'
      },
      {
        menuItem: 'Opacity',
        to: '/utilities/opacity',
        route: 'utilities.opacity'
      },
      {
        menuItem: 'Overflow',
        to: '/utilities/overflow',
        route: 'utilities.overflow'
      },
      {
        menuItem: 'Pointer Events',
        to: '/utilities/pointer-events',
        route: 'utilities.pointer-events'
      },
      {
        menuItem: 'Position',
        to: '/utilities/position',
        route: 'utilities.position'
      },
      {
        menuItem: 'Shadow',
        to: '/utilities/shadow',
        route: 'utilities.shadow'
      },
      {
        menuItem: 'Size',
        to: '/utilities/size',
        route: 'utilities.size'
      },
      {
        menuItem: 'Space',
        to: '/utilities/space',
        route: 'utilities.space'
      },
      {
        menuItem: 'Text Align',
        to: '/utilities/text-align',
        route: 'utilities.text-align'
      },
      {
        menuItem: 'Text Decoration',
        to: '/utilities/text-decoration',
        route: 'utilities.text-decoration'
      },
      {
        menuItem: 'Text Transform',
        to: '/utilities/text-transform',
        route: 'utilities.text-transform'
      },
      {
        menuItem: 'User Select',
        to: '/utilities/user-select',
        route: 'utilities.user-select'
      },
      {
        menuItem: 'Vertical Align',
        to: '/utilities/vertical-align',
        route: 'utilities.vertical-align'
      },
      {
        menuItem: 'Visibility',
        to: '/utilities/visibility',
        route: 'utilities.visibility'
      },
      {
        menuItem: 'White Space',
        to: '/utilities/white-space',
        route: 'utilities.white-space'
      },
      {
        menuItem: 'Word Break',
        to: '/utilities/word-break',
        route: 'utilities.word-break'
      },
      {
        menuItem: 'Z-Index',
        to: '/utilities/z-index',
        route: 'utilities.z-index'
      }
    ]
  },
  {
    menuTitle: 'Elements',
    icon: 'pi pi-list',
    children: [
      {
        category: 'Form',
        items: [
          {
            menuItem: 'Checkbox',
            to: '/collections/accordion'
          },
          {
            menuItem: 'Dropdown',
            to: '/collections/card'
          }
        ]
      }
    ]
  },
  {
    menuTitle: 'Collections',
    icon: 'pi pi-list',
    children: [
      {
        category: 'Menu',
        items: [
          {
            menuItem: 'TabMenu',
            to: '/components/collections/tabmenu',
            route: 'components.collections.tabmenu'
          }]
      }
    ]
  }
];
