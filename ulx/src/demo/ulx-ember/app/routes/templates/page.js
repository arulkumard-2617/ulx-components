import Route from '@ember/routing/route';
import { PageFeatureItems } from '../../template-docs/page/features';

export default class TemplatesPageRoute extends Route {
  model() {
    return {
      title: 'Page Templates',
      description:
        'Page layout templates for sidebar navigation, scrollable content panels, and full-viewport modal experiences.',
      features: PageFeatureItems
    };
  }
}
