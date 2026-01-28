import Route from '@ember/routing/route';
import { Flex } from '@ulx/foundation';

export default class UtilitiesFlexRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactFlex: Flex,
      reactProps: {}
    };
  }
}

