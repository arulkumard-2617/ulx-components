import Route from '@ember/routing/route';
import { CheckboxFeatureItems } from '../../documentation/components/checkbox/features';
import meta from '../../documentation/components/checkbox/meta';

export default class ComponentsElementsCheckboxRoute extends Route {
  model() {
    return {
      features: CheckboxFeatureItems,
      meta: meta
    };
  }
}
