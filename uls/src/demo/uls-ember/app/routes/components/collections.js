import Route from '@ember/routing/route';

export default class ComponentsCollectionsRoute extends Route {
  model() {
    return {
      useReactComponents: false,
      reactProps: {}
    };
  }
}

