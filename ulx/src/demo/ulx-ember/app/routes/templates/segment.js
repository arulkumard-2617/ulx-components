import Route from '@ember/routing/route';
import { SegmentFeatureItems } from '../../template-docs/segment/features';

export default class TemplatesSegmentRoute extends Route {
  model() {
    return {
      title: 'Segment Templates',
      description:
        'Segment layout templates for tinted summary cards, status banners, and grouped metric tiles.',
      features: SegmentFeatureItems
    };
  }
}
