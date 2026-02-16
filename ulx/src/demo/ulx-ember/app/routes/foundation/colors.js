import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class FoundationColorsRoute extends Route {
  @service ulsDocs;

  model() {
    return this.ulsDocs.getUtility('colors');
  }
}
