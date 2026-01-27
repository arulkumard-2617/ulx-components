import Route from '@ember/routing/route';
import { Typography } from '@uls/foundation';

export default class FoundationTypographyRoute extends Route {
  model() {
    return {
      useReactComponents: true,
      ReactTypography: Typography,
      reactProps: {}
    };
  }
}
