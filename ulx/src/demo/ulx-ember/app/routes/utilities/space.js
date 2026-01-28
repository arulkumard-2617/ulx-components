import Route from '@ember/routing/route';
import { Space } from '@ulx/foundation';

export default class UtilitiesSpaceRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactSpace: Space,
      reactProps: {}
    };
  }
}

