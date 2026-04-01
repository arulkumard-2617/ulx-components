import Route from '@ember/routing/route';
import { ChipFeatureItems } from '../../documentation/components/chip/features';
import meta from '../../documentation/components/chip/meta';
import builderSchema from '../../documentation/components/chip/builder-schema';

export default class ComponentsElementsChipRoute extends Route {
  model() {
    return {
      features: ChipFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
