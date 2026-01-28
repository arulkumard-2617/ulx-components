import Route from '@ember/routing/route';
import { GridUtilities } from '@ulx/foundation';

export default class UtilitiesGridRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactGridUtilities: GridUtilities,
      reactProps: {}
    };
  }
}

