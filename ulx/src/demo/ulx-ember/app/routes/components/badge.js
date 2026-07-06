import Route from '@ember/routing/route';
import { BadgeFeatureItems } from '../../documentation/components/badge/features';
import meta from '../../documentation/components/badge/meta';

export default class ComponentsElementsBadgeRoute extends Route {
  model() {
    return {
      features: BadgeFeatureItems,
      meta: meta
    };
  }
}
