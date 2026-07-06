import Route from '@ember/routing/route';
import { TabMenuFeatureItems } from '../../documentation/components/tab-menu/features';
import meta from '../../documentation/components/tab-menu/meta';

export default class ComponentsCollectionsTabMenuRoute extends Route {
  model() {
    return {
      features: TabMenuFeatureItems,
      meta: meta
    };
  }
}
