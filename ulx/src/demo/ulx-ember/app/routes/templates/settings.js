import Route from '@ember/routing/route';
import { SettingsFeatureItems } from '../../documentation/templates/settings/features';
import meta from '../../documentation/templates/settings/meta';

export default class TemplatesSettingsRoute extends Route {
  model() {
    return {
      features: SettingsFeatureItems,
      meta
    };
  }
}
