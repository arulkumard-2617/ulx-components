import { modifier } from 'ember-modifier';
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { languageExtensionFor } from '../utils/codemirror-languages';
import { buildPreviewExtensions } from '../utils/codemirror-preview-config';

function createEditor(element, doc, language) {
  return new EditorView({
    state: EditorState.create({
      doc,
      extensions: buildPreviewExtensions(languageExtensionFor(language)),
    }),
    parent: element,
  });
}

export default modifier((element, [doc = '', language = 'javascript']) => {
  const view = createEditor(element, doc, language);

  return () => {
    view.destroy();
  };
});
