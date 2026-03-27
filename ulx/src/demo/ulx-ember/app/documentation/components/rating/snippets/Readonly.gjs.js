export default `
import Component from '@glimmer/component';
import { UlxRating } from 'ulx-components';

export default class ReadonlyRatingDemo extends Component {
  <template>
    <UlxRating @value={{5}} @readOnly={{true}} @cancel={{false}} />
  </template>
}

`;
