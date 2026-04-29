export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDatePicker } from 'ulx-components';

export default class MultiplepreloadDatepickerDemo extends Component {
  @tracked value = [new Date(2026, 5, 8), new Date(2026, 6, 12)];

  @action
  onChange(dates) {
    this.value = dates ?? [];
  }

  <template>
    <div class="w-252">
      <UlxDatePicker
        @mode="multiple"
        @value={{this.value}}
        @onChange={{this.onChange}}
        @defaultDate={{this.value}}
      />
    </div>
  </template>
}

`;
