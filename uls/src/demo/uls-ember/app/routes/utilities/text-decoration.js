import Route from '@ember/routing/route';
import { TextDecoration } from '@uls/foundation';

export default class UtilitiesTextDecorationRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactTextDecoration: TextDecoration,
      reactProps: {}
    };
  }
}

