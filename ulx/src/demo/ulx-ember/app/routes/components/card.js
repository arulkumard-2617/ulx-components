import Route from '@ember/routing/route';
import { CardFeatureItems } from '../../documentation/components/card/features';
import meta from '../../documentation/components/card/meta';

export default class ComponentsCollectionsCardRoute extends Route {
  model() {
    return {
      features: CardFeatureItems,
      meta
    };
  }
}

