import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class FoundationTypographyRoute extends Route {
  @service ulsDocs;

  model() {
    return this.ulsDocs.getUtility('typography');
  }
}
