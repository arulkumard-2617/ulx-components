import i18n from 'ulx-components/utils/i18n';
import ulxEnUsMessages from 'ulx-ember/message-resources/ulx-en-us';

export function initialize() {
  i18n.t = (key, params = {}) => {
    const template = ulxEnUsMessages[key] ?? key;
    return template.replace(/\{(\w+)\}/g, (match, name) => {
      return Object.prototype.hasOwnProperty.call(params, name)
        ? String(params[name])
        : match;
    });
  };
}

export default {
  name: 'ulx-i18n',
  initialize
};
