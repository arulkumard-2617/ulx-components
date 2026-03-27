// ==========================================================================
// SELECTBUTTON COMPONENT METADATA
// ==========================================================================
// Single source of truth for SelectButton component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Button',
  menuItem: 'SelectButton',
  routeBase: '/components/select-button',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'SelectButton',
  subHeader:
    'SelectButton is used to choose single or multiple items from a list using buttons.',

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
  importMsg: "import { UlxSelectButton } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description:
      'Container has role="group"; each button has role="button", aria-pressed, and aria-label from option label. Keyboard: Tab to focus, Space toggles.',
    example:
      '<UlxSelectButton @options={{options}} @value={{value}} @onChange={{onChange}} @ariaLabel="Choose option" />',
  },
};
