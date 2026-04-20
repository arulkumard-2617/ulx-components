export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDatePicker } from 'ulx-components';

export default class DatetimelimitsDatepickerDemo extends Component {
  @tracked value = null;

  @action
  onChange(dates) {
    this.value = dates?.[0] ?? null;
  }

  <template>
    <div class="flex flex-col gap-4 w-250">
      <UlxDatePicker
        @value={{this.value}}
        @onChange={{this.onChange}}
        @enableTime={{true}}
        @dateFormat="Y-m-d H:i"
        @minTime="09:00"
        @maxTime="17:30"
      />
    </div>
  </template>
}

`;
