// ==========================================================================
// Icon Builder Schema
// ==========================================================================
// Drives the ComponentBuilder for the Icon doc page. Size, layers, and spin
// options are taken from icon-tokens.js, which is generated from
// @ulx-builder comments in ulx-v2/.../less/elements/icon.less.
// Run: node scripts/extract-ulx-builder-tokens.js [path-to-icon.less]

import iconTokens from '../../../tokens/icon-tokens';
import {
  createConditionalSizeProp,
  createLayerProp,
  createClassCheckboxProp,
} from '../../utils/builder-schema-helpers';

const normalSizes = iconTokens['normal size'] ?? [];
const shapedSizes = iconTokens['shaped icons size'] ?? [];
const layerTokens = iconTokens['layers'] ?? [];
const spinTokens = iconTokens['spin'] ?? [];
const spinClass = spinTokens[0] ?? 'spin-anim';

const stateToProps = (state) => {
  const customParts = [state.customClass].filter(Boolean);
  if (state.spin && spinClass) customParts.push(spinClass);
  const customClass = customParts.join(' ');
  return {
    componentClass: 'bs-icons1',
    type: 'font',
    iconName: state.iconName,
    size: state.size,
    ariaLabel: state.ariaLabel ?? 'Icon',
    ...(customClass ? { customClass } : {}),
  };
};

const stateToSnippet = (state) => {
  const p = stateToProps(state);
  const attrs = [
    `@componentClass="${p.componentClass}"`,
    `@type="${p.type}"`,
    `@iconName="${p.iconName}"`,
    `@size="${p.size}"`,
    `@ariaLabel="${p.ariaLabel}"`,
  ];
  if (p.customClass) attrs.push(`@customClass="${p.customClass}"`);
  return `<UlxIcon\n  ${attrs.join('\n  ')}\n/>`;
};

const defaultNormalSize = normalSizes.includes('s24')
  ? 's24'
  : (normalSizes[0] ?? 's24');

export default {
  componentName: 'UlxIcon',
  importLine: "import { UlxIcon } from 'ulx-components';",

  props: [
    {
      key: 'sizeMode',
      label: 'Size mode',
      type: 'radio',
      default: 'normal',
      options: [
        { value: 'normal', label: 'Normal' },
        { value: 'layeredBg', label: 'Layered background' },
      ],
    },
    createConditionalSizeProp({
      key: 'size',
      label: 'Size',
      modeKey: 'sizeMode',
      normalTokens: normalSizes,
      shapedTokens: shapedSizes,
      defaultNormal: defaultNormalSize,
    }),
    {
      key: 'iconName',
      label: 'Icon',
      type: 'select',
      default: 'comment-icon',
      options: [
        { value: 'ls-tick-icon', label: 'Tick' },
        { value: 'close-icon-01', label: 'Close' },
        { value: 'comment-icon', label: 'Comment' },
        { value: 'session-settings-icon', label: 'Settings' },
      ],
    },
    createLayerProp({
      key: 'customClass',
      label: 'Layer',
      modeKey: 'sizeMode',
      layerTokens,
    }),
    createClassCheckboxProp({
      key: 'spin',
      label: 'Spin',
    }),
    {
      key: 'ariaLabel',
      label: 'Aria label',
      type: 'select',
      default: 'Icon',
      options: [
        { value: 'Icon', label: 'Icon' },
        { value: 'Close', label: 'Close' },
        { value: 'Settings', label: 'Settings' },
        { value: '', label: '(empty)' },
      ],
    },
  ],

  stateToProps,
  stateToSnippet,
};
