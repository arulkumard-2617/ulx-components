import Route from '@ember/routing/route';
import { UlxImageFeatureItems } from '../../../documentation/components/elements/ulx-image/features';
import meta from '../../../documentation/components/elements/ulx-image/meta';
import builderSchema from '../../../documentation/components/elements/ulx-image/builder-schema';

export default class ComponentsElementsUlxImageRoute extends Route {
  model() {
    return {
      features: UlxImageFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
