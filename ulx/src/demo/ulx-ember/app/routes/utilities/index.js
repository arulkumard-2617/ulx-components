import Route from '@ember/routing/route';

export default class UtilitiesIndexRoute extends Route {
  model() {
    return {
      title: 'Utilities',
      description:
        'Reference for ULS utility classes. Select a utility from the sidebar to view its classes and styles. Data is generated from utill.less; run node scripts/parse-uls-utilities.js to refresh.',
      sections: [],
    };
  }
}
