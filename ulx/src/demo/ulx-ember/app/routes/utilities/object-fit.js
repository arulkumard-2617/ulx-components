import Route from '@ember/routing/route';
import { ObjectFitUtilities } from '@ulx/foundation';

export default class UtilitiesObjectFitRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactObjectFitUtilities: ObjectFitUtilities,
      reactProps: {}
    };
  }
}

