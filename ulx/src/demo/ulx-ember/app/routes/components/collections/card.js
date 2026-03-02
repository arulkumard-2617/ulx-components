import Route from '@ember/routing/route';
import { CardFeatureItems } from '../../../documentation/components/collections/card/features';
import meta from '../../../documentation/components/collections/card/meta';
import builderSchema from '../../../documentation/components/collections/card/builder-schema';

export default class ComponentsCollectionsCardRoute extends Route {
  model() {
    return {
      features: CardFeatureItems,
      meta,
      builderSchema,
    };
  }
}

