import Route from '@ember/routing/route';
import { SlidepaneFeatureItems } from '../../documentation/components/slidepane/features';
import meta from '../../documentation/components/slidepane/meta';

export default class ComponentsModulesSlidepaneRoute extends Route {
  model() {
    return {
      features: SlidepaneFeatureItems,
      meta: meta
    };
  }
}
