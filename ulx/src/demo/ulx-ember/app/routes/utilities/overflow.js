import Route from '@ember/routing/route';
import { OverflowUtilities } from '@ulx/foundation';

export default class UtilitiesOverflowRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactOverflowUtilities: OverflowUtilities,
      reactProps: {}
    };
  }
}

