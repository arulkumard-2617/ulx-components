import Route from '@ember/routing/route';
import { TextDecoration } from '@ulx/foundation';

export default class UtilitiesTextDecorationRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactTextDecoration: TextDecoration,
      reactProps: {}
    };
  }
}

