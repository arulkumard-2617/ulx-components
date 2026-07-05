import Route from '@ember/routing/route';
import { RadioFeatureItems } from '../../documentation/components/radio/features';
import meta from '../../documentation/components/radio/meta';

export default class ComponentsElementsRadioRoute extends Route {
  model() {
    return {
      features: RadioFeatureItems,
      meta: meta
    };
  }
}
