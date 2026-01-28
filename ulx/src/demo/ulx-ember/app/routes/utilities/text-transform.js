import Route from '@ember/routing/route';
import { TextTransform } from '@ulx/foundation';

export default class UtilitiesTextTransformRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactTextTransform: TextTransform,
      reactProps: {}
    };
  }
}

