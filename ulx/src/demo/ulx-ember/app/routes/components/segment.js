import Route from '@ember/routing/route';
import { SegmentFeatureItems } from '../../documentation/components/segment/features';
import meta from '../../documentation/components/segment/meta';

export default class ComponentsCollectionsSegmentRoute extends Route {
  model() {
    return {
      features: SegmentFeatureItems,
      meta: meta
    };
  }
}
