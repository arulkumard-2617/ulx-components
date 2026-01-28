import Route from '@ember/routing/route';
import { HoverUtilities } from '@ulx/foundation';

export default class UtilitiesHoverRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactHoverUtilities: HoverUtilities,
      reactProps: {}
    };
  }
}

