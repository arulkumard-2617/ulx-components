import Route from '@ember/routing/route';
import { DropdownFeatureItems } from '../../../documentation/components/elements/dropdown/features';
import meta from '../../../documentation/components/elements/dropdown/meta';
import dropdownBuilderSchema from '../../../documentation/components/elements/dropdown/builder-schema';
import { withDropdownOverlayFeature } from '../../../utils/dropdown-overlay-feature';

export default class ComponentsElementsDropdownRoute extends Route {
  model() {
    return {
      features: withDropdownOverlayFeature(DropdownFeatureItems),
      meta: meta,
      builderSchema: dropdownBuilderSchema,
    };
  }
}
