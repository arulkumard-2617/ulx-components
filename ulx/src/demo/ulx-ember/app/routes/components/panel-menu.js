import Route from '@ember/routing/route';
import { PanelMenuFeatureItems } from '../../documentation/components/panelmenu/features';
import meta from '../../documentation/components/panelmenu/meta';
import builderSchema from '../../documentation/components/panelmenu/builder-schema';

export default class ComponentsModulesPanelMenuRoute extends Route {
  model() {
    return {
      features: PanelMenuFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
