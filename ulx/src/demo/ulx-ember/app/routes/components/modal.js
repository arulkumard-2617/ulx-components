import Route from '@ember/routing/route';
import { ModalFeatureItems } from '../../documentation/components/modal/features';
import meta from '../../documentation/components/modal/meta';

export default class ComponentsModulesModalRoute extends Route {
  model() {
    return {
      features: ModalFeatureItems,
      meta: meta
    };
  }
}
