import Route from '@ember/routing/route';
import { UlxIconInputFeatureItems } from '../../../documentation/components/elements/ulx-icon-input/features';
import meta from '../../../documentation/components/elements/ulx-icon-input/meta';
import builderSchema from '../../../documentation/components/elements/ulx-icon-input/builder-schema';

export default class ComponentsElementsUlxIconInputRoute extends Route {
  model() {
    return {
      features: UlxIconInputFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
