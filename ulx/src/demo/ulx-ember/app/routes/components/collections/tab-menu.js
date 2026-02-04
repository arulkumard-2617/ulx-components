import Route from '@ember/routing/route';
import { TabMenuFeatureItems } from '../../../documentation/components/collections/tab-menu/features';
import meta from '../../../documentation/components/collections/tab-menu/meta';
import builderSchema from '../../../documentation/components/collections/tab-menu/builder-schema';

export default class ComponentsCollectionsTabMenuRoute extends Route {
  model() {
    return {
      features: TabMenuFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
