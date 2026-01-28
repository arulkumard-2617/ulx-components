import Route from '@ember/routing/route';
import { ColorUtilities } from '@ulx/foundation';

export default class UtilitiesColorRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactColorUtilities: ColorUtilities,
      reactProps: {}
    };
  }
}

