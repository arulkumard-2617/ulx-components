export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDateRangePicker } from 'ulx-components';

export default class PreloadDaterangeDemo extends Component {
  @tracked value = [new Date(2026, 5, 10), new Date(2026, 5, 20)];

  @action
  onChange(dates) {
    this.value = dates ?? [];
  }

  <template>
    <div class="w-300">
      <UlxDateRangePicker @value={{this.value}} @onChange={{this.onChange}} />
    </div>
  </template>
}

`;
