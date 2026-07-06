import Route from '@ember/routing/route';
import { SorterFeatureItems } from '../../documentation/components/sorter/features';
import meta from '../../documentation/components/sorter/meta';

export default class ComponentsModulesSorterRoute extends Route {
  model() {
    return {
      features: SorterFeatureItems,
      meta: meta
    };
  }
}
