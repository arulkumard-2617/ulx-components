// ==========================================================================
// Slider Component Metadata
// ==========================================================================

export default {
  category: 'Elements',
  subCategory: 'Form',
  menuItem: 'Slider',
  routeBase: '/components/slider',
  icon: 'pi pi-sliders-h',

  header: 'Slider',
  subHeader: 'Slider is a drag based numeric input.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Builder', route: '/builder', id: 'builder' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxSlider } from 'ulx-components'",

  accessibility: {
    description:
      'Single slider uses role=\"slider\" with aria-valuemin, aria-valuemax, aria-valuenow, and keyboard support. Range slider renders two handles with role=\"slider\" each. Keyboard: Arrow keys, Home/End, PageUp/PageDown.',
    example: '<UlxSlider @value={{this.value}} @onChange={{this.handleChange}} />',
  },
};

