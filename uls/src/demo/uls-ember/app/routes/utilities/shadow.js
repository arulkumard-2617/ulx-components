import Route from '@ember/routing/route';
import { ShadowUtilities } from '@uls/foundation';

export default class UtilitiesShadowRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactShadowUtilities: ShadowUtilities,
      reactProps: {}
    };
  }
}

