import Route from '@ember/routing/route';
import { InputFeatureItems } from '../../../documentation/components/elements/input/features';
import meta from '../../../documentation/components/elements/input/meta';
import inputBuilderSchema from '../../../documentation/components/elements/input/builder-schema';

export default class ComponentsElementsInputRoute extends Route {
  model() {
    return {
      features: InputFeatureItems,
      meta: meta,
      builderSchema: inputBuilderSchema,
    };
  }
}
