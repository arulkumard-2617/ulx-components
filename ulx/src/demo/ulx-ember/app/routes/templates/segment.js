import Route from '@ember/routing/route';
import { SegmentFeatureItems } from '../../documentation/templates/segment/features';
import meta from '../../documentation/templates/segment/meta';

export default class TemplatesSegmentRoute extends Route {
  model() {
    return {
      features: SegmentFeatureItems,
      meta
    };
  }
}
