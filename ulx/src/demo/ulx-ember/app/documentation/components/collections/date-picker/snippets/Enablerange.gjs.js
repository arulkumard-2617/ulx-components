export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDatePicker } from 'ulx-components';

export default class EnablerangeDatepickerDemo extends Component {
  @tracked value = null;
  enable = [{ from: '2026-05-01', to: '2026-05-31' }];

  @action
  onChange(dates) {
    this.value = dates?.[0] ?? null;
  }

  <template>
    <div class="w-252">
      <UlxDatePicker
        @value={{this.value}}
        @onChange={{this.onChange}}
        @enable={{this.enable}}
      />
    </div>
  </template>
}

`;
