import Route from '@ember/routing/route';
import { SlidepaneFeatureItems } from '../../documentation/templates/slidepane/features';
import meta from '../../documentation/templates/slidepane/meta';

export default class TemplatesSlidepaneRoute extends Route {
  model() {
    return {
      features: SlidepaneFeatureItems,
      meta
    };
  }
}
