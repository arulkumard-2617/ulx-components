import Route from '@ember/routing/route';
import { MessageFeatureItems } from '../../../documentation/components/collections/message/features';
import meta from '../../../documentation/components/collections/message/meta';
import builderSchema from '../../../documentation/components/collections/message/builder-schema';

export default class ComponentsCollectionsMessageRoute extends Route {
  model() {
    return {
      features: MessageFeatureItems,
      meta,
      builderSchema,
    };
  }
}
