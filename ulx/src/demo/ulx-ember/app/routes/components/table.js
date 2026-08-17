import Route from '@ember/routing/route';
import { TableFeatureItems } from '../../documentation/components/table/features';
import meta from '../../documentation/components/table/meta';

export default class ComponentsModulesTableRoute extends Route {
  model() {
    return {
      features: TableFeatureItems,
      meta: meta
    };
  }
}
