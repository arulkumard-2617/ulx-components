import Route from '@ember/routing/route';
import { TextareaFeatureItems } from '../../../documentation/components/elements/textarea/features';
import meta from '../../../documentation/components/elements/textarea/meta';
import textareaBuilderSchema from '../../../documentation/components/elements/textarea/builder-schema';

export default class ComponentsElementsTextareaRoute extends Route {
  model() {
    return {
      features: TextareaFeatureItems,
      meta: meta,
      builderSchema: textareaBuilderSchema,
    };
  }
}
