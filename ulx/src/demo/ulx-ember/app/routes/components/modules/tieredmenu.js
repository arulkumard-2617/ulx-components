import Route from '@ember/routing/route';
import { TieredmenuFeatureItems } from '../../../documentation/components/modules/tieredmenu/features';
import meta from '../../../documentation/components/modules/tieredmenu/meta';

export default class ComponentsModulesTieredmenuRoute extends Route {
  model() {
    return {
      features: TieredmenuFeatureItems,
      meta: meta,
    };
  }
}
