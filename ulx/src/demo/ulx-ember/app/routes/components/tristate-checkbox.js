import Route from '@ember/routing/route';
import { TristateCheckboxFeatureItems } from '../../documentation/components/tristate-checkbox/features';
import meta from '../../documentation/components/tristate-checkbox/meta';
import builderSchema from '../../documentation/components/tristate-checkbox/builder-schema';

export default class ComponentsElementsTristateCheckboxRoute extends Route {
  model() {
    return {
      features: TristateCheckboxFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
