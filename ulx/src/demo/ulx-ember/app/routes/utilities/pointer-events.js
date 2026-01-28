import Route from '@ember/routing/route';
import { PointerEventsUtilities } from '@ulx/foundation';

export default class UtilitiesPointerEventsRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactPointerEventsUtilities: PointerEventsUtilities,
      reactProps: {}
    };
  }
}

