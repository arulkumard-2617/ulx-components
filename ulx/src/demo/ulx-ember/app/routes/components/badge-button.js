import Route from '@ember/routing/route';
import { BadgeButtonFeatureItems } from '../../documentation/components/badge-button/features';
import meta from '../../documentation/components/badge-button/meta';

export default class ComponentsCollectionsBadgeButtonRoute extends Route {
  model() {
    return {
      features: BadgeButtonFeatureItems,
      meta,
    };
  }
}
