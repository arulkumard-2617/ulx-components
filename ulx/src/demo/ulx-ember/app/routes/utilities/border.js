import Route from '@ember/routing/route';
import { BorderUtilities } from '@ulx/foundation';

export default class UtilitiesBorderRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactBorderUtilities: BorderUtilities,
      reactProps: {}
    };
  }
}

