// ==========================================================================
// Button Builder Schema
// ==========================================================================
// Drives the ComponentBuilder for the Button doc page

const stateToProps = (state) => {
  return {
    label: state.label || 'Button',
    icon: state.icon || undefined,
    iconPos: state.iconPos,
    variant: state.variant,
    size: state.size || undefined,
    outlined: state.outlined,
    text: state.text,
    pilled: state.pilled,
    disabled: state.disabled,
    fluid: state.fluid,
    badge: state.badge || undefined,
  };
};

const stateToSnippet = (state) => {
  const p = stateToProps(state);
  const attrs = [];

  if (p.label) attrs.push(`@label="${p.label}"`);
  if (p.icon) attrs.push(`@icon="${p.icon}"`);
  if (p.iconPos && p.iconPos !== 'left') attrs.push(`@iconPos="${p.iconPos}"`);
  if (p.variant && p.variant !== 'primary')
    attrs.push(`@variant="${p.variant}"`);
  if (p.size) attrs.push(`@size="${p.size}"`);
  if (p.outlined) attrs.push('@outlined={{true}}');
  if (p.text) attrs.push('@text={{true}}');
  if (p.pilled) attrs.push('@pilled={{true}}');
  if (p.disabled) attrs.push('@disabled={{true}}');
  if (p.fluid) attrs.push('@fluid={{true}}');
  if (p.badge) attrs.push(`@badge="${p.badge}"`);

  return attrs.length > 0
    ? `<UlxButton\n  ${attrs.join('\n  ')}\n/>`
    : '<UlxButton />';
};

export default {
  componentName: 'UlxButton',
  importLine: "import { UlxButton } from 'ulx-components';",

  props: [
    {
      key: 'label',
      label: 'Label',
      type: 'text',
      default: 'Button',
    },
    {
      key: 'variant',
      label: 'Variant',
      type: 'select',
      default: 'primary',
      options: [
        { value: 'primary', label: 'Primary' },
        { value: 'secondary', label: 'Secondary' },
        { value: 'success', label: 'Success' },
        { value: 'info', label: 'Info' },
        { value: 'warning', label: 'Warning' },
        { value: 'help', label: 'Help' },
        { value: 'danger', label: 'Danger' },
      ],
    },
    {
      key: 'icon',
      label: 'Icon',
      type: 'select',
      default: '',
      options: [
        { value: '', label: 'None' },
        { value: 'search-icon', label: 'Search' },
        { value: 'close-icon-01', label: 'Close' },
        { value: 'ls-tick-icon', label: 'Tick' },
        { value: 'comment-icon', label: 'Comment' },
      ],
    },
    {
      key: 'iconPos',
      label: 'Icon Position',
      type: 'radio',
      default: 'left',
      options: [
        { value: 'left', label: 'Left' },
        { value: 'right', label: 'Right' },
      ],
    },
    {
      key: 'size',
      label: 'Size',
      type: 'select',
      default: '',
      options: [
        { value: '', label: 'Normal' },
        { value: 'small', label: 'Small' },
        { value: 'large', label: 'Large' },
      ],
    },
    {
      key: 'outlined',
      label: 'Outlined',
      type: 'checkbox',
      default: false,
    },
    {
      key: 'text',
      label: 'Text',
      type: 'checkbox',
      default: false,
    },
    {
      key: 'pilled',
      label: 'Pilled',
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
      key: 'fluid',
      label: 'Fluid',
      type: 'checkbox',
      default: false,
    },
    {
      key: 'badge',
      label: 'Badge',
      type: 'text',
      default: '',
    },
  ],

  stateToProps,
  stateToSnippet,
};
