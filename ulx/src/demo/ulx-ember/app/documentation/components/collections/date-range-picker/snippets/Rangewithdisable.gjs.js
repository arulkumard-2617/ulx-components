export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDateRangePicker } from 'ulx-components';

export default class RangewithdisableDaterangeDemo extends Component {
  @tracked value = [];

  disable = [
    (date) => {
      return date.getDate() % 8 === 0;
    },
  ];

  @action
  onChange(dates) {
    this.value = dates ?? [];
  }

  <template>
    <div class="w-300">
      <UlxDateRangePicker
        @value={{this.value}}
        @onChange={{this.onChange}}
        @minDate="today"
        @disable={{this.disable}}
      />
    </div>
  </template>
}

`;
