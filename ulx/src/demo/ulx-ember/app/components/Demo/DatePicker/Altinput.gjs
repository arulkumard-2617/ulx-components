import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDatePicker } from 'ulx-components';

export default class AltinputDatepickerDemo extends Component {
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
        @altInput={{true}}
        @dateFormat="Y-m-d"
        @altFormat="F j, Y"
      />
    </div>
  </template>
}
