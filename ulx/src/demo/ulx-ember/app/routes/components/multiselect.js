import Route from '@ember/routing/route';
import { MultiselectFeatureItems } from '../../documentation/components/multiselect/features';
import meta from '../../documentation/components/multiselect/meta';
import { withMultiselectOverlayFeature } from '../../utils/multiselect-overlay-feature';

export default class ComponentsCollectionsMultiselectRoute extends Route {
  model() {
    return {
      features: withMultiselectOverlayFeature(MultiselectFeatureItems),
      meta: meta
    };
  }
}
