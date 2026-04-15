export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDatePicker } from 'ulx-components';

export default class EnablespecificDatepickerDemo extends Component {
  @tracked value = null;
  enable = ['2026-07-01', '2026-07-15', '2026-07-22'];

  @action
  onChange(dates) {
    this.value = dates?.[0] ?? null;
  }

  <template>
    <div class="w-250">
      <UlxDatePicker
        @value={{this.value}}
        @onChange={{this.onChange}}
        @enable={{this.enable}}
      />
    </div>
  </template>
}

`;
