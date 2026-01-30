import Route from '@ember/routing/route';
import { DialogFeatureItems } from '../../../documentation/components/modules/dialog/features';
import meta from '../../../documentation/components/modules/dialog/meta';

export default class ComponentsModulesDialogRoute extends Route {
  model() {
    return {
      features: DialogFeatureItems,
      meta: meta
    };
  }
}
