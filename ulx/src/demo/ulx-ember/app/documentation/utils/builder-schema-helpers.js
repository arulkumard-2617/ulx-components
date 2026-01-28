// ==========================================================================
// Builder Schema Helpers
// ==========================================================================
// Reusable utilities for creating component builder schemas from extracted tokens.
// Used by icon, button, input, badge, and other component builders.
//
// Each component imports its own tokens file and uses these helpers to build options.
//
// Example usage (for button component):
//   import buttonTokens from '../../../../tokens/button-tokens';
//   import { toSimpleOption, createConditionalSizeProp } from '../../../utils/builder-schema-helpers';
//
//   export default {
//     componentName: 'UlxButton',
//     importLine: "import { UlxButton } from 'uls-components';",
//     props: [
//       {
//         key: 'severity',
//         label: 'Severity',
//         type: 'radio',
//         default: 'primary',
//         options: (buttonTokens['severity'] ?? []).map(toSimpleOption),
//       },
//       createConditionalSizeProp({
//         normalTokens: buttonTokens['sizes'] ?? [],
//         shapedTokens: buttonTokens['shaped sizes'] ?? [],
//       }),
//       // ... other props
//     ],
//     stateToProps: (state) => ({ ... }),
//     stateToSnippet: (state) => { ... },
//   };

/**
 * Convert a size value to an option object with value and label.
 * Handles patterns like "s24" → {value: "s24", label: "24"} and "xl2" → {value: "xl2", label: "2XL"}.
 */
export function toSizeOption(value) {
  if (/^s\d+$/.test(value)) {
    return { value, label: value.replace(/^s/, '') };
  }
  if (value === 'xl2') return { value, label: '2XL' };
  if (value === 'xl3') return { value, label: '3XL' };
  if (value === 'xl4') return { value, label: '4XL' };
  if (value === 'xl5') return { value, label: '5XL' };
  if (value === 'xl6') return { value, label: '6XL' };
  if (value === 'xl7') return { value, label: '7XL' };
  return { value, label: value.toUpperCase() };
}

/**
 * Convert a layer class value to an option with "rounded" suffix.
 * Example: "primary-layer" → {value: "primary-layer rounded", label: "Primary"}.
 */
export function toLayerOption(value, suffix = ' rounded') {
  const label = value
    .replace(/-layer$/, '')
    .replace(/^(\w)/, (c) => c.toUpperCase());
  return { value: `${value}${suffix}`, label };
}

/**
 * Convert a simple token value to an option (capitalizes label).
 * Example: "primary" → {value: "primary", label: "Primary"}.
 */
export function toSimpleOption(value) {
  const label = value
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return { value, label };
}

/**
 * Create a size prop with conditional options based on a mode.
 * @param {Object} config - {key, label, modeKey, normalTokens, shapedTokens, defaultNormal, defaultShaped}
 */
export function createConditionalSizeProp(config) {
  const {
    key = 'size',
    label = 'Size',
    modeKey = 'sizeMode',
    normalTokens = [],
    shapedTokens = [],
    defaultNormal,
  } = config;

  const defaultVal = defaultNormal ?? normalTokens[0] ?? '';
  return {
    key,
    label,
    type: 'radio',
    default: defaultVal,
    getOptions(state) {
      if (state[modeKey] === 'layeredBg' || state[modeKey] === 'shaped') {
        return shapedTokens.map(toSizeOption);
      }
      return normalTokens.map(toSizeOption);
    },
  };
}

/**
 * Create a layer prop that's visible only when a mode is set.
 * @param {Object} config - {key, label, modeKey, layerTokens, suffix}
 */
export function createLayerProp(config) {
  const {
    key = 'customClass',
    label = 'Layer',
    modeKey = 'sizeMode',
    layerTokens = [],
    suffix = ' rounded',
  } = config;

  return {
    key,
    label,
    type: 'select',
    default: '',
    visibleWhen: (state) =>
      state[modeKey] === 'layeredBg' || state[modeKey] === 'shaped',
    options: [
      { value: '', label: 'None' },
      ...layerTokens.map((v) => toLayerOption(v, suffix)),
    ],
  };
}

/**
 * Create a checkbox prop (typically used to toggle a class in stateToProps).
 * The class name is handled in the component's stateToProps function.
 * @param {Object} config - {key, label}
 */
export function createClassCheckboxProp(config) {
  const { key = 'spin', label = 'Spin' } = config;
  return {
    key,
    label,
    type: 'checkbox',
    default: false,
  };
}
