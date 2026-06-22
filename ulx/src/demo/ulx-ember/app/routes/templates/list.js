import Route from '@ember/routing/route';
import { ListFeatureItems } from '../../template-docs/list/features';

export default class TemplatesListRoute extends Route {
  model() {
    return {
      title: 'List Templates',
      description:
        'Grid-listing layouts with colored row indicators, sortable rows, status pills, action menus, and nested tree rows for grouped offers.',
      features: ListFeatureItems
    };
  }
}
