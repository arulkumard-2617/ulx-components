import Route from '@ember/routing/route';
import { EmptyStateFeatureItems } from '../../documentation/components/empty-state/features';
import meta from '../../documentation/components/empty-state/meta';
import builderSchema from '../../documentation/components/empty-state/builder-schema';

export default class ComponentsElementsEmptyStateRoute extends Route {
  model() {
    return {
      features: EmptyStateFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
