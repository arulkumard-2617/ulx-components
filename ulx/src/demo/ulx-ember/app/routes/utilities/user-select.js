import Route from '@ember/routing/route';
import { UserSelectUtilities } from '@ulx/foundation';

export default class UtilitiesUserSelectRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactUserSelectUtilities: UserSelectUtilities,
      reactProps: {}
    };
  }
}

