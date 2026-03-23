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
  if (state.placeholder) attrs.push(`@placeholder="${state.placeholder}"`);
  if (state.showClear) attrs.push('@showClear={{true}}');
  if (state.filter) attrs.push('@filter={{true}}');
  if (state.disabled) attrs.push('@disabled={{true}}');
  if (state.invalid) attrs.push('@invalid={{true}}');
  if (state.filled) attrs.push('@filled={{true}}');
  const fieldParts = ['@key="city-field"'];
  if (state.label) fieldParts.unshift(`@label="${state.label}"`);
  if (state.fieldClass) fieldParts.push(`@fieldClass="${state.fieldClass}"`);
  if (state.showHelp) fieldParts.push('@helpText="Help text"');
  if (state.showError) fieldParts.push('@error="Error message"');
  const dropdownAttrs = [
    '@key={{field.key}}',
    '@ariaDescribedBy={{field.describedBy}}',
    '@ariaErrorMessage={{field.errorId}}',
    '@options={{this.cities}}',
    '@value={{this.selectedCity}}',
    '@onChange={{this.setSelectedCity}}',
    ...attrs,
  ];
  return `<UlxField ${fieldParts.join(' ')}>
  <:default as |field|>
    <UlxDropdown
      ${dropdownAttrs.join('\n      ')}
    />
  </:default>
</UlxField>`;
};

export default {
  componentName: 'UlxDropdown',
  importLine: "import { UlxDropdown, UlxField } from 'ulx-components';",

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
