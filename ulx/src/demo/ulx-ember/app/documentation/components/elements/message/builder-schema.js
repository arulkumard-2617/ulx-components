// ==========================================================================
// MESSAGE BUILDER SCHEMA
// ==========================================================================

export default {
  fields: [
    { key: 'text', type: 'string', label: 'Text', default: 'Message text' },
    { key: 'variant', type: 'select', label: 'Variant', options: ['info', 'success', 'warn', 'error'], default: 'info' },
    { key: 'customClass', type: 'string', label: 'Custom class', default: '' },
  ],
};
