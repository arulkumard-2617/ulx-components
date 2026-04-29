import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDatePicker } from 'ulx-components';

export default class FilledDatepickerDemo extends Component {
  @tracked value = new Date(2026, 8, 1);

  @action
  onChange(dates) {
    this.value = dates?.[0] ?? null;
  }

  <template>
    <div class="w-252">
      <UlxDatePicker
        @value={{this.value}}
        @onChange={{this.onChange}}
        @readonly={{true}}
      />
    </div>
  </template>
}
