import Route from '@ember/routing/route';
import { MessagesFeatureItems } from '../../../documentation/components/collections/messages/features';
import meta from '../../../documentation/components/collections/messages/meta';
import builderSchema from '../../../documentation/components/collections/messages/builder-schema';

export default class ComponentsCollectionsMessagesRoute extends Route {
  model() {
    return {
      features: MessagesFeatureItems,
      meta,
      builderSchema,
    };
  }
}
