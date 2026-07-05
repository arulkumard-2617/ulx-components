import Route from '@ember/routing/route';
import { TristateCheckboxFeatureItems } from '../../documentation/components/tristate-checkbox/features';
import meta from '../../documentation/components/tristate-checkbox/meta';

export default class ComponentsElementsTristateCheckboxRoute extends Route {
  model() {
    return {
      features: TristateCheckboxFeatureItems,
      meta: meta
    };
  }
}
