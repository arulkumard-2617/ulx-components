import Route from '@ember/routing/route';
import { FloatUtilities } from '@uls/foundation';

export default class UtilitiesFloatRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactFloatUtilities: FloatUtilities,
      reactProps: {}
    };
  }
}

