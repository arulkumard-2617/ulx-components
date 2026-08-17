import Route from '@ember/routing/route';
import { ProgressBarFeatureItems } from '../../documentation/components/progressbar/features';
import meta from '../../documentation/components/progressbar/meta';

export default class ComponentsElementsProgressbarRoute extends Route {
  model() {
    return {
      features: ProgressBarFeatureItems,
      meta
    };
  }
}
