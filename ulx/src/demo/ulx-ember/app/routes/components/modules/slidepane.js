import Route from '@ember/routing/route';
import { SlidepaneFeatureItems } from '../../../documentation/components/modules/slidepane/features';
import meta from '../../../documentation/components/modules/slidepane/meta';
import builderSchema from '../../../documentation/components/modules/slidepane/builder-schema';

export default class ComponentsModulesSlidepaneRoute extends Route {
  model() {
    return {
      features: SlidepaneFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
