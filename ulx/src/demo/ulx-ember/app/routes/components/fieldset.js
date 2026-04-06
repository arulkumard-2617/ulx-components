import Route from '@ember/routing/route';
import { FieldsetFeatureItems } from '../../documentation/components/fieldset/features';
import meta from '../../documentation/components/fieldset/meta';
import builderSchema from '../../documentation/components/fieldset/builder-schema';

export default class ComponentsFieldsetRoute extends Route {
  model() {
    return {
      features: FieldsetFeatureItems,
      meta,
      builderSchema,
    };
  }
}
