import Route from '@ember/routing/route';
import { RatingFeatureItems } from '../../documentation/components/rating/features';
import meta from '../../documentation/components/rating/meta';

export default class ComponentsElementsRatingRoute extends Route {
  model() {
    return {
      features: RatingFeatureItems,
      meta: meta
    };
  }
}
