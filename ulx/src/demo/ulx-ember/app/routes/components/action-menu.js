import Route from '@ember/routing/route';
import { ActionMenuFeatureItems } from '../../documentation/components/action-menu/features';
import meta from '../../documentation/components/action-menu/meta';
import builderSchema from '../../documentation/components/action-menu/builder-schema';

export default class ComponentsElementsActionMenuRoute extends Route {
  model() {
    return {
      features: ActionMenuFeatureItems,
      meta,
      builderSchema
    };
  }
}
