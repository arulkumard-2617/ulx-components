// ==========================================================================
// DROPDOWN BUILDER SCHEMA
// ==========================================================================

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
];

const stateToProps = (state) => ({
  label: state.label,
  options: state.options ?? CITIES,
  placeholder: state.placeholder || undefined,
  fieldClass: state.fieldClass,
  showClear: state.showClear,
  filter: state.filter,
  disabled: state.disabled,
  invalid: state.invalid,
  filled: state.filled,
  helpText: state.showHelp ? 'Help text' : undefined,
  error: state.showError ? 'Error message' : undefined,
});

const stateToSnippet = (state) => {
  const attrs = [];
  if (state.label) attrs.push(`@label="${state.label}"`);
  if (state.placeholder) attrs.push(`@placeholder="${state.placeholder}"`);
  if (state.fieldClass) attrs.push(`@fieldClass="${state.fieldClass}"`);
  if (state.showClear) attrs.push('@showClear={{true}}');
  if (state.filter) attrs.push('@filter={{true}}');
  if (state.disabled) attrs.push('@disabled={{true}}');
  if (state.invalid) attrs.push('@invalid={{true}}');
  if (state.filled) attrs.push('@filled={{true}}');
  if (state.showHelp) attrs.push('@helpText="Help text"');
  if (state.showError) attrs.push('@error="Error message"');
  return `<UlxDropdown\n  @options={{this.cities}}\n  @value={{this.selectedCity}}\n  @onChange={{this.setSelectedCity}}\n  ${attrs.join('\n  ')}\n/>`;
};

export default {
  componentName: 'UlxDropdown',
  importLine: "import { UlxDropdown } from 'ulx-components';",

  props: [
    {
      key: 'label',
      label: 'Label',
      type: 'select',
      default: 'City',
      options: [
        { value: 'City', label: 'City' },
        { value: 'Country', label: 'Country' },
        { value: 'Select', label: 'Select' },
      ],
    },
    {
      key: 'placeholder',
      label: 'Placeholder',
      type: 'select',
      default: 'Select a city',
      options: [
        { value: 'Select a city', label: 'Select a city' },
        { value: 'Select...', label: 'Select...' },
      ],
    },
    {
      key: 'fieldClass',
      label: 'Field class',
      type: 'select',
      default: 'col-12',
      options: [
        { value: 'col-12', label: 'col-12' },
        { value: 'col-6', label: 'col-6' },
      ],
    },
    {
      key: 'showClear',
      label: 'Show clear',
      type: 'checkbox',
      default: false,
    },
    {
      key: 'filter',
      label: 'Filter',
      type: 'checkbox',
      default: false,
    },
    {
      key: 'disabled',
      label: 'Disabled',
      type: 'checkbox',
      default: false,
    },
    {
      key: 'invalid',
      label: 'Invalid',
      type: 'checkbox',
      default: false,
    },
    {
      key: 'filled',
      label: 'Filled',
      type: 'checkbox',
      default: false,
    },
    {
      key: 'showHelp',
      label: 'Help text',
      type: 'checkbox',
      default: false,
    },
    {
      key: 'showError',
      label: 'Error message',
      type: 'checkbox',
      default: false,
    },
  ],

  stateToProps,
  stateToSnippet,
};
