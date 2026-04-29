export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDatePicker } from 'ulx-components';

export default class MultipleDatepickerDemo extends Component {
  @tracked value = [];

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
        @readOnlyInput={{true}}
      />
    </div>
  </template>
}

`;
