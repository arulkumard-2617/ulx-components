import Route from '@ember/routing/route';
import { Position } from '@uls/foundation';

export default class UtilitiesPositionRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactPosition: Position,
      reactProps: {}
    };
  }
}

