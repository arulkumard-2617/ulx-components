import Route from '@ember/routing/route';
import { ChipFeatureItems } from '../../../documentation/components/elements/chip/features';
import meta from '../../../documentation/components/elements/chip/meta';
import builderSchema from '../../../documentation/components/elements/chip/builder-schema';

export default class ComponentsElementsChipRoute extends Route {
  model() {
    return {
      features: ChipFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
