import Route from '@ember/routing/route';
import { MessageFeatureItems } from '../../../documentation/components/elements/message/features';
import meta from '../../../documentation/components/elements/message/meta';
import builderSchema from '../../../documentation/components/elements/message/builder-schema';

export default class ComponentsElementsMessageRoute extends Route {
  model() {
    return {
      features: MessageFeatureItems,
      meta,
      builderSchema,
    };
  }
}
