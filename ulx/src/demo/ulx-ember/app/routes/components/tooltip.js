import Route from '@ember/routing/route';
import { TooltipFeatureItems } from '../../documentation/components/tooltip/features';
import meta from '../../documentation/components/tooltip/meta';
import builderSchema from '../../documentation/components/tooltip/builder-schema';

export default class ComponentsModulesTooltipRoute extends Route {
  model() {
    return {
      features: TooltipFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
