import Route from '@ember/routing/route';
import { DividerFeatureItems } from '../../../documentation/components/elements/divider/features';
import meta from '../../../documentation/components/elements/divider/meta';
import builderSchema from '../../../documentation/components/elements/divider/builder-schema';

export default class ComponentsElementsDividerRoute extends Route {
  model() {
    return {
      features: DividerFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}

