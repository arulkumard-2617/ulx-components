import Route from '@ember/routing/route';
import { HoverUtilities } from '@uls/foundation';

export default class UtilitiesHoverRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactHoverUtilities: HoverUtilities,
      reactProps: {}
    };
  }
}

