import Route from '@ember/routing/route';
import { SplitButtonFeatureItems } from '../../documentation/components/split-button/features';
import meta from '../../documentation/components/split-button/meta';

export default class ComponentsCollectionsSplitButtonRoute extends Route {
  model() {
    return {
      features: SplitButtonFeatureItems,
      meta,
    };
  }
}
