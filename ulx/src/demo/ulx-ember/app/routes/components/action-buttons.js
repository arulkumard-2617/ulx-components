import Route from '@ember/routing/route';
import { ActionButtonsFeatureItems } from '../../documentation/components/action-buttons/features';
import meta from '../../documentation/components/action-buttons/meta';

export default class ComponentsCollectionsActionButtonsRoute extends Route {
  model() {
    return {
      features: ActionButtonsFeatureItems,
      meta
    };
  }
}
