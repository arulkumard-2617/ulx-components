import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class FoundationTypographyIndexRoute extends Route {
  @service('router') router;
  beforeModel() {
    this.router.replaceWith('foundation.typography.headings');
  }
}
