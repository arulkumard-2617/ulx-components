import Route from '@ember/routing/route';

export default class ComponentsRichTextEditorRoute extends Route {
	model() {
		return {
			meta: {
				header: 'RichTextEditor',
				subHeader: 'Rich text editor powered by Quill.'
			}
		};
	}
}

