import Route from '@ember/routing/route';
import { IconButtonFeatureItems } from '../../documentation/components/icon-button/features';
import meta from '../../documentation/components/icon-button/meta';

export default class ComponentsCollectionsIconButtonRoute extends Route {
  model() {
    return {
      features: IconButtonFeatureItems,
      meta
    };
  }
}
