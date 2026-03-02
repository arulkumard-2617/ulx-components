import Route from '@ember/routing/route';
import { MessagesFeatureItems } from '../../../documentation/components/elements/messages/features';
import meta from '../../../documentation/components/elements/messages/meta';
import builderSchema from '../../../documentation/components/elements/messages/builder-schema';

export default class ComponentsElementsMessagesRoute extends Route {
  model() {
    return {
      features: MessagesFeatureItems,
      meta,
      builderSchema,
    };
  }
}
