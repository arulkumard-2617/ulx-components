import Route from '@ember/routing/route';
import { ChipInputFeatureItems } from '../../documentation/components/chip-input/features';
import meta from '../../documentation/components/chip-input/meta';

export default class ComponentsChipInputRoute extends Route {
  model() {
    return {
      features: ChipInputFeatureItems,
      meta: meta
    };
  }
}
