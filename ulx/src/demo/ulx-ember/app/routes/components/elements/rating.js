import Route from '@ember/routing/route';
import { RatingFeatureItems } from '../../../documentation/components/elements/rating/features';
import meta from '../../../documentation/components/elements/rating/meta';

export default class ComponentsElementsRatingRoute extends Route {
  model() {
    return {
      features: RatingFeatureItems,
      meta: meta,
    };
  }
}
