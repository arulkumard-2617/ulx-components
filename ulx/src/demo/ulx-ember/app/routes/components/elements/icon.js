import Route from '@ember/routing/route';
import { IconFeatureItems } from '../../../documentation/components/elements/icon/features';
import meta from '../../../documentation/components/elements/icon/meta';

export default class ComponentsElementsIconRoute extends Route {
  model() {
    return {
      features: IconFeatureItems,
      meta: meta
    };
  }
}
