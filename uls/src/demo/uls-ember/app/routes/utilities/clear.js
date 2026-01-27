import Route from '@ember/routing/route';
import { ClearUtilities } from '@uls/foundation';

export default class UtilitiesClearRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactClearUtilities: ClearUtilities,
      reactProps: {}
    };
  }
}

