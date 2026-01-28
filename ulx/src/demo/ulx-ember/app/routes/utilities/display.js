import Route from '@ember/routing/route';
import { Display } from '@ulx/foundation';

export default class UtilitiesDisplayRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactDisplay: Display,
      reactProps: {}
    };
  }
}

