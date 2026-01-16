import Route from '@ember/routing/route';
import { ZIndexUtilities } from '@uls/foundation';

export default class UtilitiesZIndexRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactZIndexUtilities: ZIndexUtilities,
      reactProps: {}
    };
  }
}

