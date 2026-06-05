import Route from '@ember/routing/route';
import { TableFeatureItems } from '../../template-docs/table/features';

export default class TemplatesTableRoute extends Route {
  model() {
    return {
      title: 'Table Templates',
      description:
        'Table layout templates for structured data, pricing breakdowns, and summary rows.',
      features: TableFeatureItems,
    };
  }
}
