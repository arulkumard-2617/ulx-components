import Route from '@ember/routing/route';
import { VisibilityUtilities } from '@uls/foundation';

export default class UtilitiesVisibilityRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactVisibilityUtilities: VisibilityUtilities,
      reactProps: {}
    };
  }
}

