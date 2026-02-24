import Route from '@ember/routing/route';
import { CheckboxFeatureItems } from '../../../documentation/components/elements/checkbox/features';
import meta from '../../../documentation/components/elements/checkbox/meta';

export default class ComponentsElementsCheckboxRoute extends Route {
  model() {
    return {
      features: CheckboxFeatureItems,
      meta: meta,
    };
  }
}
