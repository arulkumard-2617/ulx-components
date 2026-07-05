import Route from '@ember/routing/route';
import { TooltipFeatureItems } from '../../documentation/components/tooltip/features';
import meta from '../../documentation/components/tooltip/meta';

export default class ComponentsModulesTooltipRoute extends Route {
  model() {
    return {
      features: TooltipFeatureItems,
      meta: meta
    };
  }
}
