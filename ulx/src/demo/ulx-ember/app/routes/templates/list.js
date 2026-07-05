import Route from '@ember/routing/route';
import { ListFeatureItems } from '../../documentation/templates/list/features';
import meta from '../../documentation/templates/list/meta';

export default class TemplatesListRoute extends Route {
  model() {
    return {
      features: ListFeatureItems,
      meta
    };
  }
}
