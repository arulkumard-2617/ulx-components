import Route from '@ember/routing/route';
import { TagFeatureItems } from '../../../documentation/components/elements/tag/features';
import meta from '../../../documentation/components/elements/tag/meta';
import builderSchema from '../../../documentation/components/elements/tag/builder-schema';

export default class ComponentsElementsTagRoute extends Route {
  model() {
    return {
      features: TagFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
