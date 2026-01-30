import Route from '@ember/routing/route';
import { TestCompFeatureItems } from '../../../documentation/components/collections/test-comp/features';
import meta from '../../../documentation/components/collections/test-comp/meta';

export default class ComponentsCollectionsTestCompRoute extends Route {
  model() {
    return {
      features: TestCompFeatureItems,
      meta: meta
    };
  }
}
