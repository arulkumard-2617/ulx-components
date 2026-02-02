import Route from '@ember/routing/route';
import { ToastFeatureItems } from '../../../documentation/components/modules/toast/features';
import meta from '../../../documentation/components/modules/toast/meta';

export default class ComponentsModulesToastRoute extends Route {
  model() {
    return {
      features: ToastFeatureItems,
      meta: meta,
    };
  }
}
