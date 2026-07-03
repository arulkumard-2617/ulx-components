// ==========================================================================
// CARD BUILDER SCHEMA
// ==========================================================================

const stateToProps = (state) => ({
  title: state.title || undefined,
  subTitle: state.subTitle || undefined,
  appearance: state.appearance || 'outlined',
  variant: state.variant || undefined,
  size: state.size || 'm-size',
  density: state.density || undefined,
  customClass: state.customClass || undefined,
});

const stateToSnippet = (state) => {
  const p = stateToProps(state);
  const attrs = [];

  if (p.title) attrs.push(`@title="${p.title}"`);
  if (p.subTitle) attrs.push(`@subTitle="${p.subTitle}"`);
  if (p.appearance && p.appearance !== 'outlined')
    attrs.push(`@appearance="${p.appearance}"`);
  if (p.variant) attrs.push(`@variant="${p.variant}"`);
  if (p.size && p.size !== 'm-size') attrs.push(`@size="${p.size}"`);
  if (p.density) attrs.push(`@density="${p.density}"`);
  if (p.customClass) attrs.push(`@customClass="${p.customClass}"`);

  const openLine = attrs.length
    ? `<UlxCard\n  ${attrs.join('\n  ')}\n>`
    : '<UlxCard>';

  return `${openLine}\n  <!-- content -->\n</UlxCard>`;
};

export default {
  componentName: 'UlxCard',
  importLine: "import { UlxCard } from 'ulx-components';",

  props: [
    {
      key: 'title',
      label: 'Title',
      type: 'text',
      default: 'Simple Card',
    },
    {
      key: 'subTitle',
      label: 'Subtitle',
      type: 'text',
      default: 'Card subtitle',
    },
    {
      key: 'appearance',
      label: 'Appearance',
      type: 'select',
      default: 'outlined',
      options: [
        { value: 'outlined', label: 'Outlined' },
        { value: 'elevated', label: 'Elevated' },
        { value: 'flat', label: 'Flat' },
        { value: 'gradient', label: 'Gradient' },
      ],
    },
    {
      key: 'variant',
      label: 'Variant',
      type: 'select',
      default: '',
      options: [
        { value: '', label: '(default)' },
        { value: 'primary', label: 'Primary' },
        { value: 'secondary', label: 'Secondary' },
        { value: 'success', label: 'Success' },
        { value: 'warning', label: 'Warning' },
        { value: 'danger', label: 'Danger' },
        { value: 'info', label: 'Info' },
        { value: 'contrast', label: 'Contrast' },
      ],
    },
    {
      key: 'size',
      label: 'Size',
      type: 'select',
      default: 'm-size',
      options: [
        { value: 'xs-size', label: 'XS' },
        { value: 's-size', label: 'S' },
        { value: 'm-size', label: 'M' },
        { value: 'l-size', label: 'L' },
        { value: 'xl-size', label: 'XL' },
      ],
    },
    {
      key: 'density',
      label: 'Density',
      type: 'select',
      default: '',
      options: [
        { value: '', label: '(default)' },
        { value: 'compact', label: 'Compact' },
        { value: 'spacious', label: 'Spacious' },
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

