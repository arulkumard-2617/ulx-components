import Route from '@ember/routing/route';
import { TagFeatureItems } from '../../documentation/components/tag/features';
import meta from '../../documentation/components/tag/meta';

export default class ComponentsElementsTagRoute extends Route {
  model() {
    return {
      features: TagFeatureItems,
      meta: meta
    };
  }
}
