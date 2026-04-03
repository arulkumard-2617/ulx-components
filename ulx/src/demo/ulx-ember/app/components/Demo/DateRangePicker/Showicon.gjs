import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDateRangePicker } from 'ulx-components';

export default class ShowiconDaterangeDemo extends Component {
  @tracked value = [];

  @action
  onChange(dates) {
    this.value = dates ?? [];
  }

  <template>
    <div class="w-300">
      <UlxDateRangePicker @value={{this.value}} @onChange={{this.onChange}} @showIcon={{true}} />
    </div>
  </template>
}
