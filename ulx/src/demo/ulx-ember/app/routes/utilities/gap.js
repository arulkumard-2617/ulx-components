// app/routes/utilities/gap.js
import Route from '@ember/routing/route';
import { Gap } from '@ulx/foundation';

export default class UtilitiesGapRoute extends Route {
    model() {
        return {
          useReactComponents: true,
          ReactGap: Gap,
          reactProps: {}
        };
    }
}