import Route from '@ember/routing/route';
import { MessagesFeatureItems } from '../../documentation/components/messages/features';
import meta from '../../documentation/components/messages/meta';

export default class ComponentsCollectionsMessagesRoute extends Route {
  model() {
    return {
      features: MessagesFeatureItems,
      meta
    };
  }
}
