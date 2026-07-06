import Route from '@ember/routing/route';
import { IconFeatureItems } from '../../documentation/components/icon/features';
import meta from '../../documentation/components/icon/meta';

export default class ComponentsElementsIconRoute extends Route {
  model() {
    return {
      features: IconFeatureItems,
      meta
    };
  }
}
