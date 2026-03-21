import Route from '@ember/routing/route';
import { SorterFeatureItems } from '../../../documentation/components/modules/sorter/features';
import meta from '../../../documentation/components/modules/sorter/meta';
import builderSchema from '../../../documentation/components/modules/sorter/builder-schema';

export default class ComponentsModulesSorterRoute extends Route {
  model() {
    return {
      features: SorterFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
