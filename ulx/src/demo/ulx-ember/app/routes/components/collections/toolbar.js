import Route from '@ember/routing/route';
import { ToolbarFeatureItems } from '../../../documentation/components/collections/toolbar/features';
import meta from '../../../documentation/components/collections/toolbar/meta';

export default class ComponentsCollectionsToolbarRoute extends Route {
  model() {
    return {
      features: ToolbarFeatureItems,
      meta,
    };
  }
}

