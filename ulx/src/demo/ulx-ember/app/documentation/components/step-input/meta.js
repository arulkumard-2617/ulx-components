// ==========================================================================
// STEP INPUT COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Form',
  subCategory: 'Elements',
  menuItem: 'StepInput',
  routeBase: '/components/step-input',
  icon: 'bs-icons1 sp-compass-icon',

  header: 'Step Input',
  subHeader:
    'StepInput is a number field with increment and decrement controls, built on UlxInputGroup. Use it for bounded numeric values such as hours, quantities, or padding.',

  tabs: [
    {
      name: 'Features',
      route: '/features',
      id: 'features'
    },
    {
      name: 'Theming',
      route: '/theming',
      id: 'theming'
    },
    {
      name: 'Builder',
      route: '/builder',
      id: 'builder'
    },
    {
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough'
    }
  ],

  importMsg: "import { UlxStepInput } from 'ulx-components'",

  accessibility: {
    description:
      'Pass aria-label on UlxStepInput for the input accessible name. Decorative suffix labels use aria-hidden. Step buttons announce increase/decrease via i18n defaults; override with @increaseAriaLabel and @decreaseAriaLabel when needed.',
    example:
      '<UlxStepInput @value={{this.hours}} @onChange={{this.updateHours}} @label="hr" aria-label="Hours" />'
  }
};
