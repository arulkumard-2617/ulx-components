import Route from '@ember/routing/route';
import { StepsFeatureItems } from '../../../documentation/components/modules/steps/features';
import meta from '../../../documentation/components/modules/steps/meta';
import builderSchema from '../../../documentation/components/modules/steps/builder-schema';

export default class ComponentsModulesStepsRoute extends Route {
  model() {
    return {
      features: StepsFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
