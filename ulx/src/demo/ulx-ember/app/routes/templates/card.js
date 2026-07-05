import Route from '@ember/routing/route';
import { CardFeatureItems } from '../../documentation/templates/card/features';
import meta from '../../documentation/templates/card/meta';

export default class TemplatesCardRoute extends Route {
  model() {
    return {
      features: CardFeatureItems,
      meta
    };
  }
}
