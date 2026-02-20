import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class FoundationTypographyFontWeightRoute extends Route {
  @service ulsDocs;

  model() {
    return this.ulsDocs.getTypographySection('font-weight');
  }
}
