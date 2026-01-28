import Route from '@ember/routing/route';
import { VerticalAlign } from '@ulx/foundation';

export default class UtilitiesVerticalAlignRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactVerticalAlign: VerticalAlign,
      reactProps: {}
    };
  }
}

