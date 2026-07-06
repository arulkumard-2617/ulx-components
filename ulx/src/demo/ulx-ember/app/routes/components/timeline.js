import Route from '@ember/routing/route';
import { TimelineFeatureItems } from '../../documentation/components/timeline/features';
import meta from '../../documentation/components/timeline/meta';

export default class ComponentsCollectionsTimelineRoute extends Route {
  model() {
    return {
      features: TimelineFeatureItems,
      meta: meta
    };
  }
}
