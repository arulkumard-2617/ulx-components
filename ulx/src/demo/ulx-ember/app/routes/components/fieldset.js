import Route from '@ember/routing/route';
import { FieldsetFeatureItems } from '../../documentation/components/fieldset/features';
import meta from '../../documentation/components/fieldset/meta';

export default class ComponentsFieldsetRoute extends Route {
  model() {
    return {
      features: FieldsetFeatureItems,
      meta
    };
  }
}
