import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { json } from '@codemirror/lang-json';

/**
 * Map documentation language identifiers to CodeMirror 6 language extensions.
 *
 * @param {string} language
 * @returns {import('@codemirror/language').LanguageSupport|import('@codemirror/language').Extension[]}
 */
export function languageExtensionFor(language) {
  const lang = (language || 'javascript').toLowerCase();

  switch (lang) {
    case 'javascript':
    case 'js':
    case 'jsx':
    case 'gjs':
      return javascript({ jsx: true, typescript: false });
    case 'html':
    case 'markup':
    case 'handlebars':
    case 'hbs':
      return html();
    case 'css':
    case 'less':
    case 'scss':
    case 'sass':
      return css();
    case 'json':
      return json();
    default:
      return [];
  }
}

/**
 * Resolve the effective preview language based on expand state and source type.
 *
 * @param {string} language
 * @param {boolean} expanded
 */
export function effectiveLanguageFor(language, expanded) {
  if (expanded) {
    const lang = (language || 'javascript').toLowerCase();
    if (lang === 'handlebars' || lang === 'hbs' || lang === 'gjs') {
      return 'javascript';
    }
    return lang;
  }

  const lang = (language || 'javascript').toLowerCase();
  if (lang === 'handlebars' || lang === 'hbs' || lang === 'gjs') {
    return 'html';
  }
  return lang;
}
