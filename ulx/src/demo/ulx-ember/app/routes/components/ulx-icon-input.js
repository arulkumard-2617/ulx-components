import Route from '@ember/routing/route';
import { UlxIconInputFeatureItems } from '../../documentation/components/ulx-icon-input/features';
import meta from '../../documentation/components/ulx-icon-input/meta';

export default class ComponentsElementsUlxIconInputRoute extends Route {
  model() {
    return {
      features: UlxIconInputFeatureItems,
      meta: meta
    };
  }
}
