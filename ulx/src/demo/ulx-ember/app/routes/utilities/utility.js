import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class UtilitiesUtilityRoute extends Route {
  @service ulsDocs;

  model({ slug }) {
    return this.ulsDocs.getUtility(slug);
  }
}
