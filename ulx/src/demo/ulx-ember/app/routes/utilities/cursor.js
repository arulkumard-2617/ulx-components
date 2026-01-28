import Route from '@ember/routing/route';
import { Cursor } from '@ulx/foundation';

export default class UtilitiesCursorRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactCursor: Cursor,
      reactProps: {}
    };
  }
}

