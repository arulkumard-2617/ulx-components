import Route from '@ember/routing/route';
import { PageFeatureItems } from '../../documentation/templates/page/features';
import meta from '../../documentation/templates/page/meta';

export default class TemplatesPageRoute extends Route {
  model() {
    return {
      features: PageFeatureItems,
      meta
    };
  }
}
