import Route from '@ember/routing/route';
import { ButtonFeatureItems } from '../../../documentation/components/elements/button/features';
import meta from '../../../documentation/components/elements/button/meta';
import buttonBuilderSchema from '../../../documentation/components/elements/button/builder-schema';

export default class ComponentsElementsButtonRoute extends Route {
  model() {
    return {
      features: ButtonFeatureItems,
      meta,
      builderSchema: buttonBuilderSchema,
    };
  }
}
