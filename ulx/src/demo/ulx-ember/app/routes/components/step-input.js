import Route from '@ember/routing/route';
import { StepInputFeatureItems } from '../../documentation/components/step-input/features';
import meta from '../../documentation/components/step-input/meta';
import builderSchema from '../../documentation/components/step-input/builder-schema';

export default class ComponentsStepInputRoute extends Route {
  model() {
    return {
      features: StepInputFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
