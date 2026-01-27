import Route from '@ember/routing/route';
import { FilterUtilities } from '@uls/foundation';

export default class UtilitiesFilterRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactFilterUtilities: FilterUtilities,
      reactProps: {}
    };
  }
}

