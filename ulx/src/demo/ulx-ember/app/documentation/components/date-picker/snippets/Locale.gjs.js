export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { Spanish } from 'flatpickr/dist/l10n/es.js';
import { UlxDatePicker } from 'ulx-components';

export default class LocaleDatepickerDemo extends Component {
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
        @locale={{Spanish}}
        @dateFormat="d/m/Y"
      />
    </div>
  </template>
}

`;
