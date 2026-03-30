import Route from '@ember/routing/route';
import { UlxImageFeatureItems } from '../../documentation/components/ulx-image/features';
import meta from '../../documentation/components/ulx-image/meta';
import builderSchema from '../../documentation/components/ulx-image/builder-schema';

export default class ComponentsUlxImageRoute extends Route {
  model() {
    return {
      features: UlxImageFeatureItems,
      meta,
      builderSchema,
    };
  }
}
