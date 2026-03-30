import Route from '@ember/routing/route';
import { MultiselectFeatureItems } from '../../documentation/components/multiselect/features';
import meta from '../../documentation/components/multiselect/meta';
import multiselectBuilderSchema from '../../documentation/components/multiselect/builder-schema';
import { withMultiselectOverlayFeature } from '../../utils/multiselect-overlay-feature';

export default class ComponentsCollectionsMultiselectRoute extends Route {
  model() {
    return {
      features: withMultiselectOverlayFeature(MultiselectFeatureItems),
      meta: meta,
      builderSchema: multiselectBuilderSchema,
    };
  }
}
