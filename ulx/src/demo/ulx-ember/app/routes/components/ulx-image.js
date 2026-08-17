import Route from '@ember/routing/route';
import { UlxImageFeatureItems } from '../../documentation/components/ulx-image/features';
import meta from '../../documentation/components/ulx-image/meta';

export default class ComponentsUlxImageRoute extends Route {
  model() {
    return {
      features: UlxImageFeatureItems,
      meta
    };
  }
}
