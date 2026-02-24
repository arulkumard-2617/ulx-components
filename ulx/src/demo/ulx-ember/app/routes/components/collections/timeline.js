import Route from '@ember/routing/route';
import { TimelineFeatureItems } from '../../../documentation/components/collections/timeline/features';
import meta from '../../../documentation/components/collections/timeline/meta';
import builderSchema from '../../../documentation/components/collections/timeline/builder-schema';

export default class ComponentsCollectionsTimelineRoute extends Route {
  model() {
    return {
      features: TimelineFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
