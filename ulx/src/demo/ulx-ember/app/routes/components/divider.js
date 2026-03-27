import Route from '@ember/routing/route';
import { DividerFeatureItems } from '../../documentation/components/divider/features';
import meta from '../../documentation/components/divider/meta';
import builderSchema from '../../documentation/components/divider/builder-schema';

export default class ComponentsElementsDividerRoute extends Route {
  model() {
    return {
      features: DividerFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}

