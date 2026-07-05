import Route from '@ember/routing/route';
import { TextareaFeatureItems } from '../../documentation/components/textarea/features';
import meta from '../../documentation/components/textarea/meta';

export default class ComponentsElementsTextareaRoute extends Route {
  model() {
    return {
      features: TextareaFeatureItems,
      meta: meta
    };
  }
}
