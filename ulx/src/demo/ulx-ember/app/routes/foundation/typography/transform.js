import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class FoundationTypographyTransformRoute extends Route {
  @service ulsDocs;

  model() {
    return this.ulsDocs.getTypographySection('transform');
  }
}
