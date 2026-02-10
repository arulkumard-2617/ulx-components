import Route from '@ember/routing/route';
import { RadioFeatureItems } from '../../../documentation/components/elements/radio/features';
import meta from '../../../documentation/components/elements/radio/meta';
import builderSchema from '../../../documentation/components/elements/radio/builder-schema';

export default class ComponentsElementsRadioRoute extends Route {
  model() {
    return {
      features: RadioFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
