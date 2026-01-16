import Route from '@ember/routing/route';
import { TextTransform } from '@uls/foundation';

export default class UtilitiesTextTransformRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactTextTransform: TextTransform,
      reactProps: {}
    };
  }
}

