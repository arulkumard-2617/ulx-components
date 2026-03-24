import { guidFor } from '@ember/object/internals';
import { getComponentClass } from './component-config.js';

function normalizeRules(rules) {
  return rules ?? {};
}
function resolveKey(componentInstance, keyArg) {
  return keyArg ?? guidFor(componentInstance);
}
function buildInputId(namespace, idArg, key) {
  if (typeof idArg === 'string' && idArg.length) return idArg;
  if (typeof key === 'string' && key.length) return key;
  return `${namespace}-input-${key}`;
}
function buildToggleId(namespace, idArg, key) {
  if (typeof idArg === 'string' && idArg.length) return idArg;
  if (typeof key === 'string' && key.length) return key;
  return `${namespace}-toggle-${key}`;
}

/**
 * Stable row key and native input id for `UlxOptionSegment` items (aligned with UlxCheckbox group ids).
 * Use the same value for `{{#each key=}}` and for the embedded control `@id`.
 *
 * @param {object} [item] - May include string `id` when the list can reorder.
 * @param {number} index - Zero-based row index.
 * @param {string} segmentIdBase - Base id from the segment (`@id` / `@key` / auto).
 * @returns {string|undefined}
 */
function optionSegmentRowKey(item, index, segmentIdBase) {
  const rowId = item?.id;
  if (typeof rowId === 'string' && rowId.length > 0) return rowId;
  if (typeof segmentIdBase !== 'string' || segmentIdBase.length === 0) return undefined;
  return index === 0 ? segmentIdBase : `${segmentIdBase}-item-${index}`;
}
function resolveFloatLabelText(floatLabelArg, labelArg) {
  if (typeof floatLabelArg === 'string') {
    return floatLabelArg;
  }
  return labelArg;
}
function hasText(value) {
  return typeof value === 'string' && value.length > 0;
}
function hasInputValue(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

/**
 * Numeric constraint from ULX `{ maxLength: { value: n } }` or editor-style `{ maxLength: { value: n, msg } }`.
 *
 * @param {object} [rules]
 * @param {'minLength'|'maxLength'} ruleName
 * @returns {number|undefined}
 */
function getConstraintValue(rules, ruleName) {
  const block = rules?.[ruleName];
  if (block == null) return undefined;
  if (typeof block === 'number') return block;
  if (typeof block.value === 'number') return block.value;
  if (ruleName === 'maxLength' && typeof block.max === 'number') return block.max;
  if (ruleName === 'minLength' && typeof block.min === 'number') return block.min;
  return undefined;
}
function getRuleValue(rules, ruleName) {
  return rules?.[ruleName]?.value;
}

/**
 * @param {object} [rules]
 * @returns {boolean}
 */
function isRulesRequired(rules) {
  const {
    required
  } = rules ?? {};
  if (required == null || required === false) return false;
  if (typeof required === 'string') return required.length > 0;
  return !!required;
}
function isInvalidState(invalidArg, errorArg) {
  return !!(invalidArg || errorArg);
}

/**
 * Invoke onChange and onCheckedChange from a boolean control's change event.
 * @param {object} args - Component args with optional onChange, onCheckedChange.
 * @param {Event} event - Native change event (event.target.checked is the new value).
 */
function invokeCheckedChange(args, event) {
  args.onChange?.(event);
  args.onCheckedChange?.(event.target.checked, event);
}
function buildFieldClass(fieldClassArg) {
  const parts = ['field'];
  if (fieldClassArg) parts.push(fieldClassArg);
  return parts.filter(Boolean).join(' ');
}
function buildInputClass({
  isTextarea,
  size,
  filled,
  invalid,
  disabled,
  readonly,
  floatLabel,
  value
}) {
  const parts = isTextarea ? [getComponentClass('inputtextarea'), getComponentClass('input')] : [getComponentClass('input')];
  if (size) parts.push(size);
  if (filled) parts.push('filled');
  if (invalid) parts.push('invalid');
  if (disabled) parts.push('disabled');
  if (readonly) parts.push('readonly');

  // Float label: add input-filled class if value exists (for initial render)
  if (floatLabel && hasInputValue(value)) {
    parts.push('input-filled');
  }
  return parts.filter(Boolean).join(' ');
}
function buildFloatLabelClass({
  size,
  filled,
  invalid,
  disabled
}) {
  const parts = [getComponentClass('floatlabel')];
  if (size) parts.push(size);
  if (filled) parts.push('filled');
  if (invalid) parts.push('invalid');
  if (disabled) parts.push('disabled');
  return parts.filter(Boolean).join(' ');
}
function getFloatLabelLabelClass() {
  return 'floatlabel-label';
}
function buildIconFieldClass({
  iconPosition,
  size,
  disabled,
  iconFieldClass
}) {
  const position = iconPosition === 'right' ? 'right' : 'left';
  const parts = [getComponentClass('iconfield'), `icon-${position}`, 'outlined'];
  if (size) parts.push(size);
  if (disabled) parts.push('disabled');
  if (iconFieldClass) parts.push(iconFieldClass);
  return parts.filter(Boolean).join(' ');
}
function getInputIconClass() {
  return getComponentClass('input-icon');
}
function buildInputGroupClass({
  size,
  filled,
  invalid,
  disabled
}) {
  const parts = [getComponentClass('inputgroup')];
  if (size) parts.push(size);
  parts.push(filled ? 'filled' : 'outlined');
  if (invalid) parts.push('invalid');
  if (disabled) parts.push('disabled');
  return parts.filter(Boolean).join(' ');
}
function buildAriaDescribedBy(inputId, {
  helpText,
  error
}) {
  const parts = [];
  if (helpText) parts.push(`${inputId}-help`);
  if (error) parts.push(`${inputId}-error`);
  return parts.length > 0 ? parts.join(' ') : undefined;
}
function getKeyFilterPattern(keyfilter) {
  if (!keyfilter) return null;
  const buildKeyFilterRegExp = (source, flags = '') => {
    const safeFlags = flags.replace(/[gy]/g, '');
    return new RegExp(source, safeFlags);
  };
  if (keyfilter instanceof RegExp) {
    try {
      return buildKeyFilterRegExp(keyfilter.source, keyfilter.flags);
    } catch (e) {
      console.warn('Invalid RegExp pattern:', keyfilter);
      return null;
    }
  }

  // If it's a RegExp string (starts with /), parse it
  if (typeof keyfilter === 'string' && keyfilter.startsWith('/')) {
    try {
      const match = keyfilter.match(/^\/(.*)\/([gimuy]*)$/);
      if (match) {
        return buildKeyFilterRegExp(match[1], match[2] || '');
      }
    } catch (e) {
      console.warn('Invalid RegExp pattern:', keyfilter);
      return null;
    }
  }

  // Preset patterns
  const patterns = {
    int: /^-?\d*$/,
    float: /^-?\d*\.?\d*$/,
    email: /^[^\s@]*@?[^\s@]*$/,
    url: /^[^\s]*$/,
    phone: /^[\d\s()+-]*$/,
    cpf: /^\d{0,11}$/,
    cnpj: /^\d{0,14}$/,
    hex: /^[0-9A-Fa-f]*$/,
    alpha: /^[a-zA-Z\s]*$/,
    alphanum: /^[a-zA-Z0-9\s]*$/,
    uuid: /^[0-9a-fA-F-]*$/,
    date: /^[\d-]*$/,
    time: /^[\d:]*$/,
    datetime: /^[\d\s:T-]*$/,
    'datetime-local': /^[\d\s:T-]*$/,
    month: /^[\d-]*$/,
    week: /^[\dW-]*$/
  };
  return patterns[keyfilter] || null;
}
function matchesKeyFilter(pattern, value) {
  if (!(pattern instanceof RegExp)) return true;
  pattern.lastIndex = 0;
  return pattern.test(value);
}
function areOptionValuesEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  const primitiveTypes = ['string', 'number', 'bigint', 'boolean'];
  const aType = typeof a;
  const bType = typeof b;
  if (primitiveTypes.includes(aType) && primitiveTypes.includes(bType)) {
    return String(a) === String(b);
  }
  return false;
}
function isSpecialKey(event) {
  const specialKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown', 'Insert', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];

  // Allow Ctrl/Cmd + key combinations (for copy, paste, etc.)
  if (event.ctrlKey || event.metaKey) {
    return true;
  }
  return specialKeys.includes(event.key);
}
function syncFloatLabelFilledClass(target) {
  if (!target) return;
  if (target.value) {
    target.classList.add('input-filled');
  } else {
    target.classList.remove('input-filled');
  }
}

export { areOptionValuesEqual, buildAriaDescribedBy, buildFieldClass, buildFloatLabelClass, buildIconFieldClass, buildInputClass, buildInputGroupClass, buildInputId, buildToggleId, getConstraintValue, getFloatLabelLabelClass, getInputIconClass, getKeyFilterPattern, getRuleValue, hasInputValue, hasText, invokeCheckedChange, isInvalidState, isRulesRequired, isSpecialKey, matchesKeyFilter, normalizeRules, optionSegmentRowKey, resolveFloatLabelText, resolveKey, syncFloatLabelFilledClass };
//# sourceMappingURL=input-util.js.map
