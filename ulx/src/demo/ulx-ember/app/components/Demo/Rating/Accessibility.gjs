import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxRating, t } from 'ulx-components';

export default class AccessibilityRatingDemo extends Component {
  @tracked value = 0;

  @action
  handleChange(val) {
    this.value = val;
  }

  <template>
    <div class="ulx-flex ulx-flex-col gap-4">
      <div class="ulx-flex ulx-items-center gap-2">
        <label for="rating-aria-1">{{t "lbl.rating"}}</label>
        <UlxRating
          id="rating-aria-1"
          @value={{this.value}}
          @onChange={{this.handleChange}}
          @ariaLabel={{t "lbl.rating"}}
        />
      </div>
      <div>
        <UlxRating
          @value={{this.value}}
          @onChange={{this.handleChange}}
          @ariaLabel={{t "lbl.rating"}}
        />
      </div>
    </div>
  </template>
}
