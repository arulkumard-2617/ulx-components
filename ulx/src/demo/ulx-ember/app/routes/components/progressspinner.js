import Route from '@ember/routing/route';
import { ProgressSpinnerFeatureItems } from '../../documentation/components/progressspinner/features';
import meta from '../../documentation/components/progressspinner/meta';

export default class ComponentsElementsProgressspinnerRoute extends Route {
  model() {
    return {
      features: ProgressSpinnerFeatureItems,
      meta
    };
  }
}
