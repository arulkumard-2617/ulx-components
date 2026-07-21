import Route from '@ember/routing/route';
import { LoadingFeatureItems } from '../../documentation/components/loading/features';
import meta from '../../documentation/components/loading/meta';

export default class ComponentsElementsLoadingRoute extends Route {
  model() {
    return {
      features: LoadingFeatureItems,
      meta
    };
  }
}
