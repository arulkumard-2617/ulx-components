import Component from '@glimmer/component';
import { UlxDatePicker } from 'ulx-components';

export default class DisabledDatepickerDemo extends Component {
  value = new Date(2026, 3, 10);

  <template>
    <div class="w-252">
      <UlxDatePicker @value={{this.value}} @disabled={{true}} />
    </div>
  </template>
}
