import Route from '@ember/routing/route';
import { SorterFeatureItems } from '../../documentation/components/sorter/features';
import meta from '../../documentation/components/sorter/meta';
import builderSchema from '../../documentation/components/sorter/builder-schema';

export default class ComponentsModulesSorterRoute extends Route {
  model() {
    return {
      features: SorterFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
