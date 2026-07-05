import { modifier } from 'ember-modifier';
import { EditorState } from '@codemirror/state';
import { EditorView, lineNumbers } from '@codemirror/view';
import { oneDark } from '@codemirror/theme-one-dark';
import { languageExtensionFor } from '../utils/codemirror-languages';

const editorTheme = EditorView.theme({
  '&': {
    fontSize: '14px',
    backgroundColor: '#272822'
  },
  '.cm-scroller': {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    lineHeight: '1.6',
    overflow: 'auto'
  },
  '.cm-gutters': {
    backgroundColor: '#272822',
    color: '#858585',
    borderInlineEnd: '1px solid #3e3e3e'
  },
  '.cm-content': {
    padding: '16px 0'
  },
  '&.cm-focused': {
    outline: 'none'
  }
});

function buildExtensions(language) {
  const languageExtension = languageExtensionFor(language);
  const extensions = [
    lineNumbers(),
    EditorState.readOnly.of(true),
    EditorView.editable.of(false),
    oneDark,
    editorTheme
  ];

  if (Array.isArray(languageExtension)) {
    extensions.push(...languageExtension);
  } else if (languageExtension) {
    extensions.push(languageExtension);
  }

  return extensions;
}

function createEditor(element, doc, language) {
  return new EditorView({
    state: EditorState.create({
      doc,
      extensions: buildExtensions(language)
    }),
    parent: element
  });
}

export default modifier((element, [doc = '', language = 'javascript']) => {
  let view = createEditor(element, doc, language);

  return () => {
    view.destroy();
  };
});
