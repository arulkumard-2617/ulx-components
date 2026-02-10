import Route from '@ember/routing/route';
import { ProgressSpinnerFeatureItems } from '../../../documentation/components/elements/progressspinner/features';
import meta from '../../../documentation/components/elements/progressspinner/meta';
import progressspinnerBuilderSchema from '../../../documentation/components/elements/progressspinner/builder-schema';

export default class ComponentsElementsProgressspinnerRoute extends Route {
  model() {
    return {
      features: ProgressSpinnerFeatureItems,
      meta,
      builderSchema: progressspinnerBuilderSchema,
    };
  }
}
