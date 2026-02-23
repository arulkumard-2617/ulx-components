import Route from '@ember/routing/route';

export default class UtilitiesIndexRoute extends Route {
  model() {
    return {
      title: 'Utilities',
      description:
        'Reference for ULS utility classes. Select a utility from the sidebar to view its classes and styles. Data is generated from utill.less; run npm run generate:uls-schema to refresh the schema.',
      sections: [],
    };
  }
}
