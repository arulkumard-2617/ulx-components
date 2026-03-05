import Route from '@ember/routing/route';
import { SkeletonFeatureItems } from '../../../documentation/components/elements/skeleton/features';
import meta from '../../../documentation/components/elements/skeleton/meta';

export default class ComponentsElementsSkeletonRoute extends Route {
  model() {
    return {
      features: SkeletonFeatureItems,
      meta,
    };
  }
}
