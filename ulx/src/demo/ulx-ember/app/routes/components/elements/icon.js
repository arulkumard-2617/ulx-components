import Route from '@ember/routing/route';
import { IconFeatureItems } from '../../../documentation/components/elements/icon/features';
import meta from '../../../documentation/components/elements/icon/meta';
import iconBuilderSchema from '../../../documentation/components/elements/icon/builder-schema';

export default class ComponentsElementsIconRoute extends Route {
  model() {
    return {
      features: IconFeatureItems,
      meta,
      builderSchema: iconBuilderSchema,
    };
  }
}
