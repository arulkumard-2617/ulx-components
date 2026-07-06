import Route from '@ember/routing/route';
import { PopupFeatureItems } from '../../documentation/components/popup/features';
import meta from '../../documentation/components/popup/meta';

export default class ComponentsModulesPopupRoute extends Route {
  model() {
    return {
      features: PopupFeatureItems,
      meta: meta
    };
  }
}
