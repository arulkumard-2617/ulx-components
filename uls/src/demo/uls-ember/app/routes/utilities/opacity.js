import Route from '@ember/routing/route';
import { OpacityUtilities } from '@uls/foundation';

export default class UtilitiesOpacityRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactOpacityUtilities: OpacityUtilities,
      reactProps: {}
    };
  }
}

