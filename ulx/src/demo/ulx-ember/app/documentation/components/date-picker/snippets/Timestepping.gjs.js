export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDatePicker } from 'ulx-components';

export default class TimesteppingDatepickerDemo extends Component {
  @tracked value = null;

  @action
  onChange(dates) {
    this.value = dates?.[0] ?? null;
  }

  <template>
    <div class="w-250">
      <UlxDatePicker
        @value={{this.value}}
        @onChange={{this.onChange}}
        @enableTime={{true}}
        @dateFormat="Y-m-d H:i"
        @minuteIncrement={{15}}
        @hourIncrement={{2}}
      />
    </div>
  </template>
}

`;
