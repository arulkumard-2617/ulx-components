import Route from '@ember/routing/route';
import { PanelMenuFeatureItems } from '../../documentation/components/panelmenu/features';
import meta from '../../documentation/components/panelmenu/meta';

export default class ComponentsModulesPanelMenuRoute extends Route {
  model() {
    return {
      features: PanelMenuFeatureItems,
      meta: meta
    };
  }
}
