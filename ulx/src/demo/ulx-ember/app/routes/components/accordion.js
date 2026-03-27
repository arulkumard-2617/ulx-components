import Route from '@ember/routing/route';
import { AccordionFeatureItems } from '../../documentation/components/accordion/features';
import meta from '../../documentation/components/accordion/meta';
import builderSchema from '../../documentation/components/accordion/builder-schema';

export default class ComponentsCollectionsAccordionRoute extends Route {
  model() {
    return {
      features: AccordionFeatureItems,
      meta: meta,
      builderSchema: builderSchema
    };
  }
}
