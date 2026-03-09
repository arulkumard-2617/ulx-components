import Route from '@ember/routing/route';
import { DataViewFeatureItems } from '../../../documentation/components/modules/data-view/features';
import meta from '../../../documentation/components/modules/data-view/meta';

export default class ComponentsModulesDataViewRoute extends Route {
  model() {
    return {
      features: DataViewFeatureItems,
      meta,
    };
  }
}
