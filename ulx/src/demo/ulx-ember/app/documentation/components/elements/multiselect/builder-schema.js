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
  fieldLabel: state.label,
  fieldClass: state.fieldClass,
  fieldHelpText: state.showHelp ? 'Help text' : undefined,
  fieldError: state.showError ? 'Error message' : undefined,
  options: state.options ?? CITIES,
  placeholder: state.placeholder || undefined,
  display: state.display,
  showClear: state.showClear,
  filter: state.filter,
  selectAll: state.selectAll,
  disabled: state.disabled,
  invalid: state.invalid,
  filled: state.filled,
});

const stateToSnippet = (state) => {
  const fieldAttrs = [];
  if (state.label) fieldAttrs.push(`@label="${state.label}"`);
  if (state.fieldClass) fieldAttrs.push(`@fieldClass="${state.fieldClass}"`);
  if (state.showHelp) fieldAttrs.push('@helpText="Help text"');
  if (state.showError) fieldAttrs.push('@error="Error message"');
  fieldAttrs.push('@fieldId="multiselect-example"');

  const msAttrs = [];
  if (state.placeholder) msAttrs.push(`@placeholder="${state.placeholder}"`);
  if (state.display === 'chip') msAttrs.push('@display="chip"');
  if (state.showClear) msAttrs.push('@showClear={{true}}');
  if (state.filter) msAttrs.push('@filter={{true}}');
  if (state.selectAll) msAttrs.push('@selectAll={{true}}');
  if (state.disabled) msAttrs.push('@disabled={{true}}');
  if (state.invalid) msAttrs.push('@invalid={{true}}');
  if (state.filled) msAttrs.push('@filled={{true}}');

  const fieldBlock = fieldAttrs.length ? `  ${fieldAttrs.join('\n  ')}\n` : '';
  const msBlock = msAttrs.length ? `    ${msAttrs.join('\n    ')}\n` : '';

  return `<UlxField\n${fieldBlock}>\n  <:control as |field|>\n    <UlxMultiSelect\n      @key={{field.key}}\n      @ariaDescribedBy={{field.describedBy}}\n      @ariaErrorMessage={{field.errorId}}\n      @options={{this.items}}\n      @value={{this.selected}}\n      @onChange={{this.setSelected}}\n${msBlock}    />\n  </:control>\n</UlxField>`;
};

export default {
  componentName: 'UlxMultiSelect',
  importLine: "import { UlxMultiSelect, UlxField } from 'ulx-components';",

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
