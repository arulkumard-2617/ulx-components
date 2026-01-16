import Route from '@ember/routing/route';
import { WhiteSpaceUtilities } from '@uls/foundation';

export default class UtilitiesWhiteSpaceRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactWhiteSpaceUtilities: WhiteSpaceUtilities,
      reactProps: {}
    };
  }
}

