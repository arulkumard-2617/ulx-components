import { EditorState } from '@codemirror/state';
import { EditorView, lineNumbers } from '@codemirror/view';
import { oneDark } from '@codemirror/theme-one-dark';

const editorTheme = EditorView.theme({
  '&': {
    fontSize: '14px',
    backgroundColor: '#272822',
  },
  '.cm-scroller': {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    lineHeight: '1.6',
    overflow: 'auto',
  },
  '.cm-gutters': {
    backgroundColor: '#272822',
    color: '#858585',
    borderInlineEnd: '1px solid #3e3e3e',
  },
  '.cm-content': {
    padding: '16px 0',
  },
  '&.cm-focused': {
    outline: 'none',
  },
});

/**
 * Read-only CodeMirror extensions for documentation previews.
 *
 * @param {import('@codemirror/language').Extension[]} languageExtensions
 */
export function buildPreviewExtensions(languageExtensions = []) {
  const extensions = [
    lineNumbers(),
    EditorState.readOnly.of(true),
    EditorView.editable.of(false),
    oneDark,
    editorTheme,
  ];

  if (Array.isArray(languageExtensions)) {
    extensions.push(...languageExtensions);
  } else if (languageExtensions) {
    extensions.push(languageExtensions);
  }

  return extensions;
}
