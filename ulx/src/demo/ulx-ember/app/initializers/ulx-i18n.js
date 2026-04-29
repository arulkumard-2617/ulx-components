import config from 'ulx-ember/config/environment';
import { bootstrapTranslations } from 'ulx-components';
import ulxEnUsMessages from 'ulx-ember/message-resources/ulx-en-us';

const DEFAULT_LOCALE = 'en-us';

function resolveDemoLocale() {
  const appLocale = config?.APP?.ulxDemoLocale;
  if (typeof appLocale === 'string' && appLocale.trim()) {
    return appLocale;
  }

  if (typeof window !== 'undefined') {
    const runtimeLocale = window?.eventzLocale || window?.EVENTZ_LOCALE;
    if (typeof runtimeLocale === 'string' && runtimeLocale.trim()) {
      return runtimeLocale;
    }
  }

  return DEFAULT_LOCALE;
}

export function initialize() {
  const locale = resolveDemoLocale();
  bootstrapTranslations(locale, ulxEnUsMessages);
}

export default {
  name: 'ulx-i18n',
  initialize
};
