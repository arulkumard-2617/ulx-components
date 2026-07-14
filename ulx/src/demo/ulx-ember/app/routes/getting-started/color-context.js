import Route from '@ember/routing/route';
import colorContextSchema from 'ulx-ember/data/color-context-schema';

export default class GettingStartedColorContextRoute extends Route {
  model() {
    return colorContextSchema;
  }
}
