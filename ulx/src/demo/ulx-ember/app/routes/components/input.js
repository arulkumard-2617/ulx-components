import Route from '@ember/routing/route';
import { InputFeatureItems } from '../../documentation/components/input/features';
import meta from '../../documentation/components/input/meta';

export default class ComponentsElementsInputRoute extends Route {
  model() {
    return {
      features: InputFeatureItems,
      meta: meta
    };
  }
}
