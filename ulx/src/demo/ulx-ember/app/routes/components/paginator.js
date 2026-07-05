import Route from '@ember/routing/route';
import { PaginatorFeatureItems } from '../../documentation/components/paginator/features';
import meta from '../../documentation/components/paginator/meta';

export default class ComponentsModulesPaginatorRoute extends Route {
  model() {
    return {
      features: PaginatorFeatureItems,
      meta: meta
    };
  }
}
