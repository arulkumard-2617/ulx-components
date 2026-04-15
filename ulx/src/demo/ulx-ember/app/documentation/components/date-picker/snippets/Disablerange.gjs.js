export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDatePicker } from 'ulx-components';

export default class DisablerangeDatepickerDemo extends Component {
  @tracked value = null;
  disable = [
    { from: '2026-04-01', to: '2026-05-01' },
    { from: '2026-09-01', to: '2026-10-01' },
  ];

  @action
  onChange(dates) {
    this.value = dates?.[0] ?? null;
  }

  <template>
    <div class="w-250">
      <UlxDatePicker
        @value={{this.value}}
        @onChange={{this.onChange}}
        @disable={{this.disable}}
      />
    </div>
  </template>
}

`;
