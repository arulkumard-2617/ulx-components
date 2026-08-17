import Route from '@ember/routing/route';
import { TableFeatureItems } from '../../documentation/templates/table/features';
import meta from '../../documentation/templates/table/meta';

export default class TemplatesTableRoute extends Route {
  model() {
    return {
      features: TableFeatureItems,
      meta
    };
  }
}
