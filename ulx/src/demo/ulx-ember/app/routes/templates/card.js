import Route from '@ember/routing/route';
import { CardFeatureItems } from '../../template-docs/card/features';

export default class TemplatesCardRoute extends Route {
  model() {
    return {
      title: 'Card Templates',
      description:
        'Card layout templates for session schedules, selectable linked sessions, event listings, and structured summary cards.',
      features: CardFeatureItems
    };
  }
}
