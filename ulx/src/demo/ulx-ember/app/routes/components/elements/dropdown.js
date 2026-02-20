import Route from '@ember/routing/route';
import { DropdownFeatureItems } from '../../../documentation/components/elements/dropdown/features';
import meta from '../../../documentation/components/elements/dropdown/meta';
import dropdownBuilderSchema from '../../../documentation/components/elements/dropdown/builder-schema';

export default class ComponentsElementsDropdownRoute extends Route {
  model() {
    return {
      features: DropdownFeatureItems,
      meta: meta,
      builderSchema: dropdownBuilderSchema,
    };
  }
}
