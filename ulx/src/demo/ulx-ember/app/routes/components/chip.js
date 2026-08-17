import Route from '@ember/routing/route';
import { ChipFeatureItems } from '../../documentation/components/chip/features';
import meta from '../../documentation/components/chip/meta';

export default class ComponentsElementsChipRoute extends Route {
  model() {
    return {
      features: ChipFeatureItems,
      meta: meta
    };
  }
}
