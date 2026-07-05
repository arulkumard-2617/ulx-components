import Route from '@ember/routing/route';
import { ActionMenuFeatureItems } from '../../documentation/components/action-menu/features';
import meta from '../../documentation/components/action-menu/meta';

export default class ComponentsElementsActionMenuRoute extends Route {
  model() {
    return {
      features: ActionMenuFeatureItems,
      meta
    };
  }
}
