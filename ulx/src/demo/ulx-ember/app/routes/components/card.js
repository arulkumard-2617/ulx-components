import Route from '@ember/routing/route';
import { CardFeatureItems } from '../../documentation/components/card/features';
import meta from '../../documentation/components/card/meta';
import builderSchema from '../../documentation/components/card/builder-schema';

export default class ComponentsCollectionsCardRoute extends Route {
  model() {
    return {
      features: CardFeatureItems,
      meta,
      builderSchema,
    };
  }
}

