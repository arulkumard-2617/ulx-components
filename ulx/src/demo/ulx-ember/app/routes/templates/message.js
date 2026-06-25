import Route from '@ember/routing/route';
import { MessageFeatureItems } from '../../template-docs/message/features';

export default class TemplatesMessageRoute extends Route {
  model() {
    return {
      title: 'Message Templates',
      description:
        'Promotional callouts and inline notify cards used to highlight upgrades, new features, and contextual tips inside side panels and pages.',
      features: MessageFeatureItems
    };
  }
}
