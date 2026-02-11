import Route from '@ember/routing/route';
import { PopupFeatureItems } from '../../../documentation/components/modules/popup/features';
import meta from '../../../documentation/components/modules/popup/meta';
import builderSchema from '../../../documentation/components/modules/popup/builder-schema';

export default class ComponentsModulesPopupRoute extends Route {
  model() {
    return {
      features: PopupFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
