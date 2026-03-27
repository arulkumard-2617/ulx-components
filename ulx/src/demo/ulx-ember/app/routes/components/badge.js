import Route from '@ember/routing/route';
import { BadgeFeatureItems } from '../../documentation/components/badge/features';
import meta from '../../documentation/components/badge/meta';
import builderSchema from '../../documentation/components/badge/builder-schema';

export default class ComponentsElementsBadgeRoute extends Route {
  model() {
    return {
      features: BadgeFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
