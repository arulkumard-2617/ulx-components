import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class FoundationTypographyLineHeightRoute extends Route {
  @service ulsDocs;

  model() {
    return this.ulsDocs.getTypographySection('line-height');
  }
}
