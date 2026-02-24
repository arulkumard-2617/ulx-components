import Route from '@ember/routing/route';
import { TableFeatureItems } from '../../../documentation/components/modules/table/features';
import meta from '../../../documentation/components/modules/table/meta';

export default class ComponentsModulesTableRoute extends Route {
  model() {
    return {
      features: TableFeatureItems,
      meta: meta,
    };
  }
}
