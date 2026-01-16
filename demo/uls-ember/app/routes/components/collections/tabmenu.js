import Route from '@ember/routing/route';
import { TabMenuFeatureItems } from '../../../documentation/components/collections/tabmenu/features';
import meta from '../../../documentation/components/collections/tabmenu/meta';

export default class ComponentsCollectionsTabmenuRoute extends Route {
  model() {
    return {
      features: TabMenuFeatureItems,
      meta: meta
    };
  }
}

