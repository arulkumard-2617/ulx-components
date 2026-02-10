// ==========================================================================
// INPUT BUILDER SCHEMA
// ==========================================================================
// Drives the ComponentBuilder for the Input doc page.
// This mirrors the Icon builder setup, but uses static options (no tokens yet).

const toNumberOrNull = (v) => {
  if (v === '' || v === null || v === undefined) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

const buildRules = (state) => {
  const rules = {};
  if (state.required) rules.required = true;

  const minLength = toNumberOrNull(state.minLength);
  if (minLength != null) rules.minLength = { value: minLength };

  const maxLength = toNumberOrNull(state.maxLength);
  if (maxLength != null) rules.maxLength = { value: maxLength };

  const min = toNumberOrNull(state.min);
  if (min != null) rules.min = { value: min };

  const max = toNumberOrNull(state.max);
  if (max != null) rules.max = { value: max };

  return rules;
};

const stateToProps = (state) => {
  const rules = buildRules(state);
  return {
    label: state.label,
    // Use floatLabel as label when enabled (UlxInput supports string mode)
    ...(state.floatLabel ? { floatLabel: state.label } : {}),
    ...(Object.keys(rules).length ? { rules } : {}),

    size: state.size,
    fieldClass: state.fieldClass,
    placeholder: state.placeholder || undefined,

    type: state.type,
    keyfilter: state.keyfilter || undefined,

    filled: state.filled,
    disabled: state.disabled,
    readonly: state.readonly,

    ...(state.showHelp ? { helpText: 'Help text' } : {}),
    ...(state.showError ? { errorMessage: 'Error message' } : {}),
  };
};

const rulesSnippet = (state) => {
  const parts = [];
  if (state.required) parts.push('required=true');
  if (state.minLength) parts.push(`minLength=(hash value=${state.minLength})`);
  if (state.maxLength) parts.push(`maxLength=(hash value=${state.maxLength})`);
  if (state.min) parts.push(`min=(hash value=${state.min})`);
  if (state.max) parts.push(`max=(hash value=${state.max})`);
  if (parts.length === 0) return null;
  return `@rules={{hash ${parts.join(' ')}}}`;
};

const stateToSnippet = (state) => {
  const attrs = [];
  if (state.label) attrs.push(`@label="${state.label}"`);
  if (state.floatLabel && state.label)
    attrs.push(`@floatLabel="${state.label}"`);
  if (state.size) attrs.push(`@size="${state.size}"`);
  if (state.fieldClass) attrs.push(`@fieldClass="${state.fieldClass}"`);
  if (state.placeholder) attrs.push(`placeholder="${state.placeholder}"`);
  if (state.type && state.type !== 'text') attrs.push(`@type="${state.type}"`);
  if (state.keyfilter) attrs.push(`@keyfilter="${state.keyfilter}"`);
  if (state.filled) attrs.push(`@filled={{true}}`);
  if (state.disabled) attrs.push(`@disabled={{true}}`);
  if (state.readonly) attrs.push(`@readonly={{true}}`);
  if (state.showHelp) attrs.push(`@helpText="Help text"`);
  if (state.showError) attrs.push(`@errorMessage="Error message"`);

  const rules = rulesSnippet(state);
  if (rules) attrs.push(rules);

  return `<UlxInput\n  ${attrs.join('\n  ')}\n/>`;
};

export default {
  componentName: 'UlxInput',
  importLine: "import { UlxInput } from 'ulx-components';",

  props: [
    {
      key: 'label',
      label: 'Label',
      type: 'select',
      default: 'Username',
      options: [
        { value: 'Username', label: 'Username' },
        { value: 'Email', label: 'Email' },
        { value: 'Age', label: 'Age' },
      ],
    },
    {
      key: 'floatLabel',
      label: 'Float label',
      type: 'checkbox',
      default: false,
    },
    {
      key: 'size',
      label: 'Size',
      type: 'radio',
      default: 's-size',
      options: [
        { value: 'xs-size', label: 'XS' },
        { value: 's-size', label: 'S' },
        { value: 'm-size', label: 'M' },
        { value: 'l-size', label: 'L' },
        { value: 'xl-size', label: 'XL' },
      ],
    },
    {
      key: 'type',
      label: 'Type',
      type: 'radio',
      default: 'text',
      options: [
        { value: 'text', label: 'Text' },
        { value: 'email', label: 'Email' },
        { value: 'password', label: 'Password' },
        { value: 'number', label: 'Number' },
        { value: 'textarea', label: 'Textarea' },
      ],
    },
    {
      key: 'keyfilter',
      label: 'Keyfilter',
      type: 'select',
      default: '',
      options: [
        { value: '', label: 'None' },
        { value: 'int', label: 'int' },
        { value: 'float', label: 'float' },
        { value: 'email', label: 'email' },
        { value: 'alphanum', label: 'alphanum' },
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
        { value: 'col-4', label: 'col-4' },
      ],
    },
    {
      key: 'placeholder',
      label: 'Placeholder',
      type: 'select',
      default: 'Enter value',
      options: [
        { value: '', label: '(none)' },
        { value: 'Enter value', label: 'Enter value' },
        { value: 'Enter username', label: 'Enter username' },
      ],
    },
    {
      key: 'required',
      label: 'Required',
      type: 'checkbox',
      default: false,
    },
    {
      key: 'minLength',
      label: 'Min length',
      type: 'select',
      default: '',
      options: [
        { value: '', label: 'None' },
        { value: '3', label: '3' },
        { value: '10', label: '10' },
      ],
    },
    {
      key: 'maxLength',
      label: 'Max length',
      type: 'select',
      default: '',
      options: [
        { value: '', label: 'None' },
        { value: '20', label: '20' },
        { value: '50', label: '50' },
      ],
    },
    {
      key: 'min',
      label: 'Min value',
      type: 'select',
      default: '',
      options: [
        { value: '', label: 'None' },
        { value: '0', label: '0' },
        { value: '1', label: '1' },
        { value: '10', label: '10' },
      ],
    },
    {
      key: 'max',
      label: 'Max value',
      type: 'select',
      default: '',
      options: [
        { value: '', label: 'None' },
        { value: '10', label: '10' },
        { value: '100', label: '100' },
      ],
    },
    {
      key: 'filled',
      label: 'Filled',
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
      key: 'readonly',
      label: 'Readonly',
      type: 'checkbox',
      default: false,
    },
    {
      key: 'showHelp',
      label: 'Help text',
      type: 'checkbox',
      default: true,
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
