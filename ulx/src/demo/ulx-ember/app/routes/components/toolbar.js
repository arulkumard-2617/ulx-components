import Route from '@ember/routing/route';
import { ToolbarFeatureItems } from '../../documentation/components/toolbar/features';
import meta from '../../documentation/components/toolbar/meta';

export default class ComponentsCollectionsToolbarRoute extends Route {
  model() {
    return {
      features: ToolbarFeatureItems,
      meta
    };
  }
}

