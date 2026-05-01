// ==========================================================================
// CHIP INPUT COMPONENT METADATA
// ==========================================================================

export default {
  // Navigation metadata
  category: 'Form',
  subCategory: 'Elements',
  menuItem: 'ChipInput',
  routeBase: '/components/chip-input',
  icon: 'bs-icons1 sp-compass-icon',

  // Page metadata
  header: 'Chip Input',
  subHeader: 'ChipInput lets users type a value and press Enter to add it as a chip tag. Multiple chips can be added and individually removed.',

  // Tab configuration
  tabs: [
    {
      name: 'Features',
      route: '/features',
      id: 'features',
    },
    {
      name: 'Theming',
      route: '/theming',
      id: 'theming',
    },
    {
      name: 'Builder',
      route: '/builder',
      id: 'builder',
    },
    {
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough',
    },
  ],

  // Import message for the component
  importMsg: "import { UlxChipInput } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description: 'ChipInput is a group element. The inner text field has an aria-label. Each remove button is announced with the chip value.',
    example: '<UlxChipInput @chips={{this.chips}} @onChipsChange={{this.updateChips}} />',
  },
};
