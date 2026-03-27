// ==========================================================================
// Slider Builder Schema
// ==========================================================================

const toNumberOrNull = (v) => {
  if (v === '' || v === null || v === undefined) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

const stateToProps = (state) => {
  const min = toNumberOrNull(state.min);
  const max = toNumberOrNull(state.max);
  const step = toNumberOrNull(state.step);

  const range = !!state.range;
  const value = range
    ? [toNumberOrNull(state.rangeStart) ?? 20, toNumberOrNull(state.rangeEnd) ?? 80]
    : toNumberOrNull(state.value) ?? 50;

  return {
    ...(min != null ? { min } : {}),
    ...(max != null ? { max } : {}),
    ...(step != null ? { step } : {}),
    ...(state.size ? { size: state.size } : {}),
    ...(state.variant ? { variant: state.variant } : {}),
    ...(state.orientation ? { orientation: state.orientation } : {}),
    ...(state.withSteps ? { withSteps: true } : {}),
    ...(state.disabled ? { disabled: true } : {}),
    ...(state.readonly ? { readonly: true } : {}),
    ...(range ? { range: true } : {}),
    value,
  };
};

const stateToSnippet = (state) => {
  const props = stateToProps(state);
  const attrs = [];

  if (props.range) attrs.push('@range={{true}}');

  if (typeof props.value === 'number') attrs.push(`@value={{${props.value}}}`);
  else attrs.push(`@value={{array ${props.value[0]} ${props.value[1]}}}`);

  if (props.min != null && props.min !== 0) attrs.push(`@min={{${props.min}}}`);
  if (props.max != null && props.max !== 100) attrs.push(`@max={{${props.max}}}`);
  if (props.step != null && props.step !== 1) attrs.push(`@step={{${props.step}}}`);

  if (props.orientation && props.orientation !== 'horizontal')
    attrs.push(`@orientation="${props.orientation}"`);
  if (props.size && props.size !== 's-size') attrs.push(`@size="${props.size}"`);
  if (props.variant) attrs.push(`@variant="${props.variant}"`);
  if (props.withSteps) attrs.push('@withSteps={{true}}');
  if (props.disabled) attrs.push('@disabled={{true}}');
  if (props.readonly) attrs.push('@readonly={{true}}');

  return `<UlxSlider\n  ${attrs.join('\n  ')}\n/>`;
};

export default {
  componentName: 'UlxSlider',
  importLine: "import { UlxSlider } from 'ulx-components';",
  props: [
    {
      key: 'range',
      label: 'Range',
      type: 'checkbox',
      default: false,
    },
    {
      key: 'value',
      label: 'Value',
      type: 'select',
      default: '50',
      options: [
        { value: '0', label: '0' },
        { value: '25', label: '25' },
        { value: '50', label: '50' },
        { value: '75', label: '75' },
        { value: '100', label: '100' },
      ],
    },
    {
      key: 'rangeStart',
      label: 'Range start',
      type: 'select',
      default: '20',
      options: [
        { value: '0', label: '0' },
        { value: '10', label: '10' },
        { value: '20', label: '20' },
        { value: '30', label: '30' },
      ],
    },
    {
      key: 'rangeEnd',
      label: 'Range end',
      type: 'select',
      default: '80',
      options: [
        { value: '70', label: '70' },
        { value: '80', label: '80' },
        { value: '90', label: '90' },
        { value: '100', label: '100' },
      ],
    },
    {
      key: 'min',
      label: 'Min',
      type: 'select',
      default: '0',
      options: [
        { value: '0', label: '0' },
        { value: '10', label: '10' },
      ],
    },
    {
      key: 'max',
      label: 'Max',
      type: 'select',
      default: '100',
      options: [
        { value: '100', label: '100' },
        { value: '200', label: '200' },
      ],
    },
    {
      key: 'step',
      label: 'Step',
      type: 'select',
      default: '1',
      options: [
        { value: '1', label: '1' },
        { value: '5', label: '5' },
        { value: '10', label: '10' },
      ],
    },
    {
      key: 'withSteps',
      label: 'With steps',
      type: 'checkbox',
      default: false,
    },
    {
      key: 'orientation',
      label: 'Orientation',
      type: 'radio',
      default: 'horizontal',
      options: [
        { value: 'horizontal', label: 'Horizontal' },
        { value: 'vertical', label: 'Vertical' },
      ],
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
      key: 'variant',
      label: 'Variant',
      type: 'select',
      default: '',
      options: [
        { value: '', label: 'Default' },
        { value: 'filled', label: 'Filled' },
        { value: 'elevated', label: 'Elevated' },
        { value: 'flat', label: 'Flat' },
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

