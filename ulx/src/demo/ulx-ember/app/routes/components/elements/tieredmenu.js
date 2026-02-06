import Route from '@ember/routing/route';
import { TieredmenuFeatureItems } from '../../../documentation/components/elements/tieredmenu/features';
import meta from '../../../documentation/components/elements/tieredmenu/meta';

export default class ComponentsElementsTieredmenuRoute extends Route {
  model() {
    return {
      features: TieredmenuFeatureItems,
      meta: meta,
    };
  }
}
