import Route from '@ember/routing/route';
import { AccordionFeatureItems } from '../../documentation/components/accordion/features';
import meta from '../../documentation/components/accordion/meta';

export default class ComponentsCollectionsAccordionRoute extends Route {
  model() {
    return {
      features: AccordionFeatureItems,
      meta: meta
    };
  }
}
