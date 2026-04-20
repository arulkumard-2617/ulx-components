export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDatePicker } from 'ulx-components';

export default class MultipleconjunctionDatepickerDemo extends Component {
  @tracked value = [];

  @action
  onChange(dates) {
    this.value = dates ?? [];
  }

  <template>
    <div class="w-250">
      <UlxDatePicker
        @mode="multiple"
        @value={{this.value}}
        @onChange={{this.onChange}}
        @conjunction=" :: "
      />
    </div>
  </template>
}

`;
