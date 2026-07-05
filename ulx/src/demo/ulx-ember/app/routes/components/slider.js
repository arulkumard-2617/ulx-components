import Route from '@ember/routing/route';
import { SliderFeatureItems } from '../../documentation/components/slider/features';
import meta from '../../documentation/components/slider/meta';

export default class ComponentsElementsSliderRoute extends Route {
  model() {
    return {
      features: SliderFeatureItems,
      meta: meta
    };
  }
}

