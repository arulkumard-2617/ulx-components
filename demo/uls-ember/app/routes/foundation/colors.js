import Route from '@ember/routing/route';
import { Colors } from '@uls/foundation';

export default class FoundationColorsRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactColors: Colors,
      reactProps: {}
    };
  }
}
