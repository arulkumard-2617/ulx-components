export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDatePicker } from 'ulx-components';

export default class DisablefunctionDatepickerDemo extends Component {
  @tracked value = null;

  disable = [
    (d) => {
      return d.getDay() === 0 || d.getDay() === 6;
    },
  ];

  flatpickrOptions = {
    locale: { firstDayOfWeek: 1 },
  };

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
        @flatpickrOptions={{this.flatpickrOptions}}
      />
    </div>
  </template>
}

`;
