import Route from '@ember/routing/route';
import { DropdownFeatureItems } from '../../documentation/components/dropdown/features';
import meta from '../../documentation/components/dropdown/meta';
import { withDropdownOverlayFeature } from '../../utils/dropdown-overlay-feature';

export default class ComponentsElementsDropdownRoute extends Route {
  model() {
    return {
      features: withDropdownOverlayFeature(DropdownFeatureItems),
      meta: meta
    };
  }
}
