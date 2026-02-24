import Route from '@ember/routing/route';
import { MultiselectFeatureItems } from '../../../documentation/components/elements/multiselect/features';
import meta from '../../../documentation/components/elements/multiselect/meta';
import multiselectBuilderSchema from '../../../documentation/components/elements/multiselect/builder-schema';

export default class ComponentsCollectionsMultiselectRoute extends Route {
  model() {
    return {
      features: MultiselectFeatureItems,
      meta: meta,
      builderSchema: multiselectBuilderSchema,
    };
  }
}
