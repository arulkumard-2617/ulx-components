import Route from '@ember/routing/route';
import { MessageFeatureItems } from '../../documentation/templates/message/features';
import meta from '../../documentation/templates/message/meta';

export default class TemplatesMessageRoute extends Route {
  model() {
    return {
      features: MessageFeatureItems,
      meta
    };
  }
}
