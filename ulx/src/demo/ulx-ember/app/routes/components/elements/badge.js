import Route from '@ember/routing/route';
import { BadgeFeatureItems } from '../../../documentation/components/elements/badge/features';
import meta from '../../../documentation/components/elements/badge/meta';
import builderSchema from '../../../documentation/components/elements/badge/builder-schema';

export default class ComponentsElementsBadgeRoute extends Route {
  model() {
    return {
      features: BadgeFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
