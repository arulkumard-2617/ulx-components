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
        menuItem: 'Space',
        to: '/utilities/space'
      },
      {
        menuItem: 'Gap',
        to: '/utilities/gap'
      },
      {
        menuItem: 'Grid',
        to: '/utilities/grid'
      },
      {
        menuItem: 'Flex',
        to: '/utilities/flex'
      }
    ]
  },
  {
    menuTitle: 'Collections',
    icon: 'pi pi-list',
    children: [
      {
        category: 'Panel',
        items: [
          {
            menuItem: 'Accordion',
            to: '/collections/accordion'
          },
          {
            menuItem: 'Card',
            to: '/collections/card'
          },
          {
            menuItem: 'Fieldset',
            to: '/collections/fieldset'
          }
        ]
      }
    ]
  }
];

