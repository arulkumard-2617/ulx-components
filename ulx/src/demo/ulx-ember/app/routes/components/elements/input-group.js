import Route from '@ember/routing/route';
import { InputGroupFeatureItems } from '../../../documentation/components/elements/input-group/features';
import meta from '../../../documentation/components/elements/input-group/meta';
import builderSchema from '../../../documentation/components/elements/input-group/builder-schema';

export default class ComponentsElementsInputGroupRoute extends Route {
  model() {
    return {
      features: InputGroupFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
