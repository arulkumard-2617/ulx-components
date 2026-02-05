// ==========================================================================
// Progress Bar Builder Schema
// ==========================================================================

const stateToProps = (state) => ({
  value: state.value,
  mode: state.mode,
  showValue: state.showValue,
  size: state.size,
  variant: state.variant || undefined,
  customClass: state.customClass || undefined,
});

const stateToSnippet = (state) => {
  const p = stateToProps(state);
  const attrs = [];
  if (p.value != null && p.mode !== 'indeterminate')
    attrs.push(`@value={{${p.value}}}`);
  if (p.mode === 'indeterminate') attrs.push('@mode="indeterminate"');
  if (p.showValue === false) attrs.push('@showValue={{false}}');
  if (p.size) attrs.push(`@size="${p.size}"`);
  if (p.variant) attrs.push(`@variant="${p.variant}"`);
  if (p.customClass) attrs.push(`@customClass="${p.customClass}"`);
  return attrs.length
    ? `<UlxProgressBar\n  ${attrs.join('\n  ')}\n/>`
    : '<UlxProgressBar />';
};

export default {
  componentName: 'UlxProgressBar',
  importLine: "import { UlxProgressBar } from 'ulx-components';",

  props: [
    {
      key: 'value',
      label: 'Value',
      type: 'number',
      default: 50,
    },
    {
      key: 'mode',
      label: 'Mode',
      type: 'select',
      default: 'determinate',
      options: [
        { value: 'determinate', label: 'Determinate' },
        { value: 'indeterminate', label: 'Indeterminate' },
      ],
    },
    {
      key: 'showValue',
      label: 'Show value',
      type: 'checkbox',
      default: true,
    },
    {
      key: 'size',
      label: 'Size',
      type: 'select',
      default: 'm',
      options: [
        { value: 'xs', label: 'XS' },
        { value: 's', label: 'S' },
        { value: 'm', label: 'M' },
        { value: 'l', label: 'L' },
        { value: 'xl', label: 'XL' },
      ],
    },
    {
      key: 'variant',
      label: 'Variant',
      type: 'select',
      default: '',
      options: [
        { value: '', label: '(default)' },
        { value: 'secondary', label: 'Secondary' },
        { value: 'success', label: 'Success' },
        { value: 'info', label: 'Info' },
        { value: 'warning', label: 'Warning' },
        { value: 'danger', label: 'Danger' },
      ],
    },
    {
      key: 'customClass',
      label: 'Custom class',
      type: 'text',
      default: '',
    },
  ],

  stateToProps,
  stateToSnippet,
};
