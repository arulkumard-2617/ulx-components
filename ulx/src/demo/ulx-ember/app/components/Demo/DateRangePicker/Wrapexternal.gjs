import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDateRangePicker } from 'ulx-components';

export default class WrapexternalDaterangeDemo extends Component {
  @tracked value = [];

  @action
  onChange(dates) {
    this.value = dates ?? [];
  }

  <template>
    <div class="w-300">
      <UlxDateRangePicker
        @value={{this.value}}
        @onChange={{this.onChange}}
        @showIcon={{true}}
        @showClearButton={{true}}
      />
    </div>
  </template>
}
