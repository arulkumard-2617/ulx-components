import Route from '@ember/routing/route';
import { ToggleFeatureItems } from '../../../documentation/components/elements/toggle/features';
import meta from '../../../documentation/components/elements/toggle/meta';

export default class ComponentsElementsToggleRoute extends Route {
  model() {
    return {
      features: ToggleFeatureItems,
      meta: meta,
    };
  }
}
