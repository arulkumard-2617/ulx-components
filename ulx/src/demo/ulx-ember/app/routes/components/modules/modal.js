import Route from '@ember/routing/route';
import { ModalFeatureItems } from '../../../documentation/components/modules/modal/features';
import meta from '../../../documentation/components/modules/modal/meta';

export default class ComponentsModulesModalRoute extends Route {
  model() {
    return {
      features: ModalFeatureItems,
      meta: meta,
    };
  }
}
