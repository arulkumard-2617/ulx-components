import Component from '@glimmer/component';
import { UlxRating } from 'ulx-components';

export default class ScoreRatingDemo extends Component {
  <template>
    <UlxRating @type="score" @value={{5}} />
  </template>
}
