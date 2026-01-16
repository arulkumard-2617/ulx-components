import Route from '@ember/routing/route';
import { LineClampUtilities } from '@uls/foundation';

export default class UtilitiesLineClampRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactLineClampUtilities: LineClampUtilities,
      reactProps: {}
    };
  }
}

