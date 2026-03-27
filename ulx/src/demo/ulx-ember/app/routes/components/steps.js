import Route from '@ember/routing/route';
import { StepsFeatureItems } from '../../documentation/components/steps/features';
import meta from '../../documentation/components/steps/meta';
import builderSchema from '../../documentation/components/steps/builder-schema';

export default class ComponentsModulesStepsRoute extends Route {
  model() {
    return {
      features: StepsFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
