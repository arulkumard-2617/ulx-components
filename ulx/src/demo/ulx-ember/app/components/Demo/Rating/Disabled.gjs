import Component from '@glimmer/component';
import { UlxRating } from 'ulx-components';

export default class DisabledRatingDemo extends Component {
  <template>
    <UlxRating @value={{5}} @disabled={{true}} @cancel={{false}} />
  </template>
}
