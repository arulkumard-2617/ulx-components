import Route from '@ember/routing/route';
import { ProgressBarFeatureItems } from '../../../documentation/components/elements/progressbar/features';
import meta from '../../../documentation/components/elements/progressbar/meta';
import progressbarBuilderSchema from '../../../documentation/components/elements/progressbar/builder-schema';

export default class ComponentsElementsProgressbarRoute extends Route {
  model() {
    return {
      features: ProgressBarFeatureItems,
      meta,
      builderSchema: progressbarBuilderSchema,
    };
  }
}
