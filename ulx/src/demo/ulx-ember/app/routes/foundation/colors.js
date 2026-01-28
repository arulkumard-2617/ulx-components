import Route from '@ember/routing/route';
import { Colors } from '@ulx/foundation';

export default class FoundationColorsRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactColors: Colors,
      reactProps: {}
    };
  }
}
