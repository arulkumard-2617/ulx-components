import Route from '@ember/routing/route';
import { SelectButtonFeatureItems } from '../../documentation/components/select-button/features';
import meta from '../../documentation/components/select-button/meta';

export default class ComponentsElementsSelectButtonRoute extends Route {
  model() {
    return {
      features: SelectButtonFeatureItems,
      meta: meta
    };
  }
}
