export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDatePicker } from 'ulx-components';

export default class MinmaxDatepickerDemo extends Component {
  @tracked value = null;
  minDate = new Date(2026, 0, 1);
  maxDate = new Date(2026, 11, 31);

  @action
  onChange(dates) {
    this.value = dates?.[0] ?? null;
  }

  <template>
    <div class="w-252">
      <UlxDatePicker
        @value={{this.value}}
        @onChange={{this.onChange}}
        @minDate={{this.minDate}}
        @maxDate={{this.maxDate}}
        @readOnlyInput={{true}}
      />
    </div>
  </template>
}

`;
