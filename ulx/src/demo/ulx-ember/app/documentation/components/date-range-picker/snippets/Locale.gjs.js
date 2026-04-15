export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { Spanish } from 'flatpickr/dist/l10n/es.js';
import { UlxDateRangePicker } from 'ulx-components';

export default class LocaleDaterangeDemo extends Component {
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
        @locale={{Spanish}}
        @dateFormat="d/m/Y"
      />
    </div>
  </template>
}

`;
