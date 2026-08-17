import Route from '@ember/routing/route';
import { SkeletonFeatureItems } from '../../documentation/components/skeleton/features';
import meta from '../../documentation/components/skeleton/meta';

export default class ComponentsElementsSkeletonRoute extends Route {
  model() {
    return {
      features: SkeletonFeatureItems,
      meta
    };
  }
}
