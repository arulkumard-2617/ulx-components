import Route from '@ember/routing/route';
import { TextAlign } from '@uls/foundation';

export default class UtilitiesTextAlignRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactTextAlign: TextAlign,
      reactProps: {}
    };
  }
}

