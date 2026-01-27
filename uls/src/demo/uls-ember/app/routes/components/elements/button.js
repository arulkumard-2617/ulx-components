import Route from '@ember/routing/route';
import { ButtonFeatureItems } from '../../../documentation/components/elements/button/features';
import meta from '../../../documentation/components/elements/button/meta';

export default class ComponentsElementsButtonRoute extends Route {
  model() {
    return {
      features: ButtonFeatureItems,
      meta: meta
    };
  }
}
