import Route from '@ember/routing/route';
import { SegmentFeatureItems } from '../../../documentation/components/collections/segment/features';
import meta from '../../../documentation/components/collections/segment/meta';
import builderSchema from '../../../documentation/components/collections/segment/builder-schema';

export default class ComponentsCollectionsSegmentRoute extends Route {
  model() {
    return {
      features: SegmentFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
