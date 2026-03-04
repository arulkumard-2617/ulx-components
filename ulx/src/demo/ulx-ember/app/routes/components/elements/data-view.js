import Route from '@ember/routing/route';
import { DataViewFeatureItems } from '../../../documentation/components/elements/dataview/features';
import meta from '../../../documentation/components/elements/dataview/meta';

export default class ComponentsElementsDataViewRoute extends Route {
  model() {
    return {
      features: DataViewFeatureItems,
      meta,
    };
  }
}
