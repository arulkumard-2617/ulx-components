import Route from '@ember/routing/route';
import { FormFeatureItems } from '../../documentation/components/form/features';
import meta from '../../documentation/components/form/meta';

export default class ComponentsCollectionsFormRoute extends Route {
  model() {
    return {
      features: FormFeatureItems,
      meta: meta
    };
  }
}
