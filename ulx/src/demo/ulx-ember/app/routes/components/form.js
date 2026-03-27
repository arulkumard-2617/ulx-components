import Route from '@ember/routing/route';
import { FormFeatureItems } from '../../documentation/components/form/features';
import meta from '../../documentation/components/form/meta';
import builderSchema from '../../documentation/components/form/builder-schema';

export default class ComponentsCollectionsFormRoute extends Route {
  model() {
    return {
      features: FormFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
