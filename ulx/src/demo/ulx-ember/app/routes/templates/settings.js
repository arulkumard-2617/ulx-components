import Route from '@ember/routing/route';
import { SettingsFeatureItems } from '../../template-docs/settings/features';

export default class TemplatesSettingsRoute extends Route {
  model() {
    return {
      title: 'Settings Templates',
      description:
        'Settings page layouts for portal configuration rows with toggles, descriptions, and inline actions.',
      features: SettingsFeatureItems
    };
  }
}
