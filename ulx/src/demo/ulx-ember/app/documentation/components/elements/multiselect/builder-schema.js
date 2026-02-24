// ==========================================================================
// MULTISELECT BUILDER SCHEMA
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
  display: state.display,
  showClear: state.showClear,
  filter: state.filter,
  selectAll: state.selectAll,
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
  if (state.display === 'chip') attrs.push('@display="chip"');
  if (state.showClear) attrs.push('@showClear={{true}}');
  if (state.filter) attrs.push('@filter={{true}}');
  if (state.selectAll) attrs.push('@selectAll={{true}}');
  if (state.disabled) attrs.push('@disabled={{true}}');
  if (state.invalid) attrs.push('@invalid={{true}}');
  if (state.filled) attrs.push('@filled={{true}}');
  if (state.showHelp) attrs.push('@helpText="Help text"');
  if (state.showError) attrs.push('@error="Error message"');
  return `<UlxMultiSelect\n  @options={{this.items}}\n  @value={{this.selected}}\n  @onChange={{this.setSelected}}\n  ${attrs.join('\n  ')}\n/>`;
};

export default {
  componentName: 'UlxMultiSelect',
  importLine: "import { UlxMultiSelect } from 'ulx-components';",

  props: [
    {
      key: 'label',
      label: 'Label',
      type: 'select',
      default: 'Cities',
      options: [
        { value: 'Cities', label: 'Cities' },
        { value: 'Countries', label: 'Countries' },
        { value: 'Select', label: 'Select' },
      ],
    },
    {
      key: 'placeholder',
      label: 'Placeholder',
      type: 'select',
      default: 'Select items',
      options: [
        { value: 'Select items', label: 'Select items' },
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
      key: 'display',
      label: 'Display',
      type: 'select',
      default: 'comma',
      options: [
        { value: 'comma', label: 'comma' },
        { value: 'chip', label: 'chip' },
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
      key: 'selectAll',
      label: 'Select all',
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
