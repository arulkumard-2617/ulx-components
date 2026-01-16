import Route from '@ember/routing/route';
import { Size } from '@uls/foundation';

export default class UtilitiesSizeRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactSize: Size,
      reactProps: {}
    };
  }
}

