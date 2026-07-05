import Route from '@ember/routing/route';
import { DividerFeatureItems } from '../../documentation/components/divider/features';
import meta from '../../documentation/components/divider/meta';

export default class ComponentsElementsDividerRoute extends Route {
  model() {
    return {
      features: DividerFeatureItems,
      meta: meta
    };
  }
}

