import Route from '@ember/routing/route';
import { PopupFeatureItems } from '../../documentation/components/popup/features';
import meta from '../../documentation/components/popup/meta';
import builderSchema from '../../documentation/components/popup/builder-schema';

export default class ComponentsModulesPopupRoute extends Route {
  model() {
    return {
      features: PopupFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
