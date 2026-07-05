import Route from '@ember/routing/route';
import { TieredmenuFeatureItems } from '../../documentation/components/tieredmenu/features';
import meta from '../../documentation/components/tieredmenu/meta';

export default class ComponentsModulesTieredmenuRoute extends Route {
  model() {
    return {
      features: TieredmenuFeatureItems,
      meta: meta
    };
  }
}
