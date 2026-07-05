import Route from '@ember/routing/route';
import { AvatarFeatureItems } from '../../documentation/components/avatar/features';
import meta from '../../documentation/components/avatar/meta';

export default class ComponentsElementsAvatarRoute extends Route {
  model() {
    return {
      features: AvatarFeatureItems,
      meta: meta
    };
  }
}
