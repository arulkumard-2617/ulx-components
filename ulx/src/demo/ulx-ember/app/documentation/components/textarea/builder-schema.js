// ==========================================================================
// TEXTAREA BUILDER SCHEMA
// ==========================================================================

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

  return rules;
};

const stateToProps = (state) => {
  const rules = buildRules(state);
  return {
    ...(Object.keys(rules).length ? { rules } : {}),
    size: state.size,
    placeholder: state.placeholder || undefined,
    keyfilter: state.keyfilter || undefined,
    disabled: state.disabled,
    readonly: state.readonly,
  };
};

const rulesSnippet = (state) => {
  const parts = [];
  if (state.required) parts.push('required=true');
  if (state.minLength) parts.push(`minLength=(hash value=${state.minLength})`);
  if (state.maxLength) parts.push(`maxLength=(hash value=${state.maxLength})`);
  if (parts.length === 0) return null;
  return `@rules={{hash ${parts.join(' ')}}}`;
};

const stateToSnippet = (state) => {
  const attrs = [];
  if (state.size) attrs.push(`@size="${state.size}"`);
  if (state.placeholder) attrs.push(`placeholder="${state.placeholder}"`);
  if (state.keyfilter) attrs.push(`@keyfilter="${state.keyfilter}"`);
  if (state.disabled) attrs.push(`@disabled={{true}}`);
  if (state.readonly) attrs.push(`@readonly={{true}}`);

  const rules = rulesSnippet(state);
  if (rules) attrs.push(rules);

  return `<UlxTextarea\n  ${attrs.join('\n  ')}\n/>`;
};

export default {
  componentName: 'UlxTextarea',
  importLine: "import { UlxTextarea } from 'ulx-components';",

  props: [
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
      key: 'placeholder',
      label: 'Placeholder',
      type: 'select',
      default: 'Enter value',
      options: [
        { value: '', label: '(none)' },
        { value: 'Enter value', label: 'Enter value' },
        { value: 'Enter description', label: 'Enter description' },
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
  ],

  stateToProps,
  stateToSnippet,
};
