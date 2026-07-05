import Route from '@ember/routing/route';
import { MessageFeatureItems } from '../../documentation/components/message/features';
import meta from '../../documentation/components/message/meta';

export default class ComponentsCollectionsMessageRoute extends Route {
  model() {
    return {
      features: MessageFeatureItems,
      meta
    };
  }
}
