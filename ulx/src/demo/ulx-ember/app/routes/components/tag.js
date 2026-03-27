import Route from '@ember/routing/route';
import { TagFeatureItems } from '../../documentation/components/tag/features';
import meta from '../../documentation/components/tag/meta';
import builderSchema from '../../documentation/components/tag/builder-schema';

export default class ComponentsElementsTagRoute extends Route {
  model() {
    return {
      features: TagFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
