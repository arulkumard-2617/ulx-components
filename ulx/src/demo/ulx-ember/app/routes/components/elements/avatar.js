import Route from '@ember/routing/route';
import { AvatarFeatureItems } from '../../../documentation/components/elements/avatar/features';
import meta from '../../../documentation/components/elements/avatar/meta';
import builderSchema from '../../../documentation/components/elements/avatar/builder-schema';

export default class ComponentsElementsAvatarRoute extends Route {
  model() {
    return {
      features: AvatarFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
