import Route from '@ember/routing/route';
import { PasswordFeatureItems } from '../../documentation/components/password/features';
import meta from '../../documentation/components/password/meta';

export default class ComponentsElementsPasswordRoute extends Route {
  model() {
    return {
      features: PasswordFeatureItems,
      meta: meta
    };
  }
}
