import Route from '@ember/routing/route';
import { WordBreakUtilities } from '@uls/foundation';

export default class UtilitiesWordBreakRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactWordBreakUtilities: WordBreakUtilities,
      reactProps: {}
    };
  }
}

