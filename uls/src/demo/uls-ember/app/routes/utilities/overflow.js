import Route from '@ember/routing/route';
import { OverflowUtilities } from '@uls/foundation';

export default class UtilitiesOverflowRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactOverflowUtilities: OverflowUtilities,
      reactProps: {}
    };
  }
}

