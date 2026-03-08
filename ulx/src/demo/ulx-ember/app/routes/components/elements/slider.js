import Route from '@ember/routing/route';
import { SliderFeatureItems } from '../../../documentation/components/elements/slider/features';
import meta from '../../../documentation/components/elements/slider/meta';
import builderSchema from '../../../documentation/components/elements/slider/builder-schema';

export default class ComponentsElementsSliderRoute extends Route {
  model() {
    return {
      features: SliderFeatureItems,
      meta: meta,
      builderSchema: builderSchema,
    };
  }
}

