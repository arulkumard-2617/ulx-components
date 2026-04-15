import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDatePicker } from 'ulx-components';

export default class DisablespecificDatepickerDemo extends Component {
  @tracked value = null;
  disable = ['2026-06-15', '2026-08-21'];

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
