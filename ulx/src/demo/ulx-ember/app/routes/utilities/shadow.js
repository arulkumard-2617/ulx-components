import Route from '@ember/routing/route';
import { ShadowUtilities } from '@ulx/foundation';

export default class UtilitiesShadowRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactShadowUtilities: ShadowUtilities,
      reactProps: {}
    };
  }
}

