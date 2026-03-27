// ==========================================================================
// ProgressSpinner Builder Schema
// ==========================================================================

const stateToProps = (state) => ({
  size: state.size,
  ariaLabel: state.ariaLabel || undefined,
  customClass: state.customClass || undefined,
});

const stateToSnippet = (state) => {
  const p = stateToProps(state);
  const attrs = [];
  if (p.size) attrs.push(`@size="${p.size}"`);
  if (p.ariaLabel) attrs.push(`@ariaLabel="${p.ariaLabel}"`);
  if (p.customClass) attrs.push(`@customClass="${p.customClass}"`);
  return attrs.length ? `<UlxProgressSpinner\n  ${attrs.join('\n  ')}\n/>` : '<UlxProgressSpinner />';
};

export default {
  componentName: 'UlxProgressSpinner',
  importLine: "import { UlxProgressSpinner } from 'ulx-components';",

  props: [
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
      key: 'ariaLabel',
      label: 'Aria label',
      type: 'select',
      default: 'Loading',
      options: [
        { value: 'Loading', label: 'Loading' },
        { value: '', label: '(empty)' },
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
