import Route from '@ember/routing/route';
import { OptionSegmentFeatureItems } from '../../documentation/components/option-segment/features';
import meta from '../../documentation/components/option-segment/meta';
import builderSchema from '../../documentation/components/option-segment/builder-schema';

export default class ComponentsCollectionsOptionSegmentRoute extends Route {
  model() {
    return {
      features: OptionSegmentFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
